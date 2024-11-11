const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num2 != 0 ? num1 / num2 : 'Error: Division by zero';
  res.json({ result });
});

const port = process.env.PORT || 6004;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
