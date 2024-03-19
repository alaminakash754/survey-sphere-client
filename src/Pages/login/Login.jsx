import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const Login = () => {
    const [logInError, setLogInError] = useState('');
    const [successLogin, setSuccessLogin] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        setLogInError('');
        setSuccessLogin('');

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                e.target.reset();
                setSuccessLogin(Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }))
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setLogInError(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '"email or password are wrong"',
                }));
            })
    }

    

    return (

        <div>
            <Helmet>
                <title>Survey Sphere | Login</title>
            </Helmet>
            <div className="relative">

                <img className="w-[1000px] h-[600px] ml-[100px]" src="https://i.ibb.co/XZxNFTb/computer-security-with-login-password-padlock.jpg" alt="" />
                <div className="items-center mx-auto absolute top-[70px] right-[400px] opacity-80 bg-yellow-100">
                    <div className="card shrink-0 w-[500px] max-w-sm shadow-2xl ">
                        <h2 className="italic text-4xl font-bold text-yellow-800 text-center mt-2">Login Here !</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black text-xl">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-xl hover:bg-yellow-600">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Do not have an account? Please <Link to='/signup'><button className="btn btn-link ">Sign Up</button></Link></p>

                       <SocialLogin></SocialLogin>
                    </div>
                    {
                        logInError && <p className="text-red-700">{logInError}</p>
                    }
                    {
                        successLogin && <p className="text-green-600">{successLogin}</p>
                    }
                </div>
            </div>
        </div>
    
    );
};

export default Login;