const { useFetchGifs } = require("./useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");

describe("Hook: useFetchGifs", () => {
  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("categories")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test("should return array images and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("categories")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
