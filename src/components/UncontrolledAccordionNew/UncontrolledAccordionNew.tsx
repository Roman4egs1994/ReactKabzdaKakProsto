import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type  AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}






export const UncontrolledAccordionNew = (props: AccordionPropsType) => {


    // let[collapsed, setCollapsed] = useState(true)
    let[state, setDispatch] = useReducer(reducer,{collapsed: false})


    const onClickHandler = () => {
        // setCollapsed(!collapsed)
        setDispatch({type:"XXX"})
    }

    return (
        <div>
            <AccordionTitleNew title={props.titleValue } onClick={onClickHandler}/>
            { !state.collapsed && <AccordionBodyNew/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export const AccordionTitleNew = (props: AccordionTitlePropsType) => {
    return (
        <>
            <h1 onClick={()=> {props.onClick()}}>{props.title}</h1>
        </>
    )
}

export const AccordionBodyNew = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}