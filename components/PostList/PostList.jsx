import { useEffect, useState } from "react";
import axios from 'axios'
import UserPost from "../Post/UserPost";
import styles from './PostList.module.css';
import PostModal from "../PostModal/PostModal";


const PostList = () => {
    
    const [posts,setPost] = useState([])
    const [isShow,setIsShow] = useState(false)
    const [modalData,setModalData] = useState([])

    useEffect(()=>{
        const getUserPost = async()=>{
            const {data} = await axios.get('http://localhost:5000/api/product')
            setPost(data)
        }
        getUserPost()
    },[])

    const modalContent =(data)=>{
        setModalData([data])
        setIsShow(!isShow)
    }
    
    console.log(posts);

    return ( 
        <>
            <div className={styles.postsContainer}>
            {posts && posts.map((post)=>(
                <UserPost data={post} key={post.name} modalContent={()=>modalContent(post)}/>
            ))} 
            </div>
            <PostModal show={isShow} data={modalData} modalContent={modalContent}/>
        </>
     );
}
 
export default PostList;