import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}



export const UncontrolledRatingUpdate = (props: RatingPropsType) => {


    let [value, setValue] = useState(0)

    return (
        <div>
            <Stars selected={value > 0} setValue = {()=>{setValue(1)}} />
            <Stars selected={value > 1} setValue = {()=>{setValue(2)}} />
            <Stars selected={value > 2} setValue = {()=>{setValue(3)}} />
            <Stars selected={value > 3} setValue = {()=>{setValue(4)}} />
            <Stars selected={value > 4} setValue = {()=>{setValue(5)}} />
        </div>

    )

}



type StarsPropsType = {
    selected: boolean
    setValue: ()=> void
}

const Stars = (props: StarsPropsType) => {

    return <span onClick={()=> {props.setValue()}}>{props.selected ? <b> star </b> : "star "}</span>
}
