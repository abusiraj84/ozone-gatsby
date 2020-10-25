import React, { Component } from 'react'
import Link from 'gatsby-link'

export class PostItem extends Component {
    render() {
        const { id, title, description, img } = this.props.post;
        const newTo = {
            pathname: `/post/${id}`,
            param1: id
        };

        return (
            <Link to={newTo}>
                <div className="Post">
                    <img src={'https://alnahdanews.com/' + img} />
                    <h3>{title}</h3>
                    <span>{this.props.category.title}</span>

                </div>

            </Link>
        )
    }
}

export default PostItem
