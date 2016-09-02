export const GroupConstants = {
  REQUEST_ALL_GROUPS: "REQUEST_ALL_GROUPS",
  RECEIVE_ALL_GROUPS: "RECEIVE_ALL_GROUPS",
};

export const requestAllGroups = () => ({
  type: GroupConstants.REQUEST_ALL_GROUPS
});

export const receiveAllGroups = (groups) => ({
  type: GroupConstants.RECEIVE_ALL_GROUPS,
  groups
});
