import Lottie from "lottie-react";
import LoginAnimationData from "../../assets/login.json";
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from "../../hooks/useTitle";

const Login = () => {
    const { loginUser, signInWithGoogle, errorMessage, setErrorMessage } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    useTitle("Login");

    // handle login user email and password
    const handleLoginUser = (e) => {
        e.preventDefault();
        setErrorMessage("");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                // const loggedInUser = result.user;
                // console.log(loggedInUser);
                navigate(from, { replace: true });
                toast("✅Log in Successfully!", {
                    autoClose: 2000,
                    pauseOnHover: true,
                });
            })
            .catch((error) => {
                // console.log(error.message);
                setErrorMessage(error.message);
            })

        // reset form after successful
        form.reset();
    }
    // handle login with google pop up
    const signInWithGooglePopUp = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                toast("✅Log in Successfully!", {
                    autoClose: 2000,
                    pauseOnHover: true,
                });
                navigate(from, { replace: true });

            }).catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }
    return (
        <div className="hero min-h-screen max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 w-full">
                    <Lottie animationData={LoginAnimationData} loop={true} />
                    <div className="flex justify-center">
                        <Link to="/"> <button className="btn btn-warning">Back To Home</button> </Link>
                    </div>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body pb-0">
                        <h2 className="text-center text-3xl font-bold">Log in</h2>
                        {
                            errorMessage && <div className="alert alert-warning shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{errorMessage}</span>
                                </div>
                            </div>
                        }
                        <form onSubmit={handleLoginUser}>
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                        </form>
                        <span className="text-center"> <small>haven't any account please <Link to="/signUp" className="text-yellow-500 underline">Sign up</Link></small></span>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex justify-center mb-5'>
                        <button onClick={signInWithGooglePopUp} className="border-2 rounded-lg py-2 px-4 flex justify-center items-center gap-3 hover:shadow-xl transition-all duration-300" > <img className=" w-20" src="https://i.ibb.co/nqGDySc/google-Sign.png" alt="" /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;