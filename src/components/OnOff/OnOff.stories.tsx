import React, {useState} from 'react';
import {ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";



export default {
    title: 'OnOff stories',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;


export const OnMode = () => <OnOff on={true} onChange={action("on or off clicked")}/>
export const offMode = () => <OnOff on={false} onChange={action("on or off clicked")}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
   return <OnOff on={value} onChange={setValue}/>
};
