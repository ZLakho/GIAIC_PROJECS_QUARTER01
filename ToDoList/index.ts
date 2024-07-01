#!/usr/bin/env node
import inquirer from "inquirer";

let todos : string[] = [];
let loop = true;

while(loop){
    const answers : {todo : string, retry : boolean} = await inquirer.prompt([
        {
            type : "input",
            name : "todo",
            maessage : "What do you want to add in your todo? "

        },
        {
            type : "confirm",
            name : "retry",
            maessage : "Do you want to add more? ",
            default : false

        },

    ])

        const {todo, retry} = answers;
        // console.log(answers);
        loop = retry;
        if(todo){   
            todos.push(todo)
        }
        else{
            console.log("Kindly add valid input")
        }
}
// console.log(todos)
if (todos.length > 0){
    console.log("\n---------------------")
    console.log(" Your Todo list: \n")
    todos.forEach(todo => {
        console.log(" => ", todo)
    })

}
else{
    console.log("No Todo found")
}
