const txtElement = ['Freelancer', 'web Developer', 'Graphic Designer'];
let count = 0;
let txtIndex = 0;
let currenTxt = '';
let words = '';

(function ngetik() {
    if(count == txtElement.length) {
        count = 0;
    }
    
    currentTxt = txtElement[count];

    words = currenTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    setTimeout(ngetik, 500);
})