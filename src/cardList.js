/**
 *
 * @type {{type: string}[]} spade 黑桃，heart:红桃，club: 梅花，diamond: 方片
 */

const questionList = [{
    id: 101,
    point: 'A',
    type: 'spade',
    view: '那么多院士、科学家都支持中医，你是个什么东西！',

    analysis: '这种诡辩术叫「诉诸权威」(argument from authority)，是逻辑谬误中最负盛名的类型之一。哪怕是本领域的专家，也可能因为种种原因没有正确的认识。至于跨界发言的专家，水平更可能与一般人没有差别。很多时候，我们并非不能驳斥权威，只是没有给自己足够的勇气而已。',
    retort: '院士就一定对吗？',
}, {
    id: 102,
    point: '2',
    type: 'spade',
    view: '你又不是搞中医的，有什么资格批评中医？',

    analysis: '此言论代表了一大类称为「诉诸人身」(ad hominem)的谬误，即通过对批评者个人身份、经历、能力以至人格的贬低（甚至羞辱），达到否定批评的目的。这是极为常见的诡辩术，但也可以说是最低级的诡辩术。',
    retort: '怎么，批评中医还要靠你颁发金字许可啊？',
}, {
    id: 103,
    point: '3',
    type: 'spade',
    view: '中医再有问题，人家起码在治病救人；你嘴皮子这么利索，你也给人治个病？',

    analysis: '这种「你行你上」的思维，犯的是「诉诸成就」(appeal to accomplishment)谬误，是诉诸权威谬误的一种特别形式。持此思维的人，不是以被批评者的成就为被批评者开脱，就是以批评者不具备这种成就而否定批评的合理性。',
    retort: '照你这说法，我是不是得一把屎一把尿亲自拉扯大一个孩子，才有资格指出你爸妈没教过你逻辑啊？',
}, {
    id: 104,
    point: '4',
    type: 'spade',
    view: '西医只会讲一大堆DNA、受体、激素的术语，听也听不懂；你直接说是「上火」多简单！',

    analysis: '此言论犯了「个人怀疑」(personal incredulity)谬误，即认为只有我能理解的才是正确的，我听不懂的就不可信。这种心态，也是中医可以利用大众普遍不具备科学素养的缺陷在人群中广泛传播的原因之一。',
    retort: '恕我直言，你应该活到老、学到老，而不是理直气壮地宣称自己无知。',
}, {
    id: 105,
    point: '5',
    type: 'spade',
    view: '什么中医西医，什么传统现代，分那么清干吗？只要能治病不就行了。',

    analysis: '此言论犯了「中间立场」(middle ground)谬误，不分青红皂白摆出一副「理客中」的样子，仿佛这种不偏不倚的态度永远最体面、最正确。然而很多时候，这种貌似公允的中间立场实际上却充当了恶的帮凶。',
    retort: '你都不知道我们为什么批评中医，就跑来和稀泥，莫非祖上是泥瓦匠出身？',
}, {
    id: 106,
    point: '6',
    type: 'spade',
    view: '别看你现在骂中医骂得这么欢，我就不信你小时候没用过中药！',

    analysis: '此言论犯了「诉诸虚伪」(appeal to hypocrisy)的谬误，常见形式就是举出批评者以往的反面言行，企图论证批评者个人的虚伪性，从而表明其批评不可靠。然而，人的言行是可以转变的，一味粗暴地挖掘所谓「黑历史」打脸，不过是无赖行径。',
    retort: '是不是小时候尿过床的人，长大了都不能批评别人不讲卫生？',
}, {
    id: 107,
    point: '7',
    type: 'spade',
    view: '虽然细辛等中药所含的马兜铃酸致癌，但只谈毒性不谈剂量是耍流氓！',

    analysis: '要应用「剂量决定毒性」这一定律至少需要两个预设条件：1. 毒物有服用的必要；2. 毒物具有最低安全剂量。然而，致癌物并没有最低安全剂量；更重要的是，细辛等中药并无可靠药效，根本就没有服用必要，也就没有讨论其剂量的必要。无视前提条件滥用这一定律，是犯了用通则凌驾例外的「偶例谬误」(accident fallacy)。',
    retort: '虽然屎有毒，但只谈毒性不谈剂量就是耍流氓，你吃吗？',
}, {
    id: 108,
    point: '8',
    type: 'spade',
    view: '西医也有那么多骗子，你们还不是天天吹西医！',

    analysis: '这种比烂思维，在逻辑上叫「负负得正」(two wrongs make a right)谬误，常见表现就是通过寻找乙的缺陷，试图抵消掉与乙对立的甲的缺陷，进而企图表明甲的正当性。在社会热点事件舆论中常见的苛求「完美受害者」的思维犯的也是同样的谬误。',
    retort: '不好意思，有骗子很正常，但有了骗子不承认还要狡辩就是不要脸了。',
}, {
    id: 109,
    point: '9',
    type: 'spade',
    view: '中药是纯天然的，所以无副作用；西药都是化学品，所以副作用很多。',

    analysis: '此言论犯了「诉诸自然」(appeal to nature)的谬误，即先验地认为天然的就是好的，人工的（特别是化学合成的）就是坏的。这种自然崇拜也是很多人推崇「古法」「秘制」「有机」食品，而对工业食品怀有病态恐惧的原因。',
    retort: '原始社会跳大神治病最天然了，你要不试试？',
}, {
    id: 110,
    point: '10',
    type: 'spade',
    view: '西医就能包治百病？好多病西医也治不了，就应该让中医来治！',

    analysis: '此言论犯了「虚假两难」(false dilemma)的谬误。在现实中，对于现代医学的不治之症，并非只有「让中医治」这一种选择，完全可以有其他选择（比如不滥治疗、顺其自然）。无视其他选择，就会形成「不是让现代医学治就是让中医治」的虚假两难处境。',
    retort: '这就好比说我现在没东西吃饿着肚子，是不是就非得吃屎？',
}, {
    id: 111,
    point: 'J',
    type: 'spade',
    view: '那么多西药都有副作用，你见中药有几个有副作用的？',

    analysis: '此言论犯了「诉诸无知」(appeal to ignorance)的谬误。现代药物看上去副作用多，是因为药学界对它们的了解多；中药的副作用动辄「尚不明确」，是因为药学界的严肃研究不多。证据的缺乏（也即对证据的无知）并不表明没有证据。',
    retort: '对不起，现代医学很诚实，只会老老实实标注副作用，不像中医骗子拿着「尚不明确」伪装无毒无害。',
}, {
    id: 112,
    point: 'Q',
    type: 'spade',
    view: '你觉得中医不好，那是因为你没遇见真正的大师！',

    analysis: '此言论犯了「诉诸纯洁」(appeal to purity)的谬误。为了捍卫一个概念的崇高性，就不断修改它的定义，把所有反证和例外都指责为「因为它们不是真的」，于是「真」东西就永远神圣、永远完美，但也永远只存在于想象之中。',
    retort: '你直接说真正的大师是谁吧，请出来让我们瞧瞧？',
}, {
    id: 113,
    point: 'K',
    type: 'spade',
    view: '没有中医，你祖先是怎么活下来的！',

    analysis: '此言论犯了最典型的「可疑因谬误」(questionable cause fallacy)，即在两个事件之间建立了虚假的因果关系。事实上，人类仅凭自身的生物学特性和一些原始的文化习性就可以代代繁衍，医学实践并非必需。',
    retort: '苍蝇、老鼠没有蝇医、鼠医，又是怎么活下来的？',
}, {
    id: 201,
    point: 'A',
    type: 'heart',
    view: '中医和西医各有各的好处，为什么非要捧西医踩中医？',

    analysis: '在当前语境下，中医作为传统医学的代表，与之对立的是现代医学。现代医学是全人类智慧的结晶，既有西方人的贡献又有中国人的贡献。用“西医”称呼现代医学，企图把普世的现代医学塑造为一种外集团的文化属性，这叫「诱导用词」(loaded words)，是狭隘民族主义常用的话术。',
    retort: '不好意思，我们支持的是现代医学，现代医学才不分中西；你听说过物理学分中国物理学和西方物理学吗？',
}, {
    id: 202,
    point: '2',
    type: 'heart',
    view: '希望有关部门查查那些反中医的家伙，我怀疑他们拿了美分。',

    analysis: '此言论不仅犯了「诉诸人身」的谬误，更重要的是持有阴谋论观点，坚信批评中医一定是境外敌对势力收买本民族败类、通过散布反动言论败坏中华民族自信力的阴谋。在逻辑上，这叫做「鬼祟谬误」(furtive fallacy)。',
    retort: '我也怀疑美国是不是向中国释放了基因武器，怎么让我中华民族里面有这么多缺乏逻辑的蠢人？',
}, {
    id: 203,
    point: '3',
    type: 'heart',
    view: '我没你们读书人懂得多，但是我爱国，就是看不惯你们批评中医！',

    analysis: '此言论犯了「红鲱鱼」(red herring)谬误，即用于驳斥对方观点的理由与该观点毫无关联。爱不爱国，与批评不批评中医是完全没有关系的两件事，前者根本不能作为论述后者的有效理由。',
    retort: '你完全可以既爱国又有文化，真的，这两样不冲突。',
}, {
    id: 204,
    point: '4',
    type: 'heart',
    view: '好多成语都来自中医，比如病入膏肓、妙手回春、以毒攻毒等等，是不是也都要从词典里删掉？',

    analysis: '此言论犯了「稻草人」(straw man)谬误，即歪曲对方的论点，树立一个对方并不支持的主张作为靶子来攻击。批评中医的人针对的主要是科学层面，一般不针对纯粹的人文层面。这正如理查德·道金斯是彻底的宗教批判者，但也不否认基督教为英语贡献了大量宝贵的词语和典故。',
    retort: '我们只希望中医退出国家医疗体系，没说过让中医成语退出汉语词典，请不要伪造观点。',
}, {
    id: 205,
    point: '5',
    type: 'heart',
    view: '中世纪阿拉伯医学家伊本·西拿是中国人后代，西医受他很大影响，所以西医也不过是中医的分支罢了。',

    analysis: '伊本·西拿有一个父系祖先叫西拿(Sina)。认为这个名字意为「中国」，进而推出伊本·西拿是中国人后代，在学界是影响力很小的假说，有民间词源学(folk etymology)之嫌。利用民间词源学之类牵强附会的论证攀附外族名人，硬说是本族人或其后代，是很多「历史发明家」爱用的招数。',
    retort: '其实一个叫杜钢建的湖南学者说了，西方人都是中国人后代，区区一个伊本·西拿算啥！',
}, {
    id: 206,
    point: '6',
    type: 'heart',
    view: '日本人把中药卖到全世界，在国际市场上的占有率高达80%，中国却还有人在诋毁中医！',

    analysis: '且不说有关国际中药市场份额的很多流行说法有统计不确的问题，这种言论本身仍然是「诉诸外国人」的狭隘民族主义话术的代表例子，而且还结合了「凡事都要争世界第一」的偏激心态。',
    retort: '拿中药这种没用的东西满世界骗人，这种烂事也要争「第一」？',
}, {
    id: 207,
    point: '7',
    type: 'heart',
    view: '连美国人都对中医药赞叹不已，你身为中国人却批评中医，羞愧不羞愧？',

    analysis: '这种逻辑是「诉诸权威」谬误在狭隘民族主义语境中的特别类型，即把外国人当成一种权威，因此外国人对本民族的某种文化的认同不仅可以证明该种文化的优越性，而且可以用来贬低本民族内对该文化的批评者。',
    retort: '一边骂着美国人，一边又对美国人的言行如此敏感，对方夸上几句就沾沾自喜，说到底还是跪久了，太自卑。',
}, {
    id: 208,
    point: '8',
    type: 'heart',
    view: '一千年以后，你已经身名俱灭，但人们还会记得扁鹊、华佗。',

    analysis: '中医界对扁鹊、华佗的尊崇，相当于一种圣徒崇拜(saint worship)。与很多宗教中行迹成疑的圣徒一样，在现代史学看来，扁鹊、华佗也正如上古史和民间传说中的很多人物一样，其「神迹」是一层层添油加醋臆造出来的。',
    retort: '这个我信——只要人类一直跟今天一样愚蠢，一千年之后，他们肯定还会继续在冥王星上跳大神。',
}, {
    id: 209,
    point: '9',
    type: 'heart',
    view: '当年汪精卫叫嚣「废止中医」，后来他成了大汉奸。这样你就知道反中医的人都是什么货色了吧。',

    analysis: '此言论犯了典型的「罪恶关联」(guilty by association)谬误，其基本结构是：甲和乙在某方面有相同之处，甲是罪恶的，所以乙也是罪恶的。狭隘民族主义者常常用这种话术建立其反对者与某些「民族罪人」的关联，企图让听者把对后者的强烈负面情绪转嫁到前者之上。',
    retort: '汪精卫是男人，你爸也是男人，所以你爸也是汉奸，妥妥的。',
}, {
    id: 210,
    point: '10',
    type: 'heart',
    view: '中医是中华文明的瑰宝，反中医就是反中华文明！',

    analysis: '此言论主要犯了「合成谬误」(fallacy of composition)。中医固然是中华文明的一部分，但对部分的评价不能推及到整体之上。合成谬误（以及类似的分割谬误）是狭隘民族主义者常用的话术，借此把某事物与民族文化强行捆绑，从而可以方便地给该事物的批评者扣帽子。',
    retort: '中华文明有那么多真正的瑰宝，又不是只有中医；中医哪来那么大脸面能代表整个中华文明？',
}, {
    id: 211,
    point: 'J',
    type: 'heart',
    view: '人民群众喜欢中医，你不喜欢，你算老几！',

    analysis: '这种逻辑叫「诉诸人民」(appeal to the people)，即认为人民的观点和行为一定是正确的、合理的。诉诸人民是民粹主义的基本立论，而它也很容易与狭隘民族主义结合。',
    retort: '人民还普遍希望不劳而获呢，你也赞成？',
}, {
    id: 212,
    point: 'Q',
    type: 'heart',
    view: '《黄帝内经》和《神农本草经》博大精深，看不懂的人才诋毁它们。',

    analysis: '这种逻辑叫「诉诸古代智慧」(appeal to ancient wisdom)，常见表现就是把一两本古籍奉为穷尽了一切有用知识的集大成之作，后人唯一能做的不过是为它们作注。这种以古为尊的思想是非常典型的传统思维，而与面向未来、承认无知、追求进步的现代思维格格不入。',
    retort: '明明是许多代人慢慢修改、汇编才写成的书，非要伪托为黄帝和神农的著作，这种古代骗术确实博大精深。',
}, {
    id: 213,
    point: 'K',
    type: 'heart',
    view: '中医蕴含了中华民族五千年的智慧，其正确性不容置疑！',

    analysis: '这种逻辑叫「诉诸传统」(appeal to tradition)，即认为传统一定是正当的、合理的。它也是狭隘民族主义者最爱用的论证手法之一。对此，一百年前新文化运动的旗手之一鲁迅已经给出了震聋发聩的反驳。',
    retort: '从来如此，便对么？',
}, {
    id: 301,
    point: 'A',
    type: 'club',
    view: '中医糊糊涂涂治好了病，西医清清楚楚瞧不好病。',

    analysis: '此言论通过诱导用词，让人以为中医能治病。然而，疗效的检验需要遵循「足够样本、随机、对照、盲法、多中心」等一系列科学原则。以这些原则衡量，对很多疾病来说，除去医药以外因素的影响，中医并无有效治疗方法。泛泛说中医能治病，是支持中医的言论中最常见的「虚假前提」(false premise)。',
    retort: '不不不，中医糊糊涂涂让你上当受骗，现代医学清清楚楚让你免受欺骗。',
}, {
    id: 302,
    point: '2',
    type: 'club',
    view: '中医是高屋建瓴的哲学。西医花了那么多钱，也没发达到能验证阴阳五行的程度，最后顶多发现中医理论早已在山顶等候多时了。',

    analysis: '现代医学作为现代科学的一部分，背后有远比中国哲学深厚的哲学，其中凝聚了古希腊以来两千六百多年诸多哲人的思想结晶。在现代医学哲学看来，所谓「中医哲学」并不是高高在上的巨峰，而是俯瞰无余的小山头，泯然于由全世界所有民族的传统思维组成的低矮丘陵之中。',
    retort: '这世上往往是越缺什么越爱嚷嚷什么，难怪中医爱嚷嚷他们懂哲学。',
}, {
    id: 303,
    point: '3',
    type: 'club',
    view: '科学教徒不过是在玩定义游戏，把不符合科学的都排除出现代医学之列，那中医不科学就不科学吧。',

    analysis: '科学虽然没有公认的定义，但追求更有效的解释和预测方法一直是其核心精神。中医并不完全与科学相悖，有部分实践通过科学方法检验后，便成为现代医学的一部分。当然，如果像此言论这样偷换概念，把中医重新定义为「中医里除掉现代化的部分之后剩下的无用部分」，那么中医确实可以完全排除出科学之列。',
    retort: '自己重新定义了中医，还指责别人玩定义游戏，贼喊捉贼玩得很溜嘛。',
}, {
    id: 304,
    point: '4',
    type: 'club',
    view: '屠呦呦研发出中药青蒿素，获得了诺贝尔奖，打了否定中医者的脸！',

    analysis: '此言论犯了偷换概念的「歧义」(equivocation)谬误。按一般理解，中药指的是按照中医理论用于治病的药物；但中医支持者为了揽功，硬把屠呦呦团队按照现代科学方法制备、检验和应用的现代药物青蒿素说成中药，于是强行改变了中药的定义。',
    retort: '其实不光青蒿素是中药，凡是「我觉得和中医沾点边、值得硬凑上去沾点光的好东西」都是中药，对吧？',
}, {
    id: 305,
    point: '5',
    type: 'club',
    view: '古人早就说「是药三分毒」，又不是没提醒过你！',

    analysis: '在科学哲学看来，「是药三分毒」这种充满语义模糊(ambiguity)的陈述缺乏足够的精确性，也就无法与能够更精确地判定药物毒性的现代药理学理论竞争，属于坏理论。更何况，持此论者常将它作为开脱责任的托辞，而拒斥对药物毒理的精确检验结果。',
    retort: '为什么非得是三分毒，不是两分毒也不是四分毒，听说这是使用了古代汉语的虚指大法？',
}, {
    id: 306,
    point: '6',
    type: 'club',
    view: '朱砂虽然有毒性，但经过炮制和配伍就可以消除。科学不懂中药加工的奥秘。',

    analysis: '这种通过精巧的加工就能消除药物毒性的说辞，在很多时候是虚假前提。以朱砂为例，有毒的是其中的汞元素，即使以难溶的硫化汞形式摄入，仍然可在体内蓄积，没有任何炮制和配伍手法可以消除汞。与此类似，认为通过中药配伍的协同作用可以提升药效，在很多时候也是一厢情愿的虚假前提。',
    retort: '这里有一包砒霜，你直接吃了会死，你拌上牛奶吃还是会死，爱信不信。',
}, {
    id: 307,
    point: '7',
    type: 'club',
    view: '现在去医院，动不动就做检查，几百上千搭出去，西药也很贵；哪像中医中药，便宜实惠。',

    analysis: '医疗作为一种经济活动，也要进行成本回报率评估。如果检查和药物真正有用，能够获得排除重大风险或有效控制病情的良好回报，那么成本高一点是可以接受的。如果诊治无用，回报为零，成本再低也是不划算的。另外，现代药物并非都贵，中药也并非都便宜。',
    retort: '其实吃中药不如吃土，都不怎么治病，但吃土可是一分钱都不用花。',
}, {
    id: 308,
    point: '8',
    type: 'club',
    view: '那么多科研论文都表明中药有效，不懂就去查知网和PubMed！',

    analysis: '就医学领域而言，「科研论文＝结果有效」是最容易让外行上当的虚假前提之一。有调查研究发现，即使在国际医学界，实验设计正确、能够为临床医学提供有效信息的论文，也只占全部论文的6%. 至于中文医学论文，或中药研究论文，或中文的中药研究论文，其平均水平就更是远为低劣。',
    retort: '说这话的人就像被电视直销欺骗的中老年人：「能上电视的东西，还有假的吗？」',
}, {
    id: 309,
    point: '9',
    type: 'club',
    view: '中国人体质和西方人不同，西方人不坐月子没问题，但中国人就不行，等你老了你就知道了。',

    analysis: '中国人与西方人在体质上仅有微小差别，虽然确实会影响到某些疗法和生活方式的实施，但在「坐月子」等大量具体案例中却并无有效证据表明两个人群应予区别对待。仅因为人到老年出现健康问题，在时间上居于「不坐月子」之后，就在二者之间建立因果关系，在逻辑上是标准的「后此谬误」(ad hoc fallacy)。',
    retort: '哦，你是说黑眼睛黑头发黄皮肤，永永远远是东亚病夫？',
}, {
    id: 310,
    point: '10',
    type: 'club',
    view: '西医善于治急病；中医善于治慢性病。',

    analysis: '事实是即使对于慢性病，中医药本身也无多少有效手段治疗。只不过，慢性病往往病因复杂，疗程长，难于痊愈，常受心理因素等多种外部因素影响，不容易呈现立竿见影的效果，这便给了中医在内的许多替代医学混水摸鱼的空间。',
    retort: '中医治不了急病，被现代医学赶到了慢性病这个最后的避难所，这种不光彩的历史怎么还还引以为豪了？',
}, {
    id: 311,
    point: 'J',
    type: 'club',
    view: '西医对一千个病人都只有一种疗法，中医却能辨证论治。',

    analysis: '「辨证论治」和「治未病」一样，也是常见的「诱饵掉包」话术。如果无法对疾病和症状有客观的诊断，那么所谓「辨证论治」就不过是中药的排列组合游戏。相比之下，现代医学却真正能够在治疗肿瘤等疾病时做到因人而异，「对症下药」。',
    retort: '中医的「辨证论治」，其实就是小孩子玩过家家：你今天穿了红色衣服，给你绿珠子两粒搭配一下，他今天穿了红黄相间的衣服，给他绿珠子两粒，再加紫方块一个吧……',
}, {
    id: 312,
    point: 'Q',
    type: 'club',
    view: '西医有病才治，中医却可以治未病。',

    analysis: '「治未病」也是中医自我宣传时常用的「诱饵掉包」话术。事实是中医无法有效认识病因，也就无法真正预防疾病。相比之下，对传染病的有效预防恰恰是标志着现代医学诞生的关键事件，而现代医学如今对多种慢性病也有了较为丰富的预防经验。',
    retort: '中医就别自吹「治未病」了吧，只要别「治出病」就谢天谢地了。',
}, {
    id: 313,
    point: 'K',
    type: 'club',
    view: '西医只会治标，头痛医头、脚痛医脚，中医却有整体观，能够治本。',

    analysis: '这是中医支持者常用的自吹自擂的说辞，采用了商学上称为「诱饵掉包」(bait-and-switch)的欺骗性话术。事实是中医无法有效认识病因，既不能治标，更不能治本。而且由于中医无法对局部建立实证、深入的认识，也就不可能在此基础上建立真正的整体观。',
    retort: '认识世界的方法处在幼儿园水平，却操着顶尖科学家的心，你知道中国有个成语叫「挂羊头，卖狗肉」吗？',
}, {
    id: 401,
    point: 'A',
    type: 'diamond',
    view: '我去年腰疼，去看西医没治好，老中医给贴了个膏药，又按摩了之后就好了，所以我支持中医。',

    analysis: '这种以亲身经历替中医辩护的言论，犯的是「轶事谬误」(anecdotal fallacy)，即用生动鲜活的个例来论证中医的有效性。轶事谬误是人类先天心智欠缺统计学思维的主要表现。在科学上，个案在绝大多数情况下不能说明问题，只有一定数量的样本的统计结果才可能有意义。',
    retort: '如果你确诊了百分之百死亡的狂犬病，然后真的被治好了，那么用个例说事还算合理；就得了个腰疼，那点个人经验就别太当真了吧。',
}, {
    id: 402,
    point: '2',
    type: 'diamond',
    view: '心诚则灵。你不信中医，心不诚，那中医当然治不了你的病。',

    analysis: '此言论犯了「诉诸信仰」(appeal to faith)的谬误。「心诚则灵」是很多非理性信仰维持洗脑能力的最高原则之一。在心理学看来，这是一种十分常见的「污化的心智程序」，它让人拒绝反思和评估，从而无法做出理性决策。',
    retort: '心诚才能治病？这是大夫还是邪教领袖啊？',
}, {
    id: 403,
    point: '3',
    type: 'diamond',
    view: '两军打仗，西医就像外援，虽然帮你打仗，但有时候敌我不分；中医就像后援，虽然不帮你打仗，但缺粮给粮、缺弹给弹，思路就不一样。',

    analysis: '此言论犯了「虚假类比」(false analog)谬误，用本质根本不同的另一事物来比喻所要说明的事物。由于虚假类比常具有生动性和易理解性，它很容易调动人类的「快思考」本能，而忘记用「慢思考」追究这种类比是否合理。虚假类比也是传统思维的常见话术。',
    retort: '这一看就是中了中学语文课本的毒还没解，还以为胡乱比喻是说理的好方法呢！',
}, {
    id: 404,
    point: '4',
    type: 'diamond',
    view: '今天这群科学教徒能灭掉中医，明天他们就能灭掉中餐，后天又会灭掉汉字，最后我们都成了科学的奴隶！',

    analysis: '此言论犯了「滑坡」(slippery slope)谬误，用一大串概率非常小的因果关系引出一个令人恐惧或厌恶的最终结果，从而否定对方的立论。滑坡谬误常常会与歪曲对方观点的「稻草人」谬误联用，产生更强的诡辩效果。',
    retort: '你第一个假设就不成立——就我们这点声音能灭掉中医？我们自己才更可能被灭掉好吧？',
}, {
    id: 405,
    point: '5',
    type: 'diamond',
    view: '一个人得了癌症快死了，不是应该尽量多试试各种方法吗？万一有用呢？',

    analysis: '这种思维利用人类对死亡的恐惧，过分夸大了某种另类疗法的价值。在统计学上，这相当于为了竭力避免「二类错误」（type II error, 某事为真而不承认其真）而大量犯下「一类错误」（type I error, 某事不真而相信其真），很多时候反而会造成更严重的后果。',
    retort: '这种说法暴露了中国缺乏死亡教育的事实，所以病人倾家荡产、骗子盆满钵满的事情才一再发生，可叹！',
}, {
    id: 406,
    point: '6',
    type: 'diamond',
    view: '真理常常掌握在少数人手里。今天你们这些科学教徒不承认中医理论，以后中医理论证实了，看你们怎么办！',

    analysis: '此言论使用了「伽利略开局」(Galileo gambit)的话术，即以历史上伽利略受到迫害等少数事件为例，试图论证某种不合主流的理论会有翻盘的一天。从统计学的角度看，这也是一种「取样偏差」，即忽略了非主流理论里面大部分根本没有得到主流承认的基本事实。',
    retort: '提醒你一个事实：在中国，批评中医的人才是少数，要当伽利略也是我们才够格吧？',
}, {
    id: 407,
    point: '7',
    type: 'diamond',
    view: '那么多农民靠种中药脱贫致富，你就没想过他们挣不到钱怎么办？',

    analysis: '此言论使用了「诉诸怜悯」(appeal to pity)的话术，也是诉诸情感谬误的一种。这种话术企图让对方对某人或某物产生怜悯，甚至感到内疚，从而在情绪的驱动下放弃立论。在重视人情的中国社会中，诉诸怜悯的话术历史悠久，孔子就是个中高手。',
    retort: '要不让农民种大麻吧，这个来钱更快……',
}, {
    id: 408,
    point: '8',
    type: 'diamond',
    view: '有本事你一辈子别用中医！',

    analysis: '此言论使用了「诉诸恐惧」(appeal to fear)的话术。作为一大类统称为「诉诸情感」的谬误之一，诉诸恐惧的话术企图让对方因为害怕而放弃立论。在心理学看来，这是让情绪驱动了自主心智的「快思考」，压制了理性驱动的算法心智的「慢思考」。',
    retort: '不用就不用！',
}, {
    id: 409,
    point: '9',
    type: 'diamond',
    view: '我去看中医，人家态度和蔼，没吃药病就好了一半；哪像西医院，大夫一个个都凶神恶煞的。',

    analysis: '除了【一句话反驳】里揭示的事实外，此言论也生动地说明，心理因素在很大程度上可以影响病情，从而产生「安慰剂效应」(placebo effect)。所以现代医学在做疗效检验时，必须用「盲法」排除掉有意无意施加在实验参与者身上的种种心理暗示。',
    retort: '现代医院真能治病，里面病人多，大夫太忙，当然没那么多时间对你嘘寒问暖了。',
}, {
    id: 410,
    point: '10',
    type: 'diamond',
    view: '一个晚期癌症病人吃了三个月中药后去世，不表明中药就没用；如果他不吃中药可能两个月就死了。',

    analysis: '此言论犯了「反事实谬误」(counterfactual fallacy)，即虚构出一个并不存在的「对照组」与现实对照，试图论证某条件是某现象的原因。然而，既然是虚构的场景，那就不可避免会塞入说者的主观立场。',
    retort: '你怎么不说如果他不吃中药说不定就不会死呢？',
}, {
    id: 411,
    point: 'J',
    type: 'diamond',
    view: '我感冒之后吃维C银翘片，确实不发烧了，你能说中药无效？',

    analysis: '科学上常常说「相关不等于因果」，是因为光靠一般性观察得出的某条件和某现象的相关性背后往往有非常复杂的机制，必须通过设置对照组，让对照组与观察组（或实验组）只有这个条件不同，其余情况皆同，才有可能确定该条件与该现象的因果性。维C银翘片虽然表面上展示出了中药与退热的相关性，但实际起作用的是其中的现代药物对乙酰氨基酚，这才是可靠的因果性。',
    retort: '狐狸和老虎一起出门，百兽望之奔逃，到底是狐狸厉害还是老虎厉害？',
}, {
    id: 412,
    point: 'Q',
    type: 'diamond',
    view: '好多老中医都很长寿，这还不能说明中医有效？',

    analysis: '此言论是统计学上所谓「抽样偏差」(sampling bias)的代表，即用来论证某观点的例证都是经过有意选择的正面（或负面）样本。在科学上，只有通过随机抽样的方法，才能克服这种有意无意选择同质化样本的问题。',
    retort: '你统计过所有中医的寿命？还有好多中医不长寿你怎么不说？',
}, {
    id: 413,
    point: 'K',
    type: 'diamond',
    view: '我邻居的小姨子的同学的老板的爱人得了癌症，放疗几轮都没好，吃了老中医一服药就好了！',

    analysis: '有些用来替中医辩护的个例，已经到了近乎荒谬的地步；用这种个例来说事，相当于神学上所谓「诉诸神迹」(argument from miracles)。在循证医学看来，所有这些真伪莫辩的流言，在证据等级金字塔中都位于最不值得重视的最底层。',
    retort: '治好癌症算什么！我网友的大伯子的战友的女儿的男朋友是秃头，中医也一直治不好，去佛寺里烧了回香，现在不秃了，长出了跟佛祖一样的卷毛呢！',
}, ]
