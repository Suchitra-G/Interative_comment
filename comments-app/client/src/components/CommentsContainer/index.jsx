
import { useContext } from 'react';
import ReplyBtn from '../Buttons/ReplyBtn';
import ScoreContainer from '../ScoreBtnContainer/index';
import './style.css';
import { currentUserContext } from '../../contextAPI';
export const baseURL  = 'http://127.0.0.8:4080/'
const CommentsContainer = ({comment ,to ,setIsReply = () => {}}) => {
    const {user} = useContext(currentUserContext);
    return <div className="user-comment-container">
        <div>
            <ScoreContainer score={comment.score}/>
        </div>
        <div className="comment-info">
            <div className='comment-header'>
                <div >
                    <img className='avatar' src={`${baseURL}${comment?.user?.image?.png}`}/>
                    <h3>{comment?.user.username}</h3>
                    { user.username === comment?.user?.username ? <span className='user-tag'>YOU</span> : null}
                    <h6>{comment?.createdAt}</h6>
                </div>
                { user.username === comment?.user?.username ? <div>
                        <ReplyBtn icon="trash" color="red" text="Delete" onClick={() => {
                            fetch(`${baseURL}comments`,{
                                method : "DELETE",
                                body : {
                                    commentId : comment.id,
                                }
                            }).then( res => res.json())
                            .then(() => {})
                            .catch( err => console.log(err))
                        }}/>
                        <ReplyBtn icon="pen" color="blue" text="Edit"/>
                    </div> : <ReplyBtn icon="reply" color="blue" text="Reply" onClick={setIsReply}/>
                    
                }
            </div>
            <div>
                <article>
                    { to &&  <span className='to-username'>@{to} </span>}{comment.content}
                </article>
            </div>
        </div>
    </div>
}

export default CommentsContainer;