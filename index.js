const rp = require('request-promise-native')
const PlayMusic = require('playmusic')
const pm = new PlayMusic()
const config = require('./config')

// Initializing PlayMusic
pm.init(config.google, err => {
  if (err) {
    console.log(err)
    return
  }
  // Getting Shazam JSON
  const rpOptions = {
    uri: 'http://cdn.shazam.com/shazam/v2/en/MX/android/-/tracks/web_chart_world',
    json: true,
  }
  rp(rpOptions)
  .then( json => {
    console.log(json.chart.length)
    if (json.chart.length) {
      json.chart.forEach( track => {
        if ('google' in track.stores) {
          console.log(track.stores.google.trackid)
        } else {
          console.log('No Google Music track ID: ' + track.share.subject)
        }
      })
    } else {
      console.log('No tracks returned.')
    }
  })
  .catch( err => {
    console.log(err)
  })
})
