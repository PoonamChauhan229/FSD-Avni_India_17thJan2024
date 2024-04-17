import ProfileCard from "./ProfileCard";
import ProfileCardMapMethod from "./ProfileCardMapMethod";
import ProfileCardWithoutMapMethod from './ProfileCardWithoutMapMethod'
import image01 from '../assets/image01.jpg'
function Display(){
    return(
       <>
       {/* <ProfileCardWithoutMapMethod/> */}
       <ProfileCardMapMethod/>
       <img src={image01} alt=""  height={150} width={150}/>
       <img src='../assets/image01.jpg' alt=""  height={150} width={150}/>
       

       {image01}
        </>
    )

}
export default Display;