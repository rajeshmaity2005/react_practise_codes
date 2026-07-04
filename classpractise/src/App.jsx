import React, { use, useState } from 'react'

const App = () => {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const formHandler = (e) => {
    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push({user,email})

    console.log(oldUsers)

    setAllUsers(oldUsers)

    setUser('')
    setEmail('')
  }



  return (
    <div>
      <form onSubmit={(e) =>
        formHandler(e)
      }>
        <input
          type="text"
          placeholder='Enter your name'
          value={user}
          required
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder='Enter email'
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>



      {allUsers.map(function (elem, idx) {
        return <div key={idx}>
          <h4 >{elem.user}</h4>
          <p >{elem.email}</p>
        </div>
      })}
    </div>
  )
}

export default App
