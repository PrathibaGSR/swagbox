import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { source } = req.query;

  if (!source) {
    return res.status(400).json({ message: "Source is missing" });
  }

  const logDir = path.join(process.cwd(), "logs");
  const logFile = path.join(logDir, "traffic-log.txt");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - Source: ${source}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error("Error writing log:", err);
      return res.status(500).json({ message: "Failed to write log" });
    }
    return res.status(200).json({ message: "Logged successfully" });
  });
}
