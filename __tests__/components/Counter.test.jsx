import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "../../components/Counter.js";

describe("Counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  describe("counter number element", () => {
    test("displays the counter number on screen", () => {
      const counterNumber = screen.getByTestId(/tCounterNumber/);
      expect(counterNumber).toBeTruthy();
    });
  });

  describe("increment button", () => {
    test("displays increment button on screen", () => {
      const incrementButton = screen.getByRole("button", {
        name: /Increment/i,
      });
      expect(incrementButton).toBeTruthy();
    });

    test.skip("increment counter number when increment button is clicked", () => {
      const incrementButton = screen.getByRole("button", {
        name: /Increment/i,
      });
      userEvent.click(incrementButton);

      const counterNumber = screen.getByTestId(/tCounterNumber/);

      expect(counterNumber.textContent).toEqual("1");
    });
  });

  describe("decrement button", () => {
    test("displays decrement button on screen", () => {
      const decrementButton = screen.getByRole("button", {
        name: /decrement/i,
      });
      expect(decrementButton).toBeTruthy();
    });

    test.skip("decrement counter number when decrement button is clicked", () => {
      const decrementButton = screen.getByRole("button", {
        name: /decrement/i,
      });
      userEvent.click(decrementButton);

      const counterNumber = screen.getByTestId(/tCounterNumber/);

      expect(counterNumber.textContent).toEqual("-1");
    });
  });

  describe("reset button", () => {
    test("displays reset button on screen", () => {
      const resetButton = screen.getByRole("button", { name: /reset/i });
      expect(resetButton).toBeTruthy();
    });

    test.skip("resets counter number back to 0 when reset button is clicked", () => {
      const resetButton = screen.getByRole("button", {
        name: /reset/i,
      });

      let counterNumber = screen.getByTestId(/tCounterNumber/);

      counterNumber.textContent = 5;

      userEvent.click(resetButton);

      expect(counterNumber.textContent).toEqual("0");
    });
  });
});
