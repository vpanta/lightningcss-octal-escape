const lightning = require('lightningcss');

const { code } = lightning.transform({
    filename: '1.css',
    code: Buffer.from(`
.someClass {
    hidden: false
}
`),
    cssModules: {
        pattern: '[name]_[local]'
    },
  });

console.log(String(code));