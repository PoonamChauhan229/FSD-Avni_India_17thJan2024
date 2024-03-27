import { useState } from "react";

function ProfileCard(props){
    // console.log(props)// object
    // console.log(props.image)
    // console.log(props.name)
    // time taken to complete 1 card
    // 4 min , using ajs varaible

    // like and disike button
    // create as an compoent
    const [time,setTime]=useState(5)
    const [btnName,setBtnName]=useState("Given")
    const myStyle={
        padding:"4px",
        color:"blue",
        backgroundColor:"pink",
        marginTop:"2px"
    }
     return(
        <>
        {/* <div className="border">
            <img className='profile-pic'src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" />
            <h2>Welcome Poonam</h2>
            <h3>NickName: XYZ</h3>
        </div> */}

        <div className="border">
            <img className='profile-pic'src={props.image} alt="" />
            <h3 style={myStyle}>Welcome {props.name}</h3>
            {/* inline css in react */}
            {/*
             style={{marginRight:"10px"}}
            // object 
            document.style.marginRight="value"
            // margin-right:"10px"; color:"red"
            // {marginRight:"10px"}
            
            
            */}
            <h4 style={{color:"orange",marginBottom:"5px",marginTop:"4px"}}>NickName: {props.nickname}</h4>
            <h4 style={myStyle}>Time {btnName}:{time} mins</h4>
            <button style={myStyle} onClick={()=>{
                // time+10
                setTime(time+10)
                setBtnName("Taken")
                }}>Update Time</button>
        </div>
        </>
    )
}
export default ProfileCard;
//class for styling
//class="" || Classes are the reserved keyword ||OOPS> class classname
//className=""
//params and args is js 
//user dependent > args > recive > params> display
//calling ut function > function()// traditions and params and args wont work.
// html tag > calling tag
// attribute ={"attribute value"}// args

// React > Properties > Props 

// reusabilty