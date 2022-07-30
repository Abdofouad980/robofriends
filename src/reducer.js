import {REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED,CHANGE_SEARCH_FIELD} from './constants.js';
const intialStateSearch={
	searchField:''
}//for reducer must get action what is empty first
//and then make reducer that have state and action comes from action.js type and payload
export const searchRobots =(state=intialStateSearch,action={}) =>{
	// console.log(action.type)
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
		return {...state,searchField:action.payload};
		default:
		return state;
	}
}//go to 3 principles
//we get update action.payload 
//and store is initial state and 
//new one is{}
// we can make it like {...state,searchField:action.payload} or Object.assign({},state,{searchField:action.payload});
//we prefer switch can make many cases but until this not making any connecting 
const intialStateRobots={
	isPending:false,
	robots:[],
	error:''
}
export const requestRobots =(state=intialStateRobots,action={}) =>{
	// console.log(action.type)
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
		return Object.assign({},state,{isPending:true});
		case REQUEST_ROBOTS_SUCCESS:
		return Object.assign({},state,{robots:action.payload,isPending:false});
		case REQUEST_ROBOTS_FAILED:
		return Object.assign({},state,{error:action.payload,isPending:false});
		default:
		return state;
	}
}