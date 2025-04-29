import { render } from '@testing-library/react-native';
import React from 'react';
import { LoadingIndicator } from '../../../src/components/LoadingIndicator'; // adjust the import path if needed

describe('LoadingIndicator Component', () => {
    it('renders ActivityIndicator correctly', () => {
        const { getByTestId } = render(<LoadingIndicator />);

        const activityIndicator = getByTestId('loading-activity-indicator');
        expect(activityIndicator).toBeTruthy();
        expect(activityIndicator.props.animating).toBe(true);
        expect(activityIndicator.props.color).toBeTruthy(); // Checks if a color is applied
        expect(activityIndicator.props.size).toBe('large');
    });
});
