import { NavLink } from "react-router";


export function Navbar(){

	return(
		<nav>
			<NavLink to={"/"}>
				Home
			</NavLink>
			<NavLink to={"/about"}>
				About
			</NavLink>
			<NavLink to={"/projects"}>
				Projects
			</NavLink>
			<NavLink to={"/contact"}>
				Contact
			</NavLink>
		</nav>
	)
}