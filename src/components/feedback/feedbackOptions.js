export const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => onClickFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
};
