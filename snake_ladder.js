 let start = 0,
     poss
 console.log("pl_1 is at start", start)
 let a = Math.floor(Math.random() * (6 - 1 + 1) + 1)
 console.log("temp", a)
 let noplay = 0,
     ladder = 1,
     snake = 2
 let b = Math.round(Math.random() * 2)
 console.log("temp2", b)
 if (b == ladder) {
     poss = start + a
     console.log("poss", poss)
 } else if (b == noplay) {
     poss = start
     console.log("poss", poss)

 } else {
     poss = start - a
     console.log("poss", poss)

 }