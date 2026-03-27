import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, bc as _imports_5, bd as _imports_1 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"BPB Setup","description":"","frontmatter":{"title":"BPB Setup","outline":"deep","prev":{"text":"BOF Setup","link":"/trading-with-pav/bof-setup"},"next":{"text":"PB Setup","link":"/trading-with-pav/pb-setup"}},"headers":[],"relativePath":"trading-with-pav/bpb-setup.md","filePath":"trading-with-pav/bpb-setup.md"}');
const _sfc_main = { name: "trading-with-pav/bpb-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "bpb-setup",
      tabindex: "-1"
    }, [
      createTextVNode("BPB Setup "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#bpb-setup",
        "aria-label": "Permalink to “BPB Setup”"
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "Lets look at our 3rd trading setup i.e. BPB Setup", -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "The BPB setup is a Breakout of support or resistance which shows price acceptance in the new area, through price holding beyond the breakout point and establishing a weaker pullback."),
          createBaseVNode("li", null, "The support or resistance will be higher timeframe S/R or the upper or lower boundaries of a sideways trading range."),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "When our principles for future trend direction lead us to expect an area of support or resistance to possibly break, we watch price action closely on any breakout for further signs of weakness.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "Weakness on the breakout will alert us to a possible BOF opportunity.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "Weakness on a pullback will alert us to a possible BPB opportunity.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "A trade is only entered if the setup then provides acceptable R:R parameters and a wholesale entry trigger.")
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_5,
            alt: "BPB-Setup"
          })
        ], -1),
        createBaseVNode("p", null, "Breakout Pullback Setup (BPB)", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "This setup works due to the tendency for many traders to automatically fade a breakout, in expectation of its failure."),
          createBaseVNode("li", null, "If that failure is not sufficiently supported by other traders, any pullback will be weak and will itself fail."),
          createBaseVNode("li", null, "A failed breakout-failure is a breakout pullback"),
          createBaseVNode("li", null, "(failed BOF = BPB)."),
          createBaseVNode("li", null, "Those trading the weak pullback (BOF) will become trapped should the breakout continue."),
          createBaseVNode("li", null, "Their exit orderflow will assist in pushing the breakout to new highs/lows."),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "Note"),
            createTextVNode(": "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, "Any BOF setup which you enter prior to crossing back over the S/R level must be managed quite aggressively."),
              createBaseVNode("li", null, "Remain alert for signs of weakness, and ready to scratch your position and reverse, should a BPB opportunity present itself.")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "BPB-Setup-01"
          })
        ], -1),
        createBaseVNode("p", null, "BPB – Support becomes Resistance", -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "The above image you see in the left 15 min chart Support broke which become resistance and plus it also was downtrend pullback. In the next article will learn PB Setup.", -1)),
    _cache[4] || (_cache[4] = createBaseVNode("h2", {
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
const bpbSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  bpbSetup as default
};
