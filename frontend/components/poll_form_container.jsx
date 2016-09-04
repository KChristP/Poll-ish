import { connect } from 'react-redux';
import PollForm from './poll_form';
import {createPoll} from '../actions/poll_actions'

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  createPoll: (pollData) => dispatch(createPoll(pollData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollForm)
