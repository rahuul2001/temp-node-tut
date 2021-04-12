const{ readFileSync, writeFileSync }=require('fs')
const first=readFileSync('./content/first.txt', 'utf8')
const second=readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)
// writeFileSync(
//     "./content/result.txt",
//     `Here is: ${first}, ${second}` 
// )

writeFileSync(
    "./content/result.txt",
    `Here is: ${first}, ${second}` , {flag: 'a'}
)
const result=readFileSync("./content/result.txt", "utf8")
console.log(result)