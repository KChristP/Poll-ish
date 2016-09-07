export const VoteConstants = {
  REQUEST_POLL: "REQUEST_POLL",
  RECEIVE_POLL: "RECEIVE_POLL",
  CAST_VOTE: "CAST_VOTE",
  RECEIVE_VOTE_CONFIRMATION: "RECEIVE_VOTE_CONFIRMATION",
  NEW_LIVE: "NEW_LIVE"
};

export const requestPoll = (user_id) => ({
  type: VoteConstants.REQUEST_POLL,
  user_id
});

export const receivePoll = (poll) => ({
  type: VoteConstants.RECEIVE_POLL,
  poll
});

export const castVote = (vote) => ({
  type: VoteConstants.CAST_VOTE,
  vote
});
export const receiveVoteConfirmation = (poll) => ({
  type: VoteConstants.RECEIVE_VOTE_CONFIRMATION,
  poll
});
export const newLive = (poll) => ({
  type: VoteConstants.NEW_LIVE,
  poll
});
