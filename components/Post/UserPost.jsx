import Image from 'next/image'
import styles from './userPost.module.css'
import { BiHeart , BiShareAlt ,BiCommentDetail } from "react-icons/bi";




const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

const UserPost = ({data,modalContent}) => {
    
    return ( 
        <>
            <div className={styles.post} key={data.name}>
                <div className={styles.imgContainer}>
                    <Image loader={myLoader} src={data.image} alt='post' width={100} height={100} />
                </div>
                <div className={styles.postDetail}>
                    <div className={styles.postInfo}>
                        <div className={styles.postTitle}>{data.name}</div>
                        <span>تهران منطقه ۴ شهر تهران محله پاسداران - ضرابخانه پاسداران گلستان ۶</span>
                    </div>
                
                    <div className={styles.btns}>
                        <span className={styles.likeBtn}>
                            <BiHeart />
                        </span>
                        <span className={styles.shareBtn} >
                            <BiShareAlt />
                        </span>
                        <span className={styles.commentBtn} onClick={()=>modalContent(data)} >
                            <BiCommentDetail />
                        </span>
                    </div>
                </div>
            </div>
        
        </>

     );
}
 
export default UserPost;