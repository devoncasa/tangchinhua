import { products } from '../services/data';
import type { Language } from '../types';

export const languages: Language[] = ['th', 'en', 'zh'];
export const text = (th: string, en: string, zh: string) => ({ th, en, zh });
export const brand = 'Tang Chin Hua';
export const facebook = 'https://www.facebook.com/share/17uHexPnGD/?mibextid=wwXIfr';
export const messenger = 'https://m.me/61595668643961';
export const offerSource = 'https://www.facebook.com/photo.php?fbid=122094314373522288';
export const localePath = (lang: Language, path: string) => lang === 'th' ? path : path === '/' ? '/' + lang + '/' : '/' + lang + path;

export const offers = [
  {
    id: 'groom', price: 5900, image: 'engagement',
    name: text('ชุดฝ่ายเจ้าบ่าว', 'Groom’s family set', '男方礼套装'),
    summary: text('ส้มเช้งติดซังฮี้และขนมจันอับ จัดเป็นชุดสำหรับฝ่ายเจ้าบ่าว', 'Double Happiness oranges and traditional sweets for the groom’s family.', '为男方准备的贴双喜橙子和传统糖果。'),
    items: [
      text('ส้มเช้งติดซังฮี้ 48 ลูก', '48 oranges with Double Happiness stickers', '贴双喜字的橙子 48 个'),
      text('ขนมจันอับ 4 กิโลกรัม แบ่ง 2 ห่อ', '4 kg of traditional sweets in two packs', '传统糖果 4 公斤，分为两包'),
    ],
  },
  {
    id: 'bride', price: 11900, image: 'wedding',
    name: text('ชุดฝ่ายเจ้าสาว', 'Bride’s family set', '女方礼套装'),
    summary: text('ผลไม้ ขนม และของใช้ในพิธีสำหรับฝ่ายเจ้าสาว รวมไว้ให้เทียบรายการได้ง่าย', 'Fruit, sweets and ceremony accessories for the bride’s family.', '女方准备的水果、传统糖果和仪式用品。'),
    items: [
      text('ส้มเช้งติดซังฮี้ 48 ลูก', '48 oranges with Double Happiness stickers', '贴双喜字的橙子 48 个'),
      text('ขนมจันอับ 4 กิโลกรัม แบ่ง 2 ห่อ', '4 kg of traditional sweets in two packs', '传统糖果 4 公斤，分为两包'),
      text('กล้วยหอม 1 เครือ', 'One bunch of bananas', '香蕉一串'),
      text('ต้นชุงเจ้าห่อน้ำตาลทรายแดง 1 คู่', 'One pair of chung chao plants wrapped with brown sugar', '一对附红糖的吉祥植物（ชุงเจ้า）'),
      text('เอี๊ยมครบชุดพร้อมปิ่น', 'Ceremonial apron set with hairpin', '仪式围兜套装，附发簪'),
      text('ตู้เซฟ', 'Safe box', '保险箱'),
      text('พัดพร้อมผ้าเช็ดหน้า', 'Fan with handkerchief', '扇子及手帕'),
      text('ตะเกียงพร้อมถ่านใหญ่ 3 ก้อน', 'Lamp with three large pieces of charcoal', '礼灯，附三块大炭'),
    ],
  },
] as const;
export const pairPrice = 17400;
export const regularPairPrice = offers.reduce((sum, offer) => sum + offer.price, 0);

export const collections = [
  { id:'engagement', image:'engagement', name:text('ของหมั้นจีน','Engagement essentials','订婚礼品'), intro:text('ของมงคลสำหรับพิธีหมั้นและการแลกของระหว่างสองครอบครัว','Betrothal gifts and objects for the exchange between families.','两家交换聘礼所用的吉祥物品。'), groups:['guodali'] },
  { id:'tea', image:'tea', name:text('ของใช้พิธียกน้ำชา','Tea ceremony','敬茶用品'), intro:text('เลือกอุปกรณ์สำหรับจัดโต๊ะและเสิร์ฟน้ำชาในพิธี','Objects for setting the table and serving tea during the ceremony.','布置茶桌和仪式敬茶所需用品。'), groups:['tea'] },
  { id:'wedding', image:'wedding', name:text('ของใช้พิธีแต่งงาน','Wedding ceremony','婚礼用品'), intro:text('สำรวจเครื่องแต่งกาย ผ้า ของประดับ และของใช้ตามพิธีของครอบครัว','Explore attire, textiles, decoration and family ceremony accessories.','浏览礼服、织物、装饰及家庭仪式用品。'), groups:['bride','groom','acc','bed','decor','service'] },
] as const;

export const articles = [
  {
    slug:'engagement-checklist', image:'engagement', category:text('เช็กลิสต์','Checklist','清单'), time:4,
    title:text('เตรียมของหมั้นจีน เริ่มจากฝั่งไหนก่อน','A practical Chinese engagement checklist','中式订婚礼品准备清单'),
    intro:text('แยกรายการของทั้งสองฝ่าย แล้วค่อยเทียบกับธรรมเนียมที่บ้านคุณใช้','Start with two separate lists and check both against your family’s customs.','先分别列出双方物品，再与家中长辈确认习俗。'),
    sections:[
      [text('คุยกับผู้ใหญ่ทั้งสองบ้าน','Speak to both families','和双方长辈商量'),text('ถามว่าใครเตรียมของชิ้นใด ต้องจัดเป็นคู่ไหม และชิ้นไหนจะส่งคืนหลังรับของ จดคำเรียกตามที่บ้านใช้ไว้ในรายการเดียวกัน จะได้คุยกับร้านโดยไม่สับสน','Confirm who prepares each item, whether pairs are needed and what will be returned. Record the names each family uses in a single list.','确认每样物品由谁准备、是否成双，以及哪些需要回礼。把两家使用的称呼记在同一份清单上。')],
      [text('แยกของสดออกจากของที่เก็บได้','Plan fresh items separately','生鲜单独安排'),text('ทำเครื่องหมายผลไม้และขนมที่ต้องใช้วันงาน ขอให้ร้านยืนยันวันรับของก่อนนัดคนจัดโต๊ะ และตรวจจำนวนกับรายการเมื่อได้รับชุด','Mark fruit and sweets separately. Confirm collection or delivery with the shop before scheduling setup, and count items against your list on receipt.','将水果和糕点单列。布置前先与商家确认取货或送货时间，收货时按清单核对。')],
    ], related:'/packages',
  },
  {
    slug:'tea-table', image:'tea', category:text('เคล็ดลับ','Practical tips','实用提示'), time:3,
    title:text('จัดโต๊ะยกน้ำชาให้หยิบใช้สะดวก','Set up an easy-to-use tea table','如何布置便于操作的敬茶桌'),
    intro:text('จัดทางเดินและตำแหน่งถ้วยก่อนเติมรายละเอียดตกแต่ง','Plan the serving route and cup positions before adding decorations.','先安排敬茶动线和茶杯位置，再布置装饰。'),
    sections:[
      [text('ลองวางตำแหน่งเหมือนวันจริง','Rehearse the layout','预演桌面布置'),text('ใช้ถาดที่ยกได้มั่นคง แยกจุดวางถ้วยสะอาดกับถ้วยที่ใช้แล้ว และเตรียมผ้ารองไว้ให้คนช่วยหยิบได้ทันที ลองเดินจากจุดเตรียมชาไปถึงที่นั่งผู้ใหญ่ก่อนงาน','Choose a stable tray and separate clean and used cups. Keep a cloth within reach and rehearse the route from preparation to the elders’ seats.','选稳固的茶盘，区分洁净和用过的杯子。手边备好布巾，提前走一遍从备茶处到长辈座位的路线。')],
      [text('ยืนยันลำดับกับเจ้าภาพ','Confirm the serving order','确认敬茶顺序'),text('ถามคนดูแลงานว่าควรเชิญผู้ใหญ่ตามลำดับใดและจะพักเติมชาตรงไหน ให้คนถือถาดและคนคอยเรียกคิวใช้รายการเดียวกัน','Ask the family coordinator about order and refills. Give the tray helper and the person calling names the same sequence.','和负责协调的家人确认顺序及续茶方式，让端茶者和叫号者使用同一份顺序表。')],
    ], related:'/shop/tea',
  },
  {
    slug:'double-happiness', image:'wedding', category:text('เรื่องเล่า','Stories','故事'), time:3,
    title:text('ซังฮี้ 囍 จากตัวอักษรสู่ของใช้วันแต่ง','The Double Happiness mark on wedding objects','从双喜字到婚礼用品'),
    intro:text('เห็นได้ทั้งบนผลไม้ ซอง และถาด ลองเลือกตำแหน่งที่ช่วยให้ภาพรวมของงานดูเป็นอันหนึ่งอันเดียวกัน','You’ll see it on fruit, packets and trays. A few deliberate placements can tie the table together.','从水果、礼封到托盘都可见双喜字。选几处布置即可让桌面更协调。'),
    sections:[
      [text('อ่านสัญลักษณ์จากบริบท','Read the mark in context','从场合看双喜字'),text('ซังฮี้ใช้สื่อความยินดีในงานแต่งงานจีน ในชุดที่ร้านโพสต์ ส้มเช้งติดซังฮี้ทุกลูก จึงเป็นรายละเอียดเล็กที่เชื่อมผลไม้เข้ากับภาพรวมของโต๊ะพิธี','Double Happiness conveys celebration at Chinese weddings. In the shop’s posted sets, each orange carries the mark, linking the fruit visually with the ceremony table.','双喜字表达中式婚礼的喜庆。商家发布的套装中，每个橙子都贴有双喜字，使水果和仪式桌更协调。')],
      [text('เลือกจุดเด่นเพียงสองสามจุด','Choose a few focal points','只选几个视觉重点'),text('ถ้าถาดหรือผ้าปูมีลายใหญ่ ให้เว้นพื้นที่ว่างรอบลายนั้นแล้วจัดของชิ้นเล็กไว้ข้างกัน จะเห็นรายละเอียดชัดและหยิบใช้ระหว่างพิธีง่ายขึ้น','If the tray or textile already has a large motif, leave room around it. Group smaller pieces to keep details visible and accessible.','托盘或织物若已有大图案，可在周围留白，将小物集中摆放，方便取用，也能看清细节。')],
    ], related:'/shop/wedding',
  },
  {
    slug:'ordering-timeline', image:'story', category:text('เคล็ดลับ','Practical tips','实用提示'), time:3,
    title:text('ก่อนทักสั่งชุด เตรียมข้อมูลอะไรบ้าง','What to prepare before you enquire','咨询前准备哪些信息'),
    intro:text('วันงาน พื้นที่จัดส่ง และชุดที่สนใจ ช่วยให้ร้านตอบได้ตรงกับแผนของคุณ','Your date, delivery area and preferred set help the shop respond to your plans.','提供日期、配送区域及意向套装，可让商家更准确地回复。'),
    sections:[
      [text('บอกวันงานและวันที่สะดวกรับ','Share the event and receiving dates','提供仪式和收货日期'),text('วันรับของอาจเร็วกว่าวันงาน ควรบอกทั้งสองวันและจังหวัดปลายทาง ระบุด้วยว่าจะให้ส่งหรืออยากสอบถามทางเลือกรับของ','Tell the shop both dates and the destination province. Ask about delivery or collection according to your preference.','告知仪式日、希望收货日及目的地府县，并说明希望配送或自取。')],
      [text('ขอให้ร้านยืนยันก่อนตกลง','Confirm details before agreeing','下单前确认细节'),text('ขอรายการและจำนวนของในชุด ยอดรวมพร้อมค่าส่ง เงื่อนไขการชำระ และวิธีแจ้งร้านหากต้องเปลี่ยนวัน เก็บข้อความที่ตกลงไว้เพื่อกลับมาตรวจได้','Confirm quantities, the delivered total, payment terms and the process for a change of date. Save the agreed details for reference.','确认套装数量、含运费总价、付款条件及改期办法，保存双方确认的信息。')],
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
