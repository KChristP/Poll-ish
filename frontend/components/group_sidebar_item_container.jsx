import React from 'react';
import {connect} from 'react-redux';
import GroupSidebarItem from './group_sidebar_item';

const mapStateToProps = state => ({
  activeGroup: state.activeGroup
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupSidebarItem);
