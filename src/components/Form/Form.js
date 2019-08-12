import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    state = {
        title: '',
        img: '',
        content: '',
        showPreview: false
    }

    handleImgChange(e) {
        this.setState({img: e.target.value})
        if (e.target.value === '') {
            this.setState({showPreview: false})
        } else {
            this.setState({showPreview: true})
        }
    }

    createNewPost() {
        axios.post(`/posts/new`, {title: this.state.title, img: this.state.img, content: this.state.content}).then(res => {
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.title} onChange={e => this.setState({title: e.target.value})} placeholder={'Title...'}/>
                    <input value={this.state.img} onChange={e => this.handleImgChange(e)} placeholder={'Image URL...'}/>
                    {this.state.showPreview ? <img src={this.state.img} alt='preview'/> : null}
                    <input value={this.state.content} onChange={e => this.setState({content: e.target.value})} placeholder={'Post content...'}/>
                </div>
                <div>
                    <button onClick={() => this.createNewPost()}>Post</button>
                </div>
            </div>
        )
    }
}