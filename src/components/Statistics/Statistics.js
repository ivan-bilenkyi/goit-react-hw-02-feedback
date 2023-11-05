export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      {' '}
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>
      <p>Total = {total}</p>
      <p>Positive feedback = {positiveFeedback}%</p>
    </>
  );
};
