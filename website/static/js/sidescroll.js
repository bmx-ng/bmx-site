(function() {
    document.addEventListener('DOMContentLoaded', () => {
        let elems = document.getElementsByClassName('navListItemActive');
        if (elems) {
            document.getElementById('docsNav').scrollTop = elems[0].offsetTop;
        }
    });
})();
