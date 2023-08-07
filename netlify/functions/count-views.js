const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'views.txt');

exports.handler = async (event) => {
  const videoId = event.queryStringParameters.videoId;

  let data;
  try {
    data = fs.readFileSync(file, 'utf8').split('\n').map(line => line.split(':'));
  } catch (error) {
    data = [];
  }

  const lineIndex = data.findIndex(([id]) => id === videoId);
  if (lineIndex >= 0) {
    data[lineIndex][1] = String(Number(data[lineIndex][1]) + 1);
  } else {
    data.push([videoId, '1']);
  }

  fs.writeFileSync(file, data.map(line => line.join(':')).join('\n'));

  return {
    statusCode: 200,
    body: JSON.stringify({ count: data.find(([id]) => id === videoId)[1] }),
  };
};
