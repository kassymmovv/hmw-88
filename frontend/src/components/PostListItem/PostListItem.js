import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody} from "reactstrap";
import ProductThumbnail from "../PostThumbNail/PostThumbNail";
import { NavLink} from "react-router-dom";

const PostListItem = props => {
    return (
        <Card>
            <CardBody>

                <ProductThumbnail image={props.image}/>
               <strong>
                   {props.title}
               </strong>
                <strong style={{marginLeft: '10px'}}>
                    {props.description}
                </strong>
                <strong style={{marginLeft: '10px'}}>
                    {props.author}
                </strong>
                <strong style={{marginLeft: '10px'}}>
                    {props.date}
                </strong>
                <strong style={{marginLeft: '10px'}}>
                    {props.description}
                </strong>
                <NavLink to={`/post/comments/${props.postId}`}>
                    see more
                </NavLink>
            </CardBody>
        </Card>
    );
};

PostListItem.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description:PropTypes.string,
    date:PropTypes.string.isRequired,
    postId:PropTypes.string.isRequired
};

export default PostListItem;