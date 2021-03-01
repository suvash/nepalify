import { expect } from "chai";
import layouts from "../src/layouts";

describe("layouts", () => {
  it("should return an object of available layouts", () => {
    expect(layouts).to.be.an("object");
    expect(layouts).to.have.property("romanized");
    expect(layouts).to.have.property("traditional");
  });
});
