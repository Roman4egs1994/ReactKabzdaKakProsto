import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/SelfControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/SelfUncontrolledRating/UncontrolledRating";
import {UncontrolledRatingUpdate} from "./components/SelfUncontrolledRatingUpdate/UncontrolledRatingUpdate";

function App() {
    return (
        <div className="App">
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>



            <UncontrolledRatingUpdate/>
            <Rating value={3}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>


        </div>
    );
}


export default App;
