const AnswerLength = 5;
const Letters = document.querySelectorAll(".score_board");
const loading = document.querySelector(".loader");

function reloadfunc() {
    location.reload();

}
setTimeout(function () {
    
    document.getElementById('loader').style.display = 'none';
    
}, 3000);





async function init()
{
    let currentGuess = '';
    let CurrentRow = 0;

    const res = await fetch("https://words.dev-apis.com/word-of-the-day");
    const resObj = await res.json();
    const word = resObj.word.toUpperCase();
    console.log(word);
    setLoading(false);

    function addLetter(letter){
        if(currentGuess.length < AnswerLength){
            currentGuess += letter;
        }
        else{
            currentGuess = currentGuess.substring(0,currentGuess.length - 1) + letter;
        }
        Letters[currentGuess.length - 1].innerText = letter;
    }



    document.addEventListener('keydown',function HandleKeyPress(event){
        const ActionOnKeyPress = event.key;
        console.log(ActionOnKeyPress);

        if(action === 'Enter'){
            commit();
        }
        else if(action==='Backspace'){
            backspace();
        }
        else if(isLetter(action)){
            addLetter(action.toUpperCase())
        }
        else{
            console.log("DO Nothing!!");
        }
    })
}


function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading)
{
    loading.classList.toggle('hidden',!isLoading);
}

init();