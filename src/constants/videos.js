import vid1 from '../assets/moments/rain.mp4';
import vid1BW from '../assets/moments/rain_bw.mp4';
import vid2 from '../assets/moments/cups.mp4';
import vid2BW from '../assets/moments/cups_bw.mp4';
import vid3 from '../assets/moments/table.mp4';
import vid3BW from '../assets/moments/table_bw.mp4';
import vid4 from '../assets/moments/friday.mp4';
import vid4BW from '../assets/moments/friday_bw.mp4';
import vid5 from '../assets/moments/sun.mp4';
import vid5BW from '../assets/moments/sun_bw.mp4';
import vid6 from '../assets/moments/sunset.mp4';
import vid6BW from '../assets/moments/sunset_bw.mp4';

import ipadV1 from '../assets/IPAD/videos moments/גשם לרוחב.mp4';
import ipadV2 from '../assets/IPAD/videos moments/כוסות באוויר לרוחב_2.mp4'
import ipadV3 from '../assets/IPAD/videos moments/פרח חדש לרוחב_6.mp4';
import ipadV4 from '../assets/IPAD/videos moments/שישי משפחתי לרוחב חדש.mp4';
import ipadV5 from '../assets/IPAD/videos moments/שמש על הדשא לרוחב_ ניסיון1.mp4';
import ipadV6 from '../assets/IPAD/videos moments/שקיעה מול הים לרוחב חדש.mp4';

import title1 from '../assets/dinner for2.svg';
import title2 from '../assets/friday.svg';
import title3 from '../assets/grass.svg';
import title4 from '../assets/party.svg';
import title5 from '../assets/rain.svg';
import title6 from '../assets/sunset.svg';

import title1flat from '../assets/dinner for2flat.svg';
import title2flat from '../assets/fridayflat.svg';
import title3flat from '../assets/grassflat.svg';
import title4flat from '../assets/partyflat.svg';
import title5flat from '../assets/rainflat.svg';
import title6flat from '../assets/sunsetflat.svg';

import area from '../assets/icons/אזור ובציר.mp4';
import alcoholLevel from '../assets/icons/אחוז אלכוהול.mp4';
import aroma from '../assets/icons/ארומה.mp4';
import body from '../assets/icons/גוף.mp4';
import food from '../assets/icons/התאמה לאוכל.mp4';
import taste from '../assets/icons/טעם.mp4';
import age from '../assets/icons/התיישנות.mp4';
import sweetness from '../assets/icons/מתיקות.mp4';
import typeOfWine from '../assets/icons/סוג יין.mp4';

import pageVideo1 from '../assets/pages/each page video/גשם על החלון טלפון2.mp4';
import pageVideo2 from '../assets/pages/each page video/כוסות באוויר לאייפון.mp4';
import pageVideo3 from '../assets/pages/each page video/ערב רומנטי.mp4';
import pageVideo4 from '../assets/pages/each page video/שישי משפחתי טלפון 2.mp4';
import pageVideo5 from '../assets/pages/each page video/שמש על הדשא לטלפון.mp4';
import pageVideo6 from '../assets/pages/each page video/שקיעה מול הים.mp4';

import checkoutWine1 from '../assets/pages/bottles checkout/מוקאפ גשם.mp4';
import checkoutWine2 from '../assets/pages/bottles checkout/מוקאפ ערב רומנטי.mp4';
import checkoutWine3 from '../assets/pages/bottles checkout/מוקאפ דשא.mp4';
import checkoutWine4 from '../assets/pages/bottles checkout/מוקאפ שישי.mp4';
import checkoutWine5 from '../assets/pages/bottles checkout/מוקאפ מסיבה.mp4';
import checkoutWine6 from '../assets/pages/bottles checkout/מוקאפ יין שקיעה בים.mp4';
import generalCheckout from '../assets/pages/bottles checkout/QRbackground.mp4';


import videoPrice109 from '../assets/buttons/prices/price 109.svg';
import videoPrice119 from '../assets/buttons/prices/price 119.svg';
import videoPrice125 from '../assets/buttons/prices/price 125.svg';
import videoPrice159 from '../assets/buttons/prices/price 159.svg';
import videoPrice189 from '../assets/buttons/prices/price 189.svg';
import videoPrice209 from '../assets/buttons/prices/price 209.svg';

import sampleQR from '../assets/IPAD/sample_QR.jpeg';
import qr1 from '../assets/IPAD/qr-codes/qr_rain.png';
import qr2 from '../assets/IPAD/qr-codes/qr_shranim.png';
import qr3 from '../assets/IPAD/qr-codes/qr_avirot.png';
import qr4 from '../assets/IPAD/qr-codes/qr_mishpachti.png';
import qr5 from '../assets/IPAD/qr-codes/qr_shamesh.png';
import qr6 from '../assets/IPAD/qr-codes/qr_shkira.png';

const WINE_DETAILS = {
  typeOfWine: { title: 'סוג היין', video: typeOfWine },
  area: { title: 'כרמים ובציר', video: area },
  body: { title: 'גוף', video: body },
  taste: { title: 'טעם', video: taste },
  aroma: { title: 'ארומה', video: aroma },
  sweetness: { title: 'מתיקות', video: sweetness },
  age: { title: 'התיישנות', video: age },
  food: { title: 'התאמה לאוכל', video: food },
  alcoholLevel: { title: 'אחוז אלכוהול', video: alcoholLevel }
};

export const getWineDetail = (id) => WINE_DETAILS[id];

export const VIDEO_OPTIONS = [
  {
    id: 'rain',
    label: 'חורף ביתי',
    mp4: vid1,
    mp4BW: vid1BW,
    titleSvg: title5,
    titleSvgflat: title5flat,
    text1:'רגע של התכנסות שקטה',
    text2:'הכל עוצר והגוף נרגע',
    price: 159,
    priceSvg: videoPrice159,
    ipadVideo: ipadV1,
    pageVideo: pageVideo1,
    videoTime: 15,
    qrCode: qr1,
    checkoutVideo: checkoutWine1,
    generalCheckoutVideo:generalCheckout,
    description: {
      typeOfWine: 'כתום על בסיס גוורצטרמינר',
      area: 'עין זיוון, רמת הגולן, 2021',
      alcoholLevel: '13%',
      sweetness: 'חצי יבש',
      body: 'בינוני ועשיר, עם מרקם מעט שומני',
      taste: 'משמש מיובש, קליפת תפוז, מרירות עדינה של תה שחור',
      aroma: 'דבש, פרחים לבנים, תבלין עדין',
      age: '6 חודשים על הקליפות, ולאחר מכן בבקבוק',
      food: 'תבשילים ארומטיים, גבינות בשלות, עוגת גזר'
    }
  },
  {
    id: 'shranim',
    label: 'ערב רומנטי',
    mp4: vid3,
    mp4BW: vid3BW,
    titleSvg: title1,
    titleSvgflat: title1flat,
    text1:'רגע של קרבה ואינטימיות',
    text2:'מספיק רק מבט וכל השאר כבר נאמר',
    price: 225,
    priceSvg: videoPrice209,
    ipadVideo: ipadV2,
    pageVideo: pageVideo3,
    videoTime: 15,
    qrCode: qr2,
    checkoutVideo: checkoutWine2,
    generalCheckoutVideo:generalCheckout,
    description: {
      typeOfWine: 'אדום רך על בסיס מרלו',
      area: 'צור הדסה, הרי יהודה, 2020',
      alcoholLevel: '13.5%',
      sweetness: 'יבש',
      body: 'בינוני-מלא, עגול ורך בפה',
      taste: 'פירות אדומים בשלים, עץ קלוי, סיומת מתמשכת',
      aroma: ' שזיף כהה, וניל עדין, תבלין חם',
      age: '10 חודשים בחביות עץ אלון צרפתי קלוי',
      food: 'פסטה שמנת ופטריות, גבינות רכות'
    }
  },
  {
    id: 'avirot',
    label: 'כוסות באוויר',
    mp4: vid2,
    mp4BW: vid2BW,
    titleSvg: title4,
    titleSvgflat: title4flat,
    text1:'רגע קליל, חי, בלי לחשוב',
    text2:'רק לרקוד',
    price: 109,
    priceSvg: videoPrice119,
    ipadVideo: ipadV3,
    pageVideo: pageVideo2,
    videoTime: 15,
    qrCode: qr3,
    checkoutVideo: checkoutWine3,
    generalCheckoutVideo:generalCheckout,
    description: {
      typeOfWine: 'מבעבע על בסיס שרדונה ופינו נואר',
      area: 'גבעת ישעיהו, שפלת יהודה, 2022',
      alcoholLevel: '12%',
      sweetness: ' יבש',
      body: 'קליל ותוסס, מלא חיים',
      taste: 'אפרסק, ליים, נגיעה של שמרים',
      aroma: 'פרח לבן, תפוח ירוק, לחמנייה טרייה',
      age: 'על השמרים, 8 חודשים',
      food: 'טפאס, מאפים חמים, גבינות קשות'
    }
  },
  {
    id: 'mishpachti',
    label: 'שישי משפחתי',
    mp4: vid4,
    mp4BW: vid4BW,
    titleSvg: title2,
    titleSvgflat: title2flat,
    text1:'רגע שפשוט מרגיש כמו בית',
    
    price: 209,
    priceSvg: videoPrice109,
    ipadVideo: ipadV4,
    pageVideo: pageVideo4,
    videoTime: 15,
    qrCode: qr4,
    checkoutVideo: checkoutWine4,
    generalCheckoutVideo:generalCheckout,
    description: {
      typeOfWine: 'אדום על בסיס קברנה סוביניון',
      area: 'בן זמרה, גליל העליון, 2020',
      alcoholLevel: '14%',
      sweetness: 'יבש',
      body: 'מלא, רך ועוטף',
      taste: 'פירות יער בשלים, שוקולד מריר, תבלינים חמימים',
      aroma: 'דובדבן, עשבי תיבול ים־תיכוניים, עץ קלוי',
      age: '10 חודשים בחבית עץ אלון צרפתי',
      food: 'תבשילים וקדירות, סלטים מתובלים'
    }
  },
  {
    id: 'shamesh',
    label: 'שמש על הדשא',
    mp4: vid5,
    mp4BW: vid5BW,
    titleSvg: title3,
    titleSvgflat: title3flat,
    text1:'רגע של שלווה, אור, וצחוק מתגלגל בין חברים',
  
    price: 119,
    priceSvg: videoPrice189,
    ipadVideo: ipadV5,
    pageVideo: pageVideo5,
    videoTime: 15,
    qrCode: qr5,
    checkoutVideo: checkoutWine5,
    generalCheckoutVideo:generalCheckout,
    description: {
      typeOfWine: 'רוזה על בסיס גרנאש וסירה',
      area: 'אל־רום, רמת הגולן, 2023',
      alcoholLevel: '11.5%',
      sweetness: 'יבש',
      body: 'קליל ומרענן',
      taste: 'תות שדה, אבטיח, ולימון בשל',
      aroma: 'פרח לבנדר, קליפת לימון, נגיעה של דבש',
      age: 'ללא התיישנות',
    food:   `סלט קייצי, פוקצ'ה עם עגבניות, ענבים ופקאנים`
    }
  },
  {
    id: 'shkira',
    label: 'שקיעה מול הים',
    mp4: vid6,
    mp4BW: vid6BW,
    titleSvg: title6,
    titleSvgflat: title6flat,
    text1:'רגע שנושם, סיכום של יום',
    text2:'כמו נשיפה ארוכה ומשוחררת',
    price: 189,
    priceSvg: videoPrice125,
    ipadVideo: ipadV6,
    pageVideo: pageVideo6,
    videoTime: 15,
    qrCode: qr6,
    checkoutVideo: checkoutWine6,
    generalCheckoutVideo:generalCheckout,
    description: {
      typeOfWine: 'לבן חצי-יבש על בסיס ויונייה',
      area: 'צובה, הרי ירושלים, 2018',
      alcoholLevel: '12.5%',
      sweetness: 'חצי יבש, מתקתק אך מאוזן',
      body: 'קליל וקטיפתי, עגול ונעים',
      taste: 'פרי הדר עסיסי, מליחות עדינה, סיומת רעננה ומרגיעה',
      aroma: 'אשכולית ורודה, קליפת תפוז, וניל עדין',
      age: 'ללא התיישנות בחבית, התבגרות בבקבוק למשך 5 חודשים',
      food: 'דגים טריים, זיתים, שקדים קלויים'
    }
  }
];

export const getVideoById = (id) => {
  return VIDEO_OPTIONS.find(option => option.id === id);
};

export const getVideoIndexById = (id) => {
  return VIDEO_OPTIONS.findIndex(option => option.id === id);
};

export const getVideoByIndex = (index) => {
  // We add a check to make sure the index is valid
  if (index >= 0 && index < VIDEO_OPTIONS.length) {
    return VIDEO_OPTIONS[index];
  }
  return null; // Return null if the index is out of bounds
};

export const getVideoOptionsLength = () => {
  return VIDEO_OPTIONS.length;
};

export const getAllVideo = () => {
  return VIDEO_OPTIONS.map(option => ({
    id: option.id,
    label: option.label,
    mp4: option.mp4,
    mp4BW: option.mp4BW,
    titleSvg: option.titleSvg,
    titleSvgflat: option.titleSvgflat,
    text1: option.text1,
    text2: option.text2,
    price: option.price,
    priceSvg: option.priceSvg,
    ipadVideo: option.ipadVideo,
    pageVideo: option.pageVideo,
    videoTime: option.videoTime,
    qrCode: option.qrCode,
    checkoutVideo: option.checkoutVideo,
    generalCheckoutVideo: option.generalCheckoutVideo
  }));
}