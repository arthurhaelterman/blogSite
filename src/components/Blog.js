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
        var categories = "";
        {
            this.state.blog.categories.map(function (category) {
                return categories += + "#" + category + " "
            }, this)
        }
        return (
            <div id={this.state.blog.title}>
                <p>{this.state.blog.title}</p>
                <p>{categories}</p>
                <div>

                </div>
            </div>
        );
    }
}

export default Blog;