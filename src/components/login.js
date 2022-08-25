import React from 'react';
// create form to input username and password with Submit button
export default class LoginPrompt extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                {/* Create Header */}
                <h3>Log In</h3>
            <form>
                <label>
                    {/* create labels and input fields */}
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    {/* create Submit button */}
                    <button className="button" type="submit">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}





