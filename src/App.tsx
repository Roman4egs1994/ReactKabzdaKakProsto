import React, {useState} from 'react';
import './App.css';
import { RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRatingUpdate} from "./components/SelfUncontrolledRatingUpdate/UncontrolledRatingUpdate";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/SelfControlledAccordion/UncontrolledAccordion";
import {UncontrolledAccordionNew} from "./components/UncontrolledAccordionNew/UncontrolledAccordionNew";




function App() {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let[switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className="App">

            {/*<UncontrolledOnOff onChange ={setSwitchOn} /> {switchOn.toString()}*/}
            {/*<UncontrolledAccordion titleValue={'vava'}/>*/}

            {/*<UncontrolledAccordionNew titleValue={'NEW'}/>*/}
        </div>
    );
}


export default App;
