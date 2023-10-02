const router = require('express').Router();
const Location = require('../models/Location');
const UserWithLocation = require('../models/UserWithLocation');

router.get('/', async (req, res) => {
    return res.send({
        msg: 'Welcome to Geo Attend Server. If you are seeing this. You are at right track.',
        route: ['/api/v1/location/getAverage', '/api/v1/location/add', '/api/v1/location/user']
    });
});

router.get('/getAverage', async (req, res) => {
    const user = req.query.username;
    const users = await UserWithLocation.find({
        username: user ? user : 'lishu'
    }).populate('locations');

    const locations = users[0].locations;
    // get average of all locations of a user
    const average = locations.reduce(
        (acc, curr) => {
            acc.accuracy += curr.accuracy;
            acc.latitude += curr.latitude;
            acc.longitude += curr.longitude;
            acc.speed += curr.speed;
            return acc;
        },
        {
            accuracy: 0,
            latitude: 0,
            longitude: 0,
            speed: 0
        }
    );

    average.accuracy /= locations.length;
    average.latitude /= locations.length;
    average.longitude /= locations.length;
    average.speed /= locations.length;

    res.send({ average, users });
});

router.post('/add', async (req, res) => {
    try {
        const data = req.body;

        const location = new Location({
            username: data?.username,
            ...data
        });

        await location.save();
        console.log(location);

        res.send(data);
    } catch (err) {
        console.log(err);
    }
});

router.post('/user', async (req, res) => {
    try {
        const data = req?.body;

        const userExists = await UserWithLocation.findOne({ username: data?.username });
        if (!userExists) {
            const newUser = new UserWithLocation({
                username: data?.username,
                locations: []
            });
            await newUser.save();
        }

        const userWithLocation = await UserWithLocation.findOne({ username: data?.username });

        console.log(userWithLocation);

        const location = new Location({
            username: data?.username,
            accuracy: data?.accuracy,
            heading: data?.heading,
            latitude: data?.latitude,
            longitude: data?.longitude,
            speed: data?.speed,
            timestamp: data?.timestamp
        });
        await location.save();

        // save location inside userWithLocation
        userWithLocation.locations.push(location);

        await userWithLocation.save();
        console.log(userWithLocation);
        res.send({});
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
