import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteUser } from "./userSlice";
import { Link } from "react-router-dom";
import Backdrop from "../utility/Backdrop";
import ConfirmModal from "../utility/ConfirmModal";
function Users(props){
                
    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    function backdropHandler(){
        setModalOpen(false);
    }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteUser({email:props.email})).unwrap()

        setModalOpen(false)
    }
    return (
        <div className="container">
           <table className="table border shadow">
             <div className="row">
                <div className="col-3 mb-1">
                    <h6>FullName : { props.fname} {props.lname}</h6>
                </div>
                <div className="col-3 mb-1">
                    <h6>Email : { props.email}</h6>
                </div>
                <div className="col-2 mb-1">
                    <h6>PhoneNumber : { props.phoneNumber}</h6>
                </div>
                <div className="col-1 mb-1">
                    <h6>Status : {props.status}</h6>
                </div>
                <div className="col-1 mb-1">
                        <Link onClick={deleteHandler}>
                                <i className="fa fa-minus-circle pr-1">Delete</i>
                        </Link>
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
                    {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>} 
                </div>
                <div className="col-1 mb-1">
                <Link to={`/user/edit/${props.id}`}>
                                <i className="fa fa-edit pr-1">Update</i>
                </Link>
                </div>
            </div>
          </table> 
        </div>
    )
    
}
export default Users;