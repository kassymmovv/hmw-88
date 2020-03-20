import {FETCH_POST_SUCCESS, FETCH_POSTS_SUCCESS} from "../actions/postAction";

const initialState = {
    posts: [],
    post: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts};
        case FETCH_POST_SUCCESS:
            return {...state, post: action.post};
        default:
            return state;
    }
};

export default postReducer;