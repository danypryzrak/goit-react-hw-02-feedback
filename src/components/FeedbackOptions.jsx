import PropTypes from 'prop-types'

export const FeedbackOptions = ({addFeedback}) => {
    return (
    <>
        <button type="button" name="good" onClick={addFeedback}>Good</button>
        <button type="button" name="neutral" onClick={addFeedback}>Neutral</button>
        <button type="button" name="bad" onClick={addFeedback}> Bad</button>
    </>
    )
}

FeedbackOptions.propTypes = {
addFeedback: PropTypes.func
};
