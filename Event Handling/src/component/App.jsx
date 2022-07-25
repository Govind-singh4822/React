import React from "react";

function App() {

    const [HeadingText,SetHeadingText] = React.useState("Hellow");
    const [ismouseover,setmouseover] = React.useState(false)

    function Handleclick()
    {
        SetHeadingText("Submitted");
    }

    function Handlemouseover()
    {
        setmouseover(true);
    }

    function mouseout()
    {
        setmouseover(false);
    }

  return (
    <div className="container">

      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{backgroundColor : ismouseover? "black" : "white"}}
        onClick={Handleclick}
        onMouseOver = {Handlemouseover}
        onMouseOut = {mouseout}
        
        >Submit</button>

    </div>
  );
}

export default App;
