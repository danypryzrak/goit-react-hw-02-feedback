import PropTypes from 'prop-types'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </>
    )
}

Notification.propTypes = {
good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
    total: PropTypes.string,
positivePercentage: PropTypes.string,
};