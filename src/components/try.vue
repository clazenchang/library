<script setup>
import { onMounted, ref } from 'vue';

var books = ref(null)
var AuthorArr = ref([])

onMounted(async () => {
  try {
    // await fetch('http://localhost:8001/books') 
    await fetch('https://raw.githubusercontent.com/clazenchang/library/refs/heads/main/src/assets/books_bk.json')
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        books.value = res;
        for (let book of books.value) {   // all authors of books
          AuthorArr.value.push(book.author)
        }

        // remove the duplicate author name
        AuthorArr.value = AuthorArr.value.reduce((accu, curr) => {
          if (accu.includes(curr)) {
            return accu
          } else {
            accu.push(curr)
            return accu
          }
        }, [])
        // console.log(AuthorArr.value)
      })

  } catch (error) {
    console.log("Error..", error)
  } finally { }
})


</script>

<template>
  try <br/>
  <!-- {{ AuthorArr }} -->
</template>