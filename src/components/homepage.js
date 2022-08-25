import React from 'react';
import LoginPrompt from './login';
import NavBar from './navbar';
import '../index.css';

let e = React.createElement;
// Create a card to hold the login info
export default class Homepage extends React.Component {
    render () {
        return (
            <div className="card w-25">
                <div className="card-header text white text-center">
                    Portal
                </div>
                <div className="card-body">
                    <LoginPrompt/>
                </div>
                </div>
        )
    }
}