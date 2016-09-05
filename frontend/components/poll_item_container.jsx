import { connect } from 'react-redux';
import PollItem from './poll_item';
import {destroyPoll} from '../actions/poll_actions'

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  destroyPoll: (pollData) => dispatch(destroyPoll(pollData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollItem)
