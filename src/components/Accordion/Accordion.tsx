import React from "react";

type  AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType[]
    onClick: (value:any) => void
}

type ItemType = {
    title:string
    value: any
}


export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items = {props.items} />}
        </div>
    )


}


type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <>
            <h1 onClick={props.onChange}>{props.title}</h1>
        </>
    )
}



type AccordionBodyPropsType = {
    items:  ItemType[]
    onClick: (value:any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el,index) => <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    )
}