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

import area from '../assets/icons/אזור ובציר.mp4';
import alcoholLevel from '../assets/icons/אחוז אלכוהול.mp4';
import aroma from '../assets/icons/ארומה.mp4';
import body from '../assets/icons/גוף.mp4';
import food from '../assets/icons/התאמה לאוכל.mp4';
import taste from '../assets/icons/טעם.mp4';
import age from '../assets/icons/התיישנות.mp4';
import sweetness from '../assets/icons/מתיקות_1.mp4';
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

import videoPrice109 from '../assets/buttons/prices/price 109.svg';
import videoPrice119 from '../assets/buttons/prices/price 119.svg';
import videoPrice125 from '../assets/buttons/prices/price 125.svg';
import videoPrice159 from '../assets/buttons/prices/price 159.svg';
import videoPrice189 from '../assets/buttons/prices/price 189.svg';
import videoPrice209 from '../assets/buttons/prices/price 209.svg';

import sampleQR from '../assets/IPAD/sample_QR.jpeg';
import qr4 from '../assets/IPAD/qr-codes/qr_mishpachti.png';

const WINE_DETAILS = {
  typeOfWine: { title: 'סוג יין', video: typeOfWine },
  area: { title: 'אזור ובציר', video: area },
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
    price: 159,
    priceSvg: videoPrice159,
    ipadVideo: ipadV1,
    pageVideo: pageVideo1,
    videoTime: 15,
    qrCode: sampleQR,
    checkoutVideo: checkoutWine1,
    description: {
      typeOfWine: 'יין לבן חצי יבש',
      area: 'הגליל העליון, 2023',
      alcoholLevel: '12.5%',
      sweetness: 'חצי יבש',
      body: 'בינוני',
      taste: 'אפרסק, אגס, פרחי לבן',
      aroma: 'פירות אקזוטיים, פרחי לבן',
      age: 'מוכן לשתייה',
      food: 'סושי, מאכלי ים, סלטים'
    }
  },
  {
    id: 'shranim',
    label: 'ערב רומנטי',
    mp4: vid3,
    mp4BW: vid3BW,
    titleSvg: title1,
    price: 209,
    priceSvg: videoPrice209,
    ipadVideo: ipadV2,
    pageVideo: pageVideo3,
    videoTime: 15,
    qrCode: sampleQR,
    checkoutVideo: checkoutWine2,
    description: {
      typeOfWine: 'יין אדום יבש',
      area: 'רמת הגולן, 2021',
      alcoholLevel: '14.5%',
      sweetness: 'יבש',
      body: 'מלא',
      taste: 'פרי אדום, שוקולד, תבלינים',
      aroma: 'פירות כהים, וניל, עץ אלון',
      age: 'מומלץ לחכות עד 2026',
      food: 'בשרים צלויים, פסטות בשריות'
    }
  },
  {
    id: 'avirot',
    label: 'כוסות באוויר',
    mp4: vid2,
    mp4BW: vid2BW,
    titleSvg: title4,
    price: 119,
    priceSvg: videoPrice119,
    ipadVideo: ipadV3,
    pageVideo: pageVideo2,
    videoTime: 15,
    qrCode: sampleQR,
    checkoutVideo: checkoutWine3,
    description: {
      typeOfWine: 'יין ורוד חצי יבש',
      area: 'השרון, 2023',
      alcoholLevel: '12%',
      sweetness: 'חצי יבש',
      body: 'קל',
      taste: 'תות שדה, פטל, אבטיח',
      aroma: 'פירות יער אדומים',
      age: 'מוכן לשתייה',
      food: 'סלטים, אוכל אסייתי, נשנושים'
    }
  },
  {
    id: 'mishpachti',
    label: 'שישי משפחתי',
    mp4: vid4,
    mp4BW: vid4BW,
    titleSvg: title2,
    price: 109,
    priceSvg: videoPrice109,
    ipadVideo: ipadV4,
    pageVideo: pageVideo4,
    videoTime: 15,
    qrCode: qr4,
    checkoutVideo: checkoutWine4,
    description: {
      typeOfWine: 'בלנד אדום יבש',
      area: 'הרי ירושלים, 2020',
      alcoholLevel: '14%',
      sweetness: 'יבש',
      body: 'מלא ועשיר',
      taste: 'שזירה, דובדבן, שוקולד מריר',
      aroma: 'פירות כהים, קפה, שוקולד',
      age: 'בשיאו',
      food: 'בשרים צלויים, גבינות קשות'
    }
  },
  {
    id: 'shamesh',
    label: 'שמש על הדשא',
    mp4: vid5,
    mp4BW: vid5BW,
    titleSvg: title3,
    price: 189,
    priceSvg: videoPrice189,
    ipadVideo: ipadV5,
    pageVideo: pageVideo5,
    videoTime: 15,
    qrCode: sampleQR,
    checkoutVideo: checkoutWine5,
    description: {
      typeOfWine: 'רוזה יבש',
      area: 'הגליל העליון, 2023',
      alcoholLevel: '13%',
      sweetness: 'יבש',
      body: 'בינוני-קל',
      taste: 'תות שדה, אשכולית, פרחים',
      aroma: 'פירות יער, פרחי בר',
      age: 'מוכן לשתייה',
      food: 'סלטים, דגים, אוכל אסייתי'
    }
  },
  {
    id: 'shkira',
    label: 'שקיעה מול הים',
    mp4: vid6,
    mp4BW: vid6BW,
    titleSvg: title6,
    price: 125,
    priceSvg: videoPrice125,
    ipadVideo: ipadV6,
    pageVideo: pageVideo6,
    videoTime: 15,
    qrCode: sampleQR,
    checkoutVideo: checkoutWine6,
    description: {
      typeOfWine: 'יין לבן יבש',
      area: 'הגליל העליון, 2023',
      alcoholLevel: '13.5%',
      sweetness: 'יבש',
      body: 'בינוני',
      taste: 'לימון, אשכולית, מינרלי',
      aroma: 'אשכולית, לימון, צדפות',
      age: 'מוכן לשתייה',
      food: 'מאכלי ים, סושי, סלטים'
    }
  }
];

export const getVideoById = (id) => {
  return VIDEO_OPTIONS.find(option => option.id === id);
};
