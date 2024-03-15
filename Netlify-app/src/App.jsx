import { useState } from "react"
import reviews from "./Data"
import User from "./User"

function App() {
const [user, setUser] = useState(1)

const nextUser = () => {
    setUser((prevUser) => {
      if (prevUser === reviews.length - 1) {
        return 0; 
      }
        return prevUser + 1; 
      
    });
}
const prevUser = () => {
  setUser((prevUser) => {
    if(prevUser === 0){
     return reviews.length - 1
    } 
     return prevUser - 1
    
  })
}
  const randomUser = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setUser(randomIndex);
  };
  
  return (
    <section className="flex  justify-center mt-20 bg-red-200 p-4">
      <User data={reviews[user]} nextUser={nextUser} prevUser={prevUser} randomUser={randomUser}/>
    </section>
  )
}

export default App
