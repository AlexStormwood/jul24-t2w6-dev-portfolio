import { Outlet } from "react-router";


export function BasePageLayout(){

	return(
		<>
			<Header />
			
			<Outlet />

			<Footer />
		</>
	)
}