import React, {useState} from "react";
import {log} from "util";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarsPropsType = {
    selected: boolean
}

export const UncontrolledRatingUpdate = (props: RatingPropsType) => {


    let[value, setValue] = useState(0)

    return (
            <div>
                <Stars selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>
                <Stars selected={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>
                <Stars selected={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>
                <Stars selected={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>
                <Stars selected={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>
            </div>

    )

}


const Stars = (props: StarsPropsType) => {
    if (props.selected) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }
}
