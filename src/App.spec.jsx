import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testing main component', () => {
    it('should retunr tak', () => {
        const { getByText } = render(<App />);
        expect(getByText('Tak')).toBeTruthy();
    })
    it('should be able to add a new element', () => {
        const { getByText, getByPlaceholderText, debug } = render(<App />);

        const inputElement = getByPlaceholderText('novo elemento');
        const buttonElement = getByText('Adicionar');

        userEvent.click(buttonElement);


        expect(getByText('Gus')).toBeInTheDocument();
    })
})