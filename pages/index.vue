<script setup>
const { data } = useFetch('https://dev.to/api/articles?per_page=5&tag=security', {
    headers: useRequestHeaders(['cookie'])
})
</script>

<template>
<div>
<p>Here is the response from devTo: {{ data }}</p>
</div>
</template>

