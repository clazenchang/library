<script setup>
import { computed, onMounted, watch } from 'vue'
import { ref } from 'vue'
import books from '@/assets/books_bk.json'
import bookList from '@/components/bookList.vue'

var authorArr = [];


for (let book of books) {   // for...of loop iterate the Array
  authorArr.push(book.author)   // all authors of books
}

authorArr = authorArr.reduce((accu, curr) => {  // remove the duplicate author name
  if (accu.includes(curr)) {
    return accu
  } else {
    accu.push(curr)
    return accu
  }
}, [])

const checkedAuthors = ref([])

function selectAllAuthor() {
  checkedAuthors.value = authorArr
}
selectAllAuthor();   // default select all author

function clearSelect() {
  checkedAuthors.value = []
}

var filteredBooks = ref(books)


watch(checkedAuthors, filtBookByAuthor)   // filt book by author

function filtBookByAuthor() {
  filteredBooks.value = []
  if (checkedAuthors.value.length > 0) {
    for (let anAuthor of checkedAuthors.value)
      for (let book of books) {
        if (book.author == anAuthor) {
          filteredBooks.value.push(book)
        }
      }
  }
  // console.log(filteredBooks.value)
}




</script>


<template>
  <div class="row">
    <div class="d-none d-md-flex col-md-2 mt-4">
      <!-- author list -->
      <div class="d-flex flex-column mb-3">
        {{ checkedAuthors }}
        <div class="p-2" v-for="author in authorArr" :key="author">
          <input type="checkbox" class="me-2" v-model="checkedAuthors" :value="author" checked>{{ author }}
        </div>
        <div class="row">
          <button class="col-5 ms-3 mb-1 btn btn-success" @click="selectAllAuthor">全選</button>
          <button class="col-5 ms-2 mb-1 btn btn-success" @click="clearSelect">清空</button>
        </div>

        <!-- <div class="p-2">Flex item 2</div>
        <div class="p-2">Flex item 3</div> -->
      </div>
    </div>

    <!-- show books -->
    <div class="col-10">
      <div class="container mt-4">
        <div class="row justify-content-around">
          <bookList v-for="aBook in filteredBooks" :key="aBook.id" :book="aBook" />
        </div>
      </div>
    </div>
  </div>
</template>