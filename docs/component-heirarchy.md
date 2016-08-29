#Components and Routes

##Components

###<HomeContainer>
  - <Header>
    - login button (when logged out)
    - signup button (when logged out)
    - log out button (when logged in)
    - <SplashView> (when logged out)
      - <AuthForm> (when logged out)
        - email text area
        - password text area
        - submit/login/signup button
      - <InfoGraphic> (when logged out)
      - CreatePoll button?

  - <Sidebar>
    - Create button
    - <GroupIndexSidebar>
      - <GroupItemSidebar>
      - Add Group button

  - <MainView>
    - <GroupIndex>
      - <GroupDetail>
        - <PollItem>
          - MakeLive/LIVE button - see poll Detail for more info
          - Response count
        - <PollDetail>
          - Question (information from state.polls)
          - <AnswersGraphic> (information from state.polls, not sure how to make it into a table yet)
          - MakeLive button (triggers updatePoll action that tells middleware to send PATCH request to /users/:id to update the poll with its new LIVE status. Success callback is receiveLivePoll which PollsReducer catches and updates state to have correct live Poll)
          - FullScreen button (not sure how this works yet)
        - <PollsTools>
          - delete (triggers DELETE request to /polls/:id, success callback is removePoll action which PollReducer uses to remove poll from state)
          - edit (triggers PATCH request to /polls/:id, success callback is updatePoll action which PollReducer uses to remove poll from state)
    - <CreatePollModal>
      - <CreatePollForm>
        - <PollDetailGraphic> (props entirely fed from CreatePollForm's internal state from its onChange listeners which update its personal state)
        - Question and answer fields
        - Add Answer button
        - Groups select input (how does state have all groups available if we click this from a group detail view where groups in state have been filtered down? I guess I need to trigger something like a fetchAllGroups Action... Or I could just make this a text input and my server would add the group if it doesnt already exist, otherwise update existing group_poll_join_table)

###<PollResponse> (no login required)
  - Header
  - <PollResponseForm>


##Routes
  - path="/sign_up" component="AuthForm"
  - path="/log_in" component="AuthForm"
  - path="/home" component="HomeContainer"
    - path="/home/create_poll" component="CreatePollModal"
    - path="/home/groups/" component="GroupIndex"
      - path="/home/groups/:id" component="GroupDetail"
      - path="/home/groups/:id/polls/:id" component="PollDetail"
  - path="/users/:id" component="PollResponse"
