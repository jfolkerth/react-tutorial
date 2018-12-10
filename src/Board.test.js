import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Board, Square} from './Board';

configure({adapter: new Adapter()});

it('renders three rows of three squares', () => {
    const board = mount(<Board/>);
    const rows = board.find('.board-row');
    expect(rows.length).toEqual(3);
    expect(rows.at(0).find(Square).length).toEqual(3);
    expect(rows.at(1).find(Square).length).toEqual(3);
    expect(rows.at(2).find(Square).length).toEqual(3);
});

it('starts with the next player as X', () => {
    const board = shallow(<Board/>);
    expect(board.find('.status').text()).toEqual('Next player: X');
});

it('alternates the next player message with each square click', () => {
    const board = mount(<Board/>);
    expect(board.find('.status').text()).toEqual('Next player: X');
    board.find(Square).at(5).simulate('click');
    expect(board.find('.status').text()).toEqual('Next player: O');
    board.find(Square).at(8).simulate('click');
    expect(board.find('.status').text()).toEqual('Next player: X');
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

it('player wins if they have all top row marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(0).simulate('click');
    squares.at(4).simulate('click');
    squares.at(1).simulate('click');
    squares.at(8).simulate('click');
    squares.at(2).simulate('click');

    expect(squares.at(0).text()).toEqual('X');
    expect(squares.at(1).text()).toEqual('X');
    expect(squares.at(2).text()).toEqual('X');

    expect(board.find('.status').text()).toEqual('Winner: X');
});

it('player wins if they have all middle row marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(8).simulate('click');
    squares.at(3).simulate('click');
    squares.at(1).simulate('click');
    squares.at(4).simulate('click');
    squares.at(7).simulate('click');
    squares.at(5).simulate('click');

    expect(squares.at(3).text()).toEqual('O');
    expect(squares.at(4).text()).toEqual('O');
    expect(squares.at(5).text()).toEqual('O');

    expect(board.find('.status').text()).toEqual('Winner: O');
});

it('player wins if they have all bottom row marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(8).simulate('click');
    squares.at(3).simulate('click');
    squares.at(7).simulate('click');
    squares.at(4).simulate('click');
    squares.at(6).simulate('click');

    expect(squares.at(6).text()).toEqual('X');
    expect(squares.at(7).text()).toEqual('X');
    expect(squares.at(8).text()).toEqual('X');

    expect(board.find('.status').text()).toEqual('Winner: X');
});

it('player wins if they have all left column marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(8).simulate('click');
    squares.at(0).simulate('click');
    squares.at(7).simulate('click');
    squares.at(3).simulate('click');
    squares.at(4).simulate('click');
    squares.at(6).simulate('click');

    expect(squares.at(0).text()).toEqual('O');
    expect(squares.at(3).text()).toEqual('O');
    expect(squares.at(6).text()).toEqual('O');

    expect(board.find('.status').text()).toEqual('Winner: O');
});

it('player wins if they have all middle column marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(1).simulate('click');
    squares.at(3).simulate('click');
    squares.at(4).simulate('click');
    squares.at(5).simulate('click');
    squares.at(7).simulate('click');

    expect(squares.at(1).text()).toEqual('X');
    expect(squares.at(4).text()).toEqual('X');
    expect(squares.at(7).text()).toEqual('X');

    expect(board.find('.status').text()).toEqual('Winner: X');
});

it('player wins if they have all right column marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(1).simulate('click');
    squares.at(2).simulate('click');
    squares.at(3).simulate('click');
    squares.at(5).simulate('click');
    squares.at(7).simulate('click');
    squares.at(8).simulate('click');

    expect(squares.at(2).text()).toEqual('O');
    expect(squares.at(5).text()).toEqual('O');
    expect(squares.at(8).text()).toEqual('O');

    expect(board.find('.status').text()).toEqual('Winner: O');
});

it('player wins if they have northwest to southeast diagonal marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(0).simulate('click');
    squares.at(3).simulate('click');
    squares.at(4).simulate('click');
    squares.at(5).simulate('click');
    squares.at(8).simulate('click');

    expect(squares.at(0).text()).toEqual('X');
    expect(squares.at(4).text()).toEqual('X');
    expect(squares.at(8).text()).toEqual('X');

    expect(board.find('.status').text()).toEqual('Winner: X');
});

it('player wins if they have northeast to southwest diagonal marked', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(1).simulate('click');
    squares.at(2).simulate('click');
    squares.at(3).simulate('click');
    squares.at(4).simulate('click');
    squares.at(7).simulate('click');
    squares.at(6).simulate('click');

    expect(squares.at(2).text()).toEqual('O');
    expect(squares.at(4).text()).toEqual('O');
    expect(squares.at(6).text()).toEqual('O');

    expect(board.find('.status').text()).toEqual('Winner: O');
});

it('squares cannot be marked twice', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);
    squares.at(0).simulate('click');
    squares.at(0).simulate('click');
    expect(squares.at(0).text()).toEqual('X');
    expect(board.find('.status').text()).toEqual('Next player: O');
});

it('squares cannot be marked after the game is won', () => {
    const board = mount(<Board/>);
    const squares = board.find(Square);

    squares.at(0).simulate('click');
    squares.at(3).simulate('click');
    squares.at(1).simulate('click');
    squares.at(4).simulate('click');
    squares.at(2).simulate('click');

    squares.at(5).simulate('click');

    expect(squares.at(5).text()).toEqual('');
    expect(board.find('.status').text()).toEqual('Winner: X');
});