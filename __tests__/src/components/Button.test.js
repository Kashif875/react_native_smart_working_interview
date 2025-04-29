import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Button from '../../../src/components/Button'; // Adjust path if needed
import Constants from '../../../src/constants';

describe('Button Component', () => {
    it('renders the button with correct title', () => {
        const { getByText } = render(<Button title={Constants.home.submit} onPress={jest.fn()} />);

        expect(getByText(Constants.home.submit)).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const mockOnPress = jest.fn();
        const { getByText } = render(<Button title="Click Me" onPress={mockOnPress} />);

        fireEvent.press(getByText('Click Me'));

        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
});
