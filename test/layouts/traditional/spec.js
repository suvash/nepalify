import { expect } from "chai";
import traditional from "../../../src/layouts/traditional";
import testKeys from "./helpers/test_keys.js";
import expectedKeys from "./helpers/expected_keys.js";

describe("traditional", () => {
  describe("formatKey()", () => {
    it("should return corresponding traditional Nepali character.", () => {
      const receivedKeys = testKeys.map((key) => traditional.formatKey(key));
      expect(receivedKeys).to.deep.equal(expectedKeys);
    });

    it("should return undefined if no mapping exists", () => {
      const asciiKeys = [...Array(256).keys()].map((key) =>
        String.fromCharCode(key)
      );
      const filteredKeys = asciiKeys.filter((key) => !testKeys.includes(key));

      const receivedKeys = filteredKeys.map((key) =>
        traditional.formatKey(key)
      );
      const expectedKeys = [...Array(receivedKeys.length)];

      expect(receivedKeys).to.deep.equal(expectedKeys);
    });
  });
});
