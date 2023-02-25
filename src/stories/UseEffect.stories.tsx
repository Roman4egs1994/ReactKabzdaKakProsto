import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";


export default {
    title: "useEffect demo",
}
//UseEffect, срабатывает только тогда , когда разметка уже отобразилась на страничке

export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")

    useEffect(()=> {
        console.log("useEffect every time")
        document.title = counter.toString()
    }) //Срабатывает всегда


    useEffect(()=> {
        console.log("useEffect only first render (componentDidMount")
        document.title = counter.toString()
    },[]) //Срабатывает 1 раз (когда компонента вмонтировалась

    useEffect(()=> {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    },[counter]) //Срабатывает когда counter меняется

    //ЗАВИСИМОСТИ UseEffect
    // [] - сработает 1 раз
    // [counter] - будет срабатывать каждый раз, когда будет связан с  "counter"
    // }) - без зависимостей , срабатывает всегда
    return (
        <>
            hello, {counter} {fake}
        <button onClick={()=>setFake(fake + 1)}>+</button>

        </>
    )
}