import { expect } from "chai";
import { format } from "../src/format";

describe("format", () => {
  describe("format(text, options)", () => {
    it("when option is valid should not throw an exception", () => {
      const layouts = ["romanized", "traditional"];

      expect(() => format("test")).to.not.throw();
      expect(() =>
        layouts.forEach((layout) => format("test", { layout: layout }))
      ).to.not.throw();
    });

    it("when option is invalid should throw an exception", () => {
      expect(() => format("test", { layout: "not a layout" })).to.throw();
    });
  });

  describe("format(text, romanized)", () => {
    const romanizedOption = { layout: "romanized" };

    it("when mapped input should return romanized formatted text", () => {
      const inputStrs = [
        "Aram",
        "tn/na",
        "ZRN",
        "ram/ro",
        "S/rIKN/x",
        "S/rIman/+ko",
        "mr/=yo",
      ];
      const expectedStrs = [
        "आराम",
        "तन्ना",
        "ऋृण",
        "राम्रो",
        "श्रीखण्ड",
        "श्रीमान्‌को",
        "मर्‍यो",
      ];

      const returned = inputStrs.map((value) => format(value, romanizedOption));

      expect(returned).to.deep.equal(expectedStrs);
    });

    it("when non-mapped input should return input unformatted text", () => {
      const inputStrs = ["ヅデロ", "굗궘", "%#"];

      const returned = inputStrs.map((value) => format(value, romanizedOption));

      expect(returned).to.deep.equal(inputStrs);
    });

    it("when mixed input should return formatted text along with original text", () => {
      const inputStrs = ["<&", "k/ra#n/tI", "ks/ഡ"];
      const expectedStrs = ["ङ&", "क्रा#न्ती", "कस्ഡ"];

      const returned = inputStrs.map((value) => format(value, romanizedOption));

      expect(returned).to.deep.equal(expectedStrs);
    });
  });

  describe("format(text, traditional)", () => {
    const traditionalOption = { layout: "traditional" };

    it("when mapped input should return traditional formatted text", () => {
      const inputStrs = [
        "A/fd",
        "rZ/",
        ">Ldfg",
        ">Ldfg\\+sJ",
        "d[=oJ",
        "g/fd\\/J",
      ];
      const expectedStrs = [
        "आराम",
        "चक्कर",
        "श्रीमान",
        "श्रीमान्‌को",
        "मर्‍यो",
        "नराम्रो",
      ];

      const returned = inputStrs.map((value) =>
        format(value, traditionalOption)
      );

      expect(returned).to.deep.equal(expectedStrs);
    });

    it("when non-mapped input should return input unformatted text", () => {
      const inputStrs = ["⻡⻣", "ぁズ", "가괐"];

      const returned = inputStrs.map((value) =>
        format(value, traditionalOption)
      );

      expect(returned).to.deep.equal(inputStrs);
    });

    it("when mixed input should return formatted text along with original text", () => {
      const inputStrs = ["!fィ", "s{iオ"];
      const expectedStrs = ["ज्ञाィ", "कृषオ"];

      const returned = inputStrs.map((value) =>
        format(value, traditionalOption)
      );

      expect(returned).to.deep.equal(expectedStrs);
    });
  });
});
