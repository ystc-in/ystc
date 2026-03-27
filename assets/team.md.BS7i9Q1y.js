import { V as VPTeamMembers } from "./chunks/theme.Cgb9Y4lE.js";
import { c as createElementBlock, o as openBlock, j as createBaseVNode, J as createVNode, a5 as createStaticVNode, a as createTextVNode, k as unref } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Team","description":"","frontmatter":{"title":"Team","outline":"deep","prev":{"text":"Contact","link":"/contact"},"next":{"text":"Site Map","link":"/site-map"}},"headers":[],"relativePath":"team.md","filePath":"team.md"}');
const __default__ = { name: "team.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const members = [
      {
        avatar: "https://www.github.com/yogeshrp-in.png",
        name: "Yogesh Patil",
        title: "Founder",
        org: "YS Trading Coach",
        orgLink: "/",
        desc: "Quantitative F&O trader since 2020, specializing in Volume Profile & developing proprietary Price Action strategies.<br>Developer of a custom indicator and in-house charting platform.",
        links: [
          { icon: "instagram", link: "https://www.instagram.com/yogeshrp.in/" },
          { icon: "bluesky", link: "https://bsky.app/profile/yogeshp.bsky.social" },
          { icon: "youtube", link: "https://www.youtube.com/@YSTradingCoach" },
          { icon: "x", link: "https://x.com/yogeshp42" },
          { icon: "facebook", link: "https://www.facebook.com/yogeshrp.in/" },
          { icon: "whatsapp", link: "https://whatsapp.com/channel/0029VbAcrUK4o7qQyDGLu61B" },
          { icon: "telegram", link: "https://t.me/YS_TradingCoach" }
        ],
        sponsor: "https://payments.cashfree.com/forms/ystcsponsor"
      },
      {
        avatar: "https://www.github.com/swapnilk-in.png",
        name: "Swapnil Kamble",
        title: "Co-Founder",
        org: "YS Trading Coach",
        orgLink: "https://ystc-in.github.io/sk/",
        desc: "Intraday F&O trader since 2018, specializing in Price Action and Supply/Demand analysis.<br>Testing in-house charting platform with integrated order-flow capabilities.",
        links: [
          { icon: "instagram", link: "https://www.instagram.com/swapnil_4105/" },
          { icon: "youtube", link: "https://www.youtube.com/@YSTradingCoach" },
          { icon: "whatsapp", link: "https://whatsapp.com/channel/0029VbAcrUK4o7qQyDGLu61B" },
          { icon: "telegram", link: "https://t.me/YS_TradingCoach" }
        ],
        sponsor: "https://github.com/swapnilk-in"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", {
          id: "our-team",
          tabindex: "-1"
        }, [
          createTextVNode("Our Team "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#our-team",
            "aria-label": "Permalink to “Our Team”"
          }, "​")
        ], -1)),
        _cache[1] || (_cache[1] = createBaseVNode("p", null, "Below first left is site owner and team member to the right.", -1)),
        createVNode(unref(VPTeamMembers), {
          size: "small",
          members
        }),
        _cache[2] || (_cache[2] = createStaticVNode('<h2 id="social-media" tabindex="-1">Social Media <a class="header-anchor" href="#social-media" aria-label="Permalink to “Social Media”">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Follow Us</p><p>Please follow us at our respective social media sites to learn free &amp; get discounts on courses and volume profile tools.</p></div><h2 id="social-media-messenger-scams" tabindex="-1">SOCIAL MEDIA &amp; MESSENGER SCAMS <a class="header-anchor" href="#social-media-messenger-scams" aria-label="Permalink to “SOCIAL MEDIA &amp; MESSENGER SCAMS”">​</a></h2><div class="danger custom-block"><p class="custom-block-title">Beware</p><p>We will NEVER make unsolicited contact with you via direct message to sell you any product or service. And no other “representative of YS Trading Coach” will ever contact you to sell you any product or service.</p></div>', 4))
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
