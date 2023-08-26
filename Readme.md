# Problem why this project is not possible

-   Web app can't access location in background
-   Web app can't access location when screen is off
-   Web app can't access location when app is closed
-   Web app can't access location when app is not in use
-   Web app can't access location when app is not in foreground
-   Web app can't access location when app is not in focus

# Project Summary (NEVER OVER-ENGINEER)

# GeoAttend: Revolutionizing Attendance with Geofencing

Introducing **GeoAttend**, a cutting-edge Geospatial Attendance System designed to streamline attendance tracking for organizations and events of all sizes. With a robust set of features and a
user-friendly interface, GeoAttend ensures accurate and efficient attendance management through advanced geofencing technology.

## Key Features:

-   **Diverse Organizational Support:** GeoAttend caters to a wide range of organizations, including universities, event halls, classrooms, and more, offering seamless attendance management for
    hundreds of events across different locations.

-   **Event-Centric Approach:** The platform allows users to view upcoming events, subscribe to them, and access essential details such as event location and time.

-   **Precise Geolocation:** Leveraging geofencing technology, GeoAttend accurately detects user presence within predefined event locations, ensuring attendance records reflect real-time
    participation.

-   **User-Centric Experience:** Users, whether students, teachers, admins, or guests, can effortlessly mark their attendance by being present at the event location during the specified time.

-   **Admin Empowerment:** Administrators have full control over event creation, location setting, and event scheduling. They can also add users to events, ensuring comprehensive event management.

-   **Adaptive Attendance Scenarios:** GeoAttend intelligently handles various attendance scenarios, including early arrivals, latecomers, and departures. Users' attendance status is determined based
    on their entry and exit times in relation to event schedules.

-   **Teacher Overrides:** Teachers have the flexibility to manually mark students' attendance with a simple click of a button, providing an additional layer of control and accuracy.

## Benefits:

-   **Efficiency:** GeoAttend streamlines attendance tracking, reducing the administrative burden on organizations and ensuring accurate attendance records.

-   **Transparency:** Users can access event information and monitor their attendance status, fostering transparency and engagement.

-   **Accuracy:** Geofencing technology guarantees precise attendance monitoring, eliminating manual errors and ensuring fairness.

-   **Flexibility:** The system adapts to various attendance scenarios, accommodating early arrivals, latecomers, and departures.

-   **User-Friendly:** The intuitive interface makes GeoAttend accessible to users of all levels, promoting seamless adoption and utilization.

## Inspired by Innovation:

GeoAttend draws inspiration from successful applications such as railway app UTS, food delivery apps, and ride-sharing platforms like Uber and OLA. By incorporating advanced geofencing technology,
GeoAttend revolutionizes traditional attendance management, bringing organizations into the modern age of efficient and accurate event tracking.

For more information and a live demo, visit our [website](https://geoattend.lishugupta.in/) and experience the future of attendance management with GeoAttend.

## How is GeoAttend Different?

GeoAttend is a unique attendance management system that leverages geofencing technology to ensure accurate and efficient attendance tracking. Unlike traditional attendance systems, GeoAttend does not
require users to manually mark their attendance. Instead, the system automatically detects user presence within predefined event locations, eliminating the need for manual attendance marking and
reducing the administrative burden on organizations.

GeoAttend also offers a diverse set of features, including event creation, location setting, event scheduling, and user management, empowering administrators to manage events with ease. The platform
also caters to a wide range of organizations, including universities, event halls, classrooms, and more, offering seamless attendance management for hundreds of events across different locations.

## Technical Details:

### Technologies Used:

-   **Frontend:** React, Redux, Material UI, React Router, React Hooks, React Context API, React Leaflet, React Geolocation, React Google Maps, React Google Charts, React Google Login, React Google
    Places Autocomplete, React Google Recaptcha, React Google Maps Loader, React Google Maps API, React Google Maps Directions, React Google Maps Loader

-   **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Nodemailer, Nodemailer Sendgrid Transport, Nodemon, Concurrently, Axios, Dotenv, Cors, Body Parser, Cookie Parser, Multer, Multer
    S3, AWS SDK, AWS S3, GeoLib, GeoLib Clean Coordinates, GeoLib Get Center, GeoLib Get Bounding Box, GeoLib Get Distance, GeoLib Get Rhumb Line, GeoLib Get Rhumb Line Between, GeoLib Get Rhumb Line
    Point, GeoLib Get Rhumb Line Point Between, GeoLib Get Great Circle, GeoLib Get Great Circle Between, GeoLib Get Great Circle Point, GeoLib Get Great Circle Point Between, GeoLib Get Nearest,
    GeoLib Get Nearest Point, GeoLib Get Nearest Point Of Line, GeoLib Get Nearest Point Of Line Segment, GeoLib Get Nearest Point Of Polygon, GeoLib Get Nearest Point Of Polygon Edge, GeoLib Get
    Nearest Point Of Polygon Vertex, GeoLib Get Nearest Point Of Polygon

-   **API Testing:** Postman, Jest, Supertest

-   **Development Environment:** VS Code, Git, GitHub, Heroku, Netlify, MongoDB Atlas, AWS S3

-   **Project Management:** Trello, Figma, Lucidchart, Google Docs, Google Slides, Google Sheets, Google Forms, Google Meet, Google Drive, Google Calendar, Google Maps, Google Places, Google
    Recaptcha, Google Analytics, Google Search Console, Google Cloud Platform, Google Cloud Storage, Google Cloud Functions, Google Cloud Run, Google Cloud Build, Google Cloud SQL, Google Cloud
    Firestore, Google Cloud Pub/Sub, Google Cloud CDN, Google Cloud IAM, Google Cloud Billing, Google Cloud Logging, Google Cloud Monitoring, Google Cloud Error Reporting, Google Cloud Debugger,
    Google Cloud Profiler, Google Cloud Trace, Google Cloud Security Scanner, Google Cloud Web Security Scanner, Google Cloud API Gateway, Google Cloud Endpoints, Google Cloud Memorystore, Google
    Cloud Scheduler, Google Cloud Tasks, Google Cloud Secret Manager, Google Cloud Key Management Service, Google Cloud Storage Transfer Service, Google Cloud Data Transfer Service, Google Cloud
    BigQuery, Google Cloud Dataflow, Google Cloud Dataproc, Google Cloud Datalab, Google Cloud Data Studio, Google Cloud Data Catalog, Google Cloud Data Fusion, Google Cloud Data Loss Prevention,
    Google Cloud Data Labeling Service, Google Cloud Data Migration Service, Google Cloud Data Catalog, Google Cloud Data

-   **Version Control:** Git, GitHub

-   **Deployment:** Heroku, Netlify, MongoDB Atlas, AWS S3

### System Architecture:

![System Architecture](./images/system-architecture.png)

### Database Schema:

![Database Schema](./images/database-schema.png)

### API Routes:

![API Routes](./images/api-routes.png)

## Drawbacks to Consider and Handle (CHAT GPT)

1. **Battery Drain:** Continuous use of geolocation services can lead to increased battery consumption on users' devices. This can be a concern, especially for longer events or when users forget to
   turn off location services.

2. **Geofencing Accuracy:** While geofencing technology is generally accurate, it can sometimes be affected by factors like signal strength, environmental interference, and device limitations. Users
   might experience false positives or negatives in attendance detection.

3. **Privacy Concerns:** Collecting location data raises privacy concerns. Users might be hesitant to grant location permissions due to worries about their personal information being misused.
   Implementing strong data privacy measures and obtaining clear user consent is crucial.

4. **Device Compatibility:** Geofencing capabilities might vary across different devices and operating systems. Ensuring consistent functionality and accuracy across a wide range of devices can be a
   challenge.

5. **Network Connectivity:** Geofencing often relies on network connectivity to determine location accurately. In areas with poor network coverage or during network outages, attendance tracking might
   be affected.

6. **User Compliance:** Users might deliberately or accidentally disable location services, leading to inaccurate attendance records. Educating users about the importance of keeping location services
   enabled can help mitigate this issue.

7. **Event Location Variability:** In scenarios where an event takes place in a large or open area (like an outdoor event), defining a precise geofence boundary might be challenging. Users close to
   the edge of the geofence might experience attendance detection issues.

8. **Event Overcrowding:** In situations where a large number of attendees gather in a confined space, such as a crowded event hall, geofencing accuracy might decrease due to signal interference and
   overlapping boundaries.

9. **User Experience:** Users might find it inconvenient to keep their location services enabled for extended periods, especially if they are concerned about privacy or battery drain. Striking a
   balance between usability and user concerns is essential.

10. **Geofence Updates:** If event locations change or new event locations are added, updating geofences in real time might require careful management and communication with users.

11. **Unauthorized Access:** There is a potential risk of someone else logging in with another device and falsely marking attendance on behalf of another user. Implementing strong user authentication
    and access controls is necessary to prevent this issue.

12. **Using Multiple Devices:** Users might log in with multiple devices, leading to inaccurate attendance records. Implementing strong user authentication and access controls is necessary to prevent
    this issue.

13. **Offline Attendance:** Users might not have access to the internet during an event, leading to inaccurate attendance records. Implementing offline attendance tracking capabilities can help
    mitigate this issue.

14. **Spoofing:** Users might try to spoof their location to mark attendance falsely. Implementing strong user authentication and access controls is necessary to prevent this issue.

To address these drawbacks, it's important to conduct thorough testing, provide clear instructions to users, implement effective communication strategies, prioritize data privacy, and continuously
improve the application based on user feedback and evolving technologies.

## Future Directions:

GeoAttend is a powerful attendance management system that can be further enhanced with additional features and capabilities. Some potential future directions include:

-   **Attendance Analytics:** Providing detailed attendance analytics and insights can help organizations gain valuable information about attendance trends and patterns, enabling them to make
    data-driven decisions.

-   **Attendance Notifications:** Sending notifications to users about upcoming events, attendance status, and other relevant information can help improve user engagement and attendance compliance.

-   **Attendance Reminders:** Sending reminders to users about upcoming events can help ensure attendance compliance and reduce the risk of missed events.

-   **Attendance Gamification:** Introducing gamification elements such as leaderboards, badges, and rewards can help incentivize attendance and improve user engagement.

-   **Attendance Automation:** Automating attendance tracking can help reduce the administrative burden on organizations and ensure accurate attendance records.

-   **Attendance Integration:** Integrating attendance data with other systems such as payroll and HR can help streamline organizational processes and improve efficiency.

-   **Attendance Customization:** Allowing users to customize their attendance settings can help improve user experience and engagement.

-   **Attendance Security:** Implementing strong security measures such as two-factor authentication and encryption can help protect user data and prevent unauthorized access.

-   **Single Sign-On:** Allowing users to sign in with their existing accounts (e.g., Google, Facebook) can help improve user experience and reduce friction.

-   **Signing With QR Codes:** Allowing users to sign in with QR codes can help improve user experience and reduce friction.

-   **Attendance Verification:** Implementing attendance verification mechanisms such as facial recognition and fingerprint scanning can help improve attendance accuracy and prevent unauthorized
    access.

-   **One User Per Device:** Restricting users to one device per account can help prevent unauthorized access and improve attendance accuracy.

# Report a Bug

-   lishugupta652@gmail.com To report a bug, please [open an issue](https://github.com/LishuGupta652/GeoAttend/issues/new) on GitHub and provide detailed information about the bug, including steps to
    reproduce it and any relevant screenshots. We will investigate the issue and respond as soon as possible. ![dino](https://i.imgur.com/6rUiRXy.gif)
