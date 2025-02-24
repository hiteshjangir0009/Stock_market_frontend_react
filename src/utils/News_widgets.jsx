import { useEffect, useRef } from "react";

const TradingViewTimelineWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous widget to prevent duplication
    containerRef.current.innerHTML = "<div class='tradingview-widget-container__widget'></div>";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "market",
      market: "stock",
      isTransparent: true,
      displayMode: "regular",
      width: "100%", // Responsive width
      height: 550,
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTimelineWidget;
