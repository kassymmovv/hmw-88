import React, {Component} from 'react';

import {connect} from "react-redux";
import PostThumbNail from "../../components/PostThumbNail/PostThumbNail"
import {fetchPost} from "../../store/actions/postAction";
import {getComments, postComments} from "../../store/actions/commentAction";
import {Button, Col, Form, FormGroup, Input, Label,Card,CardBody} from "reactstrap";

class Comments extends Component {

    state = {
        title: '',
        description: ''
    };
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.getComments(this.props.match.params.id)

    }


    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    render() {

        if (!this.props.post) return null;
        console.log(this.props.match.params.id);
        const Obj = {

            post:this.props.post._id,
            title:this.state.title,
            description:this.state.description
        };
        return (
            <>
            <h1>{this.props.post.title}</h1>
                <strong>{this.props.post.datetime}</strong>
                <PostThumbNail image={this.props.post.image}/>
                <p>{this.props.post.description}</p>

                <Form onSubmit={this.submitFormHandler}>
                <FormGroup row>
                    <Label sm={2} for="title">Title</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="title" id="title"
                            placeholder="Enter product title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="description">Description</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="description" id="description"
                            placeholder="Enter description"
                            value={this.state.description}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button onClick={() => {this.props.postComment(Obj)}} color="primary">Save</Button>
                    </Col>
                </FormGroup>
                </Form>


                {this.props.comments.reverse().map(k => (
                    <Card key={k._id}>
                        <CardBody>
                            <h4>{k.title}</h4>
                            <p>{k.description}</p>
                        </CardBody>
                    </Card>
                ))}
            </>
        );
    }
}

const mapStateToProps = state => ({
   post:state.posts.post,
    user: state.users.user,
    comments:state.comments.comments

});

const mapDispatchToProps = dispatch => ({
    fetchPost:id => dispatch(fetchPost(id)),
    postComment: data => dispatch(postComments(data)),
    getComments:id => dispatch(getComments(id))
});


export default connect(mapStateToProps,mapDispatchToProps) (Comments);