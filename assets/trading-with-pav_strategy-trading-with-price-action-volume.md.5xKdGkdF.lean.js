import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, a as createTextVNode, e5 as _imports_0, e6 as _imports_1, e7 as _imports_2 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Strategy – Trading with Price Action Volume","description":"","frontmatter":{"title":"Strategy – Trading with Price Action Volume","outline":"deep","prev":{"text":"Principles of Future Trend Direction","link":"/trading-with-pav/principles-of-future-trend-direction"},"next":{"text":"TST Setup","link":"/trading-with-pav/tst-setup"}},"headers":[],"relativePath":"trading-with-pav/strategy-trading-with-price-action-volume.md","filePath":"trading-with-pav/strategy-trading-with-price-action-volume.md"}');
const _sfc_main = { name: "trading-with-pav/strategy-trading-with-price-action-volume.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 21)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "tip custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "Remember"),
          createBaseVNode("p", null, "There are 5 Basic (primary) PRICE ACTION Setups."),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createBaseVNode("p", null, "3 which occur as price interacts with levels of Support or Resistance:"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("ol", null, [
                    createBaseVNode("li", null, "TST – A Test of support or resistance which is expected to Hold.")
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("ol", { start: "2" }, [
                    createBaseVNode("li", null, "BOF – A Breakout Failure, price breaches area of support or resistance & then Reverses.")
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("ol", { start: "3" }, [
                    createBaseVNode("li", null, "BPB – A Breakout Pullback, price breaches area of support or resistance and it Holds.")
                  ])
                ])
              ])
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("p", null, "2 which occur within a Trend"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("ol", { start: "4" }, [
                    createBaseVNode("li", null, "PB – A simple (single-leg) Pullback within a Trend.")
                  ])
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("ol", { start: "5" }, [
                    createBaseVNode("li", null, "CPB – A Complex Pullback (multi-swing or extended duration) within a Trend.")
                  ])
                ])
              ])
            ])
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "In the next article will start with TST Setup.", -1)),
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
const strategyTradingWithPriceActionVolume = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  strategyTradingWithPriceActionVolume as default
};
