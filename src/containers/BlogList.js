/**
 * Created by Arthur Haelterman on 5/04/2017.
 */
import React, { Component } from 'react';
import Blog from '../components/Blog';

class BlogList extends Component {

    render() {
        return (
            <div id="blogs">
                {
                    this.props.blogs.map(function (blog) {
                        return <Blog key={blog.title} blog={blog}/>
                    }, this)
                }
            </div>
        );
    }
}

export default BlogList;