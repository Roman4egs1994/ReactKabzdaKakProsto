import React, {useState} from "react";

type  AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}




export const UncontrolledAccordion = (props: AccordionPropsType) => {


    let[collapsed, setCollapsed] = useState(true)


    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue } onClick={onClickHandler}/>
            { !collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <>
            <h1 onClick={()=> {props.onClick()}}>{props.title}</h1>
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