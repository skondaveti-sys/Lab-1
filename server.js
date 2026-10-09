import express from 'express';

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];
app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  // filter `projects` here, based on your decision above
});
app.get('/about', (req, res) => {
  res.send('This is a web programming course.');
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// work in progress
