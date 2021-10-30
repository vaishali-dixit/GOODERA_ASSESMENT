import { Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import ExploreJobs from './pages/explore_jobs';
import PostJob from './pages/post_job';
import SignIn from './pages/sign_in';

import './App.css';

function App() {
  const isAuthenticated = false;
  const history = useHistory();

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}></Route>
  }

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route to="/" component={SignIn}></Route>
          <PrivateRoute to="/explore" component={ExploreJobs}></PrivateRoute>
          <PrivateRoute to="/post" component={PostJob}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
