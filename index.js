
// challenge 1
function ageInDays(){
    let birth_year = prompt('what is your birth year?');
    let age_in_days = (2020-birth_year)*365;
    let text = document.createTextNode('you are '+ age_in_days + ' days old !!');
    let result = document.createElement('h1');
    result.setAttribute('id','result-element');
    result.appendChild(text);
    document.getElementById('display-result').appendChild(result);
}

function sweep(){
    document.getElementById('result-element').remove();
}

// challenge 2

function generateCat(){
    let image = document.createElement('img');
    image.setAttribute('src','data:image/jpeg;base64,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');
    document.getElementById('cat-container').appendChild(image);
}

//challenge 3

function rpsfun(yourChoice){
   let botChoice=botChoiceGen();
   console.log(yourChoice.id)
   console.log(botChoice);
   let list = getWinner(yourChoice.id,botChoice);//returns list
   console.log(list);
   let message = getMessage(list)//returns dict of message and color
   console.log(message);
   frontEnd(yourChoice,botChoice,message);

}

function botChoiceGen(){
    let num = Math.floor(Math.random()*3);
    return ['rock','paper','scissors'][num];
}

function getWinner(c1,c2){
    if(c1==c2)
        return [0.5,0.5];
    else if(c1=='rock'){
        if(c2=='paper')
            return [0,1];
        else
            return [1,0];
    }
    else if(c1=='paper'){
        if(c2=='scissors')
            return [0,1];
        else
            return [1,0];
    }
    else if(c1=='scissors'){
        if(c2=='rock')
            return [0,1];
        else
            return [1,0];
    }
}

function getMessage(list){
    let net = list[0]-list[1];
    if(net==0)
        return {result:'Match Tied',color:'yellow'};
    else if(net==1)
        return {result:'You Won',color:'green'};
    else
        return {result:'You Lost',color:'red'};
}

function frontEnd(yc,bc,message){

    window.ImageDB = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    let my_box = document.createElement('div');
    my_box.setAttribute('id','my_box')
    my_box.setAttribute('class','my_box');
    let my_img = document.createElement('img'); 
    my_img.setAttribute('src',yc.src);
    my_box.appendChild(my_img);
    document.getElementById('rps-box').appendChild(my_box);

    let mess_box = document.createElement('h1');
    mess_box.setAttribute('id','mess_box');
    mess_box.setAttribute('style','color:'+message.color);
    let text = document.createTextNode(message.result);
    mess_box.appendChild(text);
    document.getElementById('rps-box').appendChild(mess_box);

    let bot_box = document.createElement('div');
    bot_box.setAttribute('id','bot_box');
    bot_box.setAttribute('class','bot_box');
    let bot_img = document.createElement('img'); 
    bot_img.setAttribute('src',ImageDB[bc]);
    bot_box.appendChild(bot_img);
    document.getElementById('rps-box').appendChild(bot_box);

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
     

}

function reset_rps(){
    document.getElementById('my_box').remove();
    document.getElementById('mess_box').remove();
    document.getElementById('bot_box').remove();

    let image1 = document.createElement('img');
    image1.setAttribute('src',window.ImageDB.rock);
    image1.setAttribute('height','150px');
    image1.setAttribute('width','150px');
    image1.setAttribute('onclick','rpsfun(this)');
    image1.setAttribute('id','rock');

    let image2 = document.createElement('img');
    image2.setAttribute('src',window.ImageDB.paper);
    image2.setAttribute('height','150px');
    image2.setAttribute('width','150px');
    image2.setAttribute('onclick','rpsfun(this)');
    image2.setAttribute('id','paper');

    let image3 = document.createElement('img');
    image3.setAttribute('src',window.ImageDB.scissors);
    image3.setAttribute('height','150px');
    image3.setAttribute('width','150px');
    image3.setAttribute('onclick','rpsfun(this)');
    image3.setAttribute('id','scissors');

    document.getElementById('rps-box').appendChild(image1);
    document.getElementById('rps-box').appendChild(image2);
    document.getElementById('rps-box').appendChild(image3);

}


let all_buttons = document.getElementsByTagName('button');
let buttons_list=[]
for(let i=0;i<all_buttons.length;i++){
    buttons_list.push(all_buttons[i].classList[1]);
}

function changeColor(selectedColor){
    if(selectedColor.value === 'Red'){
        changeToRed();
    }else if(selectedColor.value === 'Green'){
        changeToGreen();
    }else if(selectedColor.value === 'Random'){
        changeToRandom();
    }else if(selectedColor.value === 'Reset'){
        changeToReset();
    }
}

function changeToRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function changeToGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function changeToRandom(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(buttons_list[Math.floor(Math.random()*8)]);
    }
}

function changeToReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(buttons_list[i]);
    }
}

//challenge 5
let blackJack ={
    'you':{'score-span':'#your-bj-score','div':'#your-box','score':0},
    'dealer':{'score-span':'#dealer-bj-score','div':'#dealer-box','score':0},
    'cards':['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
    'cardmaps':{'A':[1,11],'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10},
};

let hitSound = new Audio('sounds/swish.m4a');
let cashSound = new Audio('sounds/cash.mp3');
let awwSound = new Audio('sounds/aww.mp3');

const YOU = blackJack['you'];
const DEALER = blackJack['dealer']; 

document.querySelector('#bj-hit').addEventListener('click',bjhit);
document.querySelector('#bj-deal').addEventListener('click',bjdeal);

function bjhit(){
    let card = randomCard();
    showCard(card,YOU);
    updateScore(card,YOU);
    checkLimit();

}

function showCard(card,activePlayer){
    let image = document.createElement('img');
    image.src=`images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(image);
    hitSound.play();
}

function bjdeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }
    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }
    YOU['score']=0;
    DEALER['score']=0;
    document.querySelector(YOU['score-span']).innerHTML=0;
    document.querySelector(DEALER['score-span']).innerHTML=0;
    document.querySelector('#blackjack-result').innerHTML='Lets Play!!!';

}

function randomCard(){
    let cardIndex = Math.floor(Math.random()*13);
    return blackJack['cards'][cardIndex];
}

function updateScore(card,activePlayer){
    if(card=='A'){
        let scoreEarned=0;
        if(activePlayer['score']<11){
           scoreEarned=11;
        }
        else{
            scoreEarned=1;
        }
        activePlayer['score'] = activePlayer['score']+scoreEarned;
        document.querySelector(activePlayer['score-span']).innerHTML=activePlayer['score'];

 
    }
    else{
    activePlayer['score'] = activePlayer['score']+blackJack['cardmaps'][card];
    document.querySelector(activePlayer['score-span']).innerHTML = activePlayer['score'];  
    }     
}

function checkLimit(){
    if(YOU['score']>21){
        document.querySelector('#blackjack-result').innerHTML = 'Dealer Won You Lost' ;
        awwSound.play();
        updateTable([0,1]);
    }
}
document.querySelector('#bj-stand').addEventListener('click',bjStand);
function bjStand(){
    while(DEALER['score']<YOU['score']){
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        winCheck();
    }
}

function winCheck(){
    if(DEALER['score']==YOU['score']){
        document.querySelector('#blackjack-result').innerHTML = 'DRAW!!';
        awwSound.play();
        updateTable([1,1]);
    }
        
    else if(YOU['score']<DEALER['score']&&DEALER['score']<=21){
        document.querySelector('#blackjack-result').innerHTML = 'Dealer Won You Lost' ;
        awwSound.play();
        updateTable([0,1]);
    }
           
    else if(DEALER['score']>21){
        document.querySelector('#blackjack-result').innerHTML = 'You Won Dealer Lost';
        cashSound.play();
        updateTable([1,0]);
    }
        
}

function updateTable(game){
    if(game[0]==0&&game[1]==1){
        document.querySelector('#losses').innerHTML = Number(document.querySelector('#losses').innerHTML)+1;
    }
    else if(game[0]==1&&game[1]==1){
        document.querySelector('#draws').innerHTML = Number(document.querySelector('#draws').innerHTML)+1;
    }
    else if(game[0]==1&&game[1]==0){
        document.querySelector('#wins').innerHTML = Number(document.querySelector('#wins').innerHTML)+1;
    }

}