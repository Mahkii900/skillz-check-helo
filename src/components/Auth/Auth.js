import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    registerUser() {
        axios.post('/auth/register', {username: this.state.username, password: this.state.password}).then(() =>  {
            this.props.history.push('/dashboard')
        })
        .catch(() => alert('Username already taken!'))
    }

    login() {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password}).then(() => {
            this.props.history.push('/dashboard')
        })
        .catch(() => alert('Username or Password Incorrect'))
    }

    render() {
        return (
            <div>
                <div className='input-boxes'>
                    <input value={this.state.username} type='text' placeholder={'Username'} onChange={(e) => this.setState({username: e.target.value})}/>
                    <input value={this.state.password} type='password' placeholder={'Password'} onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
                <div className='login-buttons'>
                    <button onClick={() => this.login()}>Login</button>
                    <button onClick={() => this.registerUser()}>Register</button>
                </div>
            </div>
        )
    }
}