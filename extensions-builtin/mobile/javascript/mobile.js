var isSetupForMobile = false;

function isMobile() {
    return true
    for (var tab of ["txt2img", "img2img"]) {
        var imageTab = gradioApp().getElementById(tab + '_results');
        if (imageTab && imageTab.offsetParent && imageTab.offsetLeft == 0) {
            return true;
        }
    }

    return false;
}

function reportWindowSize() {
    var currentlyMobile = isMobile();
    if (currentlyMobile == isSetupForMobile) return;
    isSetupForMobile = currentlyMobile;

    for (var tab of ["txt2img", "img2img"]) {
        var result = gradioApp().getElementById(tab + '_results');
        var target = gradioApp().getElementById(tab + '_settings').parentElement;
        var resizeHandle = target.getElementsByClassName('resize-handle')[0];
        
        target.insertBefore(resizeHandle, target.firstElementChild);
        target.insertBefore(result, target.firstElementChild);

        gradioApp().getElementById(tab + '_results').classList.toggle('mobile', currentlyMobile);
    }
}

window.addEventListener("resize", reportWindowSize);

onUiLoaded(function() {
    reportWindowSize();
});
