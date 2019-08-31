import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component and children should render correctly', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should have type header', () => {
        expect(wrapper.type()).toBe('header');
    });

    it('should have 3 cols in header', () => {
        expect(wrapper.find('.col')).toHaveLength(3);
    });

    it('should have .img-container with img tag as child and correct attributes', () => {
        expect(wrapper.find('.img-container')).toHaveLength(1);
        expect(wrapper.find('.headerImage').type()).toBe('img');
        expect(wrapper.find('.headerImage').html()).toBe('<img class="headerImage" src="./images/pasta_white.svg" alt="pasta"/>');
    });

    it('should have logo with correct logo text', () => {
        expect(wrapper.find('.logo')).toHaveLength(1);
        expect(wrapper.find('.logo').text()).toBe('Paliccio');
    });
})

