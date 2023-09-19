import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Dashboard from '../src/Components/Dashboard'
import './index.css'

function App() {
  return (
    <>
      <Router>
        <Dashboard />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </Router>
    </>
  )
}

export default App
