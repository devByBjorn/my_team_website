import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import Header from './components/Header'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))