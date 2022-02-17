import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "../../components/Counter.js";

describe("Counter component", () => {
  // beforeEach(() => {
  //   render(<Counter />);
  // });

  describe("counter number element", () => {
    test("displays the counter number on screen", () => {
      render(<Counter />);

      const counterNumber = screen.getByTestId(/tCounterNumber/);
      expect(counterNumber).toBeTruthy();
    });
  });

  describe("increment button", () => {
    test("displays increment button on screen", () => {
      render(<Counter />);

      const incrementButton = screen.getByRole("button", {
        name: /Increment/i,
      });
      expect(incrementButton).toBeTruthy();
    });

    test("increment counter number when increment button is clicked", async () => {
      const { getByTestId, getByRole } = render(<Counter />);

      const incrementButton = getByRole("button", {
        name: /Increment/i,
      });

      userEvent.click(incrementButton);

      expect(getByTestId(/tCounterNumber/).textContent).toEqual("1");
    });
  });

  describe("decrement button", () => {
    test("displays decrement button on screen", () => {
      render(<Counter />);

      const decrementButton = screen.getByRole("button", {
        name: /decrement/i,
      });
      expect(decrementButton).toBeTruthy();
    });

    test("decrement counter number when decrement button is clicked", () => {
      render(<Counter />);

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
      render(<Counter />);

      const resetButton = screen.getByRole("button", { name: /reset/i });
      expect(resetButton).toBeTruthy();
    });

    test("resets counter number back to 0 when reset button is clicked", () => {
      render(<Counter />);

      const resetButton = screen.getByRole("button", {
        name: /reset/i,
      });

      const counterNumber = screen.getByTestId(/tCounterNumber/);

      userEvent.click(resetButton);

      expect(counterNumber.textContent).toEqual("0");
    });
  });
});
