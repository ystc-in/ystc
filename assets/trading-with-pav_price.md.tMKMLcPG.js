import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"PRICE","description":"","frontmatter":{"title":"PRICE","outline":"deep","prev":{"text":"Trading Position","link":"/trading-with-pav/trading-position"},"next":{"text":"2nd Hand Mobile Auction","link":"/trading-with-pav/2nd-hand-mobile-auction"}},"headers":[],"relativePath":"trading-with-pav/price.md","filePath":"trading-with-pav/price.md"}');
const _sfc_main = { name: "trading-with-pav/price.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="price" tabindex="-1">PRICE <a class="header-anchor" href="#price" aria-label="Permalink to “PRICE”">​</a></h1><p>In this article we gonna learn about PRICE and try to understand what it is? Why does it move? How does it move?</p><div class="info custom-block"><p class="custom-block-title">Table of Contents</p><nav class="table-of-contents"><ul><li><a href="#what-is-price">What is PRICE ?</a><ul><li><a href="#so-what-is-price">So, what is price?</a></li></ul></li><li><a href="#how-does-price-move">How does Price Move?</a></li><li><a href="#video">Video</a></li><li><a href="#comments">Comments</a></li></ul></nav></div><h2 id="what-is-price" tabindex="-1">What is <strong>PRICE</strong> ? <a class="header-anchor" href="#what-is-price" aria-label="Permalink to “What is PRICE ?”">​</a></h2><p>Regardless of whether we are talking stocks, futures, foreign exchange, or any other product at all, price is the amount a buyer pays to acquire a product from a seller.</p><p>Any one transaction involves <strong>a product</strong>, and <strong>two parties</strong> – <strong>the buyer</strong> and <strong>the seller</strong>.</p><ol><li><strong>The seller</strong> <strong>holds</strong> the product.</li><li><strong>The buyer</strong> <strong>wants</strong> to purchase it.</li></ol><p><strong>Price is the amount that they agree upon for the transfer of the product from the seller to the buyer.</strong></p><p>The key word in this sentence is… “<strong>agree</strong>”.</p><p><strong>The buyer</strong> wants to <strong>buy at this price</strong>.</p><p><strong>The seller</strong> wants to <strong>sell at this same price</strong>.</p><p>They come together.</p><p><strong>There’s a transaction</strong>.</p><h3 id="so-what-is-price" tabindex="-1">So, what is price? <a class="header-anchor" href="#so-what-is-price" aria-label="Permalink to “So, what is price?”">​</a></h3><p><strong>Yes, it is the amount, or points value, that they agree to transact.</strong></p><p>From a trading perspective…</p><p><strong>PRICE is two traders making a buy and sell decision.</strong></p><p>Now, markets don’t transact all at one price… they move.<br> Thankfully, otherwise there wouldn’t be profit opportunity.</p><h2 id="how-does-price-move" tabindex="-1">How does Price Move? <a class="header-anchor" href="#how-does-price-move" aria-label="Permalink to “How does Price Move?”">​</a></h2><p><strong>Price movement is a function of supply and demand.</strong></p><p>In simple (non-textbook) language.</p><ol><li><strong>Supply</strong> is the <strong>amount of a product which sellers</strong> want to <strong>sell</strong> at a particular price.</li><li><strong>Demand</strong> is the <strong>amount of a product which buyers</strong> want to <strong>buy</strong> at a particular price.</li></ol><p><strong>PRICE</strong> will <strong>move with changes</strong> in <strong>supply</strong> and/or <strong>demand</strong>.</p><p>In next article will take a look at how price moves through the changes in Supply and Demand with an example of 2nd Hand Mobile Auction.</p><h2 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to “Video”">​</a></h2>', 25)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/GqXhaqStGGw",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: ""
    }, null, -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "The above video explains this article in hindi language.", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("h2", {
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
const price = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  price as default
};
