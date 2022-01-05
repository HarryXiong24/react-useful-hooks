// plopfile.js
const path = require('path');

module.exports = (plop) => {
  plop.setGenerator('demo', {
    description: 'create new files',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'demo name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/plop_demo/{{name}}.ts'),
        templateFile: path.resolve(__dirname, '../templates/demo.hbs'),
        data: {
          a: 1,
          b: 2,
          c: 3,
        },
      },
    ],
  });
};
