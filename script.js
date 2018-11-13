// CASE 1: (TypeA)
/*const book = {
    title: 'a',
    read() {
        console.log(this);
    }
};
book.read();// This references this Object itself.
// CASE 1: (TYPEB)
book.stop = function() {
    console.log(this);
}
book.stop();// This references this Object itself*/


/*
//CASE 2:(TypeA)

function readBook() {
    console.log(this);
}
readBook();// output : Window object

//CASE 2:(TYPE B): Constructor function
function Book(title) {
    this.title = title;// after the creation of new object because of the new keyword, title was added to it.
    console.log(this); // this object, Hence the output is object with property title: b
}
const b = new Book('b');// empty object {}

*/
/*
//CASE 2: (TYPE C)
const book = {
    title : 'a',
    tags: ['a','b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag); // here this references to the window object,because here we are inside a call back function, its not a method in the video object.
        });
    }
};
book.showTags();*/

const book = {
    title : 'a',
    tags: ['a','b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, this);
    }
};
book.showTags();
//We can have titles and tags written nextto each other:const book = {
    const book = {   
title : 'a',
    tags: ['a','b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
book.showTags();

// To keep in mind: Not all higher order functions in javascript can have this an argument.

