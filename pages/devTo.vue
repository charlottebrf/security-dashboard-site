<script>
export default defineComponent({
  async setup() {   
    const { data: devToArticles } = await useFetch(`https://dev.to/api/articles?per_page=5&tag=security`);
    return { devToArticles };
  },
  methods: {
    goOverStuff(articles) {
        const changed = articles.map((article) => {
        return { title: article.title, description: article.description, url: article.url }
    })
    return changed;
    },
},
created() {
    this.devToArticles = this.goOverStuff(this.devToArticles)
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

