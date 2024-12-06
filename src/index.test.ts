import { getType } from ".";

describe("", () => {
  it("getType", async () => {
    interface Test {
      a: string;
    }
    const a: Test = { a: "a" };
    const t = getType(a);
    console.log(t);
  });
});
