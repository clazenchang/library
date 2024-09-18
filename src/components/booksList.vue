<script setup>
import books from '@/assets/books.json'
//console.log(books)
const bookList = books;
console.log(bookList[1].book)
</script>


<template>
    This is booksList
    <img :src="bookList[1].picURL">
</template>