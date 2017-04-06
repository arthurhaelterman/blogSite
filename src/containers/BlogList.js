/**
 * Created by Arthur Haelterman on 5/04/2017.
 */
import React, { Component } from 'react';
import Blog from '../components/Blog';
import InfiniteScroll from 'react-infinite-scroller';

class BlogList extends Component {

    render() {
        var items = [];
        {
            this.props.blogs.map(function (blog) {
                items.push( <Blog key={blog.title} blog={blog}/>)
            }, this)
        }
        return (
            <div id="blogs">
                <InfiniteScroll
                    pageStart={0}
                    hasMore={true || false}
                    loader={<div className="loader">Loading ...</div>}>
                    {items}
                </InfiniteScroll>
            </div>
        );
    }
}

export default BlogList;