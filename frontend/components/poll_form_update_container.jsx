import { connect } from 'react-redux';
import PollFormUpdate from './poll_form_update';
import {updatePoll} from '../actions/poll_actions'

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  updatePoll: (pollData) => dispatch(updatePoll(pollData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollFormUpdate)
