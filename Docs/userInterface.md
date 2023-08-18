# GeoSpatial Attendance System

## top Level

- Organization ( University, Event Hall, ): 100's
- Event ( Graduation, Wedding, classroom ): 100's (event can be taken place at multi place) (Rejecting the hypothesis of even happening at multi place)
- Classes can be divided into section
- Event Will Start and End at a specific time
- Predefined Locations (Lecium, Lecture Hall, Logos, Octa, etc): 100's

# Stake holders

- User can be a student, teacher, admin, or a guest, member of the organization
- Admin can be a teacher or other person who is responsible for the organization

# User Stories

- As a user, I want to be able to see the events that are happening in the organization
- As a user, I will be able to subscribe to the event
- As a user, I want to be able to see the location of the event
- As a user, I want to be able to see the time of the event
- As a user, when the event is happening and I am in the location of the event, My attendance will be taken

# Admin Stories

- As an admin, I want to be able to create an event
- As an admin, I want to be able to set the location of the event
- As an admin, I want to be able to set the time of the event
- As an admin, I can add a user to the event

# Situtations

1. User reached the location of the event before the event started
2. User reached the location of the event after the event started and before the event ended
3. User reached the location of the event after the event ended
4. User reached the location of the event before the event started and left the location before the event ended
5. User reached the location of the event after the event started and left the location before the event ended

# Solution

1. User reached the location of the event before the event started
   - User will be marked as present
2. User reached the location of the event after the event started and before the event ended

   - User will be marked as present

3. User reached the location of the event after the event ended

   - User will be marked as absent

4. User reached the location of the event before the event started and left the location before the event ended

   - User will be marked as absent

5. User reached the location of the event after the event started and left the location before the event ended

   - User will be marked as absent

6. Teacher can mark the student as present or absent at any time
   - with the click of a button (manual attendance with GeoFencing)
