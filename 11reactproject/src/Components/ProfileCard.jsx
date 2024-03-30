import { useState } from "react";

function ProfileCard(props){
    // console.log(props)// object
    // console.log(props.image)
    // console.log(props.name)
    // time taken to complete 1 card
    // 4 min , using ajs varaible

    // like and disike button
    // create as an compoent
    
    //conditional rendering
    // if (){//trueval}{//elsefasevalue}
    //if else
    //ternary operator> conditional rendering
    // (condition)?"truevalue":"falsevale"
    const [show,setShow]=useState(false)
    const [showSummary,setShowSummary]=useState(false)
    const [time,setTime]=useState(5)
    const [btnName,setBtnName]=useState("")
    const myStyle={
        padding:"4px",
        color:"blue",
        backgroundColor:"pink",
        marginTop:"2px"
    }
    const myStyle2={
        padding:"4px",
        color:"blue",
        backgroundColor:"cyan",
        marginTop:"2px",
        // display:"none"
        //conditional rendering
        display:show?"block":"none"
        
    }
    const myStyle3={
        padding:"4px",
        color:"white",
        backgroundColor:"green",
        marginTop:"2px",        
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
            <h4 style={myStyle2}>Time Given:5 mins</h4>
            {show?<h5 style={myStyle}>Time {btnName}:{time} mins</h5>:null}

            {/* //conditional rendering */}
            {show && <h5 style={myStyle3}>Task Completed</h5>} {/* if(true){val} */}
            

            <button style={myStyle} onClick={()=>{
                // time+10
                setTime(time+10)
                setBtnName("Taken")
                setShow(true)
                console.log(show)
                }}>Update Time</button>
                <p></p>
            <button onClick={()=>
                {
                    setShowSummary(!showSummary)
                    console.log(showSummary)
                    }}>{showSummary?"💚":"💛"}</button>
            <p></p>
            {showSummary && <span>Lorem ipsum dolor sit amet.</span>}
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