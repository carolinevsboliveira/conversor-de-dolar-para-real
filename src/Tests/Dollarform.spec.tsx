import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DollarForm from "../Components/DollarForm";

describe("<DollarForm />", () => {
  it("should format number onblur", async () => {
    render(
      <DollarForm
        percentageHandler={jest.fn()}
        dollarAmount={5}
        dollarAmountHandler={jest.fn()}
        percentage={0.5}
        paymentMethod={"dinheiro"}
        paymentMethodHandler={jest.fn()}
        convertClicked={true}
        enabledButton={true}
        convertClickedHandler={jest.fn()}
      />
    );
    const valueInput = screen.getByRole('textbox', {name: /valor em dolar/i})
    userEvent.type(valueInput, '--')
    userEvent.tab()
    expect('--').toBeInTheDocument()
  });
});
