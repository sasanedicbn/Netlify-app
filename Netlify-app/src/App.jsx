import reviews from "./Data"
import User from "./User"

function App() {

  return (
    <section>
      {reviews.map((review) => <User key={review.id} data={review}/> )}
    </section>
  )
}

export default App
