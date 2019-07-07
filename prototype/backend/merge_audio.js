const audioconcat = require('audioconcat');

const tokens = process.argv;

const token_news = tokens[2];
const token_music = tokens[3];
const token_lifestyle = tokens[4];

const suffix = tokens[5];

var snippets = [
  'content/audio/news/' + token_news + '_5s.mp3',
  'content/audio/music/' + token_music + '_5s.mp3',
  'content/audio/lifestyle/' + token_lifestyle + '_5s.mp3',
  'content/audio/ads/vor_ort_nrw_5s.mp3'
];

audioconcat(snippets)
  .concat('output/mein_senda_' + suffix + '.mp3')
  .on('error', (err) => console.log(err))
  .on('end', () => console.log('Done!'));