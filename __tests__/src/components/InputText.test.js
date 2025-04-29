import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import InputText from '../../../src/components/InputText';

describe('InputText Component', () => {
    it('renders correctly with placeholder', () => {
        const { getByPlaceholderText } = render(
            <InputText placeholder="Enter city name" />
        );

        expect(getByPlaceholderText('Enter city name')).toBeTruthy();
    });

    it('calls onChangeText when text is entered', () => {
        const mockOnChangeText = jest.fn();
        const { getByPlaceholderText } = render(
            <InputText
                placeholder="Enter city name"
                onChangeText={mockOnChangeText}
            />
        );

        fireEvent.changeText(getByPlaceholderText('Enter city name'), 'Chennai');

        expect(mockOnChangeText).toHaveBeenCalledWith('Chennai');
    });

    it('displays error message when errorText is provided', () => {
        const { getByText } = render(
            <InputText
                placeholder="Enter city name"
                errorText="City name is required"
            />
        );

        expect(getByText('City name is required')).toBeTruthy();
    });

    it('shows correct value when passed', () => {
        const { getByDisplayValue } = render(
            <InputText
                placeholder="Enter city name"
                value="Mumbai"
            />
        );

        expect(getByDisplayValue('Mumbai')).toBeTruthy();
    });
});
