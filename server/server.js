const app = require('./index.js');

const port = 1991;

app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
