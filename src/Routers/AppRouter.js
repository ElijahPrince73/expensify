import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../Components/Header'
import ExpenseDashboardPage from '../Components/ExpenseDashboard'
import CreatePage from '../Components/Create'
import EditPage from '../Components/Edit';
import HelpPage from '../Components/Help';
import NotFound from '../Components/404';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route path='/create' component={CreatePage}/>
        <Route path='/edit' component={EditPage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter
