import { connect } from 'react-redux';
import PollItem from './poll_item';
import {destroyPoll, requestSinglePoll} from '../actions/poll_actions'

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  destroyPoll: (pollData) => dispatch(destroyPoll(pollData)),
  requestSinglePoll: id => dispatch(requestSinglePoll(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollItem)
