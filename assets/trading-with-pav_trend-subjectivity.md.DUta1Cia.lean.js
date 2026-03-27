import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a5 as createStaticVNode, a as createTextVNode, w as withCtx, fC as _imports_0 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trend Subjectivity","description":"","frontmatter":{"title":"Trend Subjectivity","outline":"deep","prev":{"text":"Sideways Trend","link":"/trading-with-pav/sideways-trend"},"next":{"text":"LTF – Strength & Weakness","link":"/trading-with-pav/ltf-strength-weakness"}},"headers":[],"relativePath":"trading-with-pav/trend-subjectivity.md","filePath":"trading-with-pav/trend-subjectivity.md"}');
const _sfc_main = { name: "trading-with-pav/trend-subjectivity.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "trend-subjectivity",
      tabindex: "-1"
    }, [
      createTextVNode("Trend Subjectivity "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#trend-subjectivity",
        "aria-label": "Permalink to “Trend Subjectivity”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "Lets discuss about applying Trend Subjectivity in this article.", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("As we discovered earlier, the market cannot be defined by fixed rules or mathematical models. "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, "It’s an emotional beast.")
            ])
          ]),
          createBaseVNode("li", null, "Every attempt to objectively define a trend will break down at some point in time."),
          createBaseVNode("li", null, "Regardless of how you define the trend, at some point in time it will produce a pullback that goes just far enough to trigger an objective trend definition change, before reversing to continue in the original trend direction."),
          createBaseVNode("li", null, "Subjective definitions are superior, although difficult for newer traders to accept."),
          createBaseVNode("li", null, "A pullback against a trend that triggers an objective trend definition change, but then fails, may not change the subjective trend definition.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: "Trend-Subjectivity"
          })
        ], -1),
        createBaseVNode("p", null, "Uptrend Def broke still uptrend Continuation", -1)
      ])]),
      _: 1
    }),
    _cache[2] || (_cache[2] = createStaticVNode("", 4)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const trendSubjectivity = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  trendSubjectivity as default
};
