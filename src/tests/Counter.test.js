// import necessary react testing library helpers here
// import the Counter component here

import {fireEvent, render, screen} from "@testing-library/react";
import App from "../components/App";
beforeEach(() => {

    // Render the Counter component here
})

test('renders counter message', () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/Counter/i);
    expect(welcomeMessage).toBeInTheDocument();
    // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/0/i);
    expect(welcomeMessage).toBeInTheDocument();
    // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above
    render(<App />);
    const button = screen.getByRole("button", {name: /\+/gi});
    fireEvent.click(button);
    const welcomeMessage = screen.getByText(/1/i);
    expect(welcomeMessage).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    render(<App />);
    const button = screen.getByRole("button", {name: /-/gi});
    fireEvent.click(button);
    const welcomeMessage = screen.getByText(/-1/i);
    expect(welcomeMessage).toBeInTheDocument();
});
