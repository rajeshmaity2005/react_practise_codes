import React from 'react'
import Card from './components/Card'

const App = () => {

  const cardData1 = {
    username: 'Rajesh Maity',
    email: 'raj@gmail.com',
    role: 'Creator',
    profile: 'https://images.unsplash.com/photo-1781206648019-663871db92fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'
  }
  

const cardData2 = {
  username: "Neha Gupta",
  email: "neha.gupta@gmail.com",
  role: "Content Creator",
  profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500"
};

const cardData3 = {
  username: "Aman Mishra",
  email: "aman.mishra@gmail.com",
  role: "Mobile App Developer",
  profile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500"
};

  return (
    <div className='h-screen w-screen bg-black p-10 flex gap-4 '>
      <Card cardData={cardData1} />
      <Card cardData={cardData2} />
      <Card cardData={cardData3} />

    </div>
  )
}

export default App