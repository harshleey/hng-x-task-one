require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is the HNG Task One");
});

app.get("/api", (req, res) => {
  try {
    const { slack_name, track } = req.query;
    const currentDate = new Date();
    const options = { weekday: "long" };
    const currentDay = currentDate.toLocaleDateString("en-US", options);
    const utcTime = currentDate.toISOString().replace(/\.\d+Z$/, "Z");
    res.json({
      slack_name: slack_name,
      current_day: currentDay,
      utc_time: utcTime,
      track: track,
      github_file_url:
        "https://github.com/harshleey/hng-x-task-one/blob/main/index.js",
      github_repo_url: "https://github.com/harshleey/hng-x-task-one",
      status_code: res.statusCode,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
