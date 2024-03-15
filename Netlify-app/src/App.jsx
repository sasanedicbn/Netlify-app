import { useState } from "react"
import reviews from "./Data"
import User from "./User"

function App() {
const [user, setUser] = useState(1)
const nextUser = () => {
  setUser((prevUser) => prevUser + 1)
}
const prevUser = () => {
  setUser((prevUser) => prevUser -1)
}
  return (
    <section className="flex  justify-center mt-20">
      <User data={reviews[0]} nextUser={nextUser} prevUser={prevUser}/>
    </section>
  )
}

export default App
