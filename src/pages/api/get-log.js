import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const logPath = path.join(process.cwd(), "logs", "traffic-log.txt");

  if (!fs.existsSync(logPath)) {
    return res.status(404).send("<h3>Log file not found.</h3>");
  }

  const rawContent = fs.readFileSync(logPath, "utf8");
  const lines = rawContent.trim().split("\n");

  // Build table rows
  const rows = lines.map((line) => {
    const [datetimePart, sourcePart] = line.split(" - Source: ");
    const [date, time] = datetimePart.split("T");
    const cleanTime = time.split(".")[0];

    return `<tr>
      <td>${date}</td>
      <td>${cleanTime}</td>
      <td>${sourcePart}</td>
    </tr>`;
  });

  const html = `
    <html>
    <head>
      <style>
        table {
          border-collapse: collapse;
          width: 60%;
          margin: 20px auto;
          font-family: Arial, sans-serif;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 8px 12px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        h2, .download {
          text-align: center;
        }
        .download a {
          display: inline-block;
          margin-bottom: 20px;
          padding: 8px 16px;
          background-color: #0070f3;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <h2>Traffic Logs</h2>
      <div class="download">
        <a href="/api/download-log">Download Log File</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join("\n")}
        </tbody>
      </table>
    </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
