import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export function BasePageLayout(){

	return(
		<>
			<Header />
			
			<Outlet />

			<Footer />
		</>
	)
}