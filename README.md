This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install node_modules

After successfull project clone, Install the packages.

```sh
npm i
```

## Step 2: Import the Android Project

After successfull installation of the packages. Import the android folder from the
project in the android studio. Wait until the gradle sync completes successfully.

## Step 3: Start Metro

Then, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
npm start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
npm run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
npm run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Architectural Decision: Weather Data Fetching in Redux Toolkit

### Decision:

We implemented weather data fetching using Redux Toolkit’s and Slice pattern to manage async API calls and state transitions, scalable manner.

### Reasoning Behind the Decision:

- Separation of concerns:

  The API call logic is centralized inside the fetchWeather hook.
  The weatherSlice only handles updating the UI state based on the API result.

- Error Handling:

  Using reject on promise allows capturing detailed API error messages (e.g., "City not found") instead of generic network errors.

  This improves the UX by displaying meaningful feedback to users.

- Maintainability & Scalability:

  New weather APIs (like hourly, daily forecasts) can be added easily by extending slices or adding new thunks.

  usiness logic and side-effects (API calls) are fully separated from UI components.

- Testability:

  We can write unit tests easily for both success and failure flows.

  Mocks can simulate API behavior without relying on a real network.

### Clean state management

✅ Proper error feedback
✅ Reusable, scalable, and testable architecture
✅ Minimal boilerplate
