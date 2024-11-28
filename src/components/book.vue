<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router';

var book = {}
const route = useRoute();
var isLoading = ref(true)

onMounted(async () => {
  try {
    await fetch('https://raw.githubusercontent.com/clazenchang/library/refs/heads/main/src/assets/books_bk.json')
      .then(res => res.json())
      .then(res => {
        book = JSON.parse(JSON.stringify(res[route.params.id]));
        isLoading.value = false
      })
  }
  catch (error) {
    console.log("Error..", error)
  } finally { }
}
)

</script>


<template>
  <div v-if="!isLoading">
    <div class="container text-center mt-3">
      <div class="row">
        <div class="col-md-5 border border-dark p-0">
          <img :src="`${book.picURL}`" class="m-2" style="max-width: 80%; max-height:320px">
        </div>
        <div class="col-md-7 border border-dark">
          <div class="d-flex flex-column">
            <div class="mt-2">
              <h4>{{ book.book }}</h4>
              <ul class="text-start" style="margin-top:10%">
                <li>作者: {{ book.author }}</li>
                <li>出版年: {{ book.year }}</li>
                <li>語言: {{ book.language }}</li>
              </ul>
            </div>

          </div>
        </div>
        <div class="border border-dark text-start">
          <hr>
          <h4>書籍簡介</h4>
          <p>{{ book.describe }}</p>
          <RouterLink to="/">
            <h5>← 回到目錄</h5>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
