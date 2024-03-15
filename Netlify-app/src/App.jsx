import { useState } from "react"
import reviews from "./Data"
import User from "./User"

function App() {
const [user, setUser] = useState(1)
const nextUser = () => {
    setUser((prevUser) => {
      if (prevUser === reviews.length - 1) {
        return 0; 
      } else {
        return prevUser + 1; 
      }
    });
}
const prevUser = () => {
  setUser((prevUser) =>{
    if(prevUser === 0){
     return reviews.length - 1
    } else{
     return prevUser -1
    }
  })
}
  return (
    <section className="flex  justify-center mt-20">
      <User data={reviews[user]} nextUser={nextUser} prevUser={prevUser}/>
    </section>
  )
}

export default App
