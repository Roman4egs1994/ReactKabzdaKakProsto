import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";


export default {
    title: "setTimeoutAndHomeworkGetTime",
}

export const SetTimeoutExample = () => {

    // console.log("SetTimeoutExample")

    const dataN = () => {
        const date = new Date()

        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        let jsxData = `${hours} : ${minutes} : ${seconds}`

        if (hours < 10) {
            jsxData = `0${hours} : ${minutes}: ${seconds}`
        }
        if (minutes < 10) {
            jsxData = `${hours} : 0${minutes}: ${seconds}`
        } else if (hours < 10 && minutes < 10) {
            jsxData = `0${hours} : 0${minutes}: ${seconds}`
        }
        else if (seconds < 10) {
            jsxData = `${hours} : ${minutes}: 0${seconds}`
        } else if (seconds < 10 && minutes <10 && hours <10) {
            jsxData = `0${hours} : 0${minutes}: 0${seconds}`
        }
        return jsxData
    }

    const data = dataN()
    const [date, setDate] = useState(data)

    useEffect(() => {
      const intervalId =  setInterval(() => {
            setDate((data) => data + 1)
        }, 1000)


        return () => {
          clearInterval(intervalId) //Выключение при закрытие компоненты
        }

    }, [date]) //Запускается 1 раз

    return (
        <>
            {data}
        </>
    )
}

