const isWebView = /CSABuddy/.test(navigator.userAgent);
document.addEventListener('DOMContentLoaded', () => {
    if (!isWebView) {
        document.body.classList.remove('isWebView');
    }
});