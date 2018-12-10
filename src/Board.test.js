import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Board, Square} from './Board';

configure({adapter: new Adapter()});

it('renders three rows of three squares', () => {
    const board = mount(<Board/>);
    const rows = board.find('div.board-row');
    expect(rows.length).toEqual(3);
    expect(rows.at(0).find(Square).length).toEqual(3);
    expect(rows.at(1).find(Square).length).toEqual(3);
    expect(rows.at(2).find(Square).length).toEqual(3);
});

it('starts with the next player as X', () => {
    const board = shallow(<Board/>);
    expect(board.find('div.status').text()).toEqual('Next player: X');
});

it('alternates the next player message with each square click', () => {
    const board = mount(<Board/>);
    expect(board.find('div.status').text()).toEqual('Next player: X');
    board.find(Square).at(5).simulate('click');
    expect(board.find('div.status').text()).toEqual('Next player: O');
    board.find(Square).at(8).simulate('click');
    expect(board.find('div.status').text()).toEqual('Next player: X');
});

it('all the squares start blank', () => {
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

it('clicking multiple squares updates the board with alternating X and O values', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(1).simulate('click');
    squares.at(6).simulate('click');
    squares.at(2).simulate('click');
    squares.at(8).simulate('click');
    squares.at(5).simulate('click');

    expect(squares.at(0).text()).toEqual('');
    expect(squares.at(1).text()).toEqual('X');
    expect(squares.at(2).text()).toEqual('X');
    expect(squares.at(3).text()).toEqual('');
    expect(squares.at(4).text()).toEqual('');
    expect(squares.at(5).text()).toEqual('X');
    expect(squares.at(6).text()).toEqual('O');
    expect(squares.at(7).text()).toEqual('');
    expect(squares.at(8).text()).toEqual('O');
});