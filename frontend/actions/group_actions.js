export const GroupConstants = {
  REQUEST_ALL_GROUPS: "REQUEST_ALL_GROUPS",
  RECEIVE_ALL_GROUPS: "RECEIVE_ALL_GROUPS",
  UPDATE_GROUP: "UPDATE_GROUP",
  RECEIVE_GROUP: "RECEIVE_GROUP"
};

export const requestAllGroups = () => ({
  type: GroupConstants.REQUEST_ALL_GROUPS
});

export const receiveAllGroups = (groups) => ({
  type: GroupConstants.RECEIVE_ALL_GROUPS,
  groups
});

export const UpdateGroup = (group) => ({
  type: GroupConstants.UPDATE_GROUP,
  group
});

export const receiveGroup = (group) => ({
  type: GroupConstants.RECEIVE_GROUP,
  group
});
