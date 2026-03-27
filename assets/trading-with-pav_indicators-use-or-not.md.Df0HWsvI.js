import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Indicators - Use or Not","description":"","frontmatter":{"title":"Indicators - Use or Not","outline":"deep","prev":{"text":"Price Action","link":"/trading-with-pav/price-action"},"next":{"text":"How to Spot Institutional Activity With PRICE ACTION","link":"/trading-with-pav/how-to-spot-institutional-activity-with-price-action"}},"headers":[],"relativePath":"trading-with-pav/indicators-use-or-not.md","filePath":"trading-with-pav/indicators-use-or-not.md"}');
const _sfc_main = { name: "trading-with-pav/indicators-use-or-not.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="indicators-use-or-not" tabindex="-1">Indicators - Use or Not <a class="header-anchor" href="#indicators-use-or-not" aria-label="Permalink to “Indicators - Use or Not”">​</a></h1><p>In previous article on TradingView built in Indicators we discussed how to use or learn, this article will discuss on Indicators – Use or Not ?</p><p>In the previous article, we learnt that we can predict institutional activity and market moves with<br> PRICE ACTION and VOLUME. What won’t help you whatsoever in predicting future market moves,<br> are indicators at least the traditional ones.</p><p>Standard indicators only show you historical development but fail to foresee future movements.<br> I don’t want to get too mathematical in here, but</p><ul><li>if you look at how the most common indicators are calculated, you will see that they work with only two variables: <ol><li>time,</li><li>historical price.</li></ol></li></ul><p>That‘s it. Nothing more. All those indicators are only variations and different visualizations of time and historical price. If you remember in the previous TradingView Indicator article we looked at one such Moving Average Indicator calculation.</p><p>There is no Holy Grail among them, and they are all just lines in your charts that add absolutely no value. If you use for example simple EMA indicator (exponential moving average) to help you identify which way the trend goes, then I don’t really have anything against it.</p><p>However, if you are building strategies based on the indicators, please stop. It will never work. Believe me; I have tried both ends of this rope. I was the guy who tried all the indicators and who was searching for the Holy Grail day and night.</p><p>Later on, I found out that some of them can be used to conform your Price Action, Volume Profile based S&amp;R strategies.</p><p>But not to trade them alone. So in conclusion use indicators but to conform the same verdict you came with analysis also back-test (learn Later) it. We also use some of the indicators to validate the trade premise later.</p><p>So that’s it for Indicators – Use or Not ? In next article will get to the exciting part of the course i.e. How to spot institutional activity with PRICE ACTION?</p><h2 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to “Video”">​</a></h2>', 12)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/GYLldem59GE",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: ""
    }, null, -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "The above video explains this article in hindi language.", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("h2", {
      id: "comments",
      tabindex: "-1"
    }, [
      createTextVNode("Comments "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#comments",
        "aria-label": "Permalink to “Comments”"
      }, "​")
    ], -1)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const indicatorsUseOrNot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  indicatorsUseOrNot as default
};
