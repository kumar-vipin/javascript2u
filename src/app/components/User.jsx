import React from 'react';

export class User extends React.PureComponent {
    render() {
        return (<div className='user-container'>
            <h3>The user page</h3>
            <p>User ID: </p>
        </div>)
    }
};