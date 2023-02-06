import { getUserStatus,fetchUser,selectAllUser,getUserError } from "./userSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import Users from "./Users";
function UserList(){
    const userStatus= useSelector(getUserStatus)
    const users = useSelector(selectAllUser)
    const error = useSelector(getUserError)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(userStatus === 'idle'){
            dispatch(fetchUser())
        }
    },[userStatus,dispatch])
    let content;
        
    if(userStatus === 'Loading'){
        content = (<p>Loading....</p>)
    }
    if (userStatus === 'failed'){
        content = (<p>{error}</p>)
    }
    if(userStatus === 'succeeded'){
        content = users.map(
            (user)=>(
                <Users 
                    id={user.id}
                    fname={user.fname}
                    lname={user.lname}
                    email={user.email}
                    phoneNumber={user.phoneNumber}
                    status={user.status}
                />)
        );
    }
   
    return content;
}
export default UserList;