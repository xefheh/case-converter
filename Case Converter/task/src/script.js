let text = document.querySelector("textarea");


function setUpper() {
    text.value= text.value.toUpperCase();
}

function setLower() {
    text.value = text.value.toLowerCase();
}

function setProper() {
    let words = text.value.split(" ");
    for (let word in words) {
        words[word] = words[word].toLowerCase();
        let letters = words[word].split("");
        letters[0] = letters[0].toUpperCase();
        words[word] = letters.join('');
    }
    text.value = words.join(" ");
}

function firstLetterUpper(theString) {
    let newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return newString;
}

function setSentence() {
    let theString = text.value;
    let newString = firstLetterUpper(theString);
    text.value = newString;
}

function download(filename) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    element.setAttribute('download', filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}