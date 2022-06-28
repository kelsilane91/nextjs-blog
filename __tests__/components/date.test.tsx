import { render } from "@testing-library/react";
import Date from "../../components/date";
import "@testing-library/jest-dom";
import { expect } from "@jest/globals";

describe("Date", () => {
  const dateString = "2020-01-02";

  it("renders Date component unchanged", () => {
    const { container } = render(<Date dateString={dateString} />);
    expect(container).toMatchSnapshot();
  });
});
