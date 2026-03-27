import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, cN as _imports_6, cO as _imports_1, cP as _imports_2, cQ as _imports_3 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"PB Setup","description":"","frontmatter":{"title":"PB Setup","outline":"deep","prev":{"text":"BPB Setup","link":"/trading-with-pav/bpb-setup"},"next":{"text":"CPB Setup","link":"/trading-with-pav/cpb-setup"}},"headers":[],"relativePath":"trading-with-pav/pb-setup.md","filePath":"trading-with-pav/pb-setup.md"}');
const _sfc_main = { name: "trading-with-pav/pb-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "pb-setup",
      tabindex: "-1"
    }, [
      createTextVNode("PB Setup "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#pb-setup",
        "aria-label": "Permalink to “PB Setup”"
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "Lets look at our 4th trading setup i.e. PB Setup.", -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "A PB is a simple (single-leg) Pullback within a Trend."),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "When our principles for future trend direction lead us to expect continuation of a current up or downtrend, we watch price action closely on any pullback for signs of weakness.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "Weakness on the pullback will alert us to a possible PB opportunity.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "A trade is only entered if the setup then provides acceptable R:R parameters and a wholesale entry trigger.")
          ]),
          createBaseVNode("li", null, "This setup works due to the tendency for MANY traders to attempt to pick reversal points."),
          createBaseVNode("li", null, "While everyone says they understand the saying, “the trend is your friend”, human nature has the majority of us always seeking counter-trend opportunity.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_6,
            alt: "PB-Setup"
          })
        ], -1),
        createBaseVNode("p", null, "PB Setup", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "The reality is that the market moves in the direction of strength and against the direction of weakness."),
          createBaseVNode("li", null, "We watch these weaker pullbacks for signs of failure, which will trap the countertrend traders in a losing position and force their exit."),
          createBaseVNode("li", null, "Their exit orderflow helps take our PB trade to profits."),
          createBaseVNode("li", null, "While a pullback may fail at any point, we watch price closely at areas of prior swing H/L."),
          createBaseVNode("li", null, "These areas will be sources of potential new order-flow and will provide clues as to the strength or weakness of the pullback and the timing of any failure.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "PB-Setup-Key-Areas"
          })
        ], -1),
        createBaseVNode("p", null, "Key Areas For Pullback Failure Clues", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "As shown in figure above. This is not to say that these are the only places we expect pullback failure and trade entry."),
          createBaseVNode("li", null, "Simply that we watch these areas closely, observing the interaction of price with these swing H/L areas in the search for clues as to the way forward."),
          createBaseVNode("li", null, "Ongoing bar by bar volume analysis, Fibonacci Retracement and Rejection bars of price action with volume (taught in VOL 3) will tell you when the pullback is failing,"),
          createBaseVNode("li", null, "And monitoring of the lower timeframe chart will provide your trade entry opportunity, should it arise before these swing H/L areas.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "PB-Setup-01-Chart"
          })
        ], -1),
        createBaseVNode("p", null, "PB Within an Uptrend 1", -1),
        createBaseVNode("p", null, "In the above chart you can see the red arrow where the pullback is with low volume we get 2 conformation 1 is with Fibonacci retracement of 38~61% zone and 2nd is its support zone.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "PB-Setup-02-Chart"
          }),
          createTextVNode(" PB Within an Uptrend 2")
        ], -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "In the above chart you can see the pullback of the uptrend with low volume which retraces the Fibonacci retracement of 38% and at the same location we got support zone. That’s our cue to enter long similarly for downtrend but reverse.", -1)),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "That concludes our PB setup in the next we see the last CPB Setup.", -1)),
    _cache[5] || (_cache[5] = createBaseVNode("h2", {
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
const pbSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pbSetup as default
};
