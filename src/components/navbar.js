import React from 'react';
import HomePage from './homepage';
import '../index.css';
// create navigation bar
export default class NavBar extends React.Component {
render() {
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
                 
            </a>
            {/* create the navbar links */}
            <div className="collapse navbar-collapse">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Messages 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contacts
        </a>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}