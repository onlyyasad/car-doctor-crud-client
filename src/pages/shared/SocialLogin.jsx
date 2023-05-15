import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className="flex flex-col items-center w-full border-opacity-50">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-circle text-center btn-outline" title="Google Sign In">
                G
            </button>
            
        </div>
    );
};

export default SocialLogin;