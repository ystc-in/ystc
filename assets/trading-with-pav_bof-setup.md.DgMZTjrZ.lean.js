import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a5 as createStaticVNode, a as createTextVNode, w as withCtx, b7 as _imports_4, b8 as _imports_1, b9 as _imports_2, ba as _imports_3, bb as _imports_4$1 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"BOF Setup","description":"","frontmatter":{"title":"BOF Setup","outline":"deep","prev":{"text":"TST Setup","link":"/trading-with-pav/tst-setup"},"next":{"text":"BPB Setup","link":"/trading-with-pav/bpb-setup"}},"headers":[],"relativePath":"trading-with-pav/bof-setup.md","filePath":"trading-with-pav/bof-setup.md"}');
const _sfc_main = { name: "trading-with-pav/bof-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "bof-setup",
      tabindex: "-1"
    }, [
      createTextVNode("BOF Setup "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#bof-setup",
        "aria-label": "Permalink to “BOF Setup”"
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "Lets look at our 2nd trading setup i.e. BOF Setup.", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "The BOF setup is a Breakout of Support or Resistance which Fails."),
      createBaseVNode("li", null, "The support or resistance will be higher timeframe S/R or the upper or lower boundaries of a sideways trading range."),
      createBaseVNode("li", null, "In a weak trend environment it may also provide a counter-trend trading opportunity at a swing H/L (however this is a lower probability opportunity)"),
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "When our principles for future trend direction lead us to expect an area of support or resistance to possibly break, we watch price action closely on any breakout for further signs of weakness. Weakness on the breakout will alert us to a possible BOF opportunity.")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "A trade is only entered if the setup then provides acceptable R:R parameters and a wholesale entry trigger.")
      ])
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_4,
            alt: "BOF-Setup"
          })
        ], -1),
        createBaseVNode("p", null, "Breakout Failure Setup (BOF)", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "This setup works due to the break through S/R attracting the breakout traders."),
          createBaseVNode("li", null, "However, the breakout is unable to attract sufficient new orderflow to continue the move and therefore shows weakness."),
          createBaseVNode("li", null, "The breakout traders are trapped."),
          createBaseVNode("li", null, "Failure back to the area prior to S/R forces them to exit their position, adding orderflow against the original breakout direction."),
          createBaseVNode("li", null, "We aim to trade the failure, back into the area prior to S/R.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "BOF-Setup-01"
          })
        ], -1),
        createBaseVNode("p", null, "In the above image we can see the sideways action on daily chart of SBI which lasted 13 days which is huge. Price returned back to that area after 4 long months. So we marked S/R line and zoom in on the day it touched on Intraday timeframe.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "BOF-Setup-02"
          })
        ], -1),
        createBaseVNode("p", null, "As you can see the penetration of support with long lower wick rejection almost all the encounters which is enough to tell us that buyers are aggressive in this region. All the LLW candles have extreme high volume.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "BOF-Setup-03"
          })
        ], -1),
        createBaseVNode("p", null, "The above is TTF 5 min chart here you see the same picture of rejection but we need conclusive evidence of bullishness in these location. So we need to zoom in to 2 min timeframe.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_4$1,
            alt: "BOF-Setup-04"
          })
        ], -1),
        createBaseVNode("p", null, "In the above 2 min LTF chart we can finally see on 1st rejection there is stopping volume and then 2nd time same area rejection this is the sign to enter long position.", -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createStaticVNode("", 3)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const bofSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  bofSetup as default
};
