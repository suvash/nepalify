import { expect } from "chai";
import {
  fetchLayout,
  isValidLayout,
  availableLayouts,
  defaultLayoutName,
} from "../src/layouts";

describe("layouts", () => {
  describe("defaultLayoutName", () => {
    it("should be defined", () => {
      expect(defaultLayoutName).to.equal("romanized");
    });
  });

  describe("availableLayouts()", () => {
    it("should return a list of available layouts", () => {
      const expected = ["romanized", "traditional"];
      expect(availableLayouts()).to.deep.equal(expected);
    });
  });

  describe("isValidLayout(layout_name)", () => {
    it("should return a boolean given a layout name", () => {
      expect(isValidLayout("bogus")).to.equal(false);
      expect(isValidLayout("random")).to.equal(false);

      expect(isValidLayout("romanized")).to.equal(true);
      expect(isValidLayout("traditional")).to.equal(true);
    });
  });

  describe("fetchLayout(layout_name)", () => {
    it("when valid should return a layout object", () => {
      expect(fetchLayout("romanized")).to.be.an("object");
      expect(() => {
        fetchLayout("romanized");
      }).to.not.throw("Invalid Layout");
      expect(fetchLayout("traditional").name).to.equal("traditional");
    });

    it("when invalid should throw an exception", () => {
      expect(() => {
        fetchLayout("bogus");
      }).to.throw("Invalid Layout");
    });
  });
});
