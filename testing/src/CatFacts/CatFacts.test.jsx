import { rest } from "msw";
import { server } from "../mocks/server";
import CatFacts from "./CatFacts";
import { screen, render } from "@testing-library/react";

test("test for mock api", async () => {
  render(<CatFacts />);
  const ele = await screen.findByRole("listitem");
  expect(ele).toBeInTheDocument();
});

test("display loading indicator while fetching data", () => {
  render(<CatFacts />);
  const loadingEle = screen.getByText(/loading/i);
  expect(loadingEle).toBeInTheDocument();
});

test("displays error message", async () => {
  server.use(
    rest.get(`${process.env.REACT_APP_API_ENDPOINT}`, (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({ message: "Internal Server Error" })
      );
    })
  );
  render(<CatFacts />);
  const errorMes = await screen.findByText(/Cat fact failed to fetch/i);
  expect(errorMes).toBeInTheDocument();
});
