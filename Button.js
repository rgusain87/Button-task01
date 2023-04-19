import { useState } from "react"

export default function Button(props) {
  console.log(props)
  const {initialCendol , color} = props
  const [cendol,setCendol1] = useState(initialCendol)
  const [isClicked, setIsClicked] = useState(false);

 

  function handleIncrement(e) {
    // console.log(e.target.value)
    setCendol1(cendol +10)
    setIsClicked(!isClicked);
    color(isClicked,cendol)
  }

  const buttonStyle = {
    backgroundColor: isClicked ? 'yellow' : 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div className="card">
     
      <button style={buttonStyle} onClick={(e)=>{handleIncrement(e)}}>
      {isClicked ? 'Change Colour' : 'Change Colour'} 
    </button>
    </div>
  )
}
