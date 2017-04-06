/**
 * Created by Arthur Haelterman on 5/04/2017.
 */
import React, { Component } from 'react';
import './Blog.css'
import {Grid, Row, Col} from 'react-bootstrap/lib'

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
        <Grid>
            <Row>
                <h1>{this.state.blog.title}</h1>
            </Row>


        </Grid>
        );
    }
}

export default Blog;