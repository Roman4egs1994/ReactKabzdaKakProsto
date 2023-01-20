import {ChangeEvent, useRef, useState} from "react";



export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return <><input onChange={onchangeHandler}/> - {value}</>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const onclickButtonHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onclickButtonHandler}>save</button>
        - actual value: {value}</>;
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input  type={'checkbox'} checked={parentValue}  onChange={onChangeHandler}/>

}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState <string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>ULC</option>
        <option value={'3'}>Bel</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>