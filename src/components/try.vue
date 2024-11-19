<script setup>
import { onMounted, ref } from 'vue';

var books = ref(null)
var AuthorArr = ref([])

onMounted(async () => {
  try {
    await fetch('http://localhost:8001/books')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        books.value = res;
        for (let book of res) {
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
        console.log(AuthorArr.value)
      })

  } catch (error) {
    console.log("Error..", error)
  } finally { }
})


</script>

<template>
  try
</template>