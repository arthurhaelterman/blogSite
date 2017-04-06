/**
 * Created by Arthur Haelterman on 5/04/2017.
 */
import React, { Component } from 'react';
import Blog from '../components/Blog';
import InfiniteScroll from 'react-infinite-scroller';
import {Fade,Well} from 'react-bootstrap';

class BlogList extends Component {


    render() {
        var items = [];
        {
            this.props.blogs.map(function (blog) {
                items.push( <Blog key={blog.id} blog={blog}/>)
            }, this)
        }
        return (
            <Fade in={this.props.show}>
                <Well>
            <div id="blogs">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.props.load}
                    hasMore={true || false}
                    loader={<div className="loader">Loading ...</div>}>
                    {items}
                </InfiniteScroll>

            </div>
                    </Well>
                </Fade>

        );
    }
}

export default BlogList;