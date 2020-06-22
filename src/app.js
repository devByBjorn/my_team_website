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
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'
import Footer from './components/Footer'


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))