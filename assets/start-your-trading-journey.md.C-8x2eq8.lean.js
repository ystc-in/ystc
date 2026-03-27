import { _ as _export_sfc, c as createElementBlock, o as openBlock, G as Fragment, H as renderList, j as createBaseVNode, a as createTextVNode, t as toDisplayString, u as useData, J as createVNode, k as unref } from "./chunks/framework.BI_fuOps.js";
import { N as NseMarquee, i as i18n } from "./chunks/theme.Cgb9Y4lE.js";
const _hoisted_1$1 = { class: "feature-list" };
const _sfc_main$2 = {
  __name: "FeatureList",
  props: ["features"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.features, (item) => {
          return openBlock(), createElementBlock("li", null, [
            _cache[0] || (_cache[0] = createBaseVNode("svg", {
              class: "feature-list-item-icon",
              viewBox: "0 0 1024 1024"
            }, [
              createBaseVNode("path", { d: "M512.506025 6.906294c-278.758842 0-505.57773 226.820935-505.57773 505.579777 0 278.797727 226.781026 505.576707 505.57773 505.576707 278.797727 0 505.57773-226.77898 505.57773-505.576707C1018.083755 233.727229 791.303752 6.906294 512.506025 6.906294L512.506025 6.906294zM807.507806 412.036287l-331.285149 334.883093c-0.081864 0.081864-0.246617 0.127913-0.334621 0.25378-0.12075 0.079818-0.12075 0.245593-0.246617 0.328481-2.644223 2.562359-5.915733 4.133134-8.977465 5.876847-1.527796 0.865717-2.771113 2.189875-4.387937 2.808976-4.962012 1.987261-10.213619 3.022847-15.473413 3.022847-5.296633 0-10.631128-1.035586-15.637142-3.105734-1.653663-0.700965-2.980891-2.109034-4.551666-2.978844-3.061732-1.736551-6.244214-3.269463-8.895601-5.872754-0.081864-0.079818-0.125867-0.251733-0.207731-0.333598-0.081864-0.119727-0.245593-0.119727-0.328481-0.246617l-162.930813-167.443593c-15.928784-16.383132-15.555278-42.569538 0.827855-58.499345 16.382109-15.889899 42.531676-15.597233 58.504462 0.827855l133.51076 137.193639L748.712725 353.823468c16.054651-16.257266 42.285059-16.419971 58.505485-0.327458C823.391565 369.5875 823.55427 395.782092 807.507806 412.036287L807.507806 412.036287zM807.507806 412.036287" })
            ], -1)),
            createTextVNode(" " + toDisplayString(item), 1)
          ]);
        }), 256))
      ]);
    };
  }
};
const FeatureList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0cbb734f"]]);
const _hoisted_1 = { class: "customize" };
const _hoisted_2 = { class: "customize-marquee" };
const _hoisted_3 = { class: "customize-title" };
const _hoisted_4 = { class: "customize-content" };
const _hoisted_5 = {
  href: "/trading-with-price-action-volume",
  class: "customize-content-item customize-content-free-item"
};
const _hoisted_6 = { class: "customize-content-item-title-container" };
const _hoisted_7 = { class: "customize-content-item-title" };
const _hoisted_8 = { class: "customize-content-item-sub-title" };
const _hoisted_9 = { class: "customize-content-item-price" };
const _hoisted_10 = { class: "customize-content-item-tip" };
const _hoisted_11 = {
  href: "/volume-profile-tools",
  class: "customize-content-item customize-content-qa-item"
};
const _hoisted_12 = { class: "customize-content-item-title-container" };
const _hoisted_13 = { class: "customize-content-item-title" };
const _hoisted_14 = { class: "customize-content-item-sub-title" };
const _hoisted_15 = { class: "customize-content-item-price" };
const _hoisted_16 = { style: { "font-size": "14px", "padding-right": "6px", "padding-top": "4px", "font-weight": "normal" } };
const _hoisted_17 = { class: "customize-content-item-tip" };
const _hoisted_18 = {
  href: "/trading-with-pav-course",
  class: "customize-content-item customize-content-custom-item"
};
const _hoisted_19 = { class: "customize-content-item-title-container" };
const _hoisted_20 = { class: "customize-content-item-title" };
const _hoisted_21 = { class: "customize-content-item-sub-title" };
const _hoisted_22 = { class: "customize-content-item-price" };
const _hoisted_23 = { class: "customize-content-item-tip" };
const _sfc_main$1 = {
  __name: "index",
  setup(__props) {
    const { lang } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(NseMarquee)
        ]),
        createBaseVNode("h1", _hoisted_3, toDisplayString(unref(i18n)("view_customize_title", unref(lang))), 1),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("a", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("h3", _hoisted_7, toDisplayString(unref(i18n)("view_customize_free_title", unref(lang))), 1),
              createBaseVNode("p", _hoisted_8, toDisplayString(unref(i18n)("view_customize_free_desc", unref(lang))), 1),
              createBaseVNode("p", _hoisted_9, toDisplayString(unref(i18n)("view_customize_free_price", unref(lang))), 1)
            ]),
            createVNode(FeatureList, {
              features: unref(i18n)("view_customize_free_features", unref(lang))
            }, null, 8, ["features"]),
            createBaseVNode("p", _hoisted_10, toDisplayString(unref(i18n)("view_customize_free_tip", unref(lang))), 1)
          ]),
          createBaseVNode("a", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("h3", _hoisted_13, toDisplayString(unref(i18n)("view_customize_sponsor_title", unref(lang))), 1),
              createBaseVNode("p", _hoisted_14, toDisplayString(unref(i18n)("view_customize_sponsor_desc", unref(lang))), 1),
              createBaseVNode("p", _hoisted_15, [
                createBaseVNode("span", _hoisted_16, toDisplayString(unref(i18n)("view_customize_sponsor_sponsor", unref(lang))), 1),
                createTextVNode(" " + toDisplayString(unref(i18n)("view_customize_sponsor_price", unref(lang))), 1)
              ])
            ]),
            createVNode(FeatureList, {
              features: unref(i18n)("view_customize_sponsor_features", unref(lang))
            }, null, 8, ["features"]),
            createBaseVNode("p", _hoisted_17, toDisplayString(unref(i18n)("view_customize_sponsor_tip", unref(lang))), 1)
          ]),
          createBaseVNode("a", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("h3", _hoisted_20, toDisplayString(unref(i18n)("view_customize_custom_title", unref(lang))), 1),
              createBaseVNode("p", _hoisted_21, toDisplayString(unref(i18n)("view_customize_custom_desc", unref(lang))), 1),
              createBaseVNode("p", _hoisted_22, toDisplayString(unref(i18n)("view_customize_custom_price", unref(lang))), 1)
            ]),
            createVNode(FeatureList, {
              features: unref(i18n)("view_customize_custom_features", unref(lang))
            }, null, 8, ["features"]),
            createBaseVNode("p", _hoisted_23, toDisplayString(unref(i18n)("view_customize_custom_tip", unref(lang))), 1)
          ])
        ])
      ]);
    };
  }
};
const Customize = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9ce51274"]]);
const __pageData = JSON.parse('{"title":"Start Your Trading Journey","description":"","frontmatter":{"title":"Start Your Trading Journey","layout":"page","sidebar":false},"headers":[],"relativePath":"start-your-trading-journey.md","filePath":"start-your-trading-journey.md"}');
const __default__ = { name: "start-your-trading-journey.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Customize)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
