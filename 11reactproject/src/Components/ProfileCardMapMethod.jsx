import ProfileCard from "./ProfileCard";

function ProfileCardMapMethod(){
    const profiles=[
        {
        name:"Avni",
        nickname:"Gungun",
        image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        },{
            name:"Poonam",
            nickname:"Poornima",
            image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        },
        {
            name:"Amisha",
            nickname:"Ami",
            image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        },
        {
            name:"Avni",
            nickname:"Gungun",
            image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            },{
                name:"Poonam",
                nickname:"Poornima",
                image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            },
            {
                name:"Amisha",
                nickname:"Ami",
                image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            },{
                name:"Poonam",
                nickname:"Poornima",
                image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            },
            {
                name:"Amisha",
                nickname:"Ami",
                image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            },{
                name:"Poonam",
                nickname:"Poornima",
                image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            },
            {
                name:"Amisha",
                nickname:"Ami",
                image:"https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            }
    ]
    return(

        <>
        {/* array */}
        {[5,4,6].map((element)=>console.log(element))}

        {/* array of objects */}
        {[{num1:5},{num1:4},{num1:6}].map((element)=>console.log(element.num1))}

        {/* Map method
            array > 
            array of objects 
            //image
            //name
            //nickname
            //6 times
            //6 objects
            //map> array > array of 6 objects
            //  
        
        */}
        
      
        <div className="App">
            {profiles.map((element)=> <ProfileCard name={element.name} image={element.image} nickname={element.nickname}/>)}      
        
        </div>
        </>
    )
}
export default ProfileCardMapMethod;

















