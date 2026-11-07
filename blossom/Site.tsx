import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../services/data';
import type { CartItem, Language, MultilingualString, Product } from '../types';
import { productIllustration } from './product-media';
import { articles, brand, collections, facebook, languages, localePath, messenger, offers, offerSource, pairPrice, promotionOriginal, regularPairPrice, storeAddress, storeMap, storeMapEmbed, text } from './content';

const Locale = createContext<Language>('th');
const useText = () => {
  const lang = useContext(Locale);
  return (value: MultilingualString) => value[lang];
};
const useWords = () => {
  const lang = useContext(Locale);
  return (th: string, en: string, zh: string) => text(th,en,zh)[lang];
};
const money = (value: number) => '฿' + new Intl.NumberFormat('en-US').format(value);
const nav = [
  ['/', text('หน้าแรก','Home','首页')],
  ['/packages', text('ชุดของหมั้นจีน','Ceremony sets','订婚套装')],
  ['/shop', text('เลือกของตามพิธี','Shop by ceremony','按仪式选购')],
  ['/blog', text('คู่มือและเรื่องเล่า','Journal','指南与故事')],
  ['/contact', text('สอบถามสินค้า','Contact','咨询')],
] as const;
const languageNames = {th:'ไทย',en:'EN',zh:'中文'};
const chat = text('ทักแชตสอบถาม','Ask in Messenger','Messenger 咨询');
const view = text('ดูรายละเอียด','View details','查看详情');
const askPrice = text('สอบถามราคาและสินค้าพร้อมส่ง','Ask about price and availability','咨询价格及供货');
const illustration = text('ภาพประกอบบรรยากาศพิธี','Editorial ceremony image','仪式氛围示意图');

export function parsePath(pathname: string) {
  const match = pathname.match(/^\/(en|zh)(?=\/|$)/);
  const lang = (match?.[1] ?? 'th') as Language;
  const path = (match ? pathname.slice(match[0].length) : pathname).replace(/\/$/, '') || '/';
  return {lang,path};
}

const pageNames: Record<string,MultilingualString> = {
  '/':text('ชุดของหมั้นจีนและของใช้ในพิธีแต่งงาน','Chinese engagement and wedding essentials','中式订婚礼品及婚礼用品'),
  '/packages':text('เปรียบเทียบชุดของหมั้นจีนทั้งสองฝ่าย','Compare Chinese engagement sets','比较中式订婚礼套装'),
  '/packages/groom':text('ชุดของหมั้นจีนฝ่ายเจ้าบ่าว','Groom’s Chinese engagement set','男方中式订婚礼套装'),
  '/packages/bride':text('ชุดของหมั้นจีนฝ่ายเจ้าสาว','Bride’s Chinese engagement set','女方中式订婚礼套装'),
  '/shop':text('เลือกของตามพิธี','Shop by ceremony','按仪式选购'),
  '/traditions':text('เตรียมงานตามพิธีของครอบครัว','Plan by ceremony','按家庭习俗筹备仪式'),
  '/blog':text('คู่มือและเรื่องเล่า','Wedding journal and guides','婚礼指南与故事'),
  '/about':text('เรื่องราวของ Tang Chin Hua','About Tang Chin Hua','关于 Tang Chin Hua'),
  '/faq':text('คำถามก่อนสั่งชุด','Ordering questions','订购常见问题'),
  '/contact':text('สอบถามสินค้า','Enquire about a set','套装咨询'),
  '/cart':text('รายการที่บันทึกไว้','Saved items','已保存商品'),
};
const pageDescriptions: Record<string, MultilingualString> = {
  '/': text('ชุดของหมั้นจีน ตั้งจิ้นฮั้ว กรุงเทพฯ เปรียบเทียบชุดฝ่ายเจ้าบ่าวและเจ้าสาว ดูรายการของในแต่ละชุด แล้วสอบถามราคาและการจัดส่งผ่าน Messenger',
    'Compare groom’s and bride’s Chinese engagement sets at Tang Chin Hua, Bangkok. See what each set includes and ask about pricing and delivery in Messenger.',
    '曼谷 Tang Chin Hua 中式订婚礼品。比较男方和女方套装、查看各套清单，并通过 Messenger 咨询价格和配送。'),
  '/packages': text('เปรียบเทียบชุดของหมั้นจีนฝ่ายเจ้าบ่าวและเจ้าสาว ดูราคาและรายการของในแต่ละชุดจากโพสต์ของตั้งจิ้นฮั้ว แล้วสอบถามการจัดส่งผ่าน Messenger',
    'Compare the published prices and contents of both Chinese engagement sets. Ask Tang Chin Hua about current prices and delivery in Messenger.',
    '比较男女双方中式订婚礼套装的原帖价格与清单，并通过 Messenger 咨询现价和配送。'),
  '/packages/groom': text('ชุดของหมั้นจีนฝ่ายเจ้าบ่าว มีส้มเช้งติดซังฮี้ 48 ลูก และขนมจันอับ 4 กิโลกรัม ดูราคาตามโพสต์และสอบถามการจัดส่งกับตั้งจิ้นฮั้ว',
    'See the groom’s set from Tang Chin Hua with 48 Double Happiness oranges and 4 kg of traditional sweets. Check the published price and ask about delivery.',
    '查看 Tang Chin Hua 男方订婚礼套装，含贴双喜字的橙子48个及传统糖果4公斤。可查询原帖价格并咨询配送。'),
  '/packages/bride': text('ชุดของหมั้นจีนฝ่ายเจ้าสาว มีส้มเช้งติดซังฮี้ ขนมจันอับ กล้วย และของใช้ในพิธี ดูรายการครบชุดและสอบถามราคากับตั้งจิ้นฮั้ว',
    'See the bride’s set from Tang Chin Hua with Double Happiness oranges, traditional sweets, bananas and ceremony accessories. Check the full list and enquire.',
    '查看 Tang Chin Hua 女方订婚礼套装，含双喜橙子、传统糖果、香蕉及仪式用品。可查阅完整清单并咨询。'),
  '/shop': text('เลือกของหมั้นจีน อุปกรณ์ยกน้ำชา และของใช้แต่งงานตามพิธีของคุณ', 'Find Chinese engagement gifts, tea ceremony objects and wedding accessories by ceremony.', '按仪式查找订婚礼品、敬茶用品和婚礼配件。'),
  '/blog': text('อ่านเช็กลิสต์และเคล็ดลับสั้น ๆ สำหรับเตรียมของหมั้นและพิธีแต่งงานจีน', 'Short guides and checklists for Chinese engagement gifts and wedding ceremonies.', '阅读中式订婚礼品与婚礼仪式的简短指南和清单。'),
  '/contact': text('เตรียมข้อความและสอบถามชุดที่สนใจ ราคา และการจัดส่งผ่าน Inbox ของ Tang Chin Hua', 'Prepare a message for Tang Chin Hua and ask about ceremony sets, prices and delivery in Messenger.', '准备留言，通过 Messenger 向 Tang Chin Hua 咨询套装、价格和配送。'),
  '/traditions': text('เลือกแนวทางเตรียมพิธีหมั้น ยกน้ำชา และแต่งงานตามธรรมเนียมของครอบครัว', 'Plan your engagement, tea and wedding ceremonies around your family’s customs.', '按照家庭习俗筹备订婚、敬茶和婚礼仪式。'),
  '/about': text('รู้จัก Tang Chin Hua และแนวทางเลือกชุดของหมั้นจีนสำหรับทั้งสองครอบครัว', 'Meet Tang Chin Hua and learn how to choose engagement essentials for both families.', '了解 Tang Chin Hua 如何帮助两家挑选订婚礼品。'),
  '/faq': text('คำตอบเรื่องเลือกชุด สอบถามราคา และเตรียมข้อมูลสำหรับจัดส่ง', 'Answers about selecting a set, confirming prices and arranging delivery.', '了解选购套装、确认价格及安排配送的常见问题。'),
};
export function pageInfo(path: string, lang: Language) {
  const id = path.split('/')[2];
  const entry = path.startsWith('/packages/') ? offers.find(x=>x.id===id)
    : path.startsWith('/shop/') ? collections.find(x=>x.id===id)
    : path.startsWith('/product/') ? products.find(x=>x.id===id)
    : undefined;
  const story = path.startsWith('/blog/') ? articles.find(x=>x.slug===id) : undefined;
  const label = pageNames[path] ?? entry?.name ?? story?.title ?? text('ไม่พบหน้านี้','Page not found','未找到页面');
  const general = text('เลือกชุดของหมั้นจีนและอุปกรณ์ตามพิธี อ่านรายการในชุด แล้วสอบถามรายละเอียดและการจัดส่งกับ Tang Chin Hua', 'Browse Chinese ceremony sets, see what is included, and ask Tang Chin Hua about availability and delivery.', '浏览中式礼仪套装与用品、查看清单，并向 Tang Chin Hua 咨询供货和配送。');
  const description = pageDescriptions[path] ?? (entry && 'intro' in entry ? entry.intro : story?.intro ?? (entry && 'description' in entry ? entry.description : general));
  const image = path === '/packages' || path.startsWith('/packages/') ? promotionOriginal
    : path.startsWith('/product/') ? productIllustration(id)?.detail
    : story ? '/media/'+story.image+'-960.webp' : undefined;
  return {title:label[lang]+' | '+brand, description:description[lang], label:label[lang], image};
}

function A({to, children, className, onClick, current}: {to:string; children:ReactNode; className?:string; onClick?:()=>void; current?:boolean}) {
  const lang = useContext(Locale);
  return <Link to={localePath(lang,to)} className={className} onClick={onClick} aria-current={current ? 'page' : undefined}>{children}</Link>;
}
function ChatIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-3.7-.8L4 20l.8-4.2A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function ChatButton({className='',label,onClick}:{className?:string;label?:string;onClick?:()=>void}) {
  const t=useText();
  return <a className={'button '+className} href={messenger} target="_blank" rel="noopener noreferrer" onClick={onClick}><ChatIcon/>{label??t(chat)}</a>;
}
function Knot() {
  return <span className="knot" aria-hidden="true"><svg viewBox="0 0 36 36" width="29" height="29" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 8 10 10-10 10L8 18Z M18 8c-7-10 7-10 0 0m10 10c10-7 10 7 0 0m-10 10c7 10-7 10 0 0M8 18c-10 7-10-7 0 0m10-5 5 5-5 5-5-5Z"/></svg></span>;
}

const imageSizes: Record<string,number[]> = {hero:[640,960,1440],engagement:[480,960],tea:[480,960],wedding:[480,960],story:[480,960]};
const imageAlt: Record<string,MultilingualString> = {
  hero:text('ถาดแดง ชุดน้ำชา และส้มบนโต๊ะพิธี','Red lacquer tray, tea service and oranges on a ceremony table','仪式桌上的红漆托盘、茶具与橙子'),
  engagement:text('ตะกร้าและกล่องของหมั้นสีแดง','Red betrothal basket and gift box','红色聘礼篮与礼盒'),
  tea:text('ถ้วยน้ำชาลายดอกสีแดงบนถาด','Floral porcelain tea cups on a red tray','红盘上的花纹瓷茶杯'),
  wedding:text('ผ้าพิธีสีแดงปักลายมงคล','Red embroidered ceremonial textile','带吉祥刺绣的红色礼仪织物'),
  story:text('มือกำลังผูกริบบิ้นกับกล่องของขวัญ','Hands tying a ribbon on a gift box','双手为礼盒系丝带'),
};
function Photo({id, eager=false, sizes='(max-width: 640px) 92vw, (max-width: 960px) 47vw, 450px'}:{id:string;eager?:boolean;sizes?:string}) {
  const t=useText();
  const widths = imageSizes[id];
  return <img src={'/media/'+id+'-'+widths[0]+'.webp'} srcSet={widths.map(w=>'/media/'+id+'-'+w+'.webp '+w+'w').join(', ')} sizes={sizes} alt={t(imageAlt[id])} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':undefined} decoding="async" width={960} height={id==='hero'?640:720}/>;
}
function Frame({id, kind='', caption=false, eager=false}:{id:string;kind?:string;caption?:boolean;eager?:boolean}) {
  const t=useText();
  return <figure className={'frame '+kind}><Photo id={id} eager={eager} sizes={kind.includes('full')?'(max-width: 680px) 92vw, 650px':undefined}/>{caption&&<figcaption>{t(illustration)}</figcaption>}</figure>;
}
function PromotionArtwork({eager=false}:{eager?:boolean}) {
  const w=useWords();
  return <figure className="promotion-artwork">
    <a href={promotionOriginal} target="_blank" rel="noopener noreferrer" aria-label={w('เปิดภาพโปรโมชันขนาดเต็ม','Open the full-size promotion image','打开原尺寸优惠图')}>
      <img src={promotionOriginal} srcSet={'/media/engagement-promotion-480.webp 480w, /media/engagement-promotion-800.webp 800w, '+promotionOriginal+' 1254w'}
        sizes="(max-width: 680px) 90vw, 610px" width="1254" height="1254" loading={eager?'eager':'lazy'}
        fetchPriority={eager?'high':undefined} decoding="async"
        alt={w('ภาพโปรโมชันครบทั้ง 2 ฝ่าย ชุดเจ้าบ่าว 5,900 บาท ชุดเจ้าสาว 11,900 บาท ซื้อคู่ 17,400 บาท ประหยัด 400 บาท',
          'Engagement promotion. Groom’s set ฿5,900, bride’s set ฿11,900, both for ฿17,400, saving ฿400.',
          '订婚套装优惠。男方套装 5,900 泰铢，女方套装 11,900 泰铢，双套 17,400 泰铢，立省 400 泰铢。')}/>
    </a>
  </figure>;
}

function PackagePromotion({home=false}:{home?:boolean}) {
  const w=useWords();
  const PromotionTitle=home ? 'h2' : 'h1';
  return <section className="promotion" aria-labelledby="promotion-title">
    <div className="promotion-copy">
      <p className="eyebrow">{w('โปรโมชันชุดของหมั้นจีน','CHINESE ENGAGEMENT OFFER','中式订婚礼套装优惠')}</p>
      <PromotionTitle id="promotion-title" className="promotion-title">{w('ชุดของหมั้นจีนครบทั้ง 2 ฝ่าย','Engagement sets for both families','中式订婚双方礼套装')}</PromotionTitle>
    </div>
    <div className="promotion-stage"><PromotionArtwork eager={!home}/></div>
    <div className="promotion-copy">
      <p className="promotion-price">{w('ราคาพิเศษเมื่อซื้อคู่','Special price for both sets','双套优惠价')} <strong>{money(pairPrice)}</strong> <del>{money(regularPairPrice)}</del></p>
      <div className="actions">
        <A className="button" to="/contact?set=both"><ChatIcon/>{w('สอบถามทั้งสองชุด','Enquire about both sets','咨询两套')}</A>
        {home&&<A className="button outline" to="/packages">{w('ดูรายการในแต่ละชุด','See what’s included','查看套装清单')}</A>}
      </div>
      <SourceNote/>
    </div>
  </section>;
}
function Header({path}:{path:string}) {
  const w=useWords();
  const lang=useContext(Locale);
  const {search}=useLocation();
  const [activeSearch,setActiveSearch]=useState('');
  useEffect(()=>setActiveSearch(search),[search]);
  const [open,setOpen]=useState(false);
  const toggle=useRef<HTMLButtonElement>(null);
  useEffect(()=>setOpen(false),[path,lang]);
  return <header className="header" onKeyDown={e=>{if(e.key==='Escape'&&open){setOpen(false);toggle.current?.focus();}}}>
    <div className="masthead">
      <A to="/" className="brand"><img src="/media/emblem-160.webp" width="68" height="68" alt=""/><span>{brand}</span></A>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={()=>setOpen(!open)}><span aria-hidden="true">☰</span><span className="sr">{w('เมนูหลัก','Main menu','主菜单')}</span></button>
      <nav id="site-nav" className={open?'nav is-open':'nav'} aria-label={w('เมนูหลัก','Main navigation','主导航')}>
        {nav.map(([to,label])=><A key={to} to={to} current={to==='/'?path==='/':path===to||path.startsWith(to+'/')} onClick={()=>setOpen(false)}>{label[lang]}</A>)}
        <div className="locale" aria-label={w('ภาษา','Language','语言')}>{languages.map(item=><Link key={item} to={localePath(item,path)+activeSearch} lang={item} aria-current={item===lang?'true':undefined}>{languageNames[item]}</Link>)}</div>
        <ChatButton className="menu-chat" onClick={()=>setOpen(false)}/>
      </nav>
    </div>
  </header>;
}
function Footer() {
  const w=useWords();
  return <footer className="footer"><div className="wrap footer-inner">
    <div><A to="/" className="brand"><img src="/media/emblem-160.webp" width="54" height="54" alt=""/><span>{brand}</span></A><p>{w('ชุดของหมั้นและของใช้ในพิธีแต่งงานจีน','Chinese engagement and wedding ceremony essentials','中式订婚礼品和婚礼用品')}</p></div>
    <div><A to="/about">{w('เรื่องราวของร้าน','Our story','关于我们')}</A><A to="/traditions">{w('ลำดับการเตรียมงาน','Ceremony planner','仪式筹备')}</A><A to="/faq">{w('คำถามที่พบบ่อย','Frequently asked questions','常见问题')}</A></div>
    <div><A to="/contact">{w('สอบถามและสั่งชุด','Enquiries and ordering','咨询与订购')}</A><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a><A to="/cart">{w('รายการที่บันทึกไว้','Saved items','已保存商品')}</A></div>
  </div></footer>;
}
function Banner({tag,title,description,image}:{tag:string;title:string;description:string;image?:string}) {
  return <section className={'banner '+(image?'with-photo':'')}>
    <div className="wrap banner-inner"><div><p className="eyebrow">{tag}</p><h1>{title}</h1><p className="lead">{description}</p><Knot/></div>{image&&<Frame id={image} eager/>}</div>
  </section>;
}
function Heading({tag,title,extra}:{tag:string;title:string;extra?:ReactNode}) {
  return <div className="section-head"><div><p className="eyebrow">{tag}</p><h2>{title}</h2></div>{extra}</div>;
}
function CollectionCard({collection}:{collection:typeof collections[number]}) {
  const t=useText();
  return <A className="card collection-card" to={'/shop/'+collection.id}><Frame id={collection.image}/><div className="card-body"><h3>{t(collection.name)}</h3><p>{t(collection.intro)}</p></div></A>;
}
function OfferCard({offer}:{offer:typeof offers[number]}) {
  const t=useText();
  const w=useWords();
  return <article className="card offer-card"><div className="card-body"><p className="eyebrow">{w('ชุดจาก Facebook','Facebook offer','Facebook 套装')}</p><h3>{t(offer.name)}</h3><p>{t(offer.summary)}</p><p className="price">{money(offer.price)}</p><A className="button outline" to={'/packages/'+offer.id}>{t(view)}</A></div></article>;
}
function ArticleCard({article}:{article:typeof articles[number]}) {
  const t=useText();
  const w=useWords();
  return <A className="card article-card" to={'/blog/'+article.slug}><Frame id={article.image}/><div className="card-body"><p className="eyebrow">{t(article.category)} · {article.time} {w('นาที','min','分钟')}</p><h3>{t(article.title)}</h3><p>{t(article.intro)}</p></div></A>;
}
function Home() {
  const w=useWords();
  return <>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{w('ของหมั้นและของใช้แต่งงานจีน','Chinese wedding essentials','中式婚礼用品')}</p>
        <h1 className="hero-title">{w('ชุดของหมั้นจีน','Chinese engagement sets','中式订婚礼套装')}</h1>
        <p className="hero-lead">{w('ชุดพิธีครบชุด\nสำหรับงานหมั้นและงานแต่ง','Ceremony essentials for your engagement and wedding','为订婚与婚礼准备全套仪式用品')}</p>
        <Knot/><div className="actions"><A to="/packages" className="button">{w('ดูชุดทั้งหมด','View the sets','查看全部套装')}</A></div>
      </div>
      <div className="hero-photo"><Photo id="hero" eager sizes="(max-width: 680px) 100vw, 58vw"/></div>
    </section>
    <PackagePromotion home/>
    <section className="wrap section"><Heading tag="01 / COLLECTIONS" title={w('เลือกของตามพิธี','Find your ceremony essentials','按仪式挑选用品')}/><div className="grid three">{collections.map(c=><CollectionCard key={c.id} collection={c}/>)}</div></section>
    <section className="wrap section"><Heading tag="02 / JOURNAL" title={w('อ่านก่อนเริ่มเตรียมงาน','Read before you plan','筹备前阅读')} extra={<A to="/blog" className="text-link">{w('อ่านทั้งหมด','All guides','全部指南')}</A>}/><div className="grid two">{articles.slice(0,2).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></section>
  </>;
}
function SourceNote() {
  const w=useWords();
  return <p className="fine">{w('ราคาตามโพสต์ของร้าน กรุณายืนยันราคาและรอบจัดส่งก่อนสั่ง','Prices are from the shop’s post. Confirm the price and delivery date before ordering.','价格来自商家原帖。订购前请确认价格和配送日期。')} <a href={offerSource} target="_blank" rel="noopener noreferrer">{w('ดูโพสต์ต้นฉบับ','See the original post','查看原帖')}</a></p>;
}
function PackageComparison() {
  const w=useWords();
  const lang=useContext(Locale);
  return <section className="contents package-comparison" aria-labelledby="package-comparison-title">
    <h2 id="package-comparison-title">{w('ชุดฝ่ายเจ้าบ่าวและเจ้าสาวต่างกันอย่างไร','How do the two sets compare?','两款套装有什么区别？')}</h2>
    <p>{w('ทั้งสองชุดมีส้มเช้งติดซังฮี้ 48 ลูกและขนมจันอับ 4 กิโลกรัม ชุดฝ่ายเจ้าสาวเพิ่มผลไม้และของใช้ในพิธี',
      'Both sets include 48 Double Happiness oranges and 4 kg of traditional sweets. The bride’s set adds fruit and ceremony items.',
      '两款套装均含48个双喜橙和4公斤传统糖果。女方套装另含水果和仪式用品。')}</p>
    <table aria-labelledby="package-comparison-title">
      <thead><tr><th scope="col">{w('รายการเปรียบเทียบ','Compare','对比项目')}</th>
        {offers.map(o=><th key={o.id} scope="col">{o.name[lang]}</th>)}
      </tr></thead>
      <tbody>
        <tr><th scope="row">{w('ราคาตามโพสต์','Published price','原帖价格')}</th>
          {offers.map(o=><td key={o.id}><strong>{money(o.price)}</strong></td>)}
        </tr>
        <tr><th scope="row">{w('ของในชุด','What’s included','套装内容')}</th>
          {offers.map(o=><td key={o.id}><p>{o.summary[lang]}</p><A className="text-link" to={'/packages/'+o.id}>{w('ดูรายการทั้งหมด','View full list','查看完整清单')}</A></td>)}
        </tr>
      </tbody>
    </table>
    <p>{w('สอบถามราคาและการจัดส่งผ่าน Messenger โดยแจ้งชุดที่สนใจ วันงาน และจังหวัดหรือพื้นที่จัดส่ง',
      'Ask about current prices and delivery in Messenger. Tell us which set you want, your event date and your delivery area.',
      '请通过 Messenger 咨询现价和配送，并告知意向套装、仪式日期和配送地区。')}</p>
  </section>;
}
function PackageIndex() {
  const w=useWords();
  const lang=useContext(Locale);
  const [selection,setSelection]=useState('both');
  const chosen = offers.filter(o=>selection==='both'||o.id===selection);
  return <><PackagePromotion/>
    <div className="wrap package-comparison-wrap"><PackageComparison/></div>
    <section className="wrap section">
      <Heading tag="01 / COMPARE" title={w('เลือกชุดที่ต้องการ','Choose your set','选择需要的套装')}/>
      <div className="pills" aria-label={w('เลือกฝ่าย','Select a set','选择一方')}>{[['both',w('ทั้งสองฝ่าย','Both families','双方')],...offers.map(o=>[o.id,o.name[lang]])].map(([id,label])=><button key={id} type="button" aria-pressed={selection===id} onClick={()=>setSelection(id)}>{label}</button>)}</div>
      <div className="grid two">{chosen.map(o=><OfferCard key={o.id} offer={o}/>)}</div>
    </section>
  </>;
}
function OfferPage({offer}:{offer:typeof offers[number]}) {
  const w=useWords();
  const lang=useContext(Locale);
  return <section className="wrap section">
    <A className="text-link back" to="/packages">{w('กลับไปดูชุดทั้งหมด','Back to all sets','返回全部套装')}</A>
    <div className="detail"><PromotionArtwork eager/><div>
      <p className="eyebrow">{w('ชุดของหมั้นจีน','CHINESE ENGAGEMENT SET','中式订婚礼套装')}</p>
      <h1>{pageNames['/packages/'+offer.id][lang]}</h1><p className="lead">{offer.summary[lang]}</p><p className="price">{money(offer.price)}</p>
      <div className="contents"><h2>{w('ในชุดประกอบด้วย','What’s included','套装包括')}</h2><ul>{offer.items.map(item=><li key={item.th}>{item[lang]}</li>)}</ul></div>
      <A to={'/contact?set='+offer.id} className="button"><ChatIcon/>{w('เตรียมข้อความสอบถาม','Prepare an enquiry','准备咨询留言')}</A><SourceNote/>
    </div></div>
  </section>;
}
function ProductPhoto({product, categoryImage, detail=false}:{product:Product;categoryImage:string;detail?:boolean}) {
  const w=useWords();
  const lang=useContext(Locale);
  const media=productIllustration(product.id);
  if(!media)return <Frame id={categoryImage} kind={detail?'full':''} caption={detail} eager={detail}/>;
  return <figure className="frame product-photo">
    <img src={media.thumbnail} srcSet={media.thumbnail+' 480w, '+media.detail+' 960w'}
      sizes={detail?'(max-width: 680px) 92vw, (max-width: 1280px) 48vw, 620px':'(max-width: 490px) 92vw, (max-width: 800px) 46vw, 395px'}
      width="960" height="720" alt={w('ภาพจำลอง ','Illustration of ','示意图：')+product.name[lang]}
      loading={detail?'eager':'lazy'} fetchPriority={detail?'high':undefined} decoding="async"/>
    <figcaption>{detail
      ?w('ภาพประกอบสินค้า สินค้าจริงอาจต่างจากภาพ','Product illustration. The actual product may differ.','商品示意图，实物可能与图示不同。')
      :w('ภาพประกอบสินค้า','Product illustration','商品示意图')}</figcaption>
  </figure>;
}
function ProductCard({product}:{product:Product}) {
  const lang=useContext(Locale);
  const collection=collections.find(c=>c.groups.some(g=>product.id.startsWith(g+'-'))) ?? collections[0];
  return <A className="card" to={'/product/'+product.id}><ProductPhoto product={product} categoryImage={collection.image}/><div className="card-body"><p className="eyebrow">{product.category[lang]}</p><h3>{product.name[lang]}</h3><p>{askPrice[lang]}</p></div></A>;
}
function Shop({initial}:{initial?:typeof collections[number]}) {
  const w=useWords();
  const lang=useContext(Locale);
  const [query,setQuery]=useState('');
  const normalized=query.trim().toLocaleLowerCase();
  const matching=products.filter(p=>(!initial||initial.groups.some(g=>p.id.startsWith(g+'-')))&&[p.name[lang],p.name.th,p.name.en,p.id].some(value=>value.toLocaleLowerCase().includes(normalized)));
  return <><Banner tag="THE CEREMONY EDIT" title={initial?.name[lang]??w('เลือกของตามพิธี','Shop by ceremony','按仪式选购')} description={initial?.intro[lang]??w('เริ่มจากพิธีที่บ้านคุณจัด แล้วเลือกดูของที่ต้องใช้','Start with your ceremony and see the items you may need.','从家中准备举行的仪式开始，查看可能需要的用品。')} image={initial?.image??'tea'}/>
    <section className="wrap section"><div className="pills route-pills"><A to="/shop" current={!initial}>{w('ทั้งหมด','All items','全部')}</A>{collections.map(c=><A key={c.id} to={'/shop/'+c.id} current={initial?.id===c.id}>{c.name[lang]}</A>)}</div>
      <label className="field search"><span>{w('ค้นหาสินค้า','Find an item','搜索商品')}</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={w('พิมพ์ชื่อสินค้า','Enter an item name','输入商品名')}/></label>
      <p className="fine" aria-live="polite">{matching.length} {w('รายการ','items','项')}</p>
      {matching.length?<div className="grid three">{matching.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<p className="empty">{w('ไม่พบสินค้าที่ตรงกับคำค้น','No items match your search.','没有符合搜索条件的商品。')}</p>}
    </section>
  </>;
}
function ProductPage({product}:{product:Product}) {
  const t=useText();
  const w=useWords();
  const lang=useContext(Locale);
  const collection=collections.find(c=>c.groups.some(g=>product.id.startsWith(g+'-')))??collections[0];
  const sizes=product.sizes.filter(s=>s.toLowerCase()!=='one size');
  const [size,setSize]=useState('');
  const params=new URLSearchParams({item:product.id});
  if(size)params.set('size',size);
  const photoParams=new URLSearchParams(params);
  photoParams.set('photo','1');
  return <section className="wrap section">
    <A className="text-link back" to={'/shop/'+collection.id}>{collection.name[lang]}</A>
    <div className="detail"><ProductPhoto product={product} categoryImage={collection.image} detail/><div>
      <p className="eyebrow">{product.category[lang]}</p><h1>{product.name[lang]}</h1>
      <p className="lead">{product.description[lang].split(/(?<=[.!?。])\s*/)[0]}</p>
      <dl className="specs"><div><dt>{w('วัสดุ','Material','材质')}</dt><dd>{product.specifications.material[lang]}</dd></div><div><dt>{w('สี','Colour','颜色')}</dt><dd>{product.specifications.color[lang]}</dd></div></dl>
      {sizes.length>0&&<label className="field"><span>{w('ขนาดที่อยากสอบถาม','Size to ask about','意向尺码')}</span><select value={size} onChange={e=>setSize(e.target.value)}><option value="">{w('ยังไม่ระบุ','Not selected','未选择')}</option>{sizes.map(s=><option key={s}>{s}</option>)}</select></label>}
      <p className="fine">{t(askPrice)}</p>
      <div className="actions"><A className="button" to={'/contact?'+params.toString()}><ChatIcon/>{w('เตรียมข้อความสอบถาม','Prepare an enquiry','准备咨询留言')}</A>{!product.id.startsWith('service-')&&<A className="button outline" to={'/contact?'+photoParams.toString()}>{w('ขอรูปสินค้าจริง','Request a product photo','索取商品实拍')}</A>}</div>
    </div></div>
  </section>;
}
function Journal() {
  const w=useWords();
  const lang=useContext(Locale);
  const [filter,setFilter]=useState('');
  const tags=[...new Set(articles.map(a=>a.category[lang]))];
  return <><Banner tag="THE BLOSSOM JOURNAL" title={w('คู่มือและเรื่องเล่า','Wedding journal and guides','婚礼指南与故事')} description={w('บทอ่านสั้น ๆ สำหรับเลือกของ จัดโต๊ะ และคุยกับผู้ใหญ่ก่อนวันงาน','Short reads on choosing essentials, setting the table and planning with family.','帮助你挑选用品、布置桌面及与家人沟通的短篇指南。')} image="story"/>
    <section className="wrap section"><div className="pills" aria-label={w('หมวดบทความ','Article topics','文章主题')}>
      <button type="button" aria-pressed={!filter} onClick={()=>setFilter('')}>{w('ทั้งหมด','All articles','全部文章')}</button>
      {tags.map(tag=><button key={tag} type="button" aria-pressed={filter===tag} onClick={()=>setFilter(tag)}>{tag}</button>)}
    </div><div className="grid two">{articles.filter(a=>!filter||a.category[lang]===filter).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></section>
  </>;
}
function ArticlePage({article}:{article:typeof articles[number]}) {
  const w=useWords();
  const lang=useContext(Locale);
  return <><Banner tag={article.category[lang]} title={article.title[lang]} description={article.intro[lang]} image={article.image}/>
    <article className="wrap section article-body"><A to="/blog" className="text-link">{w('กลับไปดูบทความทั้งหมด','All guides','全部指南')}</A>
      {article.sections.map(([head,body],i)=><section key={head.th}><span className="folio">{String(i+1).padStart(2,'0')}</span><div><h2>{head[lang]}</h2><p>{body[lang]}</p></div></section>)}
      <A to={article.related} className="button">{w('ดูสิ่งที่เกี่ยวข้อง','Explore related items','查看相关内容')}</A>
    </article>
  </>;
}
function Traditions() {
  const w=useWords();
  const guideLinks=['engagement-checklist','tea-table','double-happiness'];
  const lang=useContext(Locale);
  return <><Banner tag="THE CEREMONY PLANNER" title={w('เตรียมงานตามพิธีของครอบครัว','Plan by ceremony','按家庭习俗筹备仪式')} description={w('ใช้เป็นจุดเริ่มต้นในการคุยกับผู้ใหญ่ เพราะแต่ละบ้านจัดพิธีต่างกันได้','Use these starting points to talk with family about the way you plan to celebrate.','用这些指南与家人讨论，确定适合自家的仪式方式。')} image="wedding"/>
    <section className="wrap section"><div className="grid three">{collections.map((c,i)=><article className="card" key={c.id}><Frame id={c.image}/><div className="card-body"><p className="eyebrow">0{i+1} / CEREMONY</p><h2>{c.name[lang]}</h2><p>{c.intro[lang]}</p><A to={'/blog/'+guideLinks[i]} className="text-link">{w('อ่านคู่มือ','Read the guide','阅读指南')}</A></div></article>)}</div></section>
  </>;
}
const questions = [
  [text('เลือกเฉพาะชุดฝ่ายใดฝ่ายหนึ่งได้ไหม','Can I choose one family’s set?','可以只选一方套装吗？'),text('ได้ โพสต์ของร้านระบุชุดฝ่ายเจ้าบ่าวและชุดฝ่ายเจ้าสาวแยกกัน และมีราคาสำหรับซื้อทั้งสองชุดพร้อมกัน','Yes. The shop’s post lists both sets separately and shows a price for purchasing them together.','可以。商家原帖分别列出两方套装，也有一起购买的价格。')],
  [text('ควรแจ้งอะไรเพื่อสอบถามการจัดส่ง','What should I share when asking about delivery?','咨询配送需要提供什么？'),text('แจ้งชุดที่สนใจ วันงาน วันที่สะดวกรับ และจังหวัดปลายทาง เพื่อให้ร้านยืนยันรอบส่งและค่าใช้จ่าย','Share the set, event date, preferred receiving date and destination province so the shop can confirm timing and cost.','提供意向套装、仪式日、希望收货日及目的地府县，由商家确认配送时间和费用。')],
  [text('ถ้าธรรมเนียมที่บ้านต่างจากรายการในชุดล่ะ','What if my family follows a different custom?','如果家中的习俗与套装不同怎么办？'),text('แนะนำให้เทียบรายการกับผู้ใหญ่ทั้งสองฝ่าย แล้วส่งรายการที่ต้องการให้ร้านช่วยตรวจและแจ้งทางเลือกก่อนสั่ง','Check the list with both families and send your requirements to the shop to discuss available options.','先与双方长辈核对清单，再将需求发给商家，确认可选方案后订购。')],
  [text('จะยืนยันราคาและสั่งซื้ออย่างไร','How do I confirm pricing and order?','如何确认价格及订购？'),text('ทัก Inbox ของร้านเพื่อยืนยันรายการ ราคาปัจจุบัน การชำระเงิน และการจัดส่ง','Use the shop’s Facebook Inbox to confirm contents, current price, payment and delivery.','通过商家的 Facebook Inbox 确认清单、现价、付款及配送。')],
];
function Faq() {
  const w=useWords();
  const lang=useContext(Locale);
  return <><Banner tag="BEFORE YOU ORDER" title={w('คำถามก่อนสั่งชุด','Ordering questions','订购常见问题')} description={w('เลือกชุดให้ตรงกับพิธี แล้วคุยรายละเอียดกับร้านก่อนยืนยัน','Choose a set for your ceremony and confirm the details with the shop.','选择适合仪式的套装，并与商家确认细节。')} image="tea"/>
    <section className="wrap section faq">{questions.map(([q,a])=><details className="disclosure" key={q.th}><summary>{q[lang]}</summary><p>{a[lang]}</p></details>)}<ChatButton/></section>
  </>;
}
function About() {
  const w=useWords();
  return <><Banner tag="THE TANG CHIN HUA STORY" title={w('เรื่องราวของ Tang Chin Hua','About Tang Chin Hua','关于 Tang Chin Hua')} description={w('ของใช้ในพิธีที่ดูง่ายขึ้น เพื่อให้สองครอบครัวมีเวลาคุยกันเรื่องสำคัญ','A clearer way to prepare ceremony essentials, so families have more time for the decisions that matter.','让礼仪用品更易选择，把时间留给两家真正重要的商量。')} image="story"/>
    <section className="wrap section story-band"><Frame id="engagement" caption/><div><p className="eyebrow">A SHARED TABLE</p><h2>{w('เริ่มจากรายการที่ทุกคนเข้าใจตรงกัน','Start with a list both families understand','从双方都明白的清单开始')}</h2><p>{w('เราแยกรายการของฝ่ายเจ้าบ่าวและเจ้าสาวให้เห็นชัด ชวนให้คุณคุยกับคนในบ้านก่อนเลือก แล้วจึงสอบถามร้านเรื่องของที่จะได้รับและเวลาจัดส่ง','We show the groom’s and bride’s lists separately so you can talk with family first, then confirm the contents and timing with the shop.','我们将男女双方的清单分开列出，方便先与家人讨论，再向商家确认套装内容及配送时间。')}</p><A to="/packages" className="button">{w('ดูสองชุดของหมั้น','See both engagement sets','查看双方订婚套装')}</A></div></section>
  </>;
}
function StoreLocation() {
  const w=useWords();
  const t=useText();
  const [showMap,setShowMap]=useState(false);
  return <section className="wrap section">
    <div className="contents store-location">
      <div className="store-location-row">
        <div>
          <p className="eyebrow">02 / VISIT THE SHOP</p>
          <h2>{w('แผนที่ร้านตั้งจิ้นฮั้ว','Visit Tang Chin Hua','前往 Tang Chin Hua')}</h2>
          <address>{t(storeAddress)}</address>
          <p className="fine">{w('ทักแชตสอบถามเวลาเปิดร้านก่อนเดินทาง','Message the shop to confirm opening hours before visiting.','前往前请留言确认营业时间。')}</p>
        </div>
        <div className="actions">
          <a className="button" href={storeMap} target="_blank" rel="noopener noreferrer">{w('เปิดใน Google Maps','Open in Google Maps','在 Google 地图中打开')}</a>
          <button type="button" className="button outline" aria-expanded={showMap} aria-controls="store-map" onClick={()=>setShowMap(!showMap)}>
            {showMap?w('ซ่อนแผนที่','Hide map','隐藏地图'):w('ดูแผนที่','Show map','显示地图')}
          </button>
        </div>
      </div>
      <div id="store-map" hidden={!showMap}>{showMap&&<iframe src={storeMapEmbed} title={w('แผนที่ร้านตั้งจิ้นฮั้ว','Tang Chin Hua shop map','Tang Chin Hua 商家地图')} width="900" height="320" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>}</div>
    </div>
  </section>;
}
function Contact() {
  const w=useWords();
  const lang=useContext(Locale);
  const {search}=useLocation();
  const [selected,setSelected]=useState('');
  const [activeSearch,setActiveSearch]=useState('');
  const [date,setDate]=useState('');
  const [area,setArea]=useState('');
  const [copyStatus,setCopyStatus]=useState<'idle'|'copied'|'manual'>('idle');
  const summaryField=useRef<HTMLTextAreaElement>(null);
  const params=new URLSearchParams(activeSearch);
  const item=products.find(product=>product.id===params.get('item'));
  const itemSize=item?.sizes.find(size=>size===params.get('size'));
  useEffect(()=>{
    setActiveSearch(search);
    const requested=new URLSearchParams(search).get('set');
    setSelected(requested==='groom'||requested==='bride'||requested==='both'?requested:'');
    setCopyStatus('idle');
  },[search]);
  const selectedOffer=offers.find(o=>o.id===selected);
  const chosen=selectedOffer?.name[lang]??(selected==='both'?w('ชุดฝ่ายเจ้าบ่าวและชุดฝ่ายเจ้าสาว','Groom’s and bride’s sets','男方及女方套装'):'');
  const summary=[
    w('สวัสดีค่ะ/ครับ ขอสอบถาม Tang Chin Hua','Hello Tang Chin Hua, I’d like to enquire.','Tang Chin Hua 您好，我想咨询。'),
    chosen, item ? item.name[lang]+(itemSize?' ('+itemSize+')':'') : '',
    item && params.get('photo')==='1' ? w('รบกวนส่งรูปสินค้าจริงของรายการนี้ให้ดูด้วยค่ะ/ครับ','Could you send a photo of this exact item?','可以发这件商品的实拍照片吗？') : '',
    date ? w('วันงาน','Event date','仪式日期')+' '+date : '',
    area ? w('พื้นที่จัดส่ง','Delivery area','配送地区')+' '+area.trim() : '',
    w('ขอทราบราคา รายการ และรอบจัดส่งที่ยืนยันได้','Please confirm price, contents and delivery options.','请确认价格、清单和配送安排。'),
  ].filter(Boolean).join('\n');
  async function copySummary() {
    try { await navigator.clipboard.writeText(summary); setCopyStatus('copied'); }
    catch { setCopyStatus('manual'); summaryField.current?.focus(); summaryField.current?.select(); }
  }
  return <><Banner tag="LET’S TALK" title={w('สอบถามสินค้า','Enquire about a set','套装咨询')} description={w('เลือกชุดที่สนใจ เตรียมข้อความ แล้วเปิด Inbox ของร้าน','Choose a set, prepare a message and open the shop’s Inbox.','选择意向套装，准备留言，再打开商家 Inbox。')} image="tea"/>
    <section className="wrap section detail contact"><div>
      <p className="eyebrow">01 / YOUR ENQUIRY</p><h2>{w('เตรียมข้อความถึงร้าน','Prepare your message','准备留言')}</h2>
      {item&&<p className="contents">{item.name[lang]}{itemSize?' · '+itemSize:''}</p>}
      <label className="field"><span>{w('ชุดที่สนใจ','Set of interest','意向套装')}</span><select value={selected} onChange={e=>{setSelected(e.target.value);setCopyStatus('idle');}}><option value="">{w('ยังไม่ระบุ','Not selected','未选择')}</option>{offers.map(o=><option key={o.id} value={o.id}>{o.name[lang]}</option>)}<option value="both">{w('ทั้งสองชุด','Both sets','双方套装')}</option></select></label>
      <label className="field"><span>{w('วันงาน (ถ้าทราบ)','Event date (optional)','仪式日期（选填）')}</span><input type="date" value={date} onChange={e=>{setDate(e.target.value);setCopyStatus('idle');}}/></label>
      <label className="field"><span>{w('จังหวัดหรือพื้นที่จัดส่ง (ถ้าทราบ)','Province or delivery area (optional)','府县或配送区域（选填）')}</span><input type="text" value={area} maxLength={90} onChange={e=>{setArea(e.target.value);setCopyStatus('idle');}}/></label>
    </div><div className="contents">
      <label className="field"><span>{w('ข้อความสำหรับคัดลอกไปวางในแชต','Message to paste into Messenger','可复制到 Messenger 的留言')}</span><textarea ref={summaryField} rows={7} value={summary} readOnly/></label>
      <div className="actions"><button type="button" className="button outline" onClick={copySummary}>{w('คัดลอกข้อความ','Copy message','复制留言')}</button><ChatButton label={w('คัดลอกแล้วเปิด Messenger','Copy and open Messenger','复制并打开 Messenger')} onClick={copySummary}/></div>
      <p className="fine" role="status">{copyStatus==='copied'
        ?w('คัดลอกแล้ว วางข้อความใน Messenger แล้วกดส่ง','Copied. Paste the message into Messenger and press Send.','已复制。请在 Messenger 粘贴留言并发送。')
        :copyStatus==='manual'
          ?w('คัดลอกอัตโนมัติไม่ได้ โปรดคัดลอกข้อความในช่องด้วยตนเอง','Automatic copy was unavailable. Copy the message from the field manually.','无法自动复制，请从文本框手动复制。')
          :w('วางข้อความใน Messenger แล้วกดส่งถึงร้าน','Paste the message into Messenger and send it to the shop.','在 Messenger 中粘贴留言并发送给商家。')}</p>
      <a href={facebook} className="text-link" target="_blank" rel="noopener noreferrer">{w('เปิดหน้า Facebook ของร้าน','Open the shop’s Facebook page','打开商家 Facebook 页面')}</a>
    </div></section>
    <StoreLocation/>
  </>;
}
function SavedItems() {
  const w=useWords();
  const lang=useContext(Locale);
  const [items,setItems]=useState<CartItem[]>([]);
  useEffect(()=>{
    try { const saved:unknown=JSON.parse(localStorage.getItem('cart')??'[]'); if(Array.isArray(saved))setItems(saved.filter(x=>x&&typeof x.id==='string'&&Number.isFinite(x.quantity))); } catch { /* Unavailable storage leaves an empty list. */ }
  },[]);
  return <><Banner tag="SAVED ITEMS" title={w('รายการที่บันทึกไว้','Saved items','已保存商品')} description={w('เปิดรายละเอียดหรือสอบถามรายการที่เคยบันทึกไว้','Open details or enquire about a saved item.','打开详情或咨询已保存的商品。')}/>
    <section className="wrap section">{items.length?<ul className="saved-list">{items.map((item,i)=><li key={item.id+'/'+item.size+'/'+i}><A className="text-link" to={'/product/'+item.id}>{item.name?.[lang]??item.id}</A> <span>{item.size} × {item.quantity}</span></li>)}</ul>:<p>{w('ยังไม่มีรายการที่บันทึกไว้','There are no saved items.','暂无已保存商品。')}</p>}<A to="/shop" className="button">{w('เลือกของตามพิธี','Shop by ceremony','按仪式选购')}</A></section>
  </>;
}
function NotFound() {
  const w=useWords();
  return <><Banner tag="404" title={w('ไม่พบหน้านี้','Page not found','未找到页面')} description={w('ลองกลับหน้าแรกหรือเปิดชุดของหมั้นจีน','Try the homepage or browse the engagement sets.','请返回首页或浏览订婚套装。')}/><div className="wrap section"><A to="/packages" className="button">{w('ดูชุดของหมั้นจีน','Browse engagement sets','浏览订婚套装')}</A></div></>;
}
function renderPage(path:string) {
  switch(path) {
    case '/':return <Home/>;
    case '/packages':return <PackageIndex/>;
    case '/shop':return <Shop/>;
    case '/traditions':return <Traditions/>;
    case '/blog':return <Journal/>;
    case '/about':return <About/>;
    case '/faq':return <Faq/>;
    case '/contact':return <Contact/>;
    case '/cart':return <SavedItems/>;
    default: {
      const [,group,id,...rest]=path.split('/');
      if(rest.length)return <NotFound/>;
      const offer=group==='packages'&&offers.find(o=>o.id===id);
      if(offer)return <OfferPage offer={offer}/>;
      const collection=group==='shop'&&collections.find(c=>c.id===id);
      if(collection)return <Shop initial={collection}/>;
      const product=group==='product'&&products.find(p=>p.id===id);
      if(product)return <ProductPage product={product}/>;
      const article=group==='blog'&&articles.find(a=>a.slug===id);
      return article?<ArticlePage article={article}/>:<NotFound/>;
    }
  }
}

export default function Site() {
  const {pathname}=useLocation();
  const {lang,path}=parsePath(pathname);
  const firstRoute=useRef(true);
  useEffect(()=>{
    const info=pageInfo(path,lang);
    document.title=info.title;
    document.documentElement.lang=lang==='zh'?'zh-Hans':lang;
    document.querySelector('meta[name="description"]')?.setAttribute('content',info.description);
    if(firstRoute.current){firstRoute.current=false;}
    else {window.scrollTo(0,0);document.getElementById('main')?.focus({preventScroll:true});}
  },[path,lang]);
  return <Locale.Provider value={lang}>
    <a className="skip" href="#main">{text('ข้ามไปเนื้อหา','Skip to content','跳到内容')[lang]}</a>
    <Header path={path}/><main id="main" tabIndex={-1} key={lang+'/'+path}>{renderPage(path)}</main><Footer/>
  </Locale.Provider>;
}
