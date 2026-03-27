import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx, eW as _imports_0, eX as _imports_1 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trading Chart","description":"","frontmatter":{"title":"Trading Chart","outline":"deep","prev":{"text":"Market Timings","link":"/trading-with-pav/market-timings"},"next":{"text":"Anatomy of a Candlestick","link":"/trading-with-pav/anatomy-of-a-candlestick"}},"headers":[],"relativePath":"trading-with-pav/trading-chart.md","filePath":"trading-with-pav/trading-chart.md"}');
const _sfc_main = { name: "trading-with-pav/trading-chart.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="trading-chart" tabindex="-1">Trading Chart <a class="header-anchor" href="#trading-chart" aria-label="Permalink to “Trading Chart”">​</a></h1><p>A trading Chart is a chart which shows how the price moved during a session to a trader.</p><p>The below chart is called a Line chart where Price (Tick Value) is displayed on Y-axis and Time (Sec, Min, Hours, Days, Weeks, Months, Years) are shown on X-axis.</p><p><img src="' + _imports_0 + '" alt="Trading Chart"></p><p>Line chart provide significantly less information about price because it only connects the closing prices of the given interval. The line chart is ideal for higher time-frame analysis where a trader does not need to see all the details and just wants to get a sense of direction, analyze market flow and overall trend structure and RSI divergences.</p><p>Whereas line chart should be chosen over the candlestick charts because line charts provide a clear picture without any noise. However, in certain situations, when making trading decisions and fine-tuning trade parameters such as stop loss distance and location, the information of the candlestick charts are necessary to accurately estimate the level of volatility and placing trades.</p><p><img src="' + _imports_1 + '" alt="Candlestick Chart.webp"></p><p>The above chart shows Candlestick chart which originated in Japan over 100 years before the West developed the bar and point-and-figure charts. In the 1800s, a Japanese man named Homma discovered that, while there was a link between price and the [[Supply and Demand]] (Supply and Demand Link Later) of rice, the markets were strongly influenced by the emotions of traders.</p><p>Candlesticks show that emotion by visually representing the size of price moves with different colors. Traders use the candlesticks to make trading decisions based on regularly occurring patterns or using rejection patterns that help forecast the short-term direction of the price.</p><p>Nevertheless, line charts and candlestick charts can, and should be, used in combination by traders more often.</p><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to “Comments”">​</a></h2>', 11)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const tradingChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradingChart as default
};
