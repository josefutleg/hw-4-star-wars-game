var addToCharSelect = $('.selectCharacter');
var kyloRen = "<img src='assets/images/kylo-ren.png' alt='kylo ren' data-hp=100 data-attack=100>";
var rey = "<img src='assets/images/rey.png' alt='rey' data-hp=100 data-attack=100>";
var darthVader = "<img src='assets/images/darth-vader.png' alt='darth vader' data-hp=100 data-attack=100>";
var lukeSkywalker = "<img src='assets/images/luke-skywalker.jpg' alt='luke skywalker' data-hp=100 data-attack=100>";
var userCharacter = '';
var enemyCharacter = '';
var enemySelection = $('.selectOpponent');
var userHP;


addToCharSelect.append(kyloRen);
addToCharSelect.append(rey);
addToCharSelect.append(darthVader);
addToCharSelect.append(lukeSkywalker);

$('.selectCharacter').on('click','img', function(){
    var image = $(this);
    image.remove();
    // $('.character').removeClass();

    if (userCharacter == ''){
    var addToUserChar = $('.chosenCharacter')
    var changeWord = $('#changeWord');
        userCharacter = image;
        addToUserChar.append(image); 
        changeWord.text('CHOOSE YOUR OPPONENT');

    }    
    else if (userCharacter != ''){
        image.remove();
        // addToCharSelect.removeClass('character');
    var addToEnemyChar = $('.currentOpponent')
        enemyCharacter = image;
        addToEnemyChar.append(image);
    }
    if (userCharacter != '' && enemyCharacter != ''){
    $('.selectCharacter').removeClass().addClass('enemies');
    $('#changeWord').text('REMAINING OPPONENTS')
    }

});

$('.chosenCharacter').on('click','img', function(){
    var image = $(this);
    alert(`your character ${$(this).data('hp')}`);
});

$(document).on('click','button', function(){
    var button = $(this);

    if (userCharacter != '' && enemyCharacter != ''){
        alert(`attack`);
        userHp = userCharacter.attr('data-hp')
    }else{
        alert('choose your character and opponent');
    }
    
});