    
var navbarItems = `
    <div id="header">
      <a href="./index.html">
        <img src="./res/favicon.png" alt="Boceto de un bailejo"></img>
      </a>  
      <ul id="navbar">
        <li><a href="./index.html">Inicio</a></li>
        <li><a href="./comprar.html">Comprar</a></li>
        <li><a href="./detalles.html">Detalles</a></li>
        <li><a href="./autor.html">Autor</a></li>
      </ul>
      <div></div>
    </div>
`
document.body.insertAdjacentHTML("afterbegin", navbarItems);

    
var footer = `
    <hr>
    <div id="footer">
    <img src="./res/footer_patrocinadores.png" alt="Logos de patrocinadores">
    <p> &copy; 2016-2024 Paolo Modenese </p>
    </div>
    `
document.body.insertAdjacentHTML("afterend", footer);