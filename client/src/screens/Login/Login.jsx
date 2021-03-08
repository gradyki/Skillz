import { useState } from 'react'


export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form>
      <input
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
      <input
        name='password'
        type='password'
        value={password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
