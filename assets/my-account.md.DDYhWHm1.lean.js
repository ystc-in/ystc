import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a5 as createStaticVNode, a as createTextVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Account info","description":"","frontmatter":{"title":"Account info","outline":"deep","sidebar":true,"prev":{"text":"Apply Free Market Introduction","link":"/free-market-webinar"},"next":{"text":"VIP Access","link":"/trading-with-price-action-volume"}},"headers":[],"relativePath":"my-account.md","filePath":"my-account.md"}');
const _sfc_main = { name: "my-account.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FirebaseLogin = resolveComponent("FirebaseLogin");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "my-account",
      tabindex: "-1"
    }, [
      createTextVNode("My Account "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#my-account",
        "aria-label": "Permalink to “My Account”"
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("hr", null, null, -1)),
    _cache[3] || (_cache[3] = createBaseVNode("div", { class: "tip custom-block" }, [
      createBaseVNode("p", { class: "custom-block-title" }, '🎓 Create your free account to unlock Modules 3–8 of our "Trading with Price Action & Volume" Course.'),
      createBaseVNode("p", null, "NO credit card 💳. NO spam 📩. Just real-world 🗺️ trading education 📈.")
    ], -1)),
    createVNode(_component_FirebaseLogin),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "warning custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "Once logged in,"),
          createBaseVNode("p", null, [
            createTextVNode("To start or continue learning. "),
            createBaseVNode("br"),
            createTextVNode("Go to the "),
            createBaseVNode("strong", null, "Course"),
            createTextVNode(),
            createBaseVNode("a", { href: "/trading-with-price-action-volume" }, [
              createBaseVNode("strong", null, "VIP Access")
            ]),
            createTextVNode(" page. "),
            createBaseVNode("br"),
            createTextVNode("See how deep the 🐇🕳️ really goes.")
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createStaticVNode("", 11))
  ]);
}
const myAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  myAccount as default
};
