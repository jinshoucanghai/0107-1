 var i = -1;
 var ms = 200;
 var index;
 var app = $('#app');
 app.append('<ul></ul>');
 var user = [
     { name: "周池锋" },
     { name: "戴泽琪" },
     { name: "胡家铭" },
     { name: "王俊" },
     { name: "杨鑫" },

     { name: "王泽宇" },
     { name: "叶隆鑫" },
     { name: "赵小景" },
     { name: "吴积友" },
     { name: "王宇杰" },

     { name: "许文涛" },
     { name: "杨克明" },
     { name: "张润骞" },
     { name: "张震霆" },
     { name: "汪晨阳" },

     { name: "洪叶" },
     { name: "吴国潘" },
     { name: "吴肇荣" },
     { name: "翁慈阳" },
     { name: "周耀炳" },

     { name: "方建东" },
     { name: "鲍丽亚" },
     { name: "李港进" },
     { name: "林明亮" },
     { name: "刘法伟" },

     { name: "于远祥" },
     { name: "季海华" },
     { name: "徐洋港" },
     { name: "章银丰" },
     { name: "杨鹏" },

     { name: "张路路" },
     { name: "丁宁一" },
     { name: "李杰" },
     { name: "曾鹏韬" },
     { name: "陈奕凯" },

     { name: "林元民" },
     { name: "栗艳宁" },
     { name: "桂新洋" },
     { name: "谭成朋" },
     { name: "陈仁杰" },
     { name: "应华" }


 ];
 console.log(user.length)
 var game = [
     '最喜欢在座哪位异性同学',
     '和男/女朋友进行到哪一步了',
     '初吻年龄',
     '自己最丢人的事',
     '神情的吻墙10秒',
     '唱青藏高原第一句',
     '小时候第一次挨揍或被老师狠批的具体经过？ ',
     '当你最不知道穿什么颜色的时候，你会选择什么颜色？',
     '曾经有过最被感动的事是什么？',
     '最后一次发自内心的笑是什么时候？ ',
     '你心目中理想的爱人是什么样子呢？',
     '如何向喜欢的人表白？ ',
     '现在你最喜欢的人是谁？',
     '如果跟你喜欢的人约会，碰到前任的男（女）朋友，会有什么表现？',
     '什么都别说了，给我加个作业吧',
     '对窗外大喊：“我好寂寞阿。” ',
     '你最近让你最烦恼的事情是什么？',
     '唱一首歌！不能低于1分钟',
     '你觉得今天谁的穿着最有气质？',
     '情人节最想收到什么礼物？',
     '在你洗澡时，有一个非常丑的异性冲了进来，你会怎么样？',
     '在你洗澡时，有一个非常帅的异性冲了进来，你会怎么样？',
     '男生做5个俯卧撑,女生唱歌！如果女生不想唱歌。也可以做5个俯卧撑',
     '你觉得我们同学当中，异性当中谁最好看！',
     '谁是我们班油腻腻的中年大叔',
     "陪班长跑步十公里", "三天内做完一个机器猫", "唱歌跳舞", "帮班长搭讪天眼所有女生,并拿到微信或手机号码", '最喜欢在座哪位异性同学',
     '和男/女朋友进行到哪一步了',
     '初吻年龄',
     '自己最丢人的事',
     '神情的吻墙10秒',
     '唱青藏高原第一句',
     '小时候第一次挨揍或被老师狠批的具体经过？ ',
     '当你最不知道穿什么颜色的时候，你会选择什么颜色？',
     '曾经有过最被感动的事是什么？',
     '最后一次发自内心的笑是什么时候？ ',
     '你心目中理想的爱人是什么样子呢？',
     '如何向喜欢的人表白？ ',
     '现在你最喜欢的人是谁？',
     '如果跟你喜欢的人约会，碰到前任的男（女）朋友，会有什么表现？',
     '什么都别说了，给我加个作业吧',
     '对窗外大喊：“我好寂寞阿。” ',
     '你最近让你最烦恼的事情是什么？',
     '唱一首歌！不能低于1分钟',
     '你觉得今天谁的穿着最有气质？',
     '情人节最想收到什么礼物？',
     '在你洗澡时，有一个非常丑的异性冲了进来，你会怎么样？',
     '在你洗澡时，有一个非常帅的异性冲了进来，你会怎么样？',
     '男生做5个俯卧撑,女生唱歌！如果女生不想唱歌。也可以做5个俯卧撑',
     '你觉得我们同学当中，异性当中谁最好看！',
     '谁是我们班油腻腻的中年大叔', '你的初吻是几岁被谁夺取的', '你的初恋是几岁', '你初恋对象是谁', '你亲吻过多少人', '在现场所有人中你看哪位异性同学最舒服',
     '如果再给你一个机会回到高中时代最想对哪位异性说哪些话', '你第一个喜欢的异性叫什么名字', '你对自己的梦中情人的要求是什么', '让你一直念念不忘的一位异性的名字原因',
     '谈过几次恋爱', '每天睡觉前都会想起的人是谁', '你会不会在意ta的过去为什么', '现在心里想念的异性叫什么名字', '第一次爱的人对你产生过什么影响',
     '结婚后想生男孩还是女孩说出原因', '和多少异性有过非恋爱的暧昧关系', '你作弊使用过哪些手段', '做过最丢脸的事情', '背一位异性让场地n圈',
     '抱一位异性直到下一轮真心话大冒险结束', '向班长表白3分钟或让班长向你表白三分钟（异性）', '与班长十指相扣，对视10秒', '邀请一位异性为你唱情歌，或邀请一位异性与你情歌对唱',
     '做自己最性感、最妩媚的表情或动作', '吻墙10秒', '模仿脑白金广告，边唱边跳', '10分钟内完成一个轮播图效果', '尿床到几岁', "选择一个同学表白五分钟"
 ]

 function shuffle(arr) {
     var length = arr.length,
         randomIndex,
         temp;
     while (length) {
         randomIndex = Math.floor(Math.random() * (length--));
         temp = arr[randomIndex];
         arr[randomIndex] = arr[length];
         arr[length] = temp
     }
     return arr;
 }
 shuffle(user)
 var color = function(a) {
     var rgba = parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() *
         255) + "," + a;
     return rgba
 }
 var random = function(n) {
     var num = Math.random();
     return num;
 }
 var randomSize = function(m) {
     if (arguments.length == 0) {
         m = 10;
     }
     var n = Math.floor(Math.random() * m + 1)
     return n
 }
 var span = $('<span></span>')
 $.each(user, function(index, el) {
     var li = $('<li>' + el.name + '</li>');
     li.css('background', 'rgba(' + color(1) + ')')
     $('ul').append(li)
 })
 $('li').append(span)
 var timer = null;
 $('button').on('click', init);

 function init(e) {
     $('h1').html("0107作业系统")
     $(".game").html('')
     // console.log(e)
     e.stopPropagation()
     shuffle(user)
     // 按扭锁定
     $('button').attr('disabled');
     $('button').css({
         "opacity": "0"
     });
     var cur = 0;
     clearInterval(timer)
     timer = setInterval(function() {
         ++i;
         ++cur;
         $('li').each(function(index, el) {
             if (i === index) {
                 $(this).css({
                     "transform": "scale(1.1)",
                     "background": "rgba(" + color(randomSize()) + ")",
                 }).children().css({
                     "height": "100%",
                 })
             } else {
                 $(this).css({
                     "transform": "scale(1) ",
                     "background": "rgba(" + color(randomSize()) + ")",
                 }).children().css({
                     "height": "0%",
                 })
             }
         })

         var left = Math.random();
         var right = Math.random();
         // console.log(cur)
         if (cur >= randomSize(30) && !(cur < user.length)) {
             if (left > right) {
                 // console.log(left+">"+right);
                 stop()
                 i = -1;
                 cur = 0;
             }
         }
         if (i >= user.length) {
             i = -1;
         }
     }, ms)
 }

 function stop() {
     clearInterval(timer)
     var ins = randomSize(user.length);
     // console.log(ins)
     if (ins === user.length) {
         ins = 0;
     }
     $('h1').html("")

     $('li').each(function(index, el) {
         $(this).css({
             "transform": "scale(1)",
             "background": "rgba(" + color(randomSize()) + ")",
             "z-index": "1"
         }).children().css({
             "width": "0%",
         })
     })


     $('li').eq(ins).css({
         "transform": "scale(1.5)",
         "background": "rgba(" + color(randomSize()) + ")",
         "z-index": "999999"
     }).children().css({
         "width": "100%",
     })

     var name = "<span>" + $('li').eq(ins).text() + "</span>"
     $('h1').html(name)
     $('button').removeAttr('disabled');
     $('button').css({
         "opacity": "1"
     });

     gameSize = randomSize(game.length);
     if (gameSize === game.length) {
         gameSize = 0;
     }
     console.log(gameSize, game[gameSize])

     // $('.game').css({
     //     "opacity":1,
     //     "display":"block"
     // }).html(game[gameSize])


     $(".game").css({
         "height": "40px",
         "transform": " scale(1)",
         "transition": "all 1000ms"
     }).html(game[gameSize]);


 }

 // $(document).click(function () {
 //     stop()
 // })