var addToCharSelect = $('.selectCharacter');
var characters = [
    {
//kylo
        type: 'img',
        name: 'kylo ren',
        src: 'assets/images/kylo-ren.png',
        health: 180,
        attack: 7,
    },
//rey
        {
        type: 'img',
        name: 'rey',
        src: 'assets/images/rey.png',
        health: 200,
        attack: 6,
    },
//darth
        {
        type: 'img',
        name: 'darth vader',
        src: 'assets/images/darth-vader.png',
        health: 300,
        attack: 5,
    },
    {
//luke
        type: 'img',
        name: 'luke skywalker',
        src: 'assets/images/luke-skywalker.jpg',
        health: 250,
        attack: 5,
    }

]

// debugger;
for (var c in characters){
    var response = characters[c]
    var charDiv = $('<div>').addClass('character')
    var docImg = $('<img>').attr('src', response.src).attr('alt',response.name).attr('data-hp', response.health).attr('data-attack', response.attack).attr('data-name', response.name);
    var docImgName = $('<span>').addClass('name').text(response.name);
    // var docAttack = $('<span>').addClass('attack').text(`atk: ${response.attack}`);
    var docHealth = $('<span>').addClass('health').text(`HP: ${response.health}`);
    charDiv.append(docImg);
    charDiv.append(docImgName);
    // charDiv.append(docAttack);
    charDiv.append(docHealth);

    addToCharSelect.prepend(charDiv);    
}

var userCharacter = '';
var enemyCharacter = '';
var enemySelection = $('.selectOpponent');
var userHP = '';
var enemyHP = '';
var userAttack = '';
var enemyAttack = '';

function characterSelection(){
    
}
//CHARACTER SELECTION FUNCTION
$('.selectCharacter').on('click','img', function(){
    var image = $(this);
    image.parent().remove();
//select user character
    if (userCharacter == ''){
    var addToUserChar = $('.chosenCharacter')
    var changeWord = $('#changeWord');
        userCharacter = image;
    var userDiv = $('<div>').addClass('userC');
    var name = $('<span>').addClass('name').text(userCharacter.attr('data-name'));
    var health = $('<span>').addClass('health').text(`HP: ${userCharacter.attr('data-hp')}`);
    // var attack = $('<span>').addClass('attack').text(userCharacter.attr('data-attack'));
        userDiv.append(userCharacter).append(name).append(health);       
        addToUserChar.prepend(userDiv);
        userHP = parseInt(userCharacter.attr('data-hp'));
        userAttack = parseInt(userCharacter.attr('data-attack'));
        changeWord.text('CHOOSE YOUR OPPONENT');
    }
//select enemy
    else if (userCharacter !== ''){
        image.remove();
    var addToEnemyChar = $('.currentOpponent')
        enemyCharacter = image;
    var enemyDiv = $('<div>').addClass('enemyC');
    var name = $('<span>').addClass('name').text(enemyCharacter.attr('data-name'));
    var health = $('<span>').addClass('health').text(`HP: ${enemyCharacter.attr('data-hp')}`);
    // var attack = $('<span>').addClass('attack').text(enemyCharacter.attr('data-attack'));
        enemyDiv.append(enemyCharacter).append(name).append(health);             
        addToEnemyChar.prepend(enemyDiv);
        enemyHP = parseInt(enemyCharacter.attr('data-hp'));
        enemyAttack = parseInt(enemyCharacter.attr('data-attack'));
    }

//prevent user to add enemies until current enemy is defeated
    if (userCharacter !== '' && enemyCharacter !== ''){
    $('.selectCharacter').removeClass().addClass('enemies');
    $('.enemies').prop('onclick',null).off('click');
    $('#changeWord').text('REMAINING OPPONENTS');
    return;
    }
});


// ATTACK FUNCTION
function battle(){
    if (userCharacter != '' && enemyCharacter != ''){
        var ua = parseInt(userCharacter.attr('data-attack'));
        var ea = parseInt(enemyCharacter.attr('data-attack'));
        userAttack = ua + userAttack;
        enemyHP = enemyHP - parseInt(userAttack);
        console.log(userAttack);
        userHP = userHP - parseInt(enemyAttack);
        enemyAttack = ea + enemyAttack;
        $('.enemyC .health').html(`HP: ${enemyHP}`);
        $('.userC .health').html(`HP: ${userHP}`);
    if (userHP <= 0){
        $('.userC').remove();
        userCharacter = '';
        userHP = '';
        userAttack= '';
    }
    if (enemyHP <= 0){
        $('.enemyC').remove();
        enemyCharacter = '';
        enemyHP = '';
        enemyAttack= '';
        // $('.enemies').removeClass().addClass('.selectCharacter');
    }
        
    }else{
        alert('choose your character and opponent');
    }
}
//attack button onclick function
$(document).on('click','button', function(){
    battle();
});

$(document).on('click', '.enemies img', function(){
    var image = $(this);

    if(userCharacter != '' && enemyCharacter != ''){
        return;
    }else{
        image.parent().remove();
        var addToEnemyChar = $('.currentOpponent')
            enemyCharacter = image;
        var enemyDiv = $('<div>').addClass('enemyC');
        var name = $('<span>').addClass('name').text(enemyCharacter.attr('data-name'));
        var health = $('<span>').addClass('health').text(`HP: ${enemyCharacter.attr('data-hp')}`);
            enemyDiv.append(enemyCharacter).append(name).append(health);             
            addToEnemyChar.prepend(enemyDiv);
            enemyHP = parseInt(enemyCharacter.attr('data-hp'));
            enemyAttack = parseInt(enemyCharacter.attr('data-attack'));
        }
    
})

