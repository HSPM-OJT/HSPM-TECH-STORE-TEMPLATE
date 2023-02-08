import { Navigate } from "react-router-dom";

function PrivateRoute(props){
    if(!props.token){
        return <Navigate to='/user/login' />
    }

    return props.children
}

export default PrivateRoute