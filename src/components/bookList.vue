<script setup>
import { RouterLink } from 'vue-router';

// const bookList = books;
const props = defineProps({
  book: Object
})

// console.log(bookList[1].book)

</script>



<template>

  <div class="card mb-3 col-12 col-md-5">
    <div class="row g-0">
      <div class="col-md-4">
        <RouterLink :to="`/book/` + book.id"><img :src="book.picURL" class="img-fluid rounded-start" alt="..."></RouterLink>
      </div>
      <div class="col-md-8">
        <div class="card-body position-relative">
          <RouterLink :to="`/book/` + book.id" class="card-title">{{ book.book }}</RouterLink><p class="mb-0">作者:{{ book.author }}</p>
          <p class="mb-0">出版年:{{ book.year }}</p>
          <p class="mb-1">語言別:{{ book.language }}</p>
          <!-- <p class="card-text">This is a wider card with supporting text below as a natural...</p> -->
          <p class="card-text">{{ book.describe.substring(0,24) + "..." }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <img :src="bookList[1].picURL"> -->
</template>

<style></style>