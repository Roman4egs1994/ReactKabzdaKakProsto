import React from "react";

type  AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string

}


export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {props.collapsed === false && <AccordionBody/>}
        </div>
    )


}



const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}