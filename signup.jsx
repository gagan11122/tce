import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Signup(){
    return(
        <>
     <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Up</h5>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Enter Name"/>
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Phone number or email"/>
                        </div><br />
                        <div className="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                        </div><br />
                        <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
};
export default Signup;