import { Link,useNavigate } from "react-router-dom";
import classes from "./Login.module.css"
import { useDispatch } from "react-redux" 
import { login } from "../auth/authSlice"
import { useState } from "react"

function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [requestStatus,setRequestStatus] = useState('idle')

    const onEmailInputChange = e => setEmail(e.target.value)
    const onPasswordInputChange = e => setPassword(e.target.value)

    const canLogin = [email,password].every(Boolean) && requestStatus === 'idle'

    const dispatch = useDispatch();

    const onLoginSubmit = (event) => {
        event.preventDefault()

        if(canLogin){
            setRequestStatus('pending')
            try {
                dispatch(login({
                    email,
                    password
                })).unwrap()
                navigate('/user/profile')
            } catch (error) {
                console.error(error)
            }finally{
                setRequestStatus('idle')

                setEmail('')
                setPassword('')
            }
        }
    }
    
    return(
    <div className={classes.frame}>
    <div class="bg-light shadow-lg p-3 mb-5 bg-body rounded">
    
    <h2 class="text-center pt-3">Login</h2>
    <form onSubmit={onLoginSubmit} class="mt-5">
        <div class="row mb-4">
            <div class="col px-5">
                <input type="text" class="form-control form-control-lg" 
                placeholder="Enter your email" 
                value={email} 
                onChange={onEmailInputChange}
                />
            </div>
        </div>
        <div class="row mb-4">
            <div class="col px-5">
                <input type="text" class="form-control form-control-lg" 
                placeholder="Enter your password" 
                value={password} 
                onChange={onPasswordInputChange}
                />
            </div>
        </div>
        <div class="row mb-3">
            
            <div class="col text-center">
            
                <button class="btn btn-primary btn-lg" disabled={!canLogin}>Login</button>
            </div>

        </div>
        <div class="row mb-4 text-center">
            <div class="col ">
                <p>Don't have a account? <Link to='user/register'>Register</Link></p>
            </div>
        </div>
    </form>
    </div>
    </div>
    );
}
export default Login;