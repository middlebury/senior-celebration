const path = require('path');
const fs = require('fs');
const Papa = require('papaparse');

module.exports = () => {
  const csv = fs.readFileSync(path.resolve(__dirname, 'seniors.csv'), {
    encoding: 'utf8'
  });

  const data = Papa.parse(csv, {
    header: true
  });

  return data.data;
};
