import React from "react";
import { Link } from "react-router-dom";
import { StyledNavber } from "./styles/Navbar.styled";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../static/images/logo.png";
import SearchLogo from "../static/images/search.png";
import UserLogo from "../static/images/user.png";
import CartLogo from "../static/images/cart.png";
import Cart from "../core/Cart";
import { useStateContext } from "../context/StateContext";

import { isAuthenticated } from "../auth/helper";

const Navbar = () => {
	const navigate = useNavigate();

	const { showCart, setShowCart, totalQuantities } = useStateContext();

	const handleOnClickProfile = () => {
		if (isAuthenticated()) {
			navigate("/profile");
		} else {
			navigate("/auth/signin");
		}
	};

	return (
		<StyledNavber>
			<div className="logo-container">
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
			</div>
			<div className="nav-links">
				<button
					type="button"
					className="cart-icon"
					onClick={() => setShowCart(true)}
				>
					<BsFillCartFill />
					<span className="cart-item-qty">{totalQuantities}</span>
				</button>
				<FaUserAlt
					className="cart-icon"
					onClick={handleOnClickProfile}
				/>
			</div>
			{showCart && <Cart />}
		</StyledNavber>
	);
};

export default Navbar;
