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
            changed.push(`Title: ${article.title}, CVSSv3: ${article.CVSSv3}`)
        }
    return changed;
    }

  }
})
</script>

<template>
<div>
<Card/>
<p><b>Here is the response from devTo:</b> {{ goOverStuff(devTo) }}</p>
<br>
<p> ************************************************</p>
<p><b>Here is the response from Snyk Vulns:</b> {{ goOverStuffOther(snyk) }} </p>
</div>
</template>

