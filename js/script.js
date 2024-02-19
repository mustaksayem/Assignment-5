let seatCount = 0;
let preventDouble = 0;
const tickets = document.getElementsByClassName("kbd");
for (let index = 0; index < tickets.length; index++) {
    const ticket = tickets[index];
    ticket.addEventListener("click", function (event) {



        const elementId = event.target.getAttribute("id");

        if (preventDouble < 4) {
            const buttonElement = document.getElementById(elementId);
            if (buttonElement) {
                buttonElement.disabled = true;
            }
            preventDouble++;
        }

        const ticketIdNumber = ticket.innerText;

        const ticketIdNumberShow = document.getElementById('ticketIdNumberShow');
        const tckIdShow = document.createElement("p");
        tckIdShow.innerText = ticketIdNumber;
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            ticketIdNumberShow.appendChild(tckIdShow);
            event.target.style.backgroundColor = "#1DD100";
            event.target.style.color = "white";
        }

        const ticketClassShow = document.getElementById('classShow');
        const ticketClass = document.createElement("p");
        ticketClass.innerText = "Economy";
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            ticketClassShow.appendChild(ticketClass);
        }

        if (document.getElementsByClassName('ticketPrice').length < 4) {
            const ticketPrice = document.createElement("p");
            ticketPrice.innerText = "550";
            ticketPrice.classList.add('ticketPrice');
            priceShow.appendChild(ticketPrice);

            updateTotalPrice();
        } else {
            alert("You can't buy more than 4 tickets");
        }

        function updateTotalPrice() {
            total = 0;
            const ticketPrices = document.getElementsByClassName('ticketPrice');
            for (let i = 0; i < ticketPrices.length; i++) {
                total += parseInt(ticketPrices[i].innerText);
            }
            const totalPriceElement = document.getElementById('totalPrice');
            totalPriceElement.innerText = total;
        
            let grandTotalElement = document.getElementById("grandTotal");
            grandTotalElement.innerText = total;
        
        }

        const totalSeat = document.getElementById('totalSeatsLeft');

        if (parseInt(totalSeat.innerText) > 36) {
            let minusSeatNumber = parseInt(totalSeat.innerText) - 1;
            totalSeat.innerText = minusSeatNumber;
        }

        if (parseInt(document.getElementById('selectedSeat').innerText) < 4) {
            seatCount++;
            const currentSelectedSeat = document.getElementById('selectedSeat');
            currentSelectedSeat.innerText = seatCount;
        }




    })

}

const couponBtn = document.getElementById('discount-btn')
couponBtn.addEventListener("click", function () {
    const couponElement = document.getElementById("coupon-input").value;
    if (total == 2200) {
        if (couponElement === "NEW15") {
            couponCode(0.15);
        }

        else if (couponElement === "Couple 20") {
            couponCode(0.20);
        }
        else {
            alert("Enter Correct Coupon");
        }

    }
    else {
        alert("Coupon only validate if you buy 4 tickets");
    }
})


let grandTotalElement = document.getElementById("grandTotal");



function couponCode(elementId) {
    const discountElement = total * elementId;

    let grandTotalElement = document.getElementById("grandTotal");
    grandTotalElement.innerText = total - discountElement;

    const discountId = document.getElementById('discount');
    const discountCreateElement = document.createElement("p");
    discountCreateElement.innerText = discountElement;
    discountId.appendChild(discountCreateElement);

    const addElement = document.getElementById('couponBox');
    addElement.classList.add('hidden');
    const removeElement = document.getElementById('discountDiv');
    removeElement.classList.remove('hidden');

}

// let varInputNumber = 0;

// function getValue() {

//     var inputField = document.getElementById("phoneNumber");
//     var value = inputField.value;
//     varInputNumber = value.length;
   

//   }

function buttonModal() {

    
    if (seatCount <= 0 ) {
        alert("First select a seat");
        buttonIdDisable.disabled = true;
    } else {

        const addElement1 = document.getElementById('section-body');
        addElement1.classList.add('opacity-0');

        


    }

}

function modalVisible (){
    const addElement = document.getElementById('section-body');
        addElement.classList.remove('opacity-0');


}

function bannerButton() {

    var section = document.getElementById('phParibahan')
    if (section) {
        var offsetTop = section.offsetTop;
        section.scrollIntoView({ top: offsetTop, behavior: 'smooth' });
    }
}



document.addEventListener('DOMContentLoaded', function () {
    var nameInput = document.getElementById("name-Input");
    var phoneInput = document.getElementById("phone-Input");
    var nextButton = document.getElementById("next-button");

    function checkValidity() {
        if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "") {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', checkValidity);
    phoneInput.addEventListener('input', checkValidity);
});