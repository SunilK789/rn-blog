import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts': return action.payload;
       
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
        if(callback) callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => { 
         await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => { 
         await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({type: 'edit_blogpost', payload: {id, title, content}});
        if(callback) callback();
    }
}


export const {Context, Provider} = createDataContext(
    blogReducer, 
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    []
);
