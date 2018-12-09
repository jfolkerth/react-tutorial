import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from './Square';

configure({ adapter: new Adapter() });

it('renders a button', () => {
    const square = shallow(<Square/>);
    expect(square.find('button.square').length).toEqual(1);
});

it('shows value', () => {
   const square = shallow(<Square value={4}/>);
   expect(square.text()).toEqual('4');
});

it('is empty if given no value or null value', () => {
    const squareUndefined = shallow(<Square/>);
    expect(squareUndefined.text()).toEqual('');

    const squareNull = shallow(<Square valure={null}/>);
    expect(squareNull.text()).toEqual('');
});

it('marks with X on click', () => {
   const square = shallow(<Square/>);
   square.simulate('click');
   expect(square.text()).toEqual('X');
});