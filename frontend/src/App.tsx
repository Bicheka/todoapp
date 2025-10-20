import Header from './Header'
import { Router, Route } from '@solidjs/router'
import Home from './pages/Home'


function App() {
  return (
    <>
      <Header/>
      <Router>
        <Route path="/" component={Home}/>
      </Router>
      
    </>
  )
}

export default App