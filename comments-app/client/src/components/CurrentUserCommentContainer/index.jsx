import { useContext, useState } from 'react';
import './style.css';
import { currentUserContext } from '../../contextAPI';
import ReplyBtn from '../Buttons/ReplyBtn';
const baseURL  = 'http://127.0.0.8:4080/'
const CurrentUserContainer = ({comment,setComment,onClick = () => {}}) => {
    const { user } = useContext(currentUserContext);
   
    return <div className='current-user-input'>
        {/* <pre>{JSON.stringify(user)}</pre> */}
        <img src={baseURL + user?.image?.png} alt="" />
        <textarea 
        cols="" 
        rows={5}
        value={comment}
        onChange={({target : {value}}) => setComment(value)}
        ></textarea>
        <button onClick={onClick}>
            Send
        </button>
    </div>
}

export default CurrentUserContainer;