#Poll-ish

##Minimum Viable Product

Pol-ish is a poll hosting site inspired by Poll Everywhere built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- Hosting on Heroku
- New account creation, login, and guest/demo - login
- New Poll Creation (1 question and multiple - answers)
- Web URL to take poll
- Live-update Poll view (graphical)
- Group/Ungroup Questions

##Design Docs

- [wireframes](./wireframes)
- [component hierarchy](./component-heirarchy.md)
- [sample state](sample-state.md)
- [redux structure](redux-structure.md)
- [schema](schema.md)
- [api endpoints](api-endpoints.md)

##Implementation Timeline

###Phase 1: Backend setup and Front End User Authentication (2.5 days)

Objective: Functioning rails project with front-end Authentication

* New Rails project
* User model/migration
* Back end authentication (session/password)
* StaticPages controller and root view
* Webpack & react/redux modules
* APIUtil to interact with the API
* Redux cycle for frontend authentication
* User signup/signin components
* Blank landing component after signup/signin (HomeContainer)
* Style signup/signin components
* Seed users
* Review phase 1

###Phase 2: Polls Model, API, and components (2.5 days)
Poll model
Question model
Answer model (answer column and votes column)
polls join table linking questions to answers
Seed database with a small amount of test data
CRUD API for Polls and their child Questions and Answers (PollsController)
Update only for answers? (to allow adding votes directly without updating the parent Question)
JBuilder views for polls
Poll components and respective Redux loops
PollsIndex
PollIndexItem
PollForm
Autosave polls feature
Style polls components
Seed polls

###Phase 3: Groups (2 days)
Groups Model
Seed database with a small amount of test data
CRUD API for groups (GroupsController)
JBuilder views for groups
Adding polls requires a group
Moving polls between groups
Viewing polls by group
Style group components
Seed groups

###Phase 4: Votes Page and Live Polls(1.5 day)
GET API endpoint for users/:id
POST API endpoint for answers(or Polls?) to update vote count
Research - websockets and making my front end listen for changes to votes for answers
Creating proper actions to update any poll data in state
testing

###Phase 5: Graphics, sms, and styling (1.5 day)
Research how to make answer poll data show up in bar graphs (D3?)
Implement graphics
Touch Up CSS and add hover effects etc

###Bonus Features TBD
Text-in votes
Search
