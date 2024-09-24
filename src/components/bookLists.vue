<script setup>
import books from '@/assets/books.json'
import bookList from '@/components/bookList.vue'
</script>


<template>
  <div class="row">
    <div class="d-none d-md-flex col-md-2 mt-4">
      some content
    </div>

    <div class="col-10">
      <div class="container mt-4">
        <div class="row justify-content-around">

          <bookList v-for="book in books" :key="book.id" :book="book" />
          <!-- <div class="card mb-3 col-12 col-md-5">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="bookList[0].picURL" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ bookList[0].book }}</h5>
                  <p class="mb-0">作者:{{ bookList[0].author }}</p>
                  <p class="mb-0">出版年:{{ bookList[0].year }}</p>
                  <p class="mb-1">語言別:{{ bookList[0].language }}</p>
                  <p class="card-text">This is a wider card with supporting text below as a natural...</p>
                </div>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>