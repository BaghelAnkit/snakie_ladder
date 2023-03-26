 let poss = 0
 winning_poss = 100

 console.log("pl_1 is at start", poss)
 const noplay = 0,
     ladder = 1,
     snake = 2



 while (poss < winning_poss) {
     let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1)
     console.log("dice", dice)

     let option = Math.round(Math.random() * 2)
     console.log("option", option)
     if (option == ladder && poss + dice <= 100) {
         poss = poss + dice
         console.log("poss", poss)
         console.log("adding")
     }
     if (option == noplay) {
         //  poss = poss
         console.log("noplay")
     }
     if (option == snake && dice - poss > 0) {
         poss = poss - dice
         console.log("poss", poss)
     }

 }