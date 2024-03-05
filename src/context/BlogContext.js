import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts': return action.payload;
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999) ,
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
         case 'delete_blogpost':
            const filteredData = state.filter(p=> p.id !== action.payload);
            return  filteredData;
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload
                }else {
                    return blogPost;
                }
            })
        default:
            return state;
    }
}
const getBlogPosts = (dispatch) =>{
    return async () => { 
        const response  = await jsonServer.get('/blogposts');
        console.log("response: " + JSON.stringify(response.data ))
        dispatch({type: 'get_blogposts', payload: response.data});
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => { 
        await jsonServer.post('/blogposts', {title, content});
        // dispatch({type: 'add_blogpost', payload: {title, content}});
        if(callback) callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => { 
        dispatch({type: 'delete_blogpost', payload: id});
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content) => { 
        dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    }
}


export const {Context, Provider} = createDataContext(
    blogReducer, 
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    []
);
