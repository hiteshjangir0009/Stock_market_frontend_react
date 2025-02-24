import { useEffect, useRef } from "react";

const TradingViewWidget = ({ exchange = "NASDAQ" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear previous widget
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "1M",
        exchange: exchange, // Dynamically set exchange
        showChart: true,
        locale: "en",
        isTransparent: true,
        showSymbolLogo: false,
        width: "100%",
        height: "550",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(219, 219, 219, 1)",
      });

      containerRef.current.appendChild(script);
    }
  }, [exchange]); // Re-run when exchange prop changes

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="text-blue-500">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
