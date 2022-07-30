import {REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED,CHANGE_SEARCH_FIELD} from './constants.js';

export const setSearchField =(text)=> {
	// console.log(text);
	return {
	type:CHANGE_SEARCH_FIELD,
	payload:text}}
//this is an action and is captilize and 
//and run in object cuz when error in typing not stop allthings
// remove prackets not return all so must write return 
//i want to see text in console.log
export const requestRobots = ()=>(dispatch)=>{
	dispatch({type:REQUEST_ROBOTS_PENDING});
	fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=> dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
        .catch(error=> dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
}
// dispatch using here to dispatch actions
//cuz action not return as the pervious action 
//so make higher order fun return fun and then return action and that what thunk 
//want to go throw middleware and show action and show the power of redux