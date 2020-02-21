import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders labels?', () => {
    const { getByLabelText } = render(>ContactForm />);

    const firstNameLabel = getByLabelText(/first name/i)

    expect(firstNameLabel).toBeInTheDocument();
});

test('inputs registering?', () => {
    const {getByLabelText} = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i)

    fireEvent.change( firstNameInput, {target: {value: 'testing first name'}})

    expect(firstNameInput.value).toBe('testing first name')
})