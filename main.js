// main.js
import books from './books.js';
//______________________________________________


//1. Hur många böcker finns det i affären?

let antal = books.length

console.log('Fråga 1: ');
console.log('Det finns ' + (antal +1) + ' böcker i butiken');


// // 2. Skriv ut alla böcker i listan

console.log(" ");
console.log ('Fråga 2: Lista med böcker:');

books.forEach ((book, index) => {
console.log (`${index + 1}: ${book.title} av ${book.author}`);
});

// 3. Namn + pris + Fantasy
console.log(" ");
console.log("Fråga 3: ");
	console.log('Alla böcker i kategorin Fantasy:');
	books.forEach((book, index) => {

	if (book.genre === 'Fantasy') {
	console.log(`${book.title} - ${book.price}`);

		}

	});


// 4. Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.
console.log(" ");
console.log('Fråga 4: Här kommer namn och genre');
books.forEach ((book, index) => {

	if (book.genre === 'Mystery' || book.genre === 'Dystopian' || books.genre === 'Classic'){
		console.log(book.title + ' - ' + book.genre);
}

});




// 5. Skriv ut namn och pris för alla böcker som kostar över $10.

console.log(" ");
console.log('Fråga 5: Här kommer namn & pris på alla böcker över $10');
books.forEach ((book, index) => {

	if (book.price >= 10){
		console.log(book.price, book.title);
}
});


// 6. Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)

console.log(" ");
console.log('Fråga 6: ');
let summa = 0;
books.forEach ((book, index) => {

summa += book.price;

});

console.log ('Totalen för alla böcker sammanlagt blir $' +  summa);


//// 7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?


let summa1 = 0;
let summa2 = 0;

console.log(" ");
console.log('Fråga 7: ');
function totalSumma(books){
books.forEach ((book, index) => {

if (book.genre === 'Dystopian')  {
	summa1 += book.price
}

else if (book.genre === 'Mystery') {

	summa2 += book.price
};

});

if (summa1 >= summa2) {
	console.log('Dystopian är värt:' + summa1);
}

else{
	console.log('Mystery är värt: $' + summa2);
}
}

totalSumma(books)



// . 8 Skriv ut namnen på alla böcker i bokstavsordning.

console.log(" ");
console.log('Fråga 8: ');
	const list = []

	books.sort((a, b) => a.title.localeCompare(b.title));


	books.forEach((book, index) => {
    list.push(book.title);
});

console.log('Här kommmer alla böcker i bokstavsordning: ');
console.log(list);


// 9 Vilken bok finns det en dubblett av?

const titles = new Set();
console.log(" ");
console.log('Fråga 9: ');

books.forEach ((book) => {

	if (titles.has(book.title)){
		console.log(`Detta är en dubblet: ${book.title}`);
	}
	titles.add(book.title)
})

if (titles.size === 0){

		console.log('Det finns inga dubletter');
	}


// 10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.

console.log(" ");
console.log('Fråga 10: ');
const dubbelNamn = books

.filter((books) => {
const namnDel = books.author.split(' ')
return namnDel.length > 2 && !namnDel.some(namn => namn.includes('.'))

})
	.map((books) => books.author)
console.log('Här är författare med mer än två ord och utan punkter: ' + dubbelNamn)


// 11. Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.


function SortNSplit(books) {
	books.sort((a, b) => {

	let lastNameA = a.author.split(' ').pop()
	let lastNameB = b.author.split(' ').pop()

	if (lastNameA < lastNameB) {
		return -1;
	}

	if (lastNameA > lastNameB) {
		return 1;
	}

	return 0;
})

	books.forEach(book => console.log(book.author))
}
console.log(" ");
console.log('Fråga 11:');
console.log('Här kommer alla böcker i sorterat efter efternamn: ');
SortNSplit (books)



//// 12. Om böker innehåller inte innehåller "The"
console.log(" ");
console.log('Fråga 12: Här kommer alla böcker som inte innehåller "The": ');

books.forEach ((book, index) => {

	if (!book.title.includes ('The')){
		console.log(book.title);
	}

});


//// 13. Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.


books.sort((a, b) => a.title.length - b.title.length);
console.log(" ");
console.log('Fråga 13: Här kommer böckerna i sorterade efter längd i stigande ordning: ');
books.forEach(book => console.log(book.title));


// 14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.

function addBook(list, title, author, genre, price) {

    let newBook = {
        id: list,
        title: title,
        author: author,
        genre: genre,
        price: price
    };

    books.push(newBook);
}

addBook(26, 'Atomic Habits', 'James Clear', 'Psychology', 399);
console.log(" ");
console.log('Fråga 14: Här kommer en function som göra så att man kan lägga in en ny bok i listan och en utrskrift som visar att boken Atomic Habits har lagts till på plats 26');
console.log(books);