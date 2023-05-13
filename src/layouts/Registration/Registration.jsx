import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";


const Registration = () => {

    const {createUser, logOut} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user
            form.reset();
            updateProfile(user, {
                displayName: name
            })
            .then()
            .catch()
            logOut()
            navigate("/login")
            alert("Sign Up Successfully!")
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col gap-8 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <h1 className="text-4xl pt-4 text-center font-bold">Sign Up!</h1>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt text-orange-600 link link-hover">Already have an account? Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;