import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            console.log("inside switch", state);
            
            return [
                ...state, 
                {title: `Blog #${state.length + 1}`}
            ];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) =>{
    console.log("addBlogPost caled!")
    return () => { 
        dispatch({type: 'add_blogpost'});
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost },
    []
);
