import React from 'react';




type ItemType = {
    title:string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value:any)=> void
    items:ItemType[]
}


export const Select = (props:SelectPropsType) => {
    return (
        <div>

            {/*filter или find*/}
            <div>{}</div>

            {props.items.map((el,index) => <div>{el.title}</div>)}
        </div>
    );
};


