import Card from "./Card.jsx"
import ProfileCard from "./ProfileCard.jsx"


function App() {

  return (
    <div>
      <Card />

      <ProfileCard
      image="/Joseph.jpg" 
      name = "Femi"
      age = "30 years old"
      location = "New York"
      bio = "A software engineer passionate about solving real-world problems."
      occupation= "Software Engineer"
      hobbies={["Coding", "Travelling", "Music"]}
      />

      <ProfileCard
      image="/Judith.jpg" 
      name = "Judith"
      age = "35 years old"
      location = "San Francisco"
      occupation="Product Manager"
      hobbies={["Reading", "Hiking"]}
      />
    </div>

  )
}

export default App
