
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
