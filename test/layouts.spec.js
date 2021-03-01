import { expect } from "chai";
import layouts from "../src/layouts";

describe("layouts", () => {
  describe("availableLayouts()", () => {
    it("should return a list of available layouts", () => {
      const expected = ["romanized", "traditional"];
      expect(layouts.availableLayouts()).to.deep.equal(expected);
    });
  });

  describe("isValidLayout(layout_name)", () => {
    it("should return a boolean given a layout name", () => {
      expect(layouts.isValidLayout("bogus")).to.equal(false);
      expect(layouts.isValidLayout("random")).to.equal(false);

      expect(layouts.isValidLayout("romanized")).to.equal(true);
      expect(layouts.isValidLayout("traditional")).to.equal(true);
    });
  });

  describe("fetchLayout(layout_name)", () => {
    it("when valid should return a layout object", () => {
      expect(layouts.fetchLayout("romanized")).to.be.an("object");
      expect(() => {
        layouts.fetchLayout("romanized");
      }).to.not.throw("Invalid Layout");
      expect(layouts.fetchLayout("traditional").name).to.equal("traditional");
    });

    it("when invalid should throw an exception", () => {
      expect(() => {
        layouts.fetchLayout("bogus");
      }).to.throw("Invalid Layout");
    });
  });
});
