import { connect } from 'react-redux';
import PollItem from './poll_item';
import {destroyPoll, requestSinglePoll, updatePoll} from '../actions/poll_actions'
import {castVote} from '../actions/vote_actions'
import {requestLive} from '../actions/live_actions'


const mapStateToProps = (state) => ({
  live: state.live[Object.keys(state.live)[0]],
  user_id: state.session.currentUser.id
})
const mapDispatchToProps = (dispatch) => ({
  destroyPoll: (pollData) => dispatch(destroyPoll(pollData)),
  requestSinglePoll: id => dispatch(requestSinglePoll(id)),
  updatePoll: (pollData) => dispatch(updatePoll(pollData)),
  requestLive: (poll) => dispatch(requestLive(poll))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollItem)
