<script setup>
import books from '@/assets/books.json'
//console.log(books)
const bookList = books;
console.log(bookList[1].book)
</script>


<!-- https://www.books.com.tw/img/001/025/82/0010258296.jpg -->
<template>

  <div class="container mt-4">
    <div class="row justify-content-around">

      <div class="card mb-3 col-12 col-md-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="bookList[1].picURL" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 col-12 col-md-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="bookList[1].picURL" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-3 col-12 col-md-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="bookList[1].picURL" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>





  <img :src="bookList[1].picURL">
</template>

<style>

</style>