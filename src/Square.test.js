import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from './Square';

configure({adapter: new Adapter()});

it('renders a button', () => {
    const square = shallow(<Square onClick={() => {}}/>);
    expect(square.find('button.square').length).toEqual(1);
});

it('shows value', () => {
    const square = shallow(<Square value={4} onClick={() => {}}/>);
    expect(square.text()).toEqual('4');
});

it('is empty if given no value or null value', () => {
    const squareUndefined = shallow(<Square onClick={() => {}}/>);
    expect(squareUndefined.text()).toEqual('');

    const squareNull = shallow(<Square value={null} onClick={() => {}}/>);
    expect(squareNull.text()).toEqual('');
});

it('uses provided on click function', () => {
    window.alert = jest.fn();
    const clickHandler = () => window.alert('Clicked and Handled!');
    const square = shallow(<Square onClick={clickHandler}/>);
    square.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Clicked and Handled!');
});