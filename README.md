# back4app-expo-auth

This repository demonstrates how to add [Back4app authentication](https://www.back4app.com/) to a [React Native](https://reactnative.dev/) ([Expo](https://expo.dev/)) app.

For more information check out the [article](#).

## Development Setup

1. Clone the repository.

2. Install the dependencies:
    ```sh
    $ npm install
    ```
   
3. Create a *.env* file in the root directory and add the following environment variables:
    ```dotenv
    EXPO_PUBLIC_APPLICATION_ID=<your-back4app-application-id>
    EXPO_PUBLIC_JAVASCRIPT_KEY=<your-back4app-client-key>
    ```
    > To obtain the keys, log into your Back4app, select your app, and navigate to "App Settings > Security & Keys".

3. Start the Expo server:
    ```sh
    $ npx expo start
    ```
4. Press `a` to open the app in an Android emulator or `i` to open the app in an iOS simulator.

5. Voila! You have successfully set up the project.