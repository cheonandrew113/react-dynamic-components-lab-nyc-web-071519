import React, { Component } from 'react';
// import BlogPost from "./BlogPost"


class Comment extends Component {
	render() {
        return (
            <div className="comment">
                {this.props.commentText}
                {/* <BlogPost/> */}
            </div>
        )
	}
}

export default Comment;