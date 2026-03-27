import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, a as createTextVNode, bF as _imports_0, bG as _imports_1, bH as _imports_2, bI as _imports_3, bJ as _imports_4, bK as _imports_5, bL as _imports_6, bM as _imports_7, bN as _imports_8, bO as _imports_9, bP as _imports_10, bQ as _imports_11, bR as _imports_12, bS as _imports_13, bT as _imports_14, bU as _imports_15, bV as _imports_16, bW as _imports_17, bX as _imports_18 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Entry","description":"","frontmatter":{"title":"Entry","outline":"deep","prev":{"text":"Targets","link":"/trading-with-pav/targets"},"next":{"text":"Risk - Reward Ratio","link":"/trading-with-pav/risk-reward-ratio"}},"headers":[],"relativePath":"trading-with-pav/entry.md","filePath":"trading-with-pav/entry.md"}');
const _sfc_main = { name: "trading-with-pav/entry.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createStaticVNode('<h1 id="entry" tabindex="-1">Entry <a class="header-anchor" href="#entry" aria-label="Permalink to “Entry”">​</a></h1><p>After settingÂ <a href="/trading-with-pav/stop-placement">Stop Loss</a>Â andÂ <a href="/trading-with-pav/targets">Target</a>Â lets get into the Entry.</p><div class="info custom-block"><p class="custom-block-title">Table of Contents</p><nav class="table-of-contents"><ul><li><a href="#entry-principles">Entry Principles</a></li><li><a href="#wholesale-vs-retail">Wholesale vs Retail</a></li><li><a href="#entry-technique-a€-working-an-improved-price-through-an-active-entry-process">Entry Technique â€“ Working an Improved Price through an Active Entry Process</a><ul><li><a href="#entry-decision">Entry Decision</a></li><li><a href="#stall">Stall</a></li><li><a href="#pattern-based-triggers">Pattern Based Triggers</a></li></ul></li><li><a href="#entry-summary">Entry Summary</a></li><li><a href="#comments">Comments</a></li></ul></nav></div><h2 id="entry-principles" tabindex="-1">Entry Principles <a class="header-anchor" href="#entry-principles" aria-label="Permalink to “Entry Principles”">​</a></h2><ul><li>Letâ€™s start with some basic principles of entry.</li><li>Imperfection</li><li>Unfortunately, the best entry technique for a particular price action setup CANNOT be known until the trade is over and reviewed with the benefit of hindsight.</li></ul><blockquote><p>â€œTake time to deliberate, but when the time for action has arrived, stop thinking and go in.â€</p><p>Napoleon Bonaparte</p></blockquote><h2 id="wholesale-vs-retail" tabindex="-1">Wholesale vs Retail <a class="header-anchor" href="#wholesale-vs-retail" aria-label="Permalink to “Wholesale vs Retail”">​</a></h2>', 7)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Wholesale entry is a term which has been popularized lately by Don Miller in his excellent blog ("),
            createBaseVNode("a", {
              href: "http://donmillerjournal.blogspot.com/",
              target: "_blank",
              rel: "noreferrer"
            }, "http://donmillerjournal.blogspot.com/"),
            createTextVNode("). Itâ€™s a term he used quite a bit to describe his entry locations. I donâ€™t believe my use of the term is the same as his (so I apologies if this causes any")
          ]),
          createBaseVNode("li", null, "confusion), but itâ€™s just a great descriptor for this entry concept."),
          createBaseVNode("li", null, "Itâ€™s standard business principles â€“ buy wholesale & sell retail."),
          createBaseVNode("li", null, "Why wouldnâ€™t we want to trade the same way, entering at wholesale prices and closing the position at retail prices?"),
          createBaseVNode("li", null, "Price swings have limited profit potential."),
          createBaseVNode("li", null, "They only go so far before reversing. Of course, we donâ€™t know how far each will go with absolute certainty, but we know they must end eventually."),
          createBaseVNode("li", null, "This is the space we have available in which to gain an entry and secure a profit, hopefully before the reversal takes away our gains."),
          createBaseVNode("li", null, "Below chart current candle is at 10:35 am lets see what entry price is good.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: "Entry-Chart-01"
          })
        ], -1),
        createBaseVNode("p", null, "Figure 1: Profit Potential", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "My intent is to enter as EARLY AS POSSIBLE, along with the wholesale, professional crowd."),
          createBaseVNode("li", null, "Some traders may argue that trying to enter as early as possible in a move is attempting to pick tops or bottoms. Absolutely! Why wouldnâ€™t you want to â€“ thatâ€™s where risk is lowest and profit potential is at a maximum!"),
          createBaseVNode("li", null, "Retail entries increase risk and reduce profit potential, as shown in figure below which demonstrates entry on a break of the swing low."),
          createBaseVNode("li", null, "Wholesale entries ensure reduced risk and greater profit potential, as shown in below chart where loss is 7 against profit 11.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Entry-Chart-02"
          })
        ], -1),
        createBaseVNode("p", null, "Figure 2: Wholesale Price", -1),
        createBaseVNode("p", null, "Last Wholesale entries ensure some risk and normal profit potential, as shown in below chart where loss is 9 against profit 9.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_2,
            alt: "Entry-Chart-03"
          })
        ], -1),
        createBaseVNode("p", null, "Figure 3: Last Wholesale Price", -1),
        createBaseVNode("p", null, "Retail entries ensure more risk and less profit potential, as shown in below chart where loss is 12 against profit 6.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "Entry-Chart-04"
          })
        ], -1),
        createBaseVNode("p", null, "Figure 4: Retail Price", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "How do we define the wholesale area ?")
          ]),
          createBaseVNode("li", null, "Consider the trading timeframe chart. Our setups are designed around identifying weakness moving into S/R, weakness moving into swing H/L or weakness in pullbacks within a trend."),
          createBaseVNode("li", null, "We identify the retail traders entering late in this move, becoming trapped in a low probability trade and being forced to exit. We aim to enter at or before point when the trapped traders realize they need to get out."),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "This point is really easy to identify. Itâ€™s essentially a breakout of some form of reversal pattern or area of congestion at the setup area.")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "Anything at or before this point is wholesale. Anything after this point is retail.")
          ]),
          createBaseVNode("li", null, [
            createTextVNode("I call this point theÂ "),
            createBaseVNode("strong", null, "Last Wholesale Price"),
            createTextVNode("Â ("),
            createBaseVNode("strong", null, "LWP"),
            createTextVNode("). I aim for entry at or before theÂ "),
            createBaseVNode("strong", null, "LWP"),
            createTextVNode(". I will not chase entry after the LWP under any circumstances, as to do so increases risk and reduces potential reward. If I miss an entry before it passes the LWP, Iâ€™ll be patient and wait for any second-chance retest opportunities, or the next setup.")
          ])
        ], -1),
        createBaseVNode("p", null, "Please note, we do not simply enter at this point. We use the lower timeframe to try to seek a better price, if at all possible. This is simply the last price we will accept in order to ensure wholesale prices.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_4,
            alt: "Entry-Chart-05"
          })
        ], -1),
        createBaseVNode("p", null, "Figure 5: Trade Playout", -1),
        createBaseVNode("p", null, "As you can see after 10:35 am price again came back to WP at 01:45 pm if we hadnâ€™t entered this provides the opportunity again. While it came close to our stop loss there was some distance.", -1)
      ])]),
      _: 1
    }),
    _cache[5] || (_cache[5] = createBaseVNode("h2", {
      id: "entry-technique-a€-working-an-improved-price-through-an-active-entry-process",
      tabindex: "-1"
    }, [
      createTextVNode("Entry Technique â€“ Working an Improved Price through an Active Entry Process "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#entry-technique-a€-working-an-improved-price-through-an-active-entry-process",
        "aria-label": "Permalink to “Entry Technique â€“ Working an Improved Price through an Active Entry Process”"
      }, "​")
    ], -1)),
    _cache[6] || (_cache[6] = createBaseVNode("h3", {
      id: "entry-decision",
      tabindex: "-1"
    }, [
      createTextVNode("Entry Decision "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#entry-decision",
        "aria-label": "Permalink to “Entry Decision”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("You should recall these sentences from earlier: "),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, "The fact isâ€¦ we cannot know what the best entry strategy will be until we review the trade with the benefit of hindsight."),
              createBaseVNode("li", null, "So, all we can do is ensure that price is within an area in which weâ€™re happy to enter, and try to get the best price possible within that area. Then manage the trade!")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("In a perfect world, entry within our entry zone would be a result of our finely tuned intuition."),
          createBaseVNode("br"),
          createTextVNode(" Unfortunately most of us will never achieve expertise in that area. The best we can hope for is"),
          createBaseVNode("br"),
          createTextVNode(" gradual improvement with experience.")
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("During the learning phase most of us need some kind of trigger for entry. Some sign that will"),
          createBaseVNode("br"),
          createTextVNode(" provide us with sufficient confidence to hit that buy or sell button.")
        ], -1),
        createBaseVNode("p", null, "Primarily I look for one of two signs in order to make my entry decision.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_5,
            alt: "Entry-Decision"
          })
        ], -1),
        createBaseVNode("p", null, "Entry Decision Stall or Trigger", -1),
        createBaseVNode("p", null, [
          createTextVNode("The first is a stall in price action. The second is a pattern based trigger. The stall is rarer, and"),
          createBaseVNode("br"),
          createTextVNode(" more complex. Weâ€™ll look at it first including some examples; then move onto the easier pattern"),
          createBaseVNode("br"),
          createTextVNode(" based triggers.")
        ], -1)
      ])]),
      _: 1
    }),
    _cache[7] || (_cache[7] = createBaseVNode("h3", {
      id: "stall",
      tabindex: "-1"
    }, [
      createTextVNode("Stall "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#stall",
        "aria-label": "Permalink to “Stall”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[2] || (_cache[2] = [
        createBaseVNode("p", null, "A stall is evident when price displays a clear inability to continue beyond an area of setup support or resistance (whether higher timeframe S/R, swing H/L or range S/R).", -1),
        createBaseVNode("p", null, [
          createTextVNode("The number of candles in a stall is difficult to define â€“ every situation is unique, and you will know"),
          createBaseVNode("br"),
          createTextVNode(" it when you see it â€“ but Iâ€™d usually expect at least 3 trading timeframe candles.")
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("Confidence in a level holding allows you to place a limit entry order close to the area of S/R. The"),
          createBaseVNode("br"),
          createTextVNode(" stalled price action offers good potential for another test of that area allowing a massively discounted wholesale entry price. If youâ€™re subsequently proven wrong (or early) then the risk has been minimized. If youâ€™re right however, the reward potential has been maximized. Either wayâ€¦ assuming your setup area is valid, itâ€™s a great entry.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_6,
            alt: "Entry-Trigger-via-Stall"
          })
        ], -1),
        createBaseVNode("p", null, "Figure 3 min Left & 1 min Right â€“ TST of Swing Low â€“ Entry Trigger via Stall", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "Figure above shows a TST of a swing low in a wide swing uptrend. You could also call it a CPB if you wish. I prefer TST in this case simply because the last move from the area provided a stronger surge of momentum which led to a change of trend to upwards. This area would be expected to provide support, should price return to the area."),
          createBaseVNode("li", null, "Price did return to the area just 45 mins later, demonstrating bullish pressure at this level of swing low support, through forming a stall pattern."),
          createBaseVNode("li", null, "Looking at the lower timeframe (1 min) on the RHS, confidence in the stall was gained after the larger green (high close bull candle) allowing a BUY LIMIT order to be placed closer to the lows of the stall at E1. This provides a low risk entry with higher potential reward, well before the LWP entry point."),
          createBaseVNode("li", null, "Note of course that the risk with this sort of entry is that, should the support level break we will have been triggered into a losing trade, which would not have been entered had we relied simply on a BUY STOP at LWP."),
          createBaseVNode("li", null, "However, risk has been minimized, and profit potential has been maximized. Provided our analysis identifies a quality setup area and a clear stall in the area, this is a risk worth taking."),
          createBaseVNode("li", null, "A second risk is of lost opportunity, should price not hit the BUY LIMIT order. We will later look at a way of ensuring that you donâ€™t miss these opportunities.")
        ], -1)
      ])]),
      _: 1
    }),
    _cache[8] || (_cache[8] = createBaseVNode("h3", {
      id: "pattern-based-triggers",
      tabindex: "-1"
    }, [
      createTextVNode("Pattern Based Triggers "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#pattern-based-triggers",
        "aria-label": "Permalink to “Pattern Based Triggers”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[3] || (_cache[3] = [
        createBaseVNode("p", null, [
          createTextVNode("Now letâ€™s consider the pattern based triggers. These include ANY lower timeframe (1 min) price"),
          createBaseVNode("br"),
          createTextVNode(" action pattern which:")
        ], -1),
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, "Confirms short-term sentiment in the direction of our trade premise, and"),
          createBaseVNode("li", null, "Indicates an area where price should NOT go. This area may then be used as our stop loss.")
        ], -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Examples include: "),
            createBaseVNode("ol", null, [
              createBaseVNode("li", null, "Any standard candlestick reversal pattern"),
              createBaseVNode("li", null, "Any standard price bar reversal pattern"),
              createBaseVNode("li", null, [
                createTextVNode("Any trap pattern which proves the loser wrong "),
                createBaseVNode("ol", null, [
                  createBaseVNode("li", null, "spike & ledge"),
                  createBaseVNode("li", null, "double top or bottom"),
                  createBaseVNode("li", null, "spring or upthrust"),
                  createBaseVNode("li", null, "3-swing retrace"),
                  createBaseVNode("li", null, "123 top or bottom"),
                  createBaseVNode("li", null, "test of breakout point"),
                  createBaseVNode("li", null, "expansion bar")
                ])
              ])
            ])
          ])
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_7,
            alt: "spike-ledge"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**Spike and Ledge (bullish)"),
          createBaseVNode("br"),
          createTextVNode(" **Price spike down, quickly reversed, then unable to meet lows again. Trigger = break above edge.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_8,
            alt: "Spike-and-Ledge-bearish"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**Spike and Ledge (bearish)"),
          createBaseVNode("br"),
          createTextVNode(" **Price spike up, quickly reversed, then unable to meet highs again. Trigger = break below ledge.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_9,
            alt: "Double-Bottom"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**Double Bottom"),
          createBaseVNode("br"),
          createTextVNode(" **Classic double bottom setup, but on micro scale. Enter on confirmation of second low,"),
          createBaseVNode("br"),
          createTextVNode(" no later than break of swing high.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_10,
            alt: "Double-Top"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**Double Top"),
          createBaseVNode("br"),
          createTextVNode(" **Classic double top setup, but on micro scale. Enter on confirmation of second high, no later than break of swing low.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_11,
            alt: "Spring"
          })
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Spring"),
          createBaseVNode("br"),
          createTextVNode(" Price spike below support which is rapidly reversed within one or two candles, such as hammer or bullish engulfing pattern. Trigger is a break above the high of the spring candle.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_12,
            alt: "Upthrust"
          })
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Upthrust"),
          createBaseVNode("br"),
          createTextVNode(" Price spike above resistance which is rapidly reversed within one or two candles, such as shooting star or bearish engulfing pattern."),
          createBaseVNode("br"),
          createTextVNode(" Trigger is a break below the low of the upthrust candle.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_13,
            alt: "3-swing-retrace-bullish"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**3 swing retrace (bullish)"),
          createBaseVNode("br"),
          createTextVNode(" **3 swing retracement, but on a micro scale. Enter on confirmation of second swing low, or break above previous swing low (or even close above previous swing low)")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_14,
            alt: "3-swing-retrace-bearish"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**3 swing retrace (bearish)"),
          createBaseVNode("br"),
          createTextVNode(" **3 swing retracement, but on a micro scale. Enter on confirmation of second swing high, or break below previous swing high (or even close below previous swing high)")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_15,
            alt: "123-bottom"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**123 bottom"),
          createBaseVNode("br"),
          createTextVNode(" **Classic 123 bottom, except on micro scale. Enter on confirmation of higher low")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_16,
            alt: "123-top"
          })
        ], -1),
        createBaseVNode("p", null, [
          createTextVNode("**123 top"),
          createBaseVNode("br"),
          createTextVNode(" **Classic 123 top, except on micro scale. Enter on confirmation of lower high.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_17,
            alt: "Test-of-Breakout-Point-Bullish"
          })
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Test of Breakout Point (bullish)"),
          createBaseVNode("br"),
          createTextVNode(" Retest of breakout above short term resistance.")
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_18,
            alt: "Test-of-Breakout-Point-Bearish"
          })
        ], -1),
        createBaseVNode("p", null, [
          createBaseVNode("strong", null, "Test of Breakout Point (bearish)"),
          createBaseVNode("br"),
          createTextVNode(" Retest of breakout below short term support.")
        ], -1)
      ])]),
      _: 1
    }),
    _cache[9] || (_cache[9] = createStaticVNode('<h2 id="entry-summary" tabindex="-1">Entry Summary <a class="header-anchor" href="#entry-summary" aria-label="Permalink to “Entry Summary”">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Remember</p><ul><li>The Trading timeframe defines the places we want to trade.</li><li>The Lower timeframe is used to time entry.</li><li>We note when price enters our trading timeframe setup zones. But we donâ€™t automatically enter. We watch how price reacts. We search for weakness, and traders trapped in a low probability position. Entries are taken at or before the point where the losers realize theyâ€™re wrong.</li><li>We recognize that the optimal entry can never be known, except with the benefit of hindsight. So we simply aim for the best entry possible within our entry zone. We work a limit order for a stall or pattern based trigger entry. And we place a stop entry order at or near the last wholesale price, in order to ensure we donâ€™t miss an opportunity.</li><li>Remember, the LWP is the trading timeframe point at which the losers will start exiting.</li><li>Thatâ€™s where our order-flow enters the market, driving our trade to profit.</li><li>Caution needs to be applied to earlier entries as they do not yet have the benefit of this trapped order-flow. However, they do have the benefit of S/R or swing high/lows to their back, and if triggered based on stall or a lower timeframe pattern based entry, they still provide good odds.</li></ul></div><p>The next article will learn about Risk : Reward and remember to back-test and paper trade entry practice.</p><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to “Comments”">​</a></h2>', 4)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const entry = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  entry as default
};
