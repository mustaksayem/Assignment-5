
let seatCount =0;

const seatcards = document.querySelectorAll(".kbd")

for (let index= 0;index < seatcards.length; index++){
    const card = seatcards[index];
    card.addEventListener('click',function(){
        const title = card.querySelector("h1")
       
      const titleContainer = document.getElementById('title-container');
      
      const p = document.createElement('p');
      p.innerText = title.innerText;
      titleContainer.appendChild(p);
      seatCount++


      const currentScore = document.getElementById("current-score");
     currentScore.innerText=seatCount;

     const totalSeats = document.querySelectorAll(".total-seats");
     for (let index= 0;index < totalSeats.length; index++){
        
            const totalSeat = document.getElementById("total"); 
            let x=totalSeat.innerText;
            x--;
    
           totalSeat.innerText=x;
     }
     
    })

}




