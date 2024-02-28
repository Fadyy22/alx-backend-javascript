import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const db = data.split('\n').map((row) => row.split(','));
      const students = db.slice(1, -1);
      const fields = {};
      const response = [];
      for (const student of students) {
        if (fields[student[3]]) {
          fields[student[3]].push(student[0]);
        } else {
          fields[student[3]] = [student[0]];
        }
      }
      resolve(fields);
    }
  });
});

export default readDatabase;
