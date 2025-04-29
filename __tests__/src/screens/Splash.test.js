import { act, render } from '@testing-library/react-native';
import Constants from '../../../src/constants';
import NavigationService from '../../../src/navigation/NavigationService';
import Splash from '../../../src/screens/Splash';

jest.mock('lottie-react-native', () => 'LottieView');

jest.mock('../../../src/navigation/NavigationService', () => ({
    navigateAndClearHistory: jest.fn(),
}));

describe('Splash Screen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('renders Lottie animation', () => {
        const { getByTestId } = render(<Splash />);
        expect(getByTestId('splash-lottie')).toBeTruthy();
    });

    it('renders title text correctly', () => {
        const { getByText } = render(<Splash />);
        expect(getByText(Constants.splash.title)).toBeTruthy();
    });

    it('navigates to Home after 2 seconds', () => {
        render(<Splash />);

        expect(NavigationService.navigateAndClearHistory).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(NavigationService.navigateAndClearHistory).toHaveBeenCalledWith('Home');
    });
});
