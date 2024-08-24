

# Colors App

This is a React Native application built with Expo, which allows users to interact with a screen that changes its background color every time the user taps on it.

## Features

- **Color Change Interaction:** Tap anywhere on the screen to change the background color. The text color also changes to ensure readability. 
- **Onboarding:** An onboarding screen is displayed on the first launch, introducing the user to the app. 
- **Cross-Platform Support:** Runs on iOS, Android, and Web using Expo.

## Project Structure

```plaintext
src/ 
  app/ 
    components/   # Components for the main app 
    screens/      # Screens for the main app 
  
  common/ 
    components/   # Common reusable components 
    hooks/        # Common hooks 
    utils/        # Common utilities 
  
  services/ 
    implementations/  # Service implementations 
    interfaces/       # Service interfaces 
    index.ts          # Entry point for services 
  
  ui-kit/ 
    Button/           # Button components 
    ...
    index.ts          # Entry point for UI Kit 

  ui-modules/ 
    <uiModuleName>/ 
      components/     # Main components for UI modules 
      hooks/          # Hooks for main UI modules 
      utils/          # Utilities for main UI modules 
      
constants.ts    # Constants for the whole app
```

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or newer)
- **Expo CLI** (installed globally)

To install Expo CLI, run:

```bash
npm install -g expo-cli
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone git@github.com:abrahamyanhrant93/Colors-App.git 
   cd colors-app
   ```

2. **Install dependencies:**

   ```bash
   yarn
   ```

3. **Start the development server:**

   ```bash
   yarn start
   ```

4. **Run the app:**

    - For Android: `yarn android`
    - For iOS: `yarn ios`
    - For Web: `yarn web`

## Scripts

- **`yarn start`** - Start the Expo development server.
- **`yarn android`** - Run the app on an Android emulator or connected device.
- **`yarn ios`** - Run the app on an iOS simulator or connected device.
- **`yarn web`** - Run the app in a web browser.
- **`yarn lint`** - Lint the project files using ESLint.
- **`yarn ci:lint`** - Run TypeScript checks with `tsc`.

## Technologies Used

- **React Native / Expo**: For handling the development, build, and deployment processes.
- **React Native Elements (RNEUI)**: For theming and UI components.
- **TypeScript**: For static type checking.

## Development Guidelines

- Follow the coding standards enforced by ESLint and Prettier.
- Keep components small and focused (suggested 120 lines maximum per each).
- Use hooks for managing state and side effects.
- Separate concerns by placing utility functions in the `utils` folder.
