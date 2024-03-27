//JSX > JAVASCRIPT XML > 
//HTML Like SYNTAX we are using
//YOU WANT TO USE JS INSDE HTML > {}
//HTML
//Components> Building block
//Functional Component
//Class Component 

//Functional componnet
//file name & functionname is 99% same
//return statement
// return 1 JSX > React.Fragment <>code....</>
//export the file > in other place u can import it

// named 
// >export const function functionname(){return(<> JSX code....</>)}
// > import {functionname} from './path'


// default 
// >function functionname(){return(<> JSX code....</>)} export default functioname
// > import functionname from './path'
// Create the files strating with a capital letter > import becomes easy for us


function functioname(){
  return(
    <>
    
    </>

  )

}
export default functioname

// Components Folder
// src folder> Componnets
src/Components


Hooks
// functions
//why need ?

React State Variable
// hooks > function
useState Hooks

const [state,setState]=useState()
state > react state variable
setState()> Function by default > update ur state
// state> intitial value > 500
const [state,setState]=useState(500)
initial values > "",number,[],null,empty,{},boolean
const [state,setState]=useState([])
// state and setstste > syntax name
//increase the time
const [time,setTime]=useState()
const [speed,setSpeed]=useState(50)


// let a=90
//let time=7000



