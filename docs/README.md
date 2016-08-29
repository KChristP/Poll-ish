#Poll-ish

##Minimum Viable Product

Pol-ish is a
Hosting on Heroku
New account creation, login, and guest/demo login
New Poll Creation (1 question and multiple answers)
Web URL to take poll
Live-update Poll view (graphical)
Group/Ungroup Questions

##Design Docs

/wireframes
component-heirarchy.md
sample-state.md
redux-structure.md
schema.md
api-endpoints.md

##Implementation Timeline

###Phase 1: Backend setup and Front End User Authentication (3 days)

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
Question model
Answer model (answer column and votes column)
polls join table linking questions to answers
Seed database with a small amount of test data
CRUD API for Questions and their child answers (QuestionsController)
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
Groups Model ()
