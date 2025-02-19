import React from "react";
import { Navigate } from "react-router";

export class Redirector extends React.Component {
	constructor(){
		super();

		this.state = {
			shouldRedirect: false
		}

		setTimeout(() => {
			this.setState({
				...this.state,
				shouldRedirect: true
			});
		}, 5000);
	}

	render(){
		if (this.state.shouldRedirect){
			return <Navigate to={"/"} />
		} else {
			return (<p>This page will redirect in 5 seconds...</p>)
		}
	}
}