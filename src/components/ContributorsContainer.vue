<template>
  <div class="contributorsContainer">
    <ContainerTitle
        title="贡献者们"
        title-eng="ALL OF CONTRIBUTORS">
            <span slot="desc-zh">
                我们的贡献者们
            </span>
            <span slot="desc-en">
                All of contributors.
            </span>
    </ContainerTitle>
    <carousel>
      <contributor-card></contributor-card>
      <contributor-card></contributor-card>
      <contributor-card></contributor-card>
      <contributor-card></contributor-card>
      <contributor-card></contributor-card>
    </carousel>
  </div>
</template>

<script>
import ContainerTitle from "@/components/subComponents/containerTitle";
import Carousel from "@/components/subComponents/carousel";
import ContributorCard from "@/components/subComponents/contributorCard";

export default {
  name: "ContributorsContainer",
  components: {ContributorCard, Carousel, ContainerTitle}
}
</script>

<style scoped>
.contributorsContainer {
  padding-top: 5rem;
  width: 1280px;
  margin: 0 auto;
}

</style>