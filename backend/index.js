const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "d2e29ba3-1211-4d1b-a81b-a5f1f9c8b375" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response && e.response.status && e.response.data) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the error when the response structure is unexpected
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(3001);
