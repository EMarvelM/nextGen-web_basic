const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const ob = {
    "rock": "scissor",
    "paper": "rock",
    "scissor": "paper",
}


while(true) {
    let computerMove = Math.floor((Math.random() * 10) / 4);
    console.log("computer number", computerMove);
    computerMove = Object.keys(ob)[computerMove]


    console.log(Object.values(ob))
    console.log(`Choose from the below (or choose from 0 - ${Object.keys(ob).length - 1})`);

    let i = 0;
    for (let v in ob) {
        console.log(`${i}.  `, v);
        i++;
    }

    rl.question('> ', (ans) => {
        let userChoice = null;

        if (!Number.isNaN(Number(ans))) {
            const num = Number(ans);
            if (num < 0 || num > (Object.keys(ob).length - 1)) {
                console.log("Invalid number selection");
                rl.close()
                return;
            }
            userChoice = Object.keys(ob)[num]
            // console.log(userChoice)
        } else {
            if (ans.toLowerCase() in ob) {
                userChoice = ans.toLowerCase();                
            }

        }

        // TODO: Compare userChoice to computer choice
        console.log("computer chosed:", computerMove);
        if (computerMove === userChoice){
            console.log("You Tied!");
        } else if (ob[userChoice] === computerMove) {
            console.log("You Won");
        } else {
            console.log("You Loose");
        }
        
        rl.close()
    })

    break;

}