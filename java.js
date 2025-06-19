const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



  
  const btn1 = document.getElementById('load-more-1');
  const cajas1 = document.querySelectorAll('.hidden-box-1');
  let visible1 = false;

  btn1.addEventListener('click', () => {
    visible1 = !visible1;
    cajas1.forEach(caja => {
      caja.style.display = visible1 ? 'block' : 'none';
    });
    btn1.textContent = visible1 ? 'ver menos' : 'cargar más';
  });

 
  const btn2 = document.getElementById('load-more-2');
  const cajas2 = document.querySelectorAll('.hidden-box-2');
  let visible2 = false;

  btn2.addEventListener('click', () => {
    visible2 = !visible2;
    cajas2.forEach(caja => {
      caja.style.display = visible2 ? 'block' : 'none';
    });
    btn2.textContent = visible2 ? 'ver menos' : 'cargar más';
  });


  const btnVolver = document.getElementById("volver");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnVolver.style.display = "block";
    } else {
      btnVolver.style.display = "none";
    }
  });

  btnVolver.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });





  let anuncioActual = 0;
  const totalAnuncios = 5; // actualiza si tienes más

  function cerrarPublicidad() {
    const actual = document.getElementById(`pub-${anuncioActual}`);
    actual.classList.add("desaparecer");

    setTimeout(() => {
      actual.style.display = "none";
      anuncioActual++;
      if (anuncioActual < totalAnuncios) {
        const siguiente = document.getElementById(`pub-${anuncioActual}`);
        siguiente.classList.remove("oculto");
      }
    }, 500); // espera animación
  }

  // Al cargar, oculta todos menos el primero
  window.onload = () => {
    for (let i = 1; i < totalAnuncios; i++) {
      document.getElementById(`pub-${i}`).classList.add("oculto");
    }
  };

