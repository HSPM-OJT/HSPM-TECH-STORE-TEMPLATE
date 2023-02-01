import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation() {
    
    return(
      <div className={classes.bg}>
      <div className="p-3 mb-5 rounded">
        <header className="section-header mb-3">
         <section className="header-main">
            <div className="container">
         <div className="row">
         <div className="col-lg-2">
            <Link to='/' className="nav-link" >
               <h2>HSPM Store </h2>
            </Link>
         </div>
            <div className="col-lg-2 col-4 ps-5">
            <div className="dropdown">
            <a className="btn btn-light btn-lg dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             All Category
             </a>

            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Apple</a></li>
            <li><a className="dropdown-item" href="#">NoteBook</a></li>
            <li><a className="dropdown-item" href="#">Desktop</a></li>
            <li><a className="dropdown-item" href="#">Apple</a></li>
            <li><a className="dropdown-item" href="#">NoteBook</a></li>
            <li><a className="dropdown-item" href="#">Desktop</a></li>
          </ul>
         </div>
            
               
            </div>
            
            <div className="col-lg-4 col-sm-12 ">
            
               <form action="#" className="search">
                     <div className="input-group w-100">
                        <input type="text" className="form-control form-control-lg" placeholder="Search" />
                        <div className="input-group-append">
                           <button className="btn btn-primary btn-lg" type="submit">
                           <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
               </form>
            </div> 
            <div className="col-lg-4 col-sm-6 col-12">
               <div className="widgets-wrap float-md-end">
                     <div className="widget-header  me-3">
                        <a href="#" className="shadow icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                        <span className="badge badge-pill badge-danger notify">0</span>
                     </div>
                     <div className="widget-header icontext">
                        <a href="#" className="shadow icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                        <div className="text">
                           <span className="text-muted">Welcome!</span>
                           <div> 
                                 <Link to='/login'>Sign in</Link>|  
                                 <Link to="/addnewProduct"> Register</Link>
                           </div>
                        </div>
                     </div>
               </div> 
            </div> 
         </div> 
         </div> 
         </section> 
         
         </header>
         </div>
         </div>
    );
}

export default MainNavigation;