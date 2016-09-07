export const VoteConstants = {
  REQUEST_POLL: "REQUEST_POLL",
  RECEIVE_POLL: "RECEIVE_POLL"
};

export const requestPoll = (user_id) => ({
  type: VoteConstants.REQUEST_POLL,
  user_id
});

export const receivePoll = (poll) => ({
  type: VoteConstants.RECEIVE_POLL,
  poll
});
