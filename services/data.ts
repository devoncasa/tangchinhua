import { type Product, type CulturalTip, type BlogEntry, type HeroPreset, type Tradition, type ChecklistItem, type FaqItem } from '../types';

export const backgroundImages = [
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.32.webp',
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp',
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.40.webp',
];

const pImgs = [
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.40.webp',
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.32.webp',
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/Screenshot+2568-10-13+at+15.54.53.webp',
  'https://cdn.jsdelivr.net/gh/devoncasa/tangchinhua-assets@main/tangchinhua-logo-sml.png', // Placeholder
];

export const products: Product[] = [
  // หมวดที่ 1: ชุดสำหรับเจ้าสาว (Bride's Attire)
  {
    id: 'bride-001',
    name: { en: 'Qun Kwa - King Kwa (100% Embroidery)', th: 'ชุดฉวินขว้า - King Kwa (ปัก 100%)', zh: '裙褂 - 褂皇 (100%刺绣)' },
    price: 150000,
    imageUrls: [pImgs[0], pImgs[1], pImgs[2]],
    description: { 
      en: 'The undisputed pinnacle of bridal opulence, the King Kwa is a wearable masterpiece of dynastic artistry. This gown is entirely enveloped in a dense tapestry of 100% hand-stitched gold and silver thread, so thick that the auspicious red silk beneath is barely visible. Every inch depicts a vibrant scene of sovereign dragons and regal phoenixes, a powerful blessing of eternal union and prosperity. It is not merely a dress, but a royal decree of love, a tangible piece of cultural heritage, and a family heirloom in the making.', 
      th: 'ที่สุดแห่งความหรูหราสำหรับเจ้าสาว, ชุด \'King Kwa\' คือผลงานศิลปะชิ้นเอกแห่งราชวงศ์ที่สวมใส่ได้จริง ชุดนี้ถูกห่อหุ้มด้วยพรมลายปักดิ้นทองและเงินแท้ด้วยมือที่หนาแน่นเต็มพื้นที่ 100% จนแทบมองไม่เห็นผ้าไหมสีแดงมงคลเบื้องล่าง ทุกตารางนิ้วบอกเล่าเรื่องราวอันมีชีวิตชีวาของมังกรผู้ยิ่งใหญ่และหงส์ผู้สง่างาม เป็นคำอวยพรอันทรงพลังถึงการครองคู่ที่ยั่งยืนและความเจริญรุ่งเรือง นี่ไม่ใช่เพียงอาภรณ์ แต่คือราชโองการแห่งความรัก มรดกทางวัฒนธรรมที่จับต้องได้ และสมบัติล้ำค่าของตระกูลที่กำลังจะถือกำเนิด', 
      zh: '作为新娘华服无可争议的巅峰之作，“褂皇”是一件可穿戴的王朝艺术杰作。此嫁衣完全被一层厚密的100%手工金银线织锦所覆盖，其密度之高，几乎看不见底下吉祥的红丝绸。每一寸都描绘着帝王之龙与高贵之凤的生动景象，是对永恒结合与繁荣昌盛的强有力祝福。它不仅是一件礼服，更是一道爱的皇室谕旨，一件可触摸的文化遗产，以及一件未来的传家之宝。' 
    },
    specifications: { color: { en: 'Gold', th: 'ทอง', zh: '金色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Dragon & Phoenix', th: 'มังกรและหงส์', zh: '龙凤' }, era: { en: 'Qing', th: 'ราชวงศ์ชิง', zh: '清代' } },
    sizes: ['S', 'M', 'L'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-08'],
    reviews: [
      { id: 'r001', author: 'The Chen Family', rating: 5, date: '2024-07-15', comment: { en: 'Absolutely breathtaking. The craftsmanship is beyond words. It made my daughter\'s wedding day truly royal. A true heirloom piece.', th: 'งดงามจนแทบลืมหายใจ ฝีมือการปักเหนือคำบรรยาย ทำให้วันแต่งงานของลูกสาวดูสูงค่าดั่งราชวงศ์ เป็นมรดกที่แท้จริง', zh: '简直令人叹为观止。工艺水平无法用言语形容。它让我女儿的婚礼真正具有皇家气派。一件真正的传家之宝。' } },
      { id: 'r002', author: 'Li Wei', rating: 5, date: '2024-06-20', comment: { en: 'The most beautiful dress I have ever worn. I felt like an empress. The team at Tang Chin Hua were so helpful.', th: 'เป็นชุดที่สวยที่สุดที่เคยใส่มา รู้สึกเหมือนเป็นจักรพรรดินีเลย ทีมงานที่ตั้งจิ้นฮั้วให้ความช่วยเหลือดีมาก', zh: '这是我穿过的最美的裙子。我感觉自己像个皇后。Tang Chin Hua的团队非常乐于助人。' } },
    ]
  },
  {
    id: 'bride-002',
    name: { en: 'Qun Kwa - Queen Kwa (90% Embroidery)', th: 'ชุดฉวินขว้า - Queen Kwa (ปัก 90%)', zh: '裙褂 - 褂后 (90%刺绣)' },
    price: 98000,
    imageUrls: [pImgs[2], pImgs[0]],
    description: { 
      en: 'Radiate regal elegance with the Queen Kwa, a gown that exudes majesty. This exquisite garment features a dense 90% coverage of shimmering gold and silver embroidery, creating a breathtaking dialogue between the vibrant crimson silk and the metallic threads. The design allows the auspicious red to peek through, symbolizing luck that cannot be contained. It embodies grace and high honor, perfect for the bride who commands admiration and respect.', 
      th: 'เปล่งประกายความสง่างามดุจราชินีด้วยชุด \'Queen Kwa\' อาภรณ์ที่เปี่ยมด้วยความสูงศักดิ์ ชุดอันวิจิตรงดงามนี้โดดเด่นด้วยลายปักดิ้นทองและเงินที่ส่องประกายระยิบระยับ หนาแน่นถึง 90% สร้างบทสนทนาอันน่าทึ่งระหว่างผ้าไหมสีแดงสดและเส้นดิ้นโลหะ การออกแบบที่เผยให้เห็นสีแดงมงคลลอดผ่าน เป็นสัญลักษณ์แห่งโชคลาภที่ไม่อาจเก็บงำไว้ได้ เป็นตัวแทนของความสง่างามและเกียรติยศอันสูงส่ง เหมาะสำหรับเจ้าสาวผู้เป็นที่น่าชื่นชมและเคารพ', 
      zh: '以“褂后”散发皇室的优雅，这件嫁衣散发着庄严的气息。这款精致的礼服拥有密集的90%闪亮金银线绣花覆盖，在鲜艳的绯红丝绸与金属线之间创造出令人叹为观止的对话。设计让吉祥的红色得以展露，象征着无法被掩盖的幸运。它体现了高雅与尊贵，非常适合备受钦佩和尊重的新娘。' 
    },
    specifications: { color: { en: 'Red & Gold', th: 'แดงและทอง', zh: '红金色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Dragon & Phoenix', th: 'มังกรและหงส์', zh: '龙凤' }, era: { en: 'Qing', th: 'ราชวงศ์ชิง', zh: '清代' } },
    sizes: ['S', 'M', 'L'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-08'],
  },
  {
    id: 'bride-003',
    name: { en: 'Qun Kwa - Da Wu Fu (80%)', th: 'ชุดฉวินขว้า - Da Wu Fu (80%)', zh: '裙褂 - 大五福 (80%)' },
    price: 75000,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'The Da Wu Fu, or "Great Five Fortunes," captures the essence of a joyous and complete life. With 80% of its surface richly adorned with intricate embroidery, this gown creates a vibrant contrast, allowing the auspicious red silk to radiate warmth and vitality. It\'s a wearable blessing, invoking the five great fortunes—longevity, wealth, health, virtue, and a peaceful passing—for the bride\'s new journey.', 
      th: 'ชุด \'Da Wu Fu\' หรือ \'ห้ามหามงคล\' สะท้อนแก่นแท้ของชีวิตที่เปี่ยมสุขและสมบูรณ์ ด้วยพื้นที่ปักลายอันหรูหราถึง 80% ทำให้ผ้าไหมสีแดงมงคลเปล่งประกายความอบอุ่นและมีชีวิตชีวา สร้างความตัดกันที่งดงาม นี่คือคำอวยพรที่สวมใส่ได้ ซึ่งอัญเชิญมหามงคลทั้งห้าประการ—อายุยืน, ความมั่งคั่ง, สุขภาพ, คุณธรรม และการจากไปอย่างสงบ—สำหรับการเดินทางครั้งใหม่ของเจ้าสาว', 
      zh: '“大五福”捕捉了喜悦和圆满生活的精髓。其表面80%饰有丰富的复杂刺绣，这款嫁衣创造了生动的对比，让吉祥的红丝绸散发出温暖和活力。这是一种可穿戴的祝福，为新娘的新旅程祈求五大福气——长寿、富贵、康宁、好德和善终。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Floral', th: 'ดอกไม้', zh: '花卉' }, era: { en: 'Qing', th: 'ราชวงศ์ชิง', zh: '清代' } },
    sizes: ['S', 'M', 'L', 'XL'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-08'],
  },
  {
    id: 'bride-004',
    name: { en: 'Qun Kwa - Zhong Wu Fu (70%)', th: 'ชุดฉวินขว้า - Zhong Wu Fu (70%)', zh: '裙褂 - 中五福 (70%)' },
    price: 60000,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'Embrace classic beauty with the Zhong Wu Fu, a gown that balances artistry and tradition. This piece features 70% embroidery, offering a graceful interplay between detailed, hand-stitched patterns and the rich crimson background. It represents balanced blessings and a life filled with joy, harmony, and enduring love.', 
      th: 'โอบรับความงามคลาสสิกด้วยชุด "Zhong Wu Fu" อาภรณ์ที่ผสมผสานศิลปะและประเพณีอย่างลงตัว ชุดนี้มีลายปัก 70% แสดงถึงการผสมผสานอย่างสง่างามระหว่างลวดลายที่ละเอียดอ่อนซึ่งปักด้วยมือและพื้นหลังสีแดงเข้ม เป็นตัวแทนของพรที่สมดุลและชีวิตที่เต็มไปด้วยความสุข ความปรองดอง และความรักที่ยั่งยืน', 
      zh: '以“中五福”拥抱经典之美，这款嫁衣平衡了艺术性与传统。这件作品有70%的刺绣，在精细的手工刺绣图案和深红色的背景之间展现出优雅的互动。它代表着平衡的祝福和充满欢乐、和谐与持久爱情的生活。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Floral', th: 'ดอกไม้', zh: '花卉' }, era: { en: 'Qing', th: 'ราชวงศ์ชิง', zh: '清代' } },
    sizes: ['S', 'M', 'L', 'XL'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-08'],
  },
  {
    id: 'bride-005',
    name: { en: 'Qun Kwa - Xiao Wu Fu (50%)', th: 'ชุดฉวินขว้า - Xiao Wu Fu (50%)', zh: '裙褂 - 小五福 (50%)' },
    price: 45000,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'The Xiao Wu Fu is a vision of delicate artistry and balanced beauty. With 50% of its surface dedicated to meticulous embroidery, it allows the luxurious red silk to feature prominently, accented by beautifully crafted auspicious symbols. It is perfect for the bride who appreciates understated elegance, where the purity of the silk and the intricacy of the craft share the spotlight.', 
      th: 'ชุด "Xiao Wu Fu" คือภาพสะท้อนของศิลปะอันละเอียดอ่อนและความงามที่สมดุล ด้วยพื้นที่ปักอย่างประณีต 50% ทำให้ผ้าไหมสีแดงหรูหราโดดเด่น เสริมด้วยสัญลักษณ์มงคลที่รังสรรค์ขึ้นอย่างสวยงาม เหมาะสำหรับเจ้าสาวที่ชื่นชอบความสง่างามแบบเรียบง่าย ที่ซึ่งความบริสุทธิ์ของผ้าไหมและความซับซ้อนของงานฝีมือได้เฉิดฉายอย่างเท่าเทียมกัน', 
      zh: '“小五福”是精致艺术与平衡之美的化身。其表面50%致力于精细的刺绣，让奢华的红丝绸突出展示，并点缀着精心制作的吉祥符号。它非常适合欣赏低调优雅的新娘，在这里，丝绸的纯净与工艺的复杂性共同分享聚光灯。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Floral', th: 'ดอกไม้', zh: '花卉' }, era: { en: 'Qing', th: 'ราชวงศ์ชิง', zh: '清代' } },
    sizes: ['S', 'M', 'L', 'XL'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-08'],
  },
  {
    id: 'bride-006',
    name: { en: 'Xiu He Fu', th: 'ชุดซิ่วเหอฝู', zh: '秀禾服' },
    price: 35000,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'The Xiu He Fu offers a different silhouette of traditional grace, favored for its comfortable yet elegant A-line cut. Known for its intricate, often colorful embroidery depicting scenes from nature and folklore, it blesses the couple with a life of natural harmony and growing prosperity. Its graceful drape and less restrictive fit make it ideal for the serene and heartfelt moments of the tea ceremony.', 
      th: 'ชุด "ซิ่วเหอฝู" นำเสนอภาพลักษณ์ของความสง่างามแบบดั้งเดิมในอีกรูปแบบหนึ่ง ซึ่งเป็นที่นิยมจากทรงเอไลน์ที่สวมใส่สบายแต่ยังคงความสง่างาม เป็นที่รู้จักจากลายปักที่ซับซ้อนและมักมีสีสันสดใส ซึ่งบรรยายถึงฉากจากธรรมชาติและนิทานพื้นบ้าน เป็นการอวยพรให้คู่บ่าวสาวมีชีวิตที่กลมเกลียวและเจริญรุ่งเรืองอย่างเป็นธรรมชาติ รูปทรงที่พริ้วไหวและไม่รัดรูปจนเกินไปทำให้เหมาะอย่างยิ่งสำหรับช่วงเวลาที่สงบและเปี่ยมด้วยความรู้สึกในพิธียกน้ำชา', 
      zh: '“秀禾服”提供了另一种传统优雅的轮廓，因其舒适而优雅的A字剪裁而备受青睐。它以其复杂、通常色彩斑斓的刺绣而闻名，描绘自然和民间传说的场景，祝福新人生活自然和谐、日益繁荣。其优雅的垂感和较不束缚的合身性，使其成为宁静而真挚的敬茶仪式的理想选择。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Brocade', th: 'ผ้าโบรเคด', zh: '织锦' }, pattern: { en: 'Various auspicious symbols', th: 'สัญลักษณ์มงคลต่างๆ', zh: '各种吉祥符号' }, era: { en: 'Modern Traditional', th: 'ประยุกต์ร่วมสมัย', zh: '现代传统' } },
    sizes: ['S', 'M', 'L'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-02'],
  },
   {
    id: 'bride-007',
    name: { en: 'Qipao for Tea Ceremony', th: 'กี่เพ้าสำหรับพิธียกน้ำชา', zh: '茶艺旗袍' },
    price: 18000,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'This elegant Qipao is designed with reverence for the sacred tea ceremony. Its classic, figure-flattering silhouette is crafted from rich silk brocade, adorned with delicate peony motifs symbolizing wealth, honor, and romance. It allows for graceful movement while paying the highest respect to family elders, making every bow and gesture a picture of poise.', 
      th: 'กี่เพ้าที่สง่างามชุดนี้ออกแบบมาด้วยความเคารพต่อพิธียกน้ำชาอันศักดิ์สิทธิ์ รูปทรงคลาสสิกที่ขับเน้นสรีระอย่างงดงาม ตัดเย็บจากผ้าไหมโบรเคดเนื้อดี ประดับด้วยลายดอกโบตั๋นอันละเอียดอ่อนอันเป็นสัญลักษณ์ของความมั่งคั่ง เกียรติยศ และความรัก ช่วยให้เคลื่อนไหวได้อย่างสง่างามขณะแสดงความเคารพสูงสุดต่อผู้อาวุโสในครอบครัว ทำให้ทุกการคำนับและท่วงท่าสง่างามดุจภาพวาด', 
      zh: '这款优雅的旗袍专为神圣的敬茶仪式而设计。其经典、修身的轮廓由华丽的织锦缎制成，饰有象征富贵、荣华和浪漫的精致牡丹图案。它让您在向家族长辈致以最崇高敬意的同时，能够优雅地行动，使每一个鞠躬和姿态都如画般优美。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Silk Brocade', th: 'ผ้าไหมโบรเคด', zh: '织锦缎' }, pattern: { en: 'Peony', th: 'ดอกโบตั๋น', zh: '牡丹' }, era: { en: 'Classic', th: 'คลาสสิก', zh: '经典' } },
    sizes: ['S', 'M', 'L', 'XL'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-02'],
  },
  {
    id: 'bride-014',
    name: { en: 'Red Bridal Veil', th: 'ผ้าคลุมหน้าเจ้าสาวสีแดง', zh: '红色新娘面纱' },
    price: 2500,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'Complete your bridal ensemble with this ethereal red veil, a profound symbol of modesty, joy, and protection. It conceals the bride until the most anticipated moment of revelation. Its sheer, high-quality fabric drapes beautifully, adding a layer of romantic mystery and making the final reveal by the groom a truly unforgettable, breathless moment.', 
      th: 'เติมเต็มชุดเจ้าสาวของคุณให้สมบูรณ์แบบด้วยผ้าคลุมหน้าสีแดงอันบอบบางนี้ ซึ่งเป็นสัญลักษณ์อันลึกซึ้งของความสุภาพเรียบร้อย ความสุข และการปกป้อง มันจะซ่อนใบหน้าของเจ้าสาวไว้จนกว่าจะถึงช่วงเวลาแห่งการเปิดเผยที่รอคอยที่สุด เนื้อผ้าคุณภาพสูงที่โปร่งบางทิ้งตัวอย่างสวยงาม ช่วยเพิ่มมิติของความลึกลับแสนโรแมนติก และทำให้ช่วงเวลาที่เจ้าบ่าวเปิดผ้าคลุมเป็นวินาทีที่น่าจดจำจนแทบลืมหายใจ', 
      zh: '用这款飘逸的红盖头来完善您的新娘装扮，它是端庄、喜悦和保护的深刻象征。它将新娘的面容隐藏起来，直到最令人期待的揭晓时刻。其透明、高品质的面料垂感优美，增添了一层浪漫的神秘感，使新郎最终揭晓的那一刻真正令人难忘、屏息。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Tulle', th: 'ผ้าทูล', zh: '薄纱' }, pattern: { en: 'Solid', th: 'สีพื้น', zh: '纯色' }, era: { en: 'Timeless', th: 'อมตะ', zh: '永恒' } },
    sizes: ['One Size'],
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' },
    traditionTags: ['trad-17', 'trad-22'],
  },
  {
    id: 'groom-001',
    name: { en: 'Tang Suit', th: 'ชุดถังจวง', zh: '唐装' },
    price: 15000,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'The groom\'s Tang Suit is a statement of classic sophistication and dignified strength. Crafted from fine, lustrous brocade and featuring the traditional mandarin collar and intricate frog buttons, it is subtly embroidered with symbols of longevity. This garment blesses the groom with a long and prosperous life alongside his bride, presenting a sharp, respectable, and culturally rich image.', 
      th: 'ชุดถังจวงสำหรับเจ้าบ่าวคือความภูมิฐานแบบคลาสสิกและความแข็งแกร่งอย่างสง่างาม ตัดเย็บจากผ้าโบรเคดชั้นดีมันวาว โดดเด่นด้วยคอจีนและกระดุมแบบจีนโบราณที่ประณีต พร้อมปักลายสัญลักษณ์แห่งการมีอายุยืนยาวอย่างละเอียดอ่อน อาภรณ์ชิ้นนี้อวยพรให้เจ้าบ่าวมีชีวิตที่ยืนยาวและเจริญรุ่งเรืองเคียงข้างเจ้าสาวของเขา นำเสนอภาพลักษณ์ที่คมชัด น่าเคารพ และเปี่ยมด้วยวัฒนธรรม', 
      zh: '新郎的唐装是经典精致和庄重力量的宣言。它采用精美、有光泽的织锦制成，具有传统的立领和精致的盘扣，并巧妙地绣有长寿的象征。这件服装祝福新郎与他的新娘共享长寿和繁荣的生活，展现出一种干练、受人尊敬和文化丰富的形象。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Brocade', th: 'ผ้าโบรเคด', zh: '织锦' }, pattern: { en: 'Longevity Symbol', th: 'สัญลักษณ์อายุยืน', zh: '寿字' }, era: { en: 'Classic', th: 'คลาสสิก', zh: '经典' } },
    sizes: ['M', 'L', 'XL', 'XXL'],
    category: { en: 'Groom\'s Attire', th: 'ชุดสำหรับเจ้าบ่าว', zh: '新郎礼服' },
    traditionTags: ['trad-08'],
  },
   {
    id: 'groom-002',
    name: { en: 'Changshan', th: 'ชุดฉางซาน', zh: '长衫' },
    price: 17000,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'The Changshan is the epitome of stately, scholarly elegance for the groom. This traditional full-length gown, crafted from flowing silk that moves with purpose, creates a dignified and respectable silhouette. It is the perfect choice for the most formal moments of the wedding day, reflecting honor, solemnity, and a deep respect for tradition.', 
      th: 'ชุดฉางซานคือที่สุดแห่งความสง่างามภูมิฐานแบบบัณฑิตสำหรับเจ้าบ่าว ชุดยาวเต็มตัวแบบดั้งเดิมนี้ตัดเย็บจากผ้าไหมที่พริ้วไหวอย่างมีเป้าหมาย สร้างรูปทรงที่ดูสง่าและน่าเคารพ เป็นตัวเลือกที่สมบูรณ์แบบสำหรับช่วงเวลาที่เป็นทางการที่สุดของวันแต่งงาน สะท้อนถึงเกียรติยศ ความเคร่งขรึม และความเคารพอย่างลึกซึ้งต่อประเพณี', 
      zh: '长衫是新郎庄重、儒雅的缩影。这款传统的及地长袍由飘逸的丝绸制成，随身体移动，营造出一种端庄而受人尊敬的轮廓。它是婚礼当天最正式时刻的完美选择，体现了荣誉、庄严和对传统的深刻尊重。' 
    },
    specifications: { color: { en: 'Dark Blue', th: 'น้ำเงินเข้ม', zh: '深蓝色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Solid', th: 'สีพื้น', zh: '纯色' }, era: { en: 'Classic', th: 'คลาสสิก', zh: '经典' } },
    sizes: ['M', 'L', 'XL'],
    category: { en: 'Groom\'s Attire', th: 'ชุดสำหรับเจ้าบ่าว', zh: '新郎礼服' },
    traditionTags: ['trad-08'],
  },
  {
    id: 'groom-003',
    name: { en: 'Magua', th: 'เสื้อหม่าขว้า', zh: '马褂' },
    price: 12000,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'Worn over the Changshan, the Magua jacket adds a layer of distinction, formality, and authority. This particular piece, richly adorned with a powerful, coiling dragon embroidery, signifies the groom\'s strength, status, and readiness to protect and provide for his new family. It completes the formal ensemble with a touch of imperial grandeur.', 
      th: 'เสื้อหม่าขว้าที่สวมทับชุดฉางซานช่วยเพิ่มระดับของความโดดเด่น ความเป็นทางการ และอำนาจ เสื้อชิ้นนี้ประดับด้วยลายปักมังกรขดอันทรงพลังอย่างหรูหรา เป็นสัญลักษณ์ถึงความแข็งแกร่ง สถานะ และความพร้อมของเจ้าบ่าวในการปกป้องและดูแลครอบครัวใหม่ของเขา ทำให้ชุดที่เป็นทางการสมบูรณ์แบบด้วยสัมผัสแห่งความยิ่งใหญ่ดุจจักรพรรดิ', 
      zh: '穿在长衫外的马褂夹克增添了一层尊贵、正式和权威感。这件特别的马褂上华丽地饰有强大、盘绕的龙纹刺绣，象征着新郎的力量、地位以及保护和供养新家庭的准备。它以一丝帝王的气派完成了这套正式的装束。' 
    },
    specifications: { color: { en: 'Black', th: 'ดำ', zh: '黑色' }, material: { en: 'Brocade', th: 'ผ้าโบรเคด', zh: '织锦' }, pattern: { en: 'Dragon', th: 'มังกร', zh: '龙' }, era: { en: 'Qing', th: 'ราชวงศ์ชิง', zh: '清代' } },
    sizes: ['M', 'L', 'XL'],
    category: { en: 'Groom\'s Attire', th: 'ชุดสำหรับเจ้าบ่าว', zh: '新郎礼服' },
    traditionTags: ['trad-08'],
  },
  {
    id: 'acc-001',
    name: { en: 'Phoenix Coronet', th: 'มงกุฎหงส์', zh: '凤冠' },
    price: 12500,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'A breathtaking masterpiece of filigree and gems, the Phoenix Coronet is the crowning glory of the bride. Intricately crafted with regal phoenix motifs, shimmering pearls, and vibrant gemstones, it symbolizes the bride\'s transformation into a queen for a day and a cherished wife for a lifetime. This exquisite headpiece represents nobility, unparalleled beauty, and boundless good fortune.', 
      th: 'ผลงานชิ้นเอกอันน่าทึ่งของงานถมและอัญมณี, มงกุฎหงส์คือความรุ่งโรจน์สูงสุดของเจ้าสาว สร้างสรรค์ขึ้นอย่างประณีตด้วยลวดลายหงส์ผู้สูงศักดิ์ ไข่มุกที่ส่องประกาย และอัญมณีสีสันสดใส เป็นสัญลักษณ์ของการเปลี่ยนแปลงของเจ้าสาวสู่การเป็นราชินีในวันสำคัญและภรรยาผู้เป็นที่รักตลอดไป เครื่องประดับศีรษะอันวิจิตรนี้เป็นตัวแทนของความสูงศักดิ์ ความงามที่มิอาจเทียบเทียม และโชคลาภอันไร้ขีดจำกัด', 
      zh: '作为一件令人叹为观止的金银丝和宝石杰作，凤冠是新娘的加冕之荣。它以高贵的凤凰图案、闪亮的珍珠和鲜艳的宝石精心制作，象征着新娘在婚礼当天化身为女王，并成为一生珍爱的妻子。这件精致的头饰代表着高贵、无与伦比的美丽和无限的好运。' 
    },
    specifications: { color: { en: 'Gold', th: 'ทอง', zh: '金色' }, material: { en: 'Gilded Metal', th: 'โลหะชุบทอง', zh: '镀金金属' }, pattern: { en: 'Phoenix', th: 'หงส์', zh: '凤凰' }, era: { en: 'Timeless', th: 'อมตะ', zh: '永恒' } },
    sizes: ['One Size'],
    category: { en: 'Accessories', th: 'เครื่องประดับ', zh: '配饰' },
    reviews: [
        { id: 'r003', author: 'Anya T.', rating: 5, date: '2024-08-01', comment: { en: 'This coronet is fit for royalty. The details are incredible, and it felt substantial without being too heavy. It was the centerpiece of my entire look.', th: 'มงกุฎนี้คู่ควรกับราชวงศ์จริงๆ รายละเอียดน่าทึ่งมาก และให้ความรู้สึกมั่นคงแต่ไม่หนักเกินไป เป็นจุดเด่นของลุคทั้งหมดของฉันเลย', zh: '这顶凤冠堪称皇室之作。细节令人难以置信，戴起来很有分量但又不会太重。它是我整个造型的中心。' } },
    ]
  },
  {
    id: 'acc-002',
    name: { en: 'Auspicious Hairpins', th: 'ปิ่นปักผมลายมงคล', zh: '吉祥发簪' },
    price: 3500,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'These exquisite hairpins are more than just accessories; they are tiny, shimmering vessels of blessings. Each pin is meticulously crafted with auspicious symbols like butterflies for love or peonies for wealth, meant to adorn the bride\'s intricate hairstyle while whispering wishes of happiness, harmony, and good fortune into her life.', 
      th: 'ปิ่นปักผมอันงดงามเหล่านี้เป็นมากกว่าเครื่องประดับ แต่เป็นดั่งภาชนะเล็กๆ ที่ส่องประกายและบรรจุคำอวยพรไว้ ปิ่นแต่ละอันถูกสร้างขึ้นอย่างพิถีพิถันด้วยสัญลักษณ์มงคล เช่น ผีเสื้อสำหรับความรัก หรือดอกโบตั๋นสำหรับความมั่งคั่ง เพื่อประดับทรงผมที่ซับซ้อนของเจ้าสาว พร้อมกระซิบคำอวยพรแห่งความสุข ความปรองดอง และโชคลาภเข้าสู่ชีวิตของเธอ', 
      zh: '这些精致的发簪不仅仅是配饰；它们是微小、闪烁的祝福容器。每支发簪都以吉祥符号精心制作，如象征爱情的蝴蝶或象征富贵的牡丹，旨在装饰新娘复杂的发型，同时为她的生活低声祝福幸福、和谐和好运。' 
    },
    specifications: { color: { en: 'Gold', th: 'ทอง', zh: '金色' }, material: { en: 'Metal', th: 'โลหะ', zh: '金属' }, pattern: { en: 'Various', th: 'หลากหลาย', zh: '各种' }, era: { en: 'Timeless', th: 'อมตะ', zh: '永恒' } },
    sizes: ['One Size'],
    category: { en: 'Accessories', th: 'เครื่องประดับ', zh: '配饰' },
    traditionTags: ['trad-04'],
  },
  {
    id: 'acc-010',
    name: { en: 'Embroidered Round Fan', th: 'พัดกลมปักลาย', zh: '团扇' },
    price: 1800,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'A symbol of togetherness and a complete, happy union, the traditional round fan is an essential bridal accessory radiating grace. This piece, delicately embroidered on sheer silk with a phoenix in flight, adds a touch of modesty and artistry. It is often used to playfully shield the bride\'s face, building anticipation for her reveal.', 
      th: 'พัดกลมแบบดั้งเดิมเป็นสัญลักษณ์ของความสามัคคีและการครองคู่ที่สมบูรณ์และมีความสุข จึงเป็นเครื่องประดับที่ขาดไม่ได้สำหรับเจ้าสาวที่เปล่งประกายความสง่างาม พัดชิ้นนี้ซึ่งปักลายหงส์ที่กำลังโบยบินอย่างประณีตบนผ้าไหมโปร่งบาง ช่วยเพิ่มสัมผัสแห่งความสุภาพเรียบร้อยและศิลปะ และมักใช้เพื่อบังใบหน้าของเจ้าสาวอย่างหยอกล้อ สร้างความตื่นเต้นรอคอยการเปิดเผยโฉมหน้าของเธอ', 
      zh: '作为团圆和美满婚姻的象征，团扇是散发着优雅气息的必备新娘配饰。这件作品在透明的丝绸上精致地绣有凤凰飞舞的图案，增添了一丝端庄和艺术感。它常被用来俏皮地遮挡新娘的面容，为她的亮相营造期待感。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Phoenix', th: 'หงส์', zh: '凤凰' }, era: { en: 'Classic', th: 'คลาสสิก', zh: '经典' } },
    sizes: ['One Size'],
    category: { en: 'Accessories', th: 'เครื่องประดับ', zh: '配饰' },
    traditionTags: ['trad-23'],
  },
  {
    id: 'guodali-001',
    name: { en: 'Betrothal Baskets', th: 'ตะกร้าสินสอด', zh: '聘礼篮' },
    price: 4500,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'These traditional, tiered baskets are the beautiful vessels for the Guo Da Li gifts. Their sturdy, hand-woven bamboo structure symbolizes a strong, unshakeable foundation for the marriage, while their vibrant red color and auspicious embellishments carry wishes for abundant joy and good fortune for both families.', 
      th: 'ตะกร้าแบบชั้นๆ ตามประเพณีเหล่านี้คือภาชนะที่สวยงามสำหรับใส่ของขวัญในพิธีหมั้น (กัวต้าหลี่) โครงสร้างไม้ไผ่ที่แข็งแรงและสานด้วยมือเป็นสัญลักษณ์ของรากฐานที่มั่นคงและไม่สั่นคลอนสำหรับการแต่งงาน ในขณะที่สีแดงสดใสและการตกแต่งที่เป็นมงคลสื่อถึงคำอวยพรแห่งความสุขอันล้นพ้นและโชคดีสำหรับทั้งสองครอบครัว', 
      zh: '这些传统的多层提篮是盛放“过大礼”聘礼的美丽容器。它们坚固的手工编织竹结构象征着婚姻坚实、不可动摇的基础，而其鲜艳的红色和吉祥的装饰则为两个家庭带来丰盛的欢乐和好运的祝愿。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Bamboo', th: 'ไม้ไผ่', zh: '竹子' }, pattern: { en: 'Weave', th: 'สาน', zh: '编织' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['Set of 2'],
    category: { en: 'Guo Da Li Items', th: 'เครื่องใช้ในพิธีหมั้น', zh: '过大礼用品' },
    traditionTags: ['trad-01'],
  },
  {
    id: 'guodali-003',
    name: { en: 'Dragon & Phoenix Candles', th: 'เทียนแดงคู่ลายมังกร-หงส์', zh: '龙凤蜡烛' },
    price: 1200,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'Lit during the engagement ceremony, this ornate pair of candles represents the sacred union of two souls and two families. The coiling dragon symbolizes the groom\'s vitality and strength, while the elegant phoenix represents the bride\'s grace and beauty. Their combined light illuminates a path to a bright, prosperous, and harmonious future.', 
      th: 'เทียนคู่ที่ประดับอย่างวิจิตรนี้จุดในระหว่างพิธีหมั้น เป็นตัวแทนของการรวมกันอันศักดิ์สิทธิ์ของสองจิตวิญญาณและสองครอบครัว มังกรที่ขดตัวเป็นสัญลักษณ์ของความแข็งแกร่งและพลังของเจ้าบ่าว ในขณะที่หงส์ที่สง่างามเป็นตัวแทนของความสง่างามและความงามของเจ้าสาว แสงเทียนที่รวมกันจะส่องสว่างเส้นทางไปสู่อนาคตที่สดใส เจริญรุ่งเรือง และปรองดอง', 
      zh: '在订婚仪式上点燃的这对华丽的蜡烛代表着两个灵魂和两个家庭的神圣结合。盘龙象征着新郎的活力和力量，而优雅的凤凰则代表着新娘的端庄和美丽。它们共同的光芒照亮了通往光明、繁荣与和谐未来的道路。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Wax', th: 'ขี้ผึ้ง', zh: '蜡' }, pattern: { en: 'Dragon & Phoenix', th: 'มังกรและหงส์', zh: '龙凤' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['One Pair'],
    category: { en: 'Guo Da Li Items', th: 'เครื่องใช้ในพิธีหมั้น', zh: '过大礼用品' },
    traditionTags: ['trad-01', 'trad-18'],
  },
  {
    id: 'guodali-012',
    name: { en: 'Si Dian Jin Jewelry Set', th: 'ชุดเครื่องประดับทอง "ซี่เตี๋ยมกิม"', zh: '四点金' },
    price: 250000,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'The ultimate gift of welcome from a mother-in-law, the "Si Dian Jin" is a traditional 4-piece, 24K gold set symbolizing security and acceptance. The four pieces (necklace, ring, bangle, earrings) represent the four corners of a home, a profound promise that the bride will always be cherished, protected, and have an honored place in her new family.', 
      th: 'ของขวัญต้อนรับที่ดีที่สุดจากแม่สามี "ซี่เตี๋ยมกิม" คือชุดเครื่องประดับทอง 24K 4 ชิ้นตามประเพณีที่เป็นสัญลักษณ์ของความมั่นคงและการยอมรับ เครื่องประดับทั้งสี่ชิ้น (สร้อยคอ, แหวน, กำไล, ต่างหู) เป็นตัวแทนของมุมทั้งสี่ของบ้าน เป็นคำมั่นสัญญาอันลึกซึ้งว่าเจ้าสาวจะเป็นที่รัก ได้รับการปกป้อง และมีที่ทางอันทรงเกียรติในครอบครัวใหม่ของเธอเสมอ', 
      zh: '作为婆婆最隆重的欢迎礼物，“四点金”是一套传统的四件套24K黄金首饰，象征着安稳和接纳。这四件首饰（项链、戒指、手镯、耳环）代表着家的四个角落，这是一个深刻的承诺，即新娘将永远被珍爱、被保护，并在她的新家庭中占有尊贵的地位。' 
    },
    specifications: { color: { en: 'Gold', th: 'ทอง', zh: '金色' }, material: { en: '24K Gold', th: 'ทอง 24K', zh: '24K黄金' }, pattern: { en: 'Auspicious', th: 'มงคล', zh: '吉祥' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['N/A'],
    category: { en: 'Guo Da Li Items', th: 'เครื่องใช้ในพิธีหมั้น', zh: '过大礼用品' },
    traditionTags: ['trad-01', 'trad-10', 'trad-25'],
  },
  {
    id: 'tea-001',
    name: { en: 'Auspicious Tea Set', th: 'ชุดถ้วยชามงคลสำหรับพิธียกน้ำชา', zh: '吉祥茶具' },
    price: 3800,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'This beautiful ceramic tea set is designed specifically for the sacred tea ceremony, the heart of the wedding day. Adorned with the "Double Happiness" symbol and other auspicious motifs, each cup poured is a profound gesture of respect to elders and a vessel for the rich blessings they bestow upon the new couple.', 
      th: 'ชุดถ้วยชาเซรามิกที่สวยงามนี้ออกแบบมาโดยเฉพาะสำหรับพิธียกน้ำชาอันศักดิ์สิทธิ์ ซึ่งเป็นหัวใจสำคัญของวันแต่งงาน ประดับด้วยสัญลักษณ์ "ซังฮี้" และลวดลายมงคลอื่นๆ ชาทุกถ้วยที่รินคือการแสดงความเคารพอย่างสุดซึ้งต่อผู้อาวุโส และเป็นภาชนะสำหรับรับพรอันล้ำค่าที่พวกเขามอบให้แก่คู่บ่าวสาว', 
      zh: '这套精美的陶瓷茶具专为神圣的敬茶仪式——婚礼当天的核心环节——而设计。它饰有“双喜”符号和其他吉祥图案，倒出的每一杯茶都是对长辈的深刻敬意，也是承载他们赐予新人的丰厚祝福的容器。' 
    },
    specifications: { color: { en: 'Red & Gold', th: 'แดงและทอง', zh: '红金色' }, material: { en: 'Ceramic', th: 'เซรามิก', zh: '陶瓷' }, pattern: { en: 'Double Happiness', th: 'ซังฮี้', zh: '双喜' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['Set'],
    category: { en: 'Tea Ceremony Items', th: 'เครื่องใช้ในพิธียกน้ำชา', zh: '敬茶仪式用品' },
    traditionTags: ['trad-02'],
    reviews: [
        { id: 'r004', author: 'Somsri', rating: 5, date: '2024-05-10', comment: { en: 'Perfect for our tea ceremony. The quality is excellent and the Double Happiness symbol is very clear and beautiful.', th: 'สมบูรณ์แบบสำหรับพิธียกน้ำชาของเรา คุณภาพยอดเยี่ยมและสัญลักษณ์ซังฮี้ชัดเจนและสวยงามมาก', zh: '非常适合我们的敬茶仪式。质量很好，双喜符号非常清晰漂亮。' } },
        { id: 'r005', author: 'Zhang', rating: 4, date: '2024-04-22', comment: { en: 'Very nice set. A little smaller than I expected, but the colors are vibrant and it looked great in photos.', th: 'ชุดสวยมาก เล็กกว่าที่คิดไว้นิดหน่อย แต่สีสันสดใสและถ่ายรูปออกมาสวยมาก', zh: '非常漂亮的茶具。比我预期的要小一点，但颜色很鲜艳，照片效果很好。' } },
    ]
  },
   {
    id: 'tea-004',
    name: { en: 'Red Kneeling Cushions', th: 'เบาะรองคุกเข่าสีแดง', zh: '红色跪垫' },
    price: 1500,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'Crafted from rich, red brocade and meticulously embroidered with symbols of union like the dragon and phoenix, these cushions provide a place of honor for the couple. Kneeling upon them to serve tea is a profound gesture of humility, gratitude, and reverence towards the elders who have guided them.', 
      th: 'เบาะรองคุกเข่านี้ทำจากผ้าโบรเคดสีแดงเนื้อดีและปักอย่างประณีตด้วยสัญลักษณ์แห่งการรวมเป็นหนึ่งอย่างมังกรและหงส์ เพื่อเป็นที่สำหรับคู่บ่าวสาวแสดงความเคารพ การคุกเข่าบนเบาะเพื่อรินชาเป็นท่าทีที่ลึกซึ้งของความอ่อนน้อม ความกตัญญู และความเคารพยำเกรงต่อผู้อาวุโสที่ได้ชี้แนะพวกเขามา', 
      zh: '这对跪垫由华丽的红色织锦制成，并精心绣有龙凤等结合的象征，为新人提供了一个尊贵的位置。跪在上面敬茶是向引导他们的长辈表达谦逊、感激和崇敬的深刻姿态。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Brocade', th: 'ผ้าโบรเคด', zh: '织锦' }, pattern: { en: 'Dragon & Phoenix', th: 'มังกรและหงส์', zh: '龙凤' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['One Pair'],
    category: { en: 'Tea Ceremony Items', th: 'เครื่องใช้ในพิธียกน้ำชา', zh: '敬茶仪式用品' },
    traditionTags: ['trad-02'],
  },
  {
    id: 'bed-001',
    name: { en: 'Red Auspicious Bedding Set', th: 'ชุดเครื่องนอนใหม่สีแดงปักลายมงคล', zh: '红色吉祥床上用品' },
    price: 8900,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'Prepared for the matrimonial bed during the An Chuang ceremony, this luxurious red silk bedding set is a canvas of blessings for the new couple. It is richly embroidered with symbols of fertility, such as the dragon and phoenix, inviting good fortune and the joyous arrival of many children into the couple\'s new home.', 
      th: 'ชุดเครื่องนอนผ้าไหมสีแดงสุดหรูนี้เตรียมไว้สำหรับเตียงแต่งงานในพิธีอันฉวง เปรียบเสมือนผืนผ้าใบแห่งคำอวยพรสำหรับคู่บ่าวสาว ปักอย่างหรูหราด้วยสัญลักษณ์แห่งความอุดมสมบูรณ์ เช่น มังกรและหงส์ เพื่อเชื้อเชิญโชคลาภและการมาถึงของทายาทตัวน้อยจำนวนมากเข้าสู่บ้านใหม่ของคู่บ่าวสาว', 
      zh: '这套奢华的红色丝绸床上用品是为“安床”仪式中的婚床准备的，它是一幅为新人祝福的画卷。上面华丽地绣有象征生育的符号，如龙凤，为新人的新家招来好运和多子多福的欢乐到来。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Silk', th: 'ผ้าไหม', zh: '丝绸' }, pattern: { en: 'Dragon & Phoenix', th: 'มังกรและหงส์', zh: '龙凤' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['Queen', 'King'],
    category: { en: 'Bed-Setting Items', th: 'เครื่องใช้ในพิธีปูเตียง', zh: '安床用品' },
    traditionTags: ['trad-03'],
  },
  {
    id: 'decor-001',
    name: { en: 'Double Happiness Wall Decor', th: 'ตัวอักษรซังฮี้ (囍) สำหรับติดผนัง', zh: '双喜墙饰' },
    price: 500,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'No Chinese wedding is complete without the "Shuang Xi" or Double Happiness symbol, the most potent emblem of a joyous union. This beautiful felt cutout instantly transforms any space, adorning walls and doors to radiate joy, luck, and the celebration of two families becoming one. It is an essential visual announcement of the happy occasion.', 
      th: 'งานแต่งงานจีนจะสมบูรณ์ไม่ได้หากขาดสัญลักษณ์ "ซังฮี้" หรือ Double Happiness ซึ่งเป็นสัญลักษณ์ที่ทรงพลังที่สุดของการรวมกันอย่างเปี่ยมสุข ตัวอักษรที่ตัดจากผ้าสักหลาดอย่างสวยงามนี้จะเปลี่ยนทุกพื้นที่ในทันที ประดับผนังและประตูเพื่อแผ่กระจายความสุข โชคลาภ และการเฉลิมฉลองที่สองครอบครัวกลายเป็นหนึ่งเดียว เป็นการประกาศข่าวดีที่จำเป็นและมองเห็นได้ชัดเจน', 
      zh: '没有“双喜”符号的中式婚礼是不完整的，它是欢乐结合的最强有力的象征。这个美丽的毛毡剪纸可以立即改变任何空间，装饰墙壁和门以散发喜悦、幸运和庆祝两个家庭合二为一。它是这个喜庆场合必不可少的视觉宣告。' 
    },
    specifications: { color: { en: 'Red', th: 'แดง', zh: '红色' }, material: { en: 'Felt', th: 'ผ้าสักหลาด', zh: '毛毡' }, pattern: { en: 'Double Happiness', th: 'ซังฮี้', zh: '双喜' }, era: { en: 'Traditional', th: 'ดั้งเดิม', zh: '传统' } },
    sizes: ['Various'],
    category: { en: 'Decorations & Stationery', th: 'ของตกแต่งและเครื่องเขียน', zh: '装饰文具' },
    traditionTags: ['trad-09'],
  },
  {
    id: 'service-001',
    name: { en: 'Attire Rental Service', th: 'บริการให้เช่าชุด', zh: '礼服租赁服务' },
    price: 5000,
    imageUrls: [pImgs[2]],
    description: { 
      en: 'Experience the full splendor of tradition without the commitment of a purchase. Our rental service offers a curated selection of our finest Qun Kwas, Tang Suits, and ceremonial attire, all professionally maintained. This is the perfect option for capturing timeless photos and honoring your heritage with authenticity and grace. (Price is a starting deposit.)', 
      th: 'สัมผัสความงดงามของประเพณีอย่างเต็มรูปแบบโดยไม่ต้องผูกมัดกับการซื้อ บริการให้เช่าของเรามีชุดคุนขวา, ชุดถังจวง และชุดพิธีการที่ดีที่สุดให้เลือกสรร ซึ่งทั้งหมดได้รับการดูแลอย่างมืออาชีพ นี่คือตัวเลือกที่สมบูรณ์แบบสำหรับการถ่ายภาพที่เหนือกาลเวลาและให้เกียรติมรดกของคุณอย่างแท้จริงและสง่างาม (ราคาเป็นเพียงค่ามัดจำเริ่มต้น)', 
      zh: '体验传统的全部辉煌，而无需购买。我们的租赁服务提供精选的最佳裙褂、唐装和仪式礼服，全部经过专业维护。对于希望以真实和优雅的方式拍摄永恒照片并尊重传统的夫妇来说，这是完美的选择。（价格为起始押金。）' 
    },
    specifications: { color: { en: 'N/A', th: 'ไม่มี', zh: '无' }, material: { en: 'N/A', th: 'ไม่มี', zh: '无' }, pattern: { en: 'N/A', th: 'ไม่มี', zh: '无' }, era: { en: 'N/A', th: 'ไม่มี', zh: '无' } },
    sizes: ['N/A'],
    category: { en: 'Additional Services', th: 'บริการเสริม', zh: '附加服务' }
  },
  {
    id: 'service-002',
    name: { en: 'Custom Tailoring Service', th: 'บริการสั่งตัดชุดตามขนาด', zh: '定制服务' },
    price: 30000,
    imageUrls: [pImgs[0]],
    description: { 
      en: 'For a truly perfect and personal fit, our master tailors offer a bespoke custom tailoring service. We collaborate with you to create a one-of-a-kind garment that not only honors tradition but also perfectly matches your measurements and personal style, ensuring your wedding attire is as unique as your love story. (Price is a starting point.)', 
      th: 'เพื่อความพอดีที่สมบูรณ์แบบและเป็นส่วนตัวอย่างแท้จริง ช่างตัดเย็บผู้ชำนาญของเรามีบริการสั่งตัดตามความต้องการ เราจะทำงานร่วมกับคุณเพื่อสร้างสรรค์อาภรณ์ที่ไม่เหมือนใคร ซึ่งไม่เพียงแต่ให้เกียรติประเพณี แต่ยังเข้ากับสัดส่วนและสไตล์ส่วนตัวของคุณอย่างสมบูรณ์แบบ ทำให้มั่นใจได้ว่าชุดแต่งงานของคุณจะมีเอกลักษณ์เช่นเดียวกับเรื่องราวความรักของคุณ (ราคาเป็นเพียงราคาเริ่มต้น)', 
      zh: '为了真正完美和个性化的合身，我们的裁缝大师提供定制服务。我们与您合作，创造一件独一无二的服装，它不仅尊重传统，而且完美匹配您的尺寸和个人风格，确保您的婚礼礼服像您的爱情故事一样独一无二。（价格为起步价。）' 
    },
    specifications: { color: { en: 'N/A', th: 'ไม่มี', zh: '无' }, material: { en: 'N/A', th: 'ไม่มี', zh: '无' }, pattern: { en: 'N/A', th: 'ไม่มี', zh: '无' }, era: { en: 'N/A', th: 'ไม่มี', zh: '无' } },
    sizes: ['Custom'],
    category: { en: 'Additional Services', th: 'บริการเสริม', zh: '附加服务' }
  },
  {
    id: 'service-004',
    name: { en: 'Ceremonial Consultation', th: 'บริการให้คำปรึกษาด้านพิธีการ', zh: '仪式咨询服务' },
    price: 3000,
    imageUrls: [pImgs[1]],
    description: { 
      en: 'Navigating the beautiful complexities of a traditional Chinese wedding can be daunting. Allow our seasoned experts to be your guide. We offer personalized consultations to ensure every ritual, from Guo Da Li to the tea ceremony, is performed with deep meaning, cultural respect, and authenticity, tailored to your family\'s specific customs.', 
      th: 'การทำความเข้าใจความซับซ้อนที่สวยงามของงานแต่งงานจีนแบบดั้งเดิมอาจเป็นเรื่องท้าทาย ให้ผู้เชี่ยวชาญที่ช่ำชองของเราเป็นผู้นำทางของคุณ เรามีบริการให้คำปรึกษาส่วนบุคคลเพื่อให้แน่ใจว่าทุกพิธีกรรม ตั้งแต่กัวต้าหลี่ไปจนถึงพิธียกน้ำชา จะดำเนินไปอย่างมีความหมายลึกซึ้ง เคารพในวัฒนธรรม และถูกต้องตามประเพณี โดยปรับให้เข้ากับธรรมเนียมเฉพาะของครอบครัวคุณ', 
      zh: '应对传统中式婚礼的美丽复杂性可能令人望而生畏。让我们经验丰富的专家成为您的向导。我们提供个性化咨询，以确保从过大礼到敬茶仪式的每一个仪式都充满深刻的意义、文化尊重和真实性，并根据您家庭的具体习俗量身定制。' 
    },
    specifications: { color: { en: 'N/A', th: 'ไม่มี', zh: '无' }, material: { en: 'N/A', th: 'ไม่มี', zh: '无' }, pattern: { en: 'N/A', th: 'ไม่มี', zh: '无' }, era: { en: 'N/A', th: 'ไม่มี', zh: '无' } },
    sizes: ['N/A'],
    category: { en: 'Additional Services', th: 'บริการเสริม', zh: '附加服务' }
  }
];


export const culturalTips: CulturalTip[] = [
    { id: 1, tip: { en: 'The dragon and phoenix embroidery on wedding attire symbolizes the perfect union of yin and yang.', th: 'ลายปักมังกรและหงส์บนชุดแต่งงานเป็นสัญลักษณ์ของการผสมผสานที่ลงตัวระหว่างหยินและหยาง', zh: '婚庆服饰上的龙凤刺绣象征着阴阳的完美结合。' }, sourceDynasty: { en: 'Ming Dynasty', th: 'ราชวงศ์หมิง', zh: '明朝' } },
    { id: 2, tip: { en: 'Red is the color of luck, joy, and happiness in Chinese culture, making it the predominant color for weddings.', th: 'สีแดงเป็นสีแห่งโชคลาภ ความสุข และความปิติในวัฒนธรรมจีน จึงเป็นสีหลักสำหรับงานแต่งงาน', zh: '红色在中国文化中是幸运、欢乐和幸福的颜色，因此成为婚礼的主色调。' }, sourceDynasty: { en: 'Ancient Tradition', th: 'ประเพณีโบราณ', zh: '古代传统' } },
    { id: 3, tip: { en: 'A "Qun Kwa" is traditionally passed down through generations, carrying the blessings of the family.', th: 'โดยปกติแล้ว "คุนขวา" จะถูกส่งต่อจากรุ่นสู่รุ่น เพื่อส่งต่อพรของครอบครัว', zh: '“裙褂”传统上是代代相传的，承载着家族的祝福。' }, sourceDynasty: { en: 'Qing Dynasty', th: 'ราชวงศ์ชิง', zh: '清朝' } }
];

export const blogEntries: BlogEntry[] = [
    {
        id: 1,
        title: {
            th: "มังกรและหงส์: สัญลักษณ์คู่สุดยอดในพิธีแต่งงานจีน",
            en: "The Dragon & Phoenix: The Ultimate Symbol in Chinese Weddings",
            zh: "龙凤呈祥：中华婚礼中的至尊图腾"
        },
        content: {
            th: "ในวัฒนธรรมจีน มังกร (龍) เป็นตัวแทนของอำนาจ ความแข็งแกร่ง และโชคลาภสำหรับฝ่ายชาย ในขณะที่หงส์ (鳳) เป็นสัญลักษณ์ของความงาม ความสง่างาม และความโชคดีสำหรับฝ่ายหญิง เมื่ออยู่คู่กัน ทั้งสองจึงเป็นตัวแทนของการสมรสที่สมบูรณ์แบบ เป็นการผสมผสานระหว่างหยินและหยางที่ลงตัวที่สุด การปรากฏของลายปักมังกรและหงส์บนชุดแต่งงานจึงเป็นการอวยพรให้คู่บ่าวสาวมีชีวิตคู่ที่เปี่ยมสุข มีความเจริญรุ่งเรือง และกลมเกลียวเป็นหนึ่งเดียวกัน ลวดลายอันวิจิตรงดงามนี้ไม่ได้เป็นเพียงเครื่องประดับ แต่เป็นคำอธิษฐานที่จับต้องได้เพื่ออนาคตของพวกเขา",
            en: "In Chinese culture, the dragon (龍) represents masculine power, strength, and good fortune, while the phoenix (鳳) symbolizes feminine beauty, grace, and luck. Together, they represent the perfect marital union—a harmonious balance of yin and yang. The presence of dragon and phoenix embroidery on wedding attire, especially the Qun Kwa, blesses the couple with a blissful, prosperous, and harmonious life together. This exquisite motif is not just decorative; it's a tangible prayer for their future.",
            zh: "在中国文化中，龙（龍）代表着男性的力量、权势和好运，而凤（鳳）则象征着女性的美丽、优雅和吉祥。两者结合，代表着完美的婚姻结合——阴阳和谐的极致体现。婚礼服饰（尤其是裙褂）上的龙凤刺绣，是为祝福新人婚姻美满、繁荣昌盛、和谐共处。这精致的图案不仅仅是装饰，更是对他们未来的具体祈愿。"
        },
        imageUrl: pImgs[0],
        date: "2024-07-20",
        categories: ["meaning-of-symbols"],
        tags: ["dragon", "phoenix", "qun-kwa", "symbolism"]
    },
    {
        id: 2,
        title: {
            th: "ความสำคัญของพิธียกน้ำชา: มากกว่าแค่การดื่มชา",
            en: "The Importance of the Tea Ceremony: More Than Just Tea",
            zh: "敬茶仪式的重要性：不止于茶"
        },
        content: {
            th: "พิธียกน้ำชาไม่ใช่เป็นเพียงการเสิร์ฟเครื่องดื่ม แต่เป็นสัญลักษณ์ที่ลึกซึ้งของการแสดงความเคารพและความกตัญญูต่อผู้อาวุโส เป็นการแนะนำคู่บ่าวสาวเข้าสู่ครอบครัวของอีกฝ่ายอย่างเป็นทางการ การคุกเข่ารินชาให้พ่อแม่และญาติผู้ใหญ่คือการแสดงความขอบคุณสำหรับการเลี้ยงดู และเป็นการขอพรสำหรับชีวิตคู่ การกระทำนี้แสดงถึงการยอมรับและการให้พรจากครอบครัว ซึ่งเป็นรากฐานที่สำคัญสำหรับชีวิตคู่ที่มั่นคงและมีความสุข",
            en: "The tea ceremony is not merely about serving a beverage; it is a profound symbol of respect and gratitude towards elders. It formally introduces the couple to each other's families. The act of kneeling to serve tea to parents and relatives is a gesture of thanks for their upbringing and a request for their blessing on the marriage. This act signifies acceptance and blessings from the family, which is a crucial foundation for a stable and happy marriage.",
            zh: "敬茶仪式不仅仅是奉上一杯茶；它是对长辈表示尊敬和感激的深刻象征。它正式将新人介绍给彼此的家庭。跪下为父母和亲戚奉茶的行为，是感谢他们养育之恩的表示，也是请求他们对婚姻的祝福。这个行为象征着家庭的接纳和祝福，这是稳定幸福婚姻的重要基础。"
        },
        imageUrl: pImgs[1],
        date: "2024-07-15",
        categories: ["wedding-traditions"],
        tags: ["tea-ceremony", "family", "respect"]
    },
    {
        id: 3,
        title: {
            th: "ศิลปะแห่งการปักผ้าในชุด Qun Kwa: มรดกที่ถักทอด้วยด้าย",
            en: "The Art of Embroidery in Qun Kwa: A Heritage Woven in Thread",
            zh: "裙褂的刺绣艺术：丝线编织的传承"
        },
        content: {
            th: "ชุด Qun Kwa แต่ละชุดเป็นผลงานศิลปะที่ใช้เวลาและความชำนาญสูง ระดับความหนาแน่นของดิ้นทองและเงินที่ปักลงบนผ้าไหมสีแดงเป็นตัวกำหนดมูลค่าและความสำคัญของชุด ตั้งแต่ 'King Kwa' ที่ปักเต็ม 100% ไปจนถึง 'Xiao Wu Fu' ที่ปัก 50% ลวดลายแต่ละเส้นสะท้อนถึงมรดกทางวัฒนธรรมและงานฝีมืออันประณีตที่สืบทอดกันมาหลายชั่วอายุคน การเลือก Qun Kwa จึงเป็นการเลือกสืบสานงานศิลป์อันล้ำค่านี้",
            en: "Each Qun Kwa is a masterpiece requiring immense time and skill. The density of gold and silver thread embroidered onto the red silk determines the garment's value and significance, from the 100% covered 'King Kwa' to the 50% 'Xiao Wu Fu'. Every stitch reflects a rich cultural heritage and exquisite craftsmanship passed down through generations. To choose a Qun Kwa is to choose to uphold this priceless artistic tradition.",
            zh: "每一件裙褂都是一件需要大量时间和技巧的艺术杰作。绣在红绸上的金银线的密度决定了这件服装的价值和重要性，从百分之百覆盖的“褂皇”到百分之五十的“小五福”。每一针都反映了代代相传的丰富文化遗产和精湛的工艺。选择一件裙褂，就是选择传承这份无价的艺术传统。"
        },
        imageUrl: pImgs[2],
        date: "2024-07-01",
        categories: ["art-of-embroidery", "meaning-of-symbols"],
        tags: ["qun-kwa", "craftsmanship", "embroidery"]
    },
    {
        id: 4,
        title: {
            th: "เรื่องราวลูกค้า: การผสมผสานประเพณีและความทันสมัยในงานแต่งงาน",
            en: "Customer Story: Blending Tradition and Modernity",
            zh: "客户故事：将传统与现代完美融合"
        },
        content: {
            th: "เมื่อคุณซาร่าและคุณเหว่ย เฉิน เริ่มวางแผนงานแต่งงาน พวกเขาต้องเผชิญกับคำถามสำคัญ: จะให้เกียรติมรดกอันยาวนานของครอบครัวอย่างไรในวิถีที่ยังคงความเป็นตัวของตัวเองในกรุงเทพฯ ยุคใหม่? เรื่องราวของพวกเขาคือการเดินทางเพื่อค้นหาความสมดุลที่สมบูรณ์แบบ ตั้งแต่การเลือกชุดกี่เพ้าทรงโมเดิร์นสำหรับงานเลี้ยง ไปจนถึงชุดคุนขวาแบบดั้งเดิมสำหรับพิธียกน้ำชา การเฉลิมฉลองที่สวยงามของพวกเขาเป็นแรงบันดาลใจว่าประเพณีไม่ใช่กฎที่ตายตัว แต่เป็นภาษาที่สวยงามซึ่งสามารถพูดได้ในรูปแบบใหม่ๆ ที่น่าตื่นเต้น",
            en: "When Sarah and Wei Chen began planning their wedding, they faced a common question: how to honor their families' rich heritage in a way that felt true to their life in modern Bangkok? Their story is a journey of finding that perfect balance, from selecting a stunning, modern-cut Qipao for their reception to a classic Qun Kwa for their tea ceremony. Their beautiful celebration serves as an inspiring testament to how tradition is not a rigid script, but a beautiful language that can be spoken in new and exciting ways.",
            zh: "当Sarah和Wei Chen开始筹划婚礼时，他们面临一个共同的问题：如何在现代曼谷的生活中，以一种真实的方式来尊重他们家族丰富的传统？他们的故事是一个寻找完美平衡的旅程，从为招待会挑选一件惊艳的现代剪裁旗袍，到为敬茶仪式选择一件经典的裙褂。他们美丽的庆典鼓舞人心地证明了传统不是一成不变的剧本，而是一种可以用新颖、激动人心的方式来表达的美丽语言。"
        },
        imageUrl: pImgs[0],
        date: "2024-06-25",
        categories: ["customer-stories", "wedding-traditions"],
        tags: ["modern-wedding", "inspiration", "qipao"]
    },
    {
        id: 5,
        title: {
            th: "การเริ่มต้นที่เป็นมงคล: คู่มือง่ายๆ ในการเลือกวันแต่งงาน",
            en: "Auspicious Beginnings: A Simple Guide to Choosing the Perfect Wedding Date",
            zh: "吉祥的开端：选择完美婚期的简易指南"
        },
        content: {
            th: "ในวัฒนธรรมจีน งานแต่งงานเริ่มต้นนานก่อนวันสำคัญ—มันเริ่มต้นด้วยการเลือกวันที่ให้คำมั่นสัญญาถึงชีวิตที่กลมเกลียวและโชคดี กระบวนการนี้ซึ่งมีรากฐานมาจากภูมิปัญญาโบราณของปฏิทินจีนและฮวงจุ้ย อาจดูน่ากังวล คู่มือง่ายๆ ของเราจะช่วยไขข้อข้องใจ เราอธิบายหลักการสำคัญในการเลือกวันมงคล ตั้งแต่การพิจารณาวันเกิดและราศีของคู่บ่าวสาว ไปจนถึงการหลีกเลี่ยงช่วงเวลาที่ไม่เป็นมงคล เช่น เดือนผี เรียนรู้ว่าทำไมตัวเลขบางตัวถึงเป็นที่นิยม และวันที่เลือกอย่างรอบคอบจะสามารถวางรากฐานสำหรับชีวิตคู่ที่เปี่ยมสุขได้อย่างไร",
            en: "In Chinese culture, a wedding begins long before the big day—it starts with choosing a date that promises a lifetime of harmony and good fortune. This process, rooted in the ancient wisdom of the Chinese almanac and Feng Shui, can seem daunting. Our simple guide breaks it down. We explain the core principles of selecting an auspicious date, from considering the couple’s birth dates and zodiac signs to avoiding inauspicious times like the Ghost Month. Learn why certain numbers are favored and how a carefully chosen date can set the stage for a blessed and prosperous union.",
            zh: "在中国文化中，婚礼远在吉日之前就已开始——它始于选择一个承诺终生和谐与好运的日子。这个过程植根于中国历书和风水的古老智慧，可能看起来令人望而生畏。我们的简易指南将其分解。我们解释了选择吉日的核心原则，从考虑新人的生辰八字和生肖，到避开不吉利的时间，如鬼月。了解为什么某些数字更受青睐，以及一个精心挑选的日子如何为一段蒙福和繁荣的结合奠定基础。"
        },
        imageUrl: pImgs[1],
        date: "2024-06-18",
        categories: ["planning-tips", "wedding-traditions"],
        tags: ["planning", "feng-shui", "almanac"]
    },
    {
        id: 6,
        title: {
            th: "ของขวัญแห่ง 'ซี่เตี๋ยมกิม': คำสัญญาจากแม่สามี",
            en: "The Gift of 'Si Dian Jin': A Mother-in-Law's Promise",
            zh: "四点金的赠礼：一位婆婆的承诺"
        },
        content: {
            th: "ในประเพณีแต้จิ๋ว 'ซี่เตี๋ยมกิม' (四点金) หรือ 'ทองสี่จุด' คือของขวัญต้อนรับชิ้นสำคัญที่แม่สามีมอบให้แก่เจ้าสาว ประกอบด้วยเครื่องประดับทองสี่ชิ้น—สร้อยคอ แหวน กำไล และต่างหู—ซึ่งเป็นสัญลักษณ์แทนมุมทั้งสี่ของหลังคาบ้านจีนโบราณ การมอบของขวัญนี้จึงเป็นคำมั่นสัญญาที่สวยงามว่าเจ้าสาวจะได้รับการดูแลและมีที่พักพิงที่มั่นคงในครอบครัวใหม่เสมอ เป็นสัญลักษณ์ของความรัก การยอมรับ และความปรารถนาดีให้ชีวิตคู่เริ่มต้นอย่างมั่งคั่ง",
            en: "A key Teochew tradition, 'Si Dian Jin' (四点金) or 'four points of gold', is a significant welcoming gift from the groom's mother to the bride. This four-piece set—typically a necklace, ring, bangle, and earrings—symbolizes the four corners of a traditional Chinese house's roof. This beautiful gesture acts as a promise that the bride will always be cared for and have a secure home in her new family, signifying love, acceptance, and a wealthy start to married life.",
            zh: "“四点金”（四點金）是潮州一项重要的传统，是新郎的母亲赠送给新娘的一份意义重大的欢迎礼物。这套四件套金饰——通常包括项链、戒指、手镯和耳环——象征着传统中式房屋屋顶的四个角。这个美丽的姿态承诺着新娘在新的家庭中将永远受到照顾并拥有一个安稳的家，象征着爱、接纳和富裕的婚姻生活的开始。"
        },
        imageUrl: pImgs[2],
        date: "2024-06-10",
        categories: ["wedding-traditions", "meaning-of-symbols"],
        tags: ["si-dian-jin", "gold", "teochew", "gift"]
    },
    {
        id: 7,
        title: {
            th: "เหตุใดร่มแดงจึงเป็นเครื่องประดับที่ดีที่สุดของเจ้าสาว",
            en: "Why a Red Umbrella is a Bride's Best Accessory",
            zh: "为何红伞是新娘的最佳配饰"
        },
        content: {
            th: "เมื่อเจ้าสาวก้าวออกจากบ้านของเธอในวันแต่งงาน เธอมักจะอยู่ภายใต้ร่มสีแดงที่กางออก ประเพณีที่มีเสน่ห์นี้มีความหมายลึกซึ้ง ร่มสีแดงทำหน้าที่เป็นเกราะป้องกันเชิงสัญลักษณ์ โดยเชื่อกันว่าช่วยปกป้องเจ้าสาวจากพลังงานด้านลบและวิญญาณชั่วร้ายในช่วงเวลาเปลี่ยนผ่านที่ละเอียดอ่อน นอกจากนี้ยังเป็นสัญลักษณ์ของการเจริญพันธุ์และการอวยพรให้คู่บ่าวสาวมีลูกหลานมากมาย เป็นเครื่องประดับที่เรียบง่ายแต่ทรงพลังซึ่งเต็มไปด้วยความปรารถนาดีสำหรับอนาคตที่สดใสของเธอ",
            en: "As a bride steps out of her home on her wedding day, she is often sheltered by a red umbrella. This charming tradition is rich with meaning. The red umbrella acts as a symbolic shield, believed to protect the bride from negative energy and evil spirits during her vulnerable transition. Furthermore, it symbolizes fertility and blesses the couple with numerous descendants. It's a simple yet powerful accessory, laden with well wishes for her bright future.",
            zh: "当新娘在婚礼当天走出家门时，通常会有一把红伞为她遮挡。这个迷人的传统寓意丰富。红伞作为一个象征性的护盾，被认为可以在新娘脆弱的过渡期间保护她免受负能量和邪灵的侵害。此外，它还象征着生育能力，并祝福新人子孙满堂。这是一个简单而有力的配饰，满载着对她光明未来的美好祝愿。"
        },
        imageUrl: pImgs[1],
        date: "2024-06-02",
        categories: ["wedding-traditions", "meaning-of-symbols"],
        tags: ["red-umbrella", "protection", "symbolism"]
    },
    {
        id: 8,
        title: {
            th: "พรที่หอมหวาน: ความหมายของผลไม้มงคลในงานแต่งงานจีน",
            en: "Sweet Blessings: The Meaning of Auspicious Fruits in Chinese Weddings",
            zh: "甜蜜的祝福：中式婚礼中吉祥水果的寓意"
        },
        content: {
            th: "ผลไม้มีบทบาทสำคัญในการอวยพรคู่บ่าวสาวในวัฒนธรรมจีน ผลไม้แต่ละชนิดมีความหมายเฉพาะตัว: ส้ม (橙) พ้องเสียงกับคำว่า 'ความมั่งคั่ง' (成) และเป็นสัญลักษณ์ของโชคลาภ ทับทิม (石榴) ซึ่งเต็มไปด้วยเมล็ด เป็นสัญลักษณ์ของการเจริญพันธุ์และความปรารถนาที่จะมีลูกหลานมากมาย และลำไย (龙眼) หมายถึง 'ดวงตามังกร' เป็นสัญลักษณ์ของความสมบูรณ์ การนำผลไม้เหล่านี้มาใช้ในของขวัญและการตกแต่งเป็นการเพิ่มพรที่หอมหวานให้กับวันสำคัญ",
            en: "Fruits play a vital role in blessing a new couple in Chinese culture. Each fruit carries its own unique meaning: oranges (橙), sounding like the word for 'wealth' (成), symbolize good fortune. Pomegranates (石榴), with their abundance of seeds, are a powerful symbol of fertility and the wish for many children. Longans (龙眼), or 'dragon's eye', symbolize completeness. Incorporating these fruits into gifts and decor adds a sweet layer of blessings to the big day.",
            zh: "水果在中国文化中为新人祝福扮演着至关重要的角色。每种水果都有其独特的寓意：橙子（橙），与“成”谐音，象征着财富和好运。石榴（石榴）因其籽多，是生育能力和多子多福愿望的强大象征。龙眼（龙眼）则象征着圆满。将这些水果融入礼物和装饰中，为这个重要的日子增添了一层甜蜜的祝福。"
        },
        imageUrl: pImgs[0],
        date: "2024-05-25",
        categories: ["meaning-of-symbols", "planning-tips"],
        tags: ["fruits", "fertility", "wealth", "decor"]
    },
    {
        id: 9,
        title: {
            th: "มากกว่าแค่เกม: ความสนุกและความหมายเบื้องหลังเกมกั้นประตู",
            en: "More Than Just Games: The Fun and Meaning Behind Wedding Door Games",
            zh: "不止是游戏：婚礼“闯门”游戏背后的乐趣与意义"
        },
        content: {
            th: "เกมกั้นประตู (闯门) เป็นหนึ่งในส่วนที่สนุกสนานและมีชีวิตชีวาที่สุดของวันแต่งงานจีน ก่อนที่เจ้าบ่าวจะได้รับอนุญาตให้พบเจ้าสาว เขาและเพื่อนเจ้าบ่าวจะต้องผ่านด่านทดสอบต่างๆ ที่เพื่อนเจ้าสาวตั้งขึ้น เกมเหล่านี้อาจรวมถึงการตอบคำถามเกี่ยวกับความสัมพันธ์ การร้องเพลง หรือแม้กระทั่งการทำงานที่ต้องใช้แรงกายเล็กน้อย แม้จะดูตลกขบขัน แต่จุดประสงค์ที่ลึกซึ้งกว่านั้นคือเพื่อให้เจ้าบ่าวได้แสดงความจริงใจ ความมุ่งมั่น และความรักที่เขามีต่อเจ้าสาว เป็นการเริ่มต้นวันเฉลิมฉลองที่เต็มไปด้วยเสียงหัวเราะ",
            en: "The wedding door games (闯门) are one of the most lively and entertaining parts of a Chinese wedding day. Before the groom is allowed to see his bride, he and his groomsmen must pass a series of challenges set by the bridesmaids. These can range from answering questions about the relationship to singing songs or even performing physical tasks. While hilarious, the deeper purpose is for the groom to demonstrate his sincerity, determination, and love for his bride, kicking off the day's celebrations with laughter.",
            zh: "婚礼“闯门”游戏是中式婚礼当天最热闹、最有趣的部分之一。在新郎见到新娘之前，他和他的伴郎团必须通过伴娘们设置的一系列挑战。这些挑战可以从回答有关他们关系的问题到唱歌，甚至是一些体力任务。虽然过程非常搞笑，但其更深层的目的是让新郎展示他对新娘的诚意、决心和爱，用笑声开启一天的庆祝活动。"
        },
        imageUrl: pImgs[2],
        date: "2024-05-18",
        categories: ["wedding-traditions"],
        tags: ["door-games", "chuang-men", "fun", "groom"]
    },
    {
        id: 10,
        title: {
            th: "การถอดรหัส 'ซังฮี้': เรื่องราวเบื้องหลังสัญลักษณ์สุดยอดของงานแต่งงาน",
            en: "Decoding 'Double Happiness': The Story Behind the Ultimate Wedding Symbol",
            zh: "解码“双喜”：终极婚礼符号背后的故事"
        },
        content: {
            th: "สัญลักษณ์ 'ซังฮี้' (囍) สามารถพบเห็นได้ทุกที่ในงานแต่งงานจีน แต่มีความหมายว่าอะไร? ตัวอักษรที่ไม่เหมือนใครนี้เกิดจากการรวมตัวอักษรจีนคำว่า 'ความสุข' (喜) สองตัวเข้าด้วยกัน เป็นสัญลักษณ์ของการรวมตัวกันอย่างมีความสุขของคนสองคนและสองครอบครัว ตำนานเล่าว่ามันถูกสร้างขึ้นโดยนักเรียนหนุ่มคนหนึ่งในสมัยราชวงศ์ถังซึ่งประสบความสำเร็จทั้งในด้านความรักและการสอบหลวงในวันเดียวกัน ทุกวันนี้ มันยังคงเป็นสัญลักษณ์ที่ทรงพลังที่สุดของความสุขในชีวิตสมรสและความโชคดี",
            en: "The 'Double Happiness' (囍) symbol is ubiquitous at Chinese weddings, but what does it mean? This unique character is a ligature, created by combining two Chinese characters for 'happiness' (喜). It represents the joyous union of two individuals and two families coming together. Legend says it was created by a young student in the Tang Dynasty who found success in both love and his imperial exams on the same day. Today, it remains the most powerful symbol of marital bliss and good fortune.",
            zh: "“双喜”（囍）符号在中式婚礼上无处不在，但它究竟意味着什么呢？这个独特的字符是由两个中文的“喜”字结合而成的。它代表着两个人、两个家庭的喜悦结合。相传，它是由唐代一位年轻学子创造的，他在同一天既赢得了爱情，又金榜题名。如今，它仍然是婚姻美满和好运的最强有力的象征。"
        },
        imageUrl: pImgs[1],
        date: "2024-05-11",
        categories: ["meaning-of-symbols"],
        tags: ["double-happiness", "shuang-xi", "symbolism", "decor"]
    },
    {
        id: 11,
        title: {
            th: "อันฉวง: พิธีกรรมศักดิ์สิทธิ์แห่งการจัดเตรียมเตียงวิวาห์",
            en: "An Chuang: The Sacred Ritual of Setting the Bridal Bed",
            zh: "安床：布置婚床的神圣仪式"
        },
        content: {
            th: "พิธี 'อันฉวง' หรือการจัดเตียงวิวาห์ เป็นมากกว่าการปูเตียงใหม่ เป็นพิธีกรรมที่เต็มไปด้วยสัญลักษณ์เพื่ออวยพรให้คู่บ่าวสาวมีความสุข มีความอุดมสมบูรณ์ และมีชีวิตคู่ที่ราบรื่น โดยปกติจะทำโดย 'หญิงผู้โชคดี' (好命婆) ที่มีชีวิตสมรสที่สมบูรณ์พูนสุข บนเตียงจะโปรยด้วยของมงคลต่างๆ เช่น พุทราจีน ถั่ว ลำไย และเมล็ดบัว ซึ่งเป็นคำพ้องเสียงที่อวยพรให้มีลูกชายในเร็ววัน พิธีกรรมอันอบอุ่นนี้เป็นการเตรียม 'รังรัก' ให้พร้อมสำหรับชีวิตใหม่ของทั้งคู่",
            en: "The 'An Chuang' or bed-setting ceremony is more than just making a new bed. It's a ritual rich with symbolism to bless the couple with happiness, fertility, and a harmonious marriage. Typically performed by a 'good luck woman' (好命婆) with a fortunate marital life, the bed is scattered with auspicious items like red dates, peanuts, longans, and lotus seeds—a combination whose names phonetically wish for the early arrival of a son. This heartwarming ritual prepares the couple's 'nest' for their new life together.",
            zh: "“安床”仪式不仅仅是铺一张新床。这是一个充满象征意义的仪式，旨在祝福新人幸福、多子多福、婚姻和谐。通常由一位婚姻美满的“好命婆”来执行，床上会撒上红枣、花生、桂圆和莲子等吉祥物——这些物品的名称谐音寓意着“早生贵子”。这个温馨的仪式为新人的“爱巢”和他们共同的新生活做好了准备。"
        },
        imageUrl: pImgs[0],
        date: "2024-05-04",
        categories: ["wedding-traditions"],
        tags: ["an-chuang", "bed-setting", "fertility", "blessings"]
    },
    {
        id: 12,
        title: {
            th: "คู่มือสำหรับแขก: มารยาทที่ควรรู้เมื่อไปร่วมงานแต่งงานจีน",
            en: "Guest Etiquette 101 for a Traditional Chinese Wedding",
            zh: "宾客指南：参加中式婚礼的礼仪须知"
        },
        content: {
            th: "การได้รับเชิญไปงานแต่งงานจีนถือเป็นเกียรติอย่างยิ่ง! เพื่อให้คุณรู้สึกมั่นใจและร่วมแสดงความยินดีได้อย่างเต็มที่ นี่คือเคล็ดลับบางประการ: สวมเสื้อผ้าสีสดใส (หลีกเลี่ยงสีขาวและดำ) เตรียมซองแดง (อั่งเปา) ที่มีจำนวนเงินที่เป็นเลขมงคล และเตรียมพร้อมที่จะร่วมเฉลิมฉลองอย่างสนุกสนาน โดยเฉพาะการดื่มอวยพร 'ยำเส็ง' กับคู่บ่าวสาว การแสดงความเคารพต่อผู้อาวุโสก็เป็นสิ่งสำคัญเช่นกัน การเข้าร่วมของคุณคือของขวัญที่ดีที่สุด แต่การเข้าใจในธรรมเนียมเล็กๆ น้อยๆ เหล่านี้จะทำให้คู่บ่าวสาวและครอบครัวรู้สึกยินดีเป็นอย่างยิ่ง",
            en: "Being invited to a Chinese wedding is a great honor! To help you feel confident and celebratory, here are a few tips: wear bright, festive colors (avoid black and white), prepare a red envelope (hongbao) with a lucky amount of money, and be ready to join in the fun, especially the 'yam seng' toasts with the couple. Showing respect to elders is also key. Your presence is the best gift, but understanding these small customs will be greatly appreciated by the couple and their families.",
            zh: "受邀参加中式婚礼是一份极大的荣幸！为了让您感到自信并尽情庆祝，这里有一些小贴士：穿着鲜艳喜庆的颜色（避免黑色和白色），准备一个装着吉利数额钱的红包，并准备好加入庆祝活动，特别是与新人一起“饮胜”祝酒。尊敬长辈也是关键。您的出席是最好的礼物，但了解这些小习俗会让新人和他们的家人非常感激。"
        },
        imageUrl: pImgs[1],
        date: "2024-04-28",
        categories: ["planning-tips"],
        tags: ["guest", "etiquette", "hongbao", "yam-seng"]
    },
    {
        id: 13,
        title: {
            th: "จากพ่อแม่สู่คู่บ่าวสาว: เจาะลึกความหมายของพิธีหวีผม",
            en: "From Parents to Couple: The Hair Combing Ceremony Explained",
            zh: "从父母到新人：梳头仪式的解析"
        },
        content: {
            th: "ในคืนก่อนวันแต่งงาน จะมีพิธีที่เงียบสงบแต่มีความหมายลึกซึ้งเกิดขึ้น นั่นคือพิธีหวีผม พ่อแม่หรือผู้ใหญ่ที่เคารพจะหวีผมให้เจ้าสาวและเจ้าบ่าว (ในบ้านของตนเอง) เพื่อเป็นสัญลักษณ์ของการก้าวเข้าสู่วัยผู้ใหญ่ การหวีแต่ละครั้งจะมาพร้อมกับคำอวยพร: หวีครั้งแรกเพื่อความรักที่ยั่งยืน, ครั้งที่สองเพื่อความปรองดอง, ครั้งที่สามเพื่อลูกหลานเต็มบ้าน, และครั้งที่สี่เพื่อสุขภาพและความมั่งคั่ง เป็นการส่งต่อความปรารถนาดีจากรุ่นสู่รุ่นอย่างงดงาม",
            en: "On the eve of the wedding, a quiet but deeply meaningful ritual takes place: the hair combing ceremony. A parent or respected elder combs the hair of the bride and groom (in their respective homes) to symbolize their transition into adulthood. Each of the four strokes carries a blessing: the first for a lasting union, the second for harmony, the third for a house full of children, and the fourth for health and wealth. It's a beautiful transfer of good wishes from one generation to the next.",
            zh: "在婚礼前夕，会举行一个安静但意义深远的仪式：梳头仪式。父母或受人尊敬的长辈为新娘和新郎（在各自家中）梳头，象征着他们步入成年。四次梳头每一次都带着祝福：一梳到白头偕老，二梳和睦融洽，三梳子孙满堂，四梳身体健康、财富满堂。这是从一代人到下一代人美好祝愿的美丽传递。"
        },
        imageUrl: pImgs[2],
        date: "2024-04-21",
        categories: ["wedding-traditions"],
        tags: ["hair-combing", "blessings", "family", "ritual"]
    },
    {
        id: 14,
        title: {
            th: "มากกว่าชุดคุนขวา: สำรวจชุดเจ้าสาวอื่นๆ เช่น 'ซิ่วเหอฝู'",
            en: "Beyond the Qun Kwa: Exploring Other Bridal Attire like Xiu He Fu",
            zh: "不止于裙褂：探索秀禾服等其他新娘礼服"
        },
        content: {
            th: "ในขณะที่ Qun Kwa เป็นที่รู้จักกันดีในฐานะชุดเจ้าสาวแบบดั้งเดิม แต่ก็ยังมีตัวเลือกที่สวยงามอื่นๆ เช่น 'ซิ่วเหอฝู' (Xiu He Fu) ซึ่งเป็นที่นิยมจากรูปทรง A-line ที่สวมใส่สบายกว่าและกระโปรงบาน ซิ่วเหอฝูมักจะมีลายปักที่มีสีสันสดใสกว่า โดยเน้นลวดลายจากธรรมชาติ เช่น ดอกไม้และนก ซึ่งเป็นสัญลักษณ์ของชีวิตที่เปี่ยมสุขและกลมเกลียว การเลือกระหว่าง Qun Kwa และ Xiu He Fu ขึ้นอยู่กับสไตล์ส่วนตัวและความสะดวกสบายของเจ้าสาว โดยทั้งสองชุดต่างก็มีความหมายและประวัติศาสตร์อันล้ำค่า",
            en: "While the Qun Kwa is the most iconic bridal gown, another beautiful option is the 'Xiu He Fu' (秀禾服). It's favored for its more comfortable A-line silhouette and flared skirt. Xiu He Fu often features more colorful embroidery, with motifs from nature like flowers and birds, symbolizing a vibrant and harmonious life. The choice between a Qun Kwa and a Xiu He Fu often comes down to personal style and comfort, with both garments carrying rich meaning and history.",
            zh: "虽然裙褂是最具代表性的新娘礼服，但“秀禾服”是另一个美丽的选择。它因其更舒适的A字廓形和喇叭裙而受到青睐。秀禾服通常采用更色彩鲜艳的刺绣，图案多源于自然，如花鸟，象征着生机勃勃、和谐美满的生活。在裙褂和秀禾服之间的选择，通常取决于个人风格和舒适度，两者都承载着丰富的意义和历史。"
        },
        imageUrl: pImgs[0],
        date: "2024-04-15",
        categories: ["art-of-embroidery", "planning-tips"],
        tags: ["xiu-he-fu", "qun-kwa", "bridal-attire", "fashion"]
    },
    {
        id: 15,
        title: {
            th: "ความหมายของการจุดประทัดและการเชิดสิงโตในงานวิวาห์",
            en: "The Meaning of Firecrackers and Lion Dances at a Wedding",
            zh: "婚礼上燃放鞭炮与舞狮的意义"
        },
        content: {
            th: "เสียงดังของการจุดประทัดและจังหวะกลองของการเชิดสิงโตเป็นส่วนสำคัญของการเฉลิมฉลองในงานแต่งงานจีน ประเพณีเหล่านี้ไม่ใช่แค่การสร้างความบันเทิง แต่มีความหมายลึกซึ้ง เชื่อกันว่าเสียงดังของประทัดจะช่วยขับไล่วิญญาณชั่วร้ายและโชคร้าย ในขณะที่การเชิดสิงโตซึ่งเป็นสัญลักษณ์ของความแข็งแกร่งและโชคดี จะนำพรและความเจริญรุ่งเรืองมาสู่คู่บ่าวสาว เป็นการเริ่มต้นชีวิตคู่ที่เต็มไปด้วยพลังและความสุข",
            en: "The loud crackle of firecrackers and the rhythmic beat of drums during a lion dance are integral parts of a Chinese wedding celebration. These traditions are more than just entertainment; they are deeply symbolic. The noise of the firecrackers is believed to ward off evil spirits and bad luck, while the lion dance, a symbol of strength and good fortune, brings blessings and prosperity to the new couple. It's an energetic and joyous start to their married life.",
            zh: "鞭炮的噼啪声和舞狮的节奏感鼓点是中式婚礼庆典中不可或缺的一部分。这些传统不仅仅是娱乐，它们具有深刻的象征意义。鞭炮的噪音被认为可以驱赶邪灵和厄运，而作为力量和好运象征的舞狮，则为新人带来祝福和繁荣。这是他们婚姻生活充满活力和欢乐的开始。"
        },
        imageUrl: pImgs[1],
        date: "2024-04-07",
        categories: ["wedding-traditions", "meaning-of-symbols"],
        tags: ["firecrackers", "lion-dance", "celebration", "luck"]
    },
    {
        id: 16,
        title: {
            th: "การไหว้บรรพบุรุษ: ให้เกียรติรากเหง้าในวันแต่งงาน",
            en: "Ancestral Worship: Honoring Your Roots on Your Wedding Day",
            zh: "祭拜祖先：在婚礼当天敬拜先人"
        },
        content: {
            th: "ก่อนที่พิธีการอื่นๆ จะเริ่มต้นขึ้น ประเพณีที่สำคัญที่สุดอย่างหนึ่งคือการไหว้บรรพบุรุษ ทั้งเจ้าบ่าวและเจ้าสาวจะทำการไหว้ที่บ้านของตนเอง เพื่อแจ้งข่าวการแต่งงานและขอพรจากบรรพบุรุษที่ล่วงลับไปแล้ว เป็นการแสดงความกตัญญูและให้เกียรติรากเหง้าของครอบครัว เป็นการย้ำเตือนว่าชีวิตใหม่ที่กำลังจะเริ่มต้นนี้ตั้งอยู่บนรากฐานที่บรรพบุรุษได้สร้างไว้ และพรของพวกท่านจะนำทางคู่บ่าวสาวไปสู่อนาคต",
            en: "Before any other ceremony begins, one of the most significant traditions is ancestral worship. Both the bride and groom, in their respective homes, pay respects to their ancestors. This ritual serves to announce the marriage and seek blessings from the departed family members. It is a powerful act of gratitude and a way of honoring one's roots, acknowledging that the new life beginning is built upon the foundation laid by previous generations, and their blessings will guide the couple into the future.",
            zh: "在任何其他仪式开始之前，最重要的传统之一是祭拜祖先。新娘和新郎在各自家中向祖先表示敬意。这个仪式旨在向已故的家人宣告婚事并寻求他们的祝福。这是一种充满感激之情的有力行为，也是一种尊重自己根源的方式，承认即将开始的新生活是建立在前辈们奠定的基础之上的，他们的祝福将指引新人走向未来。"
        },
        imageUrl: pImgs[2],
        date: "2024-03-30",
        categories: ["wedding-traditions"],
        tags: ["ancestors", "respect", "family", "blessings"]
    },
    {
        id: 17,
        title: {
            th: "เจาะลึกพิธีหมั้น 'กัวต้าหลี่' (Guo Da Li)",
            en: "A Deep Dive into the 'Guo Da Li' Betrothal Ceremony",
            zh: "深入了解“过大礼”订婚仪式"
        },
        content: {
            th: "พิธี 'กัวต้าหลี่' เป็นการประกาศการหมั้นหมายอย่างเป็นทางการและยิ่งใหญ่ ครอบครัวของเจ้าบ่าวจะนำของขวัญหมั้น (Pin Jin) และของขวัญอื่นๆ ที่เป็นสัญลักษณ์ของความโชคดีและความอุดมสมบูรณ์ไปมอบให้ครอบครัวเจ้าสาว ของขวัญเหล่านี้อาจรวมถึงเค้กแต่งงาน เหล้า ผลไม้ และเทียนมังกรหงส์ การยอมรับของขวัญเหล่านี้ของครอบครัวเจ้าสาวถือเป็นการยอมรับข้อเสนอการแต่งงาน เป็นการเชื่อมสัมพันธ์ระหว่างสองครอบครัวอย่างเป็นทางการ",
            en: "The 'Guo Da Li' ceremony is the grand and formal announcement of the engagement. The groom's family presents betrothal gifts (Pin Jin) and other symbolic items of good fortune and prosperity to the bride's family. These often include wedding cakes, liquor, fruits, and dragon-and-phoenix candles. The acceptance of these gifts by the bride's family signifies their formal acceptance of the marriage proposal, officially binding the two families.",
            zh: "“过大礼”仪式是盛大而正式的订婚宣告。男方家庭向女方家庭赠送聘礼和其他象征好运与繁荣的物品。这些通常包括喜饼、酒、水果和龙凤烛。女方家庭接受这些礼物，意味着他们正式接受求婚，两个家庭也因此正式缔结关系。"
        },
        imageUrl: pImgs[0],
        date: "2024-03-22",
        categories: ["wedding-traditions"],
        tags: ["guo-da-li", "betrothal", "engagement", "pin-jin"]
    },
    {
        id: 18,
        title: {
            th: "ความหมายของ 'ซังฮี้' และของตกแต่งสีแดง",
            en: "The Meaning of 'Double Happiness' and Red Decorations",
            zh: "“双喜”与红色装饰的寓意"
        },
        content: {
            th: "สีแดงคือสีแห่งความสุข โชคลาภ และความเจริญรุ่งเรืองในวัฒนธรรมจีน และไม่มีที่ไหนจะเห็นได้ชัดเจนไปกว่าในงานแต่งงาน บ้านและสถานที่จัดงานจะถูกประดับด้วยสีแดง ตั้งแต่โคมไฟไปจนถึงป้ายผ้าอวยพร สัญลักษณ์ 'ซังฮี้' (囍) ซึ่งเป็นการรวมตัวอักษร 'ความสุข' สองตัว จะถูกติดไว้ทุกที่เพื่อเป็นสัญลักษณ์ของการรวมกันของสองครอบครัวและความสุขที่เพิ่มเป็นสองเท่า การตกแต่งเหล่านี้สร้างบรรยากาศแห่งการเฉลิมฉลองและเชื้อเชิญพลังงานที่ดีเข้ามาในชีวิตของคู่บ่าวสาว",
            en: "Red is the color of joy, luck, and prosperity in Chinese culture, and nowhere is this more evident than at a wedding. Homes and venues are adorned in red, from lanterns to banners. The 'Double Happiness' (囍) symbol, a combination of two characters for 'joy', is placed everywhere to signify the union of two families and the doubling of happiness. These decorations create a celebratory atmosphere and invite positive energy into the couple's new life.",
            zh: "红色在中国文化中是喜悦、幸运和繁荣的颜色，在婚礼上这一点尤为明显。家中和场地都用红色装饰，从灯笼到对联。将两个“喜”字组合而成的“双喜”（囍）符号随处可见，象征着两个家庭的结合和幸福的加倍。这些装饰营造出喜庆的氛围，并为新人的新生活招来正能量。"
        },
        imageUrl: pImgs[1],
        date: "2024-03-14",
        categories: ["meaning-of-symbols", "planning-tips"],
        tags: ["red", "double-happiness", "decor", "luck"]
    },
    {
        id: 19,
        title: {
            th: "การเลือกของขวัญแต่งงานที่มีความหมายสำหรับคู่บ่าวสาว",
            en: "Choosing Meaningful Wedding Gifts for the Couple",
            zh: "为新人选择有意义的结婚礼物"
        },
        content: {
            th: "การเลือกของขวัญสำหรับคู่บ่าวสาวที่จัดงานแต่งงานแบบจีนนั้น การเลือกของที่มีความหมายเชิงสัญลักษณ์จะได้รับการชื่นชมอย่างมาก นอกเหนือจากอั่งเปาแล้ว ลองพิจารณาของขวัญที่เป็นคู่ เช่น รูปปั้นเป็ดแมนดาริน (สัญลักษณ์ของความซื่อสัตย์) หรือชุดถ้วยชาที่สวยงามสำหรับบ้านใหม่ของพวกเขา ศิลปะที่มีสัญลักษณ์มงคล เช่น ปลา (ความอุดมสมบูรณ์) หรือต้นไผ่ (ความแข็งแกร่ง) ก็เป็นตัวเลือกที่ดีเช่นกัน การเลือกของขวัญที่สื่อถึงพรสำหรับอนาคตของพวกเขาจะทำให้ของขวัญของคุณมีความพิเศษยิ่งขึ้น",
            en: "When selecting a gift for a couple having a Chinese wedding, choosing something with symbolic meaning is greatly appreciated. Beyond the traditional red envelope, consider gifts that come in pairs, like mandarin duck figurines (for fidelity) or a beautiful tea set for their new home. Art featuring auspicious symbols like fish (for abundance) or bamboo (for strength) are also wonderful choices. A gift that carries a blessing for their future will make it extra special.",
            zh: "为举办中式婚礼的新人挑选礼物时，选择具有象征意义的物品会备受赞赏。除了传统的红包，可以考虑成对的礼物，比如鸳鸯雕像（象征忠诚）或一套漂亮的茶具供他们新家使用。带有吉祥符号的艺术品，如鱼（象征富足）或竹子（象征坚韧），也是绝佳的选择。一份为他们的未来带来祝福的礼物，会让这份心意更加特别。"
        },
        imageUrl: pImgs[2],
        date: "2024-03-05",
        categories: ["planning-tips"],
        tags: ["gifts", "etiquette", "symbolism", "guest"]
    },
    {
        id: 20,
        title: {
            th: "การเดินทางกลับบ้านของเจ้าสาว 'ฮุยเหมิน' (Hui Men)",
            en: "The Bride's Homecoming: Understanding 'Hui Men'",
            zh: "新娘回门：了解“回门”的习俗"
        },
        content: {
            th: "สามวันหลังงานแต่งงาน คู่บ่าวสาวจะเดินทางกลับไปเยี่ยมบ้านของฝ่ายหญิงในพิธีที่เรียกว่า 'ฮุยเหมิน' (回门) ประเพณีนี้มีความสำคัญอย่างยิ่ง เพราะเป็นการแสดงให้เห็นว่าถึงแม้เจ้าสาวจะแต่งงานออกไปแล้ว เธอก็ยังคงเป็นส่วนหนึ่งของครอบครัวเดิม และเป็นการแนะนำเจ้าบ่าวในฐานะลูกเขยอย่างเป็นทางการ ครอบครัวของเจ้าสาวจะต้อนรับพวกเขาด้วยงานเลี้ยงเล็กๆ เป็นการเฉลิมฉลองความสัมพันธ์ที่แน่นแฟ้นยิ่งขึ้นของทั้งสองครอบครัว",
            en: "Three days after the wedding, the newlyweds make a formal visit back to the bride's family home in a tradition known as 'Hui Men' (回门). This is a crucial tradition as it signifies that even though the bride is married, she is still a cherished part of her natal family, and it formally introduces the groom as a son-in-law. The bride's family welcomes them with a small banquet, celebrating the newly strengthened bond between the two families.",
            zh: "婚礼三天后，新人会正式回到新娘的娘家，这个传统被称为“回门”。这是一个至关重要的传统，因为它表明即使新娘已经出嫁，她仍然是娘家珍爱的一份子，同时也正式将新郎作为女婿介绍给家人。新娘的家人会设宴款待他们，庆祝两个家庭之间得到加强的联系。"
        },
        imageUrl: pImgs[0],
        date: "2024-02-27",
        categories: ["wedding-traditions"],
        tags: ["hui-men", "family", "post-wedding", "tradition"]
    }
];

export const heroPresets: HeroPreset[] = [
    { id: 1, imageUrl: pImgs[2], slogan: { en: 'Woven with Blessings, Worn with Pride', th: 'ถักทอด้วยคำอวยพร สวมใส่ด้วยความภาคภูมิใจ', zh: '织就祝福，荣耀加身' }, cta: { en: 'Discover Your Legacy', th: 'ค้นพบมรดกของคุณ', zh: '发现您的传承' } },
    { id: 2, imageUrl: pImgs[0], slogan: { en: 'The Art of Tradition, Redefined', th: 'ครบครันความเป็นสิริมงคล ในพิธีแต่งงานตามประเพณีจีน', zh: '重新定义的传统艺术' }, cta: { en: 'Explore the Collection', th: 'ชมคอลเลกชัน', zh: '探索系列' } },
    { id: 3, imageUrl: pImgs[1], slogan: { en: 'Begin Your Forever in Timeless Elegance', th: 'เริ่มต้นความเป็นนิรันดร์ของคุณในความสง่างามเหนือกาลเวลา', zh: '在永恒的优雅中开启您的永恒' }, cta: { en: 'Shop Now', th: 'เลือกซื้อเลย', zh: '立即选购' } },
    { 
        id: 4, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devoncasa/VickyLuxGems@main/main+photo.webp', 
        slogan: { 
            en: 'The Complete Essence of Traditional Chinese Wedding Items and Other Ceremonies', 
            th: 'ครบถ้วนทุกความหมาย แห่งเครื่องใช้แต่งงานตามประเพณีจีน และพิธีการอื่นๆ', 
            zh: '传统中华婚庆用品及其他仪式，尽显圆满寓意' 
        }, 
        cta: { 
            en: 'View Bridal Gowns', 
            th: 'ชมชุดเจ้าสาว', 
            zh: '浏览新娘礼服' 
        } 
    }
];

export const traditions: Tradition[] = [
    {
        id: 'trad-01',
        title: { en: 'Engagement Ceremony (Guo Da Li)', th: 'พิธีหมั้น (กั้วต้าหลี่ - 过大礼)', zh: '订婚仪式 (过大礼)' },
        shortDescription: { en: 'The formal engagement ceremony where the groom\'s family presents gifts to the bride\'s family, symbolizing respect and the formalization of the union.', th: 'พิธีหมั้นอย่างเป็นทางการที่ครอบครัวของเจ้าบ่าวจะมอบของขวัญให้แก่ครอบครัวของเจ้าสาว เพื่อเป็นสัญลักษณ์แห่งความเคารพและการเริ่มต้นสู่การเป็นครอบครัวเดียวกัน', zh: '“过大礼”是正式的订婚仪式，男方家庭向女方家庭赠送聘礼，象征着尊重和婚约的正式确立。' },
        longDescription: { 
            en: 'What is the purpose of the Guo Da Li ceremony?\nThis grand proposal is the formalization of the engagement. It involves a procession from the groom\'s family delivering a host of gifts to the bride\'s family, acting as a testament to the groom\'s sincerity and financial capability.\n\nWhat kind of gifts are presented?\nThe gifts are deeply symbolic, often including betrothal money (Pin Jin), dragon and phoenix candles, wedding cakes, and auspicious fruits. The acceptance of these gifts by the bride\'s family signifies the official agreement to the marriage.', 
            th: 'พิธีกัวต้าหลี่มีความสำคัญอย่างไร?\nพิธีการสู่ขออันยิ่งใหญ่นี้คือการประกาศการหมั้นหมายอย่างเป็นทางการ โดยครอบครัวฝ่ายชายจะจัดขบวนแห่ของขวัญมงคลไปมอบให้แก่ครอบครัวฝ่ายหญิง เพื่อเป็นเครื่องยืนยันถึงความจริงใจและความพร้อมทางการเงินของเจ้าบ่าว\n\nของขวัญที่มอบให้มีอะไรบ้าง?\nของขวัญแต่ละชิ้นล้วนมีความหมายอันเป็นมงคล โดยมากมักจะประกอบด้วยสินสอดทองหมั้น (聘金), เทียนมังกรและหงส์, ขนมแต่งงาน และผลไม้มงคล เมื่อครอบครัวเจ้าสาวรับของขวัญเหล่านี้แล้ว ถือเป็นการยอมรับและประกาศการหมั้นหมายอย่างเป็นทางการ', 
            zh: '过大礼仪式的目的是什么？\n这个盛大的求婚仪式是订婚的正式化。它包括新郎家的游行队伍，向新娘家送上各种礼物，以证明新郎的诚意和经济能力。\n\n会赠送什么样的礼物？\n礼物具有深刻的象征意义，通常包括聘金、龙凤烛、喜饼和吉祥水果。新娘家接受这些礼物，意味着正式同意这门婚事。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-02',
        title: { en: 'Tea Ceremony', th: 'พิธียกน้ำชา', zh: '敬茶仪式' },
        shortDescription: { en: 'A pivotal moment symbolizing the joining of two families, where the couple serves tea to their elders as a sign of respect and gratitude.', th: 'ช่วงเวลาสำคัญที่เป็นสัญลักษณ์ของการรวมสองครอบครัวเข้าไว้ด้วยกัน คู่บ่าวสาวจะรินชาให้แก่ผู้อาวุโสเพื่อแสดงความเคารพและความกตัญญู', zh: '象征着两个家庭结合的关键时刻，新人向长辈敬茶，以示尊敬和感激。' },
        longDescription: { 
            en: 'What is the significance of the Tea Ceremony?\nThe Tea Ceremony is one of the most significant events. It represents the formal introduction of the couple into each other\'s families and serves as a profound gesture of respect and gratitude towards their elders.\n\nWhat happens during the ceremony?\nThe couple kneels before their parents and elder relatives, serving them tea. In return, the elders offer their blessings, often in the form of red envelopes (hongbao) or jewelry. The order of serving is based on seniority, showing deep reverence for the family hierarchy.', 
            th: 'พิธียกน้ำชามีความสำคัญอย่างไร?\nพิธียกน้ำชาเป็นหนึ่งในพิธีที่สำคัญที่สุด เป็นการแนะนำคู่บ่าวสาวให้รู้จักกับครอบครัวของอีกฝ่ายอย่างเป็นทางการ และเป็นการแสดงความเคารพและความกตัญญูอย่างสุดซึ้งต่อผู้อาวุโส\n\nในพิธีมีขั้นตอนอะไรบ้าง?\nคู่บ่าวสาวจะคุกเข่าต่อหน้าพ่อแม่และญาติผู้ใหญ่เพื่อรินชาให้ดื่ม เพื่อเป็นการตอบรับ ญาติผู้ใหญ่จะให้พรและมอบของขวัญ ซึ่งโดยมากมักจะเป็นซองอั่งเปาหรือเครื่องประดับ ลำดับการรินชาจะเรียงตามอาวุโสในครอบครัวเพื่อแสดงความเคารพต่อลำดับชั้น', 
            zh: '敬茶仪式有何重要意义？\n敬茶仪式是最重要的活动之一。它代表着新人正式被介绍给对方的家庭，并向长辈们表达深深的敬意和感激之情。\n\n仪式期间会发生什么？\n新人跪在父母和长辈面前敬茶。作为回报，长辈们会给予祝福，通常是红包或珠宝的形式。敬茶的顺序是根据辈分，以示对家庭等级的尊重。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-03',
        title: { en: 'Setting the Bridal Bed (An Chuang)', th: 'พิธีจัดเตียงเจ้าสาว (อันฉวง - 安床)', zh: '安床' },
        shortDescription: { en: 'A ritual of setting up the matrimonial bed, performed by a "good luck woman" to bless the couple with fertility and a harmonious marriage.', th: 'พิธีกรรมการจัดเตียงสำหรับคู่บ่าวสาว โดยผู้หญิงที่ชีวิตสมรสสมบูรณ์พูนสุข เพื่ออวยพรให้คู่บ่าวสาวมีลูกเต็มบ้านมีหลานเต็มเมืองและมีชีวิตแต่งงานที่ราบรื่น', zh: '布置婚床的仪式，由一位“好运婆”执行，以祝福新人子孙满堂、婚姻和谐。' },
        longDescription: { 
            en: 'Why is the bridal bed specially set up?\nThe An Chuang ritual transforms a normal bed into a sacred space blessed for the newlyweds. The goal is to imbue the bed with blessings for a happy, fertile, and harmonious marriage.\n\nWhat items are needed for this ceremony?\nThe bed is adorned with new red linens. Auspicious items like red dates, peanuts, longans, and lotus seeds are scattered on the bed, symbolizing the wish for the couple to have children soon. Children are often invited to jump on the bed to further bless it with youthful energy and fertility.', 
            th: 'ทำไมต้องมีพิธีจัดเตียงเจ้าสาว?\nพิธีอันฉวงเป็นการเปลี่ยนเตียงธรรมดาให้กลายเป็นพื้นที่ศักดิ์สิทธิ์ที่ได้รับพรสำหรับคู่บ่าวสาว โดยมีเป้าหมายเพื่ออวยพรให้เตียงเต็มไปด้วยสิริมงคลสำหรับชีวิตแต่งงานที่มีความสุข อุดมสมบูรณ์ และราบรื่น\n\nของที่ใช้ในพิธีมีอะไรบ้าง?\nเตียงจะถูกปูด้วยผ้าปูที่นอนสีแดงชุดใหม่ และมีการโปรยของมงคลต่างๆ เช่น พุทราจีน, ถั่ว, ลำไยแห้ง, และเมล็ดบัว ซึ่งเป็นสัญลักษณ์ของการอวยพรให้คู่บ่าวสาวมีทายาทในเร็ววัน และมักจะให้เด็กๆ มากระโดดบนเตียงเพื่อเป็นการอวยพรให้เตียงเต็มไปด้วยพลังของความเยาว์วัยและความอุดมสมบูรณ์', 
            zh: '为什么要特别布置婚床？\n安床仪式将一张普通的床变成了一个为新人祝福的神圣空间。目的是为了让婚床充满幸福、多产、和谐婚姻的祝福。\n\n这个仪式需要哪些物品？\n床上铺着新的红色床单。床上撒着红枣、花生、桂圆和莲子等吉祥物品，象征着希望新人早生贵子。通常会邀请孩子们在床上跳跃，以青春活力和生育能力进一步祝福它。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-04',
        title: { en: 'Hair Combing Ceremony', th: 'พิธีหวีผม', zh: '梳头仪式' },
        shortDescription: { en: 'Performed on the eve of the wedding, parents comb their child\'s hair to symbolize their transition into adulthood.', th: 'จัดขึ้นในคืนก่อนวันแต่งงาน พ่อแม่จะหวีผมให้ลูกเพื่อเป็นสัญลักษณ์ของการก้าวเข้าสู่วัยผู้ใหญ่', zh: '在婚礼前夕举行，父母为孩子梳头，象征着他们进入成年。' },
        longDescription: { 
            en: 'What is the purpose of the Hair Combing Ceremony?\nThis intimate ritual, performed on the night before the wedding, signifies the bride and groom\'s transition into adulthood and their readiness for marriage. It is a moment of blessing from the parents to the child.\n\nWhat do the four strokes of the comb represent?\nEach of the four strokes represents a specific blessing: 1) for a lasting marriage from beginning to end, 2) for a harmonious union, 3) for a house full of children and grandchildren, and 4) for good health and longevity.', 
            th: 'พิธีหวีผมมีจุดประสงค์อะไร?\nพิธีกรรมที่อบอุ่นนี้จัดขึ้นในคืนก่อนวันแต่งงาน เป็นสัญลักษณ์ของการก้าวเข้าสู่วัยผู้ใหญ่ของเจ้าบ่าวและเจ้าสาวและความพร้อมสำหรับการแต่งงาน เป็นช่วงเวลาแห่งการให้พรจากพ่อแม่สู่ลูก\n\nการหวีผมสี่ครั้งมีความหมายว่าอย่างไร?\nการหวีผมแต่ละครั้งจะมีความหมายมงคลแตกต่างกันไป: ครั้งที่ 1 เพื่อชีวิตสมรสที่ยืนยาวตั้งแต่ต้นจนปลาย, ครั้งที่ 2 เพื่อความรักที่กลมเกลียว, ครั้งที่ 3 เพื่อให้มีลูกหลานเต็มบ้าน, และครั้งที่ 4 เพื่อสุขภาพที่แข็งแรงและอายุยืนยาว', 
            zh: '梳头仪式的目的是什么？\n这个在婚礼前夜举行的温馨仪式，象征着新郎新娘步入成年，并为婚姻做好了准备。这是父母为孩子祝福的时刻。\n\n梳头的四下代表什么？\n每一梳都代表一个特定的祝福：1）一梳梳到尾，2）二梳和谐美满，3）三梳子孙满堂，4）四梳身体健康长寿。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-05',
        title: { en: 'Picking Up the Bride (Jie Xin Niang)', th: 'พิธีรับตัวเจ้าสาว (เจี๋ยซินเหนียง - 接新娘)', zh: '接新娘' },
        shortDescription: { en: 'The groom leads a lively procession to the bride\'s home to formally "collect" her for the wedding.', th: 'เจ้าบ่าวนำขบวนแห่อันคึกคักไปยังบ้านของเจ้าสาวเพื่อ "รับ" เธอไปเข้าพิธีแต่งงานอย่างเป็นทางการ', zh: '新郎带领热闹的迎亲队伍前往新娘家，正式“接”她去参加婚礼。' },
        longDescription: { 
            en: 'What happens during this procession?\nThis event is filled with excitement and noise, often accompanied by firecrackers and music to ward off evil spirits. It\'s a public declaration of the marriage and the groom\'s joy.\n\nWhat challenge does the groom face?\nThe groom\'s arrival is met with challenges set by the bridesmaids, known as door games (Chuang Men), which he must overcome to prove his love and worthiness before he can see the bride.', 
            th: 'ในขบวนแห่มีอะไรเกิดขึ้นบ้าง?\nพิธีนี้เต็มไปด้วยความตื่นเต้นและเสียงดัง โดยมักจะมีการจุดประทัดและเล่นดนตรีเพื่อขับไล่สิ่งชั่วร้าย เป็นการประกาศการแต่งงานต่อสาธารณะและความสุขของเจ้าบ่าว\n\nเจ้าบ่าวต้องเผชิญกับอุปสรรคอะไร?\nเมื่อเจ้าบ่าวมาถึง จะต้องเผชิญกับด่านทดสอบจากเพื่อนเจ้าสาวที่เรียกว่า "เกมกั้นประตู" (闯门) ซึ่งเขาจะต้องผ่านไปให้ได้เพื่อพิสูจน์ความรักและความเหมาะสมของเขาก่อนที่จะได้พบเจ้าสาว', 
            zh: '这个过程中会发生什么？\n这个活动充满了兴奋和喧闹，通常伴随着鞭炮和音乐以驱邪。这是对婚姻和新郎喜悦的公开宣告。\n\n新郎面临什么挑战？\n新郎的到来会遇到伴娘们设置的挑战，即“闯门游戏”，他必须克服这些挑战来证明他的爱和价值，然后才能见到新娘。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-06',
        title: { en: 'Door Games (Chuang Men)', th: 'เกมกั้นประตู (ช่วงเหมิน - 闯门)', zh: '闯门' },
        shortDescription: { en: 'A series of playful challenges the groom must complete to prove his love before he is allowed to see his bride.', th: 'ชุดของการทดสอบที่สนุกสนานที่เจ้าบ่าวต้องทำให้สำเร็จเพื่อพิสูจน์ความรักของเขาก่อนที่จะได้รับอนุญาตให้พบเจ้าสาว', zh: '新郎必须完成的一系列有趣的挑战，以证明他的爱，然后才被允许见到他的新娘。' },
        longDescription: { 
            en: 'Why do they play door games?\nThe bridesmaids, acting as the bride\'s protectors, play games with the groom to ensure he is worthy of her. It\'s a symbolic test of his sincerity and determination.\n\nWhat are some typical door games?\nThey demand that the groom and his groomsmen perform tasks, answer trivia questions about the bride and their relationship, or offer red envelopes with money. These games are a lighthearted and fun tradition that adds laughter and memorable moments to the wedding day.', 
            th: 'ทำไมต้องเล่นเกมกั้นประตู?\nเพื่อนเจ้าสาวซึ่งทำหน้าที่เป็นผู้พิทักษ์ของเจ้าสาว จะเล่นเกมกับเจ้าบ่าวเพื่อให้แน่ใจว่าเขาสมควรกับเธอ เป็นการทดสอบความจริงใจและความมุ่งมั่นของเขาในเชิงสัญลักษณ์\n\nเกมกั้นประตูโดยทั่วไปมีอะไรบ้าง?\nเพื่อนเจ้าสาวจะให้เจ้าบ่าวและเพื่อนเจ้าบ่าวทำภารกิจต่างๆ ตอบคำถามเกี่ยวกับเจ้าสาวและความสัมพันธ์ของพวกเขา หรือมอบซองอั่งเปา เกมเหล่านี้เป็นประเพณีที่สนุกสนานและเบาสมอง ซึ่งช่วยเพิ่มเสียงหัวเราะและช่วงเวลาที่น่าจดจำให้กับวันแต่งงาน', 
            zh: '为什么要玩闯门游戏？\n伴娘们作为新娘的保护者，与新郎玩游戏以确保他配得上她。这是对他诚意和决心的象征性考验。\n\n典型的闯门游戏有哪些？\n她们要求新郎和伴郎们完成任务，回答关于新娘和他们关系的小问题，或提供红包。这些游戏是一个轻松有趣的传统，为婚礼当天增添了欢笑和难忘的时刻。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-07',
        title: { en: 'Returning Home (Hui Men)', th: 'พิธีกลับบ้านเจ้าสาว (ฮุ่ยเหมิน - 回门)', zh: '回门' },
        shortDescription: { en: 'Three days after the wedding, the couple formally visits the bride\'s parents, signifying the bride is still a cherished member of her family.', th: 'สามวันหลังแต่งงาน คู่บ่าวสาวจะกลับไปเยี่ยมพ่อแม่ของฝ่ายหญิงอย่างเป็นทางการ เพื่อแสดงว่าเจ้าสาวยังคงเป็นสมาชิกอันเป็นที่รักของครอบครัว', zh: '婚礼三天后，新人正式拜访新娘的父母，这表明新娘仍然是她家庭中受珍爱的成员。' },
        longDescription: { 
            en: 'What is the purpose of this visit?\nThree days after the wedding, the couple formally visits the bride\'s parents. This signifies that the bride is still a cherished member of her natal family and formally introduces the groom as a son-in-law.\n\nHow is the couple welcomed?\nThe bride is no longer a guest but returns as a married daughter with her husband. They bring gifts for her family, and in return, her parents host a small banquet for them. This tradition reinforces the strong family bonds that continue even after marriage.', 
            th: 'การเยี่ยมเยียนนี้มีจุดประสงค์อะไร?\nสามวันหลังแต่งงาน คู่บ่าวสาวจะกลับไปเยี่ยมพ่อแม่ของฝ่ายหญิงอย่างเป็นทางการ เพื่อแสดงว่าเจ้าสาวยังคงเป็นสมาชิกอันเป็นที่รักของครอบครัวเดิม และเป็นการแนะนำเจ้าบ่าวในฐานะลูกเขยอย่างเป็นทางการ\n\nคู่บ่าวสาวได้รับการต้อนรับอย่างไร?\nเจ้าสาวไม่ได้กลับมาในฐานะแขกอีกต่อไป แต่กลับมาในฐานะลูกสาวที่แต่งงานแล้วพร้อมกับสามีของเธอ พวกเขานำของขวัญมาให้ครอบครัว และครอบครัวของเธอก็จะจัดงานเลี้ยงเล็กๆ ต้อนรับ ประเพณีนี้ช่วยกระชับความสัมพันธ์ในครอบครัวที่ยังคงแข็งแกร่งแม้หลังจากการแต่งงาน', 
            zh: '这次访问的目的是什么？\n婚礼三天后，新人正式拜访新娘的父母。这表明新娘仍然是娘家珍爱的成员，并正式将新郎介绍为女婿。\n\n新人如何受到欢迎？\n新娘不再是客人，而是作为已婚女儿与丈夫一同归来。他们为她的家人带来礼物，作为回报，她的父母为他们举办小型宴会。这个传统加强了即使在婚后也依然牢固的家庭纽带。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-08',
        title: { en: 'Wedding Banquet', th: 'งานเลี้ยงฉลองมงคลสมรส', zh: '婚宴' },
        shortDescription: { en: 'A grand feast hosted by the couple\'s families to celebrate the marriage with friends and relatives.', th: 'งานเลี้ยงฉลองอันยิ่งใหญ่ที่ครอบครัวของคู่บ่าวสาวจัดขึ้นเพื่อเฉลิมฉลองการแต่งงานร่วมกับเพื่อนและญาติพี่น้อง', zh: '由新人家庭举办的盛大宴会，与亲朋好友一同庆祝婚姻。' },
        longDescription: { 
            en: 'What is the banquet for?\nThe banquet is a grand feast to celebrate the marriage with a wider circle of friends and relatives and to thank them for their support and gifts.\n\nWhat kind of food is served?\nIt is a multi-course meal featuring symbolic dishes that represent blessings for the couple, such as fish for abundance and roasted pig for purity. The bride often changes outfits multiple times throughout the evening, showcasing a variety of beautiful dresses.', 
            th: 'งานเลี้ยงจัดขึ้นเพื่ออะไร?\nงานเลี้ยงเป็นงานฉลองอันยิ่งใหญ่เพื่อเฉลิมฉลองการแต่งงานร่วมกับเพื่อนและญาติพี่น้องในวงกว้าง และเพื่อขอบคุณสำหรับการสนับสนุนและของขวัญของพวกเขา\n\nมีอาหารประเภทใดบ้าง?\nเป็นอาหารหลายคอร์สที่เป็นมงคล ซึ่งเป็นตัวแทนของพรสำหรับคู่บ่าวสาว เช่น ปลาหมายถึงความอุดมสมบูรณ์ และหมูหันหมายถึงความบริสุทธิ์ เจ้าสาวมักจะเปลี่ยนชุดหลายครั้งตลอดทั้งคืน เพื่อโชว์ชุดที่สวยงามหลากหลาย', 
            zh: '婚宴的目的是什么？\n婚宴是一场盛大的宴会，与更广泛的朋友和亲戚庆祝婚姻，并感谢他们的支持和礼物。\n\n会提供什么样的食物？\n这是一场多道菜的盛宴，菜肴象征着对新人的祝福，例如鱼代表富足，烤乳猪代表纯洁。新娘在整个晚上通常会换几次衣服，展示各种美丽的礼服。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-09',
        title: { en: 'Double Happiness Symbol (Shuang Xi)', th: 'สัญลักษณ์ซังฮี้ (囍)', zh: '双喜' },
        shortDescription: { en: 'This character, composed of two "happiness" characters, is a ubiquitous symbol of marital bliss in Chinese weddings.', th: 'ตัวอักษรนี้ประกอบด้วยอักษร "ความสุข" สองตัว เป็นสัญลักษณ์ที่แพร่หลายของความสุขในชีวิตสมรสในงานแต่งงานของจีน', zh: '这个由两个“喜”字组成的字符，是中式婚礼中婚姻幸福的普遍象征。' },
        longDescription: { 
            en: 'What does the Double Happiness symbol mean?\nThis unique character is a ligature, created by combining two Chinese characters for \'happiness\' (喜). It represents the joyous union of two individuals and two families coming together.\n\nWhere is this symbol used?\nThe Shuang Xi symbol is seen everywhere during a wedding—on invitations, decorations, gifts, and even cakes. Its presence is believed to attract good fortune and a happy marriage for the newlyweds.', 
            th: 'สัญลักษณ์ซังฮี้หมายถึงอะไร?\nตัวอักษรที่ไม่เหมือนใครนี้เกิดจากการรวมตัวอักษรจีนคำว่า \'ความสุข\' (喜) สองตัวเข้าด้วยกัน เป็นสัญลักษณ์ของการรวมตัวกันอย่างมีความสุขของคนสองคนและสองครอบครัว\n\nสัญลักษณ์นี้ใช้ที่ไหนบ้าง?\nสัญลักษณ์ซังฮี้สามารถพบเห็นได้ทุกที่ในงานแต่งงาน ไม่ว่าจะเป็นบนการ์ดเชิญ ของตกแต่ง ของขวัญ หรือแม้แต่เค้ก เชื่อกันว่าการมีอยู่ของสัญลักษณ์นี้จะดึงดูดโชคลาภและชีวิตแต่งงานที่มีความสุขสำหรับคู่บ่าวสาว', 
            zh: '双喜符号是什么意思？\n这个独特的字符是由两个中文的“喜”字结合而成的。它代表着两个人、两个家庭的喜悦结合。\n\n这个符号用在哪里？\n双喜符号在婚礼期间随处可见——在请柬、装饰品、礼物甚至蛋糕上。人们相信它的存在会为新人带来好运和幸福的婚姻。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-10',
        title: { en: 'Betrothal Gift (Pin Jin)', th: 'สินสอดทองหมั้น (聘金)', zh: '聘金' },
        shortDescription: { en: 'A formal gift of money from the groom\'s family to the bride\'s family, symbolizing gratitude for raising the bride.', th: 'ของขวัญที่เป็นเงินอย่างเป็นทางการจากครอบครัวเจ้าบ่าวถึงครอบครัวเจ้าสาว เพื่อเป็นสัญลักษณ์ของความกตัญญูที่เลี้ยงดูเจ้าสาวมา', zh: '新郎家给新娘家的正式金钱礼物，象征着对养育新娘的感激之情。' },
        longDescription: { 
            en: 'Why is this monetary gift given?\nThe Pin Jin is presented during the Guo Da Li ceremony. It is not seen as a payment for the bride, but rather as a gesture of respect and a promise that the groom is financially capable of caring for their daughter. It also shows gratitude to the bride\'s parents for raising her.\n\nHow is the amount decided?\nThe amount is negotiated between the two families. Often, the bride\'s family will only accept a portion of it, returning the rest to show that they are not "selling" their daughter and wish for the couple to have a good financial start.', 
            th: 'ทำไมต้องให้ของขวัญเป็นเงิน?\nสินสอดจะถูกมอบให้ในระหว่างพิธีกัวต้าหลี่ ไม่ได้มองว่าเป็นการจ่ายเงินค่าเจ้าสาว แต่เป็นท่าทีของความเคารพและคำมั่นสัญญาว่าเจ้าบ่าวมีความสามารถทางการเงินที่จะดูแลลูกสาวของพวกเขาได้ และยังเป็นการแสดงความกตัญญูต่อพ่อแม่ของเจ้าสาวที่เลี้ยงดูเธอมา\n\nจำนวนเงินตัดสินใจอย่างไร?\nจำนวนเงินจะถูกเจรจาระหว่างสองครอบครัว บ่อยครั้งที่ครอบครัวของเจ้าสาวจะรับไว้เพียงบางส่วน และคืนส่วนที่เหลือเพื่อแสดงว่าพวกเขาไม่ได้ "ขาย" ลูกสาวและปรารถนาให้คู่บ่าวสาวมีจุดเริ่มต้นทางการเงินที่ดี', 
            zh: '为什么要送这份礼金？\n聘金在过大礼仪式上呈上。它不被视为购买新娘的费用，而是一种尊重和承诺的姿态，表明新郎有经济能力照顾他们的女儿。它也表示对新娘父母养育之恩的感谢。\n\n金额是如何决定的？\n金额由两家协商。通常，新娘家只会接受一部分，将其余的退还，以表明他们不是在“卖”女儿，并希望新人有一个良好的经济开端。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-11',
        title: { en: 'Dowry (Jia Zhuang)', th: 'ของหมั้นฝ่ายหญิง (嫁妆)', zh: '嫁妆' },
        shortDescription: { en: 'Gifts from the bride\'s family to the couple to help them start their new life together, symbolizing her family\'s love and support.', th: 'ของขวัญจากครอบครัวเจ้าสาวถึงคู่บ่าวสาวเพื่อช่วยให้พวกเขาเริ่มต้นชีวิตใหม่ร่วมกัน เป็นสัญลักษณ์ของความรักและการสนับสนุนจากครอบครัวของเธอ', zh: '新娘家送给新人的礼物，帮助他们开始新的生活，象征着娘家的爱与支持。' },
        longDescription: { 
            en: 'What is included in a dowry?\nThe dowry often includes practical items for the new home, like bedding, kitchenware, and furniture, as well as personal items for the bride like jewelry and money.\n\nWhat is the purpose of the dowry?\nIt is a way for the bride\'s parents to ensure their daughter\'s comfort and happiness in her new home. It also serves to demonstrate their own family\'s wealth and status, and to show that their daughter will not be a financial burden on the groom\'s family.', 
            th: 'ของหมั้นฝ่ายหญิงประกอบด้วยอะไรบ้าง?\nของหมั้นมักจะรวมถึงของใช้ในบ้านใหม่ เช่น เครื่องนอน เครื่องครัว และเฟอร์นิเจอร์ รวมถึงของใช้ส่วนตัวสำหรับเจ้าสาว เช่น เครื่องประดับและเงิน\n\nของหมั้นมีจุดประสงค์อะไร?\nเป็นวิธีที่พ่อแม่ของเจ้าสาวจะทำให้แน่ใจว่าลูกสาวของพวกเขามีความสุขสบายในบ้านใหม่ของเธอ และยังเป็นการแสดงความมั่งคั่งและสถานะของครอบครัวตนเอง และเพื่อแสดงว่าลูกสาวของพวกเขาจะไม่เป็นภาระทางการเงินของครอบครัวเจ้าบ่าว', 
            zh: '嫁妆包括什么？\n嫁妆通常包括新家的实用物品，如床上用品、厨具和家具，以及新娘的个人物品，如珠宝和金钱。\n\n嫁妆的目的是什么？\n这是新娘父母确保女儿在新家舒适幸福的一种方式。它也用于展示自己家庭的财富和地位，并表明他们的女儿不会成为新郎家的经济负担。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-12',
        title: { en: 'Choosing an Auspicious Date', th: 'การหาฤกษ์ยามมงคล', zh: '选择吉日' },
        shortDescription: { en: 'Selecting a wedding date based on the couple\'s birth dates and times using the Chinese almanac to ensure a blessed union.', th: 'การเลือกวันแต่งงานตามวันเดือนปีเกิดและเวลาของคู่บ่าวสาวโดยใช้ปฏิทินจีนเพื่อให้แน่ใจว่าการแต่งงานจะได้รับพร', zh: '根据新人的生辰八字，使用通书选择婚期，以确保婚姻美满。' },
        longDescription: { 
            en: 'Why is the date so important?\nA carefully selected date is believed to set the foundation for a happy, prosperous, and harmonious marriage. It aligns the union with positive cosmic energies.\n\nHow is the date chosen?\nA fortune teller or Feng Shui master is often consulted. They analyze the couple\'s birth dates and times (BaZi) to determine their compatibility and select a date that maximizes good fortune and minimizes potential conflicts. Certain dates, like the 7th lunar month (Ghost Month), are strictly avoided.', 
            th: 'ทำไมฤกษ์ยามจึงสำคัญมาก?\nเชื่อกันว่าวันที่เลือกอย่างรอบคอบจะวางรากฐานสำหรับชีวิตแต่งงานที่มีความสุข เจริญรุ่งเรือง และกลมเกลียว เป็นการจัดให้การแต่งงานสอดคล้องกับพลังงานที่ดีของจักรวาล\n\nเลือกฤกษ์ยามอย่างไร?\nมักจะปรึกษาหมอดูหรือซินแสฮวงจุ้ย พวกเขาจะวิเคราะห์วันเดือนปีเกิดและเวลาเกิดของคู่บ่าวสาว (八字) เพื่อกำหนดความเข้ากันได้และเลือกวันที่เพิ่มโชคลาภสูงสุดและลดความขัดแย้งที่อาจเกิดขึ้น วันที่บางวันเช่นเดือน 7 ตามจันทรคติ (เดือนผี) จะถูกหลีกเลี่ยงอย่างเคร่งครัด', 
            zh: '为什么日期如此重要？\n一个精心挑选的日子被认为能为一个幸福、繁荣与和谐的婚姻奠定基础。它使结合与积极的宇宙能量保持一致。\n\n如何选择日期？\n通常会咨询算命先生或风水大师。他们分析新人的生辰八字，以确定他们的相容性，并选择一个能最大化好运、最小化潜在冲突的日子。某些日期，如农历七月（鬼月），是严格避免的。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-13',
        title: { en: 'Wedding Invitations', th: 'การ์ดเชิญ', zh: '婚礼请柬' },
        shortDescription: { en: 'Traditionally red and gold, invitations are sent out with specific etiquette, including the use of the Double Happiness symbol.', th: 'ตามประเพณีจะเป็นสีแดงและสีทอง การ์ดเชิญจะถูกส่งออกไปพร้อมกับมารยาทที่เฉพาะเจาะจง รวมถึงการใช้สัญลักษณ์ซังฮี้', zh: '传统上是红色和金色，请柬的发送遵循特定的礼仪，包括使用双喜符号。' },
        longDescription: { 
            en: 'What color should the invitation be?\nRed is the mandatory color, symbolizing joy and luck. Gold lettering is often used to represent wealth and prosperity.\n\nWhat information is included?\nThe invitation is typically placed in a red envelope. The wording is formal and includes the names of the couple, their parents, the date and time of the banquet, and the location. The Double Happiness symbol (囍) is almost always featured prominently.', 
            th: 'การ์ดเชิญควรเป็นสีอะไร?\nสีแดงเป็นสีที่ต้องมี เป็นสัญลักษณ์ของความสุขและโชคลาภ มักใช้อักษรสีทองเพื่อแสดงถึงความมั่งคั่งและความเจริญรุ่งเรือง\n\nมีข้อมูลอะไรบ้าง?\nการ์ดเชิญมักจะใส่ในซองสีแดง ข้อความเป็นทางการและรวมถึงชื่อของคู่บ่าวสาว พ่อแม่ของพวกเขา วันที่และเวลาของงานเลี้ยง และสถานที่ สัญลักษณ์ซังฮี้ (囍) มักจะปรากฏอย่างเด่นชัดเสมอ', 
            zh: '请柬应该是什么颜色？\n红色是必须的颜色，象征着喜悦和幸运。通常使用金色字体来代表财富和繁荣。\n\n包含哪些信息？\n请柬通常放在红色信封里。措辞正式，包括新人、双方父母的姓名、宴会的日期和时间以及地点。双喜符号（囍）几乎总是 prominently featured。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-14',
        title: { en: 'The "Good Luck Woman" (Hao Ming Po)', th: 'ผู้ประกอบพิธี (เฮ่ามิ่งผัว - 好命婆)', zh: '好命婆' },
        shortDescription: { en: 'A woman with a happy marriage, healthy children, and living parents who assists in various rituals to pass on her good fortune.', th: 'ผู้หญิงที่มีชีวิตแต่งงานที่มีความสุข มีลูกมีสุขภาพดี และมีพ่อแม่ที่ยังมีชีวิตอยู่ ซึ่งจะช่วยในพิธีกรรมต่างๆ เพื่อส่งต่อโชคดีของเธอ', zh: '一位婚姻幸福、子女健康、父母健在的女性，协助各种仪式以传递她的好运。' },
        longDescription: { 
            en: 'What is the role of the "Good Luck Woman"?\nA Hao Ming Po is chosen for her "good fortune" - typically defined as having a living husband, healthy children, and living parents. Her role is to assist in key rituals to pass on her good fortune to the new couple.\n\nWhich ceremonies does she participate in?\nShe plays a crucial role in ceremonies like setting the bridal bed (An Chuang) and combing the bride\'s hair. Her presence is believed to bless the couple with a similarly happy and complete life.', 
            th: 'บทบาทของ "เฮ่ามิ่งผัว" คืออะไร?\nเฮ่ามิ่งผัวถูกเลือกจาก "โชคดี" ของเธอ ซึ่งโดยทั่วไปหมายถึงการมีสามีที่ยังมีชีวิตอยู่ มีลูกที่แข็งแรง และมีพ่อแม่ที่ยังมีชีวิตอยู่ บทบาทของเธอคือการช่วยในพิธีกรรมสำคัญเพื่อส่งต่อโชคดีของเธอให้กับคู่บ่าวสาว\n\nเธอเข้าร่วมพิธีใดบ้าง?\nเธอมีบทบาทสำคัญในพิธีต่างๆ เช่น การจัดเตียงเจ้าสาว (อันฉวง) และการหวีผมเจ้าสาว เชื่อกันว่าการมีอยู่ของเธอจะอวยพรให้คู่บ่าวสาวมีชีวิตที่สมบูรณ์และมีความสุขเช่นเดียวกัน', 
            zh: '“好命婆”的角色是什么？\n好命婆因其“好命”而被选中——通常定义为丈夫健在、子女健康、父母健在。她的角色是协助关键仪式，将她的好运传递给新人。\n\n她参加哪些仪式？\n她在安床和为新娘梳头等仪式中扮演着至关重要的角色。人们相信她的出现会祝福新人拥有同样幸福美满的生活。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-15',
        title: { en: 'Three Letters and Six Etiquettes', th: 'จดหมายสามฉบับและพิธีหกประการ', zh: '三书六礼' },
        shortDescription: { en: 'The traditional and highly ritualized process of betrothal in ancient Chinese culture.', th: 'กระบวนการหมั้นหมายตามประเพณีและพิธีกรรมอย่างสูงในวัฒนธรรมจีนโบราณ', zh: '中国古代文化中传统而高度仪式化的订婚过程。' },
        longDescription: { 
            en: 'What does this process involve?\nThis is the complete, historical process of betrothal. The Three Letters are the betrothal letter, gift letter, and wedding letter. The Six Etiquettes are the proposal, birthdate matching, presenting betrothal gifts, presenting wedding gifts, picking the wedding date, and the wedding ceremony itself.\n\nIs it still followed today?\nWhile not always followed strictly today, its principles of formal proposal, gift-giving, and date selection still heavily influence modern ceremonies like the Guo Da Li.', 
            th: 'กระบวนการนี้ประกอบด้วยอะไรบ้าง?\nนี่คือกระบวนการหมั้นหมายที่สมบูรณ์แบบในอดีต จดหมายสามฉบับคือจดหมายหมั้น จดหมายของขวัญ และจดหมายแต่งงาน พิธีหกประการคือการทาบทาม การจับคู่วันเกิด การมอบของหมั้น การมอบของขวัญแต่งงาน การเลือกวันแต่งงาน และพิธีแต่งงานเอง\n\nปัจจุบันยังปฏิบัติตามอยู่หรือไม่?\nแม้ในปัจจุบันจะไม่ปฏิบัติตามอย่างเคร่งครัดเสมอไป แต่หลักการของการสู่ขออย่างเป็นทางการ การให้ของขวัญ และการเลือกวันยังคงมีอิทธิพลอย่างมากต่อพิธีสมัยใหม่เช่น กัวต้าหลี่', 
            zh: '这个过程包括什么？\n这是完整的、历史悠久的订婚过程。三书是聘书、礼书和迎书。六礼是纳采、问名、纳吉、纳征、请期和亲迎。\n\n今天还遵循吗？\n虽然今天不一定严格遵守，但其正式提亲、送礼和择日的原则仍然严重影响着像过大礼这样的现代仪式。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-16',
        title: { en: 'Serving Sweet Soup (Tang Yuan)', th: 'ขนมบัวลอย (ทังหยวน - 汤圆)', zh: '汤圆' },
        shortDescription: { en: 'Eating Tang Yuan, sweet glutinous rice balls, symbolizes family togetherness and a sweet, complete marriage.', th: 'การทานทังหยวน ซึ่งเป็นข้าวเหนียวปั้นก้อนหวาน เป็นสัญลักษณ์ของความสามัคคีในครอบครัวและชีวิตแต่งงานที่หวานชื่นและสมบูรณ์', zh: '吃汤圆，即甜糯米团，象征着家庭团圆和甜蜜美满的婚姻。' },
        longDescription: { 
            en: 'What does Tang Yuan symbolize?\nThe name "Tang Yuan" sounds similar to the word for "reunion" (tuán yuán). Therefore, these sweet glutinous rice balls symbolize family togetherness and a sweet, complete marriage.\n\nWhen is it eaten?\nThis dish is often served to the family after the tea ceremony or during the morning of the wedding day. The round shape of the balls represents wholeness and completeness, reinforcing the wish for a perfect and harmonious union.', 
            th: 'ทังหยวนเป็นสัญลักษณ์ของอะไร?\nชื่อ "ทังหยวน" ฟังดูคล้ายกับคำว่า "การรวมตัว" (tuán yuán) ดังนั้น ขนมบัวลอยหวานเหล่านี้จึงเป็นสัญลักษณ์ของความสามัคคีในครอบครัวและชีวิตแต่งงานที่หวานชื่นและสมบูรณ์\n\nทานเมื่อไหร่?\nอาหารจานนี้มักจะเสิร์ฟให้ครอบครัวหลังพิธียกน้ำชาหรือในช่วงเช้าของวันแต่งงาน รูปร่างกลมของบัวลอยเป็นตัวแทนของความสมบูรณ์และความครบถ้วน ซึ่งตอกย้ำความปรารถนาให้มีชีวิตสมรสที่สมบูรณ์แบบและกลมเกลียว', 
            zh: '汤圆象征什么？\n“汤圆”的发音与“团圆”相似。因此，这些甜糯米团象征着家庭团圆和甜蜜美满的婚姻。\n\n什么时候吃？\n这道菜通常在敬茶仪式后或婚礼当天早上为家人端上。汤圆的圆形代表完整和圆满，加强了对完美和谐结合的祝愿。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-17',
        title: { en: 'Red Veil', th: 'ผ้าคลุมหน้าเจ้าสาวสีแดง', zh: '红盖头' },
        shortDescription: { en: 'The bride wears a red veil to cover her face, symbolizing modesty, and it is only lifted by the groom at the end of the ceremony.', th: 'เจ้าสาวสวมผ้าคลุมหน้าสีแดงเพื่อปิดหน้า เป็นสัญลักษณ์ของความสุภาพเรียบร้อย และเจ้าบ่าวเท่านั้นที่จะเป็นผู้เปิดผ้าคลุมในตอนท้ายของพิธี', zh: '新娘戴上红盖头遮住脸，象征着端庄，只有新郎在仪式结束时才能揭开。' },
        longDescription: { 
            en: 'What is the purpose of the red veil?\nThe bride wears a red veil to cover her face, symbolizing modesty and joy. The tradition is also said to ward off evil spirits.\n\nWhen is the veil lifted?\nIt is only lifted by the groom at the end of the ceremony, typically in the bridal chamber. This dramatic moment symbolizes the beginning of their new life together as husband and wife.', 
            th: 'ผ้าคลุมหน้าสีแดงมีจุดประสงค์อะไร?\nเจ้าสาวสวมผ้าคลุมหน้าสีแดงเพื่อปิดหน้า เป็นสัญลักษณ์ของความสุภาพเรียบร้อยและความสุข นอกจากนี้ยังเชื่อว่าประเพณีนี้ช่วยขับไล่สิ่งชั่วร้ายได้ด้วย\n\nเปิดผ้าคลุมเมื่อไหร่?\nเจ้าบ่าวเท่านั้นที่จะเป็นผู้เปิดผ้าคลุมในตอนท้ายของพิธี โดยปกติจะทำในห้องหอ ช่วงเวลาที่น่าทึ่งนี้เป็นสัญลักษณ์ของการเริ่มต้นชีวิตใหม่ร่วมกันในฐานะสามีภรรยา', 
            zh: '红盖头的目的是什么？\n新娘戴上红盖头遮住脸，象征着端庄和喜悦。据说这个传统还可以驱邪。\n\n什么时候揭开盖头？\n只有新郎在仪式结束时才能揭开，通常是在洞房里。这个戏剧性的时刻象征着他们作为夫妻新生活的开始。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-18',
        title: { en: 'Dragon and Phoenix Candles', th: 'เทียนมังกรและหงส์', zh: '龙凤烛' },
        shortDescription: { en: 'Two large red candles, one with a dragon and one with a phoenix, are lit to symbolize the union of the two families.', th: 'เทียนสีแดงขนาดใหญ่สองเล่ม เล่มหนึ่งมีมังกรและอีกเล่มหนึ่งมีหงส์ ถูกจุดขึ้นเพื่อเป็นสัญลักษณ์ของการรวมกันของสองครอบครัว', zh: '点燃两支大的红蜡烛，一支有龙，一支有凤，象征着两个家庭的结合。' },
        longDescription: { 
            en: 'What do these candles represent?\nOne candle features a dragon (representing the groom) and the other a phoenix (representing the bride). When lit together, they symbolize the union of the two individuals and their families.\n\nIs there a special belief associated with them?\nYes. These candles are lit in the bride\'s home and are meant to burn all night. It is considered a good omen if they burn out at the same time, symbolizing that the couple will grow old together and share a long, happy life.', 
            th: 'เทียนเหล่านี้เป็นตัวแทนของอะไร?\nเทียนเล่มหนึ่งมีมังกร (ตัวแทนเจ้าบ่าว) และอีกเล่มหนึ่งมีหงส์ (ตัวแทนเจ้าสาว) เมื่อจุดพร้อมกัน เป็นสัญลักษณ์ของการรวมกันของคนสองคนและครอบครัวของพวกเขา\n\nมีความเชื่อพิเศษที่เกี่ยวข้องกับเทียนเหล่านี้หรือไม่?\nใช่ เทียนเหล่านี้จะถูกจุดในบ้านของเจ้าสาวและจะต้องเผาไหม้ตลอดทั้งคืน ถือเป็นลางดีถ้าเทียนดับพร้อมกัน ซึ่งเป็นสัญลักษณ์ว่าคู่บ่าวสาวจะแก่เฒ่าไปด้วยกันและมีชีวิตที่ยืนยาวและมีความสุข', 
            zh: '这些蜡烛代表什么？\n一支蜡烛上有龙（代表新郎），另一支有凤（代表新娘）。当它们一起点燃时，象征着两个人及其家庭的结合。\n\n它们有什么特别的信仰吗？\n是的。这些蜡烛在新娘家点燃，并要燃烧整夜。如果它们同时燃尽，则被认为是个好兆头，象征着夫妻将白头偕老，共享长寿幸福的生活。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-19',
        title: { en: 'Firecrackers', th: 'การจุดประทัด', zh: '放鞭炮' },
        shortDescription: { en: 'Set off to create a celebratory atmosphere and, more importantly, to ward off evil spirits and bad luck.', th: 'จุดขึ้นเพื่อสร้างบรรยากาศเฉลิมฉลอง และที่สำคัญกว่านั้นคือเพื่อขับไล่สิ่งชั่วร้ายและโชคร้าย', zh: '燃放鞭炮以营造喜庆气氛，更重要的是，驱邪避祸。' },
        longDescription: { 
            en: 'Why are firecrackers used in weddings?\nTheir primary purpose in tradition is to ward off evil spirits and bad luck. The loud noise is believed to scare away any malevolent forces that might bring misfortune to the newlyweds.\n\nWhen are they set off?\nThey are typically set off at key moments of transition, such as when the groom\'s procession departs for the bride\'s home, and when the bride arrives at her new home, cleansing the path for a happy beginning.', 
            th: 'ทำไมต้องจุดประทัดในงานแต่งงาน?\nจุดประสงค์หลักตามประเพณีคือเพื่อขับไล่สิ่งชั่วร้ายและโชคร้าย เชื่อกันว่าเสียงดังของประทัดจะขับไล่พลังงานชั่วร้ายที่อาจนำโชคร้ายมาสู่คู่บ่าวสาว\n\nจุดประทัดเมื่อไหร่?\nโดยปกติจะจุดในช่วงเวลาสำคัญของการเปลี่ยนแปลง เช่น เมื่อขบวนของเจ้าบ่าวออกเดินทางไปบ้านเจ้าสาว และเมื่อเจ้าสาวมาถึงบ้านใหม่ของเธอ เป็นการชำระล้างเส้นทางเพื่อการเริ่มต้นที่มีความสุข', 
            zh: '为什么婚礼上要放鞭炮？\n传统上，它们的主要目的是驱邪避祸。人们相信鞭炮的巨大声响会吓跑可能给新人带来不幸的邪灵。\n\n什么时候放鞭炮？\n通常在关键的过渡时刻燃放，例如当新郎的迎亲队伍出发前往新娘家时，以及新娘到达新家时，为幸福的开始扫清道路。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-20',
        title: { en: 'Lion Dance', th: 'การเชิดสิงโต', zh: '舞狮' },
        shortDescription: { en: 'Often performed at the wedding banquet to bring good luck, prosperity, and to drive away evil spirits.', th: 'มักจะแสดงในงานเลี้ยงแต่งงานเพื่อนำโชคลาภ ความเจริญรุ่งเรือง และเพื่อขับไล่สิ่งชั่วร้าย', zh: '通常在婚宴上表演，以带来好运、繁荣并驱除邪灵。' },
        longDescription: { 
            en: 'What is the purpose of the lion dance?\nSimilar to firecrackers, the lion dance is believed to drive away evil spirits and bring good fortune. The lion is a symbol of strength, stability, and superiority.\n\nWhat does the performance involve?\nIt is a vibrant and energetic performance that adds a spectacular touch to the celebration. The performers mimic the lion\'s movements in a colorful costume, often interacting with the couple and guests to spread blessings and joy.', 
            th: 'การเชิดสิงโตมีจุดประสงค์อะไร?\nเช่นเดียวกับการจุดประทัด เชื่อกันว่าการเชิดสิงโตจะขับไล่สิ่งชั่วร้ายและนำโชคดีมาให้ สิงโตเป็นสัญลักษณ์ของความแข็งแกร่ง ความมั่นคง และความเหนือกว่า\n\nการแสดงประกอบด้วยอะไรบ้าง?\nเป็นการแสดงที่มีชีวิตชีวาและเปี่ยมด้วยพลัง ซึ่งเพิ่มความงดงามให้กับการเฉลิมฉลอง ผู้แสดงจะเลียนแบบการเคลื่อนไหวของสิงโตในชุดที่มีสีสันสดใส บ่อยครั้งที่จะมีปฏิสัมพันธ์กับคู่บ่าวสาวและแขกเพื่อแบ่งปันพรและความสุข', 
            zh: '舞狮的目的是什么？\n与鞭炮类似，舞狮被认为可以驱除邪灵并带来好运。狮子是力量、稳定和优越的象征。\n\n表演包括什么？\n这是一种充满活力和能量的表演，为庆祝活动增添了壮观的色彩。表演者穿着色彩缤纷的服装模仿狮子的动作，经常与新人和宾客互动，传播祝福和欢乐。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-21',
        title: { en: 'Gifting Wedding Cakes (Jia Nu Bing)', th: 'การมอบเค้กแต่งงาน (嫁女饼)', zh: '嫁女饼' },
        shortDescription: { en: 'The bride\'s family distributes wedding cakes to friends and family to formally announce the engagement and share their joy.', th: 'ครอบครัวของเจ้าสาวจะแจกจ่ายเค้กแต่งงานให้กับเพื่อนและญาติเพื่อประกาศการหมั้นหมายอย่างเป็นทางการและแบ่งปันความสุข', zh: '新娘家分发喜饼给亲朋好友，以正式宣布订婚并分享喜悦。' },
        longDescription: { 
            en: 'What are "daughter\'s cakes"?\nThese are traditional pastries given out by the bride\'s family to formally announce the engagement and share the happy news with their relatives and friends.\n\nWhat does this tradition signify?\nThe quantity and quality of the cakes distributed reflect the family\'s generosity and love for their daughter. It is a way of saying "our daughter is getting married" and sharing the sweetness and joy of the occasion with their community.', 
            th: ' "เค้กลูกสาว" คืออะไร?\nนี่คือขนมแบบดั้งเดิมที่ครอบครัวของเจ้าสาวมอบให้เพื่อประกาศการหมั้นหมายอย่างเป็นทางการและแบ่งปันข่าวดีกับญาติและเพื่อนของพวกเขา\n\nประเพณีนี้มีความหมายว่าอย่างไร?\nจำนวนและคุณภาพของเค้กที่แจกจ่ายสะท้อนถึงความใจกว้างและความรักที่ครอบครัวมีต่อลูกสาว เป็นวิธีการบอกว่า "ลูกสาวของเรากำลังจะแต่งงาน" และแบ่งปันความหวานและความสุขของโอกาสนี้กับคนรอบข้าง', 
            zh: '什么是“嫁女饼”？\n这是新娘家分发的传统糕点，以正式宣布订婚并与亲朋好友分享喜讯。\n\n这个传统象征着什么？\n分发喜饼的数量和质量，反映了家庭的慷慨和对女儿的爱。这是一种表达“我家有女初长成”并与社区分享这份甜蜜和喜悦的方式。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-22',
        title: { en: 'The Red Umbrella', th: 'ร่มแดงมงคล', zh: '红伞' },
        shortDescription: { en: 'Shielding the bride with a red umbrella as she leaves her home to ward off evil spirits and bring good fortune.', th: 'การกางร่มสีแดงให้เจ้าสาวขณะที่เธอออกจากบ้านเพื่อป้องกันสิ่งชั่วร้ายและนำมาซึ่งโชคลาภ', zh: '新娘离开家时用红伞遮挡，以辟邪并带来好运。' },
        longDescription: { 
            en: 'Why is a red umbrella used for the bride?\nWhen the bride departs from her home, a female elder or a bridesmaid holds a red umbrella over her head. This is believed to protect her from negative energy and evil spirits during the vulnerable transition from her family home to her husband\'s.\n\nDoes it have other meanings?\nYes, the Chinese character for umbrella (伞) sounds like the word for "scatter" (散), so rice is often thrown onto the umbrella to counteract this, symbolizing abundance and fertility instead.', 
            th: 'ทำไมต้องใช้ร่มสีแดงสำหรับเจ้าสาว?\nเมื่อเจ้าสาวออกจากบ้าน ญาติผู้ใหญ่ฝ่ายหญิงหรือเพื่อนเจ้าสาวจะกางร่มสีแดงไว้เหนือศีรษะของเธอ เชื่อกันว่าเพื่อป้องกันเธอจากพลังงานด้านลบและวิญญาณชั่วร้ายในช่วงเวลาเปลี่ยนผ่านที่ละเอียดอ่อนจากบ้านของเธอไปสู่บ้านของสามี\n\nมีความหมายอื่นอีกไหม?\nใช่ ตัวอักษรจีนสำหรับร่ม (伞) ฟังดูคล้ายกับคำว่า "กระจาย" (散) ดังนั้นจึงมักมีการโยนข้าวสารลงบนร่มเพื่อแก้เคล็ด ซึ่งเป็นสัญลักษณ์ของความอุดมสมบูรณ์และการเจริญพันธุ์แทน', 
            zh: '为什么新娘要用红伞？\n当新娘离开家时，一位女性长辈或伴娘会在她头上撑一把红伞。这被认为可以在她从娘家到夫家的脆弱过渡期间保护她免受负能量和邪灵的侵害。\n\n它还有其他含义吗？\n是的，中文的“伞”字听起来像“散”，所以通常会在伞上撒米来抵消这种含义，象征着富足和生育。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-23',
        title: { en: 'Tossing the Fan', th: 'การโยนพัด', zh: '掷扇' },
        shortDescription: { en: 'The bride tosses a fan out of the wedding car, symbolizing her leaving the past and any bad temper behind.', th: 'เจ้าสาวโยนพัดออกจากรถแต่งงาน เป็นสัญลักษณ์ของการทิ้งอดีตและอารมณ์ที่ไม่ดีไว้เบื้องหลัง', zh: '新娘从婚车里扔出一把扇子，象征着将过去和坏脾气抛在身后。' },
        longDescription: { 
            en: 'Why does the bride toss a fan?\nAs the bridal car departs from her home, the bride throws a fan out of the window. This act symbolizes leaving behind her past, her maiden life, and any bad temper or "princess" attitude.\n\nWhat does it signify for her new life?\nIt shows she is fully embracing her new role and future as a wife, ready to start a new chapter with maturity and a good temper. Often, two fans are used, with one being thrown away (the bad) and one kept (the good).', 
            th: 'ทำไมเจ้าสาวต้องโยนพัด?\nขณะที่รถแต่งงานออกจากบ้านของเธอ เจ้าสาวจะโยนพัดออกไปนอกหน้าต่าง การกระทำนี้เป็นสัญลักษณ์ของการทิ้งอดีต ชีวิตโสด และอารมณ์ที่ไม่ดีหรือนิสัย "เจ้าหญิง" ไว้เบื้องหลัง\n\nมันมีความหมายอย่างไรต่อชีวิตใหม่ของเธอ?\nแสดงให้เห็นว่าเธอยอมรับบทบาทใหม่และอนาคตในฐานะภรรยาอย่างเต็มที่ พร้อมที่จะเริ่มต้นบทใหม่ด้วยความเป็นผู้ใหญ่และอารมณ์ที่ดี บ่อยครั้งจะใช้พัดสองอัน โดยโยนอันหนึ่งทิ้งไป (สิ่งไม่ดี) และเก็บไว้อันหนึ่ง (สิ่งดี)', 
            zh: '为什么新娘要掷扇？\n当婚车离开她的家时，新娘会从窗户扔出一把扇子。这个行为象征着抛弃她的过去、她的少女生活和任何坏脾气或“公主病”。\n\n这对她的新生活意味着什么？\n这表明她完全拥抱她作为妻子的新角色和未来，准备以成熟和好脾气开始新的篇章。通常会用两把扇子，一把扔掉（坏的），一把留下（好的）。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-24',
        title: { en: 'Ancestral Worship', th: 'การไหว้บรรพบุรุษ', zh: '拜祖先' },
        shortDescription: { en: 'The couple formally honors their ancestors at their respective family altars before the wedding ceremony begins.', th: 'คู่บ่าวสาวทำการไหว้บรรพบุรุษอย่างเป็นทางการที่แท่นบูชาของแต่ละครอบครัวก่อนที่พิธีแต่งงานจะเริ่มขึ้น', zh: '新人在婚礼仪式开始前，分别在各自的家庭祭坛前正式祭拜祖先。' },
        longDescription: { 
            en: 'Why is honoring ancestors important?\nThis ritual is to formally inform their forefathers of the marriage, seek their blessings for the union, and show that the couple has not forgotten their roots.\n\nHow is it performed?\nBefore leaving their homes for the ceremony, both the bride and groom will light incense, offer food, and pray to their ancestors, inviting them to witness and bless the momentous occasion.', 
            th: 'ทำไมการไหว้บรรพบุรุษจึงสำคัญ?\nพิธีกรรมนี้มีขึ้นเพื่อแจ้งให้บรรพบุรุษทราบถึงการแต่งงานอย่างเป็นทางการ ขอพรเพื่อความเป็นสิริมงคล และแสดงว่าคู่บ่าวสาวยังไม่ลืมรากเหง้าของตน\n\nพิธีทำอย่างไร?\nก่อนออกจากบ้านเพื่อไปประกอบพิธี ทั้งเจ้าสาวและเจ้าบ่าวจะจุดธูป ถวายอาหาร และสวดมนต์ต่อบรรพบุรุษของตน เพื่อเชิญให้พวกท่านมาเป็นสักขีพยานและอวยพรในโอกาสสำคัญนี้', 
            zh: '为什么祭拜祖先很重要？\n这个仪式是为了正式告知他们的祖先这桩婚事，为结合寻求他们的祝福，并表明新人没有忘记自己的根。\n\n如何进行？\n在离开家参加仪式之前，新娘和新郎都会点燃香，供奉食物，并向他们的祖先祈祷，邀请他们见证并祝福这个重要的时刻。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-25',
        title: { en: 'The Gifting of "Si Dian Jin"', th: 'ประเพณีการมอบ "ซี่เตี๋ยมกิม"', zh: '四点金' },
        shortDescription: { en: 'A Teochew tradition where the groom\'s mother gifts a four-piece gold jewelry set to the bride as a welcome.', th: 'ประเพณีของชาวแต้จิ๋วที่แม่ของเจ้าบ่าวจะมอบชุดเครื่องประดับทองสี่ชิ้นให้กับเจ้าสาวเพื่อเป็นการต้อนรับ', zh: '潮州传统，新郎的母亲赠送一套四件套黄金首饰给新娘，以示欢迎。' },
        longDescription: { 
            en: 'What is "Si Dian Jin"?\nTranslating to "four points of gold", this is a traditional Teochew gift from the groom\'s mother to the bride. The set includes a necklace, a ring, a bangle, and a pair of earrings.\n\nWhat does it symbolize?\nIt symbolizes a promise from the mother-in-law that the bride will always have a roof over her head, representing the four corners of a traditional Chinese house. It\'s a gesture of welcome and a blessing for security and prosperity.', 
            th: '"ซี่เตี๋ยมกิม" คืออะไร?\nแปลว่า "ทองสี่จุด" นี่คือของขวัญตามประเพณีของชาวแต้จิ๋วจากแม่ของเจ้าบ่าวถึงเจ้าสาว ชุดประกอบด้วยสร้อยคอ แหวน กำไล และต่างหู\n\nมันเป็นสัญลักษณ์ของอะไร?\nเป็นสัญลักษณ์ของคำมั่นสัญญาจากแม่สามีว่าเจ้าสาวจะมีที่อยู่อาศัยเสมอ ซึ่งเปรียบเสมือนมุมทั้งสี่ของบ้านจีนโบราณ เป็นท่าทีของการต้อนรับและพรเพื่อความมั่นคงและความเจริญรุ่งเรือง', 
            zh: '什么是“四点金”？\n意为“四点黄金”，这是潮州传统中新郎的母亲送给新娘的礼物。这套首饰包括一条项链、一枚戒指、一只手镯和一对耳环。\n\n它象征着什么？\n它象征着婆婆的承诺，即新娘将永远有一个栖身之所，代表着传统中式房屋的四个角落。这是一种欢迎的姿态，也是对安稳和繁荣的祝福。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-26',
        title: { en: 'Crossing the Brazier of Fire', th: 'การก้าวข้ามกระถางไฟ', zh: '过火盆' },
        shortDescription: { en: 'The bride steps over a basin of burning coals before entering the groom\'s home to purify herself and burn away misfortune.', th: 'เจ้าสาวก้าวข้ามกระถางที่เต็มไปด้วยถ่านที่ลุกไหม้ก่อนเข้าบ้านเจ้าบ่าวเพื่อชำระล้างตนเองและเผาผลาญโชคร้าย', zh: '新娘在进入新郎家之前跨过一个燃烧的炭盆，以净化自己并烧掉不幸。' },
        longDescription: { 
            en: 'What is the purpose of this ritual?\nThe bride steps over a basin of burning coals before entering the groom\'s home. This is meant to purify her of any evil spirits or bad luck that may have followed her on her journey.\n\nWhat does the fire represent?\nStepping over the fire symbolizes the destruction of all obstacles and the beginning of a prosperous, vibrant, and "fiery" (prosperous) new life for the couple.', 
            th: 'พิธีกรรมนี้มีจุดประสงค์อะไร?\nเจ้าสาวก้าวข้ามกระถางที่เต็มไปด้วยถ่านที่ลุกไหม้ก่อนเข้าบ้านเจ้าบ่าว นี่มีจุดมุ่งหมายเพื่อชำระล้างวิญญาณชั่วร้ายหรือโชคร้ายที่อาจติดตามเธอมาในการเดินทางของเธอ\n\nไฟเป็นตัวแทนของอะไร?\nการก้าวข้ามไฟเป็นสัญลักษณ์ของการทำลายอุปสรรคทั้งปวงและการเริ่มต้นชีวิตใหม่ที่เจริญรุ่งเรือง สดใส และ "ร้อนแรง" (เจริญรุ่งเรือง) สำหรับคู่บ่าวสาว', 
            zh: '这个仪式的目的是什么？\n新娘在进入新郎家之前跨过一个燃烧的炭盆。这旨在净化她旅途中可能跟随她的任何邪灵或坏运气。\n\n火代表什么？\n跨过火盆象征着摧毁所有障碍，为新人开启一个繁荣、充满活力和“火红”（兴旺）的新生活。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-27',
        title: { en: 'The Wedding Toasts (Jing Jiu)', th: 'การดื่มอวยพร (จิ้งจิ่ว - 敬酒)', zh: '敬酒' },
        shortDescription: { en: 'The newlyweds visit each table at the banquet to personally toast their guests and thank them for celebrating with them.', th: 'คู่บ่าวสาวจะเดินไปแต่ละโต๊ะในงานเลี้ยงเพื่อดื่มอวยพรและขอบคุณแขกที่มาร่วมเฉลิมฉลองกับพวกเขาเป็นการส่วนตัว', zh: '新人在宴会上逐桌向宾客敬酒，亲自感谢他们与他们一同庆祝。' },
        longDescription: { 
            en: 'What happens during the toasts?\nOften changing into a new outfit (typically a red Qipao), the bride joins the groom and their parents to go from table to table at the wedding banquet. They share a toast (often with a loud "yam seng!") with their guests.\n\nWhy is this done?\nThis is a personal way to show gratitude and respect to everyone who has come to witness their union and share in their happiness. It ensures the couple has a moment to interact with all their guests.', 
            th: 'เกิดอะไรขึ้นระหว่างการดื่มอวยพร?\nเจ้าสาวมักจะเปลี่ยนเป็นชุดใหม่ (โดยทั่วไปคือ กี่เพ้าสีแดง) แล้วร่วมกับเจ้าบ่าวและพ่อแม่ของพวกเขาเดินไปทีละโต๊ะในงานเลี้ยงแต่งงาน พวกเขาจะดื่มอวยพร (มักจะตะโกน "ยำเส็ง!" เสียงดัง) กับแขกของพวกเขา\n\nทำไมต้องทำเช่นนี้?\nนี่เป็นวิธีการส่วนตัวในการแสดงความขอบคุณและความเคารพต่อทุกคนที่มาเป็นสักขีพยานในการแต่งงานของพวกเขาและแบ่งปันความสุขของพวกเขา ทำให้แน่ใจว่าคู่บ่าวสาวมีช่วงเวลาที่จะมีปฏิสัมพันธ์กับแขกทุกคน', 
            zh: '祝酒期间会发生什么？\n新娘通常会换上一套新衣服（通常是红色的旗袍），与新郎和双方父母一起在婚宴上逐桌敬酒。他们与客人分享祝酒词（通常会大声喊“饮胜！”）。\n\n为什么要这样做？\n这是一种亲自向所有前来见证他们结合并分享喜悦的人表示感谢和尊重的方式。它确保了新人有时间与所有宾客互动。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-28',
        title: { en: 'Symbolism of Mandarin Ducks', th: 'สัญลักษณ์เป็ดแมนดาริน', zh: '鸳鸯象征' },
        shortDescription: { en: 'Mandarin ducks, which are believed to mate for life, are a powerful and common symbol of fidelity and eternal love in marriage.', th: 'เป็ดแมนดารินซึ่งเชื่อกันว่าจับคู่กันตลอดชีวิต เป็นสัญลักษณ์ที่ทรงพลังและพบได้ทั่วไปของความซื่อสัตย์และความรักนิรันดร์ในการแต่งงาน', zh: '鸳鸯被认为终身配对，是婚姻中忠诚和永恒爱情的强大而普遍的象征。' },
        longDescription: { 
            en: 'Why are Mandarin ducks a symbol of love?\nThey are believed to mate for life and are seen as symbols of devotion, fidelity, and lifelong partnership.\n\nHow are they used in weddings?\nBecause they are seen as devoted partners, images of Mandarin ducks are frequently used in wedding decorations, on bedding, and as gifts. They represent the wish for the couple to have a faithful, loving, and inseparable bond throughout their lives, navigating life\'s waters together.', 
            th: 'ทำไมเป็ดแมนดารินถึงเป็นสัญลักษณ์ของความรัก?\nเชื่อกันว่าพวกมันจับคู่กันตลอดชีวิตและถูกมองว่าเป็นสัญลักษณ์ของความทุ่มเท ความซื่อสัตย์ และการเป็นหุ้นส่วนตลอดชีวิต\n\nพวกมันถูกนำมาใช้ในงานแต่งงานอย่างไร?\nเนื่องจากพวกมันถูกมองว่าเป็นคู่ชีวิตที่อุทิศตน รูปภาพของเป็ดแมนดารินจึงมักถูกนำมาใช้ในการตกแต่งงานแต่งงาน บนเครื่องนอน และเป็นของขวัญ พวกมันเป็นตัวแทนของความปรารถนาให้คู่บ่าวสาวมีความสัมพันธ์ที่ซื่อสัตย์ รักใคร่ และแยกจากกันไม่ได้ตลอดชีวิต และร่วมกันนำทางในสายน้ำแห่งชีวิต', 
            zh: '为什么鸳鸯是爱情的象征？\n它们被认为终身配对，被视为忠诚、专一和终身伴侣的象征。\n\n它们在婚礼中如何使用？\n因为它们被视为忠实的伴侣，所以鸳鸯的形象经常用于婚礼装饰、床上用品和礼物中。它们代表了希望新人一生忠诚、相爱、形影不离的愿望，共同驾驭生活的航船。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-29',
        title: { en: 'The Unity Toast', th: 'การดื่มเหล้าสาบาน', zh: '合卺酒' },
        shortDescription: { en: 'The couple drinks wine from two cups tied together with a red string, symbolizing their formal union and becoming one.', th: 'คู่บ่าวสาวดื่มไวน์จากถ้วยสองใบที่ผูกติดกันด้วยด้ายสีแดง เป็นสัญลักษณ์ของการรวมเป็นหนึ่งเดียวกันอย่างเป็นทางการ', zh: '新人从用红绳系在一起的两个杯子里喝酒，象征着他们正式结合，成为一体。' },
        longDescription: { 
            en: 'What is the Unity Toast?\nIn a traditional ceremony, the couple partakes in a unity toast, often with their arms intertwined as they drink from two cups tied together with a red string.\n\nWhat does it symbolize?\nThis act, known as "He Jin", symbolizes that they are now one entity, sharing in all of life\'s future joys and sorrows together. It is a formal declaration of their inseparable bond.', 
            th: 'การดื่มเหล้าสาบานคืออะไร?\nในพิธีแบบดั้งเดิม คู่บ่าวสาวจะร่วมดื่มอวยพรเพื่อความเป็นหนึ่งเดียว โดยมักจะคล้องแขนกันขณะดื่มจากถ้วยสองใบที่ผูกติดกันด้วยด้ายสีแดง\n\nมันเป็นสัญลักษณ์ของอะไร?\nการกระทำนี้เรียกว่า "เหอจิ่น" เป็นสัญลักษณ์ว่าตอนนี้พวกเขาเป็นหนึ่งเดียวกันแล้ว และจะร่วมแบ่งปันความสุขและความทุกข์ในอนาคตของชีวิตร่วมกัน เป็นการประกาศอย่างเป็นทางการถึงสายใยที่ไม่มีวันขาดสะบั้นของพวกเขา', 
            zh: '什么是合卺酒？\n在传统仪式中，新人会共饮交杯酒，通常是手臂交错着从用红绳系在一起的两个杯子里喝酒。\n\n它象征着什么？\n这个被称为“合卺”的行为，象征着他们现在是一个整体，将共同分享未来生活中的所有喜怒哀乐。这是他们牢不可破的纽带的正式宣言。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-30',
        title: { en: 'The Three Bows', th: 'การคำนับสามครั้ง', zh: '三拜' },
        shortDescription: { en: 'A formal ritual where the couple bows to Heaven and Earth, their parents and ancestors, and finally to each other.', th: 'พิธีกรรมที่เป็นทางการซึ่งคู่บ่าวสาวจะคำนับฟ้าดิน พ่อแม่และบรรพบุรุษ และสุดท้ายคือคำนับซึ่งกันและกัน', zh: '一个正式的仪式，新人向天地、父母祖先，最后相互鞠躬。' },
        longDescription: { 
            en: 'What do the three bows signify?\nThis is a pinnacle moment of the wedding ceremony. The first bow is to Heaven and Earth, showing respect for the universe and nature. The second bow is to their parents and ancestors, showing gratitude for their upbringing and lineage. The third and final bow is to each other, symbolizing mutual respect, love, and equality in their marriage.', 
            th: 'การคำนับสามครั้งมีความหมายว่าอย่างไร?\nนี่คือช่วงเวลาสำคัญที่สุดของพิธีแต่งงาน การคำนับครั้งแรกคือการคำนับฟ้าดิน เพื่อแสดงความเคารพต่อจักรวาลและธรรมชาติ การคำนับครั้งที่สองคือการคำนับพ่อแม่และบรรพบุรุษ เพื่อแสดงความกตัญญูต่อการเลี้ยงดูและวงศ์ตระกูล การคำนับครั้งที่สามและครั้งสุดท้ายคือการคำนับซึ่งกันและกัน เป็นสัญลักษณ์ของความเคารพซึ่งกันและกัน ความรัก และความเท่าเทียมกันในชีวิตสมรสของพวกเขา', 
            zh: '三拜象征着什么？\n这是婚礼仪式的高潮。第一拜是拜天地，表示对宇宙和自然的尊重。第二拜是拜高堂，表示对父母养育之恩和祖先的感激。第三拜是夫妻对拜，象征着他们在婚姻中的相互尊重、爱和平等。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-31',
        title: { en: 'Auspicious Fruits', th: 'ผลไม้มงคล', zh: '吉祥水果' },
        shortDescription: { en: 'Using symbolic fruits like oranges, pomelos, and pomegranates in wedding decor to invite wealth and fertility.', th: 'การใช้ผลไม้ที่เป็นสัญลักษณ์ เช่น ส้ม ส้มโอ และทับทิม ในการตกแต่งงานแต่งงานเพื่อเชื้อเชิญความมั่งคั่งและความอุดมสมบูรณ์', zh: '在婚礼装饰中使用象征性的水果，如橙子、柚子和石榴，以招来财富和生育。' },
        longDescription: { 
            en: 'Which fruits are considered lucky for weddings?\nMany fruits hold symbolic meaning. Oranges and pomelos symbolize abundance and good fortune because their names sound like the words for "wealth" and "to have". Pomegranates, with their many seeds, are a powerful symbol of fertility, expressing the hope for many children and grandchildren.', 
            th: 'ผลไม้ชนิดใดที่ถือเป็นมงคลสำหรับงานแต่งงาน?\nผลไม้หลายชนิดมีความหมายเชิงสัญลักษณ์ ส้มและส้มโอเป็นสัญลักษณ์ของความอุดมสมบูรณ์และโชคดีเนื่องจากชื่อของมันฟังดูคล้ายกับคำว่า "ความมั่งคั่ง" และ "การมี" ทับทิมซึ่งมีเมล็ดมากมายเป็นสัญลักษณ์ที่ทรงพลังของความอุดมสมบูรณ์ ซึ่งแสดงถึงความหวังที่จะมีลูกหลานมากมาย', 
            zh: '哪些水果在婚礼上被认为是吉祥的？\n许多水果具有象征意义。橙子和柚子象征着富足和好运，因为它们的名字听起来像“财富”和“拥有”。石榴因其多籽，是生育能力的强大象征，表达了多子多孙的希望。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-32',
        title: { en: 'The Bridal Sedan Chair', th: 'เกี้ยวเจ้าสาว', zh: '花轿' },
        shortDescription: { en: 'The historical tradition of transporting the bride to the groom\'s home in an ornate, decorated sedan chair.', th: 'ประเพณีในอดีตของการเดินทางของเจ้าสาวไปยังบ้านของเจ้าบ่าวในเกี้ยวที่ตกแต่งอย่างหรูหรา', zh: '将新娘用华丽装饰的轿子抬到新郎家的历史传统。' },
        longDescription: { 
            en: 'What is a bridal sedan chair?\nIn ancient times, the bride was carried in a beautifully decorated sedan chair (hua jiao) as part of a grand procession from her home to the groom\'s.\n\nWhat did this tradition represent?\nWhile rare today, this tradition represents the high honor and value placed upon the bride. It symbolized her honorable journey to her new family and the groom\'s family\'s wealth and status in being able to host such a grand procession.', 
            th: 'เกี้ยวเจ้าสาวคืออะไร?\nในสมัยโบราณ เจ้าสาวจะถูกหามในเกี้ยวที่ตกแต่งอย่างสวยงาม (ฮวาเจี้ยว) ซึ่งเป็นส่วนหนึ่งของขบวนแห่ที่ยิ่งใหญ่จากบ้านของเธอไปยังบ้านของเจ้าบ่าว\n\nประเพณีนี้เป็นตัวแทนของอะไร?\nแม้จะหาได้ยากในปัจจุบัน แต่ประเพณีนี้แสดงถึงเกียรติและคุณค่าอันสูงส่งที่มอบให้กับเจ้าสาว เป็นสัญลักษณ์ของการเดินทางอย่างมีเกียรติของเธอไปยังครอบครัวใหม่ และความมั่งคั่งและสถานะของครอบครัวเจ้าบ่าวที่สามารถจัดขบวนแห่ที่ยิ่งใหญ่เช่นนี้ได้', 
            zh: '什么是花轿？\n在古代，新娘是坐着装饰精美的花轿，作为从娘家到新郎家的盛大迎亲队伍的一部分被抬走的。\n\n这个传统代表了什么？\n这个传统虽然今天已经很少见，但它代表了对新娘的高度尊重和重视。它象征着她光荣地走向新家庭的旅程，以及新郎家能够举办如此盛大迎亲队伍的财富和地位。' 
        },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-33',
        title: { en: 'Giving Red Envelopes (Hongbao)', th: 'การให้ซองแดง (อั่งเปา)', zh: '送红包' },
        shortDescription: { en: 'Red envelopes containing "lucky money" are given as gifts to the couple and by the couple to others to spread luck and good wishes.', th: 'ซองแดงที่บรรจุ "เงินนำโชค" จะถูกมอบเป็นของขวัญให้กับคู่บ่าวสาว และคู่บ่าวสาวจะมอบให้กับผู้อื่นเพื่อแบ่งปันโชคและความปรารถนาดี', zh: '装有“利是”的红包作为礼物送给新人，新人也送给他人，以传播好运和祝福。' },
        longDescription: { 
            en: 'Who gives red envelopes at a wedding?\nGuests gift hongbao to the couple to wish them financial stability and prosperity. The couple, in turn, gives smaller hongbao to unmarried younger relatives, bridesmaids, and wedding helpers as a token of gratitude and to share their good fortune.', 
            th: 'ใครให้ซองแดงในงานแต่งงาน?\nแขกจะมอบอั่งเปาให้กับคู่บ่าวสาวเพื่ออวยพรให้พวกเขามีความมั่นคงทางการเงินและความเจริญรุ่งเรือง ในทางกลับกัน คู่บ่าวสาวจะมอบอั่งเปาซองเล็กให้กับญาติที่ยังไม่แต่งงาน เพื่อนเจ้าสาว และผู้ช่วยในงานแต่งงานเพื่อเป็นของขวัญแสดงความขอบคุณและแบ่งปันโชคดีของพวกเขา', 
            zh: '婚礼上谁会送红包？\n宾客赠送红包给新人，祝愿他们经济稳定、繁荣昌盛。新人则会给未婚的年轻亲戚、伴娘和婚礼助手一些较小的红包，以示感谢和分享他们的好运。' 
        },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-34',
        title: { en: 'The Groom\'s Procession', th: 'ขบวนแห่ของเจ้าบ่าว', zh: '迎亲' },
        shortDescription: { en: 'A lively entourage led by the groom to the bride\'s house, often accompanied by music, firecrackers, and a lion dance.', th: 'ขบวนแห่ที่คึกคักนำโดยเจ้าบ่าวไปยังบ้านของเจ้าสาว ซึ่งมักจะมีดนตรี ประทัด และการเชิดสิงโตประกอบ', zh: '由新郎带领的热闹迎亲队伍前往新娘家，通常伴有音乐、鞭炮和舞狮。' },
        longDescription: { 
            en: 'What is the "Ying Qin" procession?\n"Ying Qin" translates to "retrieving the bride". The groom, accompanied by his groomsmen and a lively entourage, travels to the bride\'s home. This procession is a joyous and noisy affair, publicly announcing the happy occasion and demonstrating the groom\'s excitement to marry his bride.', 
            th: '"หยิงชิน" (Ying Qin) คือขบวนอะไร?\n"หยิงชิน" แปลว่า "การรับเจ้าสาว" เจ้าบ่าวพร้อมด้วยเพื่อนเจ้าบ่าวและขบวนแห่ที่คึกคักจะเดินทางไปบ้านของเจ้าสาว ขบวนแห่นี้เป็นงานที่สนุกสนานและมีเสียงดัง เพื่อประกาศข่าวดีต่อสาธารณชนและแสดงความตื่นเต้นของเจ้าบ่าวที่จะได้แต่งงานกับเจ้าสาวของเขา', 
            zh: '什么是“迎亲”队伍？\n“迎亲”即迎接新娘。新郎在他的伴郎和热闹的迎亲队伍的陪同下，前往新娘家。这个队伍是一个欢乐而喧闹的活动，公开宣布喜讯，并展示新郎娶新娘的激动心情。' 
        },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-35',
        title: { en: 'The Red String of Fate', th: 'ด้ายแดงแห่งโชคชะตา', zh: '红线' },
        shortDescription: { en: 'The romantic belief that an invisible red string connects destined lovers, tying them together for eternity.', th: 'ความเชื่ออันโรแมนติกว่ามีด้ายแดงที่มองไม่เห็นเชื่อมโยงคู่รักที่ถูกลิขิตไว้ด้วยกันชั่วนิรันดร์', zh: '一种浪漫的信仰，认为一根看不见的红线连接着命中注定的恋人，将他们永远系在一起。' },
        longDescription: { 
            en: 'What is the story behind the Red String of Fate?\nAccording to ancient legend, the lunar matchmaking god, Yue Lao, ties an invisible red cord around the ankles (or little fingers) of those who are destined to meet and marry, regardless of time, place, or circumstances. This myth is a beautiful symbol of fate and the unbreakable bond between soulmates.', 
            th: 'เรื่องราวเบื้องหลังด้ายแดงแห่งโชคชะตาคืออะไร?\nตามตำนานโบราณ เทพเจ้าแห่งความรักใต้แสงจันทร์ หรือ "เฒ่าจันทรา" (Yue Lao) จะผูกด้ายแดงที่มองไม่เห็นไว้รอบข้อเท้า (หรือนิ้วก้อย) ของผู้ที่ถูกลิขิตให้มาพบและแต่งงานกัน โดยไม่คำนึงถึงเวลา สถานที่ หรือสถานการณ์ ตำนานนี้เป็นสัญลักษณ์ที่สวยงามของโชคชะตาและสายใยที่ไม่มีวันขาดสะบั้นระหว่างเนื้อคู่', 
            zh: '红线传说的背后故事是什么？\n根据古老传说，月老会将一根看不见的红绳系在命中注定要相遇并结婚的人的脚踝（或小指）上，无论时间、地点或环境如何。这个神话是命运和灵魂伴侣之间牢不可破的纽带的美丽象征。' 
        },
        imageUrl: pImgs[1]
    }
];

export const checklistData: ChecklistItem[] = [
    {
        id: 'dowry',
        category: { en: 'For the Dowry & Matrimonial Home', th: 'สำหรับสินสอดและของใช้ในเรือนหอ', zh: '嫁妆与新房用品' },
        tasks: [
            { id: 'd1', name: { en: 'Red or Pink Bedding Set', th: 'ชุดเครื่องนอนสีแดงหรือสีชมพู', zh: '红色或粉色床上用品' }, description: { en: 'Often embroidered with dragon & phoenix for marital bliss and happiness.', th: 'มักปักลายมังกรและหงส์เพื่อความเป็นสิริมงคลและความสุขในชีวิตสมรส', zh: '通常绣有龙凤图案，象征婚姻美满幸福。' }, imageUrl: pImgs[0], productId: 'bed-001' },
            { id: 'd2', name: { en: 'Pair of Pillows', th: 'หมอน', zh: '一对枕头' }, description: { en: 'Typically a pair, symbolizing a smooth and harmonious life together.', th: 'โดยทั่วไปจะเป็นคู่ เพื่อเป็นสัญลักษณ์ของชีวิตคู่ที่ราบรื่นและปรองดอง', zh: '通常为一对，象征夫妻生活和谐美满。' }, imageUrl: pImgs[1] },
            { id: 'd3', name: { en: 'Sewing Kit', th: 'ชุดอุปกรณ์เย็บปักถักร้อย', zh: '针线盒' }, description: { en: 'Represents the bride\'s readiness in her role as a homemaker.', th: 'แสดงถึงความพร้อมของเจ้าสาวในบทบาทแม่บ้านแม่เรือน', zh: '代表新娘具备持家能力。' }, imageUrl: pImgs[2] },
            { id: 'd4', name: { en: 'Pair of Lamps', th: 'ตะเกียงคู่', zh: '一对台灯' }, description: { en: 'Symbolizes fertility and a bright future for the couple.', th: 'เป็นสัญลักษณ์ของการมีทายาทและอนาคตที่สดใสของคู่บ่าวสาว', zh: '象征子孙满堂和夫妻光明的前程。' }, imageUrl: pImgs[0] },
            { id: 'd5', name: { en: 'Ruler', th: 'ไม้บรรทัด', zh: '尺子' }, description: { en: 'Signifies a life of happiness and abundance.', th: 'หมายถึงชีวิตที่มีความสุขและความอุดมสมบูรณ์', zh: '寓意幸福美满、百子千孙。' }, imageUrl: pImgs[1] },
            { id: 'd6', name: { en: 'Red Wooden Clogs', th: 'เกี๊ยะไม้สีแดง', zh: '红色木屐' }, description: { en: 'Represents a smooth and prosperous path in married life.', th: 'สื่อถึงเส้นทางชีวิตคู่ที่ราบรื่นและเจริญรุ่งเรือง', zh: '象征夫妻同心同步、步步高升。' }, imageUrl: pImgs[2] },
            { id: 'd7', name: { en: 'Gold Dowry Jewelry', th: 'เครื่องประดับทองสินสอด', zh: '嫁妆金饰' }, description: { en: 'Gold from the bride\'s family, symbolizing value and status.', th: 'ทองจากครอบครัวเจ้าสาว เป็นสัญลักษณ์แสดงถึงคุณค่าและฐานะ', zh: '女方家庭的黄金，象征价值和地位。' }, imageUrl: pImgs[0], productId: 'guodali-012' },
            { id: 'd8', name: { en: 'Pair of Red Basins', th: 'กะละมังสีแดง', zh: '一对红色脸盆' }, description: { en: 'A pair of basins symbolizes a prosperous new beginning.', th: 'กะละมังคู่เป็นสัญลักษณ์ของการเริ่มต้นชีวิตใหม่ที่รุ่งเรือง', zh: '象征新人生活富足美满。' }, imageUrl: pImgs[1] },
            { id: 'd9', name: { en: 'Baby Bathtub & Potty', th: 'อ่างอาบน้ำและกระโถนเด็ก', zh: '婴儿浴盆和便盆' }, description: { en: 'A symbolic gift wishing for children to come soon.', th: 'ของขวัญเชิงสัญลักษณ์ที่แสดงถึงความปรารถนาที่จะมีลูกในเร็ววัน', zh: '象征早生贵子的祝福。' }, imageUrl: pImgs[2] },
            { id: 'd10', name: { en: 'Pair of New Slippers', th: 'รองเท้าแตะคู่ใหม่', zh: '新婚拖鞋一对' }, description: { en: 'Symbolizes rising to new heights and walking a smooth path together.', th: 'เป็นสัญลักษณ์ของการก้าวไปสู่จุดที่สูงขึ้นและเดินบนเส้นทางที่ราบรื่นร่วมกัน', zh: '象征夫妻同心协力，步步高升。' }, imageUrl: pImgs[0] },
            { id: 'd11', name: { en: 'New Set of Bowls & Chopsticks', th: 'ชุดถ้วยและตะเกียบใหม่', zh: '子孙碗筷' }, description: { en: 'Represents a blessing for a life with abundant food and prosperity.', th: 'เป็นสัญลักษณ์ของคำอวยพรให้มีชีวิตที่อุดมสมบูรณ์และมั่งคั่ง', zh: '寓意丰衣足食，子孙满堂。' }, imageUrl: pImgs[1] },
        ]
    },
    {
        id: 'guodali',
        category: { en: 'For Betrothal Gifts (Guo Da Li)', th: 'สำหรับของขวัญในพิธีหมั้น (กัวต้าหลี่ - 過大禮)', zh: '过大礼聘礼' },
        tasks: [
            { id: 'gdl1', name: { en: 'Betrothal Baskets', th: 'ตะกร้าหมั้น', zh: '聘礼篮' }, description: { en: 'Traditional tiered baskets for carrying engagement gifts.', th: 'ตะกร้าแบบชั้นๆ ตามธรรมเนียมสำหรับใช้ใส่ของขวัญหมั้น', zh: '用于盛放聘礼的传统多层篮子。' }, imageUrl: pImgs[0], productId: 'guodali-001' },
            { id: 'gdl2', name: { en: 'Dragon & Phoenix Candles', th: 'เทียนมังกรและหงส์', zh: '龙凤蜡烛' }, description: { en: 'Symbolizes the union of the couple.', th: 'เป็นสัญลักษณ์ของการรวมเป็นหนึ่งเดียวของคู่บ่าวสาว', zh: '象征着新人的结合。' }, imageUrl: pImgs[1], productId: 'guodali-003' },
            { id: 'gdl3', name: { en: 'Wedding Cakes/Pastries', th: 'ขนมแต่งงาน/ขนมเปี๊ยะ', zh: '喜饼' }, description: { en: 'Distributed to the bride\'s relatives to announce the marriage.', th: 'สำหรับแจกจ่ายให้แก่ญาติของเจ้าสาวเพื่อประกาศการแต่งงาน', zh: '分发给女方亲戚以宣告婚事。' }, imageUrl: pImgs[2] },
            { id: 'gdl4', name: { en: 'Canned Pig\'s Trotters', th: 'ขาหมูกระป๋อง', zh: '猪脚罐头' }, description: { en: 'A gift representing abundance and wealth.', th: 'ของขวัญที่สื่อถึงความอุดมสมบูรณ์และความมั่งคั่ง', zh: '代表富足和财富的礼物。' }, imageUrl: pImgs[0] },
            { id: 'gdl5', name: { en: 'Liquor or Wine', th: 'เหล้าหรือไวน์', zh: '酒' }, description: { en: 'A gift to show respect to the bride\'s family.', th: 'ของขวัญเพื่อแสดงความเคารพต่อครอบครัวของเจ้าสาว', zh: '表示对女方家庭尊重的礼物。' }, imageUrl: pImgs[1] },
            { id: 'gdl6', name: { en: 'Oranges', th: 'ส้ม', zh: '橙子' }, description: { en: 'Symbolizes good luck and good fortune.', th: 'เป็นสัญลักษณ์ของความโชคดีและโชคลาภ', zh: '象征吉祥和好运。' }, imageUrl: pImgs[2] },
            { id: 'gdl7', name: { en: 'Dried Seafood', th: 'อาหารทะเลแห้ง', zh: '海味干货' }, description: { en: 'Represents wealth and an abundant life.', th: 'แสดงถึงความมั่งคั่งและชีวิตที่อุดมสมบูรณ์', zh: '代表财富和富裕的生活。' }, imageUrl: pImgs[0] },
            { id: 'gdl8', name: { en: 'Black Moss (髮菜)', th: 'สาหร่ายเส้นผม (髮菜)', zh: '发菜' }, description: { en: 'Symbolizes wealth as its name sounds like "get rich".', th: 'ชื่อพ้องเสียงกับคำว่า "ร่ำรวย" จึงเป็นสัญลักษณ์ของความมั่งคั่ง', zh: '因谐音“发财”而象征财富。' }, imageUrl: pImgs[1] },
            { id: 'gdl9', name: { en: 'Betrothal Money (Pin Jin)', th: 'สินสอดทองหมั้น (聘金)', zh: '聘金' }, description: { en: 'A formal monetary gift from the groom\'s family to show gratitude and respect.', th: 'ของขวัญที่เป็นเงินอย่างเป็นทางการจากครอบครัวเจ้าบ่าวเพื่อแสดงความขอบคุณและความเคารพ', zh: '男方家庭赠予女方家庭的正式礼金，以示感谢和尊重。' }, imageUrl: pImgs[2] },
        ]
    },
    {
        id: 'weddingday_items',
        category: { en: 'For Wedding Day Decorations & Ceremony Items', th: 'สำหรับของตกแต่งและของใช้ในพิธีวันแต่งงาน', zh: '婚礼当天装饰与仪式用品' },
        tasks: [
            { id: 'wd1', name: { en: 'Double Happiness Symbol (囍)', th: 'อักษรซังฮี้ (囍)', zh: '双喜字 (囍)' }, description: { en: 'The most important symbol, used on everything to signify marital bliss.', th: 'สัญลักษณ์ที่สำคัญที่สุด ใช้ประดับบนทุกสิ่งเพื่อสื่อถึงความสุขในชีวิตสมรส', zh: '最重要的象征，用于各种装饰以示婚姻美满。' }, imageUrl: pImgs[2], productId: 'decor-001' },
            { id: 'wd2', name: { en: 'Red Lanterns', th: 'โคมไฟสีแดง', zh: '红灯笼' }, description: { en: 'Used to bring luck and create a festive atmosphere.', th: 'ใช้เพื่อนำโชคและสร้างบรรยากาศแห่งการเฉลิมฉลอง', zh: '用来带来好运，营造喜庆气氛。' }, imageUrl: pImgs[0] },
            { id: 'wd3', name: { en: 'Dragon & Phoenix Symbols', th: 'สัญลักษณ์มังกรและหงส์', zh: '龙凤图案' }, description: { en: 'Represents the perfect match between the groom (dragon) and bride (phoenix).', th: 'แสดงถึงคู่ที่สมบูรณ์แบบระหว่างเจ้าบ่าว (มังกร) และเจ้าสาว (หงส์)', zh: '代表新郎（龙）和新娘（凤）的完美匹配。' }, imageUrl: pImgs[1] },
            { id: 'wd4', name: { en: 'Red Blessing Banners', th: 'ป้ายผ้าอวยพรสีแดง', zh: '红色对联' }, description: { en: 'Hung on doors and walls with auspicious messages.', th: 'แขวนไว้ที่ประตูและผนังพร้อมข้อความมงคล', zh: '挂在门和墙上，写有吉祥话语。' }, imageUrl: pImgs[2] },
            { id: 'wd5', name: { en: 'Tea Ceremony Set', th: 'ชุดน้ำชาสำหรับพิธียกน้ำชา', zh: '敬茶茶具' }, description: { en: 'A special red tea set for serving tea to elders to show respect.', th: 'ชุดถ้วยชาสีแดงพิเศษสำหรับใช้ในพิธียกน้ำชาให้แก่ผู้อาวุโสเพื่อแสดงความเคารพ', zh: '用于向长辈敬茶以示尊重的特殊红色茶具。' }, imageUrl: pImgs[0], productId: 'tea-001' },
            { id: 'wd6', name: { en: 'Red Kneeling Cushions', th: 'เบาะรองคุกเข่าสีแดง', zh: '红色跪垫' }, description: { en: 'For the couple to use during the tea ceremony.', th: 'สำหรับให้คู่บ่าวสาวใช้ระหว่างพิธียกน้ำชา', zh: '供新人在敬茶仪式上使用。' }, imageUrl: pImgs[1], productId: 'tea-004' },
            { id: 'wd7', name: { en: 'Red Umbrella', th: 'ร่มสีแดง', zh: '红伞' }, description: { en: 'Used to shield the bride from evil as she leaves home.', th: 'ใช้เพื่อป้องกันเจ้าสาวจากสิ่งชั่วร้ายขณะเดินทางออกจากบ้าน', zh: '新娘出门时用以辟邪。' }, imageUrl: pImgs[2] },
            { id: 'wd8', name: { en: 'Red Fan', th: 'พัดสีแดง', zh: '红扇' }, description: { en: 'Often held by the bride to symbolize leaving the past behind.', th: 'เจ้าสาวมักถือพัดเพื่อเป็นสัญลักษณ์ของการทิ้งอดีตไว้เบื้องหลัง', zh: '新娘手持，象征抛开过去。' }, imageUrl: pImgs[0], productId: 'acc-010' },
            { id: 'wd9', name: { en: 'Hair Combing Set', th: 'ชุดสำหรับพิธีหวีผม', zh: '梳头套装' }, description: { en: 'Includes a mirror and special combs for the pre-wedding hair combing ritual.', th: 'ประกอบด้วยกระจกและหวีพิเศษสำหรับพิธีกรรมการหวีผมก่อนแต่งงาน', zh: '包括用于婚前梳头仪式的镜子和专用梳子。' }, imageUrl: pImgs[1] },
            { id: 'wd10', name: { en: 'Firecrackers', th: 'ประทัด', zh: '鞭炮' }, description: { en: 'To be set off to create a celebratory atmosphere and ward off evil spirits.', th: 'ใช้จุดเพื่อสร้างบรรยากาศแห่งการเฉลิมฉลองและขับไล่สิ่งชั่วร้าย', zh: '用于营造喜庆气氛并驱赶邪灵。' }, imageUrl: pImgs[2] },
        ]
    },
    {
        id: 'misc',
        category: { en: 'Other Auspicious Items', th: 'ของใช้มงคลเบ็ดเตล็ดอื่นๆ', zh: '其他吉祥物品' },
        tasks: [
            { id: 'm1', name: { en: 'Red Envelopes (Hongbao)', th: 'ซองอั่งเปา (หงเปา)', zh: '红包' }, description: { en: 'Used for gifting money as a form of blessing.', th: 'ใช้สำหรับใส่เงินเพื่อมอบเป็นของขวัญอวยพร', zh: '用于包钱作为祝福礼物。' }, imageUrl: pImgs[2] },
            { id: 'm2', name: { en: 'Auspicious Fruits', th: 'ผลไม้มงคล', zh: '吉祥水果' }, description: { en: 'Pomegranates (fertility) and pomelos (harmony) are popular.', th: 'ทับทิม (การมีลูกมาก) และส้มโอ (ความสามัคคี) เป็นที่นิยม', zh: '石榴（多子）和柚子（和谐）很受欢迎。' }, imageUrl: pImgs[0] },
            { id: 'm3', name: { en: 'Auspicious Sweets', th: 'ขนมมงคล', zh: '喜糖' }, description: { en: 'Candies and various sweets symbolize a sweet married life.', th: 'ลูกอมและของหวานต่างๆ เป็นสัญลักษณ์ของชีวิตคู่ที่หอมหวาน', zh: '糖果和甜点象征甜蜜的婚姻生活。' }, imageUrl: pImgs[1] },
            { id: 'm4', name: { en: 'Puffed Rice Candy (大米糖)', th: 'ขนมข้าวพอง (大米糖)', zh: '大米糖' }, description: { en: 'Symbolizes a life full of prosperity.', th: 'เป็นสัญลักษณ์ของชีวิตที่เต็มไปด้วยความเจริญรุ่งเรือง', zh: '象征生活富足、节节高升。' }, imageUrl: pImgs[2] },
            { id: 'm5', name: { en: 'Car Decorations', th: 'ของตกแต่งรถยนต์', zh: '婚车装饰' }, description: { en: 'Red ribbons and Double Happiness stickers for the wedding car.', th: 'ริบบิ้นสีแดงและสติกเกอร์ซังฮี้สำหรับติดรถแต่งงาน', zh: '用于婚车的红丝带和双喜字贴纸。' }, imageUrl: pImgs[0] },
            { id: 'm6', name: { en: 'Wedding Favors for Guests', th: 'ของชำร่วยสำหรับแขก', zh: '宾客回礼' }, description: { en: 'Small gifts to thank guests for their attendance and blessings.', th: 'ของขวัญเล็กๆ น้อยๆ เพื่อขอบคุณแขกที่มาร่วมงานและให้พร', zh: '感谢宾客出席和祝福的小礼物。' }, imageUrl: pImgs[1] },
        ]
    }
];

// Fix: Moved faqData from types.ts to data.ts, added type annotation, and exported it.
export const faqData: FaqItem[] = [
    {
        id: 'faq1',
        category: 'products_ceremonies',
        question: { en: 'What is the difference between a Qun Kwa and a Qipao?', th: 'ชุด Qun Kwa (ฉวินขว้า) กับ Qipao (กี่เพ้า) แตกต่างกันอย่างไร?', zh: '裙褂和旗袍有什么区别？' },
        answer: { en: 'A Qun Kwa is a traditional two-piece bridal gown, heavily embroidered with gold and silver thread, typically worn for the main ceremonies like the tea ceremony. A Qipao (or Cheongsam) is a more modern, form-fitting one-piece dress that can be worn during the wedding banquet or other parts of the celebration.', th: 'Qun Kwa (ฉวินขว้า) เป็นชุดเจ้าสาวสองชิ้นแบบดั้งเดิม ปักด้วยดิ้นทองและเงินอย่างวิจิตร มักสวมใส่ในพิธีหลัก เช่น พิธียกน้ำชา ส่วน Qipao (กี่เพ้า) หรือ Cheongsam เป็นชุดเดรสชิ้นเดียวที่เข้ารูปและทันสมัยกว่า สามารถสวมใส่ในช่วงงานเลี้ยงฉลองมงคลสมรสหรือส่วนอื่นๆ ของงานได้', zh: '裙褂是传统的两件套新娘礼服，通常用金银线进行重工刺绣，主要在敬茶等主要仪式上穿着。旗袍则是一种更为现代、修身的单件连衣裙，可在婚宴或庆典的其他环节穿着。' }
    },
    {
        id: 'faq2',
        category: 'products_ceremonies',
        question: { en: 'What does the dragon and phoenix embroidery symbolize?', th: 'ลายปักมังกรและหงส์มีความหมายว่าอย่างไร?', zh: '龙凤刺绣象征着什么？' },
        answer: { en: 'The dragon represents the groom (masculine, yang energy, strength, and good luck), while the phoenix represents the bride (feminine, yin energy, beauty, and grace). Together, they symbolize the perfect, harmonious union of a couple—marital bliss.', th: 'มังกรเป็นตัวแทนของเจ้าบ่าว (พลังหยาง, ความแข็งแกร่ง, โชคลาภ) ในขณะที่หงส์เป็นตัวแทนของเจ้าสาว (พลังหยิน, ความงาม, ความสง่างาม) เมื่ออยู่คู่กันจึงเป็นสัญลักษณ์ของการครองคู่ที่สมบูรณ์แบบและกลมเกลียว หรือความสุขในชีวิตสมรส', zh: '龙代表新郎（阳刚之气、力量和好运），而凤则代表新娘（阴柔之美、优雅和端庄）。两者结合象征着夫妻完美和谐的结合——即婚姻美满。' }
    },
    {
        id: 'faq3',
        category: 'store_services',
        question: { en: 'Do I need an appointment to visit the store?', th: 'ฉันต้องนัดหมายล่วงหน้าเพื่อไปที่ร้านหรือไม่?', zh: '我需要预约才能到店参观吗？' },
        answer: { en: 'While walk-ins are welcome, we highly recommend making an appointment for bridal attire fittings or detailed consultations. An appointment ensures that one of our specialists can dedicate their full attention to you, providing a personalized and unhurried experience.', th: 'แม้ว่าเราจะยินดีต้อนรับลูกค้าวอล์กอิน แต่เราขอแนะนำอย่างยิ่งให้ทำการนัดหมายล่วงหน้าสำหรับการลองชุดเจ้าสาวหรือการปรึกษาโดยละเอียด การนัดหมายจะช่วยให้แน่ใจว่าผู้เชี่ยวชาญของเราสามารถให้ความสนใจกับคุณได้อย่างเต็มที่ มอบประสบการณ์ที่เป็นส่วนตัวและไม่เร่งรีบ', zh: '虽然我们欢迎您随时光临，但我们强烈建议您为新娘礼服试穿或详细咨询进行预约。预约可确保我们的专家能够全心全意为您服务，提供个性化且从容的体验。' }
    },
    {
        id: 'faq-new-01',
        category: 'knowledge_culture',
        question: {
            th: 'ถ้าจะจัดงานแต่งงานแบบจีน แต่ไม่มีความรู้เลย ควรเริ่มต้นอย่างไร?',
            en: 'If I want to have a Chinese wedding but have no knowledge, how should I start?',
            zh: '如果我想举办中式婚礼但没有任何知识，我该如何开始？'
        },
        answer: {
            th: 'ไม่ต้องกังวลเลยครับ ถือเป็นเรื่องปกติของคนรุ่นใหม่ ทางร้านยินดีให้คำปรึกษาเบื้องต้นเพื่อลำดับขั้นตอนและแนะนำของใช้ที่จำเป็นในแต่ละพิธีการ การเข้ามาพูดคุยที่ร้านจะช่วยให้คุณเห็นภาพรวมและวางแผนได้ง่ายขึ้นมากครับ',
            en: 'Don\'t worry, this is common for the new generation. Our shop is happy to provide an initial consultation to outline the steps and recommend necessary items for each ceremony. Visiting us for a chat will help you get a much clearer overall picture and make planning easier.',
            zh: '别担心，这对新一代来说是很常见的。我们的商店很乐意提供初步咨询，概述步骤并为每个仪式推荐必需品。来店里聊聊会帮助您更清晰地了解整体情况，使策划更容易。'
        }
    },
    {
        id: 'faq-new-02',
        category: 'products_ceremonies',
        question: {
            th: 'ของใช้ในพิธีจำเป็นต้องซื้อครบทุกอย่างตามรายการหรือไม่?',
            en: 'Is it necessary to buy every single item on the ceremonial list?',
            zh: '清单上的每件仪式用品都必须购买吗？'
        },
        answer: {
            th: 'ขึ้นอยู่กับธรรมเนียมของแต่ละครอบครัวครับ บางบ้านอาจจะเน้นพิธีการหลักๆ บางบ้านอาจจะจัดเต็มรูปแบบ ทางที่ดีที่สุดคือการเข้ามาปรึกษา เพื่อที่เราจะสามารถช่วยจัดชุดของใช้ให้เหมาะสมกับความต้องการและงบประมาณของคุณได้',
            en: 'It depends on each family\'s traditions. Some may focus on the main ceremonies, while others may go for the full experience. The best approach is to come in for a consultation, so we can help you assemble a set of items that fits your needs and budget.',
            zh: '这取决于每个家庭的传统。有些家庭可能只关注主要仪式，而其他家庭可能会选择完整的体验。最好的方法是前来咨询，这样我们可以帮助您组合一套符合您需求和预算的物品。'
        }
    },
    {
        id: 'faq-new-03',
        category: 'store_services',
        question: {
            th: 'สินค้าบางชิ้นสามารถเช่าได้หรือไม่?',
            en: 'Can some items be rented?',
            zh: '有些物品可以租用吗？'
        },
        // Fix: Added missing 'en' and 'zh' properties to the 'answer' field for a FAQ item to match the MultilingualString type.
        answer: {
            th: 'ได้ครับ โดยเฉพาะชุดเจ้าบ่าว-เจ้าสาว เรามีบริการให้เช่าซึ่งเป็นที่นิยมมากครับ ช่วยให้คุณสามารถสวมใส่ชุดที่หรูหราที่สุดในวันสำคัญโดยไม่ต้องซื้อขาด กรุณาติดต่อสอบถามรายละเอียดเพิ่มเติมเกี่ยวกับตัวเลือกการเช่าได้ที่ร้านครับ',
            en: 'Yes, especially for bride and groom attire, we have a very popular rental service. This allows you to wear the most luxurious outfits on your special day without having to purchase them. Please contact the store for more details about rental options.',
            zh: '是的，特别是新郎新娘的礼服，我们提供非常受欢迎的租赁服务。这让您可以在重要的日子里穿上最华丽的服装，而无需购买。请联系店铺了解更多关于租赁选项的详情。'
        }
    },
];

export const traditionsFaqData: FaqItem[] = [
    {
        id: 'trad-faq-1',
        category: 'traditions',
        question: { en: 'Why is the color red so important in Chinese weddings?', th: 'ทำไมสีแดงถึงมีความสำคัญอย่างยิ่งในงานแต่งงานของจีน?', zh: '为什么红色在中式婚礼中如此重要？' },
        answer: { en: 'Red is the ultimate symbol of joy, luck, prosperity, and happiness in Chinese culture. It is believed to ward off evil spirits and bring good fortune to the couple. From the bride\'s dress to the decorations and red envelopes, the color red envelops the celebration in blessings.', th: 'สีแดงเป็นสัญลักษณ์สูงสุดของความสุข โชคลาภ ความเจริญรุ่งเรือง และความปิติในวัฒนธรรมจีน เชื่อกันว่าสีแดงสามารถขับไล่สิ่งชั่วร้ายและนำโชคดีมาสู่คู่บ่าวสาวได้ ตั้งแต่ชุดเจ้าสาวไปจนถึงของตกแต่งและซองอั่งเปา สีแดงจะห่อหุ้มงานเฉลิมฉลองไว้ด้วยคำอวยพร', zh: '红色在中国文化中是喜悦、幸运、繁荣和幸福的终极象征。人们相信它能辟邪，并为新人带来好运。从新娘的礼服到装饰品和红包，红色将整个庆典包裹在祝福之中。' }
    },
    {
        id: 'trad-faq-2',
        category: 'traditions',
        question: { en: 'What is the significance of choosing an auspicious wedding date?', th: 'การเลือกฤกษ์มงคลสำหรับงานแต่งงานมีความสำคัญอย่างไร?', zh: '选择一个吉祥的婚期有何意义？' },
        answer: { en: 'A carefully selected date, often chosen by a Feng Shui master based on the couple\'s birth dates and times (BaZi), is believed to ensure a harmonious and prosperous marriage. The right date aligns the union with positive cosmic energies, setting a foundation for a lifetime of happiness and minimizing potential future conflicts.', th: 'การเลือกวันที่อย่างรอบคอบ ซึ่งมักจะเลือกโดยซินแสฮวงจุ้ยตามวันเดือนปีเกิดและเวลาเกิดของคู่บ่าวสาว (八字) เชื่อกันว่าจะช่วยให้ชีวิตแต่งงานราบรื่นและเจริญรุ่งเรือง วันที่เหมาะสมจะทำให้การแต่งงานสอดคล้องกับพลังงานที่ดีของจักรวาล เป็นการวางรากฐานสำหรับชีวิตที่มีความสุขและลดความขัดแย้งที่อาจเกิดขึ้นในอนาคต', zh: '一个精心挑选的日子，通常由风水大师根据新人的生辰八字（八字）选定，被认为能确保婚姻和谐美满。正确的日子能使结合与积极的宇宙能量保持一致，为一生的幸福奠定基础，并最大限度地减少未来潜在的冲突。' }
    },
    {
        id: 'trad-faq-3',
        category: 'traditions',
        question: { en: 'Do modern couples still follow all these traditions?', th: 'คู่รักสมัยใหม่ยังคงปฏิบัติตามประเพณีเหล่านี้ทั้งหมดหรือไม่?', zh: '现代夫妻还遵循所有这些传统吗？' },
        answer: { en: 'It varies greatly from family to family. Many modern couples choose to simplify the process, focusing on the most significant traditions like the Tea Ceremony and the wedding banquet. They often blend ancient customs with modern elements to create a wedding that is both respectful of their heritage and personal to them.', th: 'แตกต่างกันไปในแต่ละครอบครัว คู่รักสมัยใหม่จำนวนมากเลือกที่จะทำให้กระบวนการง่ายขึ้น โดยเน้นไปที่ประเพณีที่สำคัญที่สุด เช่น พิธียกน้ำชาและงานเลี้ยงฉลองมงคลสมรส พวกเขามักจะผสมผสานประเพณีโบราณเข้ากับองค์ประกอบสมัยใหม่เพื่อสร้างงานแต่งงานที่ทั้งเคารพในมรดกและเป็นส่วนตัวของพวกเขา', zh: '这因家庭而异。许多现代夫妻选择简化流程，专注于最重要的传统，如敬茶仪式和婚宴。他们常常将古老习俗与现代元素相结合，创造出一个既尊重传统又具个性的婚礼。' }
    },
    {
        id: 'trad-faq-4',
        category: 'traditions',
        question: { en: 'As a guest, what is the most important etiquette to know?', th: 'ในฐานะแขก มารยาทที่สำคัญที่สุดที่ควรรู้คืออะไร?', zh: '作为宾客，最重要的礼仪是什么？' },
        answer: { en: 'The most common practice is to give a red envelope (hongbao) containing money. The amount should be an even number and avoid the number four. Wear festive, bright colors like red, pink, or gold, and avoid wearing black or white, as these colors are associated with funerals. Finally, be prepared to join in the celebratory toasts!', th: 'ธรรมเนียมปฏิบัติที่พบบ่อยที่สุดคือการให้ซองแดง (อั่งเปา) ที่บรรจุเงิน จำนวนเงินควรเป็นเลขคู่และหลีกเลี่ยงเลขสี่ สวมเสื้อผ้าสีสดใส เช่น สีแดง ชมพู หรือทอง และหลีกเลี่ยงการสวมสีดำหรือขาว เนื่องจากสีเหล่านี้เกี่ยวข้องกับงานศพ สุดท้าย เตรียมพร้อมที่จะร่วมดื่มอวยพรเฉลิมฉลอง!', zh: '最常见的做法是送一个装有钱的红包。金额应为偶数，并避免数字四。穿着喜庆、鲜艳的颜色，如红色、粉色或金色，避免穿黑色或白色，因为这些颜色与葬礼有关。最后，准备好加入庆祝的祝酒活动！' }
    }
];