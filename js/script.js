// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. 
// Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. 
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto

// Milestone 2:
// Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
// Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
// Qui un esempio di chiamata per le serie tv:
// https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=s
// crubs


// Milestone 3:
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. 
// Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. 
// Dovremo prendere quindi l’URL base delle immagini 
// di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare 
// (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) 
// per poi aggiungere la parte finale dell’URL passata dall’API.
// Esempio di URL:
// https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png


function createVueInstance() {
  new Vue({
      el: '#jsBoolflix',

      data: {
          movieArray : [],
          tvSeriesArray : [],
          searchInput : ``,
          imgInput: `https://image.tmdb.org/t/p/w92`
      },

      mounted() {
        
      },

      computed: {
        
      },

      methods: {

        searchMovie: function() {
          axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              'api_key' : 'ae4586143be06066dd74693192e929fc',
              'query' : this.searchInput
            }
          })
          .then(data => {
              this.movieArray = data.data.results;
              console.log(this.movieArray);
          })
          .catch(() => console.log('error'));
        },
        

        searchTvSeries: function() {
          axios.get('https://api.themoviedb.org/3/search/tv', {
            params: {
              'api_key' : 'ae4586143be06066dd74693192e929fc',
              'query' : this.searchInput
            }
          })
          .then(data => {
              this.tvSeriesArray = data.data.results;
            console.log(this.tvSeriesArray);
          })
          .catch(() => console.log('error'));
        },


        vote1To5: function(vote) {
         return vote = Math.round(vote / 2);
        }

      }
  });
}

function finalCountdown() {
  createVueInstance();
}

document.addEventListener('DOMContentLoaded', finalCountdown);