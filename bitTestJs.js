//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('');
console.log('-1-');
console.log('');

const a = 5,
    b = 7;

if (a > b) {
    console.log(a);
} else if (b === a) {
    console.log(`${a} = ${b}`);
} else {
    console.log(b);
}


//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('');
console.log('-2-');
console.log('');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('');
console.log('-3-');
console.log('');

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue
    } console.log(i);
}


//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('');
console.log('-4-');
console.log('');

for (let i = 1; i <= 5; i++) {
    console.log(Math.round(Math.random(1, 10) * 10));
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('');
console.log('-5-');
console.log('');

let i = 1;

while (i <= 100) {

    let number = Math.round(Math.random(1, 10) * 10);
    console.log(number);
    i++;

    if (number === 5) {
        break
    }
};


//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('');
console.log('-6-');
console.log('');

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const array = [],
    length = 25;

let largest = 0;

for (i = 0; i <= length; i++) {
    array.push(randomNumber(10, 30));
    if (array[i] > largest) {
        largest = array[i];
    };
}
console.log(`The array is [${array}] and the largest number is ${largest}`);


//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('');
console.log('-7-');
console.log('');

const letters = ['A', 'B', 'C', 'D']

const arrayOfLetters = [...Array(100)].map(() => letters[randomNumber(0, 3)])
console.log(arrayOfLetters)

const letterACount = arrayOfLetters.filter(x => x === 'A').length;
const letterBCount = arrayOfLetters.filter(x => x === 'B').length;
const letterCCount = arrayOfLetters.filter(x => x === 'C').length;
const letterDCount = arrayOfLetters.filter(x => x === 'D').length;

console.log('A:', letterACount, 'B:', letterBCount, 'C:', letterCCount, 'D:', letterDCount);


//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log('');
console.log('-8 -');
console.log('');

function lygineSuma(a, b) {

    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b) % 2 === 0 ? a + b : "Suma nelyginė";
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return (a.length + b.length) % 2 === 0 ? a.length + b.length : "Suma nelyginė";
    } else {
        return "Abu kintamieji turi buti arba masyvai, arba skaiciai."
    }
}

console.log(lygineSuma(2, 2));
console.log(lygineSuma([2, 4, 6], 2));
console.log(lygineSuma([2, 4, 6], [1, 3, 5]));
console.log(lygineSuma(17, [1, 3, 5]));
console.log(lygineSuma('1', 2));


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//  skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log('');
console.log('-9-');
console.log('');

function pirminisSkaicius(number) {

    if (typeof number !== 'number') {
        return 'kintamasis turi buti skaicius';
    } else if (number < 2) {
        return 'Skaicius nera pirminis';
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'Skaicius nera pirminis';
        }
    }

    return 'Skaicius yra pirminis'
}

console.log(pirminisSkaicius(17));
console.log(pirminisSkaicius([11, 17, 19]))
console.log(pirminisSkaicius(39));
console.log(pirminisSkaicius('hello'));
console.log(pirminisSkaicius(5));
console.log(pirminisSkaicius('1'));
console.log(pirminisSkaicius(0))
console.log(pirminisSkaicius(100));

//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)
console.log('');
console.log('-10-');
console.log('');

const randomArr = [...Array(10)].map(() => randomNumber(0, 9))

const telefonoNumeris = arr => {
    const prekineDalis = arr.slice(0, 3).join('');
    const vidurineDalis = arr.slice(3, 6).join('');
    const galutineDalis = arr.slice(6).join('');

    return `(${prekineDalis}) ${vidurineDalis}-${galutineDalis}`;
}

console.log(telefonoNumeris(randomArr))









