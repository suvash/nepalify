import { expect } from "chai";
import romanized from "../../../src/layouts/romanized";
import testKeys from "./helpers/test_keys.js";
import expectedKeys from "./helpers/expected_keys.js";

describe("romanized", () => {
  describe("formatKey()", () => {
    it("should return corresponding romanized Nepali character.", () => {
      const receivedKeys = testKeys.map((key) => romanized.formatKey(key));
      expect(receivedKeys).to.deep.equal(expectedKeys);
    });

    it("should return undefined if no mapping exists", () => {
      const asciiKeys = [...Array(256).keys()].map((key) =>
        String.fromCharCode(key)
      );
      const filteredKeys = asciiKeys.filter((key) => testKeys.indexOf(key) < 0);

      const receivedKeys = filteredKeys.map((key) => romanized.formatKey(key));
      const expectedKeys = [...Array(receivedKeys.length)];

      expect(receivedKeys).to.deep.equal(expectedKeys);
    });
  });
});
