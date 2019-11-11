const SEARCH_TAG = "font-primary link";

const GITHUB_ICON = `
<i class="fa fa-github" />
`;

const DEVPOST_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -90 364.39 314.6" class="fa-fw" style="overflow: visible">
    <g>
        <path d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"></path>
        <path d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74
            C208.1,172.8,170.6,195,132.7,195z"></path>
    </g>
</svg>
`;

const LINK_ICON = `
<i>🔗</i>
`;

function runConversion(node) {
    let link = node.childNodes[1].href;
    console.log("Adding icon for: " + link);
    let icon = document.createElement('a');
    icon.href = link;
    if(link.includes('github')) {
        icon.innerHTML = GITHUB_ICON;
    } else if(link.includes('devpost')) {
        icon.innerHTML = DEVPOST_ICON;
    } else {
        icon.style = "text-decoration: none; font-size: 0.75em";
        icon.innerHTML = LINK_ICON;
    }
    node.appendChild(icon);
}

var observer = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
        var newNodes = mutation.addedNodes;
        newNodes.forEach((node => {
            if(node.className && node.className.includes(SEARCH_TAG)) {
                runConversion(node);
            }
        }));
    });
});

observer.observe(document, {
    childList:     true,
    subtree:       true,
    attributes:    false,
    characterData: false,
});