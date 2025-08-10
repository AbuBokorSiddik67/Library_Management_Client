import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContexts } from "../../../contexts/AuthContexts";

const Login = () => {
	const { googleSignIn, loginUser } = useContext(AuthContexts);
	const location = useLocation();
	const navigate = useNavigate();

	// handle login email % password
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const newData = Object.fromEntries(formData.entries());
		const { email, password } = newData;
		// console.log(email, password);
		loginUser(email, password)
			.then(() => {
				Swal.fire({
					title: "Log in Successfully!",
					icon: "success",
					draggable: true,
				});
				navigate(location.state ? location.state : "/");
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
	// handle login with googlePopUp
	const handleGoogleLogin = () => {
		googleSignIn()
			.then((result) => {
				if (result) {
					Swal.fire({
						title: "Login Successfully !!!",
						icon: "success",
						draggable: true,
					});
				}
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((error) => {
				if (error) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong!",
						footer: '<a href="#">Why do I have this issue?</a>',
					});
				}
			});
	};

	return (
		<div className="w-full max-w-md max-sm:w-[80%] p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800 mt-20 mb-20 mx-auto">
			<h2 className="mb-3 text-3xl font-semibold text-center">
				Login to your account
			</h2>
			<p className="text-sm text-center text-gray-600">
				Don't have account?
				<NavLink
					to="/register"
					className="focus:underline hover:underline text-blue-500"
				>
					Sign up here
				</NavLink>
			</p>
			{/* Google sign in option */}
			<div className="my-6 space-y-4">
				<button
					onClick={handleGoogleLogin}
					aria-label="Login with Google"
					type="button"
					className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-violet-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						className="w-5 h-5 fill-current"
					>
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
					<p>Login with Google</p>
				</button>
			</div>
			<div className="flex items-center w-full my-4">
				<hr className="w-full text-gray-600" />
				<p className="px-3 text-gray-600">OR</p>
				<hr className="w-full text-gray-600" />
			</div>
			{/* Login Form */}
			<form onSubmit={handleLogin} className="space-y-8">
				<div className="space-y-4">
					{/* Email */}
					<div>
						<label className="input validator w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800">
							<svg
								className="h-[1em] opacity-50"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<g
									strokeLinejoin="round"
									strokeLinecap="round"
									strokeWidth="2.5"
									fill="none"
									stroke="currentColor"
								>
									<rect width="20" height="16" x="2" y="4" rx="2"></rect>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
								</g>
							</svg>
							<input
								type="email"
								name="email"
								autoComplete="userEmail"
								placeholder="hello@hi.com"
								required
							/>
						</label>
						<div className="validator-hint hidden">
							Enter valid email address
						</div>
					</div>
					{/* Password */}
					<div>
						<label className="input validator w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800">
							<svg
								className="h-[1em] opacity-50"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<g
									strokeLinejoin="round"
									strokeLinecap="round"
									strokeWidth="2.5"
									fill="none"
									stroke="currentColor"
								>
									<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
									<circle
										cx="16.5"
										cy="7.5"
										r=".5"
										fill="currentColor"
									></circle>
								</g>
							</svg>
							<input
								type="password"
								name="password"
								required
								placeholder="Password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
								autoComplete="new-password"
							/>
						</label>
						<p className="validator-hint hidden">
							Must be more than 8 characters, including
							<br />
							At least one number <br />
							At least one lowercase letter <br />
							At least one uppercase letter
						</p>
					</div>
				</div>
				<button
					type="submit"
					className="w-full px-8 py-3 font-semibold rounded-md bg-green-600 text-gray-50"
				>
					Sign in
				</button>
				<p className="text-sm text-center text-blue-600">Forget Password ?</p>
			</form>
		</div>
	);
};

export default Login;
