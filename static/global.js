console.log("Hello World!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: "./", title: "Home"},
    {url: "./projects/", title: "Projects"},
    {url: "./resume/", title: "Resume"},
    {url: "./contact/", title: "Contact"},
    {url: "https://github.com/falcaoanderson", title: "GitHub"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {    
    let url = p.url;
    let title = p.title;
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    let a = document.createElement("a");

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    } 

    a.href = url;
    a.textContent = title;

    if (a.host != location.host) {
        a.target = "_blank"
    } 

    nav.append(a);
}