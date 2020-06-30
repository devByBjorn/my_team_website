import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import Header from './layout/Header'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'
import Footer from './layout/Footer'
import ScrollToTop from './components/ScrollToTop'


const App = props => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <Header />
          <main className="main-container">
            <Switch>
              <Route exact={true} path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))