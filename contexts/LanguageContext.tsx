
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { type Language, type MultilingualString } from '../types';

// Define translations
const translations: Record<string, MultilingualString> = {
  // General UI
  home: { en: 'Home', th: 'หน้าแรก', zh: '首页' },
  shop: { en: 'Shop', th: 'สินค้า', zh: '商店' },
  traditions: { en: 'Traditions to Know', th: 'ประเพณีต่างๆที่ควรรู้', zh: '必知传统' },
  blog: { en: 'Blog', th: 'บล็อก', zh: '博客' },
  contact: { en: 'Contact', th: 'ติดต่อเรา', zh: '联系我们' },
  brand_name: { en: 'Tang Chin Hua', th: 'ตั้งจิ้นฮั้ว', zh: '陳振華' },
  brand_name_header_part1: { en: 'TANG CHIN', th: 'ตั้งจิ้น', zh: '陳振' },
  brand_name_header_part2: { en: ' HUA', th: 'ฮั้ว', zh: '華' },
  header_tagline: { en: 'Complete Chinese Wedding & Engagement Essentials', th: 'รวมของแต่งงานจีน พิธีหมั้น ครบวงจร', zh: '全套中式婚礼与订婚用品' },
  about: { en: 'Our Story', th: 'เรื่องราวของเรา', zh: '我们的故事' },
  weddingChecklist: { en: 'Wedding Essentials', th: 'เช็คลิสต์', zh: '婚礼必备' },
  faq: { en: 'FAQ', th: 'คำถามที่พบบ่อย', zh: '常见问题' },

  // Footer & Contact
  visitUs: { en: 'Visit our flagship store and see our products in person, located in the heart of Yaowarat, just 200 meters from MRT Wat Mangkon, Bangkok.', th: 'เยี่ยมชมหน้าร้านและสินค้าภายในร้านเรา ตั้งอยู่ใจกลางเยาวราช เพียง 200 เมตรจาก MRT วัดมังกร กรุงเทพฯ', zh: '欢迎光临我们的旗舰店，亲身体验我们的产品。本店位于耀华力路中心，距离 MRT 龙莲寺站仅200米，曼谷。' },
  yaowaratLocation: { en: 'Yaowarat Road, Samphanthawong, Bangkok', th: 'ถนนเยาวราช, สัมพันธวงศ์, กรุงเทพมหานคร', zh: '曼谷三攀他旺县耀华力路' },
  quickLinks: { en: 'Quick Links', th: 'ลิงก์ด่วน', zh: '快速链接' },
  followUs: { en: 'Follow Us', th: 'ติดตามเรา', zh: '关注我们' },
  
  // Homepage Sections
  heroSubtitle: { 
    en: 'Experience the timeless elegance of authentic Chinese wedding attire.', 
    th: 'สัมผัสความสง่างามเหนือกาลเวลาของชุดแต่งงานจีนโบราณแท้', 
    zh: '体验正宗中式婚礼服饰的永恒优雅。' 
  },
  ourLegacy: { en: 'Our Legacy', th: 'มรดกของเรา', zh: '我们的传承' },
  knowledgeHub: { en: 'From the Knowledge Hub', th: 'จากสาระน่ารู้', zh: '知识中心' },
  readOurStory: { en: 'Read Our Full Story', th: 'อ่านเรื่องราวทั้งหมด', zh: '阅读完整故事' },
  fiftyYears: { en: 'For over 50 years, Tang Chin Hua has been a custodian of tradition, a cornerstone for families celebrating one of life’s most sacred milestones. We blend timeless elegance with modern service to honor your legacy.', th: 'กว่า 50 ปีที่ตั้งจิ้นฮั้วได้เป็นผู้สืบสานประเพณี เป็นหลักชัยสำหรับครอบครัวที่เฉลิมฉลองวาระสำคัญที่สุดของชีวิต เราผสมผสานความสง่างามเหนือกาลเวลาเข้ากับบริการที่ทันสมัยเพื่อเป็นเกียรติแก่มรดกของคุณ', zh: '五十多年来，Tang Chin Hua 一直是传统的守护者，是庆祝生命中最神圣里程碑的家庭的基石。我们将永恒的优雅与现代服务相结合，以纪念您的传承。' },
  culturalHighlights: { en: 'Cultural Highlight of the Day', th: 'วัฒนธรรมน่ารู้ประจำวัน', zh: '每日文化亮点' },
  featuredProducts: { en: 'Featured Products', th: 'สินค้าแนะนำ', zh: '特色产品' },
  traditionOfTheDay: { en: 'Tradition of the Day', th: 'ประเพณีประจำวัน', zh: '今日传统' },
  testimonials: { en: 'What Our Customers Say', th: 'เสียงจากลูกค้าของเรา', zh: '客户评价' },
  connectWithUs: { en: 'Connect with us for a private consultation:', th: 'ติดต่อเราเพื่อรับคำปรึกษาส่วนตัว:', zh: '联系我们进行私人咨询：' },
  shopByCategory: { en: 'Shop by Category', th: 'เลือกซื้อตามหมวดหมู่', zh: '按类别购物' },
  
  // Homepage Redesign
  guideTitle: { en: 'A Guide to Your Perfect Ceremony', th: 'คู่มือนำทางสู่พิธีที่สมบูรณ์แบบของคุณ', zh: '您的完美仪式指南' },
  guideStep1Title: { en: 'Consultation', th: 'การปรึกษา', zh: '咨询' },
  guideStep1Desc: { en: 'Begin your journey with expert advice from our specialists.', th: 'เริ่มต้นการเดินทางของคุณด้วยคำแนะนำจากผู้เชี่ยวชาญของเรา', zh: '从我们专家的建议开始您的旅程。' },
  guideStep2Title: { en: 'Selection', th: 'การเลือกสรร', zh: '挑选' },
  guideStep2Desc: { en: 'Handpick the perfect items for your unique ceremony.', th: 'เลือกสรรสิ่งของที่สมบูรณ์แบบสำหรับพิธีที่เป็นเอกลักษณ์ของคุณ', zh: '为您的独特仪式精心挑选完美的物品。' },
  guideStep3Title: { en: 'Celebration', th: 'การเฉลิมฉลอง', zh: '庆祝' },
  guideStep3Desc: { en: 'Celebrate your special day with traditions held dear.', th: 'เฉลิมฉลองวันพิเศษของคุณด้วยประเพณีอันล้ำค่า', zh: '用珍贵的传统庆祝您的特殊日子。' },
  heritageTitle: { en: 'Explore Our Heritage', th: 'สำรวจมรดกของเรา', zh: '探索我们的传承' },
  learnMore: { en: 'Learn More', th: 'เรียนรู้เพิ่มเติม', zh: '了解更多' },
  collectionsTitle: { en: 'Featured Collections', th: 'คอลเลคชั่นแนะนำ', zh: '特色系列' },
  collection_tea_sets: { en: 'Ceremonial Tea Sets', th: 'ชุดถ้วยชาในพิธี', zh: '仪式茶具' },
  collection_attire: { en: 'Bridal Attire & Accessories', th: 'ชุดเจ้าสาวและเครื่องประดับ', zh: '新娘礼服及配饰' },
  collection_gifts: { en: 'Wedding Gifts & Decor', th: 'ของขวัญและของตกแต่ง', zh: '婚礼礼品与装饰' },
  communityTitle: { en: 'Words from Our Community', th: 'เสียงจากลูกค้าของเรา', zh: '来自我们社区的声音' },
  event_wedding: { en: 'Wedding Ceremony', th: 'พิธีมงคลสมรส', zh: '婚礼仪式' },
  event_consultation: { en: 'Guo Da Li Consultation', th: 'ปรึกษาพิธีหมั้น', zh: '过大礼咨询' },
  
  // Product & Shop
  filterByCategoryLabel: { en: 'Filter by Category:', th: 'กรองตามหมวดหมู่:', zh: '按类别筛选：' },
  allProducts: { en: 'All Products', th: 'สินค้าทั้งหมด', zh: '所有产品' },
  sortByLabel: { en: 'Sort by:', th: 'เรียงตาม:', zh: '排序方式：' },
  sortByPopularity: { en: 'Popularity', th: 'ความนิยม', zh: '热门' },
  sortByPriceAsc: { en: 'Price: Low to High', th: 'ราคา: น้อยไปมาก', zh: '价格：从低到高' },
  sortByPriceDesc: { en: 'Price: High to Low', th: 'ราคา: มากไปน้อย', zh: '价格：从高到低' },
  sortByNameAsc: { en: 'Name: A-Z', th: 'ชื่อ: ก-ฮ', zh: '名称：A-Z' },
  sortByNameDesc: { en: 'Name: Z-A', th: 'ชื่อ: ฮ-ก', zh: '名称：Z-A' },
  productCount: { en: '{count} Products Found', th: 'พบ {count} รายการ', zh: '找到 {count} 件产品' },
  shopIntro: { 
    en: 'Explore our curated collection of traditional Chinese wedding attire. Each piece is crafted with meticulous care, blending timeless elegance with auspicious symbolism to honor your most sacred moments. From luxurious Qun Kwas to elegant accessories, discover the perfect heirlooms for your special day.', 
    th: 'เลือกชมคอลเลคชั่นชุดแต่งงานจีนโบราณที่คัดสรรมาอย่างดีของเรา ทุกชิ้นงานรังสรรค์ขึ้นด้วยความใส่ใจอย่างพิถีพิถัน ผสมผสานความสง่างามเหนือกาลเวลาเข้ากับสัญลักษณ์มงคลเพื่อเป็นเกียรติแก่วันสำคัญที่สุดของคุณ ตั้งแต่ชุดฉวินขว้าอันหรูหราไปจนถึงเครื่องประดับที่สง่างาม ค้นพบมรดกที่สมบูรณ์แบบสำหรับวันพิเศษของคุณ', 
    zh: '探索我们精心策划的传统中式婚礼服饰系列。每一件作品都经过精心制作，将永恒的优雅与吉祥的象征意义融为一体，为您最神圣的时刻增光添彩。从奢华的裙褂到优雅的配饰，为您的特殊日子找到完美的传家宝。' 
  },
  ceremonialItemsTitle: { en: 'Ceremonial Items Checklist', th: 'เช็คลิสต์ของใช้ในพิธี', zh: '仪式用品清单' },
  ceremonialItemsIntro: { en: 'Explore the essential items for a traditional ceremony. A visual guide to help you prepare.', th: 'สำรวจของใช้ที่จำเป็นสำหรับพิธีตามประเพณี คู่มือภาพที่จะช่วยคุณเตรียมความพร้อม', zh: '探索传统仪式所需的基本物品。一份帮助您准备的视觉指南。' },
  productNotFound: { en: 'Product not found', th: 'ไม่พบสินค้า', zh: '未找到产品' },
  backToShop: { en: 'Back to Shop', th: 'กลับไปที่ร้านค้า', zh: '返回商店' },
  specifications: { en: 'Specifications', th: 'ข้อมูลจำเพาะ', zh: '规格' },
  color: { en: 'Color', th: 'สี', zh: '颜色' },
  material: { en: 'Material', th: 'วัสดุ', zh: '材料' },
  pattern: { en: 'Pattern', th: 'ลวดลาย', zh: '图案' },
  era: { en: 'Era', th: 'ยุค', zh: '时代' },
  sizes: { en: 'Sizes', th: 'ขนาด', zh: '尺寸' },
  category: { en: 'Category', th: 'หมวดหมู่', zh: '类别' },
  youMightAlsoLike: { en: 'You Might Also Like', th: 'สินค้าที่คุณอาจสนใจ', zh: '您可能也喜欢' },

  // Product Detail Page
  reviews: { en: 'Reviews', th: 'รีวิว', zh: '评价' },
  description: { en: 'Description', th: 'รายละเอียด', zh: '描述' },
  customerReviews: { en: 'Customer Reviews', th: 'รีวิวจากลูกค้า', zh: '顾客评价' },
  basedOnReviews: { en: 'Based on {count} reviews', th: 'จาก {count} รีวิว', zh: '基于 {count} 条评价' },
  noReviews: { en: 'No reviews yet.', th: 'ยังไม่มีรีวิว', zh: '暂无评价' },
  selectSize: { en: 'Select a Size', th: 'เลือกขนาด', zh: '选择尺寸' },
  sizeRequired: { en: 'Please select a size.', th: 'กรุณาเลือกขนาด', zh: '请选择尺寸。' },

  // Shop Page Filters
  filterBySizeLabel: { en: 'Filter by Size:', th: 'กรองตามขนาด:', zh: '按尺寸筛选：' },
  filterByColorLabel: { en: 'Filter by Color:', th: 'กรองตามสี:', zh: '按颜色筛选：' },
  allSizes: { en: 'All Sizes', th: 'ทุกขนาด', zh: '所有尺寸' },
  allColors: { en: 'All Colors', th: 'ทุกสี', zh: '所有颜色' },

  // Cart
  quantity: { en: 'Quantity', th: 'จำนวน', zh: '数量' },
  addToCart: { en: 'Add to Cart', th: 'เพิ่มลงตะกร้า', zh: '加入购物车' },
  addedToCart: { en: 'Added {quantity} x {productName} to cart!', th: 'เพิ่ม {productName} จำนวน {quantity} ชิ้นลงในตะกร้าแล้ว!', zh: '已将 {quantity} x {productName} 添加到购物车！' },
  shoppingCart: { en: 'Shopping Cart', th: 'ตะกร้าสินค้า', zh: '购物车' },
  product: { en: 'Product', th: 'สินค้า', zh: '产品' },
  price: { en: 'Price', th: 'ราคา', zh: '价格' },
  total: { en: 'Total', th: 'รวม', zh: '总计' },
  subtotal: { en: 'Subtotal', th: 'ยอดรวม', zh: '小计' },
  remove: { en: 'Remove', th: 'ลบ', zh: '移除' },
  checkout: { en: 'Proceed to Checkout', th: 'ดำเนินการชำระเงิน', zh: '继续结账' },
  emptyCart: { en: 'Your cart is empty.', th: 'ตะกร้าสินค้าของคุณว่างเปล่า', zh: '您的购物车是空的。' },
  continueShopping: { en: 'Continue Shopping', th: 'เลือกซื้อสินค้าต่อ', zh: '继续购物' },
  cartSummary: { en: 'Cart Summary', th: 'สรุปรายการสั่งซื้อ', zh: '购物车摘要' },
  
  // Blog & Traditions
  readMore: { en: 'Read More', th: 'อ่านต่อ', zh: '阅读更多' },
  readLess: { en: 'Read Less', th: 'อ่านน้อยลง', zh: '收起' },
  noPosts: { en: 'No blog posts yet. Stay tuned for insightful articles on Chinese wedding culture!', th: 'ยังไม่มีบทความในขณะนี้ โปรดติดตามบทความดีๆ เกี่ยวกับวัฒนธรรมงานแต่งงานจีนได้เร็วๆ นี้!', zh: '暂无博客文章。敬请期待有关中华婚礼文化的深度文章！' },
  noResults: { en: 'No articles match your current filters.', th: 'ไม่มีบทความที่ตรงกับการค้นหาของคุณ', zh: '没有符合您当前筛选条件的文章。' },
  filterByCategory: { en: 'Filter by Category', th: 'กรองตามหมวดหมู่', zh: '按类别筛选' },
  allCategories: { en: 'All Categories', th: 'ทุกหมวดหมู่', zh: '所有类别' },
  filterByTag: { en: 'Filter by Tag', th: 'กรองตามแท็ก', zh: '按标签筛选' },
  
  // Blog Categories
  'meaning-of-symbols': { en: 'Meaning of Symbols', th: 'ความหมายของสัญลักษณ์', zh: '符号意义' },
  'wedding-traditions': { en: 'Wedding Traditions', th: 'ประเพณีแต่งงาน', zh: '婚礼传统' },
  'art-of-embroidery': { en: 'Art of Embroidery', th: 'ศิลปะแห่งการปักผ้า', zh: '刺绣艺术' },
  'customer-stories': { en: 'Customer Stories', th: 'เรื่องราวจากลูกค้า', zh: '客户故事' },
  'planning-tips': { en: 'Planning Tips', th: 'เคล็ดลับการวางแผน', zh: '策划技巧' },

  // Contact Page
  openingHoursTitle: { en: 'Opening Hours', th: 'เวลาทำการ', zh: '营业时间' },
  openingHoursDays: { en: 'Tuesday - Sunday (Closed on Mondays)', th: 'วันอังคาร - วันอาทิตย์ (หยุดวันจันทร์)', zh: '周二至周日（周一休息）' },
  openingHoursTimes: { en: '10:30 AM - 6:30 PM', th: '10:30 - 18:30 น.', zh: '上午 10:30 - 下午 6:30' },
  getInTouch: { en: 'Get in Touch', th: 'ติดต่อเรา', zh: '联系我们' },
  storeIntroTitle: { en: 'Tang Chin Hua: Upholding Chinese Wedding Traditions', th: 'ร้านตั้งจิ้นฮั้ว: สืบสานประเพณีแต่งงานจีน ครบเครื่องเรื่องมงคลสมรส', zh: 'ตั้งจิ้นฮั้ว：传承中华婚礼传统，缔造美满良缘' },
  storeIntroBody: { en: 'For over 50 years, Tang Chin Hua has stood as a specialist in traditional Chinese wedding ceremony items. The store\'s hallmark is its strict selection of products that adhere to ancient Chinese traditions. Whether you are Mandarin, Teochew, or Hokkien, you can be confident that you will receive wedding items that are correct according to your customs.', th: 'ร้านตั้งจิ้นฮั้ว (Tang Chin Hua) ยืนหยัดเป็นผู้เชี่ยวชาญด้านเครื่องใช้ในพิธีแต่งงานตามธรรมนียมจีนมายาวนานกว่า 50 ปี จุดเด่นของร้านคือการคัดสรรสินค้าที่ถูกต้องตามหลักประเพณีจีนโบราณอย่างเคร่งครัด ไม่ว่าคุณจะเป็นชาวจีนกลาง แต้จิ๋ว หรือฮกเกี้ยน ก็มั่นใจได้ว่าจะได้รับของแต่งงานที่ถูกต้องตามจารีตประเพณีอย่างแน่นอน', zh: '五十多年来，“ตั้งจิ้นฮั้ว”一直是中华传统婚礼用品的专家。 本店的标志是严格挑选遵循中华古老传统的产品。 无论您是讲普通话、潮州话还是福建话，您都可以确信您将收到符合您习俗的婚礼用品。' },
  addressTitle: { en: 'Address', th: 'ที่อยู่', zh: '地址' },
  storeAddress: { 
    en: '482, 484 Mittraphan Rd, Pom Prap, Pom Prap Sattru Phai, Bangkok 10100', 
    th: '482, 484 ถนนมิตรพันธ์ แขวงป้อมปราบ เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100', 
    zh: '曼谷市邦巴沙都拍县友誼路482-484號 10100' 
  },
  locationDirections: {
    en: 'Located in the heart of Yaowarat, just 200 meters from MRT Wat Mangkon.',
    th: 'ตั้งอยู่ใจกลางเยาวราช เพียง 200 เมตรจาก MRT วัดมังกร',
    zh: '本店位于耀华力路中心，距离 MRT 龙莲寺站仅200米。'
  },
  phoneTitle: { en: 'Phone', th: 'โทร', zh: '电话' },
  socialMedia: { en: 'Social Media', th: 'โซเชียลมีเดีย', zh: '社交媒体' },

  // Checklist Page
  checklistTitle: { en: 'Your Interactive Wedding Checklist', th: 'เช็คลิสต์งานแต่งงานแบบอินเทอร์แอคทีฟ', zh: '您的互动婚礼清单' },
  checklistIntro: { en: 'A comprehensive checklist of traditional items and decorations for a seamless Chinese wedding. Checked items are saved automatically to your browser.', th: 'เช็คลิสต์ของใช้และของประดับตามประเพณีสำหรับงานแต่งงานจีนที่สมบูรณ์แบบ รายการที่เช็คแล้วจะถูกบันทึกในเบราว์เซอร์ของคุณโดยอัตโนมัติ', zh: '一份全面的传统中式婚礼用品和装饰清单，助您打造一场圆满的婚礼。已勾选项目会自动保存到您的浏览器中。' },
  progress: { en: 'Progress', th: 'ความคืบหน้า', zh: '进展' },
  
  // About Page Narrative
  about_subtitle: {
    en: 'A Legacy of Love, A Future of Elegance',
    th: 'สืบสานตำนานรัก...สู่ความสง่างามแห่งอนาคต',
    zh: '爱的传承，优雅的未来'
  },
  about_p1: {
    en: 'In the vibrant heart of Bangkok\'s Chinatown, where the scent of tradition lingers in the air, a legacy was born over fifty years ago. This is the story of ตั้งจิ้นฮั้ว, a name that has become synonymous with the sacred artistry of the Chinese wedding. Our journey began not as a business, but as a family\'s promise: to preserve the profound beauty and intricate customs of our heritage for generations to come.',
    th: 'ณ ใจกลางย่านเยาวราชอันเปี่ยมด้วยชีวิตชีวา ที่ซึ่งกลิ่นอายแห่งประเพณียังคงอบอวลอยู่เสมอ เมื่อกว่าห้าสิบปีก่อน ตำนานแห่งหนึ่งได้ถือกำเนิดขึ้น...นี่คือเรื่องราวของ ตั้งจิ้นฮั้ว ชื่อที่เปรียบเสมือนตัวแทนแห่งศาสตร์และศิลป์ของพิธีวิวาห์จีน เรื่องราวของเราไม่ได้เริ่มต้นในฐานะธุรกิจ แต่คือคำมั่นสัญญาของครอบครัว ที่จะสืบสานความงดงามอันลึกซึ้งและธรรมเนียมปฏิบัติอันละเอียดอ่อนแห่งมรดกทางวัฒนธรรมของเราให้คงอยู่สืบไป',
    zh: '在曼谷唐人街充满活力的中心，传统的气息弥漫在空气中，五十多年前，一个传奇诞生了。这就是ตั้งจิ้นฮั้ว（Tang Chin Hua）的故事，这个名字已成为中华神圣婚礼艺术的代名词。我们的旅程并非始于商业，而是一个家族的承诺：为后代保存我们传统的深邃之美和复杂习俗。'
  },
  about_p2: {
    en: 'Founded by our family patriarch, a master artisan with a deep reverence for the rituals that bind families and honor ancestors, our shop was a humble treasure trove of handcrafted wonders. Every silk thread in our Qun Kwas told a story of prosperity; every hand-painted tea set held the promise of familial harmony. We were more than merchants; we were custodians of culture, guiding young couples through the meaningful steps of Guo Da Li, the reverence of the tea ceremony, and the blessings of An Chuang.',
    th: 'ร้านของเราก่อตั้งขึ้นโดยบรรพบุรุษผู้เป็นดั่งปรมาจารย์ช่างศิลป์ ผู้มีความเคารพอย่างสุดซึ้งต่อพิธีกรรมที่เชื่อมโยงครอบครัวและให้เกียรติแด่บรรพชน ในยุคแรกเริ่ม ร้านของเราเป็นดั่งหีบสมบัติอันล้ำค่าที่เต็มไปด้วยงานฝีมืออันน่าอัศจรรย์ เส้นไหมทุกเส้นบนชุด \'คัว\' (Qun Kwa) ของเรา ล้วนถักทอเรื่องราวแห่งความเจริญรุ่งเรือง ชุดถ้วยชาทุกลายเส้นที่วาดด้วยมือแฝงไว้ด้วยคำอวยพรให้ครอบครัวปรองดองเป็นหนึ่งเดียว เราเป็นมากกว่าผู้ค้า แต่เราคือผู้สืบทอดและพิทักษ์วัฒนธรรม ผู้คอยแนะนำคู่รักหนุ่มสาวให้เข้าใจถึงขั้นตอนอันเปี่ยมความหมายของพิธีหมั้น \'กัวต้าหลี่\' (Guo Da Li) ความเคารพนบนอบในพิธียกน้ำชา และการให้พรในพิธีปูเตียง \'อันฉวง\' (An Chuang)',
    zh: '我们的店铺由家族的先祖创立，他是一位对联结家庭、尊敬祖先的仪式怀有深深敬意的工匠大师。起初，它只是一个充满手工艺品奇迹的宝库。我们裙褂上的每一根丝线都诉说着繁荣的故事；每一套手绘茶具都承载着家庭和谐的承诺。我们不仅仅是商人；我们是文化的守护者，引导年轻夫妇走过“过大礼”的意义深远的步骤，体验敬茶仪式的庄重，以及“安床”的祝福。'
  },
  about_p3: {
    en: 'Today, that founding promise is carried forward by the second and third generations of our family. The world has changed, but our principles remain unwavering. We have embraced the new while honoring the old, understanding that modern love stories deserve to be wrapped in the timeless elegance of tradition. Our collection is a bridge between the past and the present, meticulously curated to ensure every item is not only authentic in its symbolism but also exquisite in its craftsmanship.',
    th: 'จวบจนวันนี้ คำมั่นสัญญานั้นได้รับการสืบทอดต่อโดยครอบครัวรุ่นที่สองและสาม แม้โลกจะเปลี่ยนไป แต่หลักการของเรายังคงหนักแน่นไม่สั่นคลอน เราเปิดรับสิ่งใหม่พร้อมกับให้เกียรติในสิ่งเก่า เพราะเราเชื่อว่าเรื่องราวความรักสมัยใหม่นั้นคู่ควรที่จะถูกห่อหุ้มไว้ด้วยความสง่างามอันเป็นอมตะของประเพณี สินค้าของเราจึงเป็นดั่งสะพานที่เชื่อมระหว่างอดีตและปัจจุบัน โดยผ่านการคัดสรรมาอย่างพิถีพิถันเพื่อให้มั่นใจว่าของทุกชิ้นไม่เพียงแต่ถูกต้องตามสัญลักษณ์มงคล แต่ยังงดงามล้ำเลิศในเชิงศิลปะและฝีมือ',
    zh: '如今，这份创始的承诺由我们家族的第二代和第三代继承。世界变了，但我们的原则始终坚定不移。我们拥抱新事物，同时尊重旧传统，因为我们明白现代的爱情故事值得被包裹在永恒的传统优雅之中。我们的系列是连接过去与现在的桥梁，经过精心策划，确保每一件物品不仅在其象征意义上是真实的，而且在工艺上也是精致绝伦的。'
  },
  // Fix: Corrected syntax for about_p4 entry and fixed a typo in the Thai translation.
  about_p4: {
    en: 'At ตั้งจิ้นฮั้ว, we believe a wedding is more than a day—it is the weaving of two family histories into a single, beautiful tapestry. It is the first chapter of a new legacy. For over five decades, we have been privileged to provide the threads for that chapter. We don\'t just sell wedding supplies; we share in the joy of new beginnings, offering our knowledge, our passion, and our unwavering commitment to making every union as auspicious and beautiful as it is destined to be.',
    th: 'ที่ ตั้งจิ้นฮั้ว เราเชื่อว่างานวิวาห์เป็นมากกว่าแค่วันสำคัญวันหนึ่ง แต่คือการถักทอเรื่องราวของสองครอบครัวให้กลายเป็นผืนผ้าแห่งประวัติศาสตร์ผืนเดียวกันที่งดงาม และเป็นบทแรกของตำนานบทใหม่ที่กำลังจะเริ่มต้นขึ้น ตลอดห้าทศวรรษที่ผ่านมา เรารู้สึกเป็นเกียรติอย่างยิ่งที่ได้เป็นผู้มอบเส้นด้ายสำหรับเรื่องราวบทแรกนี้ เราไม่ได้เป็นเพียงผู้ขายของใช้ในงานวิวาห์ แต่เราคือผู้ร่วมยินดีในการเริ่มต้นครั้งใหม่ พร้อมมอบทั้งความรู้ ความหลงใหล และความมุ่งมั่นทุ่มเทอย่างไม่เสื่อมคลาย เพื่อทำให้ทุกการครองคู่นั้นเป็นไปอย่างเป็นมงคลและงดงามที่สุดเท่าที่ควรจะเป็น',
    zh: '在ตั้งจิ้นฮั้ว，我们相信婚礼不仅仅是一天——它是将两个家族的历史编织成一幅美丽挂毯的过程，是新传奇的第一章。五十多年来，我们有幸为这一章提供了丝线。我们不只是销售婚礼用品；我们分享新开始的喜悦，提供我们的知识、热情和坚定不移的承诺，致力于使每一次结合都尽可能吉祥和美丽。'
  },
  about_p5: {
    en: 'Welcome to our family... Welcome to the beginning of your forever.',
    th: 'ยินดีต้อนรับสู่ครอบครัวของเรา... ยินดีต้อนรับสู่จุดเริ่มต้นของคำว่า \'ตลอดไป\' สำหรับคุณ',
    zh: '欢迎来到我们的家庭... 欢迎来到您“永远”的开始。'
  },

  // FAQ Page
  faqTitle: { en: 'Frequently Asked Questions', th: 'คำถามที่พบบ่อย', zh: '常见问题' },
  faqIntro: { en: 'Find answers to common questions about our products, services, and traditional Chinese wedding customs.', th: 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับสินค้า บริการ และธรรมเนียมประเพณีการแต่งงานของจีน', zh: '查找有关我们的产品、服务和中式婚礼习俗的常见问题解答。' },
  
  // SEO Meta Tags
  meta_title_home: { en: 'Tang Chin Hua | Authentic Chinese Wedding Attire in Bangkok', th: 'ตั้งจิ้นฮั้ว | ชุดแต่งงานจีนโบราณแท้ในกรุงเทพฯ', zh: '陳振華 | 曼谷正宗中式婚礼服饰' },
  meta_desc_home: { en: 'Discover authentic, handcrafted Chinese wedding attire in Bangkok. Explore our collections of Qun Kwa, Cheongsam, and traditional accessories.', th: 'ค้นพบชุดแต่งงานจีนโบราณทำมือใจกลางกรุงเทพฯ ชมคอลเลคชั่นฉวินขว้า กี่เพ้า และเครื่องประดับตามประเพณี', zh: '在曼谷探索正宗的手工制作的中式婚纱。浏览我们的裙褂、旗袍和传统配饰系列。' },
  meta_title_shop: { en: 'Shop Traditional Chinese Wedding Attire | Tang Chin Hua, Bangkok', th: 'เลือกซื้อชุดแต่งงานจีนโบราณ | ตั้งจิ้นฮั้ว กรุงเทพฯ', zh: '选购传统中式婚礼服饰 | 陳振華, 曼谷' },
  meta_desc_shop: { en: 'Browse our complete collection of traditional Chinese wedding dresses, groom attire, accessories, and ceremonial items.', th: 'เลือกชมคอลเลคชั่นชุดแต่งงานจีนโบราณ ชุดเจ้าบ่าว เครื่องประดับ และของใช้ในพิธีทั้งหมดของเรา', zh: '浏览我们完整的中式婚纱、新郎礼服、配饰和仪式用品系列。' },
  meta_title_traditions: { en: 'Guide to Chinese Wedding Traditions | Tang Chin Hua, Bangkok', th: 'คู่มือประเพณีแต่งงานจีน | ตั้งจิ้นฮั้ว กรุงเทพฯ', zh: '中式婚礼传统指南 | 陳振華, 曼谷' },
  meta_desc_traditions: { en: 'Learn about the rich customs and rituals of a traditional Chinese wedding, from the tea ceremony to the engagement process.', th: 'เรียนรู้เกี่ยวกับประเพณีและพิธีกรรมอันงดงามของงานแต่งงานจีน ตั้งแต่พิธียกน้ำชาไปจนถึงพิธีหมั้น', zh: '了解传统中式婚礼的丰富习俗和仪式，从茶道到订婚过程。' },
  meta_title_blog: { en: 'Chinese Wedding Blog: Traditions & Insights | Tang Chin Hua, Bangkok', th: 'บล็อกประเพณีแต่งงานจีนและเกร็ดความรู้ | ตั้งจิ้นฮั้ว กรุงเทพฯ', zh: '中式婚礼博客：传统与见解 | 陳振華, 曼谷' },
  meta_desc_blog: { en: 'Read our blog for in-depth articles on the symbolism, history, and artistry behind Chinese wedding attire and traditions.', th: 'อ่านบล็อกของเราสำหรับบทความเจาะลึกเกี่ยวกับสัญลักษณ์ ประวัติศาสตร์ และศิลปะเบื้องหลังชุดและประเพณีแต่งงานจีน', zh: '阅读我们的博客，深入了解中式婚纱和传统背后的象征意义、历史和艺术性。' },
  meta_title_contact: { en: 'Contact Tang Chin Hua | Chinese Wedding Store in Bangkok', th: 'ติดต่อ ตั้งจิ้นฮั้ว | ร้านของแต่งงานจีนในกรุงเทพฯ', zh: '联系陳振華 | 曼谷中式婚礼用品店' },
  meta_desc_contact: { en: 'Visit our store on Yaowarat Road, Bangkok, or contact us for a private consultation on your traditional Chinese wedding needs.', th: 'เยี่ยมชมร้านของเราบนถนนเยาวราช กรุงเทพฯ หรือติดต่อเราเพื่อรับคำปรึกษาส่วนตัวเกี่ยวกับความต้องการในงานแต่งงานจีนของคุณ', zh: '请光临我们位于曼谷耀华力路的商店，或联系我们进行关于您传统中式婚礼需求的私人咨询。' },
  meta_title_cart: { en: 'Your Shopping Cart | Tang Chin Hua', th: 'ตะกร้าสินค้าของคุณ | ตั้งจิ้นฮั้ว', zh: '您的购物车 | 陳振華' },
  meta_desc_cart: { en: 'Review the items in your shopping cart and proceed to checkout for your traditional Chinese wedding attire and accessories.', th: 'ตรวจสอบสินค้าในตะกร้าของคุณและดำเนินการชำระเงินสำหรับชุดแต่งงานและเครื่องประดับจีนโบราณ', zh: '查看您购物车中的商品，并继续结账购买您的传统中式婚纱和配饰。' },
  meta_title_about: { en: 'Our Story: 50+ Years of Chinese Wedding Traditions | Tang Chin Hua', th: 'เรื่องราวของเรา: 50+ ปีแห่งประเพณีแต่งงานจีน | ตั้งจิ้นฮั้ว', zh: '我们的故事：50余年中华婚礼传统 | 陳振華' },
  meta_desc_about: {
    en: "Learn the story of Tang Chin Hua, a family legacy born over 50 years ago in Bangkok's Chinatown, dedicated to preserving the beauty and customs of Chinese wedding traditions.",
    th: "ค้นพบเรื่องราวของตั้งจิ้นฮั้ว มรดกของครอบครัวที่ถือกำเนิดขึ้นเมื่อ 50 กว่าปีก่อนในใจกลางเยาวราช กรุงเทพฯ ที่อุทิศตนเพื่อสืบสานความงดงามและธรรมเนียมประเพณีแต่งงานจีน",
    zh: "了解陳振華的故事，一个五十多年前诞生于曼谷唐人街的家族传奇，致力于传承中华婚礼传统的美丽与习俗。"
  },
  meta_title_checklist: { en: 'Interactive Chinese Wedding Checklist | Tang Chin Hua', th: 'เช็คลิสต์งานแต่งจีนแบบอินเทอร์แอคทีฟ | ตั้งจิ้นฮั้ว', zh: '互动式中式婚礼清单 | 陳振華' },
  meta_title_faq: { en: 'FAQ - Chinese Wedding Questions | Tang Chin Hua', th: 'คำถามที่พบบ่อย - คำถามเกี่ยวกับงานแต่งงานจีน | ตั้งจิ้นฮั้ว', zh: '常见问题 - 中式婚礼问答 | 陳振華' },
  meta_desc_product: { 
    en: 'Discover the {productName}, a beautiful {category} crafted from {material}. Shop now at Tang Chin Hua.', 
    th: 'พบกับ {productName} {category} ที่งดงาม ผลิตจาก {material} เลือกซื้อได้แล้วที่ ตั้งจิ้นฮั้ว', 
    zh: '探索 {productName}，一款由 {material} 精心打造的美丽 {category}。立即在 陳振華 选购。'
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
  getMultilingual: (mlString: MultilingualString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fix: Use an explicit props interface and React.FC for the provider component to ensure proper type checking for children.
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('th');

  const setLanguage = (lang: Language) => {
    if (['en', 'th', 'zh'].includes(lang)) {
        setLanguageState(lang);
    }
  };
  
  const getMultilingual = useCallback((mlString: MultilingualString): string => {
    return mlString[language] || mlString.en;
  }, [language]);

  const t = useCallback((key: string, replacements?: Record<string, string | number>): string => {
    const translationSet = translations[key];
    if (!translationSet) return key;

    let translatedString = getMultilingual(translationSet);
    
    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        translatedString = translatedString.replace(`{${placeholder}}`, String(replacements[placeholder]));
      });
    }
    
    return translatedString;
  }, [getMultilingual]);

  const value = { language, setLanguage, t, getMultilingual };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
