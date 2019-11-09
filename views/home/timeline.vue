
<template>
  <div class="box">
    <div class="header">
      <span class="span">
        <van-icon name="like" class="xihuan"/>
      </span>
      <input class="input" type="text" placeholder="试试搜索你的好友名字">
    </div>
    <div class="content">
      <div class="smbox" v-for="(item,index) in list" :key="index">
        <div class="top">
          <img :src="item.img" alt>
          <div class="name">
            <p>{{item.name}}</p>
            <p>{{item.date}}</p>
          </div>
        </div>
        <div class="main">
          <img :src="item.img" alt="">
          <img :src="item.img" alt="">
     
        </div>
        <div class="footer">
          <p class="happy">{{item.happy}}</p>
          <p class="dianzan">
            <span>点赞</span>
            <span>评论</span>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dianzan{
  display: flex;
  justify-content: space-around;
  margin-top:10px;
}
.happy{
  color:dimgray;
  margin-left:10px;
  margin-top:5px;
  font-size: 14px;
}

.smbox {
  width: 100%;
  height: 190px;
  font-size: 14px;
  border-bottom: 1px solid red;
}
.content{
  flex: 1;
  overflow: auto;
  margin-top: 30px;
}
.top {
  margin-top: 30px;
  width: 100%;
  height: 50px;
  display: flex;
}
.top img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
}
.name {
  margin-left: 10px;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
 
  width: 100%;
  height: 30px;
  background: #fff;
  position: fixed;
}
.main {
  width: 100%;
  height: 70px;
  display: flex;
  // justify-content: center;
  margin-top: 10px;
}


.main img {
  width: 100px;
  margin-left: 10px;
  height: 70px;
}
.input {
  width: 290px;
  height: 25px;
  margin-left: 15px;
  border-radius: 15px;
  text-align: center;
}
.span {
  margin-left: 15px;
  margin-right: 10px;
  font-size: 25px;
  color: red;
}
</style>


<script>
export default {
  data() {
    return {
      list: [
        {
          happy:"一家人烧烤真开心",
          date: "2019-08-27",
          name: "马乖乖",
          img:
            "http://tupian.qqjay.com/tou2/2018/1210/397c3e6556625dd1eb12d12babe58d02.jpg"
        },
         {
          happy:"一家人烧烤真开心",
          date: "2019-08-27",
          name: "马乖乖",
          img:
            "http://a-ssl.duitang.com/uploads/item/201508/06/20150806133416_AvxN2.jpeg"
        },
         {
          happy:"一家人烧烤真开心",
          date: "2019-08-27",
          name: "马乖乖",
          img:
            "http://b-ssl.duitang.com/uploads/item/201608/30/20160830193419_deSYz.jpeg"
        },
         {
          happy:"一家人烧烤真开心",
          date: "2019-08-27",
          name: "马乖乖",
          img:
            "http://b-ssl.duitang.com/uploads/item/201809/30/20180930192344_uhrtn.jpeg"
        },
         {
          happy:"一家人烧烤真开心",
          date: "2019-08-27",
          name: "马乖乖",
          img:
            "http://b-ssl.duitang.com/uploads/item/201610/05/20161005164710_xASk2.jpeg"
        },
      ]
    };
  }
};
</script>
