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
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundary';
import './App.css';
import Scroll from '../components/Scroll'
class App extends Component{
  constructor(){
    super()
    this.state=
      {robots: [],
       searchfield:''}
        // console.log('constructor','1');
      }
       
       componentDidMount(){
        //  console.log('check');
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=> {return response.json();}).then(users=>{this.setState({robots:users})})
        // console.log('compo','2');
       }
  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
   
  //  console.log(filterRobots);
 }
   render() {
    const {robots ,searchfield}=this.state;
    const filterRobots= robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    // console.log('render','3');
    return !robots.length?
    <h1 className='f1 tc'>Loading .....</h1>:
    ( 
      <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
           <SearchBox searchChange={this.onSearchChange} />
           <Scroll>
           <ErrorBoundry>
          <CardList robots={filterRobots} />
          </ErrorBoundry>
          </Scroll> 
          </div>)
             }
   
    }
export default App;
