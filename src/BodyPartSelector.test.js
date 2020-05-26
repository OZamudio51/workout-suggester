import React from 'react';
import ReactDOM from 'react-dom';
import BodyPartSelector from './BodyPartSelector';
import { BrowserRouter } from 'react-router-dom';

describe('BodyPartSelector component', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter> <BodyPartSelector /> </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
