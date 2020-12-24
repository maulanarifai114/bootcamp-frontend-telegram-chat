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
            <img src="../../assets/default.svg" alt="profile">
          </div>
          <!-- Name and Last Message -->
          <div class="wrap-name-message d-flex flex-column justify-content-between ">
            <div class="name">Theresa Webb</div>
            <div class="last-message">Why did you do that?</div>
          </div>
          <!-- Time and Count message -->
          <div class="wrap-time-count d-flex flex-column justify-content-between flex-grow-1 align-items-end">
            <!-- Time -->
            <div class="time">15:20</div>
            <!-- Count Message Unread -->
            <!-- <div class="count d-flex justify-content-center align-items-center">999+</div> -->
            <!-- Icon Send -->
            <img src="../../assets/send.svg" alt="unread">
            <!-- Icon Unread -->
            <!-- <img src="../../assets/unread.svg" alt="unread"> -->
            <!-- Icon Read -->
            <!-- <img src="../../assets/read.svg" alt="read"> -->
          </div>
        </div>
        <!-- End Per Person -->
      </div>
    </section>
    <!-- Right Side -->
    <section class="right-side">
      <!-- Unselected Chat -->
      <!-- <div class="not-select d-flex justify-content-center align-items-center h-100">Please select a chat to start messaging</div> -->
      <!-- Selected Chat -->
      <div class="room-chat w-100 h-100 d-flex flex-column">
        <!-- Header -->
        <div class="header-chat d-flex">
          <!-- Photo Profile -->
          <div class="wrap-img">
            <img src="../../assets/default.svg" alt="photo">
          </div>
          <!-- Name and status -->
          <div class="wrap-name-status d-flex flex-column justify-content-between ">
            <div class="name">Mother</div>
            <div class="status">Online</div>
          </div>
          <!-- Icon Menu -->
          <div class="wrap-menu d-flex flex-grow-1 justify-content-end align-items-center">
            <img src="../../assets/profile-menu.svg" alt="menu">
          </div>
        </div>
        <!-- Body -->
        <div class="body-chat flex-grow-1 ">
          <!-- Receiver -->
          <div class="receiver w-100 d-flex">
            <div class="wrap-img-chat d-flex align-items-end">
              <div class="img-chat">
                <img src="../../assets/default.svg" alt="">
              </div>
            </div>
            <div class="receiver-message">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente blanditiis rerum quaerat et natus, recusandae dolores ducimus tenetur possimus nihil perspiciatis dicta maxime veritatis nobis ullam, nostrum in fugit minima sequi error, reprehenderit porro dolor. Dolorem consequatur minus commodi rerum dolores rem voluptatum quia blanditiis? Doloremque odio, perspiciatis obcaecati vero vitae quae nemo natus repudiandae beatae repellendus sed quo neque laudantium, ex, impedit eos ad alias consequuntur maiores! Fugit quia deleniti doloribus temporibus necessitatibus quos. Pariatur necessitatibus, alias, ipsa vero quaerat laboriosam at quod praesentium magnam magni distinctio corporis! Unde consequatur accusamus rem blanditiis, a asperiores nesciunt repellendus neque hic.
            </div>
          </div>
          <!-- Sender -->
          <div class="sender w-100 d-flex justify-content-end">
            <div class="sender-message">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ipsam expedita commodi quaerat vitae, tempora ut optio soluta error veritatis officiis dolorem dolore repellat sit distinctio. Consectetur mollitia exercitationem impedit reiciendis neque enim. Expedita nulla voluptate, optio amet itaque in impedit sed quisquam harum. Possimus obcaecati optio neque modi facere rerum error ab minima voluptatum ullam cum cumque in architecto, quod tenetur eum eligendi quo aliquam. Deleniti odio quasi amet optio quos ratione repudiandae corporis cum ad exercitationem, dolore voluptates asperiores voluptas, nam inventore aliquam non. Temporibus in ipsam eveniet tenetur, numquam sapiente quam esse. Laboriosam quo quam nostrum officia.
            </div>
            <div class="wrap-img-chat">
              <div class="img-chat">
                <img src="../../assets/default.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <!-- Box Send Chat -->
        <div class="wrap-send-chat">
          <!-- Input Messages -->
          <div class="wrap-input w-100 h-100 d-flex align-items-center">
            <input type="text" placeholder="Type your message...">
            <img src="../../assets/plus.svg" alt="plus">
            <img src="../../assets/emoji.svg" alt="emoji">
            <img src="../../assets/image.svg" alt="image">
          </div>
        </div>
      </div>
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
  img:hover {
    opacity: .8;
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

.title:hover {
  opacity: .8;
}

// Search
.wrap-search {
  margin: 0 0 25px 0;
  img {
    cursor: pointer;
  }
  img:hover {
    opacity: .8;
  }
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
    padding: 0 15px 0 0;
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
  div:hover {
    opacity: .8;
  }
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
  width: fit-content;
  height: 100%;
  background: #7E98DF;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 18px;
}

// Chat List
.wrap-chat {
  overflow: auto;
  padding: 0 30px;
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

.last-message, .status {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
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
  border-left: 1px solid #E5E5E5;
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

.room-chat {
  top: 0;
}

// Header
.header-chat {
  padding: 28px 50px;
  background-color: white;
  cursor: pointer;
}

.wrap-name-status {
  padding: 9px 0;
}

// Body
.body-chat {
  padding: 25px 50px 0 50px;
  overflow: auto;
}

// Image Chat
.wrap-img-chat {
  .img-chat {
    width: 54px;
    height: 54px;
    border-radius: 20px;
    background-color: #dadada;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}

// Body Receiver
.receiver {
  // background-color: wheat;
  margin: 0 0 15px 0;
  .receiver-message {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 185.17%;
    letter-spacing: -0.165px;
    color: #FFFFFF;
    max-width: 70%;
    height: fit-content;
    background: #7E98DF;
    padding: 17px 30px;
    border-radius: 35px 35px 35px 10px;
    margin: 0 0 0 15px;
  }
}

// Body Sender
.sender {
  margin: 0 0 15px 0;
  .sender-message {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 185.17%;
    letter-spacing: -0.165px;
    color: #232323;
    padding: 17px 30px;
    background: #ffffff;
    border-radius: 35px 10px 35px 35px;
    max-width: 70%;
    height: fit-content;
    margin: 0 15px 0 0;
  }
}

// Send Chat
.wrap-send-chat {
  height: 120px;
  padding: 30px 50px;
  background-color: white;
  overflow: hidden;
}

.wrap-input {
  // padding: 0 30px;
  background: #FAFAFA;
  border-radius: 15px;
  input {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 176, 255, 0);
    padding: 0 20px 0 30px;
  }
  input::placeholder {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.165px;
    color: #848484;
  }
  img {
    margin: 0 20px 0 0;
  }
}

@media (min-width: 1367px) {

  //  Left Side
  .left-side {
    width: 350px!important;
  }

  .wrap-search {
    .search {
      img {
        margin: 0 10px 0 20px;
      }
    }
    img {
      margin: 0 0 0 20px;
    }
  }

  // Right Side
  .right-side {
    width: 100%;
  }
}

</style>
