<script setup>
import { computed, onMounted } from 'vue'
import { ref } from 'vue'
import books from '@/assets/books_bk.json'
import bookList from '@/components/bookList.vue'



var authorArr = [];


for (let book of books) {   // for...of loop iterate the Array
  authorArr.push(book.author)
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

const filteredAuthor = computed(() => {
  return checkedAuthors.value;
})

</script>


<template>
  <div class="row">

    <div class="d-none d-md-flex col-md-2 mt-4">
      <div class="d-flex flex-column mb-3">
        <!-- {{ filteredAuthor }} -->
        <div class="p-2" v-for="author in authorArr" :key="author">
          <input type="checkbox" class="me-2" v-model="checkedAuthors" :value="author">{{ author }}
        </div>

        <!-- <div class="p-2">Flex item 2</div>
        <div class="p-2">Flex item 3</div> -->
      </div>
    </div>

    <!-- books -->
    <div class="col-10">
      <div class="container mt-4">
        <div class="row justify-content-around">
          <bookList v-for="aBook in books" :key="aBook.id" :book="aBook" />
        </div>
      </div>
    </div>
  </div>
</template>