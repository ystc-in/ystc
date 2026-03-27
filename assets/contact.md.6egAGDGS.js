import { _ as _export_sfc, c as createElementBlock, o as openBlock, j as createBaseVNode, a5 as createStaticVNode, a as createTextVNode } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Contact","description":"","frontmatter":{"title":"Contact","outline":"deep","prev":{"text":"About","link":"/about"},"next":{"text":"Team","link":"/team"}},"headers":[],"relativePath":"contact.md","filePath":"contact.md"}');
const _sfc_main = { name: "contact.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "contact-form",
      tabindex: "-1"
    }, [
      createTextVNode("Contact Form "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#contact-form",
        "aria-label": "Permalink to “Contact Form”"
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Fill the form below and will reach you within 12 or 24 hours.", -1),
    createBaseVNode("div", { class: "form-wrapper" }, [
      createBaseVNode("iframe", {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSdSQT5jB_y56Sf114js8OMzJ4nbG45BfC_TUU6gx3aM_cW9sA/viewform?embedded=true",
        class: "google-form-contact",
        allowfullscreen: ""
      }, "Loading…")
    ], -1),
    createStaticVNode('<h2 id="if-form-is-not-displayed" tabindex="-1">IF form is not displayed <a class="header-anchor" href="#if-form-is-not-displayed" aria-label="Permalink to “IF form is not displayed”">​</a></h2><p>If there was an error in displaying the form because of adbock or some any unknow reason. Please <a href="https://forms.gle/jZggWH9xEt11sMbr6" title="Please fill this form" target="_blank" rel="noreferrer">Click here</a></p><h2 id="sunday-holiday" tabindex="-1">Sunday Holiday <a class="header-anchor" href="#sunday-holiday" aria-label="Permalink to “Sunday Holiday”">​</a></h2>', 3)
  ])]);
}
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  contact as default
};
