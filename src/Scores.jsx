import Student from "./Student";

const Score = ({ scores }) => {
  return (
<>
      {scores.map(score => {

        return (

          <div className='scores' key={score.score}>
            <p> Quiz date: {score.date}  </p>
            <p> Quiz score: {score.score}</p>
          </div>




        )
      }


      )}
      </>
      );
}

      export default Score;