import './App.css'
import AddColor from './Components/AddColor'
import BasicExample from './Components/BasicExample';
import Display from './Components/Display'
import Navbar from './Components/Navbar';
import BootstarpEx from './Components/BootstarpEx';
import AddMovie from './Components/AddMovie';
import { Routes,Route } from 'react-router-dom';
import MovieList from './Components/MovieList';
import Thriller from './Components/Thriller';
import Drama from './Components/Drama';
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route /> path  path='/pathname'|| component to be rendered > element={} */}
      <Route path='/' element={<MovieList/>}/>
      <Route path='/thriller' element={ <Thriller/>}/> 
      <Route path='/drama' element={ <Drama/>}/> 
      <Route path='/addcolor' element={ <AddColor/>}/> 
      <Route path='/btstrp' element={ <BootstarpEx/>}/>       
      <Route path='/reactbtstrp' element={<BasicExample/>}/>
      <Route path='/addmovieBtstrp' element={ <AddMovie/>}/>
      <Route path='/display' element={<Display/>}/> 
    </Routes>

     </>
   
        
  
  )
}

export default App





