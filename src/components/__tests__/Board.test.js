import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Board.vue";

describe("Board.vue", () => {
  it("renders when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
