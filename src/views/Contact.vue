<template>
  <div class="wrapper">
    <section>
      <h2>Contact</h2>
      <div class="flex-container">
        <div class="container">
          <form
            action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdIGIF63HeFdSWaR65WqL0Xl0uy4UbT_rvl4EsXpUFqQI-iYw/formResponse"
            target="_blank"
            method="POST"
          >
            <p>
              お名前&nbsp;<span>必須</span><br />
              <input type="text" name="entry.1141043500" required />
            </p>
            <p>
              メールアドレス&nbsp;<span>必須</span><br />
              <input type="text" name="entry.765143696" required />
            </p>
            <p>
              電話番号<br />
              <input type="text" name="entry.1041977950" />
            </p>
            <p>
              メッセージ&nbsp;<span>必須</span><br />
              <textarea
                name="entry.1426701467"
                cols="30"
                rows="5"
                required
              ></textarea>
            </p>
            <p><input type="submit" /></p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  text-align: left;
}

span {
  padding: 0 0.5rem;
  background-color: #ef866b;
  color: #fff;
}
</style>

<script>
export default {
  name: "Contact",
  components: {}
};
</script>
