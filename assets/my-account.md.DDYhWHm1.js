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
    _cache[4] || (_cache[4] = createStaticVNode('<h2 id="donate" tabindex="-1">Donate <a class="header-anchor" href="#donate" aria-label="Permalink to “Donate”">​</a></h2><h3 id="💛-support-free-trading-education" tabindex="-1">💛 Support Free Trading Education <a class="header-anchor" href="#💛-support-free-trading-education" aria-label="Permalink to “💛 Support Free Trading Education”">​</a></h3><p>If you&#39;ve gained value from our free posts, webinars, or tools, consider making a small donation to help us continue delivering honest, independent trading education.</p><p>Your contribution helps fund:</p><ul><li>🎓 Our <strong>Free Market Introduction</strong> webinars</li><li>🧠 Premium <strong>Trading posts and strategies</strong></li><li>🛠️ Development of <strong>trading tools</strong> like Volume Profile &amp; VWAP</li></ul><p>👉 <a href="https://payments.cashfree.com/forms/ystcsponsor" target="_blank" rel="noreferrer">Donate Securely via Cashfree</a></p><div class="info custom-block"><p class="custom-block-title">Every contribution, big or small, helps us stay ad-free, reach more independent traders, and keep this platform accessible to all.</p><p>Thank you for your support!</p></div><h2 id="affiliate" tabindex="-1">Affiliate <a class="header-anchor" href="#affiliate" aria-label="Permalink to “Affiliate”">​</a></h2><p>We have a Affiliate opportuinity <a href="/affiliate">Click Here</a></p><h2 id="sponsor-ads" tabindex="-1">Sponsor Ads <a class="header-anchor" href="#sponsor-ads" aria-label="Permalink to “Sponsor Ads”">​</a></h2><p>If you want to advertise on this site <a href="/affiliate#sponsor-ads">Click Here</a></p>', 11))
  ]);
}
const myAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  myAccount as default
};
