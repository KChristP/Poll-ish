import React from 'react';
import {connect} from 'react-redux';
import { updateGroup } from '../actions/group_actions';
import GroupItem from './group_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateGroup: (group) => dispatch(updateGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupItem);
