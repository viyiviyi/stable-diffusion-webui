function reportWindowSize() {
  for (var tab of ["txt2img", "img2img"]) {
    var setting = gradioApp().getElementById(tab + "_settings");
    if (!setting) return;
    var result = gradioApp().getElementById(tab + "_results");
    var target = setting.parentElement;
    if (target.firstElementChild == result) return;
    var resizeHandle = target.getElementsByClassName("resize-handle")[0];

    target.insertBefore(resizeHandle, target.firstElementChild);
    target.insertBefore(result, target.firstElementChild);
  }
}

window.addEventListener("resize", reportWindowSize);

onUiLoaded(function () {
  reportWindowSize();
});
