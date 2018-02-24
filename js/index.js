let allAmounts = [];
let stuff = {};

document.getElementById('adding').addEventListener('click', () => {
    let name = document.getElementById('name').value;
    name = name.slice(0,1).toUpperCase() + name.slice(1)
    let amount = parseFloat(document.getElementById('amount').value);
    if(name === '' || amount === NaN){
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('amount').style.borderColor = 'red';
        return;
    }
    else{
        document.getElementById('name').style.borderColor = '#3192af';
        document.getElementById('amount').style.borderColor = '#3192af';
    }
    allAmounts.push(amount);
    stuff[name] = amount;
    let result = `<div class="cost"><span>${name}</span><span>${amount}</span></div>`;
    document.getElementsByClassName('list')[0].innerHTML += result;
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    let total = allAmounts.reduce((x,y) => {
        return +x+y;
    });
    document.getElementById('result').innerHTML = '$' + total;
});

document.getElementById('sort').addEventListener('click', function(){
    let sort = [];
    let sortStuff = {}

    for(key in stuff){
        sort.push(key);
    }
    sort.sort();
    
    for(let i=0;i<sort.length;i++){
        sortStuff[sort[i]] = stuff[sort[i]]
    }
    document.getElementsByClassName('list')[0].innerHTML = '';
    for(key in sortStuff){
        document.getElementsByClassName('list')[0].innerHTML += `<div class="cost"><span>${key}</span><span>${sortStuff[key]}</span></div>`;
    }
});