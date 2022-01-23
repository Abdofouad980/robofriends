import React , {Component} from 'react';
class ErrorBoundry extends Component{
	constructor(props) {
		super(props);//allow to access error 
		this.state ={ 
			hasError :false
		}
	}
componentDidCatch(error,info){
this.setState({hasError: true})
}
//this a life cycle hook to catch error and has to parameter error and info
render(){
	const {hasError}=this.state;
	return hasError?
	<h1>Oooops. that is not good </h1>:
	this.props.children;
}
}
export default ErrorBoundry;