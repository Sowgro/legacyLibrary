function startLegacyLibListener() {
    setTimeout(function() {
        var libraryButton = document.querySelector('[data-id="/legacyLibrary"]').children[0];
        var classes = ["main-yourLibraryX-navLinkActive", "active"];
        Spicetify.Platform.History.listen((location) => {
            console.log("called");
            if (location.pathname.includes("/collection")  && location.pathname != "/collection/tracks")
            {
                if (!libraryButton.classList.contains(...classes))
                {
                    console.log("tried to add");
                    libraryButton.classList.add(...classes);
                }
            }
            else
            {
                if (libraryButton.classList.contains(...classes))
                {
                    libraryButton.classList.remove(...classes);
                }
            }
        });
    }, 1000);
}
