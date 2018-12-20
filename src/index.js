
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./styles/parallax.scss');

console.log(window.location.pathname);

document.getElementById("LinkAbout").onclick = e => {
    e.preventDefault();
    document.getElementById("BurgerMenu").checked = false;
    document.querySelector('#AboutMe').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById("LinkProjects").onclick = e => {
    e.preventDefault();
    document.getElementById("BurgerMenu").checked = false;
    document.querySelector('#MyProjects').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById("LinkContact").onclick = e => {
    e.preventDefault();
    document.getElementById("BurgerMenu").checked = false;
    document.querySelector('#Contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
}
