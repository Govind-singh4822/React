import React from "react";
import Entry from "./Entery";
import emojpedia from "../emojipedia";

function crateEntery(emojiterm)
{
    return(
        <Entry
            key={emojiterm.id}
            emoji={emojiterm.emoji}
            name={emojiterm.name}
            description={emojiterm.meaning}
        />
    );
}

function App(){
    return( 
        <div>
            <h1>emojpedia</h1>

            <dl className="dicitionary">

               {emojpedia.map(crateEntery)}

            </dl>
        </div>
    );
}
export default App;