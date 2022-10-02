import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Login from "../pages/Login";
import {Provider} from "../context/context";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
            <ComponentPreview path="/Provider">
                <Provider/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;