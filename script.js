//your JS code here. If required.
function findDomLevel() {
    var levelElement = document.getElementById('level');
    var domLevel = 0;
    while (levelElement) {
        domLevel++;
        levelElement = levelElement.parentElement;
    }
    alert('The level of the element is: ' + domLevel);
}


findDomLevel();
