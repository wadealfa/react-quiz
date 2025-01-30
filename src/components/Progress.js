function Progress({ index, maxPosiblePoints,numQuestions,points, answer }) {
    
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index+Number(answer!==null)}
        
      />
      <p>Question {index+1}/{numQuestions}</p>
      <p>{points}/{maxPosiblePoints}</p>
    </header>
  );
}

export default Progress;
