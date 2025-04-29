import { render } from '@testing-library/react-native';
import React from 'react';
import Header from '../../../src/components/Header';

describe('Header Component', () => {
    it('renders the header with correct title', () => {
        const { getByText } = render(<Header title="Weather App" />);

        expect(getByText('Weather App')).toBeTruthy();
    });
});
