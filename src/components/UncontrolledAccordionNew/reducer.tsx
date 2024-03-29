type ActionType = {
    type: string
}


export type StateType = {
    collapsed: boolean
}



export const reducer = (state:StateType, action:ActionType): StateType => {
    switch (action.type) {
        case 'XXX': {
            return   {
                ...state,
                collapsed: !state.collapsed
            };
        }
        default: {
            return state
        }
    }
}
