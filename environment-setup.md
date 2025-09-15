# Environment-Setup Documentation

## System Specifications
   Computer Model: Apple MacBook Pro 14-inch (2023)
   Chip: Apple M3 Pro
   Operating System: macOS Sequoia 15.61

## Software Versions Installed
| Node.js - v22.8.0 
| npm - 10.8.1 
| React Native CLI - 11.3.6 
| npx - 10.8.2 
| Android SDK - 34.0.0 
| Xcode - 16.0 
| CocoaPods - 1.15.2 

## Setup Steps Followed

| Step 1: Install Node.js and npm 
| Step 2: Install React Native CLI 
| Step 3: Android Development Setup 
| Step 4: Environment Variables Setup
    Added Android paths to `~/.zshrc`:

    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin

# Step 5: Create Android Virtual Device
1.  Opened Android Studio 
2.  Go to "More Actions" → "Virtual Device Manager"
3.  Click "Create Device"
4.  Choose "Pixel 4" or similar modern device
5.  Select system image (API 31 or 33)
6.  Finish setup and start the emulator

# Step 6: iOS Development Setup
1.  Downloaded Xcode from Mac App Store (16.0)
2.  Installed Xcode Command Line Tools:
3.  Installed CocoaPods

### Step 8: Test Environment Setup
1.  Created project: npx react-native init EnvironmentTest
2.  Ran on iOS simulator: npx react-native run-ios
3.  Ran on Android emulator: npx react-native run-android


## Deviations from Lab Instructions
| Environment Variables: I saved the export  commands to my `~/.zshrc` file permanently. 


## Time Taken for Each Step

| Node.js Installation - 10 minutes 
| React Native CLI - 5 minutes 
| Android Studio & SDK - 30 minutes 
| Environment Variables - 10 minutes 
| Android Virtual Device - 10 minutes 
| Xcode Installation - 90 minutes 
| Testing Environment - 45 minutes 
