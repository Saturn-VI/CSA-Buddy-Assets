const serviceWorker = '/sw.js'
const isWebView = /CSABuddy/.test(navigator.userAgent);

// don't use for android/ios app - they already have pages saved
if ('serviceWorker' in navigator && !isWebView) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(serviceWorker)
    });
}