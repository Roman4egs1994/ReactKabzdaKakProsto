import React from "react";

 export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick : (value: RatingValueType) => void
}



export const Rating = (props:RatingPropsType) => {
    console.log('rendering Stars')

    return  (
        <div>
            <Stars selected={props.value > 0} onClick = {props.onClick} value = {1}/>
            <Stars selected={props.value > 1} onClick = {props.onClick} value = {2}/>
            <Stars selected={props.value > 2} onClick = {props.onClick} value = {3}/>
            <Stars selected={props.value > 3} onClick = {props.onClick} value = {4}/>
            <Stars selected={props.value > 4} onClick = {props.onClick} value = {5}/>
        </div>
    )

}



type StarsPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value : RatingValueType) => void
}

const Stars = (props: StarsPropsType) => {
    // if (props.selected === true) {
    //     return <span><b> star </b></span>
    // } else {
    //     return <span> star </span>
    // }

    return <span onClick={()=> {props.onClick(props.value)}}>
        {props.selected ? <b> star </b> : "star "}
    </span>

}