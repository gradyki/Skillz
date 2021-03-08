import './App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <h3>login</h3>
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
