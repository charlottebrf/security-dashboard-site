
<script>
export default {
props: [
    'title',
    'description',
    'url'
]
}
</script>

<template>
<div class="card">
  <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
    <p class="url">{{ url }}</p>
</div>
</template>

<style>
.title {
  color: red;
  font-weight: bold;
}
.description {
  color: blue;
  font-weight: bold;
}
.url {
  color: orange;
  font-weight: bold;
}
.card {
    outline: solid;
    flex-grow: 2;
}
</style>
