import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    state = {
        search: '',
        posts: [],
        userposts: true
    }

    getPosts() {
        const {id} = this.props
        let search = this.state.search
        search = '%' + search + '%'
        axios.get(`/search/${id}?userposts=${this.state.userposts}&search=%${search}%`).then(res => {
            this.setState({posts: res.data})
        })
    }

    componentDidMount() {
        this.getPosts()
    }

    resetSearch() {
        const {id} = this.props
        console.log(this.props)
        axios.get(`/search/${id}?userposts=${this.state.userposts}&search=%%`).then(res => {
            console.log(res.data)
            this.setState({posts: res.data, search: ''})
        })
    }

    render() {
        const posts = this.state.posts.map((ele) => {
            return <Link to={`/post/${ele.id}`} key={ele.id}>
                <div>
                    {ele.title}
                </div>
                <div>
                    {ele.username}
                </div>
                <div>
                    {ele.profile_pic}
                </div>

            </Link>
                
        })
        return (
            <div>
                <div className='search-box'>
                    <div className='search-input'>
                        <input type="text" placeholder={'Search...'} value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
                        <input type='checkbox' id='Posts?' checked={this.state.userposts} onChange={() => this.setState({userposts: !this.state.userposts})}/>
                        <label htmlFor='Posts?'>Include my posts</label>
                    </div>
                    <div className='search-buttons'>
                        <button onClick={() => this.getPosts()}>Search</button>
                        <button onClick={() => this.resetSearch()}>Reset</button>
                    </div>
                </div>
                <div className='post-display'>
                    {posts}
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    const {id} = reduxState
    return {id}
}

export default connect(mapStateToProps)(Dashboard)