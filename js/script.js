// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. 
// Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. 
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto


function createVueInstance() {
  new Vue({
      el: '#jsMusic',

      data: {
          array : []
      },

      mounted() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            'api_key' : 'ae4586143be06066dd74693192e929fc',
            'query' : 'batman'
          }
        })
        .then(data => {

          console.log(data.data.results);
        })

        .catch(() => console.log('error'));
      },

      methods: {

        lollipop: function() {
          return this.data.data.results;          
        }

      }
  });
}

function finalCountdown() {
  createVueInstance();
}

document.addEventListener('DOMContentLoaded', finalCountdown);