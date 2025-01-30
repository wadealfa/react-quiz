function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (numQuestions>index+1) return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({type:"nextQuestion"})}>
        Next
      </button>
    </div>
  );

  if (numQuestions===index+1) return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({type:"finish"})}>
          Finish
        </button>
      </div>
    );
}

export default NextButton;
