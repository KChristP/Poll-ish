#Sample State:

```
{
  currentUser: {
    id: 1,
    email: something@email.com    
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPoll: {errors: ["a Poll must have at least 1 answer"]}
  },
  groups: {
    1: {
      Title: "People",
      current: true
    }
  },
  polls: {
    1: {
      question: "Who?",
      answers: [
      {1: "me", votes: 5},
      {2: "you", votes: 12}
      ],
      groupId: 1
      current: true,
      active: true
    }
  },
}
```
