import React from 'react';
import './ReviewDetail.css';
import Rating from './Rating/Rating';

export default class ReviewDetail extends React.Component {
  render() {
    return (
      <div className="review-detail container">
        <div className="row">

          <div className="col-8">
            <h4>如何评价《我不是药神》</h4>
            <div className="user-info">
              <img src="https://img3.doubanio.com/icon/u180957030-2.jpg" width="24" className="avatar" alt="" />
              <span>唐佐</span>
              <span>评论</span>
              <span>我不是药神</span>
              <Rating grade={10} />
              <span>2018-07-19 14:50:28</span>
            </div>
            <div className="content">
              <p>杀手是我们平淡无奇生活的一种补充，那是另外一种完全不同的生活状态。与之类似的单词还有海盗、间谍、猎人、流浪者。我一直觉得这些都是纯粹的男性职业，在这个男人也穿耳洞、着闪亮衣衫，雌雄莫辨的时代里，这几种人分明让人感觉得到一种原始的男性的魅力，雄性的力量。他们不见于我们日常的生活，但是在传说中他们又的确存在。我们通过事件去了解他们，经由我们的幻想去完整他们的形象。他们是男人的梦，属于在黑夜里滋生蔓延的东西，满足我们最原始的欲望和冲动，和对神秘本身的向往。\n \n 男人对这些职业的态度，让人不由得想起古龙的小说来：深处闺中的少女，正在窗前寂廖看着满天的星斗。就在那某一个夜晚，有一个黑衣人风一般的掠过她的窗口。突然间，他又返回来，用脚勾着屋檐，露出雪白而整齐的牙齿，给她一个充满活力的微笑。然后非常自信的介绍道：“你好！本人是一个采花贼。”少女紧张、慌乱，因为她是第一次看见一个采花贼，一个如此有魅力的贼，偷心的贼。他们谈了半宿的话就分手了，而少女甚至成为了别人的奶奶了，还一直甜蜜的回忆着这个故事。在杀手的问题上，男人的态度很象这个女孩子。\n \n 古龙对女孩子的这种心理上的把握，我因为身体很重，没有亲身尝试过，因此不知道是真的还是假的。我只知道，一个中国男人是在各种英雄的故事里成长起来的，我们在童年时代里听过的最多的故事就是关于英雄的。英雄，雄性的雄。但是，等我们成长起来的时候，所有的英雄都已经死掉很多年了。所以，作为男人，我们别无选择，我们只能变成女人。\n \n 女人的小鞋穿在脚上，男人的小鞋勒在灵魂里；女人打扮自己取悦自己心爱的人，男人奴颜婢膝满足农业社会体系的要求；只有一个女人成为了将军，她叫花木兰。有很多男人阉了自己完成个人价值，他们叫九千岁，叫做帝师，叫做文王。。。。。。他们比母亲更坚韧，比织毛衣更耐心，比计算鸡毛蒜皮更严密，比后宫里争风吃醋更善妒，比揪头发骂街吐口水更下作，最终才能成为伟大的男人。\n \n 所以，每一个男人象个怀春而寂寞的少女，等待着杀手先生从自己的窗前经过。看着街对面房子上跳跃潜行的模糊身影，看着自己的小脚，他们流泪了。不是每一个春夜里都有杀手先生经过，所以男人们寂廖的剪下一枝玫瑰，惘然插入瓶中，一声长叹。\n \n 在这种阴柔的气氛里，杀手坚硬的存在着。杀手早已经将生命卖给了浮士德的那个老朋友，所以杀手是高贵的。“手”在中文里，有某项操作员的意思。杀手于是对于终结生命有了一种操作的精确，杀人变成了一项同时具有暴力美学和黑色幽默特色的工作。记得在我居住的城市里，杀手敲响了某国际公司亚洲总裁的门。门开，枪响，两眉之间。门关，人杳，尸体倒地。一群人抽着烟讨论这事，有人长叹曰：“十步杀一人，千里不留行。事了拂衣去，深藏身与名。”也有人说：“瞧这效率。”\n \n 法国人很好的满足了我们的这种需求。每个人都有造梦的权利，要做就做一个最大的，最狂野的。Leon穿着大衣，戴着墨镜，悄无声息的站在你的身后，用放在你的脖子上的刀子，和你对话。这种最直接的对话，其实是每个人都最爱的。我们的意志顺着那冰凉的金属渗入和控制对方的灵魂和身体，远比妥协、斡旋、协调、平衡来得直接而干脆。我们在现实的各种力量间举步维艰的时候，当我们在纠结的各种关系间奋力爬向目标的时候，Leon用一把小刀向我们证明了一点：并非亚历山大才能用最简单的方法解开“谜之线团”。Leon隐没在黑暗中，强悍而凶猛，具有一个帝王的那种非凡力量和控制力。而在灿烂阳光下的我们，苍白而无力，软弱的爬行着。\n \n 据说，Leon是法国男人的代表了。我喜欢的是杀手的那种简单生活和男人应该具有的笨拙。毫无疑问的，通过他手里的那盆永远不开花的植物有一种隐喻：杀手得封闭掉一些东西。我们以为自己是在幸福之中，所以甚至建造了花园，却不知道自己因此变成了一个终日在繁重劳动和沉重责任下的花匠。建造一个花园容易让人变得迟钝而平庸，因为对这花园的爱，使我们永远的锁在方形的天空下。其实，一个人连一盆花都带不走。而我们却建造了整个花园，变得精致和细腻起来，一个精致和细腻的男人给人的感觉是倒尽胃口。男人应该精于使用斧头，在任意一个精确的弧线下将圆木劈成两片，而不是善于飞针走线。在这手脚的笨拙之中，我们留下了广阔的空间交由女性的温柔和细腻去填补。这世界很复杂，但是我们只能放下一盆不开花的植物；这世界很简单，只要你会使用一把斧头。\n \n 或者，有人会追问生命的意义何在？我看见炸弹的拉簧飞起的一幕，我以为那就是全部的意义。传说中的杀手都会有那么一天，他们要向魔鬼赎回自己的生命，把它慷慨的奉献给自己珍视的东西。如果一个杀手终生为金钱而杀人，那么他永远只是一架毫无感情的机器。一个没有什么珍惜的人，生命是不完整的。杀手注定必死无疑，在这一天到来之前，他必须找到什么东西，把自己的生命放在祭坛上，才能完整的完成他自己。他简单的一生，由于他当掉了自己的生命，所以超越了一起羁绊，成为了他想要的自己。他唯一不能控制的，就是自己的生命，因此他必须把它赎回来，用结束生命的方式，把人性和生命的尊严重新拿回手里，在最后的时刻，拥有生命的完整。这样的杀手，死而无憾，他的植物也终于能找到一块大地而安详的生长。</p>
            </div>
            <div className="">
              <button>有用 112</button>
              <button>没用 112</button>
            </div>
          </div>
          <div className="col-4">
            <div className="movie">
              <a href="#">这个杀手不太冷</a>
              <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" width="100" alt="" />
              <ul>
                <li><span>导演：</span>文牧野</li>
                <li><span>主演：</span>徐峥 / 王传君 / 周一围</li>
                <li><span>类型：</span>剧情 / 喜剧</li>
                <li><span>地区：</span>中国大陆</li>
                <li><span>上映：</span>2018-06-30(大规模点映) / 2018-07-05(中国大陆)</li>
              </ul>
            </div>
            <div className="more">
            <h5>更多我不是药神的影评...</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}