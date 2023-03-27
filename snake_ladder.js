 let poss_ply1 = 0
 let poss_ply2 = 0
 let winning_poss = 100
 const noplay = 0,
     ladder = 1,
     snake = 2
 let active_player = true
 while (poss_ply1 < winning_poss && poss_ply2 < winning_poss) {
     let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1)
     let option = Math.round(Math.random() * 2)
     if (option == ladder) {
         if (active_player == true && poss_ply1 + dice <= winning_poss) {
             poss_ply1 = poss_ply1 + dice
         }
         if (active_player == false && poss_ply2 + dice <= winning_poss) {
             poss_ply2 = poss_ply2 + dice
         }
     }
     if (option == snake) {
         if (active_player == true && poss_ply1 - dice > 0) {
             poss_ply1 = poss_ply1 - dice
         }
         if (active_player == false && poss_ply2 - dice > 0) {
             poss_ply2 = poss_ply2 - dice
         }
         active_player = !active_player
     }
     if (option == noplay) {
         active_player = !active_player
     }
 }
 console.log("ply1", poss_ply1)
 console.log("ply2", poss_ply2)
 if (poss_ply1 == winning_poss) {
     console.log("plahyer 1 wins the game")
 } else {
     console.log("player 2 wins the game")
 }