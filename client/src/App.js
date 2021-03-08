import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout';
import Login from './screens/Login/Login'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>

        </Route>
        <Route path='/'>

        </Route>
      </Switch>
      
      </Layout>
  );
}

export default App;
