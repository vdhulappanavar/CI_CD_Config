const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello  !'))
app.use('/check', express.static('build'))
// app.get('/', function(req, res) {
//   res.sendFile('../src/index.html', {root: __dirname })
//   res.sendFile('/uploads/' + uid + '/' + file);

// });
app.listen(38080, () => console.log('Example app listening on port 5000!'))