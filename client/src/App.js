import { useState } from 'react'
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './screens/Login/Login'
import { loginUser } from './services/auth';



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory()
  
  const handleLogin = async (formData) => {
    try {
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser);
      setError(null);
      history.push('/');
    } catch (e) {
      setError("invalid login credentials");
    }
  }


  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login handleLogin={handleLogin}  error={error}/>
        </Route>
        <Route path='/register'>
<h3>Register</h3>
        </Route>
        <Route path='/'>

        </Route>
      </Switch>
      
      </Layout>
  );
}

export default App;
