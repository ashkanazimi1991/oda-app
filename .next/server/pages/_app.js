"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/ActiveLink/ActiveLink.js


function ActiveLink({ children , href  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const style = {
        marginRight: 10,
        color: router.asPath === href ? "#fff" : "#fff",
        backgroundColor: router.asPath === href ? "#60724b" : "",
        width: "100%"
    };
    const handleClick = (e)=>{
        e.preventDefault();
        router.push(href);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        onClick: handleClick,
        style: style,
        children: children
    });
}
/* harmony default export */ const ActiveLink_ActiveLink = (ActiveLink);

;// CONCATENATED MODULE: ./components/Sidebar.jsx



function Sidebar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full md:w-1/5 bg-[#000000d2] md:bg-[#000000d5] z-20 px-0 text-center fixed bottom-0 md:pt-10 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:relative items-center mx-auto lg:float lg:px-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden md:block pt-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: " w-0 md:w-32 lg:w-48 object-contain mx-auto overflow-visible ",
                                src: "/images/4.svg",
                                alt: "oda"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "pt-10 text-white text-3xl font-[arial] font-bold underline",
                                children: "Architect"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "pb-8 text-white bg-transparent font-[arial] ",
                                children: " Company"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "list-reset flex flex-row md:flex-col z-20 text-center pt-3 lg:pt-[20%] md:text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " flex-1 ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block py-1 md:py-3 pl-1 align-middle text-[#fff] no-underline hover:bg-[#60724b] border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "pr-0 md:pr-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "pb-1 md:pb-0 text-xs md:text-base text-[#fff] hover:text-[#fff] md:text-[#fff] block md:inline-block font-[arial] tracking-wide ",
                                                children: " Home"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " flex-1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block py-1 md:py-3 pl-1 align-middle text-[#fff] hover:bg-[#60724b] no-underline border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "pr-0 md:pr-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "pb-1 md:pb-0 text-xs md:text-base text-[#fff] hover:text-[#fff] md:text-[#fff] block md:inline-block tracking-wide font-[arial]",
                                                children: "Projects"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                                href: "/services",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " flex-1 ",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block py-1 md:py-3 pl-1 align-middle text-[#fff] hover:bg-[#60724b] no-underline border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "pr-0 md:pr-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "pb-1 md:pb-0 text-xs md:text-base text-[#fff] hover:text-[#fff] md:text-[#fff] block md:inline-block tracking-wide font-[arial]",
                                                children: "Services"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " flex-1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block py-1 md:py-3 pl-1 align-middle text-[#fff] hover:bg-[#60724b] no-underline border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "pr-0 md:pr-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "pb-1 md:pb-0 text-xs md:text-base text-[#fff] hover:text-[#fff] md:text-[#fff] block md:inline-block tracking-wide font-[arial]",
                                                children: "About Us"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/tb"
var tb_ = __webpack_require__(4152);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx






const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "bg-[#101010] md:pl-[20%] flex py-10 justify-center items-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-center items-center w-full max-w-lg ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-around w-full py-4 border-y-2 border-gray-500 items-center ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "tel:+984433361050",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiPhone, {
                                            className: "text-lg text-[#60724b] transition hover:text-teal-700/75 "
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://www.instagram.com/oda.architect",
                                    passHref: true,
                                    target: "_blank",
                                    "aria-label": "Instagram",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {
                                            className: " w-10 text-2xl text-[#60724b] cursor-pointer"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://t.me/keivanarc",
                                    passHref: true,
                                    target: "_blank",
                                    "aria-label": "telegram",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(tb_.TbBrandTelegram, {
                                            className: " text-2xl text-[#60724b] transition hover:text-teal-700/75 "
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-center pt-4 mb-10 text-gray-500 ",
                        children: "Copyright \xa9 2022. All rights reserved for ODA"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Header/Header.jsx



const header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("logo", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " top-0 h-12 flex p-2 flex-row md:hidden items-center fixed w-full bg-[#000000cc] z-50",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "w-10 h-10 z-20 object-left-top",
                                src: "./images/logof.svg",
                                alt: "ODA"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-[#fff] h-18 text-xs ml-2 font-[arial] tracking-wide ",
                            children: "ODA OFFICE OF ARCHITECTUER"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header = (header);

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "contant",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 4152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(1626)));
module.exports = __webpack_exports__;

})();