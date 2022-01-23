<script>
// import Card from '../components/Card.vue'
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
  },
  data() {
      return {
        devToArticles: [],
        snykArticles: [],
      }
  },
  methods: {
    goOverStuff(articles) {
        const changed = articles.map((article) => {
        return `Title: ${article.title}, Description: ${article.description}, Url: ${article.url }`
    })
    return changed;
    },
    goOverStuffOther(articles) {
        let changed = []
        for (const article of articles.data.vulns) {
            changed.push(`Title: ${article.title}, id: ${article.id}`)
        }
    return changed;
    }
},
created() {
    this.devToArticles = this.goOverStuff(this.devTo),
    this.snykArticles = this.goOverStuffOther(this.snyk)
},
})
</script>

<template>
<div>
<p><b>Here is the response from devTo:</b> {{ devToArticles }}</p>
<br>
<p> ************************************************</p>
<p><b>Here is the response from Snyk Vulns:</b> {{ snykArticles }} </p>
</div>
</template>

