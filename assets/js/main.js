if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            document.body.classList.remove("header-not-at-top");
        } else {
            document.body.classList.add("header-not-at-top");
        }
    });
    observer.observe(document.querySelector("#topbox"));
}

