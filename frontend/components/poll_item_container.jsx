import { connect } from 'react-redux';
import PollItem from './poll_item';
import {destroyPoll, requestSinglePoll, updatePoll} from '../actions/poll_actions'
import {castVote, newLive} from '../actions/vote_actions'


const mapStateToProps = (state) => ({
  live: state.live
})
const mapDispatchToProps = (dispatch) => ({
  destroyPoll: (pollData) => dispatch(destroyPoll(pollData)),
  requestSinglePoll: id => dispatch(requestSinglePoll(id)),
  updatePoll: (pollData) => dispatch(updatePoll(pollData)),
  newLive: (poll) => dispatch(newLive(poll))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollItem)
