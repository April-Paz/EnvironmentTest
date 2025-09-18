
## Development Scripts

### Setup & Installation
- `npm run setup` - Full project setup (dependencies + iOS pods)
- `npm install` - Install npm dependencies
- `npx pod-install` - Install iOS CocoaPods

### Development
- `npm run dev:ios` - Start iOS development with reset cache
- `npm run dev:android` - Start Android development with reset cache
- `npm run start` - Start Metro bundler
- `npm run start:reset` - Start Metro with cache reset

### Code Quality
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Building & Cleaning
- `npm run ios` - Run iOS app
- `npm run android` - Run Android app
- `npm run clean` - Clean entire project
- `npm run clean:ios` - Clean iOS build
- `npm run clean:android` - Clean Android build

### Testing
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Environment Configuration

### Environment Files
- `.env` - Base environment variables
- `.env.development` - Development-specific configuration  
- `.env.production` - Production-specific configuration
- `.gitignore` - Configured to exclude environment files

### Key Environment Variables
- `API_BASE_URL=https://jsonplaceholder.typicode.com` - API endpoint
- `APP_NAME=CPAN 213 App` - Application name
- `DEBUG_MODE=true` - Debug mode flag
- `VERSION=1.0.0` - App version
- `STUDENT_NAME=April Paz` - Student name display
- `STUDENT_ID=N01327224` - Student ID display

## Development Tools Configuration

### ESLint & Prettier
- `.eslintrc.js` - ESLint configuration for code quality
- `.prettierrc.js` - Prettier formatting rules
- `.eslintignore` - Files to exclude from linting
- `.prettierignore` - Files to exclude from formatting

### VS Code Setup
- `.vscode/settings.json` - Editor preferences and auto-formatting
- `.vscode/launch.json` - Debugging configurations for iOS/Android
- `.vscode/tasks.json` - Build tasks and automation

## Platform Status
- ✅ **iOS**: Fully functional with environment variables and debugging
- ⚠️ **Android**: Build working, environment variables temporarily disabled due to react-native-config compatibility issues

## Usage Notes

1. **Environment Variables**: Access via `AppConfig` service in JavaScript code
2. **Debugging**: Use VS Code debugger with breakpoints in component files
3. **Hot Reload**: Save any file to see changes instantly in simulator
4. **Code Quality**: ESLint and Prettier configured for consistent code style