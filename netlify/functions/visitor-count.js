const fs = require('fs');
const path = require('path');

const counterFile = path.join(__dirname, '..', '..', 'counter.txt');

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    fs.readFile(counterFile, 'utf-8', (err, data) => {
      if (err && err.code !== 'ENOENT') {
        console.error(err);
        return resolve({
          statusCode: 500,
          body: 'Server Error',
        });
      }

      const today = new Date().toISOString().split('T')[0];
      let lines = data ? data.split('\n') : [];
      let todayLine = lines[0];
      let count = 0;

      if (todayLine && todayLine.startsWith(today)) {
        count = parseInt(todayLine.split(':')[1], 10) || 0;
      } else {
        lines.unshift(`${today}:0`);
      }

      count++;
      lines[0] = `${today}:${count}`;

      fs.writeFile(counterFile, lines.join('\n'), (err) => {
        if (err) {
          console.error(err);
          return resolve({
            statusCode: 500,
            body: 'Server Error',
          });
        }

        resolve({
          statusCode: 200,
          body: JSON.stringify({ count }),
        });
      });
    });
  });
};
