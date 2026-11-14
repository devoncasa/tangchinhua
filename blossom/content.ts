import { products } from '../services/data';
import type { Language } from '../types';

export const languages: Language[] = ['th', 'en', 'zh'];
export const text = (th: string, en: string, zh: string) => ({ th, en, zh });
export const brand = 'JIA LI';
export const facebook = 'https://www.facebook.com/share/17uHexPnGD/?mibextid=wwXIfr';
export const messenger = 'https://m.me/61595668643961';
export const storePhone = '+66631959922';
export const storePhoneDisplay = '+66 63 195 9922';
export const storeMap = 'https://maps.app.goo.gl/UoZ3mMr8RrrvnuTA6';
export const storeMapEmbed = 'https://maps.google.com/maps?cid=12690941692168187938&output=embed';
export const storeAddress = text(
  '919/1 อาคารจิวเวลรี่เทรดเซ็นเตอร์ ห้อง BB038 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500',
  '919/1 Jewelry Trade Center, Unit BB038, Silom Road, Silom, Bang Rak, Bangkok 10500, Thailand',
  '泰国曼谷挽叻区是隆路 919/1 号 Jewelry Trade Center，BB038 室，邮编 10500',
);
export const offerSource = 'https://www.facebook.com/photo.php?fbid=122094314373522288';
export const promotionOriginal = '/media/engagement-promotion-original.jpg';
export function localePath(lang: Language, path: string) {
  const suffix = path.search(/[?#]/);
  const pathname = suffix === -1 ? path : path.slice(0, suffix);
  const queryOrFragment = suffix === -1 ? '' : path.slice(suffix);
  const trailing = pathname.endsWith('/') ? '' : '/';
  return (lang === 'th' ? '' : '/' + lang) + pathname + trailing + queryOrFragment;
}

export const setQuantities = { oranges: 48, sweetsKg: 4, sweetPacks: 2 };
const { oranges, sweetsKg, sweetPacks } = setQuantities;
const sharedSetItems = [
  text(`ส้มเช้งติดซังฮี้ ${oranges} ลูก`, `${oranges} oranges with Double Happiness stickers`, `${oranges} 个贴双喜字的橙子`),
  text(`ขนมจันอับ ${sweetsKg} กิโลกรัม แบ่ง ${sweetPacks} ห่อ`, `${sweetsKg} kg of traditional sweets in ${sweetPacks} packs`, `泰国华人传统什锦喜糖（ขนมจันอับ）${sweetsKg} 公斤，分装 ${sweetPacks} 包`),
] as const;
export const compareSetsAnswer = text(
  `ทั้งสองชุดมีส้มเช้งติดซังฮี้ ${oranges} ลูกและขนมจันอับ ${sweetsKg} กิโลกรัมเหมือนกัน ชุดฝ่ายเจ้าสาวเพิ่มกล้วยหอมและของใช้ในพิธี`,
  `Both sets include ${oranges} Double Happiness oranges and ${sweetsKg} kg of traditional sweets. The bride’s set adds bananas and ceremony items.`,
  `两套都有 ${oranges} 个贴双喜字的橙子和 ${sweetsKg} 公斤泰国华人传统什锦喜糖。女方套装另外配有香蕉和仪式用品。`,
);

export const offers = [
  {
    id: 'groom', price: 5900, image: 'engagement',
    name: text('ชุดฝ่ายเจ้าบ่าว', 'Groom’s family set', '男方订婚礼品套装'),
    summary: text('ของหมั้นสำหรับฝ่ายเจ้าบ่าว มีส้มเช้งติดซังฮี้ทุกลูกและขนมจันอับ', 'Double Happiness oranges and traditional sweets for the groom’s family.', '男方礼品包括贴双喜字的橙子和泰国华人传统什锦喜糖。'),
    items: sharedSetItems,
  },
  {
    id: 'bride', price: 11900, image: 'wedding',
    name: text('ชุดฝ่ายเจ้าสาว', 'Bride’s family set', '女方订婚礼品套装'),
    summary: text('ของหมั้นสำหรับฝ่ายเจ้าสาว มีส้มเช้งติดซังฮี้ ขนมจันอับ กล้วยหอม และของใช้ในพิธี', 'Fruit, sweets and ceremony accessories for the bride’s family.', '女方礼品包括贴双喜字的橙子、泰国华人传统什锦喜糖、香蕉和仪式用品。'),
    items: [
      ...sharedSetItems,
      text('กล้วยหอม 1 เครือ', 'One bunch of bananas', '一串香蕉'),
      text('ต้นชุงเจ้าห่อน้ำตาลทรายแดง 1 คู่', 'One pair of chung chao plants wrapped with brown sugar', '一对包有红糖的吉祥植物（泰语名：ชุงเจ้า）'),
      text('เอี๊ยมครบชุดพร้อมปิ่น', 'Ceremonial apron set with hairpin', '仪式用围裙套装，配发簪'),
      text('ตู้เซฟ', 'Safe box', '保险箱'),
      text('พัดพร้อมผ้าเช็ดหน้า', 'Fan with handkerchief', '扇子和手帕'),
      text('ตะเกียงพร้อมถ่านใหญ่ 3 ก้อน', 'Lamp with three large pieces of charcoal', '仪式用灯，配三块大木炭'),
    ],
  },
] as const;
export const pairPrice = 17400;
export const regularPairPrice = offers.reduce((sum, offer) => sum + offer.price, 0);

export const collections = [
  { id:'engagement', image:'engagement', name:text('ของหมั้นจีน','Engagement essentials','订婚礼品'), intro:text('ตะกร้าของหมั้น เทียนคู่ และของมงคลสำหรับวันที่ทั้งสองบ้านนัดส่งมอบของหมั้น','Betrothal gifts and objects for the exchange between families.','聘礼篮、龙凤喜烛和吉祥饰品，按两家习俗准备过大礼。'), groups:['guodali'] },
  { id:'tea', image:'tea', name:text('ของใช้พิธียกน้ำชา','Tea ceremony','敬茶用品'), intro:text('เลือกชุดกาน้ำชา ถ้วยชา และเบาะรองคุกเข่าสำหรับยกน้ำชาให้ผู้ใหญ่','Objects for setting the table and serving tea during the ceremony.','挑选茶壶、茶杯和跪垫，准备婚礼上向长辈敬茶。'), groups:['tea'] },
  { id:'wedding', image:'wedding', name:text('ของใช้พิธีแต่งงาน','Wedding ceremony','婚礼用品'), intro:text('ดูชุดเจ้าบ่าวเจ้าสาว เครื่องประดับ ของตกแต่งงาน และชุดเครื่องนอนสำหรับพิธีปูเตียง','Explore attire, textiles, decoration and family ceremony accessories.','挑选新郎新娘礼服、婚礼配饰、布置用品和安床用床品。'), groups:['bride','groom','acc','bed','decor','service'] },
] as const;

export const ceremonyReference = 'https://www.roots.gov.sg/ich-landing/ich/chinese-weddings';

export const ceremonyChecklist = [
  {
    id:'planning', route:'/blog/ordering-timeline',
    title:text('คุยสู่ขอและเลือกวัน (提亲・择日)','Family proposal and choosing a date','提亲与择日'),
    items:[
      text('วันและเวลาที่ทั้งสองบ้านสะดวก','Dates and times that work for both families','双方家庭都方便的日期与时间'),
      text('รายชื่อผู้ใหญ่และรายการพิธีที่จะจัด','List of elders and ceremonies to include','长辈名单和拟举行的仪式'),
      text('ผลไม้หรือของฝากสำหรับวันไปคุย หากบ้านคุณใช้','Fruit or a visiting gift, if customary','按家中习俗准备的水果或见面礼'),
    ],
  },
  {
    id:'betrothal', route:'/packages',
    title:text('พิธีหมั้นจีน (过大礼)','Betrothal gifts (Guo Da Li)','过大礼'),
    items:[
      text('ตะกร้าหรือถาดใส่ของหมั้น','Gift baskets or trays','聘礼篮或礼盘'),
      text('ผลไม้มงคลและขนม เช่น ส้มเช้งและขนมจันอับ','Auspicious fruit and sweets, such as oranges and traditional sweets','吉祥水果和传统糖果，例如橙子和泰式华人什锦糖果'),
      text('เทียนมังกร–หงส์และซองสินสอด ตามที่ตกลงกัน','Dragon-and-phoenix candles and a betrothal envelope, as agreed','双方商定的龙凤喜烛和礼金红包'),
      text('เครื่องประดับ ชา หรือของมงคลอื่นตามธรรมเนียม','Jewellery, tea or other auspicious gifts according to family custom','按家中习俗准备金饰、茶叶或其他吉祥礼品'),
      text('ของตอบแทนและภาชนะใส่ของกลับ ตามที่ตกลงกัน','Agreed return gifts and containers to carry them','双方商定的回礼及盛装用具'),
    ],
  },
  {
    id:'dowry', route:'/shop/wedding',
    title:text('เตรียมของติดตัวเจ้าสาว (嫁妆)','Bride’s trousseau','准备嫁妆'),
    items:[
      text('ผ้าขนหนูและรองเท้าใส่ในบ้าน','Towels and house slippers','毛巾和家居拖鞋'),
      text('กล่องเข็มด้ายหรือชุดถ้วยชาม ตามที่บ้านใช้','Sewing kit or tableware, according to family custom','按家中习俗准备针线盒或碗具'),
      text('ตะเกียงคู่หรือของมงคลสำหรับห้องหอ หากใช้','Paired lamps or auspicious bedroom items, if customary','按习俗准备一对灯或新房吉祥用品'),
    ],
  },
  {
    id:'bed-setting', route:'/product/bed-001',
    title:text('พิธีปูเตียง (安床)','Preparing the bridal bed (An Chuang)','安床'),
    items:[
      text('ผ้าปูที่นอน','Bed sheet','床单'),
      text('หมอนและปลอกหมอน','Pillows and pillowcases','枕头和枕套'),
      text('ของมงคลที่ครอบครัวเลือกใช้','Auspicious items chosen by the families','按家中习俗选择的吉祥物品'),
    ],
  },
  {
    id:'hair-combing', route:'/traditions',
    title:text('พิธีหวีผมก่อนแต่ง (上头)','Hair-combing ceremony','上头仪式'),
    items:[
      text('หวีและกระจก','Comb and mirror','梳子和镜子'),
      text('ริบบิ้นแดงและซองแดง หากบ้านคุณใช้','Red ribbon and red envelope, if customary','按习俗准备红绳和红包'),
      text('นัดผู้ใหญ่ที่จะทำพิธีและเตรียมคำอวยพร','Arrange who will lead the ceremony and prepare blessings','约好主持仪式的长辈并准备吉祥话'),
    ],
  },
  {
    id:'bride-pickup', route:'/shop/wedding',
    title:text('รับตัวและส่งตัวเจ้าสาว (迎亲・出门)','Bridal pickup and departure','迎亲与出门'),
    items:[
      text('ชุดเจ้าบ่าว เจ้าสาว และเครื่องประดับ','Wedding attire and accessories for both partners','新郎新娘礼服及配饰'),
      text('รถรับเจ้าสาวและเวลานัดหมายของทั้งสองบ้าน','Wedding transport and a schedule agreed by both families','婚车和两家商定的时间表'),
      text('ซองอั่งเปาสำหรับกั้นประตู ร่มแดง หรือพัดแดง หากจัดตามธรรมเนียม','Door-game envelopes, a red umbrella or red fan, if customary','按习俗准备开门红包、红伞或红扇'),
    ],
  },
  {
    id:'family-altar', route:'/traditions',
    title:text('ไหว้บรรพบุรุษ (祭祖)','Paying respects to ancestors','祭祖'),
    items:[
      text('โต๊ะหรือหิ้งบูชาที่ครอบครัวใช้','The family’s altar or offering table','家中惯用的祭拜桌或神台'),
      text('ถ้วยชาและของไหว้ที่บ้านกำหนด','Tea cups and offerings chosen by the family','家人选定的茶杯和供品'),
      text('ธูปหรือเทียน หากครอบครัวใช้','Incense or candles, if customary','按家中习俗准备香或蜡烛'),
    ],
  },
  {
    id:'tea', route:'/shop/tea',
    title:text('พิธียกน้ำชา (敬茶)','Tea ceremony (Jing Cha)','敬茶'),
    items:[
      text('กาน้ำชา ถ้วยชา และถาด','Teapot, cups and tray','茶壶、茶杯和茶盘'),
      text('ชาและน้ำร้อน','Tea and hot water','茶叶和热水'),
      text('เบาะรองคุกเข่า หากครอบครัวใช้','Kneeling cushions, if customary','按家中习俗准备的跪垫'),
      text('รายชื่อผู้ใหญ่ตามลำดับ และซองแดงตามที่ตกลงกัน','Order of elders and red envelopes as agreed','敬茶长辈顺序及商定的红包'),
    ],
  },
  {
    id:'banquet', route:'/traditions',
    title:text('งานเลี้ยงแต่งงาน (喜宴)','Wedding banquet','婚宴'),
    items:[
      text('สถานที่ เมนู และจำนวนโต๊ะ','Venue, menu and table count','场地、菜单和桌数'),
      text('รายชื่อแขก ผังที่นั่ง และกำหนดการ','Guest list, seating plan and schedule','宾客名单、座位表和流程'),
      text('แก้วสำหรับอวยพรและของชำร่วย หากจัดไว้','Toast glasses and wedding favours, if planned','按安排准备敬酒杯和伴手礼'),
    ],
  },
  {
    id:'return-visit', route:'/traditions',
    title:text('เยี่ยมบ้านฝ่ายเจ้าสาวหลังแต่ง (回门)','Post-wedding visit to the bride’s family','婚后回门'),
    items:[
      text('วันนัดที่ทั้งสองบ้านตกลงกัน','A visit date agreed by both families','两家商定的回门日期'),
      text('ผลไม้ ขนม หรือของฝากตามที่ผู้ใหญ่แนะนำ','Fruit, sweets or gifts agreed with the elders','按长辈建议准备水果、糕点或礼品'),
    ],
  },
] as const;

export const ceremonyGuideTitle = text(
  'เช็กลิสต์เตรียมงานแต่งจีน 10 เรื่อง ตั้งแต่วันหมั้นถึงวันกลับไปเยี่ยมบ้านเจ้าสาว',
  'Chinese wedding checklist: 10 topics from betrothal to the return visit',
  '中式婚礼筹备清单：从订婚送礼到婚后回门',
);
export const ceremonyGuideDescription = text(
  'เช็กของแต่งงานจีน 10 หัวข้อ เช่น ของหมั้น ของติดตัวเจ้าสาว เครื่องนอนพิธีปูเตียง ชุดหวีผม ชุดยกน้ำชา และของฝากเยี่ยมบ้านหลังแต่ง',
  'See 10 Chinese wedding checklists covering betrothal gifts, the trousseau, bridal bedding, hair combing, tea service, the banquet and the return visit.',
  '按十个项目整理婚礼所需物品，包括过大礼聘礼、嫁妆、安床床品、上头、敬茶茶具、婚宴及回门礼。',
);

export const articles = [
  {
    slug:'engagement-checklist', image:'engagement', category:text('เช็กลิสต์','Checklist','清单'), time:4,
    title:text('เตรียมของหมั้นจีน ฝ่ายเจ้าบ่าวและเจ้าสาวต้องเตรียมอะไรบ้าง','A practical Chinese engagement checklist','中式订婚礼品清单：男方和女方各准备什么？'),
    intro:text('เริ่มจากแยกของหมั้นฝ่ายเจ้าบ่าวกับฝ่ายเจ้าสาว แล้วคุยกับผู้ใหญ่ทั้งสองบ้านว่าใช้รายการไหนบ้าง','Start with two separate lists and check both against your family’s customs.','先分开列出男方和女方要准备的礼品，再请两家长辈确认各自的习俗。'),
    sections:[
      [text('คุยกับผู้ใหญ่ทั้งสองบ้าน','Speak to both families','和双方长辈商量'),text('ถามให้ชัดว่าบ้านไหนเตรียมอะไร ชิ้นไหนต้องจัดเป็นคู่ และต้องเตรียมของรับไหว้หรือของตอบแทนแยกไหม จดชื่อที่ผู้ใหญ่ใช้ไว้ด้วย จะได้คุยกับร้านตรงกัน','Confirm who prepares each item, whether pairs are needed and what will be returned. Record the names each family uses in a single list.','先问清哪家准备哪样礼品、哪些要成双、女方要不要另外备回礼。把长辈平时用的叫法也记下来，向店家询问时会更清楚。')],
      [text('นัดวันรับผลไม้และขนม','Plan fresh items separately','水果和糕点另约收货时间'),text('แยกผลไม้กับขนมออกจากของที่ซื้อเก็บไว้ได้ คุยกับร้านว่าสะดวกรับของวันไหน พอของมาถึงให้ลองนับทีละรายการก่อนจัดโต๊ะ','Mark fruit and sweets separately. Confirm collection or delivery with the shop before scheduling setup, and count items against your list on receipt.','把水果和糕点单独列出来，提前和店家约好自取或送货时间。拿到后先按清单点数，再摆上礼桌。')],
    ], related:'/packages',
  },
  {
    slug:'tea-table', image:'tea', category:text('เคล็ดลับ','Practical tips','实用提示'), time:3,
    title:text('จัดโต๊ะยกน้ำชาให้หยิบใช้สะดวก','Set up an easy-to-use tea table','婚礼敬茶桌怎么摆才顺手？'),
    intro:text('ลองวางถาดกับถ้วยชาและเดินเสิร์ฟก่อน แล้วค่อยเติมดอกไม้หรือของแต่งโต๊ะ','Plan the serving route and cup positions before adding decorations.','先摆好茶盘和茶杯，走一遍端茶路线，再加花和其他装饰。'),
    sections:[
      [text('ลองวางตำแหน่งเหมือนวันจริง','Rehearse the layout','预演桌面布置'),text('ใช้ถาดที่ยกได้มั่นคง แยกจุดวางถ้วยสะอาดกับถ้วยที่ใช้แล้ว และเตรียมผ้ารองไว้ให้คนช่วยหยิบได้ทันที ลองเดินจากจุดเตรียมชาไปถึงที่นั่งผู้ใหญ่ก่อนงาน','Choose a stable tray and separate clean and used cups. Keep a cloth within reach and rehearse the route from preparation to the elders’ seats.','选稳固的茶盘，区分洁净和用过的杯子。手边备好布巾，提前走一遍从备茶处到长辈座位的路线。')],
      [text('ยืนยันลำดับกับเจ้าภาพ','Confirm the serving order','确认敬茶顺序'),text('ถามคนดูแลงานว่าควรเชิญผู้ใหญ่ตามลำดับใดและจะพักเติมชาตรงไหน ให้คนถือถาดและคนคอยเรียกคิวใช้รายการเดียวกัน','Ask the family coordinator about order and refills. Give the tray helper and the person calling names the same sequence.','和负责婚礼流程的家人确认先敬哪位长辈、在哪里续茶。端茶的人和负责请长辈入座的人用同一份名单。')],
    ], related:'/shop/tea',
  },
  {
    slug:'double-happiness', image:'wedding', category:text('เรื่องเล่า','Stories','故事'), time:3,
    title:text('ซังฮี้ 囍 จากตัวอักษรสู่ของใช้วันแต่ง','The Double Happiness mark on wedding objects','从双喜字到婚礼用品'),
    intro:text('เห็นซังฮี้ได้บนส้มเช้ง ซองอั่งเปา หรือถาดของหมั้น ลองเลือกสักสองสามจุดให้ลายเด่นโดยไม่แน่นโต๊ะ','You’ll see it on fruit, packets and trays. A few deliberate placements can tie the table together.','橙子、红包和礼盘上都能看到双喜字。挑两三处点缀，桌面看起来更清爽。'),
    sections:[
      [text('อ่านสัญลักษณ์จากบริบท','Read the mark in context','从场合看双喜字'),text('ซังฮี้ใช้สื่อความยินดีในงานแต่งงานจีน ในชุดที่ร้านโพสต์ ส้มเช้งติดซังฮี้ทุกลูก จึงเป็นรายละเอียดเล็กที่เชื่อมผลไม้เข้ากับภาพรวมของโต๊ะพิธี','Double Happiness conveys celebration at Chinese weddings. In the shop’s posted sets, each orange carries the mark, linking the fruit visually with the ceremony table.','双喜字表达中式婚礼的喜庆。商家发布的套装中，每个橙子都贴有双喜字，使水果和仪式桌更协调。')],
      [text('เลือกจุดเด่นเพียงสองสามจุด','Choose a few focal points','只选几个视觉重点'),text('ถ้าถาดหรือผ้าปูมีลายใหญ่ ให้เว้นพื้นที่ว่างรอบลายนั้นแล้วจัดของชิ้นเล็กไว้ข้างกัน จะเห็นรายละเอียดชัดและหยิบใช้ระหว่างพิธีง่ายขึ้น','If the tray or textile already has a large motif, leave room around it. Group smaller pieces to keep details visible and accessible.','托盘或织物若已有大图案，可在周围留白，将小物集中摆放，方便取用，也能看清细节。')],
    ], related:'/shop/wedding',
  },
  {
    slug:'ordering-timeline', image:'story', category:text('เคล็ดลับ','Practical tips','实用提示'), time:3,
    title:text('ก่อนทักสั่งชุด เตรียมข้อมูลอะไรบ้าง','What to prepare before you enquire','买订婚礼品前，先和店家确认这几件事'),
    intro:text('ก่อนทักร้าน จดชุดที่สนใจ วันงาน วันที่อยากรับของ และจังหวัดที่จะให้ส่งไว้ จะได้ถามราคาและค่าส่งทีเดียว','Your date, delivery area and preferred set help the shop respond to your plans.','发消息前先记下想买哪套、婚期、希望收货的日期和收货地区，方便一次问清价格和运费。'),
    sections:[
      [text('บอกวันงานและวันที่สะดวกรับ','Share the event and receiving dates','提供仪式和收货日期'),text('ถ้าต้องเตรียมโต๊ะล่วงหน้า ให้บอกทั้งวันงานและวันที่อยากได้ของ แจ้งจังหวัดที่จะให้ส่ง หรือถามร้านก่อนว่าสะดวกรับเองได้ไหม','Tell the shop both dates and the destination province. Ask about delivery or collection according to your preference.','如果要提前布置礼桌，请告诉店家婚期和希望收货的日期。需要配送就注明收货城市或地区，想自取也可以先问店家。')],
      [text('ขอให้ร้านยืนยันก่อนตกลง','Confirm details before agreeing','下单前确认细节'),text('ให้ร้านสรุปของในชุดและจำนวน ยอดรวมค่าส่ง วิธีชำระเงิน และวิธีแจ้งถ้าต้องเลื่อนวัน เก็บแชตที่ตกลงกันไว้ เผื่อต้องกลับมาเช็ก','Confirm quantities, the delivered total, payment terms and the process for a change of date. Save the agreed details for reference.','请店家列清套装里的物品和数量，再核对含运费总价、付款方式和改期办法。保留确认过的聊天记录，方便回查。')],
    ], related:'/contact',
  },
] as const;

export const paths = [
  '/', '/packages', ...offers.map(offer => '/packages/' + offer.id), '/shop',
  ...collections.map(collection => '/shop/' + collection.id),
  ...products.map(product => '/product/' + product.id),
  '/traditions', '/blog', ...articles.map(article => '/blog/' + article.slug),
  '/about', '/faq', '/contact', '/cart',
];
