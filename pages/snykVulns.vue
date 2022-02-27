<script>
export default defineComponent({
  async setup() {   
    const { data: snykArticles } = await useFetch(`https://snyk.io/disclosed-vulnerabilities/data`, { method: 'POST', headers: {'x-requested-with': 'XMLHttpRequest' }});
    return { snykArticles }
  },
  methods: {
    goOverStuffOther(articles) {
        let changed = []
        for (const article of articles.data.vulns) {
            changed.push({ title: article.title, description: article.id, url: `https://security.snyk.io/vuln/${article.id}`})
        }
    return changed;
    }
},
created() {
    this.snykArticles = this.goOverStuffOther(this.snykArticles)
},
})
</script>

<template>
<div class="wrapper">
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
    display: flex; /* or inline-flex */
    row-gap: 10px;
    column-gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>

