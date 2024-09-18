<script setup>
import books from '@/assets/books.json'
//console.log(books)
const bookList = books;
console.log(bookList[1].book)
</script>


<template>
    This is booksList
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.books.com.tw/img/001/025/82/0010258296.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    <a class="btn btn-success">按鈕</a>
    <img :src="bookList[1].picURL">
</template>