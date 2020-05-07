import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../client/App.jsx';
import Sidebar from '../client/components/Sidebar.jsx';
import RelatedContent from '../client/components/RelatedContent.jsx';
import Mainbody from '../client/components/Mainbody.jsx';


describe('App exists', () => {
    test('should render App', () => {
        expect(shallow(<App />).exists()).toBe(true);
    })
});

