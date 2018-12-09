import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from './Board';
import Square from './Square';

configure({ adapter: new Adapter() });

it('renders three rows of three squares', () => {
    const board = mount(<Board/>);
    const rows = board.find('div.board-row');
    expect(rows.length).toEqual(3);
    expect(rows.at(0).find(Square).length).toEqual(3);
    expect(rows.at(1).find(Square).length).toEqual(3);
    expect(rows.at(2).find(Square).length).toEqual(3);
});

it('shows next player status', ()=> {
   const board = shallow(<Board/>);
   expect(board.find('div.status').text()).toEqual('Next player: X');
});

it('numbers the squares', () => {
   const board = mount(<Board/>);
   const squares = board.find(Square);
   expect(squares.at(0).text()).toEqual('0');
   expect(squares.at(1).text()).toEqual('1');
   expect(squares.at(2).text()).toEqual('2');
   expect(squares.at(3).text()).toEqual('3');
   expect(squares.at(4).text()).toEqual('4');
   expect(squares.at(5).text()).toEqual('5');
   expect(squares.at(6).text()).toEqual('6');
   expect(squares.at(7).text()).toEqual('7');
   expect(squares.at(8).text()).toEqual('8');
});