import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class PostForm extends Component {
    state = {
        title: '',
        image: '',
        description: ''
    };

        submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            if (key === 'description') {
                value = JSON.stringify(value);
            }

            formData.append(key, value);
        });

        this.props.onSubmit(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };



    render() {
        return (
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
                            required
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
                            required
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2} for="image">Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={this.fileChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit" color="primary">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default PostForm;