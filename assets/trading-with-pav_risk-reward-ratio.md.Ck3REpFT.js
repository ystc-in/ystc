import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx, j as createBaseVNode, dC as _imports_0, dD as _imports_1, a as createTextVNode, dE as _imports_2, dF as _imports_8, dG as _imports_3, dH as _imports_4, dI as _imports_5, dJ as _imports_6, dK as _imports_7 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Risk - Reward Ratio","description":"","frontmatter":{"title":"Risk - Reward Ratio","outline":"deep","prev":{"text":"Entry","link":"/trading-with-pav/entry"},"next":{"text":"Trade Management","link":"/trading-with-pav/trade-management"}},"headers":[],"relativePath":"trading-with-pav/risk-reward-ratio.md","filePath":"trading-with-pav/risk-reward-ratio.md"}');
const _sfc_main = { name: "trading-with-pav/risk-reward-ratio.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode('<h1 id="risk-reward-ratio" tabindex="-1">Risk - Reward Ratio <a class="header-anchor" href="#risk-reward-ratio" aria-label="Permalink to “Risk - Reward Ratio”">​</a></h1><p>In this article will learn about Risk : Reward Ratio on what it is and how to apply it.</p><div class="info custom-block"><p class="custom-block-title">Table of Contents</p><nav class="table-of-contents"><ul><li><a href="#reward-risk-ratio">Reward : Risk Ratio</a></li><li><a href="#using-fib-retracement-as-risk-reward-tool">Using Fib Retracement as Risk : Reward Tool</a></li><li><a href="#what-r-r-ratio-to-use">What R : R ratio to use ?</a></li><li><a href="#entry-preconditions">Entry Preconditions</a></li><li><a href="#comments">Comments</a></li></ul></nav></div><h2 id="reward-risk-ratio" tabindex="-1">Reward : Risk Ratio <a class="header-anchor" href="#reward-risk-ratio" aria-label="Permalink to “Reward : Risk Ratio”">​</a></h2>', 4)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "Let 1st know what is Risk : Reward ? Its a method to know whether the Risk taken is worth the reward. Like for example would you risk 1000 to get 100 obviously not right."),
          createBaseVNode("li", null, "Most likely low risk high reward is what everyone strives for."),
          createBaseVNode("li", null, "So Risk : Reward of 1 : 1 means for 100 risk get 100 reward and 1 : 2 means for 50 risk get 100 means reward is double the risk.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: "Stop-Targets-R-R-Entry"
          })
        ], -1),
        createBaseVNode("p", null, "Stop – Targets – R : R – Entry", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "Most traders find an entry trigger, then place their stop beyond recent price action swing H/L, measure their risk, set a target 2-3 times the amount of risk, and sit back and wait till either the stop or the target is hit."),
          createBaseVNode("li", null, "Not good!"),
          createBaseVNode("li", null, "They don’t even check market structure or price action to see whether or not that target is realistically achievable."),
          createBaseVNode("li", null, "Market structure provides us with our setup areas – areas with expectation of order-flow from losers exiting their trades."),
          createBaseVNode("li", null, "Price Action provides us with a stop point – an area where price should NOT go, if our trade idea is valid."),
          createBaseVNode("li", null, "Price Action also provides us with a target – an area where order-flow will oppose our trade, which may just pause price temporarily, but which also may reverse it completely."),
          createBaseVNode("li", null, "Why would you place a 1 : 3 R : R target beyond S/R barriers, and then just hope price breaks through them? That’s just plain dumb.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Risk-Reward-Wrong-Approach-N"
          })
        ], -1),
        createBaseVNode("p", null, "Using R:R – Wrong Approach", -1),
        createBaseVNode("p", null, [
          createTextVNode("Our approach differs. We start with our stop and target and then apply our desired R:R ratio over"),
          createBaseVNode("br"),
          createTextVNode(" top of that, to define a Last R:R Price (LRP), beyond which we can’t enter.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "Risk-Reward-Right-Approach-N"
          })
        ], -1),
        createBaseVNode("p", null, "Using R:R – Right Approach", -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createStaticVNode('<h2 id="using-fib-retracement-as-risk-reward-tool" tabindex="-1">Using Fib Retracement as Risk : Reward Tool <a class="header-anchor" href="#using-fib-retracement-as-risk-reward-tool" aria-label="Permalink to “Using Fib Retracement as Risk : Reward Tool”">​</a></h2><p>There is a tool called Long Position and Short Position in the “Forecasting and Measurement tools” but that tool is not good than Fibonacci tool. Why ? cuz you don’t get more Targets at a time and cant set custom targets.</p><p>Lets us explore the R : R setting in Fibonacci will know why its good. Open Fibonacci tool settings and set values as shown in following image.</p><p><img src="' + _imports_3 + '" alt="Fib-Risk-Reward-01"></p><p><img src="' + _imports_4 + '" alt="Fib-Risk-Reward-02"></p><p>As you can see 0 is SL and 1 is Entry between 0 and 1 are .25, .5, .75 values to shift SL of T2 up when T1 is crossed also each Targets have mid values like 1.5, 2.5, 3.5, 4.5, 5.5 so when price reverse we can shift SL to any points as scenario plays out.</p><p>The following image shows how the settings look on chart.</p><p><img src="' + _imports_5 + '" alt="Fib-Risk-Reward-03"></p><p>As you can see for Long Position if entry is 200 and SL is 100 then according to SL it calculates all Targets. For e.g. Risk : Reward of 1 : 1 ratio you can see 100 : 100, 1 : 2 you get 100 : 200 till T5 (according to setting).</p><p>Also you can have Mid targets for trailing SL.</p><p>Below is a example of Long Position R : R for Entry 100 and SL is 0 you get all the target values.</p><p><img src="' + _imports_6 + '" alt="Long-Position-Risk-Reward"></p><p>Long Position Risk : Reward</p><p>Below is a example of Short Position R : R for Entry 100 and SL is 0 you get all the target values.</p><p><img src="' + _imports_7 + '" alt="Short-Position-Risk-Reward"></p><p>Short Position Risk : Reward</p><h2 id="what-r-r-ratio-to-use" tabindex="-1">What R : R ratio to use ? <a class="header-anchor" href="#what-r-r-ratio-to-use" aria-label="Permalink to “What R : R ratio to use ?”">​</a></h2>', 17)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("div", { class: "tip custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "To remember"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "We should aim for a 1 : 1 R : R ratio for my part one entry."),
            createBaseVNode("li", null, "So, the LRP is defined as exactly half way between the stop location and the first target, T1 (the next trading time-frame swing H/L or area of S/R)."),
            createBaseVNode("li", null, "You might argue that 1 : 1 is insufficient. Remember, with our active management strategy aims to ensure that we rarely exit our losing position at the stop, we aim to scratch them before then if the premise is in doubt."),
            createBaseVNode("li", null, "If managed effectively, this will reduce the risk side of our actual R : R ratio."),
            createBaseVNode("li", null, "Also, this is only part one. Part two is available to run to a further target (or till it hits a trailing stop), aiming to maximize the reward side of our actual R : R ratio.")
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Entry Zone")
        ], -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "We now have two latest entry points. One defined by price action (LWP). And one defined by our risk management parameters (LRP)."),
          createBaseVNode("li", null, "The entry zone is between the stop and the closer of the two last entry prices (LWP or LRP).")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_8,
            alt: "Defining-the-Entry-Zone"
          })
        ], -1),
        createBaseVNode("p", null, "Defining the Entry Zone", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Aiming to work an entry within this Entry Zone ensures that "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, "(a) our entry price is within the wholesale price area and"),
              createBaseVNode("li", null, "(b) our entry price meets our acceptable R:R parameters.")
            ])
          ])
        ], -1),
        createBaseVNode("div", { class: "info custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "IMP"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Please note"),
              createTextVNode(": "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Everything in this course requires multiple pages(articles) to describe in detail."),
                createBaseVNode("li", null, "That doesn’t mean it’s complex. Don’t get in the habit of calculating and recording your LRP and LWP."),
                createBaseVNode("li", null, "You can visually see your LWP (it’s the breakout of any trading timeframe reversal pattern in your setup area) and you can visually eyeball the LRP (exactly half way between your stop and target)."),
                createBaseVNode("li", null, "Don’t create complexity when it’s not needed. While fine-tuning our entry on the lower timeframe, we simply ensure we don’t chase price beyond the closer of these two areas.")
              ])
            ])
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createStaticVNode('<h2 id="entry-preconditions" tabindex="-1">Entry Preconditions <a class="header-anchor" href="#entry-preconditions" aria-label="Permalink to “Entry Preconditions”">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Remember</p><ul><li>Price is in a setup area. <ul><li>We are fading weakness as price interacts with S/R or a swing H/L or</li><li>fading weakness on a pullback within a trend.</li></ul></li><li>A stop has been identified. <ul><li>An area is identified beyond which price will NOT go, if our trade idea is valid.</li><li>Ideally S/R or swing H/L.</li></ul></li><li>Targets have been identified. <ul><li>Next trading time-frame swing H/L or S/R.</li></ul></li><li>The entry zone is identified. <ul><li>Having considered LWP and LRP.</li><li>Once all this is in place, it’s time to trade.</li></ul></li></ul></div><p><strong>Fade the weakness!<br> Spring the Trap!</strong></p><p>In the next article will learn on how to manage a trade.</p><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to “Comments”">​</a></h2>', 5)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const riskRewardRatio = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  riskRewardRatio as default
};
