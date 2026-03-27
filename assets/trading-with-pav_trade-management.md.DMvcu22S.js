import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, a as createTextVNode, eS as _imports_0, eT as _imports_1, eU as _imports_2, eV as _imports_3 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trade Management","description":"","frontmatter":{"title":"Trade Management","outline":"deep","prev":{"text":"Risk - Reward Ratio","link":"/trading-with-pav/risk-reward-ratio"},"next":{"text":"Price Action Strategies","link":"/trading-with-pav/price-action-strategies"}},"headers":[],"relativePath":"trading-with-pav/trade-management.md","filePath":"trading-with-pav/trade-management.md"}');
const _sfc_main = { name: "trading-with-pav/trade-management.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode('<h1 id="trade-management" tabindex="-1">Trade Management <a class="header-anchor" href="#trade-management" aria-label="Permalink to “Trade Management”">​</a></h1><div class="info custom-block"><p class="custom-block-title">Table of Contents</p><nav class="table-of-contents"><ul><li><a href="#trade-management-1">Trade Management</a></li><li><a href="#active-vs-passive-trade-management">Active vs. Passive Trade Management</a></li><li><a href="#general-trade-management-concepts">General Trade Management Concepts</a></li><li><a href="#active-trade-management">Active Trade Management</a></li><li><a href="#after-entry-bar-by-bar-volume-analysis">After Entry Bar by Bar Volume Analysis</a></li><li><a href="#comments">Comments</a></li></ul></nav></div><h2 id="trade-management-1" tabindex="-1">Trade Management <a class="header-anchor" href="#trade-management-1" aria-label="Permalink to “Trade Management”">​</a></h2><blockquote><p>“Once you have taken a decision, never look back on it.”</p><p>Field Marshal Viscount Allenby</p></blockquote><p>Once you have taken a decision to trade, never look back on it. It’s time to manage it.</p><h2 id="active-vs-passive-trade-management" tabindex="-1">Active vs. Passive Trade Management <a class="header-anchor" href="#active-vs-passive-trade-management" aria-label="Permalink to “Active vs. Passive Trade Management”">​</a></h2><p>Should we use an active or a passive trade management style? This question really gets to the heart of who we are as a trader and how we believe the market works.</p><p>Are you a “<strong>mechanical / systems trader</strong>” or a “<strong>discretionary trader</strong>“?</p><p>A mechanical trader who has conducted extensive back-testing and identified a pattern which provides an edge over a larger sample of trades, should NOT be using any discretion to actively manage their trades. Their edge is based on the fact that historical performance shows a positive expectancy, so trade management should be conducted EXACTLY as in the testing. This will either be holding until the stop or target is hit, or will be in accordance with some fixed rules for stop movement.</p><p>If that works for you, great! Stick with it. It doesn’t work for me.</p><p>Systems traders generally see this game as one of probability. Although probability is a feature of the game, my beliefs are somewhat different, and this difference means I’m (psychologically) a discretionary trader and therefore unable to trade this systems approach.</p><p>Systems testing is done over a very large sample, and while there are great methods of ensuring reliability of data through back and forward testing of different samples from different market environments, it’s still a large sample; and within that large sample you’ll find considerable variability – periods of underperformance and periods of outperformance. Systems traders need to persevere through the drawdown that comes from the periods of underperformance. Any one system may extend its period of drawdown for quite a while, maybe a whole week, maybe a month, maybe longer. And this could be quite normal – within the expected variability of results.</p><p>There are several problems with this, for me.</p><p>Firstly, I don’t trade over a large sample. As a short timeframe discretionary trader, I’m aiming to grind out a living day to day. I hate a weekly drawdown. And even more so I hate monthly drawdowns. Each day I’m trading in a small subset of the larger sample. Whether it’s a period of outperformance or a period of underperformance is unknown, until the market can be looked back at with the benefits of hindsight. My goal is to manage the day’s opportunities as best I can at the time. If a better yearly result could statistically be obtained by sticking to the original stop or target, then that’s just too bad for me. That doesn’t help me today. So, I choose <strong>active management</strong> in order to get the best result I possibly can over a small sample. I’ll leave the ‘hoping’ to achieve a longer-term statistical average result to those with more patience and deeper pockets.</p><p>Secondly, and perhaps more importantly, I just don’t believe in the ability to apply a mathematical model to the markets. Yes, it does provide good approximations, but I’m just not happy staking my money on approximations. While systems traders believe in a probabilistic market, my belief is better described as an ‘uncertain’ market or an ’emotional’ market. A subtle difference, perhaps! Yes there are probabilities, but the probabilities themselves shift. To blindly trade systems or patterns and to hold till the preplanned stop or target, is to place your faith in the fact that the future market will be similar enough to the past markets in order for the edge to still be intact. Trade management is a matter of ‘hope’, based on trust in the power of the setups or patterns.</p><p>Market movement though is a function of order-flow imbalance, and this order-flow imbalance is the result of traders‟ decisions and actions. While future order-flow can be somewhat influenced by the setups or patterns, this systems method is limited in its ability to take into account the context of the market in which the pattern is occurring, or the psychology of the current market. Both are factors which will also have a great influence on future order-flow.</p><p>So, ‘hope’ doesn’t work for me. Like in most areas of my life where I’m a bit of a control freak, my beliefs as to the nature of the market require me to actively manage my trades.</p><p>My entries are not based on any belief in the power of the setups, but rather on my assessment of the underlying forces of supply and demand, the market context within which the current pattern is occurring, the potential future actions of other traders, and my assessment of high probability and low risk opportunities within that environment. This gives me a trade idea which is then executed.</p><p>This is a key difference – the real power behind my entry is not a pattern based entry trigger, but rather a discretionary entry based on my read of the market and my ‘feel’ for the price movement. Therefore, my edge does not exist in just blindly holding till the stop or target. My edge exists only while my original trade premise is valid.</p><p>If I therefore enter a trade, and the trade does not act in accordance with my original idea, the edge is gone (or at least its likelihood is reduced). So, it’s time for me to work the best exit possible and then reassess and/or wait for the next opportunity.</p><p>This is not blindly just moving the stop or target out of fear. It’s a realization that my original assessment of the future net order-flow is either no longer valid, or was perhaps even entirely wrong.</p><p>End result… I accept that sometimes I would have achieved better results by simply holding till either the stop or target. However, other times my active management approach will yield better results, because for example I’ll recognize stronger than expected order-flow and be able to extend the target. Maybe it works out even over the next year or so, maybe not. It doesn’t worry me either way. I don’t actively manage my trades because it’s optimized for better results. I do so because it’s the optimal trade management approach for both my market beliefs and for my psychological needs.</p><p>Why hold a trade that moves to one tick from your target and then drives all the way back to your stop, just because taking it earlier would ‘destroy’ your edge? I just don’t get that. If you assess the market environment has changed, and bearish pressure is reducing the likelihood of the price pushing that one tick further, take profits.</p><p>As with everything in trading though, there’s no black and white. If the systems approach works for you, stick with it.</p><p>If you feel a passive style suits you better, then work out a way to make it profitable. It doesn’t work for me. That doesn’t mean it won’t work for you.</p><p>Thorough testing will be required.</p><p>However, if an active management approach is suited to your personality, the following outlines how I do it…</p><h2 id="general-trade-management-concepts" tabindex="-1">General Trade Management Concepts <a class="header-anchor" href="#general-trade-management-concepts" aria-label="Permalink to “General Trade Management Concepts”">​</a></h2>', 28)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "danger custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "Trade management for consistent profitability in trading"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "We trade with two part positions."),
            createBaseVNode("li", null, "The entry is all-in. That is, both parts are placed on at once."),
            createBaseVNode("li", null, "The exit is scaled out."),
            createBaseVNode("li", null, "Part one aims for a target at T1."),
            createBaseVNode("li", null, "Part two aims for either a T2 target, or continues until exited by a trailing stop, depending on market environment."),
            createBaseVNode("li", null, "All positions are managed via an active trade management approach.")
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createBaseVNode("h2", {
      id: "active-trade-management",
      tabindex: "-1"
    }, [
      createTextVNode("Active Trade Management "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#active-trade-management",
        "aria-label": "Permalink to “Active Trade Management”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("p", null, "Remain in the Trade While the Premise Remains Valid.", -1),
        createBaseVNode("div", { class: "warning custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "To Remember"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createTextVNode("From Entry to Part One Exit. "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Psychologically Managing Draw-down."),
                createBaseVNode("li", null, "Psychology of Trade Management."),
                createBaseVNode("li", null, "Working an Exit – Scratching a Trade."),
                createBaseVNode("li", null, "Re-entry."),
                createBaseVNode("li", null, "Movement of the Stop Loss to Break-even and Beyond.")
              ])
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Managing Part Two. "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Movement of the Stop Loss Beyond Break-even"),
                createBaseVNode("li", null, "Working an Exit – Tightening of the Stop and Target."),
                createBaseVNode("li", null, "Adapting for the Market Environment."),
                createBaseVNode("li", null, "Extension of the Target.")
              ])
            ])
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[5] || (_cache[5] = createBaseVNode("h2", {
      id: "after-entry-bar-by-bar-volume-analysis",
      tabindex: "-1"
    }, [
      createTextVNode("After Entry Bar by Bar Volume Analysis "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#after-entry-bar-by-bar-volume-analysis",
        "aria-label": "Permalink to “After Entry Bar by Bar Volume Analysis”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[2] || (_cache[2] = [
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: "Bar-by-Bar-Volume-Analysis"
          })
        ], -1),
        createBaseVNode("div", { class: "tip custom-block" }, [
          createBaseVNode("p", { class: "custom-block-title" }, "Bar by Bar Volume Analysis"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "The above chart image is the same from before where we placed SL, Target and Entry (WP, LWP, LRP)."),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "A"),
              createTextVNode(" there is sideways price action from where aggressive initiation to upside took place which means there is a high probability same will happen again because before "),
              createBaseVNode("strong", null, "A"),
              createTextVNode(" price rejected downside with heavy volumes which means big players are now accumulating for upside.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("So at "),
              createBaseVNode("strong", null, "B"),
              createTextVNode(" we "),
              createBaseVNode("strong", null, "enter with 2 Lots"),
              createTextVNode(" which is our Wholesale price and at here there were two narrow LLW candle the red one is stopping volume and next is green one with low volume which is low volume test i.e. low supply so price can go upwards.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "C"),
              createTextVNode(" big bullish with minor upper wick has heavy volumes. The upper wick says that some selling pressure is still present in the market. As from "),
              createBaseVNode("strong", null, "C"),
              createTextVNode(" to "),
              createBaseVNode("strong", null, "D"),
              createTextVNode(" the price couldn’t leave "),
              createBaseVNode("strong", null, "C"),
              createTextVNode(" candle area which points to one thing Accumulation and absorption by sellers.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Now "),
              createBaseVNode("strong", null, "D"),
              createTextVNode(" price broke "),
              createBaseVNode("strong", null, "C"),
              createTextVNode(" high but that was climatic move price at high attracted more sellers and price came to "),
              createBaseVNode("strong", null, "B"),
              createTextVNode(" and "),
              createBaseVNode("strong", null, "C"),
              createTextVNode(" location.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "E"),
              createTextVNode(" bearish candle smaller than "),
              createBaseVNode("strong", null, "D"),
              createTextVNode(" with same volume as "),
              createBaseVNode("strong", null, "D"),
              createTextVNode(" price may fall from here need to see further candles to decide whether to scratch our trade at breakeven.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("In between "),
              createBaseVNode("strong", null, "E"),
              createTextVNode(" and "),
              createBaseVNode("strong", null, "F"),
              createTextVNode(" we can see that candles are to narrow with low volume. The direction is little to downwards but not with huge price difference.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "F"),
              createTextVNode(" we have stopping volume i.e. candle size decreased and the last candle had LUW with high volume means that high bullish pressure is still persistent as with bearish pressure. After LUW we got big bullish candle upward till "),
              createBaseVNode("strong", null, "F"),
              createTextVNode(" but after that bears took control and brought price to "),
              createBaseVNode("strong", null, "G"),
              createTextVNode(".")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Price has breached below entry and is near our "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(". One good thing about our "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" placement is that we have placed it before more buyers would enter with market order. Failure of buyers to enter at this level will likely trigger our "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(".")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Let me tell you why at "),
              createBaseVNode("strong", null, "G"),
              createTextVNode(" buyers will come. At "),
              createBaseVNode("strong", null, "F"),
              createTextVNode(" we had Stopping volume which is a sign that Big player is trying to control the sideways down border area. Because sudden moment to downwards could trigger downtrend (Long position "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" hit sell orders plus fresh Shorter Sell orders huge bearish order-flow) and "),
              createBaseVNode("strong", null, "G"),
              createTextVNode(" location there was previous sideways area were buyers took control.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("You can see that from "),
              createBaseVNode("strong", null, "G"),
              createTextVNode(" price raised up. At "),
              createBaseVNode("strong", null, "H"),
              createTextVNode(" we had LLW with high volume then "),
              createBaseVNode("strong", null, "B"),
              createTextVNode(", "),
              createBaseVNode("strong", null, "C"),
              createTextVNode(", "),
              createBaseVNode("strong", null, "D"),
              createTextVNode(", "),
              createBaseVNode("strong", null, "E"),
              createTextVNode(", "),
              createBaseVNode("strong", null, "F"),
              createTextVNode(", "),
              createBaseVNode("strong", null, "G"),
              createTextVNode(" which gives more emphasis on buyers aggressiveness. Admit it though was close call for "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(".")
            ]),
            createBaseVNode("li", null, "Also we could have this place as our Entry that’s why I mentioned “Unfortunately, the best entry technique for a particular price action setup CANNOT be known until the trade is over and reviewed with the benefit of hindsight.” because Entry is mastered only through practice and experience in live market."),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "I"),
              createTextVNode(" we had sideways stall which is expected due to resistance from "),
              createBaseVNode("strong", null, "E"),
              createTextVNode(" but bulls took control and we hit our 1st Target at the swing high. We exit our 1 Lot and bring our remaining lot "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" to LWP which will bring our "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" to "),
              createBaseVNode("strong", null, "+ve"),
              createTextVNode(" "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" which means even though if our "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" is hit at "),
              createBaseVNode("strong", null, "LWP"),
              createTextVNode(" we get out of market at profit.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "J"),
              createTextVNode(" price arrived at "),
              createBaseVNode("strong", null, "E"),
              createTextVNode(" location which now is support and candle is LLW low volume. Price moved up little bit and at "),
              createBaseVNode("strong", null, "K"),
              createTextVNode(" again came to location "),
              createBaseVNode("strong", null, "J"),
              createTextVNode(" with LLW low volume meaning no supply so price continue upwards.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("At "),
              createBaseVNode("strong", null, "L"),
              createTextVNode(" candle is LLW with high volume at same location as "),
              createBaseVNode("strong", null, "J"),
              createTextVNode(" and "),
              createBaseVNode("strong", null, "K"),
              createTextVNode(" which had low volume hinting us that buyers are aggressive in now (due to this "),
              createBaseVNode("a", { href: "/trading-with-pav/vpa-building-the-picture.html#lower-wicks-at-support-demand" }, "Lower Wicks at Support/Demand"),
              createTextVNode(" reason)")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("Next day there was a gap up opening which is our "),
              createBaseVNode("strong", null, "T2"),
              createTextVNode(" location we could exit our remaining position. I on the other hand move "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" to "),
              createBaseVNode("strong", null, "T1"),
              createTextVNode(" location.")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("When "),
              createBaseVNode("strong", null, "T3"),
              createTextVNode(" is reached I move the "),
              createBaseVNode("strong", null, "SL"),
              createTextVNode(" to "),
              createBaseVNode("strong", null, "T2"),
              createTextVNode(" and as you can see price came down and hit our "),
              createBaseVNode("strong", null, "SL T2"),
              createTextVNode(".")
            ]),
            createBaseVNode("li", null, [
              createTextVNode("So the conclusion of our trade is "),
              createBaseVNode("strong", null, "1st"),
              createTextVNode(" lot at "),
              createBaseVNode("strong", null, "T1"),
              createTextVNode(" and "),
              createBaseVNode("strong", null, "2nd"),
              createTextVNode(" lot at "),
              createBaseVNode("strong", null, "T2"),
              createTextVNode(".")
            ]),
            createBaseVNode("li", null, "This is Active Trade Management in a nutshell with ongoing analysis.")
          ])
        ], -1),
        createBaseVNode("p", null, "Below are the chart images with Entry, SL, Targets and Risk : Reward values.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Trade-Management-01"
          })
        ], -1),
        createBaseVNode("p", null, "Price Action Entry – SL – Targets", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "Trade-Management-02"
          })
        ], -1),
        createBaseVNode("p", null, "Price Action Entry – SL – Targets with Risk Reward Ratio", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "Trade-Management-03"
          })
        ], -1),
        createBaseVNode("p", null, "Bar by bar volume analysis of Future Trend", -1)
      ])]),
      _: 1
    }),
    _cache[6] || (_cache[6] = createBaseVNode("p", null, [
      createTextVNode('That’s it for trade management and more trade example with Bar-by-Bar volume Analysis can be found in posts category "'),
      createBaseVNode("a", {
        href: "https://ystc.in/category/trading-process-and-strategy/",
        target: "_blank",
        rel: "noreferrer"
      }, "Trading Process and Strategy"),
      createTextVNode('".')
    ], -1)),
    _cache[7] || (_cache[7] = createBaseVNode("p", null, [
      createTextVNode("Also you want to get in-depth for bar volume you can read this book called "),
      createBaseVNode("a", {
        href: "https://amzn.to/3OZwKty",
        target: "_blank",
        rel: "noreferrer"
      }, "A Complete Guide To Volume Price Analysis by Anna Coulling"),
      createTextVNode(".")
    ], -1)),
    _cache[8] || (_cache[8] = createBaseVNode("p", null, "That’s it for this article as well as volume in next volume we are gonna see some Price Action Strategies.", -1)),
    _cache[9] || (_cache[9] = createBaseVNode("h2", {
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
const tradeManagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradeManagement as default
};
