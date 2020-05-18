
document.addEventListener('DOMContentLoaded', function () {
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
        coverTrigger: false,
        hover: true
    });
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Collapsible.init(document.querySelectorAll('.collapsible'));
});