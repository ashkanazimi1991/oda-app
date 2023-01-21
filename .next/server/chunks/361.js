"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 3361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);






class Slider2 extends (/* unused pure expression or super */ null && (Component)) {
    render() {
        const settings = {
            autoplay: false,
            infinite: true,
            lazyLoad: true,
            initialSlide: 2,
            slidesToShow: 1,
            speed: 500,
            dotsClass: "slick-dots slick-thumb",
            dots: true,
            pauseOnHover: true,
            appendDots: (dots)=>/*#__PURE__*/ _jsx("div", {
                    style: {
                        backgroundColor: "#black",
                        borderRadius: "10px",
                        padding: "40px"
                    },
                    children: /*#__PURE__*/ _jsxs("ul", {
                        style: {
                            margin: "0px"
                        },
                        children: [
                            " ",
                            dots,
                            " "
                        ]
                    })
                })
            ,
            customPaging: (i)=>/*#__PURE__*/ _jsx("div", {
                    style: {
                        width: "30px",
                        color: "white"
                    },
                    children: i + 1
                })
        };
        return /*#__PURE__*/ _jsx("div", {
            className: "container w-full h-full overflow-hidden ",
            children: /*#__PURE__*/ _jsxs(Slider, {
                ...settings,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "flex justify-center h-full",
                            children: /*#__PURE__*/ _jsx(Image, {
                                height: "800",
                                width: "1200",
                                className: " w-full h-full object-contain justify-center p-4 ",
                                src: this.props.img1,
                                alt: " \u0645\u062F\u06CC\u0631\u06CC\u062A \u0622\u0646\u0644\u0627\u06CC\u0646"
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "flex justify-center h-full ",
                            children: /*#__PURE__*/ _jsx(Image, {
                                height: "800",
                                width: "1200",
                                className: " w-full h-screen object-contain justify-center p-4 ",
                                src: this.props.img2,
                                alt: "\u0631\u0628\u0627\u062A\u06CC\u06A9"
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex justify-center h-5/6",
                                children: /*#__PURE__*/ _jsx(Image, {
                                    height: "800",
                                    width: "1200",
                                    className: "sm:w-[50%] object-contain justify-center p-4",
                                    src: this.props.img3,
                                    alt: "\u0627\u06CC\u0646\u062A\u0631\u0646\u062A \u0627\u0634\u06CC\u0627"
                                })
                            }),
                            /*#__PURE__*/ _jsxs("h1", {
                                className: "text-[#60ece1] text-xl text-center pb-10",
                                children: [
                                    " ",
                                    this.props.title3
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "flex justify-center h-5/6",
                            children: /*#__PURE__*/ _jsx(Image, {
                                height: "800",
                                width: "1200",
                                className: "sm:w-[50%] object-contain justify-center p-4 ",
                                src: this.props.img4,
                                alt: "\u0634\u0631\u06A9\u062A \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC"
                            })
                        })
                    })
                ]
            })
        });
    }
};


/***/ })

};
;