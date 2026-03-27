import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, fv as _imports_1, fw as _imports_2, fx as _imports_3, fy as _imports_4, a as createTextVNode, fz as _imports_5, fA as _imports_6, fB as _imports_0 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trend Setup","description":"","frontmatter":{"title":"Trend Setup","outline":"deep","prev":{"text":"Volume Accumulation Setup","link":"/trading-with-pav/volume-accumulation-setup"},"next":{"text":"Rejection Setup","link":"/trading-with-pav/rejection-setup"}},"headers":[],"relativePath":"trading-with-pav/trend-setup.md","filePath":"trading-with-pav/trend-setup.md"}');
const _sfc_main = { name: "trading-with-pav/trend-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 9)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Trend-Setup-Long-01"
          })
        ], -1),
        createBaseVNode("p", null, "Trend Setup – Long Position", -1),
        createBaseVNode("p", null, "In the above chart you can see trending day on 8th. When applied Volume Profile to the trend you can see buyers momentarily had time to add to their position i.e. POC Zone 43413.55 to 43345.35 with POC line at 43379.45. As you can see when price came back on 9th @2:30 pm it bounced up 320 points from POC line.", -1),
        createBaseVNode("p", null, "The Above POC Zone also has 2 confluence to get long see the below chart for 1st confluence i.e. Resistance becomes Support. You can also see the trend with green arrows.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "Trend-Setup-Long-02"
          })
        ], -1),
        createBaseVNode("p", null, "Resistance become Support Confluence", -1),
        createBaseVNode("p", null, "The below chart shows 2nd confluence i.e. Fibonacci rejection at 61%.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "Trend-Setup-Long-04"
          })
        ], -1),
        createBaseVNode("p", null, "Fibonacci Rejection @61%", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_4,
            alt: "Trend-Setup-Long-03"
          })
        ], -1),
        createBaseVNode("p", null, "Resistance become Support plus Fibonacci rejection and Trend Setup – Long Position", -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createBaseVNode("h2", {
      id: "short-position",
      tabindex: "-1"
    }, [
      createTextVNode("Short Position "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#short-position",
        "aria-label": "Permalink to “Short Position”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_5,
            alt: "Trend-Setup-Short-01"
          })
        ], -1),
        createBaseVNode("p", null, "In the above chart you can see volume profile applied to downtrend from 21st to 22nd till 12:30 pm. Would you go short position on 26th touch to POC.", -1),
        createBaseVNode("p", null, "Always remember although market may take support or resistance multiple times you should only trade 1st touches. (according to analysis multiple) The first touch happened on 22nd at 2:15 pm.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_6,
            alt: "Trend-Setup-Short-02"
          })
        ], -1),
        createBaseVNode("p", null, "As you can see 1st touch is short and second broke the resistance and took support.", -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "That’s all for Trend Setup in next article will learn Rejection setup.", -1)),
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
const trendSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  trendSetup as default
};
