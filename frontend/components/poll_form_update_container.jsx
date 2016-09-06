import { connect } from 'react-redux';
import PollFormUpdate from './poll_form_update';
import {updatePoll, removePoll} from '../actions/poll_actions'

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  updatePoll: (pollData) => dispatch(updatePoll(pollData)),
  removePoll: poll => dispatch(removePoll(poll))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollFormUpdate)
