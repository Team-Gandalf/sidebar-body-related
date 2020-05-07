import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../client/App.jsx';
import Sidebar from '../client/components/Sidebar.jsx';
import RelatedContent from '../client/components/RelatedContent.jsx';
import Mainbody from '../client/components/Mainbody.jsx';

import game from './dummydata.js'

describe('App exists', () => {
    test('should render App', () => {
    expect(shallow(<App />).exists()).toBe(true);
    })

    test('loads Mainbody component', () => {
    expect(shallow(<Mainbody mainbodydata={game[0].mainbody}/>).exists()).toBe(true);
    });

    test('loads Sidebar component', () => {
    expect(shallow(<Sidebar sidebardata={game[0].sidebar}/>).exists()).toBe(true);
    });

    test('loads Related Content component', () => {
    expect(shallow(<RelatedContent />).exists()).toBe(true);
    });

});

