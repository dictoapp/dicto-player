const fs = require('fs');

const bundlePlayer = require('../../services/playerBundler');

const simple = require('../../stories/compositions/vectors-une-analyse.json');

console.log('bundling vectors example');

const bundle = bundlePlayer(simple, {displayMode: 'columns'});

fs.writeFile(__dirname + '/index.html', bundle, 'utf8', (err) => {
  if (err) {
    console.log('an error occured: ');
    return console.log(err);
  }
  console.log('done');
});