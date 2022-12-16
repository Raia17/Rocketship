import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";

// TODO: Manage navigation
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		children: [
			{
				path: "test",
				element: <HomePage />,
				children: [
					{
						path: "create/:id",
						element: <HomePage />,
					},
				],
			},
		],
		// TODO: Create Error screen
		errorElement: <HomePage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* TODO Create loading screen for FallbackElement */}
		<RouterProvider router={router} fallbackElement={<HomePage />} />
	</React.StrictMode>
);
