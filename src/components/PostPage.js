import React, { Component } from 'react'
import axios from 'axios'
import Link from 'gatsby-link'
import props from 'prop-types';
import './PostPage.css'
import Header from './header';

export class PostPage extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.location.param1);

    }


    state = {
        post: {},
        isLoaded: false
    }
    componentDidMount() {

        axios.get(`https://alroya.om/api/v1/${this.props.match}`)
            .then(res => this.setState({
                post: res.data['data'],
                category: res.data['data']['category'],
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {


        const { post, isLoaded } = this.state;
        if (isLoaded) {
            console.log(this.state)
            return (
                <div>

                    <div className="PostPageGroup">


                        <h5>{post.title}</h5>

                    </div></div>
            )
        }
        return <h3>Loading...</h3>

    }
}

export default PostPage
