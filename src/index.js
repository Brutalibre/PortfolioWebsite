
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./styles/parallax.scss');
require('./styles/responsive.scss');


/*document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});*/

document.getElementById("DownloadCV").onclick = () => {
    console.log("clicked!")
}

console.log(window.location.pathname);

document.getElementById("LinkAbout").onclick = () => {
    document.querySelector('#AboutMe').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById("LinkProjects").onclick = () => {
    document.querySelector('#MyProjects').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById("LinkContact").onclick = () => {
    document.querySelector('#Contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}
