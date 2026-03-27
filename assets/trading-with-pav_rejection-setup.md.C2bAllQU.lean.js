import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, dv as _imports_1, dw as _imports_3, a as createTextVNode, dx as _imports_0, dy as _imports_2 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Rejection Setup","description":"","frontmatter":{"title":"Rejection Setup","outline":"deep","prev":{"text":"Trend Setup","link":"/trading-with-pav/trend-setup"},"next":{"text":"Reversal trades","link":"/trading-with-pav/reversal-trades"}},"headers":[],"relativePath":"trading-with-pav/rejection-setup.md","filePath":"trading-with-pav/rejection-setup.md"}');
const _sfc_main = { name: "trading-with-pav/rejection-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 11)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "Basically we look for Short Position when price comes back to POC of Higher price rejection as shown below.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Rejection-of-Higher-Price-Short-Position"
          })
        ], -1),
        createBaseVNode("p", null, "Volume profile on Rejection of Higher Price", -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createStaticVNode("", 5)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("p", null, "Basically we look for Long Position when price comes back to POC of Lower price rejection as shown below.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "Rejection-of-Lower-Price-Long-Position"
          })
        ], -1),
        createBaseVNode("p", null, "Volume profile on Rejection of Lower Price (Only applied on Heavy volume)", -1),
        createBaseVNode("p", null, "In the above example because rejection angle was not sharp when price goes up we apply Volume Profile only to heaviest volume as shown in the image.", -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "Thatâ€™s all for this setup and remember this setup is my least favorite so do through back-test of this setup. Next is reversal trades.", -1)),
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
const rejectionSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  rejectionSetup as default
};
