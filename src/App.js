import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import ExploreJobs from './pages/explore_jobs';
import PostJob from './pages/post_job';
import SignIn from './pages/sign_in';

import 'primeflex/primeflex.css';
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={SignIn} exact></Route>
          <>
            <NavigationBar />
            <Route path="/explore" component={ExploreJobs}></Route>
            <Route path="/post" component={PostJob}></Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
