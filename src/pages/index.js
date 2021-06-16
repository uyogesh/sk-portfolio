import React, { Suspense, StrictMode } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SideBar from '../components/sidebar/sidebar'
import routes from '../routes/routes'
import './index.scss'

const navLinks = [
  {
    title: 'Home'
  },
  {
    title: 'About'
  },
  {
    title: 'Contact'
  }
]

const MainRoute = () => {
  return (
    <Router>
      <StrictMode>
        <div className='sk-body'>
          <SideBar navItems={navLinks} />
          <div className='right-part'>
            {/* <div className="border-left"> */}
              <Suspense fallback={<div />}>
                <Switch>
                  {routes.map(route => (
                    <Route
                      key={route.key}
                      render={({ match }) => <route.component />}
                      exact={route.exact}
                    />
                  ))}
                </Switch>
              </Suspense>
            {/* </div> */}
          </div>
        </div>
      </StrictMode>
    </Router>
  )
}

export default MainRoute
