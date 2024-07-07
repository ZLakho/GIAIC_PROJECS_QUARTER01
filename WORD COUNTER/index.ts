import inquirer from "inquirer";
const answers : {
    Sentence : string
} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence here : "
    }
])

const words = answers.Sentence.trim().split(" ")
console.log("---------------------------------")
console.log("Your sentence word count is ",words.length)
let i = 0
words.forEach(words=>{
    console.log("=> ",words)
})
