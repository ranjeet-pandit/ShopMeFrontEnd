import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";

const UserDashBoard = () => {
	const navigate = useNavigate();
	const { email } = isAuthenticated().user;

	const handleSubmit = () => {
		signout();
		navigate("/");
	};

	return (
		<div>
			{email}
			<button onClick={handleSubmit}>Sign Out</button>
		</div>
	);
};

export default UserDashBoard;
