import React, {Component} from 'react'

export default class Dashboard extends Component {
    state = {
        search: '',
        posts: [{title: 'Baa', id: 1}, {title: 'Nooo', id: 2}]
    }
    render() {
        const posts = this.state.posts.map((ele) => {
            return <div key={ele.id}>
                <div>
                    {ele.title}
                </div>
                <div>
                    {ele.username}
                </div>
                <div>
                    {ele.profile_pic}
                </div>
            </div>
                
        })
        return (
            <div>
                <div className='search-box'>
                    <div className='search-input'>
                        <input type="text" placeholder={'Search...'} value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
                        <input type='checkbox' id='Posts?' defaultChecked/>
                        <label htmlFor='Posts?'>Include my posts</label>
                    </div>
                    <div className='search-buttons'>
                        <button>Search</button>
                        <button>Reset</button>
                    </div>
                </div>
                <div className='post-display'>
                    {posts}
                </div>
            </div>
        )
    }
}