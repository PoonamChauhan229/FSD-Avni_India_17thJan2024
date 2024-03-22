function ProfileCard(props){
    // console.log(props)// object
    // console.log(props.image)
    // console.log(props.name)
    return(
        <>
        {/* <div className="border">
            <img className='profile-pic'src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" />
            <h2>Welcome Poonam</h2>
            <h3>NickName: XYZ</h3>
        </div> */}

        <div className="border">
            <img className='profile-pic'src={props.image} alt="" />
            <h2>Welcome {props.name}</h2>
            <h3>NickName: {props.nickname}</h3>
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