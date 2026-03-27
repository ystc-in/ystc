import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Market Timings","description":"","frontmatter":{"title":"Market Timings","outline":"deep","prev":{"text":"Market Segments","link":"/trading-with-pav/market-segments"},"next":{"text":"Trading Chart","link":"/trading-with-pav/trading-chart"}},"headers":[],"relativePath":"trading-with-pav/market-timings.md","filePath":"trading-with-pav/market-timings.md"}');
const _sfc_main = { name: "trading-with-pav/market-timings.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="market-timings" tabindex="-1">Market Timings <a class="header-anchor" href="#market-timings" aria-label="Permalink to “Market Timings”">​</a></h1><ol><li><strong>Equities</strong></li></ol><ul><li>Pre-open :- 09:00am to 09:08 am</li><li>Regular trading session :- 09:15am to 15:30 pm</li><li>Closing Session :- 15.40pm to 16.00pm</li><li>Block Deal Session :- <ul><li>Morning Window - 08:45 AM to 09:00 AM.</li><li>Afternoon Window - 02:05 PM to 2:20 PM.</li></ul></li></ul><ol start="2"><li><strong>Equity Derivatives (F&amp;O)</strong></li></ol><ul><li>Same as Equities</li></ul><ol start="3"><li><strong>Commodity Derivatives (F&amp;O)</strong></li></ol><ul><li>Regular trading session :- 09:00am to 11:30 pm (after start of US daylight savings in Spring Season, 13 march 22)</li><li>Regular trading session :- 09:00am to 11:55 pm (after end of US daylight savings in Spring Season, 06 Nov 22)</li></ul><ol start="4"><li><strong>Currency Derivatives (F&amp;O)</strong></li></ol><ul><li>Regular trading session :- 09:00am to 05:00 pm</li></ul><div class="tip custom-block"><p class="custom-block-title"><strong>Note</strong>:</p><ul><li>The Exchange may, however, close the market on days other than the above schedule holidays or may open the market on days originally declared as holidays.</li><li>The Exchange may also extend, advance or reduce trading hours when its deems fit and necessary.</li><li>Track the NSE website for changes. <a href="https://www.nseindia.com/resources/exchange-communication-holidays" target="_blank" rel="noreferrer">NSE Website</a></li></ul></div><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to “Comments”">​</a></h2>', 11)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const marketTimings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  marketTimings as default
};
