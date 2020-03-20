import React, {Component, Fragment} from 'react';
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PostListItem from "../../components/PostListItem/PostListItem";
import {fetchPosts} from "../../store/actions/postAction";
class Post extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        if (this.props.users === null){
            this.props.history.push('/login')
        }
    }


    render() {
        return (
            <Fragment>
                <h2>
                    Posts
                    <Button
                        color="primary"
                        className="float-right"
                        tag={Link}
                        to={"/posts/new"}
                    >
                        Add post
                    </Button>
                </h2>

                {this.props.posts.reverse().map(post => (
                    <PostListItem
                        key={post._id}
                        title={post.title}
                        id={post._id}
                        author={post.author}
                        image={post.image}
                        date={post.datetime}
                        postId={post._id}
                    />
                ))}

                <div ref={this.bottom}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    users:state.users.user
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});


export default connect(mapStateToProps,mapDispatchToProps) (Post);