#!/bin/bash
cordova platform add android
cordova build
mkdir outputs
mv -fv platforms/android/app/build/outputs/apk/*/*.apk outputs/