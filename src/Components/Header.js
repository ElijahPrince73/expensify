import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to='/'><h1>Expensify</h1></NavLink>
    <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create an Expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit Expenses</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
)

export default Header
