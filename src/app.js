import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is from my DASHBOARD component</div>
);

const CreatePage = () => (
  <div>This is from my CREATE component</div>
);

const EditPage = () => (
  <div>This is from my EDIT component</div>
);

const HelpPage = () => (
  <div>This is from my HELP component</div>
);

const NotFound = () => (
  <div>404</div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true}/>         
      <Route path='/create' component={CreatePage}/>
      <Route path='/edit' component={EditPage}/>
      <Route path='/help' component={HelpPage}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
