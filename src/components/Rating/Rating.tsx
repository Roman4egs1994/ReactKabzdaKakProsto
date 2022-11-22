import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarsPropsType = {
    selected: boolean
}

export const Rating = (props:RatingPropsType) => {
    console.log('rendering Stars')

    return  (
        <div>
            <Stars selected={props.value > 0}/>
            <Stars selected={props.value > 1}/>
            <Stars selected={props.value > 2}/>
            <Stars selected={props.value > 3}/>
            <Stars selected={props.value > 4}/>
        </div>
    )

}

const Stars = (props: StarsPropsType) => {
    if (props.selected === true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }
}