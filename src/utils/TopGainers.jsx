
import { useEffect, useRef } from "react";

const TradingViewScreenerWidget = ({ defaultScreen = "top_gainers" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous widget before inserting a new one
    containerRef.current.innerHTML = "<div class='tradingview-widget-container__widget'></div>";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      defaultColumn: "overview",
      defaultScreen: defaultScreen, // Dynamic defaultScreen
      market: "america",
      showToolbar: true,
      colorTheme: "dark",
      locale: "in",
      isTransparent: true,
    });

    containerRef.current.appendChild(script);
  }, [defaultScreen]); // Re-run effect if defaultScreen changes

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewScreenerWidget;
