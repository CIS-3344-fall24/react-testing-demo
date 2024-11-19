import App from "./App";
import { render, screen } from "@testing-library/react";


test("Test First React Test Case", () =>{
  render(<App/>)

  // const text = screen.getByText("First React Test Case"); this has to match the exact case and exact test
  const text = screen.getByText(/First React Test Case/i);
  //this will ignore case. This  means, at least this piece of text should exist on the screen. Does not matter if there is something before or after this.

  

  const title = screen.getByTitle("Koro sensei");
  // expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})
