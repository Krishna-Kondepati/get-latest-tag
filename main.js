const { exec } = require('child_process');
const fs = require('fs');
const tagPrefix = `${process.env.INPUT_PREFIX || ''}*`;

exec(`git describe --abbrev=0 --tags $(git rev-list --tags --skip=1 --max-count=1)`, (err, tag, stderr) => {
    tag = tag.trim();
    //fs.appendFileSync(process.env.GITHUB_OUTPUT, `tag=${tag}\n`);
    console.log('\x1b[32m%s\x1b[0m', `Found tag: ${tag}`);
    process.exit(0);
});