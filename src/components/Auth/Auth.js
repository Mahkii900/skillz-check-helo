import React, {Component} from 'react'

export default class Auth extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <div>
                <div className='input-boxes'>
                    <input value={this.state.username} type='text' placeholder={'Username'} onChange={(e) => this.setState({username: e.target.value})}/>
                    <input value={this.state.password} type='password' placeholder={'Password'} onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
                <div className='login-buttons'>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}