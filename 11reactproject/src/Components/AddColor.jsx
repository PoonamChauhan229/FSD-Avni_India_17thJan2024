import { useState } from "react";


function AddColor(){
    let arr=["red"]
    // console.log(...arr)
    // console.log([...arr])
    // console.log([...arr,"green"])
    const [colorVal,setColrVal]=useState("red")
    const [colorList,setColorList]=useState([colorVal])
    const inputStyle={
        backgroundColor:colorVal,
        // color:"white"
    }
    return(
        
        <>
        
        <input style={inputStyle} type="text" name="" id="" value={colorVal}
        onChange={(e)=>{setColrVal(e.target.value)}}
        
        />
        <button
            onClick={()=>{setColorList([...colorList,colorVal])}}>
            Add Color</button>

            <p>{JSON.stringify(colorList)}</p>
            {console.log(colorList)}

{
    colorList.map((element,index)=>(<div style={{backgroundColor:element,height:"30px",width:"300px"}}></div>
    ))
}


        
        </>
    )
   
}
export default AddColor;



