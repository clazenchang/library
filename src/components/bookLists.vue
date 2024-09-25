<script setup>
import books from '@/assets/books.json'
import bookList from '@/components/bookList.vue'

var authorArr = [];
for (let book of books) {   // for...of loop iterate the object
  authorArr.push(book.author)
}

authorArr = authorArr.reduce((accu, curr) => {
  if (accu.includes(curr)) {
    return accu
  } else {
    accu.push(curr)
    return accu
  }
}, [])



// function filteredAuthors(){
//   var authors = 0
// }

</script>


<template>
  <div class="row">

    <div class="d-none d-md-flex col-md-2 mt-4">
      <div class="d-flex flex-column mb-3">
        <!-- <div class="p-2" v-for="aBook in books" :key="aBook.id">{{ aBook.author }}</div> -->
        <div class="p-2" v-for="author in authorArr">{{ author }}</div>

        <!-- <div class="p-2">Flex item 2</div>
        <div class="p-2">Flex item 3</div> -->
      </div>
    </div>

    <div class="col-10">
      <div class="container mt-4">
        <div class="row justify-content-around">

          <bookList v-for="aBook in books" :key="aBook.id" :book="aBook" />

        </div>
      </div>
    </div>

  </div>
</template>