import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from './Square';

configure({ adapter: new Adapter() });

it('renders a button', () => {
    const square = shallow(<Square/>);
    expect(square.find('button.square').length).toEqual(1);
});

it('displays number', () => {
   const square = shallow(<Square value={4}/>);
   expect(square.text()).toEqual('4');
});

it('alerts on click', () => {
    window.alert = jest.fn();
   const square = shallow(<Square value={3}/>);
   square.simulate('click');
   expect(window.alert).toHaveBeenCalledWith('clicked');
});