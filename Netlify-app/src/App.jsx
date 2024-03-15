import reviews from "./Data"
import User from "./User"

function App() {

  return (
    <section className="flex  justify-center mt-20">
      <User data={reviews[0]}/>
    </section>
  )
}

export default App
