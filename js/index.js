function seatSelection(){
    const kbds = document.getElementsByClassName('kbd');
    // console.log(kbds)
    for(const kbd of kbds){
        kbd.addEventListener('click',function(event){
            event.target.style.backgroundColor = 'orange';

        })
    }

     



   
   
    
}