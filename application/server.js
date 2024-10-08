const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my ArgoCD-application!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});