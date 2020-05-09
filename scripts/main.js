

(function() {
    document.querySelector('.lista-desplegable').addEventListener('click', function() {
      this.parentNode.parentNode.classList.toggle('noplegado')
    }, false);
  })();