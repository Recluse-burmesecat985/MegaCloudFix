# MegaCloudFix

A minimal browser extension that redirects all requests from `megacloud.blog` to `megacloud.tv`.

## Purpose

Some anime streaming sites reference megacloud.blog as their video host, which may be unavailable or blocked. This extension transparently rewrites those requests to megacloud.tv at the network level, before the browser makes the connection.

## Files

- `manifest.json` - Extension manifest (Manifest V3)
- `rules.json` - Declarative redirect rule
- `background.js` - Service worker entry point

## Installation

### Chrome / Chromium-based browsers

1. Go to `chrome://extensions/`
2. Enable Developer mode (top right toggle)
3. Click "Load unpacked"
4. Select the `megacloudfix` directory

### Firefox

1. Go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select any file inside the `megacloudfix` directory

Note: Firefox temporary add-ons are removed on browser restart. For permanent installation, the extension would need to be signed via Mozilla.

## How it works

Uses the `declarativeNetRequest` API to intercept requests matching `megacloud.blog` and rewrite the host to `megacloud.tv`. This applies to all resource types including media, scripts, and XHR requests.

No data is collected or transmitted.
