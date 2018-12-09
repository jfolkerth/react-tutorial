import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from './Square';

configure({ adapter: new Adapter() });

it('renders a button', () => {
    const square = shallow(<Square/>);
    expect(square.find('button.square').length).toEqual(1);
});

it('originally displays nothing', () => {
   const square = shallow(<Square/>);
   expect(square.text()).toEqual('');
});

it('marks with X on click', () => {
   const square = shallow(<Square/>);
   square.simulate('click');
   expect(square.text()).toEqual('X');
});