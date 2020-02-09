import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {store} from '../../../store/store';


export const testConnectedComponentRender = (Component, props = {}) => {
    it('should render', () => {
        const wrapper = shallow(<Component {...props} store={store}/>);

        expect(wrapper.exists()).toBeTruthy();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
};
