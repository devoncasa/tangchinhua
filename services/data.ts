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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Bride\'s Attire', th: 'ชุดสำหรับเจ้าสาว', zh: '新娘礼服' }
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
    category: { en: 'Groom\'s Attire', th: 'ชุดสำหรับเจ้าบ่าว', zh: '新郎礼服' }
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
    category: { en: 'Groom\'s Attire', th: 'ชุดสำหรับเจ้าบ่าว', zh: '新郎礼服' }
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
    category: { en: 'Groom\'s Attire', th: 'ชุดสำหรับเจ้าบ่าว', zh: '新郎礼服' }
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
    category: { en: 'Accessories', th: 'เครื่องประดับ', zh: '配饰' }
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
    category: { en: 'Accessories', th: 'เครื่องประดับ', zh: '配饰' }
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
    category: { en: 'Guo Da Li Items', th: 'เครื่องใช้ในพิธีหมั้น', zh: '过大礼用品' }
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
    category: { en: 'Guo Da Li Items', th: 'เครื่องใช้ในพิธีหมั้น', zh: '过大礼用品' }
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
    category: { en: 'Guo Da Li Items', th: 'เครื่องใช้ในพิธีหมั้น', zh: '过大礼用品' }
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
    category: { en: 'Tea Ceremony Items', th: 'เครื่องใช้ในพิธียกน้ำชา', zh: '敬茶仪式用品' }
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
    category: { en: 'Bed-Setting Items', th: 'เครื่องใช้ในพิธีปูเตียง', zh: '安床用品' }
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
    category: { en: 'Decorations & Stationery', th: 'ของตกแต่งและเครื่องเขียน', zh: '装饰文具' }
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
            th: "ในวัฒนธรรมจีน มังกร (龍) เป็นตัวแทนของอำนาจ ความแข็งแกร่ง และโชคลาภสำหรับฝ่ายชาย ในขณะที่หงส์ (鳳) เป็นสัญลักษณ์ของความงาม ความสง่างาม และความโชคดีสำหรับฝ่ายหญิง เมื่ออยู่คู่กัน ทั้งสองจึงเป็นตัวแทนของการสมรสที่สมบูรณ์แบบ เป็นการผสมผสานระหว่างหยินและหยางที่ลงตัวที่สุด การปรากฏของลายปักมังกรและหงส์บนชุดแต่งงานจึงเป็นการอวยพรให้คู่บ่าวสาวมีชีวิตคู่ที่เปี่ยมสุข มีความเจริญรุ่งเรือง และกลมเกลียวเป็นหนึ่งเดียวกัน",
            en: "In Chinese culture, the dragon (龍) represents masculine power, strength, and good fortune, while the phoenix (鳳) symbolizes feminine beauty, grace, and luck. Together, they represent the perfect marital union—a harmonious balance of yin and yang. The presence of dragon and phoenix embroidery on wedding attire blesses the couple with a blissful, prosperous, and harmonious life together.",
            zh: "在中国文化中，龙（龍）代表着男性的力量、权势和好运，而凤（鳳）则象征着女性的美丽、优雅和吉祥。两者结合，代表着完美的婚姻结合——阴阳和谐的极致体现。婚礼服饰上的龙凤刺绣，是为祝福新人婚姻美满、繁荣昌盛、和谐共处。"
        },
        imageUrl: pImgs[0],
        date: "2024-07-20",
        categories: ["meaning-of-symbols"],
        tags: ["dragon", "phoenix", "qun-kwa", "symbolism"]
    },
    {
        id: 2,
        title: {
            th: "ความสำคัญของพิธียกน้ำชา",
            en: "The Importance of the Tea Ceremony",
            zh: "敬茶仪式的重要性"
        },
        content: {
            th: "พิธียกน้ำชาไม่ใช่เป็นเพียงการเสิร์ฟเครื่องดื่ม แต่เป็นสัญลักษณ์ที่ลึกซึ้งของการแสดงความเคารพและความกตัญญูต่อผู้อาวุโส เป็นการแนะนำคู่บ่าวสาวเข้าสู่ครอบครัวของอีกฝ่ายอย่างเป็นทางการ การกระทำนี้แสดงถึงการยอมรับและการให้พรจากครอบครัว ซึ่งเป็นรากฐานที่สำคัญสำหรับชีวิตคู่ที่มั่นคงและมีความสุข",
            en: "The tea ceremony is not merely about serving a beverage; it is a profound symbol of respect and gratitude towards elders. It formally introduces the couple to each other's families. This act signifies acceptance and blessings from the family, which is a crucial foundation for a stable and happy marriage.",
            zh: "敬茶仪式不仅仅是奉上一杯茶；它是对长辈表示尊敬和感激的深刻象征。它正式将新人介绍给彼此的家庭。这个行为象征着家庭的接纳和祝福，这是稳定幸福婚姻的重要基础。"
        },
        imageUrl: pImgs[1],
        date: "2024-07-15",
        categories: ["wedding-traditions"],
        tags: ["tea-ceremony", "family", "respect"]
    },
    {
        id: 3,
        title: {
            th: "ศิลปะการปักผ้าในชุด Qun Kwa",
            en: "The Art of Embroidery in Qun Kwa",
            zh: "裙褂的刺绣艺术"
        },
        content: {
            th: "ชุด Qun Kwa แต่ละชุดเป็นผลงานศิลปะที่ใช้เวลาและความชำนาญสูง ระดับความหนาแน่นของดิ้นทองและเงินที่ปักลงบนผ้าไหมสีแดงเป็นตัวกำหนดมูลค่าและความสำคัญของชุด ตั้งแต่ 'King Kwa' ที่ปักเต็ม 100% ไปจนถึง 'Xiao Wu Fu' ที่ปัก 50% ลวดลายแต่ละเส้นสะท้อนถึงมรดกทางวัฒนธรรมและงานฝีมืออันประณีต",
            en: "Each Qun Kwa is a masterpiece requiring immense time and skill. The density of gold and silver thread embroidered onto the red silk determines the garment's value and significance, from the 100% covered 'King Kwa' to the 50% 'Xiao Wu Fu'. Every stitch reflects a rich cultural heritage and exquisite craftsmanship.",
            zh: "每一件裙褂都是一件需要大量时间和技巧的艺术杰作。绣在红绸上的金银线的密度决定了这件服装的价值和重要性，从百分之百覆盖的“褂皇”到百分之五十的“小五福”。每一针都反映了丰富的文化遗产和精湛的工艺。"
        },
        imageUrl: pImgs[2],
        date: "2024-07-01",
        categories: ["art-of-embroidery", "meaning-of-symbols"],
        tags: ["qun-kwa", "craftsmanship", "embroidery"]
    },
    {
        id: 4,
        title: {
            th: "เรื่องราวลูกค้า: การผสมผสานประเพณีและความทันสมัยในงานแต่งงานของครอบครัวเฉิน",
            en: "Customer Story: How the Chen Family Blended Tradition and Modernity",
            zh: "客户故事：陈家如何将传统与现代完美融合"
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
            th: "การเริ่มต้นที่เป็นมงคล: คู่มือง่ายๆ ในการเลือกวันแต่งงานที่สมบูรณ์แบบ",
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
        longDescription: { en: 'This grand proposal involves a procession from the groom\'s family delivering a host of gifts that are symbolic of fertility, prosperity, and good fortune. The acceptance of these gifts by the bride\'s family signifies the official agreement to the marriage.', th: 'พิธีนี้เปรียบเสมือนการสู่ขออย่างเป็นทางการ โดยฝ่ายเจ้าบ่าวจะจัดขบวนแห่ของขวัญมงคลต่างๆ เช่น ผลไม้, ขนม, และสินสอดทองหมั้น ไปมอบให้แก่ครอบครัวเจ้าสาว ของขวัญแต่ละชิ้นล้วนมีความหมายอันเป็นมงคลเพื่อความอุดมสมบูรณ์และความเจริญรุ่งเรือง เมื่อครอบครัวเจ้าสาวรับของขวัญเหล่านี้แล้ว ถือเป็นการยอมรับและประกาศการหมั้นหมายอย่างเป็นทางการ', zh: '这个盛大的求婚仪式包括新郎家的游行队伍，送上象征生育、繁荣和好运的各种礼物。新娘家接受这些礼物，意味着正式同意这门婚事。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-02',
        title: { en: 'Tea Ceremony', th: 'พิธียกน้ำชา', zh: '敬茶仪式' },
        shortDescription: { en: 'A pivotal moment symbolizing the joining of two families, where the couple serves tea to their elders as a sign of respect and gratitude.', th: 'ช่วงเวลาสำคัญที่เป็นสัญลักษณ์ของการรวมสองครอบครัวเข้าไว้ด้วยกัน คู่บ่าวสาวจะรินชาให้แก่ผู้อาวุโสเพื่อแสดงความเคารพและความกตัญญู', zh: '象征着两个家庭结合的关键时刻，新人向长辈敬茶，以示尊敬和感激。' },
        longDescription: { en: 'During the ceremony, the couple kneels before their parents and other elder relatives, serving them tea. In return, the elders offer their blessings, often in the form of red envelopes (hongbao) or jewelry. The order of serving is based on seniority, showing reverence for the family hierarchy.', th: 'ในพิธี คู่บ่าวสาวจะคุกเข่าต่อหน้าพ่อแม่และญาติผู้ใหญ่เพื่อรินชาให้ดื่ม เป็นการแสดงความเคารพและขอบคุณที่เลี้ยงดูมา เพื่อเป็นการตอบรับ ญาติผู้ใหญ่จะให้พรและมอบของขวัญ ซึ่งโดยมากมักจะเป็นซองอั่งเปาหรือเครื่องประดับ ลำดับการรินชาจะเรียงตามอาวุโสในครอบครัวเพื่อแสดงความเคารพต่อลำดับชั้น', zh: '仪式期间，新人跪在父母和其他长辈面前敬茶。作为回报，长辈们会给予祝福，通常是红包或珠宝的形式。敬茶的顺序是根据辈分，以示对家庭等级的尊重。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-03',
        title: { en: 'Setting the Bridal Bed (An Chuang)', th: 'พิธีจัดเตียงเจ้าสาว (อันฉวง - 安床)', zh: '安床' },
        shortDescription: { en: 'A ritual of setting up the matrimonial bed, performed by a "good luck woman" to bless the couple with fertility and a harmonious marriage.', th: 'พิธีกรรมการจัดเตียงสำหรับคู่บ่าวสาว โดยผู้หญิงที่ชีวิตสมรสสมบูรณ์พูนสุข เพื่ออวยพรให้คู่บ่าวสาวมีลูกเต็มบ้านมีหลานเต็มเมืองและมีชีวิตแต่งงานที่ราบรื่น', zh: '布置婚床的仪式，由一位“好运婆”执行，以祝福新人子孙满堂、婚姻和谐。' },
        longDescription: { en: 'The bed is adorned with new red linens. Auspicious items like red dates, peanuts, longans, and lotus seeds are scattered on the bed, symbolizing the wish for the couple to have children soon. Children are often invited to jump on the bed to further bless it with youthful energy and fertility.', th: 'เตียงจะถูกปูด้วยผ้าปูที่นอนสีแดงชุดใหม่ และมีการโปรยของมงคลต่างๆ เช่น พุทราจีน, ถั่ว, ลำไยแห้ง, และเมล็ดบัว ซึ่งเป็นสัญลักษณ์ของการอวยพรให้คู่บ่าวสาวมีทายาทในเร็ววัน และมักจะให้เด็กๆ มากระโดดบนเตียงเพื่อเป็นการอวยพรให้เตียงเต็มไปด้วยพลังของความเยาว์วัยและความอุดมสมบูรณ์', zh: '床上铺着新的红色床单。床上撒着红枣、花生、桂圆和莲子等吉祥物品，象征着希望新人早生贵子。通常会邀请孩子们在床上跳跃，以 youthful energy 和生育力进一步祝福它。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-04',
        title: { en: 'Hair Combing Ceremony', th: 'พิธีหวีผม', zh: '梳头仪式' },
        shortDescription: { en: 'Performed on the eve of the wedding, parents comb their child\'s hair to symbolize their transition into adulthood.', th: 'จัดขึ้นในคืนก่อนวันแต่งงาน พ่อแม่จะหวีผมให้ลูกเพื่อเป็นสัญลักษณ์ของการก้าวเข้าสู่วัยผู้ใหญ่', zh: '在婚礼前夕举行，父母为孩子梳头，象征着他们进入成年。' },
        longDescription: { en: 'The combing is done four times, with each stroke representing a specific blessing: 1) for a lasting marriage, 2) for a harmonious union, 3) for a house full of children and grandchildren, and 4) for good health and longevity.', th: 'การหวีผมจะทำทั้งหมดสี่ครั้ง โดยแต่ละครั้งจะมีความหมายมงคลแตกต่างกันไป: ครั้งที่ 1 เพื่อชีวิตสมรสที่ยืนยาว, ครั้งที่ 2 เพื่อความรักที่กลมเกลียว, ครั้งที่ 3 เพื่อให้มีลูกหลานเต็มบ้าน, และครั้งที่ 4 เพื่อสุขภาพที่แข็งแรงและอายุยืนยาว', zh: '梳头共分四梳，每一梳代表一个特定的祝福：1）白头偕老，2）和谐美满，3）子孙满堂，4）身体健康长寿。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-05',
        title: { en: 'Picking Up the Bride (Jie Xin Niang)', th: 'พิธีรับตัวเจ้าสาว (เจี๋ยซินเหนียง - 接新娘)', zh: '接新娘' },
        shortDescription: { en: 'The groom leads a lively procession to the bride\'s home to formally "collect" her for the wedding.', th: 'เจ้าบ่าวนำขบวนแห่อันคึกคักไปยังบ้านของเจ้าสาวเพื่อ "รับ" เธอไปเข้าพิธีแต่งงานอย่างเป็นทางการ', zh: '新郎带领热闹的迎亲队伍前往新娘家，正式“接”她去参加婚礼。' },
        longDescription: { en: 'This event is filled with excitement and noise, often accompanied by firecrackers and music to ward off evil spirits. The groom\'s arrival is met with challenges set by the bridesmaids, known as door games, which he must overcome to prove his love and worthiness.', th: 'พิธีนี้เต็มไปด้วยความตื่นเต้นและเสียงดัง โดยมักจะมีการจุดประทัดและเล่นดนตรีเพื่อขับไล่สิ่งชั่วร้าย เมื่อเจ้าบ่าวมาถึง จะต้องเผชิญกับด่านทดสอบจากเพื่อนเจ้าสาวที่เรียกว่า "เกมกั้นประตู" ซึ่งเขาจะต้องผ่านไปให้ได้เพื่อพิสูจน์ความรักและความเหมาะสมของเขา', zh: '这个活动充满了兴奋和喧闹，通常伴随着鞭炮和音乐以驱邪。新郎的到来会遇到伴娘们设置的挑战，即“闯门游戏”，他必须克服这些挑战来证明他的爱和价值。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-06',
        title: { en: 'Door Games (Chuang Men)', th: 'เกมกั้นประตู (ช่วงเหมิน - 闯门)', zh: '闯门' },
        shortDescription: { en: 'A series of playful challenges the groom must complete to prove his love before he is allowed to see his bride.', th: 'ชุดของการทดสอบที่สนุกสนานที่เจ้าบ่าวต้องทำให้สำเร็จเพื่อพิสูจน์ความรักของเขาก่อนที่จะได้รับอนุญาตให้พบเจ้าสาว', zh: '新郎必须完成的一系列有趣的挑战，以证明他的爱，然后才被允许见到他的新娘。' },
        longDescription: { en: 'The bridesmaids, acting as the bride\'s protectors, demand that the groom and his groomsmen perform tasks, answer questions about the bride, or offer red envelopes. These games are a lighthearted and fun tradition that adds laughter and memorable moments to the wedding day.', th: 'เพื่อนเจ้าสาวซึ่งทำหน้าที่เป็นผู้พิทักษ์ของเจ้าสาว จะให้เจ้าบ่าวและเพื่อนเจ้าบ่าวทำภารกิจต่างๆ ตอบคำถามเกี่ยวกับเจ้าสาว หรือมอบซองอั่งเปา เกมเหล่านี้เป็นประเพณีที่สนุกสนานและเบาสมอง ซึ่งช่วยเพิ่มเสียงหัวเราะและช่วงเวลาที่น่าจดจำให้กับวันแต่งงาน', zh: '伴娘们作为新娘的保护者，要求新郎和伴郎们完成任务，回答有关新娘的问题，或提供红包。这些游戏是一个轻松有趣的传统，为婚礼当天增添了欢笑和难忘的时刻。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-07',
        title: { en: 'Returning Home (Hui Men)', th: 'พิธีกลับบ้านเจ้าสาว (ฮุ่ยเหมิน - 回门)', zh: '回门' },
        shortDescription: { en: 'Three days after the wedding, the couple formally visits the bride\'s parents, signifying the bride is still a cherished member of her family.', th: 'สามวันหลังแต่งงาน คู่บ่าวสาวจะกลับไปเยี่ยมพ่อแม่ของฝ่ายหญิงอย่างเป็นทางการ เพื่อแสดงว่าเจ้าสาวยังคงเป็นสมาชิกอันเป็นที่รักของครอบครัว', zh: '婚礼三天后，新人正式拜访新娘的父母，这表明新娘仍然是她家庭中受珍爱的成员。' },
        longDescription: { en: 'The bride is no longer a guest but returns as a married daughter with her husband. They bring gifts for her family, and in return, her parents host a small banquet for them. This tradition reinforces the strong family bonds that continue even after marriage.', th: 'เจ้าสาวไม่ได้กลับมาในฐานะแขกอีกต่อไป แต่กลับมาในฐานะลูกสาวที่แต่งงานแล้วพร้อมกับสามีของเธอ พวกเขานำของขวัญมาให้ครอบครัว และครอบครัวของเธอก็จะจัดงานเลี้ยงเล็กๆ ต้อนรับ ประเพณีนี้ช่วยกระชับความสัมพันธ์ในครอบครัวที่ยังคงแข็งแกร่งแม้หลังจากการแต่งงาน', zh: '新娘不再是客人，而是作为已婚女儿与丈夫一同归来。他们为她的家人带来礼物，作为回报，她的父母为他们举办小型宴会。这个传统加强了即使在婚后也依然牢固的家庭纽带。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-08',
        title: { en: 'Wedding Banquet', th: 'งานเลี้ยงฉลองมงคลสมรส', zh: '婚宴' },
        shortDescription: { en: 'A grand feast hosted by the couple\'s families to celebrate the marriage with friends and relatives.', th: 'งานเลี้ยงฉลองอันยิ่งใหญ่ที่ครอบครัวของคู่บ่าวสาวจัดขึ้นเพื่อเฉลิมฉลองการแต่งงานร่วมกับเพื่อนและญาติพี่น้อง', zh: '由新人家庭举办的盛大宴会，与亲朋好友一同庆祝婚姻。' },
        longDescription: { en: 'The banquet is a multi-course meal featuring symbolic dishes that represent blessings for the couple, such as fish for abundance and roasted pig for purity. The bride often changes outfits multiple times throughout the evening, showcasing a variety of beautiful dresses.', th: 'งานเลี้ยงประกอบด้วยอาหารหลายคอร์สที่เป็นมงคล ซึ่งเป็นตัวแทนของพรสำหรับคู่บ่าวสาว เช่น ปลาหมายถึงความอุดมสมบูรณ์ และหมูหันหมายถึงความบริสุทธิ์ เจ้าสาวมักจะเปลี่ยนชุดหลายครั้งตลอดทั้งคืน เพื่อโชว์ชุดที่สวยงามหลากหลาย', zh: '宴会是一场多道菜的盛宴，菜肴象征着对新人的祝福，例如鱼代表富足，烤乳猪代表纯洁。新娘在整个晚上通常会换几次衣服，展示各种美丽的礼服。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-09',
        title: { en: 'Double Happiness Symbol (Shuang Xi)', th: 'สัญลักษณ์ซังฮี้ (囍)', zh: '双喜' },
        shortDescription: { en: 'This character, composed of two "happiness" characters, is a ubiquitous symbol of marital bliss in Chinese weddings.', th: 'ตัวอักษรนี้ประกอบด้วยอักษร "ความสุข" สองตัว เป็นสัญลักษณ์ที่แพร่หลายของความสุขในชีวิตสมรสในงานแต่งงานของจีน', zh: '这个由两个“喜”字组成的字符，是中式婚礼中婚姻幸福的普遍象征。' },
        longDescription: { en: 'The Shuang Xi symbol is seen everywhere during a wedding—on invitations, decorations, and gifts. It represents the joining of two individuals and two families in a joyous union. Its presence is believed to attract good fortune and a happy marriage for the newlyweds.', th: 'สัญลักษณ์ซังฮี้สามารถพบเห็นได้ทุกที่ในงานแต่งงาน ไม่ว่าจะเป็นบนการ์ดเชิญ ของตกแต่ง และของขวัญ เป็นสัญลักษณ์ของการรวมกันของคนสองคนและสองครอบครัวในสหภาพที่เปี่ยมสุข เชื่อกันว่าการมีอยู่ของสัญลักษณ์นี้จะดึงดูดโชคลาภและชีวิตแต่งงานที่มีความสุขสำหรับคู่บ่าวสาว', zh: '双喜符号在婚礼期间随处可见——在请柬、装饰品和礼物上。它代表着两个人和两个家庭在欢乐的结合中走到一起。人们相信它的存在会为新人带来好运和幸福的婚姻。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-10',
        title: { en: 'Betrothal Gift (Pin Jin)', th: 'สินสอดทองหมั้น (聘金)', zh: '聘金' },
        shortDescription: { en: 'A formal gift of money from the groom\'s family to the bride\'s family, symbolizing gratitude for raising the bride.', th: 'ของขวัญที่เป็นเงินอย่างเป็นทางการจากครอบครัวเจ้าบ่าวถึงครอบครัวเจ้าสาว เพื่อเป็นสัญลักษณ์ของความกตัญญูที่เลี้ยงดูเจ้าสาวมา', zh: '新郎家给新娘家的正式金钱礼物，象征着对养育新娘的感激之情。' },
        longDescription: { en: 'The amount is negotiated between the two families and is presented during the Guo Da Li ceremony. It is not seen as a payment for the bride, but rather as a gesture of respect and a promise that the groom is financially capable of caring for their daughter.', th: 'จำนวนเงินจะถูกเจรจาระหว่างสองครอบครัวและจะถูกมอบให้ในระหว่างพิธีกั้วต้าหลี่ ไม่ได้มองว่าเป็นการจ่ายเงินค่าเจ้าสาว แต่เป็นท่าทีของความเคารพและคำมั่นสัญญาว่าเจ้าบ่าวมีความสามารถทางการเงินที่จะดูแลลูกสาวของพวกเขาได้', zh: '金额由两家协商，并在过大礼仪式上呈上。它不被视为购买新娘的费用，而是一种尊重和承诺的姿态，表明新郎有经济能力照顾他们的女儿。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-11',
        title: { en: 'Dowry (Jia Zhuang)', th: 'ของหมั้นฝ่ายหญิง (嫁妆)', zh: '嫁妆' },
        shortDescription: { en: 'Gifts from the bride\'s family to the couple to help them start their new life together, symbolizing her family\'s love and support.', th: 'ของขวัญจากครอบครัวเจ้าสาวถึงคู่บ่าวสาวเพื่อช่วยให้พวกเขาเริ่มต้นชีวิตใหม่ร่วมกัน เป็นสัญลักษณ์ของความรักและการสนับสนุนจากครอบครัวของเธอ', zh: '新娘家送给新人的礼物，帮助他们开始新的生活，象征着娘家的爱与支持。' },
        longDescription: { en: 'The dowry often includes practical items like bedding, kitchenware, and furniture, as well as jewelry and money. It is a way for the bride\'s parents to ensure their daughter\'s comfort and happiness in her new home and to demonstrate their own family\'s wealth and status.', th: 'ของหมั้นมักจะรวมถึงของใช้ในทางปฏิบัติเช่นเครื่องนอนเครื่องครัวและเฟอร์นิเจอร์รวมถึงเครื่องประดับและเงิน เป็นวิธีที่พ่อแม่ของเจ้าสาวจะทำให้แน่ใจว่าลูกสาวของพวกเขามีความสุขสบายในบ้านใหม่ของเธอและเพื่อแสดงความมั่งคั่งและสถานะของครอบครัวของตนเอง', zh: '嫁妆通常包括床上用品、厨具和家具等实用物品，以及珠宝和金钱。这是新娘父母确保女儿在新家舒适幸福，并展示自己家庭财富和地位的一种方式。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-12',
        title: { en: 'Choosing an Auspicious Date', th: 'การหาฤกษ์ยามมงคล', zh: '选择吉日' },
        shortDescription: { en: 'Selecting a wedding date based on the couple\'s birth dates and times using the Chinese almanac to ensure a blessed union.', th: 'การเลือกวันแต่งงานตามวันเดือนปีเกิดและเวลาของคู่บ่าวสาวโดยใช้ปฏิทินจีนเพื่อให้แน่ใจว่าการแต่งงานจะได้รับพร', zh: '根据新人的生辰八字，使用通书选择婚期，以确保婚姻美满。' },
        longDescription: { en: 'A fortune teller or Feng Shui master is often consulted to analyze the couple\'s compatibility and select a date that maximizes good fortune and minimizes potential conflicts. Certain dates, like the 7th lunar month (Ghost Month), are strictly avoided.', th: 'มักจะปรึกษาหมอดูหรือซินแสฮวงจุ้ยเพื่อวิเคราะห์ความเข้ากันได้ของคู่บ่าวสาวและเลือกวันที่เพิ่มโชคลาภสูงสุดและลดความขัดแย้งที่อาจเกิดขึ้น วันที่บางวันเช่นเดือน 7 ตามจันทรคติ (เดือนผี) จะถูกหลีกเลี่ยงอย่างเคร่งครัด', zh: '通常会咨询算命先生或风水大师，分析新人的八字，选择一个能够最大化好运、最小化潜在冲突的日子。某些日期，如农历七月（鬼月），是严格避免的。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-13',
        title: { en: 'Wedding Invitations', th: 'การ์ดเชิญ', zh: '婚礼请柬' },
        shortDescription: { en: 'Traditionally red and gold, invitations are sent out with specific etiquette, including the use of the Double Happiness symbol.', th: 'ตามประเพณีจะเป็นสีแดงและสีทอง การ์ดเชิญจะถูกส่งออกไปพร้อมกับมารยาทที่เฉพาะเจาะจง รวมถึงการใช้สัญลักษณ์ซังฮี้', zh: '传统上是红色和金色，请柬的发送遵循特定的礼仪，包括使用双喜符号。' },
        longDescription: { en: 'The invitation is typically placed in a red envelope. The wording is formal and includes the names of the couple, their parents, the date and time of the banquet, and the location. The text is often written in both Chinese and the local language.', th: 'การ์ดเชิญมักจะใส่ในซองสีแดง ข้อความเป็นทางการและรวมถึงชื่อของคู่บ่าวสาว พ่อแม่ของพวกเขา วันที่และเวลาของงานเลี้ยง และสถานที่ ข้อความมักจะเขียนทั้งในภาษาจีนและภาษาท้องถิ่น', zh: '请柬通常放在红色信封里。措辞正式，包括新人、双方父母的姓名、宴会的日期和时间以及地点。文字通常用中文和当地语言书写。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-14',
        title: { en: 'The "Good Luck Woman" (Hao Ming Po)', th: 'ผู้ประกอบพิธี (เฮ่ามิ่งผัว - 好命婆)', zh: '好命婆' },
        shortDescription: { en: 'A woman with a happy marriage, healthy children, and living parents who assists in various rituals to pass on her good fortune.', th: 'ผู้หญิงที่มีชีวิตแต่งงานที่มีความสุข มีลูกมีสุขภาพดี และมีพ่อแม่ที่ยังมีชีวิตอยู่ ซึ่งจะช่วยในพิธีกรรมต่างๆ เพื่อส่งต่อโชคดีของเธอ', zh: '一位婚姻幸福、子女健康、父母健在的女性，协助各种仪式以传递她的好运。' },
        longDescription: { en: 'The Hao Ming Po plays a crucial role in ceremonies like setting the bridal bed (An Chuang) and combing the bride\'s hair. Her presence is believed to bless the couple with a similarly happy and complete life.', th: 'เฮ่ามิ่งผัวมีบทบาทสำคัญในพิธีต่างๆ เช่น การจัดเตียงเจ้าสาว (อันฉวง) และการหวีผมเจ้าสาว เชื่อกันว่าการมีอยู่ของเธอจะอวยพรให้คู่บ่าวสาวมีชีวิตที่สมบูรณ์และมีความสุขเช่นเดียวกัน', zh: '“好命婆”在安床和为新娘梳头等仪式中扮演着至关重要的角色。人们相信她的出现会祝福新人拥有同样幸福美满的生活。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-15',
        title: { en: 'Three Letters and Six Etiquettes', th: 'จดหมายสามฉบับและพิธีหกประการ', zh: '三书六礼' },
        shortDescription: { en: 'The traditional and highly ritualized process of betrothal in ancient Chinese culture.', th: 'กระบวนการหมั้นหมายตามประเพณีและพิธีกรรมอย่างสูงในวัฒนธรรมจีนโบราณ', zh: '中国古代文化中传统而高度仪式化的订婚过程。' },
        longDescription: { en: 'This complex process includes the initial proposal, inquiry into the bride\'s name and birthdate, divination of the match\'s fortune, sending of betrothal gifts, selecting the wedding date, and finally, the wedding ceremony itself. While not always followed strictly today, its principles still influence modern ceremonies.', th: 'กระบวนการที่ซับซ้อนนี้รวมถึงการทาบทามเบื้องต้น การสอบถามชื่อและวันเดือนปีเกิดของเจ้าสาว การทำนายดวงชะตาของคู่บ่าวสาว การส่งของหมั้น การเลือกวันแต่งงาน และสุดท้ายคือพิธีแต่งงาน แม้ในปัจจุบันจะไม่ปฏิบัติตามอย่างเคร่งครัดเสมอไป แต่หลักการของมันยังคงมีอิทธิพลต่อพิธีสมัยใหม่', zh: '这个复杂的过程包括提亲、问名、卜吉、纳征、请期和亲迎。虽然今天不一定严格遵守，但其原则仍然影响着现代仪式。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-16',
        title: { en: 'Serving Sweet Soup (Tang Yuan)', th: 'ขนมบัวลอย (ทังหยวน - 汤圆)', zh: '汤圆' },
        shortDescription: { en: 'Eating Tang Yuan, sweet glutinous rice balls, symbolizes family togetherness and a sweet, complete marriage.', th: 'การทานทังหยวน ซึ่งเป็นข้าวเหนียวปั้นก้อนหวาน เป็นสัญลักษณ์ของความสามัคคีในครอบครัวและชีวิตแต่งงานที่หวานชื่นและสมบูรณ์', zh: '吃汤圆，即甜糯米团，象征着家庭团圆和甜蜜美满的婚姻。' },
        longDescription: { en: 'This dish is often served to the family after the tea ceremony or during the morning of the wedding day. The round shape of the balls represents wholeness and completeness, reinforcing the wish for a perfect and harmonious union.', th: 'อาหารจานนี้มักจะเสิร์ฟให้ครอบครัวหลังพิธียกน้ำชาหรือในช่วงเช้าของวันแต่งงาน รูปร่างกลมของบัวลอยเป็นตัวแทนของความสมบูรณ์และความครบถ้วน ซึ่งตอกย้ำความปรารถนาให้มีชีวิตสมรสที่สมบูรณ์แบบและกลมเกลียว', zh: '这道菜通常在敬茶仪式后或婚礼当天早上为家人端上。汤圆的圆形代表完整和圆满，加强了对完美和谐结合的祝愿。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-17',
        title: { en: 'Red Veil', th: 'ผ้าคลุมหน้าเจ้าสาวสีแดง', zh: '红盖头' },
        shortDescription: { en: 'The bride wears a red veil to cover her face, symbolizing modesty, and it is only lifted by the groom at the end of the ceremony.', th: 'เจ้าสาวสวมผ้าคลุมหน้าสีแดงเพื่อปิดหน้า เป็นสัญลักษณ์ของความสุภาพเรียบร้อย และเจ้าบ่าวเท่านั้นที่จะเป็นผู้เปิดผ้าคลุมในตอนท้ายของพิธี', zh: '新娘戴上红盖头遮住脸，象征着端庄，只有新郎在仪式结束时才能揭开。' },
        longDescription: { en: 'The tradition of the red veil is said to ward off evil spirits and hide the bride\'s face from the heavens until the marriage is complete. The dramatic moment when the groom lifts the veil is a highlight of the wedding, symbolizing the beginning of their new life together.', th: 'ประเพณีผ้าคลุมหน้าสีแดงกล่าวกันว่าเพื่อขับไล่สิ่งชั่วร้ายและซ่อนใบหน้าของเจ้าสาวจากสวรรค์จนกว่าการแต่งงานจะเสร็จสมบูรณ์ ช่วงเวลาที่น่าทึ่งเมื่อเจ้าบ่าวเปิดผ้าคลุมหน้าเป็นไฮไลท์ของงานแต่งงาน เป็นสัญลักษณ์ของการเริ่มต้นชีวิตใหม่ร่วมกัน', zh: '据说红盖头的传统可以驱邪，并在婚礼完成前将新娘的脸遮住不让天看到。新郎揭开盖头的戏剧性时刻是婚礼的一大亮点，象征着他们新生活的开始。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-18',
        title: { en: 'Dragon and Phoenix Candles', th: 'เทียนมังกรและหงส์', zh: '龙凤烛' },
        shortDescription: { en: 'Two large red candles, one with a dragon and one with a phoenix, are lit to symbolize the union of the two families.', th: 'เทียนสีแดงขนาดใหญ่สองเล่ม เล่มหนึ่งมีมังกรและอีกเล่มหนึ่งมีหงส์ ถูกจุดขึ้นเพื่อเป็นสัญลักษณ์ของการรวมกันของสองครอบครัว', zh: '点燃两支大的红蜡烛，一支有龙，一支有凤，象征着两个家庭的结合。' },
        longDescription: { en: 'These candles are lit in the bride\'s home on the wedding day and are meant to burn all night. It is considered a good omen if they burn out at the same time, symbolizing that the couple will grow old together.', th: 'เทียนเหล่านี้จะถูกจุดในบ้านของเจ้าสาวในวันแต่งงานและจะต้องเผาไหม้ตลอดทั้งคืน ถือเป็นลางดีถ้าเทียนดับพร้อมกัน ซึ่งเป็นสัญลักษณ์ว่าคู่บ่าวสาวจะแก่เฒ่าไปด้วยกัน', zh: '这些蜡烛在婚礼当天在新娘家点燃，并要燃烧整夜。如果它们同时燃尽，则被认为是个好兆头，象征着夫妻将白头偕老。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-19',
        title: { en: 'Firecrackers', th: 'การจุดประทัด', zh: '放鞭炮' },
        shortDescription: { en: 'Set off to create a celebratory atmosphere and, more importantly, to ward off evil spirits and bad luck.', th: 'จุดขึ้นเพื่อสร้างบรรยากาศเฉลิมฉลอง และที่สำคัญกว่านั้นคือเพื่อขับไล่สิ่งชั่วร้ายและโชคร้าย', zh: '燃放鞭炮以营造喜庆气氛，更重要的是，驱邪避祸。' },
        longDescription: { en: 'The loud noise of the firecrackers is believed to scare away any malevolent spirits that might bring misfortune to the newlyweds. They are typically set off when the groom\'s procession departs and when the bride arrives at her new home.', th: 'เชื่อกันว่าเสียงดังของประทัดจะขับไล่วิญญาณชั่วร้ายที่อาจนำโชคร้ายมาสู่คู่บ่าวสาว โดยปกติจะจุดเมื่อขบวนของเจ้าบ่าวออกเดินทางและเมื่อเจ้าสาวมาถึงบ้านใหม่ของเธอ', zh: '人们相信鞭炮的巨大声响会吓跑可能给新人带来不幸的邪灵。通常在新郎的迎亲队伍出发时和新娘到达新家时燃放。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-20',
        title: { en: 'Lion Dance', th: 'การเชิดสิงโต', zh: '舞狮' },
        shortDescription: { en: 'Often performed at the wedding banquet to bring good luck, prosperity, and to drive away evil spirits.', th: 'มักจะแสดงในงานเลี้ยงแต่งงานเพื่อนำโชคลาภ ความเจริญรุ่งเรือง และเพื่อขับไล่สิ่งชั่วร้าย', zh: '通常在婚宴上表演，以带来好运、繁荣并驱除邪灵。' },
        longDescription: { en: 'The lion dance is a vibrant and energetic performance that adds a spectacular touch to the celebration. The lions, symbols of strength and wisdom, bless the occasion and the newlyweds, ensuring a future filled with happiness and good fortune.', th: 'การเชิดสิงโตเป็นการแสดงที่มีชีวิตชีวาและเปี่ยมด้วยพลัง ซึ่งเพิ่มความงดงามให้กับการเฉลิมฉลอง สิงโตซึ่งเป็นสัญลักษณ์ของความแข็งแกร่งและสติปัญญา จะอวยพรให้งานและคู่บ่าวสาว เพื่อให้แน่ใจว่าอนาคตจะเต็มไปด้วยความสุขและโชคดี', zh: '舞狮是一种充满活力和能量的表演，为庆祝活动增添了壮观的色彩。狮子是力量和智慧的象征，为这个场合和新人送上祝福，确保未来充满幸福和好运。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-21',
        title: { en: 'Gifting Wedding Cakes (Jia Nu Bing)', th: 'การมอบเค้กแต่งงาน (嫁女饼)', zh: '嫁女饼' },
        shortDescription: { en: 'The bride\'s family distributes wedding cakes to friends and family to formally announce the engagement and share their joy.', th: 'ครอบครัวของเจ้าสาวจะแจกจ่ายเค้กแต่งงานให้กับเพื่อนและญาติเพื่อประกาศการหมั้นหมายอย่างเป็นทางการและแบ่งปันความสุข', zh: '新娘家分发喜饼给亲朋好友，以正式宣布订婚并分享喜悦。' },
        longDescription: { en: 'Also known as "daughter\'s cakes", these are given out by the bride\'s family to announce the happy union. The quantity and quality of the cakes distributed reflect the family\'s generosity and love for their daughter, essentially sharing their sweetness and joy with their community.', th: 'หรือที่รู้จักกันในชื่อ "เค้กลูกสาว" ครอบครัวของเจ้าสาวจะมอบให้เพื่อประกาศการแต่งงาน จำนวนและคุณภาพของเค้กสะท้อนถึงความใจกว้างและความรักที่ครอบครัวมีต่อลูกสาว เป็นการแบ่งปันความหวานและความสุขให้กับคนรอบข้าง', zh: '又称“嫁女饼”，由新娘家分发，以宣告喜讯。分发喜饼的数量和质量，反映了家庭的慷慨和对女儿的爱，实质上是与社区分享他们的甜蜜和喜悦。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-22',
        title: { en: 'The Red Umbrella', th: 'ร่มแดงมงคล', zh: '红伞' },
        shortDescription: { en: 'Shielding the bride with a red umbrella as she leaves her home to ward off evil spirits and bring good fortune.', th: 'การกางร่มสีแดงให้เจ้าสาวขณะที่เธอออกจากบ้านเพื่อป้องกันสิ่งชั่วร้ายและนำมาซึ่งโชคลาภ', zh: '新娘离开家时用红伞遮挡，以辟邪并带来好运。' },
        longDescription: { en: 'When the bride departs from her home, a female elder or a bridesmaid holds a red umbrella over her head. This is believed to protect her from negative energy and evil spirits during the vulnerable transition from her family home to her husband\'s.', th: 'เมื่อเจ้าสาวออกจากบ้าน ญาติผู้ใหญ่ฝ่ายหญิงหรือเพื่อนเจ้าสาวจะกางร่มสีแดงไว้เหนือศีรษะของเธอ เชื่อกันว่าเพื่อป้องกันเธอจากพลังงานด้านลบและวิญญาณชั่วร้ายในช่วงเวลาเปลี่ยนผ่านที่ละเอียดอ่อนจากบ้านของเธอไปสู่บ้านของสามี', zh: '当新娘离开家时，一位女性长辈或伴娘会在她头上撑一把红伞。这被认为可以在她从娘家到夫家的脆弱过渡期间保护她免受负能量和邪灵的侵害。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-23',
        title: { en: 'Tossing the Fan', th: 'การโยนพัด', zh: '掷扇' },
        shortDescription: { en: 'The bride tosses a fan out of the wedding car, symbolizing her leaving the past and any bad temper behind.', th: 'เจ้าสาวโยนพัดออกจากรถแต่งงาน เป็นสัญลักษณ์ของการทิ้งอดีตและอารมณ์ที่ไม่ดีไว้เบื้องหลัง', zh: '新娘从婚车里扔出一把扇子，象征着将过去和坏脾气抛在身后。' },
        longDescription: { en: 'As the bridal car departs from her home, the bride throws a fan (often two, one for good and one for bad) out of the window. This act symbolizes leaving behind her past, her maiden life, and any bad temper, fully embracing her new role and future as a wife.', th: 'ขณะที่รถแต่งงานออกจากบ้านของเธอ เจ้าสาวจะโยนพัด (มักจะเป็น 2 อัน อันหนึ่งสำหรับสิ่งดีและอีกอันสำหรับสิ่งไม่ดี) ออกไปนอกหน้าต่าง การกระทำนี้เป็นสัญลักษณ์ของการทิ้งอดีต ชีวิตโสด และอารมณ์ที่ไม่ดีไว้เบื้องหลัง เพื่อยอมรับบทบาทใหม่และอนาคตในฐานะภรรยาอย่างเต็มที่', zh: '当婚车离开她的家时，新娘会从窗户扔出一把扇子（通常是两把，一把代表好的，一把代表坏的）。这个行为象征着抛弃她的过去、她的少女生活和任何坏脾气，完全拥抱她作为妻子的新角色和未来。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-24',
        title: { en: 'Ancestral Worship', th: 'การไหว้บรรพบุรุษ', zh: '拜祖先' },
        shortDescription: { en: 'The couple formally honors their ancestors at their respective family altars before the wedding ceremony begins.', th: 'คู่บ่าวสาวทำการไหว้บรรพบุรุษอย่างเป็นทางการที่แท่นบูชาของแต่ละครอบครัวก่อนที่พิธีแต่งงานจะเริ่มขึ้น', zh: '新人在婚礼仪式开始前，分别在各自的家庭祭坛前正式祭拜祖先。' },
        longDescription: { en: 'Before leaving their homes for the ceremony, both the bride and groom will light incense, offer food, and pray to their ancestors. This ritual is to inform their forefathers of the marriage, seek their blessings for the union, and show that they have not forgotten their roots.', th: 'ก่อนออกจากบ้านเพื่อไปประกอบพิธี ทั้งเจ้าสาวและเจ้าบ่าวจะจุดธูป ถวายอาหาร และสวดมนต์ต่อบรรพบุรุษของตน พิธีกรรมนี้มีขึ้นเพื่อแจ้งให้บรรพบุรุษทราบถึงการแต่งงาน ขอพรเพื่อความเป็นสิริมงคล และแสดงว่าพวกเขายังไม่ลืมรากเหง้าของตน', zh: '在离开家参加仪式之前，新娘和新郎都会点燃香，供奉食物，并向他们的祖先祈祷。这个仪式是为了告知他们的祖先这桩婚事，为结合寻求他们的祝福，并表明他们没有忘记自己的根。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-25',
        title: { en: 'The Gifting of "Si Dian Jin"', th: 'ประเพณีการมอบ "ซี่เตี๋ยมกิม"', zh: '四点金' },
        shortDescription: { en: 'A Teochew tradition where the groom\'s mother gifts a four-piece gold jewelry set to the bride as a welcome.', th: 'ประเพณีของชาวแต้จิ๋วที่แม่ของเจ้าบ่าวจะมอบชุดเครื่องประดับทองสี่ชิ้นให้กับเจ้าสาวเพื่อเป็นการต้อนรับ', zh: '潮州传统，新郎的母亲赠送一套四件套黄金首饰给新娘，以示欢迎。' },
        longDescription: { en: '"Si Dian Jin" translates to "four points of gold". The set includes a necklace, a ring, a bangle, and earrings. It symbolizes a promise from the mother-in-law that the bride will always have a roof over her head, representing the four corners of a traditional Chinese house.', th: '"ซี่เตี๋ยมกิม" แปลว่า "ทองสี่จุด" ชุดประกอบด้วยสร้อยคอ แหวน กำไล และต่างหู เป็นสัญลักษณ์ของคำมั่นสัญญาจากแม่สามีว่าเจ้าสาวจะมีที่อยู่อาศัยเสมอ ซึ่งเปรียบเสมือนมุมทั้งสี่ของบ้านจีนโบราณ', zh: '“四点金”意为“四点黄金”。这套首饰包括一条项链、一枚戒指、一只手镯和一对耳环。它象征着婆婆的承诺，即新娘将永远有一个栖身之所，代表着传统中式房屋的四个角落。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-26',
        title: { en: 'Crossing the Brazier of Fire', th: 'การก้าวข้ามกระถางไฟ', zh: '过火盆' },
        shortDescription: { en: 'The bride steps over a basin of burning coals before entering the groom\'s home to purify herself and burn away misfortune.', th: 'เจ้าสาวก้าวข้ามกระถางที่เต็มไปด้วยถ่านที่ลุกไหม้ก่อนเข้าบ้านเจ้าบ่าวเพื่อชำระล้างตนเองและเผาผลาญโชคร้าย', zh: '新娘在进入新郎家之前跨过一个燃烧的炭盆，以净化自己并烧掉不幸。' },
        longDescription: { en: 'This ritual is meant to cleanse the bride of any evil spirits or bad luck that may have followed her on her journey. Stepping over the fire symbolizes the destruction of all obstacles and the beginning of a prosperous, vibrant, and "fiery" new life.', th: 'พิธีกรรมนี้มีจุดมุ่งหมายเพื่อชำระล้างวิญญาณชั่วร้ายหรือโชคร้ายที่อาจติดตามเจ้าสาวมาในการเดินทางของเธอ การก้าวข้ามไฟเป็นสัญลักษณ์ของการทำลายอุปสรรคทั้งปวงและการเริ่มต้นชีวิตใหม่ที่เจริญรุ่งเรือง สดใส และ "ร้อนแรง"', zh: '这个仪式旨在净化新娘在旅途中可能跟随她的任何邪灵或坏运气。跨过火盆象征着摧毁所有障碍，开始一个繁荣、充满活力和“火热”的新生活。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-27',
        title: { en: 'The Wedding Toasts (Jing Jiu)', th: 'การดื่มอวยพร (จิ้งจิ่ว - 敬酒)', zh: '敬酒' },
        shortDescription: { en: 'The newlyweds visit each table at the banquet to personally toast their guests and thank them for celebrating with them.', th: 'คู่บ่าวสาวจะเดินไปแต่ละโต๊ะในงานเลี้ยงเพื่อดื่มอวยพรและขอบคุณแขกที่มาร่วมเฉลิมฉลองกับพวกเขาเป็นการส่วนตัว', zh: '新人在宴会上逐桌向宾客敬酒，亲自感谢他们与他们一同庆祝。' },
        longDescription: { en: 'Often changing into a new outfit (typically a red Qipao), the bride joins the groom and their parents to go from table to table. They share a toast (often with a loud "yam seng!") with their guests, which is a personal way to show gratitude and respect to everyone who has come to witness their union.', th: 'เจ้าสาวมักจะเปลี่ยนเป็นชุดใหม่ (โดยทั่วไปคือ กี่เพ้าสีแดง) แล้วร่วมกับเจ้าบ่าวและพ่อแม่ของพวกเขาเดินไปทีละโต๊ะ พวกเขาจะดื่มอวยพร (มักจะตะโกน "ยำเส็ง!" เสียงดัง) กับแขกของพวกเขา ซึ่งเป็นวิธีการส่วนตัวในการแสดงความขอบคุณและความเคารพต่อทุกคนที่มาเป็นสักขีพยานในการแต่งงานของพวกเขา', zh: '新娘通常会换上一套新衣服（通常是红色的旗袍），与新郎和双方父母一起逐桌敬酒。他们与客人分享祝酒词（通常会大声喊“饮胜！”），这是一种亲自向所有前来见证他们结合的人表示感谢和尊重的方式。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-28',
        title: { en: 'Symbolism of Mandarin Ducks', th: 'สัญลักษณ์เป็ดแมนดาริน', zh: '鸳鸯象征' },
        shortDescription: { en: 'Mandarin ducks, which are believed to mate for life, are a powerful and common symbol of fidelity and eternal love in marriage.', th: 'เป็ดแมนดารินซึ่งเชื่อกันว่าจับคู่กันตลอดชีวิต เป็นสัญลักษณ์ที่ทรงพลังและพบได้ทั่วไปของความซื่อสัตย์และความรักนิรันดร์ในการแต่งงาน', zh: '鸳鸯被认为终身配对，是婚姻中忠诚和永恒爱情的强大而普遍的象征。' },
        longDescription: { en: 'Because they are seen as lifelong, devoted partners, images of Mandarin ducks are frequently used in wedding decorations, on bedding, and as gifts. They represent the wish for the couple to have a faithful, loving, and inseparable bond throughout their lives, navigating life\'s waters together.', th: 'เนื่องจากพวกมันถูกมองว่าเป็นคู่ชีวิตที่อุทิศตนตลอดชีวิต รูปภาพของเป็ดแมนดารินจึงมักถูกนำมาใช้ในการตกแต่งงานแต่งงาน บนเครื่องนอน และเป็นของขวัญ พวกมันเป็นตัวแทนของความปรารถนาให้คู่บ่าวสาวมีความสัมพันธ์ที่ซื่อสัตย์ รักใคร่ และแยกจากกันไม่ได้ตลอดชีวิต และร่วมกันนำทางในสายน้ำแห่งชีวิต', zh: '因为它们被视为终身的忠实伴侣，所以鸳鸯的形象经常用于婚礼装饰、床上用品和礼物中。它们代表了希望新人一生忠诚、相爱、形影不离的愿望，共同驾驭生活的航船。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-29',
        title: { en: 'The Unity Toast', th: 'การดื่มเหล้าสาบาน', zh: '合卺酒' },
        shortDescription: { en: 'The couple drinks wine from two cups tied together with a red string, symbolizing their formal union and becoming one.', th: 'คู่บ่าวสาวดื่มไวน์จากถ้วยสองใบที่ผูกติดกันด้วยด้ายสีแดง เป็นสัญลักษณ์ของการรวมเป็นหนึ่งเดียวกันอย่างเป็นทางการ', zh: '新人从用红绳系在一起的两个杯子里喝酒，象征着他们正式结合，成为一体。' },
        longDescription: { en: 'In a traditional ceremony, the couple partakes in a unity toast, often with their arms intertwined as they drink. This act, known as "He Jin", symbolizes that they are now one entity, sharing in all of life\'s future joys and sorrows together.', th: 'ในพิธีแบบดั้งเดิม คู่บ่าวสาวจะร่วมดื่มอวยพรเพื่อความเป็นหนึ่งเดียว โดยมักจะคล้องแขนกันขณะดื่ม การกระทำนี้เรียกว่า "เหอจิ่น" เป็นสัญลักษณ์ว่าตอนนี้พวกเขาเป็นหนึ่งเดียวกันแล้ว และจะร่วมแบ่งปันความสุขและความทุกข์ในอนาคตของชีวิตร่วมกัน', zh: '在传统仪式中，新人会共饮交杯酒，通常是手臂交错着喝酒。这个被称为“合卺”的行为，象征着他们现在是一个整体，将共同分享未来生活中的所有喜怒哀乐。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-30',
        title: { en: 'The Three Bows', th: 'การคำนับสามครั้ง', zh: '三拜' },
        shortDescription: { en: 'A formal ritual where the couple bows to Heaven and Earth, their parents and ancestors, and finally to each other.', th: 'พิธีกรรมที่เป็นทางการซึ่งคู่บ่าวสาวจะคำนับฟ้าดิน พ่อแม่และบรรพบุรุษ และสุดท้ายคือคำนับซึ่งกันและกัน', zh: '一个正式的仪式，新人向天地、父母祖先，最后相互鞠躬。' },
        longDescription: { en: 'This is a pinnacle moment of the wedding ceremony. The first bow is to Heaven and Earth, showing respect for the universe and nature. The second bow is to their parents and ancestors, showing gratitude for their upbringing. The third and final bow is to each other, symbolizing mutual respect and love in their marriage.', th: 'นี่คือช่วงเวลาสำคัญที่สุดของพิธีแต่งงาน การคำนับครั้งแรกคือการคำนับฟ้าดิน เพื่อแสดงความเคารพต่อจักรวาลและธรรมชาติ การคำนับครั้งที่สองคือการคำนับพ่อแม่และบรรพบุรุษ เพื่อแสดงความกตัญญูต่อการเลี้ยงดู การคำนับครั้งที่สามและครั้งสุดท้ายคือการคำนับซึ่งกันและกัน เป็นสัญลักษณ์ของความเคารพและความรักซึ่งกันและกันในชีวิตสมรสของพวกเขา', zh: '这是婚礼仪式的高潮。第一拜是拜天地，表示对宇宙和自然的尊重。第二拜是拜高堂，表示对父母养育之恩的感激。第三拜是夫妻对拜，象征着他们在婚姻中的相互尊重和爱。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-31',
        title: { en: 'Auspicious Fruits', th: 'ผลไม้มงคล', zh: '吉祥水果' },
        shortDescription: { en: 'Using symbolic fruits like oranges, pomelos, and pomegranates in wedding decor to invite wealth and fertility.', th: 'การใช้ผลไม้ที่เป็นสัญลักษณ์ เช่น ส้ม ส้มโอ และทับทิม ในการตกแต่งงานแต่งงานเพื่อเชื้อเชิญความมั่งคั่งและความอุดมสมบูรณ์', zh: '在婚礼装饰中使用象征性的水果，如橙子、柚子和石榴，以招来财富和生育。' },
        longDescription: { en: 'Many fruits hold symbolic meaning in Chinese culture. Oranges and pomelos symbolize abundance and good fortune because their names sound like the words for "wealth" and "to have". Pomegranates, with their many seeds, are a powerful symbol of fertility, expressing the hope for many children and grandchildren.', th: 'ผลไม้หลายชนิดมีความหมายเชิงสัญลักษณ์ในวัฒนธรรมจีน ส้มและส้มโอเป็นสัญลักษณ์ของความอุดมสมบูรณ์และโชคดีเนื่องจากชื่อของมันฟังดูคล้ายกับคำว่า "ความมั่งคั่ง" และ "การมี" ทับทิมซึ่งมีเมล็ดมากมายเป็นสัญลักษณ์ที่ทรงพลังของความอุดมสมบูรณ์ ซึ่งแสดงถึงความหวังที่จะมีลูกหลานมากมาย', zh: '许多水果在中国文化中具有象征意义。橙子和柚子象征着富足和好运，因为它们的名字听起来像“财富”和“拥有”。石榴因其多籽，是生育能力的强大象征，表达了多子多孙的希望。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-32',
        title: { en: 'The Bridal Sedan Chair', th: 'เกี้ยวเจ้าสาว', zh: '花轿' },
        shortDescription: { en: 'The historical tradition of transporting the bride to the groom\'s home in an ornate, decorated sedan chair.', th: 'ประเพณีในอดีตของการเดินทางของเจ้าสาวไปยังบ้านของเจ้าบ่าวในเกี้ยวที่ตกแต่งอย่างหรูหรา', zh: '将新娘用华丽装饰的轿子抬到新郎家的历史传统。' },
        longDescription: { en: 'In ancient times, the bride was carried in a beautifully decorated sedan chair (hua jiao) as part of a grand procession. This tradition, while rare today, represents the high honor and value placed upon the bride as she makes her honorable journey to her new family.', th: 'ในสมัยโบราณ เจ้าสาวจะถูกหามในเกี้ยวที่ตกแต่งอย่างสวยงาม (ฮวาเจี้ยว) ซึ่งเป็นส่วนหนึ่งของขบวนแห่ที่ยิ่งใหญ่ ประเพณีนี้แม้จะหาได้ยากในปัจจุบัน แต่ก็แสดงถึงเกียรติและคุณค่าอันสูงส่งที่มอบให้กับเจ้าสาวขณะที่เธอเดินทางอย่างมีเกียรติไปยังครอบครัวใหม่ของเธอ', zh: '在古代，新娘是坐着装饰精美的花轿，作为盛大迎亲队伍的一部分被抬到新郎家的。这个传统虽然今天已经很少见，但它代表了对新娘的高度尊重和重视，因为她正在进行一次光荣的旅程，走向她的新家庭。' },
        imageUrl: pImgs[1]
    },
    {
        id: 'trad-33',
        title: { en: 'Giving Red Envelopes (Hongbao)', th: 'การให้ซองแดง (อั่งเปา)', zh: '送红包' },
        shortDescription: { en: 'Red envelopes containing "lucky money" are given as gifts to the couple and by the couple to others to spread luck and good wishes.', th: 'ซองแดงที่บรรจุ "เงินนำโชค" จะถูกมอบเป็นของขวัญให้กับคู่บ่าวสาว และคู่บ่าวสาวจะมอบให้กับผู้อื่นเพื่อแบ่งปันโชคและความปรารถนาดี', zh: '装有“利是”的红包作为礼物送给新人，新人也送给他人，以传播好运和祝福。' },
        longDescription: { en: 'Guests gift hongbao to the couple to wish them financial stability and prosperity. The couple, in turn, gives smaller hongbao to unmarried younger relatives, bridesmaids, and wedding helpers as a token of gratitude and to share their good fortune.', th: 'แขกจะมอบอั่งเปาให้กับคู่บ่าวสาวเพื่ออวยพรให้พวกเขามีความมั่นคงทางการเงินและความเจริญรุ่งเรือง ในทางกลับกัน คู่บ่าวสาวจะมอบอั่งเปาซองเล็กให้กับญาติที่ยังไม่แต่งงาน เพื่อนเจ้าสาว และผู้ช่วยในงานแต่งงานเพื่อเป็นของขวัญแสดงความขอบคุณและแบ่งปันโชคดีของพวกเขา', zh: '宾客赠送红包给新人，祝愿他们经济稳定、繁荣昌盛。新人则会给未婚的年轻亲戚、伴娘和婚礼助手一些较小的红包，以示感谢和分享他们的好运。' },
        imageUrl: pImgs[2]
    },
    {
        id: 'trad-34',
        title: { en: 'The Groom\'s Procession', th: 'ขบวนแห่ของเจ้าบ่าว', zh: '迎亲' },
        shortDescription: { en: 'A lively entourage led by the groom to the bride\'s house, often accompanied by music, firecrackers, and a lion dance.', th: 'ขบวนแห่ที่คึกคักนำโดยเจ้าบ่าวไปยังบ้านของเจ้าสาว ซึ่งมักจะมีดนตรี ประทัด และการเชิดสิงโตประกอบ', zh: '由新郎带领的热闹迎亲队伍前往新娘家，通常伴有音乐、鞭炮和舞狮。' },
        longDescription: { en: 'The "Ying Qin" or bride-retrieving procession is a joyous and noisy affair. The groom, accompanied by his groomsmen, travels to the bride\'s home to publicly announce the happy occasion and demonstrate his excitement to marry his bride.', th: 'ขบวน "หยิงชิน" หรือขบวนรับเจ้าสาวเป็นงานที่สนุกสนานและมีเสียงดัง เจ้าบ่าวพร้อมด้วยเพื่อนเจ้าบ่าวจะเดินทางไปบ้านของเจ้าสาวเพื่อประกาศข่าวดีต่อสาธารณชนและแสดงความตื่นเต้นที่จะได้แต่งงานกับเจ้าสาวของเขา', zh: '“迎亲”队伍是一个欢乐而喧闹的活动。新郎在他的伴郎的陪同下，前往新娘家，公开宣布喜讯，并展示他娶新娘的激动心情。' },
        imageUrl: pImgs[0]
    },
    {
        id: 'trad-35',
        title: { en: 'The Red String of Fate', th: 'ด้ายแดงแห่งโชคชะตา', zh: '红线' },
        shortDescription: { en: 'The romantic belief that an invisible red string connects destined lovers, tying them together for eternity.', th: 'ความเชื่ออันโรแมนติกว่ามีด้ายแดงที่มองไม่เห็นเชื่อมโยงคู่รักที่ถูกลิขิตไว้ด้วยกันชั่วนิรันดร์', zh: '一种浪漫的信仰，认为一根看不见的红线连接着命中注定的恋人，将他们永远系在一起。' },
        longDescription: { en: 'According to ancient legend, the lunar matchmaking god, Yue Lao, ties an invisible red cord around the ankles of those who are destined to meet and marry, regardless of time, place, or circumstances. This myth is a beautiful symbol of fate and the unbreakable bond between soulmates.', th: 'ตามตำนานโบราณ เทพเจ้าแห่งความรักใต้แสงจันทร์ หรือ "เฒ่าจันทรา" จะผูกด้ายแดงที่มองไม่เห็นไว้รอบข้อเท้าของผู้ที่ถูกลิขิตให้มาพบและแต่งงานกัน โดยไม่คำนึงถึงเวลา สถานที่ หรือสถานการณ์ ตำนานนี้เป็นสัญลักษณ์ที่สวยงามของโชคชะตาและสายใยที่ไม่มีวันขาดสะบั้นระหว่างเนื้อคู่', zh: '根据古老传说，月老会将一根看不见的红绳系在命中注定要相遇并结婚的人的脚踝上，无论时间、地点或环境如何。这个神话是命运和灵魂伴侣之间牢不可破的纽带的美丽象征。' },
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
            th: 'สินค้าของทางร้านมาจากที่ไหน? คุณภาพเชื่อถือได้หรือไม่?',
            en: 'Where do your products come from? Is the quality reliable?',
            zh: '你们的产品来自哪里？质量可靠吗？'
        },
        answer: {
            th: 'เราคัดสรรสินค้าคุณภาพเยี่ยม มีทั้งที่นำเข้าและผลิตในประเทศโดยเน้นความถูกต้องตามหลักประเพณีและความสวยงามเป็นสำคัญ อยากให้ลองแวะเข้ามาชมสินค้าจริงที่ร้านเพื่อสัมผัสถึงคุณภาพด้วยตัวคุณเองครับ',
            en: 'We select high-quality products, both imported and locally made, with a focus on traditional accuracy and beauty. We encourage you to visit our shop to see and feel the quality of the products for yourself.',
            zh: '我们挑选高品质的产品，包括进口和本地制造的，重点是传统的准确性和美观性。我们鼓励您亲自光临我们的商店，亲眼看看和感受产品的质量。'
        }
    },
    {
        id: 'faq-new-04',
        category: 'products_ceremonies',
        question: {
            th: 'ของหมั้น (สี่สีท้ง) และของรับไหว้ จำเป็นต้องเตรียมอะไรบ้าง?',
            en: 'What should be prepared for the engagement gifts (Si Si Thng) and tea ceremony gifts?',
            zh: '订婚礼物（四色糖）和敬茶回礼需要准备什么？'
        },
        answer: {
            th: 'ของหมั้นและของรับไหว้มีความหมายมงคลที่แตกต่างกันไป การเลือกให้เหมาะสมจะช่วยสร้างความประทับใจให้แก่ผู้ใหญ่ ทางเรามีตัวอย่างและคำแนะนำดีๆ มากมาย สามารถเข้ามาเลือกชมและขอคำปรึกษาที่ร้านได้เลยครับ',
            en: 'Engagement and tea ceremony gifts carry different auspicious meanings. Choosing appropriately will help impress the elders. We have many examples and great recommendations. You can come to our shop to browse and ask for advice.',
            zh: '订婚礼物和敬茶回礼具有不同的吉祥寓意。恰当的选择会给长辈留下深刻印象。我们有很多样品和很好的建议。您可以来店里浏览并咨询。'
        }
    },
    {
        id: 'faq-new-05',
        category: 'knowledge_culture',
        question: {
            th: 'คู่สมรสไม่ได้มีเชื้อสายจีน สามารถจัดพิธีแบบจีนได้หรือไม่?',
            en: 'Can a couple with no Chinese heritage hold a Chinese ceremony?',
            zh: '没有中国血统的夫妇可以举办中式婚礼吗？'
        },
        answer: {
            th: 'ได้แน่นอนครับ ปัจจุบันเป็นเรื่องที่พบเห็นได้บ่อย การจัดพิธีถือเป็นการให้เกียรติและเชื่อมความสัมพันธ์ของทั้งสองครอบครัว เราสามารถช่วยแนะนำวิธีผสมผสานวัฒนธรรมให้ลงตัวและน่าประทับใจได้ครับ',
            en: 'Absolutely. It\'s quite common nowadays. Holding the ceremony is a way to honor and connect both families. We can help guide you on how to blend cultures for a harmonious and impressive event.',
            zh: '当然可以。如今这很常见。举办仪式是尊重和连接两个家庭的一种方式。我们可以指导您如何融合文化，打造一个和谐而令人印象深刻的活动。'
        }
    },
    {
        id: 'faq-new-06',
        category: 'store_services',
        question: {
            th: 'นอกจากของใช้ในงานแต่งงาน ทางร้านมีสินค้าสำหรับพิธีอื่นๆ หรือไม่?',
            en: 'Besides wedding items, do you have products for other ceremonies?',
            zh: '除了婚礼用品，你们还有其他仪式用的产品吗？'
        },
        answer: {
            th: 'มีครับ เรามีสินค้าสำหรับพิธีมงคลอื่นๆ เช่น งานขึ้นบ้านใหม่ เปิดกิจการ ไหว้เจ้า หรือของขวัญสำหรับผู้ใหญ่ในโอกาสพิเศษต่างๆ ลองเข้ามาสอบถามได้ว่าคุณกำลังมองหาสินค้าสำหรับงานประเภทไหนครับ',
            en: 'Yes, we do. We have products for other auspicious ceremonies like housewarmings, business openings, deity worship, or special gifts for elders. Feel free to come in and ask about what you\'re looking for.',
            zh: '是的，我们有。我们有用于其他吉祥仪式（如乔迁、开业、祭拜神明）或送给长辈的特殊礼物的产品。欢迎您来店里咨询您正在寻找的商品。'
        }
    },
    {
        id: 'faq-new-07',
        category: 'products_ceremonies',
        question: {
            th: 'ธรรมเนียมของจีนแต่ละถิ่น (แต้จิ๋ว, ฮกเกี้ยน) ใช้ของในพิธีแตกต่างกันหรือไม่?',
            en: 'Do traditions for different Chinese dialect groups (e.g., Teochew, Hokkien) use different ceremonial items?',
            zh: '不同华人方言群体（如潮州、福建）的传统仪式用品是否不同？'
        },
        answer: {
            th: 'มีรายละเอียดที่แตกต่างกันเล็กน้อยครับ ซึ่งเป็นเสน่ห์ของวัฒนธรรมเรา เพื่อความถูกต้องและเหมาะสมที่สุด การแจ้งข้อมูลส่วนนี้กับทางร้านจะช่วยให้เราแนะนำของใช้ในพิธีได้ตรงตามธรรมเนียมของครอบครัวคุณ',
            en: 'There are slight differences in detail, which is part of the charm of our culture. For the utmost accuracy, providing this information to us will help us recommend items that correctly match your family\'s customs.',
            zh: '细节上略有不同，这也是我们文化的魅力所在。为了确保最高的准确性，向我们提供这方面的信息将有助于我们推荐完全符合您家庭习俗的物品。'
        }
    },
    {
        id: 'faq-new-08',
        category: 'knowledge_culture',
        question: {
            th: 'ควรเตรียมตัวและซื้อของสำหรับงานแต่งล่วงหน้านานแค่ไหน?',
            en: 'How far in advance should we prepare and purchase items for the wedding?',
            zh: '我们应该提前多久为婚礼准备和购买物品？'
        },
        answer: {
            th: 'Generally, we recommend starting preparations about 2-3 months in advance. This gives you enough time to research and select items without rushing. Consulting with us early on can greatly reduce any anxiety.',
            en: 'โดยทั่วไปแนะนำให้เริ่มเตรียมตัวประมาณ 2-3 เดือนล่วงหน้า เพื่อจะได้มีเวลาศึกษาข้อมูลและเลือกสรรของได้อย่างไม่เร่งรีบ การเข้ามาปรึกษาตั้งแต่เนิ่นๆ จะช่วยลดความกังวลไปได้มากครับ',
            zh: '通常，我们建议提前2-3个月开始准备。这让您有足够的时间研究和挑选物品，而不会感到匆忙。尽早咨询我们可以大大减轻任何焦虑。'
        }
    },
    {
        id: 'faq-new-09',
        category: 'store_services',
        question: {
            th: 'สามารถสั่งซื้อสินค้าผ่านช่องทางออนไลน์ได้หรือไม่?',
            en: 'Can I order products through online channels?',
            zh: '我可以通过在线渠道订购产品吗？'
        },
        answer: {
            th: 'เรามีช่องทางออนไลน์เพื่อความสะดวกในการชมสินค้าเบื้องต้น แต่สำหรับของใช้ในพิธีการซึ่งมีรายละเอียดและความหมายเฉพาะตัว เราแนะนำให้เดินทางมาที่ร้านเพื่อรับคำแนะนำที่ถูกต้องและครบถ้วนจะดีที่สุดครับ',
            en: 'We have online channels for preliminary viewing convenience. However, for ceremonial items that have specific details and meanings, we recommend visiting the shop to receive the most accurate and complete guidance.',
            zh: '我们提供在线渠道方便您初步浏览。但对于具有特定细节和寓意的仪式用品，我们建议您亲临商店，以获得最准确和全面的指导。'
        }
    },
    {
        id: 'faq-new-10',
        category: 'store_services',
        question: {
            th: 'หากต้องการคำปรึกษาแบบละเอียด ต้องนัดหมายล่วงหน้าหรือไม่? มีค่าใช้จ่ายไหม?',
            en: 'For a detailed consultation, do I need an appointment? Is there a fee?',
            zh: '如果需要详细咨询，我需要预约吗？有费用吗？'
        },
        answer: {
            th: 'ทางร้านยินดีให้คำปรึกษาโดยไม่มีค่าใช้จ่ายครับ หากคุณมีฤกษ์ยามแล้วและต้องการวางแผนอย่างละเอียด การโทรนัดหมายล่วงหน้าจะช่วยให้เราสามารถเตรียมข้อมูลและให้เวลาคุณได้อย่างเต็มที่',
            en: 'We are happy to provide consultations free of charge. If you have already chosen an auspicious date and want detailed planning, calling ahead for an appointment will allow us to prepare and dedicate our full attention to you.',
            zh: '我们很乐意免费提供咨询。如果您已经选定了吉日并希望进行详细策划，提前电话预约将使我们能够为您准备并全力以赴。'
        }
    },
    {
        id: 'faq-new-11',
        category: 'store_services',
        question: {
            th: 'อยากทราบราคาโดยประมาณสำหรับชุดของใช้ในพิธีแต่งงานทั้งหมด?',
            en: 'What is the approximate price for a complete set of ceremonial wedding items?',
            zh: '一套完整的婚礼仪式用品大约多少钱？'
        },
        answer: {
            th: 'ราคาจะขึ้นอยู่กับจำนวนรายการและประเภทของสินค้าที่เลือกใช้ ซึ่งแต่ละงานมีความต้องการไม่เท่ากัน เพื่อให้ได้ชุดของใช้ที่ตรงใจและอยู่ในงบประมาณที่วางไว้ ลองเข้ามาให้เราช่วยจัดชุดและประเมินราคาเบื้องต้นได้ครับ',
            en: 'The price depends on the number of items and the types of products selected, as each wedding has different needs. To get a set that meets your preferences and budget, please visit us so we can help you assemble a package and provide a preliminary estimate.',
            zh: '价格取决于所选物品的数量和产品类型，因为每场婚礼的需求都不同。为了获得一套符合您偏好和预算的组合，请光临我们，我们可以帮助您组合套餐并提供初步估价。'
        }
    },
    {
        id: 'faq-new-12',
        category: 'store_services',
        question: {
            th: 'ทางร้านมีบริการจัดส่งสินค้าหรือไม่?',
            en: 'Do you offer delivery service?',
            zh: '你们提供送货服务吗？'
        },
        answer: {
            th: 'เรามีบริการจัดส่งเพื่ออำนวยความสะดวกให้แก่ลูกค้าครับ สามารถสอบถามรายละเอียดและเงื่อนไขเพิ่มเติมได้ที่หน้าร้าน',
            en: 'Yes, we offer delivery services for our customers\' convenience. You can ask for more details and conditions at the shop.',
            zh: '是的，为方便客户，我们提供送货服务。您可以在店里咨询更多详情和条件。'
        }
    },
    {
        id: 'faq-new-13',
        category: 'store_services',
        question: {
            th: 'ร้านตั้งอยู่ที่ไหนและเปิด-ปิดกี่โมง?',
            en: 'Where is the shop located and what are the opening hours?',
            zh: '商店位于哪里？营业时间是？'
        },
        answer: {
            th: 'คุณสามารถดูที่อยู่และแผนที่การเดินทางอย่างละเอียดได้ที่หน้า "ติดต่อเรา" บนเว็บไซต์ครับ เราเปิดให้บริการทุกวัน [เวลาเปิด-ปิด] ยินดีต้อนรับเสมอครับ',
            en: 'You can find our detailed address and a map on the "Contact Us" page of our website. We are open every day [Opening-Closing Time]. You are always welcome!',
            zh: '您可以在我们网站的“联系我们”页面上找到详细地址和地图。我们每天[营业时间]开放。随时欢迎您！'
        }
    },
    {
        id: 'faq-new-14',
        category: 'store_services',
        question: {
            th: 'สามารถชำระเงินด้วยบัตรเครดิตได้หรือไม่?',
            en: 'Can I pay by credit card?',
            zh: '我可以用信用卡支付吗？'
        },
        answer: {
            th: 'รับชำระด้วยบัตรเครดิตครับ ทางร้านมีช่องทางการชำระเงินที่หลากหลายเพื่อความสะดวกของคุณ',
            en: 'Yes, we accept credit cards. We offer various payment methods for your convenience.',
            zh: '是的，我们接受信用卡。为方便起见，我们提供多种支付方式。'
        }
    },
    {
        id: 'faq-new-15',
        category: 'products_ceremonies',
        question: {
            th: 'ทำไมสัญลักษณ์ "ซังฮี้" (囍) ถึงมีความสำคัญในงานแต่งงาน?',
            en: 'Why is the "Double Happiness" (囍) symbol important in weddings?',
            zh: '为什么“双喜”（囍）符号在婚礼中很重要？'
        },
        answer: {
            th: '"ซังฮี้" เป็นสัญลักษณ์แห่งความสุขสองเท่าของคู่บ่าวสาว เป็นหัวใจสำคัญของงานแต่งงานเลยทีเดียวครับ ยังมีเกร็ดความรู้อีกมากมายเกี่ยวกับสัญลักษณ์มงคลต่างๆ ซึ่งเรายินดีแบ่งปันเมื่อคุณแวะมาที่ร้าน',
            en: 'The "Double Happiness" symbol represents the twofold joy of the couple and is the heart of a wedding. There are many more interesting facts about auspicious symbols that we would be happy to share when you visit our shop.',
            zh: '“双喜”符号代表着新人的双重喜悦，是婚礼的核心。关于吉祥符号还有更多有趣的事实，我们很乐意在您光临本店时与您分享。'
        }
    },
    {
        id: 'faq-new-16',
        category: 'products_ceremonies',
        question: {
            th: 'ถ้าต้องการจัดพิธียกน้ำชาให้ถูกต้อง ควรเลือกใช้ชาแบบไหน?',
            en: 'To hold a proper tea ceremony, what kind of tea should be chosen?',
            zh: '要举办正式的敬茶仪式，应该选择哪种茶？'
        },
        answer: {
            th: 'ชาที่ใช้ในพิธีมีความหมายมงคลแตกต่างกันไป เช่น การอวยพรให้รักกันยืนยาว หรือให้มีลูกเต็มบ้านมีหลานเต็มเมือง เราสามารถช่วยแนะนำชาที่เหมาะสมกับคำอวยพรที่คุณต้องการมอบให้ผู้ใหญ่ได้ครับ',
            en: 'The teas used in the ceremony have different auspicious meanings, such as blessing for a long-lasting love or for a large family. We can help recommend the right tea that matches the blessings you wish to convey to the elders.',
            zh: '仪式中使用的茶叶具有不同的吉祥寓意，例如祝福爱情长久或子孙满堂。我们可以帮助您推荐适合您想传达给长辈的祝福的茶叶。'
        }
    },
    {
        id: 'faq-new-17',
        category: 'products_ceremonies',
        question: {
            th: 'ของใช้ในพิธีจำเป็นต้องเป็นสีแดงทั้งหมดหรือไม่?',
            en: 'Do all ceremonial items have to be red?',
            zh: '所有仪式用品都必须是红色的吗？'
        },
        answer: {
            th: 'สีแดงคือสีมงคลหลัก แต่ก็สามารถใช้สีทองหรือสีชมพูเข้ามาประกอบเพื่อความสวยงามได้ครับ การเลือกใช้สีก็เป็นศิลปะอย่างหนึ่ง ซึ่งเราสามารถให้คำแนะนำเพื่อคุมโทนงานของคุณให้ดูทันสมัยแต่ยังคงความถูกต้องตามประเพณี',
            en: 'Red is the primary auspicious color, but gold or pink can also be incorporated for aesthetic purposes. Color choice is an art, and we can provide advice to create a modern yet traditionally correct color scheme for your event.',
            zh: '红色是主要的吉祥色，但也可以加入金色或粉色以增加美感。色彩选择是一门艺术，我们可以提供建议，为您的活动打造一个既现代又符合传统的配色方案。'
        }
    },
    {
        id: 'faq-new-18',
        category: 'products_ceremonies',
        question: {
            th: 'ขนมมงคลในพิธีมีความหมายแตกต่างกันอย่างไร?',
            en: 'How do the auspicious sweets in the ceremony differ in meaning?',
            zh: '仪式中的吉祥甜点在寓意上有何不同？'
        },
        answer: {
            th: 'ขนมแต่ละชนิดเป็นตัวแทนของคำอวยพรที่แตกต่างกันครับ เช่น ขนมจันอับหมายถึงความสุขสมบูรณ์ การเลือกใช้ขนมจึงเป็นมากกว่าแค่ความอร่อย แต่เป็นการมอบคำอวยพรให้แก่คู่บ่าวสาว',
            en: 'Each type of sweet represents a different blessing. For example, certain sweets signify complete happiness. Therefore, choosing sweets is about more than just taste; it\'s about giving blessings to the couple.',
            zh: '每种甜点代表着不同的祝福。例如，某些甜点象征着圆满的幸福。因此，选择甜点不仅仅是为了口味，更是为了给新人送上祝福。'
        }
    },
    {
        id: 'faq-new-19',
        category: 'products_ceremonies',
        question: {
            th: 'ชุดเอี๊ยมแต่งงาน มีความสำคัญอย่างไร?',
            en: 'What is the significance of the wedding apron set?',
            zh: '婚礼围裙套装有何重要意义？'
        },
        answer: {
            th: 'เป็นอีกหนึ่งประเพณีที่สำคัญครับ เอี๊ยมเป็นสัญลักษณ์ของการเริ่มต้นชีวิตครอบครัวและการอวยพรให้มีทายาทสืบสกุล ในชุดจะประกอบด้วยของมงคลต่างๆ ซึ่งแต่ละอย่างมีความหมายซ่อนอยู่',
            en: 'This is another important tradition. The apron symbolizes the start of family life and is a blessing for having descendants. The set contains various auspicious items, each with its own hidden meaning.',
            zh: '这是另一个重要的传统。围裙象征着家庭生活的开始，也是对子孙后代的祝福。套装中包含各种吉祥物品，每件物品都有其隐藏的寓意。'
        }
    },
    {
        id: 'faq-new-20',
        category: 'knowledge_culture',
        question: {
            th: 'จำเป็นต้องปฏิบัติตามธรรมเนียมโบราณอย่างเคร่งครัดหรือไม่?',
            en: 'Is it necessary to follow ancient traditions strictly?',
            zh: '有必要严格遵守古代传统吗？'
        },
        answer: {
            th: 'แก่นแท้ของพิธีคือการแสดงความเคารพต่อผู้ใหญ่และขอพรเพื่อการเริ่มต้นชีวิตคู่ที่ดี คุณสามารถปรับบางขั้นตอนให้เข้ากับยุคสมัยได้ การเข้ามาพูดคุยจะช่วยให้เราหาจุดที่ลงตัวระหว่างธรรมเนียมดั้งเดิมและความต้องการของคุณได้ครับ',
            en: 'The essence of the ceremony is to show respect to elders and ask for blessings for a good start to married life. You can adapt some steps to fit modern times. A discussion with us can help find the perfect balance between traditional customs and your personal preferences.',
            zh: '仪式的核心是向长辈表示尊重，并为美好的婚姻生活祈求祝福。您可以调整一些步骤以适应现代。与我们讨论可以帮助您在传统习俗和个人偏好之间找到完美的平衡。'
        }
    }
];