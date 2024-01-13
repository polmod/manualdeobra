    
var navbarItems = `
<!-- Navigation bar -->
<header class="header">
    <!-- Logo -->
    <a href="../index.html" class="logo">
      <img src="../res/favicon.png" alt="Boceto de bloque">
    </a>
    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu"/>
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <!-- Menu -->
    <nav class="nav">
        <ul class="menu">
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="../comprar.html">Comprar</a></li>
            <li><a href="../detalles.html">Detalles</a></li>
            <li><a href="../autor.html">Autor</a></li>
            <li><a href="../blog.html">Blog</a></li>
        </ul>
    </nav>
</header>
`
document.body.insertAdjacentHTML("afterbegin", navbarItems);

var endnote = `
    <div class="main-container center">
        <p>Este artículo se ha elaborado a partir del contenido del libro <strong>Manual de Obra</strong>. Para más detalles, visite la <a href="../index.html">página de inicio</a></p>
    </div>    
    `
document.body.insertAdjacentHTML("beforeend", endnote);
    
var footer = `  
    <hr>
    <div id="footer">
        <img src="../res/footer_patrocinadores.png" alt="Logos de patrocinadores">
        <p> &copy; 2016-2024 Paolo Modenese </p>
    </div>
    `
document.body.insertAdjacentHTML("afterend", footer);