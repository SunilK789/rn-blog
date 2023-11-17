import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999) ,
                    title: `Blog #${state.length + 1}`
                }
            ];
         case 'delete_blogpost':
            const filteredData = state.filter(p=> p.id !== action.payload);
            return  filteredData;
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => { 
        dispatch({type: 'add_blogpost'});
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => { 
        dispatch({type: 'delete_blogpost', payload: id});
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
);
