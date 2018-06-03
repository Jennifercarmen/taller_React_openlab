import React from 'react'

export const SignIn = ({name,changeName}) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>Cambiar de nombre</button>
    </div>
  )
}
