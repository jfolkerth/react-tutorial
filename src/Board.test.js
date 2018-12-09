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