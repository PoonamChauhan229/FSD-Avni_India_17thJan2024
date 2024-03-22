import ProfileCard from "./ProfileCard";

function ProfileCardWithoutMapMethod(){
    return(
        <>
        {/* <h1>Hello World!!</h1> */}

        {/* React */}
        {/* JS  not able to use it >args || params  not able to use it directly*/}
        {/* {ProfileCard()} */}

        {/* REact 1 way */}
        {/* <ProfileCard></ProfileCard> */}

        {/* React 2 way most used onne */}
        <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name={"Salman"} nickname="Bhai"/> 

        <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name={"Sharukh"} nickname="Badhshah"/> 

        <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name={"Avni"} nickname="Gungun"/> 

        <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name={"Poonam"} nickname="Poornima"/> 

        <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name={"Shivam"} nickname="Shiva"/> 

        <ProfileCard image={"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"} name={"Amisha"} nickname="Ammu"/> 

        </>
    )
   
}
export default ProfileCardWithoutMapMethod;

















