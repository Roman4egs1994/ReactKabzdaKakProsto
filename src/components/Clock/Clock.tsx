import React, {useEffect, useState} from "react"
import AnalogClockRoma from "./AnalogClockRoma";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";




/////////////////////////////////////////////////////////////////////////////////////////////////////
//Общие пропсы
export type ClockViewPropsType = {
    date: Date
}
/////////////////////////////////////////////////////////////////////////////////////////////////////


type PropsType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => { //Зачистка , когда закрываем компоненту
            clearInterval(intervalID)
        }
    }, []) //Запускаем 1 раз




    let view;
    switch (props.mode) {
        case "analog" :
            view = <AnalogClock date={date}/>
            break;
        case "digital":
        default :
            view = <DigitalClock date={date}/>
    }


    return (
        <>
            {/*//1 вариант*/}
            {/*{*/}
            {/*    props.mode === "digital"*/}
            {/*    ? <div>*/}
            {/*            <span>{hoursString}</span>*/}
            {/*            :*/}
            {/*            <span>{minutesString}</span>*/}
            {/*            :*/}
            {/*            <span>{secondsString}</span>*/}
            {/*        </div>*/}
            {/*        : <div>ANALOG</div>*/}
            {/*}*/}

            {/*2 вариант*/}
            {view}
        </>
    )
}





