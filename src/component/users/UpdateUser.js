import classes from "./Register.module.css";
import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { selectUserById, editUser } from "./userSlice"
import { useParams } from "react-router-dom";
function UpdateUser(){ 
    const { userId } = useParams()
    const user = useSelector((state)=>selectUserById(state,Number(userId)))

    const [id,setId] = useState(user?.id)
    const [fname,setFName] = useState(user?.fname)
    const [lname,setLName] = useState(user?.lname)
    const [email,setEmail] = useState(user?.email)
    const [phoneNumber,setPhoneNumber] = useState(user?.phoneNumber)
    const [password,setPassword] = useState(user?.password)
    const [confirmPassword,setConfirmPassword] = useState(user?.confirmPassword)
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const onUserIdChange = e => setId(e.target.value)
    const onFNameInputChange = e => setFName(e.target.value)
    const onLNameInputChange = e => setLName(e.target.value)
    const onEmailInputChange = e => setEmail(e.target.value)
    const onPhoneNumberInputChange = e => setPhoneNumber(e.target.value)
    const onPasswordInputChange = e => setPassword(e.target.value)
    const onConfirmPasswordInputChange = e => setConfirmPassword(e.target.value)

    const canSave = [fname,lname,email,phoneNumber,password,confirmPassword].every(Boolean) && addRequestStatus === 'idle'
    const dispatch = useDispatch()

    const onFormSubmit = (event)=>{
        event.preventDefault()

        if(canSave){

            setAddRequestStatus('pending');

            try{
                dispatch(
                    editUser({
                        id:id,
                        fname:fname,
                        lname:lname,
                        email:email,
                        phoneNumber:phoneNumber,
                        password:password,
                        confirmPassword:confirmPassword
                    })
                ).unwrap();
            }catch(error){
                console.error(error)
            }finally{

                setAddRequestStatus('idle')
                setId('')
                setFName('')
                setLName('')
                setEmail('')
                setPhoneNumber('')
                setPassword('')
                setConfirmPassword('')
            } 
        }
    }


    return (
        <div className={classes.frame}>
        <div class="bg-light shadow-lg p-3 mb-5 bg-body rounded">
        
        <h2 class="text-center pt-3">Update</h2>
        <form onSubmit={onFormSubmit} class="mt-5">
        <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your first name" 
                    value={id} 
                    onChange={onUserIdChange}
                    disabled
                    />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your first name" 
                    value={fname} 
                    onChange={onFNameInputChange}
                    />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your last name" 
                    value={lname} 
                    onChange={onLNameInputChange}
                    />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={onEmailInputChange}
                    disabled
                    />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your phone number" 
                    value={phoneNumber} 
                    onChange={onPhoneNumberInputChange}
                    />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your phone number" 
                    value={password} 
                    onChange={onPasswordInputChange}
                    />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col px-5">
                    <input type="text" class="form-control form-control-lg" 
                    placeholder="Enter your phone number" 
                    value={confirmPassword} 
                    onChange={onConfirmPasswordInputChange}
                    />
                </div>
            </div>
            <div class="row mb-3">
            <div class="col text-center">
                    <button class="btn btn-danger btn-lg">Cancel</button>
                </div>
                <div class="col text-center">
                    <button class="btn btn-primary btn-lg" disabled={!canSave}>Update</button>
                </div>
            </div>
        </form>
        </div>
        </div>
    )
}
export default UpdateUser;