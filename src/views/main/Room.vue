<template>
  <div class="container-fluid d-flex">
    <!-- Left Side -->
    <section class="left-side d-flex flex-column">
      <!-- Title -->
      <div class="wrap-title d-flex w-100 justify-content-between">
        <h1 class="title">Telegram</h1>
        <img src="../../assets/menu.svg" alt="menu">
      </div>
      <!-- Search -->
      <div class="wrap-search d-flex justify-content-between">
        <div class="search d-flex ">
          <img src="../../assets/search.svg" alt="search">
          <input type="text" placeholder="Type your message..." v-model="search" @keypress.enter="handleSearch">
        </div>
        <img src="../../assets/plus.svg" alt="plus">
      </div>
      <!-- All, Important, Unread -->
      <div class="wrap-tab d-flex justify-content-between align-items-center">
        <div class="tab-inactive">All</div>
        <div class="tab-active">Important</div>
        <div class="tab-inactive">Unread</div>
      </div>
      <!-- Chat List (All Chat) -->
      <div class="wrap-chat w-100 d-flex flex-column ">
        <!-- Per Person -->
        <div class="chat-person w-100 d-flex" v-for="(item, index) in array" :key="index">
          <!-- Image -->
          <div class="wrap-img">
            <img src="../../assets/2.png" alt="profile">
          </div>
          <!-- Name and Last Message -->
          <div class="wrap-name-message d-flex flex-column justify-content-between ">
            <div class="name">Theresa Webb</div>
            <div class="last-message">Why did you do that?</div>
          </div>
          <!-- Time and Count message -->
          <div class="wrap-time-count d-flex flex-column justify-content-between flex-grow-1 align-items-end">
            <div class="time">15:20</div>
            <div class="count d-flex justify-content-center align-items-center">999+</div>
          </div>
        </div>
        <!-- End Per Person -->
      </div>
    </section>
    <!-- Right Side -->
    <section class="right-side">
      <div class="not-select d-flex justify-content-center align-items-center h-100">Please select a chat to start messaging</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Room',
  data () {
    return {
      search: '',
      tab: '',
      array: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    handleSearch () {
      const search = this.search
      console.log('handleSearch ' + search)
      this.search = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.container-fluid {
  height: 100vh;
  padding: 0;
}

// Left Side

/* width */
::-webkit-scrollbar {
  width: 5px;
  transition: .3s;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
  transition: .3s;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(126, 152, 223, 0.3);
  transition: .3s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(126, 152, 223, 0.5);
  transition: .3s;
}

.wrap-title,
.wrap-search,
.wrap-tab {
  padding: 0 30px;
}

.left-side {
  width: 350px;
  height: 100vh;
  padding: 40px 0 0 0;

}

// Title
.wrap-title  {
  margin: 0 0 50px 0;
  img {
    cursor: pointer;
  }
}

.title {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7E98DF;
  cursor: pointer;
}

// Search
.wrap-search {
  margin: 0 0 25px 0;
}

.wrap-search img {
  cursor: pointer;

}

.search {
  width: 250px;
  height: 60px;
  background: #FAFAFA;
  border-radius: 15px;
  img {
    margin: 0 10px 0 20px;
  }
  input {
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0);
  }
  input::placeholder {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #848484;
  }
}

// Tab All, Important, Unread
.wrap-tab {
  height: 50px;
  margin: 0 0 35px 0;
}

.tab-inactive {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #232323;
  cursor: pointer;
}

.tab-active {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #FFFFFF;
  width: 133px;
  height: 100%;
  background: #7E98DF;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

// Chat List
.wrap-chat {
  overflow: auto;
  padding: 0 27px 0 30px;
}

.chat-person {
  cursor: pointer;
  margin: 0 0 30px 0;
}

.chat-person:hover {
  opacity: .8;
}

.wrap-img {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background-color: #dadada;
  overflow: hidden;
  margin: 0 15px 0 0;
  img {
    width: 100%;
  }
}

.wrap-name-message, .wrap-time-count {
  padding: 7px 0;
}

.name {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.165px;
  color: #232323;
}

.last-message {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7E98DF;
}

.time {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #848484;
}

.count {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #FFFFFF;
  min-width: 20px;
  height: 20px;
  background: #7E98DF;
  border-radius: 30px;
  padding: 0 7px;
}

//////////////////////////////////////////////////

// Right Side
.right-side {
  width: 1016px;
  height: 100vh;
  background: #FAFAFA;
}

.not-select {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #848484;
}

</style>
