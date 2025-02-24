import { useEffect, useRef } from "react";

const Mini_TradingViewWidget = ({StockName}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Clear the container before adding a new script
        containerRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: StockName,
            width: "100%",
            height: "100%",
            locale: "en",
            dateRange: "12M",
            colorTheme: "dark",
            isTransparent: true,
            autosize: false,
            largeChartUrl: "",
            chartOnly: false,
        });

        containerRef.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container" ref={containerRef}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default Mini_TradingViewWidget;
