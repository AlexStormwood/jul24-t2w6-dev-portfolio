import { Link } from "react-router";


export function HomePage(){

	return(
		<>
			<h1>Homepage component as a page!</h1>
			<p>Welcome to the portfolio! Look around and be in awe of my awesome skill!</p>

			<Link to={"/contact"} >
				Contact me!
			</Link>
			{/*   to={"/projects/bananas"} */}
		</>
	)
}