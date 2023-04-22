<script setup>
import LinePageSection from './LinePageSection.vue'
</script>

<template>
  <LinePageSection
    class="history-section"
    icon="Clock"
    color="var(--color-scale-blue-0)"
    firstGradient="linear-gradient(#abb4ff, #797ef9, #0d1117)"
    secondGradient="linear-gradient(#0d1117, #797ef9, #797ef9, #0d1117)"
    branches="lines-2"
    starsType="3"
    fun-fact="The octocat"
  >
    <template #head>
      <span>GitHub was founded in 2008 by Chris Wanstrath, Tom Preston-Werner, and PJ Hyett.</span> The trio wanted to create a platform that would make it easy for developers to share code and collaborate with one another.
    </template>

    <template #center>
      <img src="../assets/images/github-bg.webp" class="border border-grey rounded-lg w-full">
    </template>

    <template #prose>
      By 2011, the company had over a million users and was hosting millions of repositories. In 2018, GitHub was acquired by <span>Microsoft</span> for $7.5 billion, cementing its position as the leading platform for developers
    </template>

    <template #fun-fact>
      the github logo is a fusion of a <br> cat and an octopus
    </template>

    <template #body>

    </template>
  </LinePageSection>
</template>
