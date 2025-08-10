import { NavLink } from "react-router";
import "./index.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContexts } from "../../../contexts/AuthContexts";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContexts);

	const links = (
		<>
			<NavLink
				className="px-1 mx-2 hover:text-green-600 rounded-2xl py-1 font-bold text-[15px]"
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				className="px-1 mx-2 hover:text-green-600 rounded-2xl py-1 font-bold text-[15px]"
				to="/all"
			>
				All Books
			</NavLink>
			{user && <NavLink
				className="px-1 mx-2 hover:text-green-600 rounded-2xl py-1 font-bold text-[15px]"
				to="/add"
			>
				Add Books
			</NavLink>}
			{user && 
			<NavLink
				className="px-1 mx-2 hover:text-green-600 rounded-2xl py-1 font-bold text-[15px]"
				to="/borrowed"
			>
				Borrowed Books
			</NavLink>
				}
			<NavLink
				className="px-1 mx-2 hover:text-green-600 rounded-2xl py-1 font-bold text-[15px]"
				to="/about"
			>
				About
			</NavLink>
		</>
	);
	const linkTow = (
		<>
			<div className="space-x-2 mt-2 pb-2">
				<NavLink
					to="/login"
					className="px-4 py-2 border border-green-200 rounded-xl text-[16px] bg-green-500 hover:bg-green-700 hover:text-white font-extrabold"
				>
					Login
				</NavLink>
				<NavLink
					to="/register"
					className="px-4 py-2 border border-green-200 rounded-xl text-[16px] bg-green-500 hover:bg-green-700 hover:text-white font-extrabold"
				>
					Register
				</NavLink>
			</div>
		</>
	);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				Swal.fire({
					title: "Log Out Successfully!",
					icon: "success",
					draggable: true,
				});
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
					footer: '<a href="#">Why do I have this issue?</a>',
				});
			});
	};

	return (
		<div className="navbar rounded-2xl border border-slate-100 bg-slate-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="lg:hidden text-black ml-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-2 shadow"
					>
						{links}
						{user ? "" : linkTow}
					</ul>
				</div>
				<div className="flex justify-center items-center">
					<a className="text-2xl pl-5 font-extrabold text-green-600">Library Management</a>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">{links}</div>
			<div className="navbar-end mr-2">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn mr-4 btn-ghost btn-circle avatar"
					>
						<div
							title={user?.displayName}
							className="relative group w-10 h-10 rounded-full overflow-hidden"
						>
							<img
								src={
									user ? user.photoURL : "https://i.ibb.co/TBc1TKHR/khhhh.jpg"
								}
								alt="User profile"
								className="w-full h-full object-cover rounded-full border border-transparent group-hover:border-green-400 transition"
							/>
						</div>
					</div>
					{user ? (
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
						>
							<li>
								<button
									onClick={handleLogOut}
									className="font-extrabold text-[15px] bg-red-500"
								>
									Logout
								</button>
							</li>
						</ul>
					) : (
						""
					)}
				</div>
				<div className="max-sm:hidden">{user ? "" : linkTow}</div>
			</div>
		</div>
	);
};

export default Navbar;