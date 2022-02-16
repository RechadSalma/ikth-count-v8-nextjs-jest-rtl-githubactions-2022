import { render } from "@testing-library/react";

import Side from "../../pages/side.js";

describe("Side page tests", () => {
  test("<main> tag is truthy", () => {
    const { getByRole, debug } = render(<Side />);
    const mainTag = getByRole("main");
    expect(mainTag).toBeTruthy();
  });

  test("<h1> with the correct text", () => {
    const { getByRole, debug } = render(<Side />);
    const heading = getByRole("heading", { level: 1 });
    // debug(heading);
    expect(heading.textContent).toMatch(/^Welcome/);
  });
});
