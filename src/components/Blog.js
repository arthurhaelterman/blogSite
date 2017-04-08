/**
 * Created by Arthur Haelterman on 5/04/2017.
 */
import React, { Component } from 'react';
import './Blog.css'
import {Grid, Row, Col,Panel,Button} from 'react-bootstrap/lib'

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
            <Panel id="blog" bsStyle="primary" header={this.state.blog.title} >
                TLDR: Bank of America is a horrible business and it should be ashamed by how bad it is.
                Two weeks ago, I suddenly received emails informing me that my Bank of America account was overdrawn. Confused, I logged onto my online banking account to discover that all my money (more than $3,400) had disappeared from both my saving and checking accounts. Not only were the balances stripped clean, I had outstanding fees and my checking account had gone negative as a result. My heart sank and my first thought was that my personal computer had been compromised somehow. What actually happened turned out to be in some ways worse and this is the story of how I found myself in an absurdist bureaucratic nightmare straight out of the movie Brazil. Best of all, it’s almost entirely Bank of America’s fault. This is the story of how I pieced it all together.
                A closer examination of my bank statements revealed that I had received two legal orders. These are writs of executions issued by a court to collect monetary judgments and fines. Immediately, this two innocuous lines told me that I was not the victim of hacking. However, the mystery only deepened. Since I have never been party to a law suit, this was puzzling. Surely it had to be a mistake?
                To add insult to injury, Bank of America refused to include a copy of the legal order in the online statement and informed me in crimson red text to visit a banking center or “try again later”. Spoiler: It turns out that neither of those two recommended courses of action was the right one. To this day, the notice is not available on my online account, so “trying again” was never going to do anything. The instructions might as well have said, “fuck off”.
            </Panel>


        );
    }
}

export default Blog;