import React from "react";

function App() {

    const [name,onchange] = React.useState("") ;
    const [headingText,setHeading] = React.useState("");

    function handleChange(event)
    {
       
        onchange(event.target.value);
    }

    function handleClick(event)
    {
      setHeading(name);
      event.preventDefault();
    }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hellow {headingText}</h1>
        <input onChange={handleChange} type="text" placeholder="What's your name?" />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
