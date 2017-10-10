// Higher Order Component (HOC) - A component (HOC) that renders another Component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
     <h1>Info</h1>
     <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
       <p>
         {props.isAdmin && <p> This is private info. Please don't share</p>}
       </p>
       <WrappedComponent {...props}/>
    </div>
  )
};

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info='This is the details'/>, document.getElementById('app'))
