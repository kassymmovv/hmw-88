import axiosApi from "../../axiosApi";
import {connect} from "react-redux";


export const POST_COMMENTS_REQUEST = 'POST_COMMENTS_REQUEST';
export const POST_COMMENTS_SUCCESS = 'POST_COMMENTS_SUCCESS';
export const POST_COMMENTS_FAILURE = 'POST_COMMENTS_FAILURE';

export const PostCommentsRequest = () => ({type: POST_COMMENTS_REQUEST});
export const PostCommentsSuccess = comments => ({type: POST_COMMENTS_SUCCESS,comments});
export const PostCommentsFailure = error => ({type: POST_COMMENTS_FAILURE, error});


export const postComments = productData => {
    return async (dispatch,getState) => {
        const id = getState().posts.post._id;
        const user = getState().users.user;
        await axiosApi.post('/comments',productData,{headers: {'Authorization': 'Token ' + user.token}});
        dispatch(getComments(id));
    }

};
export const getComments = id => {
    return async dispatch => {
        try {
            dispatch(PostCommentsRequest());
            const response = await axiosApi.get(`/comments/${id}`);
            dispatch(PostCommentsSuccess(response.data));
        }catch (e) {
            console.log(e);
        }
    }
};

const mapStateToProps = state => ({
   post:state.posts.post
});

 connect(mapStateToProps,null);