import React, { useState } from "react"
const ColorContext = React.createContext({
    color:"yellow",
    setColor:()=>{} //얘느 어차피 동작안할애라서 그냥 빈 함수넣어주면됨 
});

export  function ColorContextProvider(props){
    const [color, setColor] = useState("yellow");
    const value={
        color:color,
        setColor:setColor
    }

    return(
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
}

export default  ColorContext;