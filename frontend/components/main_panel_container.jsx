import { connect } from 'react-redux';
import MainPanel from './main_panel';
import {requestAllPolls} from '../actions/poll_actions'

const mapStateToProps = state => ({
  polls: state.polls,
  user_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestAllPolls: (id) => dispatch(requestAllPolls(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPanel)
