<script setup>
import { computed, onMounted, shallowReadonly, watch, watchEffect } from 'vue'
import { ref } from 'vue'
import books from '@/assets/books_bk.json'
import bookList from '@/components/bookList.vue'

var authorArr = [], languageArr = [];

for (let book of books) {   // for...of loop iterate the Array
  authorArr.push(book.author)   // all authors' name of books
  languageArr.push(book.language)
}


authorArr = authorArr.reduce((accu, curr) => {  // remove the duplicate author name
  if (accu.includes(curr)) {  // make list of authors
    return accu
  } else {
    accu.push(curr)
    return accu
  }
}, [])

languageArr = languageArr.reduce((accu, curr) => {   // make list of language
  if (accu.includes(curr)) {
    return accu
  } else {
    accu.push(curr)
    return accu
  }
}, [])


const checkedAuthors = ref([]), checkedLanguages = ref([])
var filteredBooks, originOrder
filteredBooks = ref(JSON.parse(JSON.stringify(books)))  // init book list
originOrder = [...JSON.parse(JSON.stringify(filteredBooks.value))]   // init book order(haven't filted and sorted)


var sortMode = ref("origin")   // default sort mode


function selectAllAuthor() {
  checkedAuthors.value = authorArr
}

function clearSelectAuthor() {
  checkedAuthors.value = []
}

function selectAllLanguages() {
  checkedLanguages.value = languageArr
}

function clearSelectLanguages() {
  checkedLanguages.value = []
}

function sortModeSwitch(mode) {
  sortMode.value = mode
}


// collect conditions (author and language)
var conditions = computed(() => [checkedAuthors.value, checkedLanguages.value])

// another solution:
// var conditions = ref([[],[]])
// watch([checkedAuthors ,checkedLanguages], (input) => {
//   conditions.value[0] = input[0]
//   conditions.value[1] = input[1]
// })


watch(conditions, filtering)   // filter book by author

function filtering() {
  filteredBooks = ref(JSON.parse(JSON.stringify(books)))
  let filterByAuthor = []   // collected books by authors
  if (checkedAuthors.value.length > 0) {
    for (let anAuthor of checkedAuthors.value) {
      for (let book of filteredBooks.value) {
        if (book.author == anAuthor) {
          filterByAuthor.push(book)
        }
      }
    }
    filteredBooks.value = filterByAuthor    // book list (filted by author)
  }

  // then, collected books by languages
  if (checkedLanguages.value.length > 0) {
    var filterByLanguage = []
    filterByLanguage = filteredBooks.value     // inherit value from filterByAuthor
    filterByLanguage = filterByLanguage.filter((book) => checkedLanguages.value.includes(book.language))
    filteredBooks.value = filterByLanguage
  }

  originOrder = [...JSON.parse(JSON.stringify(filteredBooks.value))]  // haven't sorted(wouldn't watchEffect())
  sorting(sortMode.value, originOrder)  // pass originOrder to sort

}

watchEffect(() => {
  sorting(sortMode.value, originOrder);   // default and "if changing", this will exec
})

// sort
function sorting(sortMode, origin) {
  // console.log(origin, "foooooo")

  switch (sortMode) {
    case "origin":
      filteredBooks.value = [...origin];    // prevent change origin
      break;

    case "asc":
      filteredBooks.value.sort((a, b) => a.year - b.year)
      break;

    case "des":
      filteredBooks.value.sort((a, b) => b.year - a.year)
      break;

    default:
      break;
  }
}


</script>


<template>
  <div class="container w-100 m-auto p-0">
    <div class="row">
      <div class="d-none d-lg-flex col-md-2 mt-4 p-0 positioned">
        <!-- author list -->
        <div class="container">
          <div class="row">
            <div class="d-flex flex-column">
              <!-- {{ checkedAuthors }} -->
              <h5><span class="badge text-bg-secondary px-5">依作者</span></h5>
              <div class="p-2" v-for="author in authorArr" :key="author">
                <input type="checkbox" class="me-2" v-model="checkedAuthors" :value="author">{{ author }}
              </div>
              <div class="row">
                <button class="col-5 ms-3 mb-1 btn btn-success" @click="selectAllAuthor">全選</button>
                <button class="col-5 ms-2 mb-1 btn btn-success" @click="clearSelectAuthor">清空</button>
                <hr class="mt-3">
              </div>
              <!-- <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div> -->
            </div>
          </div>


          <!-- language list -->
          <div class="row mt-0">
            <h5><span class="badge text-bg-secondary px-5">依語言</span></h5>
            <div class="p-1" v-for="language in languageArr">
              <div class="col-12"><input type="checkbox" v-model="checkedLanguages" :value="language"
                  class="me-2 ms-3">{{ language }}</div>
            </div>
            <div class="col-12">
              <div class="row">
                <button class="col-5 ms-3 mb-1 btn btn-success" @click="selectAllLanguages">全選</button>
                <button class="col-5 ms-2 mb-1 btn btn-success" @click="clearSelectLanguages">清空</button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- show books -->

      <div class="col-10">
        <div class="my-3">
          <!-- <sortBar /> -->
          <div>
            <span style="position:relative; left:75%">This is sortBar</span>
          </div>
          <div style="position:absolute;height:100px ; width:150px; background-color: black; z-index:1;
    border-radius: 15px; color:white; padding: 5px;">
            <ul>
              <li><a href="#" :class="`${sortMode == 'origin' ? 'red' : ''}`" @click="sortModeSwitch('origin')">依選擇(預設)</a>
              </li>
              <li><a href="#" :class="`${sortMode == 'asc' ? 'red' : ''}`" @click="sortModeSwitch('asc')">出版年:升冪</a>
              </li>
              <li><a href="#" :class="`${sortMode == 'des' ? 'red' : ''}`" @click="sortModeSwitch('des')">出版年:降冪</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="container mt-4">
          <div class="row justify-content-around">
            <bookList v-for="aBook in filteredBooks" :key="aBook.id" :book="aBook" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.positioned {
  position: sticky;
  top: 0px;
  height: 100vh
}

li {
  list-style-type: none;
}

.red {
  color: red;
}
</style>