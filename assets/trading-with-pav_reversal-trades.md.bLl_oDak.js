import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, dz as _imports_0, dA as _imports_1, dB as _imports_2 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Reversal trades","description":"","frontmatter":{"title":"Reversal trades","outline":"deep","prev":{"text":"Rejection Setup","link":"/trading-with-pav/rejection-setup"},"next":{"text":"VWAP","link":"/trading-with-pav/vwap"}},"headers":[],"relativePath":"trading-with-pav/reversal-trades.md","filePath":"trading-with-pav/reversal-trades.md"}');
const _sfc_main = { name: "trading-with-pav/reversal-trades.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "reversal-trades",
      tabindex: "-1"
    }, [
      createTextVNode("Reversal trades "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#reversal-trades",
        "aria-label": "Permalink to “Reversal trades”"
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "In this article will see what the heck are reversal trades about.", -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Sometimes"),
              createTextVNode(", the price doesn’t react to a Volume-based Support/Resistance Zone at all and just shoots past it into a Stop-loss.")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("This happens from time to time. Having a "),
              createBaseVNode("strong", null, "losing trade"),
              createTextVNode(" is also part of "),
              createBaseVNode("strong", null, "trading"),
              createTextVNode(". However, there is still one thing you can do.")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Remember"),
              createTextVNode(" “Support becomes Resistance (and vice versa)“ ? You can apply this method also to all the "),
              createBaseVNode("strong", null, "volume setups"),
              createTextVNode("!")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, "So, whenever the price doesn’t react to any of the volume-based setups, and runs into a Stop-loss, then you just wait until the price returns to your original Support/Resistance level.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createTextVNode("When it hits the level, you enter a "),
              createBaseVNode("strong", null, "reversal position"),
              createTextVNode(" – this means that if you originally went long, your new reversal trade will be a short (and vice versa).")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Important notice"),
              createTextVNode(":")
            ]),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createTextVNode("An important thing about "),
                createBaseVNode("strong", null, "reversal trades"),
                createTextVNode(" is that "),
                createBaseVNode("strong", null, "the price must not respect"),
                createTextVNode(" your "),
                createBaseVNode("strong", null, "original support/resistance level at all and it must shoot past it"),
                createTextVNode(".")
              ]),
              createBaseVNode("li", null, [
                createTextVNode("If for example, the price reacts to your level, only by few points before it, then "),
                createBaseVNode("strong", null, "do not"),
                createTextVNode(" take the "),
                createBaseVNode("strong", null, "reversal"),
                createTextVNode(".")
              ]),
              createBaseVNode("li", null, [
                createTextVNode("In such a case the "),
                createBaseVNode("strong", null, "level worked"),
                createTextVNode(", only a "),
                createBaseVNode("strong", null, "bit sooner"),
                createTextVNode(".")
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "Changing your bias"),
              createTextVNode(":")
            ]),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, "Talking a reversal trade is not an easy thing to do, at least not for your mind."),
              createBaseVNode("li", null, "The reason is that when you enter a trade, you trust it will work – you are biased. When the price goes against the original bias, people tend to hope, pray and they still trust their trade."),
              createBaseVNode("li", null, "They are unable to admit that they were wrong. Even when they take a Stoploss, they believe that the price will eventually turn and that they were right."),
              createBaseVNode("li", null, [
                createTextVNode("Because of this, "),
                createBaseVNode("strong", null, "the hardest thing about reversal trades is changing your bias quickly"),
                createTextVNode(".")
              ]),
              createBaseVNode("li", null, "So, for example, when you enter a short position, you believe the price will go down, you are short biased. When you take a Stoploss, then you should immediately change your mind to be long biased."),
              createBaseVNode("li", null, "This is easier said than done! Our advice is to practice changing your bias by entering all reversal trades with a small position at first."),
              createBaseVNode("li", null, "When you see how nicely reversal trades work, then you will gain confidence and changing your bias will become easier for you.")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, "Lets look at an example below", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: "Reversal-Trades-01"
          })
        ], -1),
        createBaseVNode("p", null, "Rejection Setup Lower Price – Long Position", -1),
        createBaseVNode("p", null, "As shown in above chart there is rejection setup of Lower price which means we wait for price to come back to POC to enter LONG.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Reversal-Trades-02"
          })
        ], -1),
        createBaseVNode("p", null, "Rejection Setup Failed", -1),
        createBaseVNode("p", null, "But price went through POC with our SL hit and remained in rotation below POC for quite some time now as we discuss above to only get into opposite trade if price shoot past it our POC zone and wait until the price returns to your POC.", -1),
        createBaseVNode("p", null, [
          createTextVNode("Here it didn’t happened but still with our new "),
          createBaseVNode("a", {
            href: "https://ystc.in/trading-with-pav/trade-management/#after-entry-bar-by-bar-volume-analysis",
            target: "_blank",
            rel: "noreferrer"
          }, "bar by bar volume analysis"),
          createTextVNode(" we can see that its "),
          createBaseVNode("a", {
            href: "https://ystc.in/trading-with-pav/vpa-building-the-picture/#upper-wicks-at-resistancesupply",
            target: "_blank",
            rel: "noreferrer"
          }, "Upper wicks at resistance"),
          createTextVNode(" with increasing volume which is why we enter the Short Trade.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "Reversal-Trades-03"
          })
        ], -1),
        createBaseVNode("p", null, "Reversal Trade", -1),
        createBaseVNode("p", null, "As shown in the above chart our reversal trade was success do mind your bias this need practice and experience to master the reversal trades.", -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "That all for volume profile setups in the next article we are going to take a look at VWAP.", -1)),
    _cache[4] || (_cache[4] = createBaseVNode("h2", {
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
const reversalTrades = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  reversalTrades as default
};
