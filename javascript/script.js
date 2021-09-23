window.onscroll = function () {
    if (pageYOffset > 40 ) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.borderTop = "";
        searchBar.style.display = "none";
        searchBar.style.top = "70px";
    } else {
        nav.style.position = "";
        nav.style.top = "";
        nav.style.borderTop = "1px solid #ccc";
        searchBar.style.top = "110px";
    }
}

function SearchBarBlock() {
  searchBar.style.display = "block";
}
function SearchBarNone() {
  searchBar.style.display = "none";
}
function goBack() {
  window.history.back();
}
