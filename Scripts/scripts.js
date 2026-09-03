function inyectarFooter(){
    document.getElementById("footer").innerHTML = "<p>Copyright © 2026 SwamperTcg, Todos los derechos reservados.</p>";
}

function inyectarHeader(){
    document.getElementById("header").innerHTML = 
        `<section class="header-logo">
        <a href="../Index.html">
                <img src="/imagenes/logo.jpg" alt="Logo SwamperTCG">
        </a>    
        </section>
        <section>
            <a href="/paginas/carrito.html">
                <p>
                    🛒
                </p>
            </a>
            <br>
            <a href="/paginas/usuario.html">
                <p>
                    👤 
                </p>
            </a>
            <br>
            <p>
            <a href="/paginas/.html">
                <p>
                    ☰
                </p>
            </a>

        </section>`
}

inyectarFooter();
inyectarHeader();