const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;

// Serve every file from the project folder.
app.use(express.static(ROOT));

// Health endpoint.
app.get("/api/health", (req, res) => res.status(200).json({ ok: true }));

// Always return the homepage for the root URL.
app.get("/", (req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

// Fallback: prevents "Cannot GET /" for normal browser navigation.
app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("DJ BREEZE READY on port " + PORT);
});