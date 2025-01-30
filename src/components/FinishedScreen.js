function FinishedScreen({ points, maxPosiblePoints, dispatch }) {
  const pointsPercentage = (points / maxPosiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored {points} out of {maxPosiblePoints} points (
        {Math.ceil(pointsPercentage)}%)
      </p>

      <p className="highscore">(Highscore : {points})</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}>
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
