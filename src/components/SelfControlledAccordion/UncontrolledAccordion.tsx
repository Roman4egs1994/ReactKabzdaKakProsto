import React, {useState} from "react";

type  AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {


    let[collapsed, setCollapsed] = useState(true)


    const onClickHandler = () => {
       //1 cпособ
        // if (collapsed) {
        //     setCollapsed(false)
        // }
        // if (!collapsed) {
        //     setCollapsed(true)
        // }

        //2 способ
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/><button onClick={onClickHandler}>toogle</button>
            { !collapsed && <AccordionBody/>}
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