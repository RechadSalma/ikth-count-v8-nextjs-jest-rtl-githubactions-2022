import counterReducer from "../../../redux/reducers/counterReducer.js";
import { INCREMENT, DECREMENT, RESET } from "../../../redux/actionTypes.js";

describe("Counter reducers", () => {
  test("increment", () => {
    const action = { type: INCREMENT };

    const counterState = counterReducer(0, action);

    expect(counterState).toEqual(1);
  });

  test("decrement", () => {
    const action = { type: DECREMENT };

    expect(counterReducer(3, action)).toBe(2);
  });

  test("reset", () => {
    const action = { type: RESET };

    expect(counterReducer(122, action)).toEqual(0);
  });

  test("return current/default state if incorrect action creator inserted to counter reducer", () => {
    const action = { type: "non exising action type" };

    expect(counterReducer(0, action)).toEqual(0);
  });
});
