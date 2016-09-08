export const LiveConstants = {
  NEW_LIVE: "NEW_LIVE",
  REQUEST_LIVE: "REQUEST_LIVE"
};

export const receiveVoteConfirmation = (poll) => ({
  type: LiveConstants.RECEIVE_VOTE_CONFIRMATION,
  poll
});
export const receiveLive = (poll) => ({
  type: LiveConstants.RECEIVE_LIVE,
  poll
});
export const newLive = (poll) => ({
  type: LiveConstants.NEW_LIVE,
  poll
});
export const requestLive = (user_id) => ({
  type: LiveConstants.REQUEST_LIVE,
  user_id
});
