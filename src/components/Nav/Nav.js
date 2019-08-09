import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    render() {
        return(
            <div>
                <div className='buttons-box'>
                    <Link to={'/dashboard'}>
                        <button>Home</button>
                    </Link>
                    <Link to={'/new'}>
                        <button>New Post</button>
                    </Link>
                    <Link to={'/'}>
                        <button>Logout</button>
                    </Link>
                </div>
                <div className='user-info-box'>
                    <div>User: {this.props.username}</div>
                    <div>Pic: {this.props.profile_pic}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, profile_pic} = reduxState
    return {username, profile_pic}
}

export default connect(mapStateToProps)(Nav)