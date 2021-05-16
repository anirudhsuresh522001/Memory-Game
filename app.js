document.addEventListener("DOMContentLoaded",()=>{
    const cardArray=[
        {
            name:"chocolate",
            img:"images/icons8-chocolate-bar-emoji-100.png"
        },
        {
            name:"coffee",
            img:"images/icons8-coffee-100.png"
        },
        {
            name:"doughnut",
            img:"images/icons8-doughnut-100.png"
        },
        {
            name:"hamburger",
            img:"images/icons8-hamburger-100.png"
        },
        {
            name:"iceCream",
            img:"images/icons8-ice-cream-cone-100.png"
        },
        {
            name:"pizza",
            img:"images/icons8-pizza-100.png"
        },
        {
            name:"frenchFries",
            img:"images/icons8-french-fries-100.png"
        },
        {
            name:"hotDog",
            img:"images/icons8-hot-dog-100.png"
        },
        {
            name:"chocolate",
            img:"images/icons8-chocolate-bar-emoji-100.png"
        },
        {
            name:"coffee",
            img:"images/icons8-coffee-100.png"
        },
        {
            name:"doughnut",
            img:"images/icons8-doughnut-100.png"
        },
        {
            name:"hamburger",
            img:"images/icons8-hamburger-100.png"
        },
        {
            name:"iceCream",
            img:"images/icons8-ice-cream-cone-100.png"
        },
        {
            name:"pizza",
            img:"images/icons8-pizza-100.png"
        },
        {
            name:"frenchFries",
            img:"images/icons8-french-fries-100.png"
        },
        {
            name:"hotDog",
            img:"images/icons8-hot-dog-100.png"
        }
    ];
    cardArray.sort(()=>0.5-Math.random());

    const grid=document.querySelector(".grid");
    const resultDisplay=document.querySelector("#result");
    resultDisplay.textContent=0;
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
    
    function createBoard(){
        for(let i=0;i<cardArray.length;i++)
        {
            const card=document.createElement("img");
            card.setAttribute("src","images/rectangle.png");
            card.setAttribute("data-id",i);
            card.addEventListener("click",flipCard);
            grid.appendChild(card);
        }
    }
    function checkForMatch(){
        const cards=document.querySelectorAll("img");
        const optionOneId=cardsChosenId[0];
        const optionTwoId=cardsChosenId[1];
        if(optionOneId==optionTwoId)
        {
            
            cards[optionOneId].setAttribute("src","images/rectangle.png");
            cards[optionTwoId].setAttribute("src","images/rectangle.png");
            alert("You have clicked the same image");
        }
        else if(cardsChosen[0]===cardsChosen[1])
        {
            cards[optionOneId].setAttribute("src","images/rectangleBlue.png");
            cards[optionTwoId].setAttribute("src","images/rectangleBlue.png");
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            alert("Yay, Match found");
        }
        else
        {
            cards[optionOneId].setAttribute("src","images/rectangle.png");
            cards[optionTwoId].setAttribute("src","images/rectangle.png");
            alert("Oops, Try again");
            
            
        }
        cardsChosen=[];
        cardsChosenId=[];
        resultDisplay.textContent=cardsWon.length;
        if(cardsWon.length===cardArray.length/2)
        {
            resultDisplay.textContent="Congrats! You Win";
        }
    }
    function flipCard(){
        let cardId=this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src",cardArray[cardId].img);
        if(cardsChosen.length===2)
        {
            setTimeout(checkForMatch,500);

        }
    }
    createBoard();
});
