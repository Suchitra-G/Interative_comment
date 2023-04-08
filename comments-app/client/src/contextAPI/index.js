import { createContext,useState} from "react";

export const currentUserContext = createContext({});


const CurrentUserProvaider = ({children}) => {
    const [user,setUser] = useState({});
  const [comments,setComments] = useState([]);

    return <currentUserContext.Provider value={{user,setUser,comments,setComments}}>
        {children}
    </currentUserContext.Provider>
}

export default CurrentUserProvaider;