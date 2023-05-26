import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut, setLoading } = useContext(AuthContext);

    // handle log out button
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err.message));
        setLoading(false);
    }



    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >Home</NavLink></li>
                        <li><NavLink
                            to="/allToys"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >All Toys</NavLink></li>
                        {
                            user && <>
                                <li><NavLink
                                    to="/myToys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >My Toys</NavLink></li>
                                <li><NavLink
                                    to="/addToys"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >Add A Toy</NavLink></li>
                            </>
                        }
                        <li><NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >Blogs</NavLink></li>
                        {
                            user && <>
                                <div className="tooltip hover:tooltip-open tooltip-top mt-3" data-tip={user?.displayName}>
                                    <img className="w-12 h-12 rounded-lg " src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/5Rcst90/proile.png"}/>
                                </div>

                            </>
                        }
                    </ul>
                </div>
                <div className="ml-0 md:ml-5">
                    <Link to="/"><img src="https://i.ibb.co/dtgK45q/logo.png" alt="" className="w-14 md:w-20 h-14 md:h-20" /></Link>
                    <p>Kabbo <span className="text-yellow-500 font-bold">Toys</span></p>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >Home</NavLink></li>
                    <li><NavLink
                        to="/allToys"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >All Toys</NavLink></li>
                    {
                        user && <>
                            <li><NavLink
                                to="/myToys"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >My Toys</NavLink></li>
                            <li><NavLink
                                to="/addToys"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >Add A Toy</NavLink></li>
                        </>
                    }
                    <li className=""><NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >Blogs</NavLink></li>
                    {
                        user && <>
                            <div className="tooltip hover:tooltip-open tooltip-top " data-tip={user?.displayName}>
                                <img className="w-10 h-10 rounded-full md:ml-5" src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/5Rcst90/proile.png"} alt="" />
                            </div>

                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><Link onClick={handleLogOut} to="/" className="btn btn-warning">Sign Out</Link></> : <Link to="/login" className="btn btn-warning">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;