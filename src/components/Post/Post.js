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
        console.log(this.props)
        const id = JSON.parse(this.props.match.params.postid)
        console.log(id)
        axios.get(`/posts/${id}`).then(res => {
            console.log(res.data)
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
                <div>{this.state.img}</div>
                <div>{this.state.content}</div>
                <div>{this.state.username}</div>
                <div>{this.state.profile_pic}</div>
            </div>
        )
    }
}