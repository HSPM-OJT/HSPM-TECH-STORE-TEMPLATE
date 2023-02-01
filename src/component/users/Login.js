import classes from "./Login.module.css"

function Login() {
    
    return(
    <div className={classes.frame}>
    <div class="bg-light shadow-lg p-3 mb-5 bg-body rounded">
    
    <h2 class="text-center pt-3">Login</h2>
    <form action="#" class="mt-5">
        <div class="row mb-4">
            <div class="col px-5">
                <input type="text" class="form-control form-control-lg" placeholder="Enter your email"/>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col px-5">
                <input type="text" class="form-control form-control-lg" placeholder="Enter your password"/>
            </div>
        </div>
        <div class="row mb-3"> 
            <div class="col text-center">
                <button class={`btn btn-primary btn ${classes.button}`}>Login</button>
            </div>
        </div>
        <div class="row mb-4 text-center">
            <div class="col ">
                <p>Don't have a account? <a href="#">Register</a></p>
            </div>
        </div>
    </form>
    </div>
    </div>
    );
}
export default Login;