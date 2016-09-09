import { connect } from 'react-redux';
import PollForm from './poll_form';
import {createPoll} from '../actions/poll_actions'

const mapStateToProps = (state) => ({
  user_id: state.session.currentUser.id
})
const mapDispatchToProps = (dispatch) => ({
  createPoll: (pollData) => dispatch(createPoll(pollData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollForm)
