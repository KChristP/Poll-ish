import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/session_actions';TODO write proper actions for group items
import GroupItem from './header';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateGroup: (group) => dispatch(updateGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupItem);
