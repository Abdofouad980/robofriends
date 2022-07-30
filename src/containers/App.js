// import logo from './logo.svg';
// import './index.css';
// class App extends React.Component{
//   render() { return(
//       <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>);}
// }


import React,{Component} from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundary';
import './App.css';
import Scroll from '../components/Scroll';
import {setSearchField,requestRobots} from '../action';
const mapStateToProps = state =>{
        return {
        searchField:state.searchRobots.searchField,
        isPending:state.requestRobots.isPending,
        robots:state.requestRobots.robots,
        error:state.requestRobots.error
        }
      }
      // searchField:state.searchRobots.searchField instead of send searchfield to state throw piece of piece
        const mapDispatchToProps= (dispatch)=>{
          return {onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
            onRequestRobots:()=>dispatch(requestRobots())
          }
        }
class App extends Component{
  // constructor(){
  //   super()
  //   this.state=
  //     {robots: [],
  //      // searchfield:''
  //    }
  //       // console.log('constructor','1');
  //     }there is no state to get anything if robots or searchfield
       componentDidMount(){
        // console.log(this.props.store.getState())
        //  console.log('check');
        // fetch('http://jsonplaceholder.typicode.com/users')
        // .then(response=> {return response.json();}).then(users=>{this.setState({robots:users})})it comes from requests
        // console.log('compo','2');
        this.props.onRequestRobots();
       }
 //  onSearchChange = (event) => {
 //    this.setState({searchfield:event.target.value})
   
 //  //  console.log(filterRobots);
 // }
   render() {
    const {robots,searchField,onSearchChange,isPending}=this.props;
    const filterRobots= robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    // console.log('render','3');
    return isPending?
    <h1 className='f1 tc'>Loading .....</h1>:
    ( 
      <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
           <SearchBox searchChange={onSearchChange} />
           <Scroll>
           <ErrorBoundry>
           <CardList robots={filterRobots} />
           </ErrorBoundry>
           </Scroll> 
           </div>)
             }
   
    }
export default connect(mapStateToProps,mapDispatchToProps)(App);
