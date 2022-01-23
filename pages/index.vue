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
            changed.push({ title: article.title, description: article.id, url: `https://security.snyk.io/vuln/${article.url}`})
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
<h1>DevTo Articles</h1>
<Card
    v-for="article in devToArticles"
    :key="article.title" 
    :title="article.title"
    :description="article.description"
    :url="article.url"
>
</Card>

<h1>Snyk Articles</h1>
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

