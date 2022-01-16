<script>
import Card from '../components/Card.vue'
export default defineComponent({
  async setup() {
    const [{ data: devTo}, { data: snyk }] = await Promise.all([
      useFetch(`https://dev.to/api/articles?per_page=5&tag=security`),
       useFetch(`https://snyk.io/disclosed-vulnerabilities/data`, { method: 'POST', headers: {'x-requested-with': 'XMLHttpRequest' }}),
    ])
    return {
      devTo,
      snyk
    }
  }
})
</script>

<template>
<div>
<Card/>
<p><b>Here is the response from devTo:</b> {{ devTo }}</p>
<br>
<p> ************************************************</p>
<p><b>Here is the response from Snyk Vulns:</b> {{ snyk }} </p>
</div>
</template>

