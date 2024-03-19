import './App.css'
import ProfileCard from './Components/ProfileCard'

function App() {

  return (
    <>
     <h1>Hello World!!</h1>

     {/* React */}
     {/* JS  not able to use it >args || params  not able to use it directly*/}
     {ProfileCard()}

     {/* REact 1 way */}
     <ProfileCard></ProfileCard>

     {/* React 2 way most used onne */}
     <ProfileCard/> 
     <ProfileCard/> 
     <ProfileCard/> 
     <ProfileCard/> 

     </>
   
        
  
  )
}

export default App





