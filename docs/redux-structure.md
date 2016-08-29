#Redux Structure

##Auth Cycles
###Session API Request Acitons
- signUp
  - invoked from submit button on AuthForm
  - POST /api/users is called
  - dispatch of receiveCurrentUser is set as success callback

- logIn
  - invoked from submit button on AuthForm
  - POST /api/session is called
  - dispatch of receiveCurrentUser is set as success callback

- logOUt  
  - invoked from Log Out button on the - header/navigation bar
  - DELETE /api/session is called
  - dispatch of removeCurrentUser is set as success callback

###Session API Response Actions

- receiveCurrentUser
  - invoked from API callback
  - SessionReducer stores current user in the state

- removeCurrentUser
  - invoked from API callback
  - SessionReducer removes current user from the state

  ##Error Cycles

  ###Error API Response Actions

  - setErrors
    - invoked from API callbacks on error for actions that generate POST requests
    - the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms
  - removeErrors
    - invoked from API callbacks on success for actions that generate POST requests
    - the ErrorReducer removes errors for a given form in the application's state.

##Group Cycles
###Groups API Request Actions

- requestAllGroups
  - invoked from GroupIndex didMount/willReceiveProps, and also from All Groups button onClick
  - GET /api/groups is called
  - receiveAllGroups is set as success callback

- createGroup
  - invoked from Add Group button onClick (either from GroupIndexSidebar or GroupIndex)
  - POST /api/groups is called
  - receiveSingleGroup is set as success callback

- requestSingleGroup (If my first mounted state has all groups, why would I ever need to request a single one? should I be removing groups that are not being shown in my views?)
  - invoked from GroupDetail didMount/willReceiveProps
  - GET /api/groups/:id
  - receiveSingleGroup is set as a success callback

- updateGroup
  - invoked from removing or adding a poll to a group(what action)
  - PATCH /api/groups/:id is called
  - receiveSingleGroup is set as success callback

- destroyGroup
  - invoked from delete group button
  - DELETE /api/groups/:id is called
  - removeGroup is set as success callback

###Groups Receive Actions

- receiveAllGroups
  - invoked from API callback(from requestAllGroups)
  - GroupsReducer stores all groups into the state

- receiveSingleGroup
  - invoked from API callback (from createGroup, requestSingleGroup or updateGroup)
  - GroupsReducer stores adds the group to the state

- removeGroup
  - invoked from API callback (from destroyGroup action)
  - GroupsReducer removes group from the state

##Poll Cycles
### Poll Request Actions

- requestAllPolls(do I need this or can I simply nest Poll info in with Group requests)
  - invoked from GroupIndex didMount/willReceiveProps(if ever)
  - GET /api/polls is called
  - dispatch of receiveAllPolls is set as success callback

- requestSinglePoll
  - invoked from GroupDetail (if ever - another one I dont think I need)
  - GET /api/polls/:id
  - dispatch of receiveSinglePoll is set as success callback

- createPoll
  - invoked from submit from CreatePollForm
  - POST /api/polls is called(need to remember to send group_id along with the data so that my controller can make sure to assign this poll to the correct group)
  - dispatch of receiveSinglePoll is set as success callback

- updatePoll
  - invoked from UpdatePoll button onClick (when poll is selected)
  - PATCH /api/polls/:id is called
  - dispatch of receiveSinglePoll is set as success callback

- makePollLive
  - invoked from MakeLive button in PollDetail or PollItem
  - PATCH /api/polls/:id is called
  - dispatch of receiveLivePoll is success callback

- destroyPoll
  - invoked from Delete button onClick (when poll is selected)
  - DELETE /api/polls/:id is called
  - dispatch of removePoll action is set as success callback

### Poll Receive Actions

- receiveAllPolls (again not necessary if nested under groups)
  - invoked from API callback (from requestAllPolls)
  - PollsReducer adds all polls to state

- receiveSinglePoll
  - invoked from API callback (from createPoll, or updatePoll or requestSinglePoll if it is used - also maybe a websocket listener will call this when the server receives a new vote on a poll)
  - PollReducer adds the poll to state

- receiveLivePoll
  - invoked on API callback (from makePollLive)
  - PollReducer will update the live poll status of all of the polls in state to accomodate the change.

- removePoll
  - invoked from API callback (from destroyPoll)
  - PollsReducer removes the poll from state
