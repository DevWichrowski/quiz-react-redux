import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

export const testComponentRender = component => {
    it('should render', () => {
        const wrapper = shallow(component, {disableLifecycleMethods: true});

        expect(wrapper.exists()).toBeTruthy();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
};
