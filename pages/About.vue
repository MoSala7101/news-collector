<template>
  <div class="about-container">
    <p class="title">NewsCollector</p>
    <p class="subtitle">
      NewsCollector is a simple web application that get latest news feeds from
      <a
        href="http://www.theguardian.com/"
        target="_blank"
      >The Guardian</a>
      and
      <a href="https://www.nytimes.com/" target="_blank">
        The New York Times.
        <br />
      </a>
      Developed by
      <a href="https://github.com/MoSala7101" target="_blank">Mohamed Salah</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about-container {
  width: 100vw;

    width: 80%;
    margin: 0 auto;
  margin-top: 80px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 50px;
    text-align: center;
  }
  .subtitle {
    color: #666;
    text-align: center;
  }

  a {
    color: rgb(252, 54, 54);
    &:hover {
      text-decoration: underline;
    }
  }

  .developer-container {
    margin-top: 20px;
  }
}

/* Tablet */
@media (max-width: 780px) {
  .about-container {
        align-items: flex-start;

    .title {
      font-size: 40px;
    }
    .subtitle{
        text-align: justify;
    }
  }
}


/* Mobile */
@media (max-width: 600px) {
  .about-container {
        align-items: flex-start;

    .title {
      font-size: 30px;
    }
    .subtitle{
        text-align: justify;
    }
  }
}
</style>