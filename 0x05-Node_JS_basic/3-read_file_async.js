const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const db = data.split('\n').map((row) => row.split(','));
      const students = db.slice(1, -1);
      const fields = {};
      for (const student of students) {
        if (fields[student[3]]) {
          fields[student[3]].push(student[0]);
        } else {
          fields[student[3]] = [student[0]];
        }
      }

      console.log(`Number of students: ${students.length}`);
      for (const [key, value] of Object.entries(fields)) {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
