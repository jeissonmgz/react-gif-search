import { getGifts } from "./getGifs";

describe("Commons: getGifs", () => {
  test("should get 10 items", async () => {
    const gifs = await getGifts("CR7");
    expect(gifs.length).toBe(10);
  });
  test("should get 0 items", async () => {
    const gifs = await getGifts("");
    expect(gifs.length).toBe(0);
  });
});
