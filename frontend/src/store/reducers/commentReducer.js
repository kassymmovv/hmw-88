import {POST_COMMENTS_SUCCESS} from "../actions/commentAction";

const initialState = {
  comments:[]
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};

        default:
            return state;
    }
};

export default commentsReducer