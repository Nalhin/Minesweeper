import { shallowMount } from '@vue/test-utils';
import Board from '@/components/Board.vue';

describe('Board.vue', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Board, {});

    expect(wrapper.find('div')).toBeTruthy();
  });
});
