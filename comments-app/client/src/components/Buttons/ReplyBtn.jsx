import './style.css';

const ReplyBtn = ({ icon,color,text,onClick}) => {
    return <button className={"btn "+ color} onClick={onClick}><i className={`fa-solid fa-${icon}`}></i> {text}</button>
}

export default ReplyBtn;