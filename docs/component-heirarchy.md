#Components and Routes

##Components

- \<HomeContainer\>
  - \<Header\>
    - \<SplashView\> (when logged out)
      - \<AuthForm\> (when logged out)
      - \<InfoGraphic\> (when logged out)

  - \<Sidebar\>
    - Create button
    - \<GroupIndexSidebar\>
      - \<GroupItemSidebar\>

  - \<MainView\>
    - \<GroupIndex\>
      - \<GroupDetail\>
        - \<PollItem\>
          - \<PollDetail\>
          - \<AnswersGraphic\>
        - \<PollsTools\>

    - \<CreatePollModal\>
      - \<CreatePollForm\>
        - \<PollDetailGraphic\>

- \<PollResponse\> (no login required)
  - \<Header\>
  - \<PollResponseForm\>


##Routes
  - path="/sign_up" component="AuthForm"
  - path="/log_in" component="AuthForm"
  - path="/" component="HomeContainer"
    - path="/home/create_poll" component="CreatePollModal"
    - path="/home/groups/" component="GroupIndex"
      - path="/home/groups/:id" component="GroupDetail"
      - path="/home/groups/:id/polls/:id" component="PollDetail"
  - path="/users/:id" component="PollResponse"
