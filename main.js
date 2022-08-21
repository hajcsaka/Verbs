
window.onload = function () {
    document.getElementById("input2").focus();
};


const verbs = [
    {
        verb: "go",
        spast: "went",
        ppart: "gone",
        meaning: "menni"

    },
    {
        verb: "break",
        spast: "broke",
        ppart: "broken",
        meaning: "megszakítani, törni"
    },
    {
        verb: "do",
        spast: "did",
        ppart: "done",
        meaning: "tenni"
    },
    {
        verb: "sell",
        spast: "sold",
        ppart: "sold",
        meaning: "eladni"
    },
    {
        verb: "begin",
        spast: "began",
        ppart: "begun",
        meaning: "kezdeni"

    },
    {
        verb: " build",
        spast: "built",
        ppart: "built",
        meaning: "építeni"

    },
    {
        verb: "bite",
        spast: "bit",
        ppart: "bitten",
        meaning: "harapni"

    },

];
//Filter the array to only include users who are on team: red

function random(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min) + min)
}

arrayLength1 = verbs.length;
const number = random(0, arrayLength1);
console.log('A véletlen szám : ' + number);



console.log('A verbs tömb hossza :' + arrayLength1)
const filterArray = verbs.filter(user => {
    return user === verbs[number];
})
console.log(filterArray[0].verb);
console.log("spast =" + (filterArray[0].spast));
console.log("ppart =" + (filterArray[0].ppart));
console.log(filterArray[0].meaning);


function writeIn() {
    document.getElementById("input1").value = filterArray[0].verb;
};
writeIn();

//  A 2. inputmezőn Enter akkor fusson le a controll(); 
let input2Text;

document.querySelector('#input2').addEventListener('keypress', function (e) {
    if (input2.value.length >= 1 && e.key === 'Enter') {
        input2Text =  document.getElementById("input2").value ;
        console.log('input2 text : ' + input2Text);
        controll();
        console.log('elkaptam');
    } input2Text = document.getElementById("input2").value;
     console.log('rogoton a kiirás után input 2 text : = ' +input2Text);
}
)
// 2. inputmező elleörzése
function controll() {
    if (input2Text === (filterArray[0].spast)) {
        document.getElementById('input2').style.backgroundColor = "lightgreen";
        document.getElementById("input3").focus();
        console.log('megeggyezik')
    } else {
        document.getElementById('input2').style.backgroundColor = "red";
        document.getElementById("input3").focus();
        console.log('nem jó amit beirtál')
    }
};

//  A 3. inputmezőt vizsgálom és ha jó zöld ha nem akkor piros 
let input3Text;
document.querySelector('#input3').addEventListener('keypress', function (e) {
    if (input3.value.length >= 1 && e.key === 'Enter') {
        input3Text = document.getElementById("input3").value;
        console.log('input3 text : ' + input3Text);
        controll2();
        reload();
        console.log('elkaptam');
    }
}
)

function controll2() {
    if (input3Text === (filterArray[0].ppart)) {
        document.getElementById('input3').style.backgroundColor = "lightgreen";
        rewriting();
        console.log('megeggyezik')
    } else {
        document.getElementById('input3').style.backgroundColor = "red";
        rewriting();
        console.log('nem jó amit beirtál')
    }
};
function rewriting() {
    document.getElementById("input1").value = (filterArray[0].verb + ' = '
        + filterArray[0].meaning);
}

function reload() {
    setTimeout(function () {
        window.location.reload();
    }, 3000);
}

 

function ClickFunction(x) {
    console.log("input2 text = " + input2Text);
    console.log("spast mostani erteke = " + (filterArray[0].spast));
    controll();
}

 