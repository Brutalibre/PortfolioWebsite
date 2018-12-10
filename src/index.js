
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./styles/parallax.scss');

document.getElementById("DownloadCV").onclick = () => {
    console.log("clicked!")
}

console.log(window.location.pathname);

document.getElementById("LinkAbout").onclick = e => {
    e.preventDefault();
    document.querySelector('#AboutMe').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById("LinkProjects").onclick = e => {
    e.preventDefault();
    document.querySelector('#MyProjects').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById("LinkContact").onclick = e => {
    e.preventDefault();
    document.querySelector('#Contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}
