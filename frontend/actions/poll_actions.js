export const PollConstants = {
  REQUEST_ALL_POLLS: "REQUEST_ALL_POLLS",
  RECEIVE_ALL_POLLS: "RECEIVE_ALL_POLLS",
  CREATE_POLL: "CREATE_POLL",
  RECEIVE_POLL: "RECEIVE_POLL"
};

export const requestAllPolls = (user_id) => {
  return ({
    type: PollConstants.REQUEST_ALL_POLLS,
    user_id: user_id
  });
}

// export const requestPollsByGroup = (group) => ({
//   type: PollConstants.REQUEST_ALL_POLLS
//   group
// });

export const receiveAllPolls = (polls) => ({
  type: PollConstants.RECEIVE_ALL_POLLS,
  polls
});

export const receivePoll = (poll) => ({
  type: PollConstants.RECEIVE_POLL,
  poll
});

export const createPoll = (poll) => ({
  type: PollConstants.CREATE_POLL,
  poll
});
