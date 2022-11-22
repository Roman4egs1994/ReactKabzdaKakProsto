import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarsPropsType = {
    // selected: boolean
}

export const UncontrolledRating = (props: RatingPropsType) => {



    return (
        <div>
            <Stars/>
            <Stars/>
            <Stars/>
            <Stars/>
            <Stars/>
        </div>
    )

}

const Stars = () => {

    let [select, setSelect] = useState(false)
    const onStar = {
        fontWeight: select ? "900" : "600"
    }

    const onClickHandler = () => {
         if (select) {
             setSelect(false)
         } else {
             setSelect(true)
         }
    }

    return (
        <>
            <span style={onStar}> star </span><button onClick={onClickHandler}>On</button>
        </>

    )
}