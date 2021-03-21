#!/bin/bash
cordova platform add android
cordova build
mkdir outputs || rm -fv outputs/*
# mv -fv platforms/android/app/build/outputs/apk/*/*.apk outputs/
zipalign -v -p 4 platforms/android/app/build/outputs/apk/*/*.apk outputs/signed.apk
apksigner sign --ks Android_Key.keystore --out outputs/assigned.apk outputs/signed.apk