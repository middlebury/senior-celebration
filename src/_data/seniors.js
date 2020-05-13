const path = require('path');
const fs = require('fs');
const Papa = require('papaparse');
const { groupBy, sortBy } = require('lodash');

module.exports = () => {
  const csv = fs.readFileSync(path.resolve(__dirname, 'seniors.csv'), {
    encoding: 'utf8'
  });

  const { data } = Papa.parse(csv, {
    header: true
  });

  const grouped = groupBy(data, (person) =>
    person.last_name.charAt(0).toLowerCase()
  );

  const sorted = Object.keys(grouped)
    .sort()
    .map((letter) => {
      return {
        letter,
        names: sortBy(grouped[letter], (person) =>
          person.last_name.toLowerCase()
        )
      };
    });

  return sorted;
};
