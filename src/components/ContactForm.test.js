import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders labels?', () => {
    const { getByLabelText } = render(>ContactForm />);

    const firstNameLabel = getByLabelText(/first name/i)

    expect(firstNameLabel).toBeInTheDocument();
});