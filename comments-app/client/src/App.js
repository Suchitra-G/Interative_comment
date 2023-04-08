import logo from './logo.svg';
import { useState ,useEffect, useContext} from 'react'
import './App.css';
import CommentsContainer from './components/CommentsContainer';
import ReplyCommentContainer from './components/ReplyCommentContainer';
import { currentUserContext } from './contextAPI';
import CurrentUserContainer from './components/CurrentUserCommentContainer';

function App() {
  const { user , setUser,comments,setComments} = useContext(currentUserContext);
  const [comment,setComment] = useState("");
  useEffect(() => {
    fetch('http://127.0.0.8:4080/comments')
    .then(res => res.json())
    .then( data => {
      setUser(data.currentUser)
      setComments(data.comments)
    })
    .catch(console.log)
  },[])
  return (
    <div className="App">
      <div className='comments-container'>
        {
          comments?.map( comment => <>
            <CommentsContainer key={comment.id} comment={comment}/>
            {comment.replies.length > 0 ? <ReplyCommentContainer parentId={comment.id} replies={comment.replies}/> : null}
          </>)
        }
          <CurrentUserContainer comment={comment} setComment={setComment} onClick={() => {}}/>
      </div>
    </div>
  );
}

export default App;


