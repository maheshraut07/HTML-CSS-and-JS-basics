// Fetch song data from an API using Axios
axios.get('https://api.example.com/songs')
  .then(response => {
    const songs = response.data;

    // Create a Vue app
    const app = Vue.createApp({
      data() {
        return {
          nowPlaying: {},
          playlist: songs
        };
      },
      methods: {
        playSong(song) {
          this.nowPlaying = song;
        }
      }
    });

    // Mount the app
    app.mount('#song-list');

    // Update the now-playing section when a song is clicked
    document.getElementById('song-list').addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const selectedSong = songs.find(song => song.title === event.target.innerText);
        app.nowPlaying = selectedSong;
      }
    });
  })
  .catch(error => {
    console.error('Error fetching song data:', error);
  });