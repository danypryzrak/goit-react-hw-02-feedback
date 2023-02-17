

export const FeedbackOptions = ({options, addFeedback}) => {
    return (
    <>
        <button type="button" name="good" onClick={addFeedback}>Good</button>
        <button type="button" name="neutral" onClick={addFeedback}>Neutral</button>
        <button type="button" name="bad" onClick={addFeedback}> Bad</button>
    </>
    )
}

