document.addEventListener('DOMContentLoaded', function () {
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
        coverTrigger: false
    });
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Collapsible.init(document.querySelectorAll('.collapsible'));

});

window.addEventListener("load", (event) => {
    _tagScrollCorrect();
});

let _tagScrollCorrect = function () {
    let aurl = window.location.href.split("/");
    if (aurl[aurl.length - 1][0] == "#")
        window.scrollBy(0, -100);
};