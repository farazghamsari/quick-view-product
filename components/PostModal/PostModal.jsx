import styles from './PostModal.module.css'
import {BiXCircle} from "react-icons/bi";
import Image from 'next/image';

const comments= [
    {c:'hello its comment test i hope you like ittttttttttttttttttttttttttttttttttttttttttttt'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it,hello its comment test i hope you like it,hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
    {c:'hello its comment test i hope you like it'},
]

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}


const PostModal = ({data,show,modalContent}) => {
    console.log(data);
    const showModal = show ? styles.show : styles.hide
    return ( 
        <>
            {show && (
                <div className={`${showModal} ${styles.modal}`} onClick={modalContent}>
                    <div className={styles.modalContent} onClick={(e)=>e.stopPropagation()}>
                        {data.map((d)=>(
                            <>
                                <div className={styles.imgContainer}>
                                    <Image loader={myLoader} src={d.image} alt='modal image' width={100} height={100}/>
                                </div>
                                <div className={styles.modalInfo}>
                                    <div className={styles.modalHeader}>
                                        <div>{d.name}</div> 
                                        <span>تهران منطقه ۴ شهر تهران محله پاسداران - ضرابخانه پاسداران گلستان ۶,</span>
                                    </div>
                                    <div className={styles.comments}>
                                        {comments.map((c)=>(
                                            <div className={styles.comment}>
                                                <div className={styles.commentImg}>
                                                    <Image loader={myLoader} src={d.image} alt='modal image' width={100} height={100} /> 
                                                </div>
                                                <div className={styles.commentMsg}>{c.c}</div> 
                                            </div>
                                            
                                        ))}
                                    </div>
                                    <form className={styles.addComment}>
                                        <input type="text" />
                                        <button>ارسال</button>
                                    </form>
                                
                                </div>
                                
                            </>
                        ))}
                        <span className={styles.closeBtn} onClick={modalContent}>
                            <BiXCircle />    
                        </span> 
                    </div>
                </div>
            )}
        </>
        
     );
}
 
export default PostModal;