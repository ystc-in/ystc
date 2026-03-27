import { d as defineComponent, u as useData, c as createElementBlock, o as openBlock, G as Fragment, H as renderList, j as createBaseVNode, t as toDisplayString, k as unref, _ as _export_sfc, J as createVNode, a as createTextVNode } from "./chunks/framework.BI_fuOps.js";
const data = JSON.parse('[{"title":"Stop Losses – My Biggest Downfall","url":"/post/trading-process-and-strategy/stop-losses-my-biggest-downfall","date":{"time":1758456000000,"string":"September 21, 2025"},"category":"trading-process-and-strategy"},{"title":"Dealing With Market Uncertainty","url":"/post/trading-process-and-strategy/dealing-with-market-uncertainty","date":{"time":1757246400000,"string":"September 7, 2025"},"category":"trading-process-and-strategy"},{"title":"Trading Psychology – Doubt","url":"/post/trader/trading-psychology-doubt","date":{"time":1756036800000,"string":"August 24, 2025"},"category":"trader"},{"title":"Understanding Candles - Open, High, Low, Close","url":"/post/trading-concepts/understanding-candles-open-high-low-close","date":{"time":1754827200000,"string":"August 10, 2025"},"category":"trading-concepts"},{"title":"Trading Posts Categories Form Now","url":"/post/other/trading-posts-categories-form-now","date":{"time":1753963200000,"string":"July 31, 2025"},"category":"Other"},{"title":"Empowering Retail Traders - The Mission Behind YS Trading Coach","url":"/post/other/empowering-retail-traders-the-mission-behind-ys-trading-coach","date":{"time":1753876800000,"string":"July 30, 2025"},"category":"Other"},{"title":"The Holy Grail Secret to Trading Success","url":"/post/trading-business/the-holy-grail-secret-to-trading-success","date":{"time":1753704000000,"string":"July 28, 2025"},"category":"Trading Business"}]');
const _hoisted_1 = { class: "blog-list" };
const _hoisted_2 = ["datetime"];
const _hoisted_3 = { class: "title" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "category" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogIndex",
  setup(__props) {
    const { site } = useData();
    function getDateTime(time) {
      return new Date(time).toISOString();
    }
    function withBase(path) {
      return site.value.base + path.replace(/^\//, "");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data), (post) => {
          return openBlock(), createElementBlock("li", {
            key: post.url,
            class: "blog-entry"
          }, [
            createBaseVNode("article", null, [
              createBaseVNode("time", {
                datetime: getDateTime(post.date.time)
              }, toDisplayString(post.date.string), 9, _hoisted_2),
              createBaseVNode("h2", _hoisted_3, [
                createBaseVNode("a", {
                  href: withBase(post.url)
                }, toDisplayString(post.title), 9, _hoisted_4)
              ]),
              createBaseVNode("div", _hoisted_5, "🗂️ " + toDisplayString(post.category), 1)
            ])
          ]);
        }), 128))
      ]);
    };
  }
});
const BlogIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ed2b3a53"]]);
const __pageData = JSON.parse('{"title":"Trading Posts","description":"","frontmatter":{"title":"Trading Posts","outline":"deep","prev":{"text":"Buy Volume Profile","link":"/volume-profile-tools"},"next":{"text":"VIP Access (Learn yourself)","link":"/trading-with-price-action-volume"}},"headers":[],"relativePath":"posts.md","filePath":"posts.md"}');
const __default__ = { name: "posts.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", {
          id: "latest-trading-posts",
          tabindex: "-1"
        }, [
          createTextVNode("Latest Trading Posts "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#latest-trading-posts",
            "aria-label": "Permalink to “Latest Trading Posts”"
          }, "​")
        ], -1)),
        createVNode(BlogIndex)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
