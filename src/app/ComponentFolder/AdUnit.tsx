// "use client";
// import { useEffect } from "react";

// declare global {
//   interface Window {
//     adsbygoogle: unknown[];
//   }
// }

// const AdUnit = () => {
//   useEffect(() => {
//     try {
//       if (typeof window !== "undefined") {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       }
//     } catch (e) {
//       console.error("AdSense error", e);
//     }
//   }, []);

//   return (
//     <>
//       {/* <ins
//         className="adsbygoogle"
//         style={{ display: "block" }}
//         data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
//         data-ad-slot="7824969332" // replace with your actual slot
//         data-adtest="on" // 👈 IMPORTANT for localhost testing
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       /> */}
//       <ins
//         // className="adsbygoogle"
//         style={{ display: "block" }}
//         data-ad-client="ca-pub-1482287226712974"
//         data-ad-slot="7824969332"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       ></ins>
//     </>
//   );
// };

// export default AdUnit;

"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdUnit = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const ad = document.querySelector("ins.adsbygoogle");
        if (ad && !ad.getAttribute("data-adsbygoogle-status")) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }
    } catch (e) {
      console.error("AdSense error:", e);
      console.log("AdSense ID:", process.env.NEXT_PUBLIC_ADSENSE_ID);
    }
  }, []);

  return (
    <div ref={adRef} key={Date.now()}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot="7824969332" // slot
        data-adtest="on" //for development
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;
