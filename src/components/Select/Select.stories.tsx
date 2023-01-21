import React, {useState} from 'react';
import {Select} from "./Select";
import {ComponentMeta} from "@storybook/react";
import {action, actions} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select
};


export const BaseExample = () => {
    const [value, setValue] = useState('2');

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "UlsK"},
                    {value: "3", title: "Kiev"}
                ]}
            />
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "UlsK"},
                    {value: "3", title: "Kiev"}
                ]}
            />
        </>
    )
}


