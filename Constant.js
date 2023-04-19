import React ,{useState} from "react";
import './Constant.css'
import Button from "./Button";
export default function Constant() {

  let cendol = 2;
   const [bgColor , setBgColor] = useState(true)
   const [value, setValue] = useState(0)
   
  const isColor = (color,cendol) =>{
    setBgColor(color)
    setValue(cendol)
  }


  return (
    <div className="row">
      <div className="column" style={{backgroundColor:bgColor?"yellow":"blue"}}>

      <h1>  {value}</h1> 
      
      
        
      </div>
   <div className="row2">
      <Button initialCendol={cendol} color={isColor} />
     </div>
</div>
  );
}
 