import Student from "./Student";

const Score = ({ scores }) => {
  return (
<>
      {scores.map(score => {

        return (

          <div key={score.score}>
            <p> {score.date}  </p>
            <p> {score.score}</p>
          
          </div>




        )
      }


      )}
      </>
      );
}

      export default Score;