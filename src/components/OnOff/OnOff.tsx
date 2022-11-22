import React, {useState} from 'react';

type OnOffPropsType = {
   // on: boolean
}


export const OnOff = (props: OnOffPropsType) => {

    console.log('OnOff rendering');

   let[on, setOn]= useState(false);

    console.log('On: ' + on);

    const onStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginTop: "15px",
        marginRight: "2px",
        marginLeft: "10px",
        padding: '3px',
        backgroundColor: on ? "green" : "white",
        cursor: "pointer"
    };
    const offStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: '3px',
        backgroundColor: on ? "white" : "red",
        cursor: "pointer"
    };
    const indicatorStyle ={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
        <div style={offStyle} onClick={()=> {setOn(false)}}>Off</div>
        <div style={indicatorStyle}></div>
        </div>
    );
};

