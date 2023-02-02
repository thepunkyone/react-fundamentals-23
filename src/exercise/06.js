// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const [error, setError] = React.useState(null)

  const handleChange = event => {
    const {value} = event.target

    const isValid = value === value.toLowerCase()

    const errorMessage = isValid ? null : 'Username must be lower case'

    setError(errorMessage)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // const {value} = event.target.elements.username - alternative

    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          type="text"
          onChange={handleChange}
        />
        {error ? <div role="alert">{error}</div> : null}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
