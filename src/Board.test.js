import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Board, Square } from './Board';

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

it('starts blank', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);

    expect(squares.at(0).text()).toEqual('');
    expect(squares.at(1).text()).toEqual('');
    expect(squares.at(2).text()).toEqual('');
    expect(squares.at(3).text()).toEqual('');
    expect(squares.at(4).text()).toEqual('');
    expect(squares.at(5).text()).toEqual('');
    expect(squares.at(6).text()).toEqual('');
    expect(squares.at(7).text()).toEqual('');
    expect(squares.at(8).text()).toEqual('');
});

it('clicking multiple squares updates the board', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(1).simulate('click');
    squares.at(2).simulate('click');
    squares.at(5).simulate('click');
    squares.at(6).simulate('click');
    squares.at(8).simulate('click');

    expect(squares.at(0).text()).toEqual('');
    expect(squares.at(1).text()).toEqual('X');
    expect(squares.at(2).text()).toEqual('X');
    expect(squares.at(3).text()).toEqual('');
    expect(squares.at(4).text()).toEqual('');
    expect(squares.at(5).text()).toEqual('X');
    expect(squares.at(6).text()).toEqual('X');
    expect(squares.at(7).text()).toEqual('');
    expect(squares.at(8).text()).toEqual('X');
});