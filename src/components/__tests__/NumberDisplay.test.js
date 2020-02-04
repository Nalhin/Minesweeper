import { shallowMount } from '@vue/test-utils';
import NumberDisplay from '../NumberDisplay';

const props = {
  number: 5,
};

const expectedNumber = '00' + props.number;

describe('NumberDisplay', () => {
  it('should convert number properly', () => {
    expect(NumberDisplay.filters.formatNumber(props.number)).toBe(
      expectedNumber,
    );
  });

  it('should display number correctly', () => {
    const wrapper = shallowMount(NumberDisplay, { propsData: { ...props } });

    expect(wrapper.text()).toBe(expectedNumber);
  });
});
