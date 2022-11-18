import styles from './PostModal.module.css'
import {BiXCircle} from "react-icons/bi";
import Image from 'next/image';

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
                                     <div>{d.name}</div> 
                                     <span>تهران منطقه ۴ شهر تهران محله پاسداران - ضرابخانه پاسداران گلستان ۶</span>
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