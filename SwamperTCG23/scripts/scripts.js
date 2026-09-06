function inyectarFooter(){
    document.getElementById("footer").innerHTML = "<p>Copyright © 2026 SwamperTcg, Todos los derechos reservados.</p>";
}

function inyectarHeader(){
    document.getElementById("header").innerHTML = 
        `<section class="header-logo">
            <a href="../index.html">
                <img src="/imagenes/logo.jpg" alt="Logo SwamperTCG">
            </a>
        </section>
        <section class="header-nav">
            <a href="../index.html">inicio</a>
            <a href="/paginas/catalogo.html">catalogo</a>
            <a href="/paginas/info.html">información</a>
            <a href="/paginas/contacto.html">contacto</a>
        </section>
        <section class="header-icons">
            <a href="/paginas/carrito.html">🛒</a>
            <a href="/paginas/usuario.html">👤</a>
        </section>`
}
inyectarFooter();
inyectarHeader();