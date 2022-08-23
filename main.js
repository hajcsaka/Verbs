let filterArray = [];
let input2Text;


document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("input2").focus();
    console.log("A tömböm hossza jelenleg :" + verbs.length)
    function random(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min) + min)
    }

    arrayLength1 = verbs.length;
    const number = random(0, arrayLength1);
    console.log('A véletlen szám : ' + number);

    filterArray = verbs.filter(user => {
        return user === verbs[number];
    })
    console.log(filterArray[0].verb);
    console.log("spast =" + (filterArray[0].spast));
    console.log("ppart =" + (filterArray[0].ppart));
    console.log(filterArray[0].meaning);

    writeIn();

    //  A 2. inputmezőn Enter --> akkor fusson le a controll(); 
    

    document.querySelector('#input2').addEventListener('keypress', function (e) {
        if (input2.value.length > 0 && e.key === 'Enter') {
            input2Text = document.getElementById("input2").value;
            console.log('input2 text : ' + input2Text);
            controll();

        } input2Text = document.getElementById("input2").value;
        console.log('rogoton a kiirás után input 2 text : = ' + input2Text);
    }
    )
});



function writeIn() {
    document.getElementById("input1").value = filterArray[0].verb;
};
// 2. inputmező elleörzése
function controll() {
    if (input2Text === (filterArray[0].spast)) {
        document.getElementById('input2').style.backgroundColor = "lightgreen";
        document.getElementById("input3").focus();
        console.log('megeggyezik')
    } else {
        document.getElementById('input2').style.backgroundColor = "red";
        rewriting2()
        document.getElementById("input3").focus();
        console.log('nem jó amit beirtál')
    }
};

//  A 3. inputmezőt vizsgálom és ha jó zöld ha nem akkor piros 
let input3Text;
document.querySelector('#input3').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
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
        rewriting3()
        rewriting();
        console.log('nem jó amit beirtál')
    }
};
function rewriting() {
    document.getElementById("input1").value = (filterArray[0].verb + ' = '
        + filterArray[0].meaning);
}
function rewriting2() {
    document.getElementById("input2").value = ('A helyes válasz = '
        + filterArray[0].spast);
    document.getElementById('input2');
}

function rewriting3() {
    document.getElementById("input3").value = ('A helyes válasz = '
        + filterArray[0].ppart);
    document.getElementById('input3').style.color = "lightgreen";
}


function reload() {
    setTimeout(function () {
        window.location.reload();
    }, 2500);
}
// html - ben onkeyup="return forceLower(this);"
function forceLower(strInput) {
    strInput.value = strInput.value.toLowerCase();
}


function ClickFunction(x) {
    input2Text = document.getElementById("input2").value;
    console.log("input2 text = " + input2Text);
    console.log("spast mostani erteke = " + (filterArray[0].spast));
    controll();
}

function btnClick2() {
    document.getElementById("input2").value = ('jó válasz = '
        + filterArray[0].spast);
    document.getElementById('input2').style.backgroundColor = "lightgreen";

}

function btnClick() {
    input3Text = document.getElementById("input3").value;
    controll2();
    btnClick2();
    reload();
}