import {reducer, StateType} from "./reducer";

test('collapsed, should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: "XXX"})

    //expected
    expect(newState.collapsed).toBe(true)
})


test('collapsed, should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: "XXX"})

    //expected
    expect(newState.collapsed).toBe(false)
})



test('collapsed, should be throw error bacause action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //expected
    expect(()=>{
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})