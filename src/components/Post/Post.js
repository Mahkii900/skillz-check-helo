import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
    state = {
        title: '',
        img: '',
        content: '',
        username: '',
        profile_pic: ''
    }

    getPost() {
        const id = JSON.parse(this.props.match.params.postid)
        axios.get(`/posts/${id}`).then(res => {
            this.setState({...res.data})
        })
    }

    componentDidMount() {
        this.getPost()
    }

    render() {
        return (
            <div>
                <div>{this.state.title}</div>
                <div><img src={this.state.img} alt={this.state.title}/></div>
                <div>{this.state.content}</div>
                <div>{this.state.username}</div>
                <div>{this.state.profile_pic}</div>
            </div>
        )
    }
}