import vid1 from '../assets/moments/גשם על החלון עם צבע.mp4';
import vid2 from '../assets/moments/כוסות באויר עם צבע_1.mp4';
import vid3 from '../assets/moments/שולחן ל2 עם צבע.mp4';
import vid4 from '../assets/moments/שישי משפחתי חדש.mp4';
import vid5 from '../assets/moments/שמש על הדשא עם צבע.mp4';
import vid6 from '../assets/moments/שקיעה מול הים עם צבע_1.mp4';

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
    label: 'גשם על החלון',
    mp4: vid1,
    titleSvg: title1,
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
    label: 'שולחן לשניים',
    mp4: vid3,
    titleSvg: title2,
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
    titleSvg: title3,
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
    titleSvg: title4,
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
    titleSvg: title5,
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
    titleSvg: title6,
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
