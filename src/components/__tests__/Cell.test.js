import { shallowMount } from "@vue/test-utils";
import Cell from "../Cell";
import { fieldTypes } from "../../constants/fieldTypes";

const props = {
  fieldState: fieldTypes.EMPTY,
  isClicked: false,
  x: 0,
  y: 1,
  bombsNearby: 0
};

describe("Cell.vue", () => {
  it("should emit event on click", () => {
    const wrapper = shallowMount(Cell, { propsData: { ...props } });

    wrapper.trigger("click");

    expect(wrapper.emitted("cell-clicked")).toBeTruthy();
  });
  it("should compute showNearbyBombs properly", () => {
    const localThis = { isClicked: true, showBomb: false, bombsNearby: 1 };

    expect(Cell.computed.showNearbyBombs.call(localThis)).toBeTruthy();
  });
});
