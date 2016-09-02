export const PollConstants = {
  REQUEST_ALL_POLLS: "REQUEST_ALL_POLLS",
  RECEIVE_ALL_POLLS: "RECEIVE_ALL_POLLS",
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
