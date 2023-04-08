import { useContext, useState } from 'react';
import CommentsContainer, { baseURL } from "../CommentsContainer";
import CurrentUserContainer from "../CurrentUserCommentContainer";
import './style.css';
import { currentUserContext } from '../../contextAPI';

const ReplyCommentContainer = ({ parentId,replies }) => {
    const [isReplay,setIsReply] = useState(null);
    const [comment,setComment] = useState("");
    const { user,setComments } = useContext(currentUserContext);
    const onReplayClick = (parentCommentId) => {
        setIsReply(replies.find( (comment) => comment.id === parentCommentId))
    }
    const onSendHandler = () => {
        fetch(`${baseURL}comments/replies`, {
            method : "POST",
            body : JSON.stringify({
                parentId : parentId,
                content : comment,
                user : user,
                replyingTo : isReplay.user.username,
                score : 0,
                createdAt : "Today"
            })
        }).then(res => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            // console.log(data)
            setComments(data.comments);
            setIsReply(null);
            setComment("");
        }).catch( err => console.log("tejas",err))
        
    }
    return <div className="reply-comment-container">
        <div>
            <div className="verticle-bar"></div>
        </div>
        <div className="r-comments-container">
            {
                replies.map((comment) => <CommentsContainer to={comment.replyingTo} setIsReply={onReplayClick.bind(this,comment.id)} comment={comment}/>)
            }
            {
                isReplay && <CurrentUserContainer comment={comment} setComment={setComment} isReply={true} onClick={onSendHandler}/>
            }
        </div>
    </div>
}
export default ReplyCommentContainer;