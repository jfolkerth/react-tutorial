import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';
import Board from './Board';

configure({ adapter: new Adapter() });

it('renders a board', () => {
    const game = shallow(<Game/>);
    expect(game.find(Board).length).toEqual(1);
});

it('shows game info', () => {
    const game = shallow(<Game/>);
    const info = game.find('.game-info');
    expect(info.length).toEqual(1);
});