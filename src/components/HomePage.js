import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchingData } from "../actions/apiActionCreator.js";
import { showPost } from "../actions/detailActionCreator.js";
import { useNavigate } from "react-router-dom";
import '../App.css';

const HomePage = () => {
    const {loading,posts,error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchingData())
    },[dispatch])

    function cardDetail(post){
        dispatch(showPost(post));
        navigate(`/item/${post.id}`);
    }

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>
   // console.log(posts);
    //onClick={()=>{cardDetail(post)}}
    //onClick={()=>dispatch(showPost(posts))}

    return(
        <div className="main-container">
            {
                posts && posts.map((post) => {
                    return(
                    <div key={post.id} className="container" onClick={()=>cardDetail(post)} >
                        <div>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt="post.title"/>
                        </div>
                        <div>
                            <p>User ID: {post.userId}</p>
                            <p>Title: {post.title.slice(0,10)}</p>
                            <p>Body: {post.body.slice(0,50)}</p>
                            <p>Read More...</p>
                        </div>
                    </div>
                    )
                    })
            }
        </div>
    )
}

export default HomePage;