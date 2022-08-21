// ** Ez a program kikeresi a tönb elemeiből azt
//** */ a véleltlen számu indexel rendelkező elemet amit generáltunk -->

// function random(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

//   const number = random(0, 2)

// const array = ['egy', 'ketto', 'harom'];

// const filterArray = array.filter(String => String == array[number]);
// console.log('A keresett string', filterArray);

//--------------------------------------------------------------------
const verbs2 = [

    {
        go: ["went", 'gone'],

        brake: ['broke', 'broken'],

        do: ['did', 'done']
    }
]

const filterArray2 = verbs2.filter(user => {
    return user === verbs2[0];
})
console.log(filterArray);
//const filterArray = array.filter(String => String == array[0]);
//.log('A keresett szo :', filterArray);

//for (i = 0; i < array.length; i++) {

//   console.log(array[i]);


//--------------------------------------------------------------------- 
function random(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
 var arrayLength1 = verbs.length;
 console.log('A verbs tömb hossza :'+ arrayLength1)
const number = random(0, arrayLength1);
console.log('A véletlen szám : ',number);

const verbs = [
    {
        verb: "go",
        spast: "went",
        ppart: "gone",

    },
    {
        verb: "break",
        spast: "broke",
        ppart: "broken",
    },
    {
        verb: "do",
        spast: "did",
        ppart: "done",
    },
    {
        verb: "sell",
        spast: "sold",
        ppart: "sold",
    },

];
//Filter the array to only include users who are on team: red
 
const filterArray = verbs.filter(user => {
    return user === verbs[number];
})
console.log(filterArray[0].verb);
console.log(filterArray[0].spast);
console.log(filterArray[0].ppart);