import React, { Component } from 'react'
import styled from 'styled-components'
import './Post.css'
import axios from 'axios'
import PostItem from './PostItem'

// const Post = props => (

// <div className="Post">
//     <img src={props.image} />
//       <h3>{props.title}</h3>
//       <p>{props.text}</p>
// </div>


// )

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false
  }
  componentDidMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    axios.get('https://alroya.om/api/v1/category/2')
      .then(res => this.setState({
        posts: res.data['data']['posts']['data'],
        category: res.data['data']['category'],
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state)
    const { posts, isLoaded, category } = this.state;
    if (isLoaded) {
      return (
        <div className="PostGroup" >
          {posts.map(post => (


            <PostItem key={post.id} post={post} category={category} />


          ))}
        </div>
      );
    }
    return <h3>loading ...</h3>
  }
}


export default Posts






