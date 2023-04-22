<script setup>
import LinePageSection from './LinePageSection.vue'
import Card from './Card.vue'
</script>

<template>

  <LinePageSection
    class="community-section"
    icon="Partnership"
    color="var(--color-scale-coral-0)"
    firstGradient="linear-gradient(#ffd6cc, #ec6547, #ec6547, #0d1117)"
    secondGradient="linear-gradient(#0d1117, #ea6045, #ea6045, #0d1117)"
    endingGradient="linear-gradient(#0d1117, #797ef9, #abb4ff)"
    branches="lines-1"
    starsType="2"
    fun-fact="The numbers?"
  >
    <template #head>
      <span> The GitHub community is the place where developer </span> dreams come true through collaboration and shared innovation
    </template>

    <template #center>
      <img src="../assets/images/community.png" class="border border-grey rounded-lg w-full">
    </template>

    <template #prose>
      Anyone can participate in open-source projects. If you need help just open an <span>issue</span> and repository <span>maintainers</span> will help you. You can copy (fork) folders, and work on your own. It's software heaven
    </template>

    <template #fun-fact>
      GitHub has over 100 million <br> repositories and more than 65 million <br> developers on its platform
    </template>

    <template #body>
      <div class="flex gap-8 mt-8">
        <Card class="w-1/2 pb-0" vertical single>
          <template #first>
            Think of your computer or phone like a car. Sometimes, people might find problems with it. When that happens, the car company wants to know about it so they can fix it and make sure the car is the best it can be. That's kind of like how bugs and features work with your computer or phone.
          </template>

          <template #second>
            <img src="../assets/images/discussion.webp" class="mt-8">
          </template>
        </Card>

        <Card class="w-1/2 pb-0" vertical single>
          <template #first>
            When you use a computer program or app, you might find something that doesn't work quite right. Maybe when you click on a button, nothing happens, or maybe a picture looks funny on your screen. When you tell the company about these problems, they can work to fix them so the program or app works better for everyone.
            This can be done from every member of the Github community.
          </template>

          <template #second>
            <img src="../assets/images/illu-mobile.webp" class="mt-8">
          </template>
        </Card>
      </div>
    </template>
  </LinePageSection>

</template>

<style scoped>

</style>