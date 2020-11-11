import { render, screen } from "@testing-library/react";
import trunk from "./trunk";

describe("Given a description is on the page", () => {
  describe("When listed", () => {
    test("Then it should display truncated description", () => {
      render(<App />);
      const trunkElement = screen.expect(trunkElement).toBeInTheDocument();
    });
  });
});
