import React, {useState} from 'react';
import {ComponentMeta } from '@storybook/react';
import {action, actions} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;



const callback = action('Accordion mode change event fired ')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion onClick={onClickCallback} titleValue={'Hello ,Im Collapsed'} collapsed={true} onChange={callback} items={[]}/>

export const UnCollapsedMode = () => <Accordion  onClick={onClickCallback} titleValue={'Hello ,Im uncollapsed'} collapsed={false}  onChange={callback} items={[{title:'Ivan', value: 1},{title:'Valera', value: 2},{title:'Roma', value: 3}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
   return <Accordion
       titleValue={"Users"}
       collapsed={value}
       onChange={()=>setValue(!value)}
       items={[
           {title:'Ivan', value: 1},
           {title:'Valera', value: 2},
           {title:'Roma', value: 3}
       ]}
       onClick={onClickCallback}
   />
};
