import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Homes'
import NosMetiers from './pages/Nos_metiers'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Posts from './pages/Posts'
import DetailsPosts from './pages/DetailsPost'
import Auth from './pages/Auth'
import ScrollToTopRefresh from './components/Scroll'
import React, {useState, useMemo} from 'react'
import { UserContext } from './userContext';
import Login_cook from './components/Login_cook.jsx'
function App() {

  const [userData, setUserData] = useState(null);

  const providerValue = useMemo(() => ({userData, setUserData}), [userData, setUserData])
  
  return (
    <div className = "App">

    <Router >
    <UserContext.Provider value={providerValue}>
    < Header />
    <Navigation/>
    <ScrollToTopRefresh/>
    <Switch >
      <Route exact path = "/" component = { Home }/>
      <Route exact path = "/nos_metiers" component = { NosMetiers }/>
      <Route exact path = "/nos_realisations" component = { Posts }/>
      <Route exact path = "/contact" component = { Contact }/>
      <Route exact path = "/posts" component={ Posts } />
      <Route exact path = "/posts/:id" component={ DetailsPosts }/>
      <Route exact path = "/auth" component={ Auth }/>
      <Route exact path = "/set_cook" component = {Login_cook}/>
    <Redirect to = "/"/>
    </Switch>
    <ScrollToTopRefresh/>
    <Footer/>
    </UserContext.Provider>
    </Router>
    </div>
    );
}

export default App;
