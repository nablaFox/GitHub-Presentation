<script setup>
import LinePageSection from './LinePageSection.vue'
import Card from './Card.vue'
</script>

<template>

  <LinePageSection
    class="introduction-section"
    icon="Briefcase"
    color="var(--color-scale-green-0)"
    firstGradient="linear-gradient(#56d364, #2ea043, #0d1117)"
    secondGradient="linear-gradient(#0d1117, #2ea043, #2ea043, #0d1117)"
    endingGradient="linear-gradient(#0d1117, #ea6045, #ffa28b)"
    headline="In a nutshell"
    starsType="1"
    branches="lines-3"
    fun-fact="Errors exist"
  >
    <template #head>
      <span>Github is based on repositories, similar to folders. </span>
      They're shared between users and can be public or private.
    </template>

    <template #center>
      <img src="../assets/images/profile-1.png" class="border border-grey rounded-lg w-full">
    </template>

    <template #prose>
      Each repository contains all of the project files, and stores each file's <span>revision history</span>. Repositories can have multiple collaborators. Think them like virtual libraries where the developers are librarians
    </template>

    <template #fun-fact>
      But with its system Github <br> is the key, let's see
    </template>

    <template #body>
      <Card>
        <template #first>
          Imagine that you and your friends are working on a project together. Maybe you're building a fort or creating a painting. You all have your own ideas and things you want to contribute. But, it can be hard to keep track of everyone's ideas and make sure everything is organized. That's where GitHub comes in. 
        </template>

        <template #second>
          <img src="../assets/images/illu-ghas-list.png" class="rounded-lg">
        </template>
      </Card>

      <div class="flex gap-8 mt-8">
        <Card class="w-1/2" vertical single>
          <template #first>
            It's like a big digital playground where people can work on projects together. You can create your own project and add other people as <span>collaborators</span>. Then, you can all work on the project at the same time, but in different "branches." Think of these branches like different versions of your project. You can try out different ideas in different branches without messing up the main project.
          </template>
        </Card>

        <Card class="w-1/2" vertical single>
          <template #first>
            When you have something you want to add or change, you create a <span>pull request</span> to the main project. This lets the other collaborators know that you have something new to contribute. They can review it and give feedback. If they like your changes, they can <span>merge</span> your branch with the main project. The GitHub community is made up of all the people who use GitHub to work on projects together. You can find lots of different projects in the community, from software development to art projects. 
          </template>
        </Card>
      </div>
    </template>
  </LinePageSection>

</template>