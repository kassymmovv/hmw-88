import React, {Component, Fragment} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import {connect} from "react-redux";
import {createPost} from "../../store/actions/postAction";

class NewPost extends Component {


    createProduct = async (productData) => {
        await this.props.createPost(productData);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h2>New product</h2>
                <PostForm
                    onSubmit={this.createProduct}

                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    createPost: productData => dispatch(createPost(productData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);