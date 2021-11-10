const app = new Vue(
  {
   el: '#app',

   data: {
     message: 'Hello World!',
     img: 'img/albert-einstein-gc7a7588d3_640.jpg',
     nome: '',
     colore: 'azzurro',
     colore2: 'arancione'
   },

   methods: {
     cambiaColore(colorePassato) {
     this.colore = colorePassato
    }
   }

})

