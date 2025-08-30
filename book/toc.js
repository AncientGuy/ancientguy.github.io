// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="0.html"><strong aria-hidden="true">1.</strong> AncientGuy Programming</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1.html"><strong aria-hidden="true">1.1.</strong> Spiritual Health</a></li><li class="chapter-item expanded "><a href="2.html"><strong aria-hidden="true">1.2.</strong> Strength, Plyometrics</a></li><li class="chapter-item expanded "><a href="3.html"><strong aria-hidden="true">1.3.</strong> Cardiovascular, Breath</a></li><li class="chapter-item expanded "><a href="4.html"><strong aria-hidden="true">1.4.</strong> Nutrition, Fasting</a></li><li class="chapter-item expanded "><a href="5.html"><strong aria-hidden="true">1.5.</strong> Intellectual Challenges</a></li><li class="chapter-item expanded "><a href="6.html"><strong aria-hidden="true">1.6.</strong> Social Connection</a></li><li class="chapter-item expanded "><a href="7.html"><strong aria-hidden="true">1.7.</strong> Rest, Readiness For Service</a></li><li class="chapter-item expanded "><a href="8.html"><strong aria-hidden="true">1.8.</strong> Stress Optimization</a></li><li class="chapter-item expanded "><a href="9.html"><strong aria-hidden="true">1.9.</strong> Hydration and Circulation</a></li><li class="chapter-item expanded "><a href="A.html"><strong aria-hidden="true">1.10.</strong> Mobility, Coordination</a></li></ol></li><li class="chapter-item expanded "><a href="101-200.html"><strong aria-hidden="true">2.</strong> 101-200, 100 Days Of Recovery and Transformation Topics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1-100.html"><strong aria-hidden="true">2.1.</strong> 1-100, 100 Days Of Fitness &amp; Wellness Topics</a></li><li class="chapter-item expanded "><a href="201-300.html"><strong aria-hidden="true">2.2.</strong> 201-300, 100 Days Of Personal Knowledge Engineering</a></li><li class="chapter-item expanded "><a href="301-400.html"><strong aria-hidden="true">2.3.</strong> 301-400, 100 Days Of Koan Engine Building</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
