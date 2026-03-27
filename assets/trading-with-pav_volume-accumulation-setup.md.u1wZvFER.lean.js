import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, a as createTextVNode, g9 as _imports_4, ga as _imports_5, gb as _imports_0, gc as _imports_1, gd as _imports_2, ge as _imports_3 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Volume Accumulation Setup","description":"","frontmatter":{"title":"Volume Accumulation Setup","outline":"deep","prev":{"text":"Volume Profile – Trading Setups","link":"/trading-with-pav/volume-profile-trading-setups"},"next":{"text":"Trend Setup","link":"/trading-with-pav/trend-setup"}},"headers":[],"relativePath":"trading-with-pav/volume-accumulation-setup.md","filePath":"trading-with-pav/volume-accumulation-setup.md"}');
const _sfc_main = { name: "trading-with-pav/volume-accumulation-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 12)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "There are two reasons (factors) why the price reacts to the volume zones so well."),
          createBaseVNode("li", null, [
            createTextVNode("This reasoning doesn’t apply only to the setup #1, but also to all the other volume setups. "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createBaseVNode("strong", null, "Reason"),
                createTextVNode(" #"),
                createBaseVNode("strong", null, "1"),
                createTextVNode(": Strong buyers/sellers who were accumulating their positions are likely to defend their positions and their interests.")
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("strong", null, "Reason"),
                createTextVNode(" #"),
                createBaseVNode("strong", null, "2"),
                createTextVNode(": Nobody wants to risk a fight with strong and aggressive buyers/sellers.")
              ])
            ])
          ]),
          createBaseVNode("li", null, "It is the combination of these two factors , that drives the price away from the support/resistance zones.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_4,
            alt: "Long-Accumulation-Setup-Logic"
          })
        ], -1),
        createBaseVNode("p", null, "Accumulation Setup: Long Position Logic", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_5,
            alt: "Short-Accumulation-Setup-Logic"
          })
        ], -1),
        createBaseVNode("p", null, "Accumulation Setup: Short Position Logic", -1)
      ])]),
      _: 1
    }),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "In the next article we learn about trend setup.", -1)),
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
const volumeAccumulationSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  volumeAccumulationSetup as default
};
