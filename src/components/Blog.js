/**
 * Created by Arthur Haelterman on 5/04/2017.
 */
import React, { Component } from 'react';

class Blog extends Component {

    constructor(props){
        super(props);
        this.state = {
            blog:this.props.blog
        }
    }

    render() {
        return (
            <div id={this.state.blog.title}>
                <p>{this.state.blog.title}</p>
                {
                    this.state.blog.categories.map(function (category) {
                        return <p key={category}>{category}</p>
                    }, this)
                }
                <div>

                </div>
            </div>
        );
    }
}

export default Blog;