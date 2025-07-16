import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const logPath = path.join(process.cwd(), "logs", "traffic-log.txt");

  if (!fs.existsSync(logPath)) {
    return res.status(404).send("Log file not found.");
  }

  const fileStream = fs.createReadStream(logPath);

  res.setHeader("Content-Disposition", "attachment; filename=traffic-log.txt");
  res.setHeader("Content-Type", "text/plain");

  fileStream.pipe(res);
}
