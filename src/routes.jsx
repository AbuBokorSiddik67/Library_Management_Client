import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import RootLayouts from "./rootLayouts/RootLayouts";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Login from "./pages/Components/Login/Login";
import Register from "./pages/Components/Register/Register";
import AddData from "./pages/Home/AddData/AddData";
import UpdateData from "./pages/Home/UpdateData/UpdateData";
import PrivetRoute from "./contexts/PrivetRoute";
import AllBooks from "./pages/Components/AllBooks/AllBooks";
import Loading from "./pages/Components/Loading/Loading";
import BookDetails from "./pages/Components/BookDetails/BookDetails";
import CatScience from "./pages/Components/CatScience/CatScience";
import CatFantasy from "./pages/Components/CatFantasy/CatFantasy";
import CatHistory from "./pages/Components/CatHistory/CatHistory";
import CatBio from "./pages/Components/CatBio/CatBio";
import BorrowedBooks from "./pages/Components/BorrowedBooks/BorrowedBooks";
import About from "./pages/Home/About/About";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayouts,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/add",
				element: (
					<PrivetRoute>
						<AddData></AddData>
					</PrivetRoute>
				),
			},
			{
				path: "/borrowed",
				element: (
					<PrivetRoute>
						<BorrowedBooks></BorrowedBooks>
					</PrivetRoute>
				),
			},
			{
				path: "/about",
				element: (
					<About></About>
				),
			},
			{
				path: "/update/:id",
				hydrateFallbackElement: <Loading></Loading>,
				loader: ({ params }) =>
					fetch(
						`https://library-management-server-psi-cyan.vercel.app/books/${params.id}`
					).then((res) => res.json()),
				Component: UpdateData,
			},
			{
				path: "/details/:id",
				hydrateFallbackElement: <Loading></Loading>,
				loader: ({ params }) =>
					fetch(
						`https://library-management-server-psi-cyan.vercel.app/books/${params.id}`
					).then((res) => res.json()),
				Component: BookDetails,
			},
			{
				path: "/all",
				hydrateFallbackElement: <Loading></Loading>,
				loader: () =>
					fetch(
						"https://library-management-server-psi-cyan.vercel.app/books"
					).then((res) => res.json()),
				element: (
					<AllBooks></AllBooks>	
				),
			},
			{
				path: "/science",
				hydrateFallbackElement: <Loading></Loading>,
				loader: () =>
					fetch(
						"https://library-management-server-psi-cyan.vercel.app/books"
					).then((res) => res.json()),
				element: (
					<PrivetRoute>
						<CatScience></CatScience>
					</PrivetRoute>
				),
			},
			{
				path: "/fantasy",
				hydrateFallbackElement: <Loading></Loading>,
				loader: () =>
					fetch(
						"https://library-management-server-psi-cyan.vercel.app/books"
					).then((res) => res.json()),
				element: (
					<PrivetRoute>
						<CatFantasy></CatFantasy>
					</PrivetRoute>
				),
			},
			{
				path: "/history",
				hydrateFallbackElement: <Loading></Loading>,
				loader: () =>
					fetch(
						"https://library-management-server-psi-cyan.vercel.app/books"
					).then((res) => res.json()),
				element: (
					<PrivetRoute>
						<CatHistory></CatHistory>
					</PrivetRoute>
				),
			},
			{
				path: "/biography",
				hydrateFallbackElement: <Loading></Loading>,
				loader: () =>
					fetch(
						"https://library-management-server-psi-cyan.vercel.app/books"
					).then((res) => res.json()),
				element: (
					<PrivetRoute>
						<CatBio></CatBio>
					</PrivetRoute>
				),
			},
		],
	},
]);
