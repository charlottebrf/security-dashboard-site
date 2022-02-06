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
        return { title: article.title, description: article.description, url: article.url }
    })
    return changed;
    },
    goOverStuffOther(articles) {
        let changed = []
        for (const article of articles.data.vulns) {
            changed.push({ title: article.title, description: article.id, url: `https://security.snyk.io/vuln/${article.id}`})
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
<div class="wrapper">
<Card
    v-for="article in devToArticles"
    :key="article.title" 
    :title="article.title"
    :description="article.description"
    :url="article.url"
>
</Card>
<Card
    v-for="article in snykArticles"
    :key="article.description" 
    :title="article.title"
    :description="article.description"
    :url="article.url"
>
</Card>
</div>
</template>

<style>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    grid-auto-rows: auto;
}
</style>

