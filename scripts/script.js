function diplayPrint(button){
    var textButton = button.value;
    var diplayDiv = document.getElementById('display');
    diplayDiv.textContent = "You chose " + textButton;
}