
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import normalLogo from '../assets/logo new.svg';
// import logo1 from '../assets/logo-animation/momento1.svg';
// import logo2 from '../assets/logo-animation/momento2.svg';
// import logo3 from '../assets/logo-animation/momento3.svg';
// import logo4 from '../assets/logo-animation/moemnto4.svg';
// import logo5 from '../assets/logo-animation/moemnto5.svg';
// import logo6 from '../assets/logo-animation/momento6.svg';
// import logo7 from '../assets/logo-animation/momento7.svg';
// import logo8 from '../assets/logo-animation/momento8.svg';
// import arrow from '../assets/arrow.svg';
// import { VIDEO_OPTIONS } from '../constants/videos';
// import arrowX from '../assets/buttons/x.svg';

// import { getCartItemCount} from '../utils/cart';
// import cartBase from '../assets/buttons/cartBase.svg';
// import cartWheel from '../assets/buttons/cartWheel.svg';
// import cartWheel2 from '../assets/buttons/cartWheel2.svg';
// import backArrow from '../assets/nextMoment.svg';

// const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

// const ANIMATION_INTERVAL = 600; // Time between logo changes in milliseconds

// export default function Header() {
//   const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
//   const [isCategoryPage, setIsCategoryPage] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [cameFromPaymentComplete, setCameFromPaymentComplete] = useState(false);

//     const [itemCount, setItemCount] = useState(getCartItemCount());

//   const handleSmartNavigation = () => {
//     if (isPhoneHomePage) {
//       navigate('/about');
//     } 
//     else if (isCategoryPage) { 
//       navigate('/home');
//     } 
    
//     else {
//       navigate(-1);
//     }
//   };
//   useEffect(() => {
//     const handleCartUpdate = () => {
//       setItemCount(getCartItemCount());
//     };
//     window.addEventListener('cart_updated', handleCartUpdate);
//     return () => {
//       window.removeEventListener('cart_updated', handleCartUpdate);
//     };
//   }, []);


//   // Handle payment complete navigation state
//   useEffect(() => {
//     if (location.state?.fromPaymentComplete) {
//       // Clear the state to prevent it from affecting future navigations
//       window.history.replaceState({ ...window.history.state, fromPaymentComplete: false }, '');
//     }
//   }, [location.pathname]);

//   // Logo animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
//     }, ANIMATION_INTERVAL);

//     return () => clearInterval(interval);
//   }, []);

//   const isAboutPage = location.pathname === '/about';
//   const isCartPage = location.pathname === '/cart';
//   const isHomePage = location.pathname === '/';
//   const isPhoneHomePage = location.pathname === '/home';
//   const logoToShow = isAboutPage ? logos[currentLogoIndex] : normalLogo;
  

//   // Category label logic based on last URL segment
//   const [showCategoryLabel, setShowCategoryLabel] = useState(false);
//   const [categoryLabel, setCategoryLabel] = useState("");

//   useEffect(() => {
//     const segments = location.pathname.split('/').filter(Boolean);
//     const lastSegment = segments[segments.length - 1];
//     const match = VIDEO_OPTIONS.find(opt => opt.id === lastSegment);
//     if (match) {
//       setCategoryLabel(match.label);
//       setShowCategoryLabel(false);
//       setIsCategoryPage(true);
//       const timer = setTimeout(() => setShowCategoryLabel(true), 1200);
//       return () => clearTimeout(timer);
//     } else {
//       setCategoryLabel("");
//       setShowCategoryLabel(false);
//       setIsCategoryPage(false);
//     }
//   }, [location.pathname]);


//   const isPaymentComplete = location.pathname === '/payment-complete';
//   // Show back button on all pages except home and about
//   const showBackArrow = !isHomePage && !isAboutPage && !isCategoryPage && !isPhoneHomePage;

//   return (
//     <header className={`app-header${isPaymentComplete ? ' payment-complete-header' : ''}`}>
      
//       {(isCategoryPage || isAboutPage || isPhoneHomePage) && (
//         <div style={{ width: '100%' }}>
//           {/* Shipping Banner */}
//           <div style={{
//             backgroundColor: '#FFB8BE',
//             textAlign: 'center',
//             padding: '12px 15px',
//             marginTop: isPhoneHomePage ? '-54px' : '-22px'

//           }}>
//             <p style={{
//               transform: 'translateY(-1px)',
//               margin: 0,
//               color: '#121010',
//               fontFamily: 'ArbelHagilda',
//               fontSize: '13px',
//               fontStyle: 'normal',
//               fontWeight: 400,
//               lineHeight: '150%',
//               letterSpacing: '0.39px',
              
//               marginLeft: '-20px',
//             }}>
//               משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה
//             </p>
//           </div>
          
//           {/* Category Page Header */}
//           <div style={{
//             backgroundColor: '#121010',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: '15px 10px',
//             direction: 'ltr',
//             marginTop: '-6px',
//             boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)'
            
//           }}>
//             {/* Cart Icon Container */}
//         <div
//           onClick={() => navigate('/cart')}
//           aria-label="Go to Cart"
//           title="Go to Cart"
//           style={{
//             position: 'relative',
//             width: '28px',        
//             height: '22px',    
//             cursor: 'pointer',
//           }}
//         >
//           {/* 1. גוף העגלה (בסיס) */}
//           <img
//             src={cartBase}
//             alt=""
//             style={{
//               position: 'absolute',
//               top: '0',
//               left: '0',
//               width: '25.521px', 
//               height: '15.422px', 
//             }}
//           />

//           {/* 2. גלגל ראשון */}
//           <img
//             src={cartWheel}
//             alt=""
//             style={{
//               position: 'absolute',
//               width: '4.034px', 
//               height: '4.034px', 
              
//               top: '17px',
//               left: '10px', 
//             }}
//           />

//           {/* 3. גלגל שני */}
//           <img
//             src={cartWheel2}
//             alt=""
//             style={{
//               position: 'absolute',
//               width: '4.034px',  
//               height: '4.034px', 

//               top: '17px',
//               left: '18px',
//             }}
//           />
//            <span
//               style={{
//                 position: 'absolute',
//                 top: '20%',
//                 left: '59%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '15.954px',
//                 height: '18.259px',
//                 color: '#DFDED0',
//                 textAlign: 'center',
//                 fontFamily: 'ArbelHagilda',
//                 fontSize: '13px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '150%',
//                 letterSpacing: '0.39px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               {itemCount}
//             </span>
//         </div>
                    
//             {/* Catalog Button */}
//             <div onClick= {handleSmartNavigation} style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               cursor: 'pointer',
//             }}>
              
//               <img
//                 src={backArrow}
//                 alt="Go to catalog"
//                 style={{
//                   transform: 'rotate(180deg)',
//                   width: '28px',
//                   height: 'auto',
//                 }}
//               />
//             </div>
//           </div>
//         </div>
// )}
//       {isPaymentComplete ? (
//         <img
//           src={arrowX}
//           alt="close"
//           className="close-btn"
//           onClick={() => navigate('/home', { state: { fromPaymentComplete: true } })}
//         />
//       ) : (
//         <>
//           {showBackArrow && (
//             <img
//               src={arrow}
//               alt="back"
//               className="arrow"
//               onClick={() => navigate(-1)}
//             />
//           )}
//           {location.pathname === '/payment' ? (
//             <h2 style={{ textAlign: 'center', width: '100%', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>שיטת תשלום</h2>
//           ) : isCartPage ? (
//             <h2 style={{ textAlign: 'center', width: '100%', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>הסל שלך</h2>
//           ) : (
//             <>
//               <div onClick={() => navigate('/about')} style={{paddingTop: '20px' }}>
//                 <img
//                   src={logoToShow}
//                   alt="Momento logo"
//                   className="logo"
//                   style={isAboutPage ? { width: '92vw', height: 'auto' } : { width: '90vw', height: 'auto' }}
//                 />
//               </div>
//               {isHomePage && <p>קטלוג יינות</p>}
//               {categoryLabel && (
//                 <p className={`fade-in-category${showCategoryLabel ? '' : ' hidden'}`} style={{ marginTop: '5px',marginLeft: '-4px' } }>{categoryLabel}</p>
//               )}
//             </>
//           )}
//         </>
//       )}
//     </header>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import normalLogo from '../assets/logo new.svg';
import logo1 from '../assets/logo-animation/momento1.svg';
import logo2 from '../assets/logo-animation/momento2.svg';
import logo3 from '../assets/logo-animation/momento3.svg';
import logo4 from '../assets/logo-animation/momento4.svg';
import logo5 from '../assets/logo-animation/momento5.svg';
import logo6 from '../assets/logo-animation/momento6.svg';
import logo7 from '../assets/logo-animation/momento7.svg';
import logo8 from '../assets/logo-animation/momento8.svg';

import arrow from '../assets/arrow.svg';
import { VIDEO_OPTIONS } from '../constants/videos';
import arrowX from '../assets/buttons/x.svg';
import { getCartItemCount} from '../utils/cart';
import cartBase from '../assets/buttons/cartBase.svg';
import cartWheel from '../assets/buttons/cartWheel.svg';
import cartWheel2 from '../assets/buttons/cartWheel2.svg';
import backArrow from '../assets/nextMoment.svg';
import logoM from '../assets/icons/logoM.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const ANIMATION_INTERVAL = 800;

export default function Header() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isCategoryPage, setIsCategoryPage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [cameFromPaymentComplete, setCameFromPaymentComplete] = useState(false);
  const [itemCount, setItemCount] = useState(getCartItemCount());

  const handleSmartNavigation = () => {
    if (isPhoneHomePage) {
      navigate('/about');
    } 
    else if (isCategoryPage) { 
      navigate('/home');
    } 
    else {
      navigate(-1);
    }
  };

  useEffect(() => {
    const handleCartUpdate = () => {
      setItemCount(getCartItemCount());
    };
    window.addEventListener('cart_updated', handleCartUpdate);
    return () => {
      window.removeEventListener('cart_updated', handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    if (location.state?.fromPaymentComplete) {
      window.history.replaceState({ ...window.history.state, fromPaymentComplete: false }, '');
    }
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, ANIMATION_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const isAboutPage = location.pathname === '/about';
  const isCartPage = location.pathname === '/cart';
  const isHomePage = location.pathname === '/';
  const isPhoneHomePage = location.pathname === '/home';
  const logoToShow = isAboutPage ? logos[currentLogoIndex] : normalLogo;
  const [showCategoryLabel, setShowCategoryLabel] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState("");

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const match = VIDEO_OPTIONS.find(opt => opt.id === lastSegment);
    if (match) {
      setCategoryLabel(match.label);
      setShowCategoryLabel(false);
      setIsCategoryPage(true);
      const timer = setTimeout(() => setShowCategoryLabel(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setCategoryLabel("");
      setShowCategoryLabel(false);
      setIsCategoryPage(false);
    }
  }, [location.pathname]);

  const isPaymentComplete = location.pathname === '/payment-complete';
  const isPaymentPage = location.pathname === '/payment';

  const showTopBar = isCategoryPage || isAboutPage || isPhoneHomePage || isCartPage || isPaymentComplete;
  const showMainContent = !isPaymentPage && !isCartPage && !isPaymentComplete;
  const showBackArrow = !isHomePage && !isAboutPage && !isCategoryPage && !isPhoneHomePage && !isPaymentComplete;

  return (
    <header className={`app-header${isPaymentComplete ? ' payment-complete-header' : ''}`}>
      
      {showTopBar && (
        <div style={{ width: '100%' }}>
          <div style={{
            backgroundColor: '#FFB8BE',
            textAlign: 'center',
            padding: '15px 15px',
            top: 0,
            marginTop: isPhoneHomePage ? '-61px' : '-33px'
          }}>
            <p style={{
              transform: 'translateY(-1px)',
              margin: 0,
              color: '#121010',
              fontFamily: 'ArbelHagilda',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: '0.39px',
              marginLeft: '-20px',
            }}>
              משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#121010',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 10px',
        
            direction: 'ltr',
            marginTop: '-6px',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)'
          }}>
            {isPaymentComplete ? (
              <>
              <img 
                  src={logoM} 
                  alt="Momento Logo" 
                  onClick={() => navigate('/about')}
                  style={{ cursor: 'pointer', height: '25px' }}
                />
              <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '10px'}}>
                <img
                  src={arrowX}
                  alt="close"
                  onClick={() => navigate('/home', { state: { fromPaymentComplete: true } })}
                  style={{cursor: 'pointer', height: '24px'}}
                />
              </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => navigate('/cart')}
                  aria-label="Go to Cart"
                  title="Go to Cart"
                  style={{
                    position: 'relative',
                    width: '28px',        
                    height: '22px',    
                    cursor: 'pointer',
                  }}
                >
                  <img src={cartBase} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '25.521px', height: '15.422px' }} />
                  <img src={cartWheel} alt="" style={{ position: 'absolute', width: '4.034px', height: '4.034px', top: '17px', left: '10px' }} />
                  <img src={cartWheel2} alt="" style={{ position: 'absolute', width: '4.034px', height: '4.034px', top: '17px', left: '18px' }} />
                  <span style={{ position: 'absolute', top: '20%', left: '59%', transform: 'translate(-50%, -50%)', width: '15.954px', height: '18.259px', color: '#DFDED0', textAlign: 'center', fontFamily: 'ArbelHagilda', fontSize: '13px', fontStyle: 'normal', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.39px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {itemCount}
                  </span>
                </div>
                
                <div onClick={handleSmartNavigation} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <img src={backArrow} alt="Go to catalog" style={{ transform: 'rotate(180deg)', width: '28px', height: 'auto' }} />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showBackArrow && (
        <img
          src={arrow}
          alt="back"
          className="arrow"
          onClick={() => navigate(-1)}
        />
      )}
      
      {showMainContent && (
        <>
          <div onClick={() => navigate('/about')} style={{paddingTop: '20px' }}>
            <img
              src={logoToShow}
              alt="Momento logo"
              className="logo"
              style={isAboutPage ? { width: '90vw', height: 'auto',transform: 'translateY(-10px)' } : { width: '90vw', height: 'auto' }}
            />
          </div>
          {isHomePage && <p>קטלוג יינות</p>}
          {categoryLabel && (
            <p className={`fade-in-category${showCategoryLabel ? '' : ' hidden'}`} style={{ marginTop: '5px',marginLeft: '-4px' } }>{categoryLabel}</p>
          )}
        </>
      )}

      {isPaymentPage && (
        <h2 style={{ textAlign: 'center', width: '100%', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>שיטת תשלום</h2>
      )}
      {isCartPage && (
        <h2 style={{ textAlign: 'center', width: '100%', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>הסל שלך</h2>
      )}
    </header>
  );
}