"use strict";
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 3122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3280);
/* harmony import */ var react_hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hammerjs__WEBPACK_IMPORTED_MODULE_3__);




class React360Viewer extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor(){
        super();
        //this.imageContainerRef = React.createRef();
        this.viewPercentageRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
        this.viewPortElementRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
        this.canvas = null;
        this.ctx = null;
        this.isMobile = true;
        this.imageData = [];
        this.images = [];
        this.loadedImages = 0;
        this.viewerPercentage = null;
        this.currentImage = null;
        this.currentLeftPosition = this.currentTopPosition = 0;
        this.currentCanvasImage = null;
        this.centerX = 0;
        this.centerY = 0;
        this.movementStart = 0;
        this.movement = false;
        this.speedFactor = 20;
        this.activeImage = 1;
        this.stopAtEdges = false;
        this.state = {
            lastX: 0,
            lastY: 0,
            minScale: 1,
            maxScale: 1,
            scale: 1,
            customOffset: 10,
            currentScale: 1,
            currentTopPosition: 0,
            currentLeftPosition: 0,
            selectMenuOption: 1,
            currentImage: null,
            dragging: false,
            canvas: null,
            ctx: null,
            dragStart: null,
            currentCanvasImage: null,
            isFullScreen: false,
            viewPortElementWidth: null,
            movementStart: 0,
            movement: false,
            dragSpeed: 100,
            speedFactor: 13,
            activeImage: 1,
            stopAtEdges: false,
            panmode: false,
            currentLoop: 0,
            loopTimeoutId: 0,
            playing: false,
            imagesLoaded: false
        };
    }
    componentDidMount() {
        this.disableZoomin();
        this.viewerPercentage = this.viewPercentageRef.current;
        this.viewPortElementRef = this.viewerContainerRef.getElementsByClassName("v360-viewport-container")[0];
        this.fetchData();
    }
    fetchData() {
        for(let i = this.props.i; i <= this.props.amount; i++){
            const imageIndex = this.props.paddingIndex ? this.lpad(i, "0", 2) : i;
            const fileName = this.props.fileName.replace("{index}", imageIndex);
            const filePath = `${this.props.imagePath}/${fileName}`;
            this.imageData.push(filePath);
        }
        this.preloadImages();
    }
    lpad(str, padString, length) {
        str = str.toString();
        while(str.length < length)str = padString + str;
        return str;
    }
    preloadImages() {
        if (this.imageData.length) {
            try {
                this.imageData.forEach((src)=>{
                    this.addImage(src);
                });
            } catch (error) {
                console.error(`Something went wrong while loading images: ${error.message}`);
            }
        } else {
            console.log("No Images Found");
        }
    }
    addImage(resultSrc) {
        const image = new Image();
        image.src = resultSrc;
        image.onload = this.onImageLoad.bind(this);
        image.onerror = this.onImageLoad.bind(this);
        this.images.push(image);
    }
    onImageLoad(event) {
        const percentage = Math.round(this.loadedImages / this.props.amount * 100);
        this.loadedImages += 1;
        this.updatePercentageInLoader(percentage);
        if (this.loadedImages === this.props.amount) {
            this.onAllImagesLoaded(event);
        } else if (this.loadedImages === 1) {
            console.log("load first image");
        }
    }
    updatePercentageInLoader(percentage) {
        if (this.loader) {
            this.loader.style.width = percentage + "%";
        }
        if (this.view360Icon) {
            this.view360Icon.innerText = percentage + "%";
        }
        this.viewerPercentage.innerHTML = percentage + "%";
        console.log(percentage + "%");
    }
    onAllImagesLoaded(e) {
        this.setState({
            imagesLoaded: true
        });
        this.initData();
    }
    initData() {
        //console.log(this.imageContainerRef)
        this.canvas = this.imageContainerRef;
        this.ctx = this.canvas.getContext("2d");
        //console.log('initialize data here')
        this.attachEvents();
        this.checkMobile();
        this.loadInitialImage();
        this.setState({
            playing: this.props.autoplay
        });
    }
    attachEvents() {
        if (this.state.panmode) {
            this.bindPanModeEvents();
        } else {
            this.bind360ModeEvents();
        }
    }
    bindPanModeEvents() {
        this.viewPortElementRef.removeEventListener("touchend", this.touchEnd);
        this.viewPortElementRef.removeEventListener("touchstart", this.touchStart);
        this.viewPortElementRef.removeEventListener("touchmove", this.touchMove);
        this.viewPortElementRef.addEventListener("touchend", this.stopDragging);
        this.viewPortElementRef.addEventListener("touchstart", this.startDragging);
        this.viewPortElementRef.addEventListener("touchmove", this.doDragging);
        this.viewPortElementRef.removeEventListener("mouseup", this.stopMoving);
        this.viewPortElementRef.removeEventListener("mousedown", this.startMoving);
        this.viewPortElementRef.removeEventListener("mousemove", this.doMoving);
        this.viewPortElementRef.addEventListener("mouseup", this.stopDragging);
        this.viewPortElementRef.addEventListener("mousedown", this.startDragging);
        this.viewPortElementRef.addEventListener("mousemove", this.doDragging);
    }
    bind360ModeEvents() {
        this.viewPortElementRef.removeEventListener("touchend", this.stopDragging);
        this.viewPortElementRef.removeEventListener("touchstart", this.startDragging);
        this.viewPortElementRef.removeEventListener("touchmove", this.doDragging);
        this.viewPortElementRef.addEventListener("touchend", this.touchEnd);
        this.viewPortElementRef.addEventListener("touchstart", this.touchStart);
        this.viewPortElementRef.addEventListener("touchmove", this.touchMove);
        this.viewPortElementRef.removeEventListener("mouseup", this.stopDragging);
        this.viewPortElementRef.removeEventListener("mousedown", this.startDragging);
        this.viewPortElementRef.removeEventListener("mousemove", this.doDragging);
        this.viewPortElementRef.addEventListener("mouseup", this.stopMoving);
        this.viewPortElementRef.addEventListener("mousedown", this.startMoving);
        this.viewPortElementRef.addEventListener("mousemove", this.doMoving);
    }
    startDragging = (evt)=>{
        this.dragging = true;
        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = "none";
        this.setLastPositions(evt);
        this.dragStart = this.ctx.transformedPoint(this.state.lastX, this.state.lastY);
    };
    setLastPositions(evt) {
        if (this.isMobile) {
            this.setState({
                lastX: evt.touches[0].offsetX || evt.touches[0].pageX - this.canvas.offsetLeft,
                lastY: evt.touches[0].offsetY || evt.touches[0].pageY - this.canvas.offsetTop
            });
        } else {
            this.setState({
                lastX: evt.offsetX || evt.pageX - this.canvas.offsetLeft,
                lastY: evt.offsetY || evt.pageY - this.canvas.offsetTop
            });
        }
    }
    doDragging = (evt)=>{
        this.setLastPositions(evt);
        if (this.dragStart) {
            let pt = this.ctx.transformedPoint(this.state.lastX, this.state.lastY);
            this.ctx.translate(pt.x - this.dragStart.x, pt.y - this.dragStart.y);
            //redraw();
            this.redraw();
        }
    };
    stopDragging = (evt)=>{
        this.dragging = false;
        this.dragStart = null;
    };
    checkMobile() {
        this.isMobile = !!("ontouchstart" in window || navigator.msMaxTouchPoints);
    }
    loadInitialImage() {
        this.currentImage = this.imageData[0];
        this.setImage();
    }
    setImage(cached = false) {
        this.currentLeftPosition = this.currentTopPosition = 0;
        if (!cached) {
            this.currentCanvasImage = new Image();
            this.currentCanvasImage.crossOrigin = "anonymous";
            this.currentCanvasImage.src = this.currentImage;
            this.currentCanvasImage.onload = ()=>{
                let viewportElement = this.viewPortElementRef.getBoundingClientRect();
                this.canvas.width = this.state.isFullScreen ? viewportElement.width : this.currentCanvasImage.width;
                this.canvas.height = this.state.isFullScreen ? viewportElement.height : this.currentCanvasImage.height;
                this.trackTransforms(this.ctx);
                this.redraw();
            };
            this.currentCanvasImage.onerror = ()=>{
                console.log("cannot load this image");
            };
        } else {
            this.currentCanvasImage = this.images[0];
            let viewportElement = this.viewPortElementRef.getBoundingClientRect();
            this.canvas.width = this.state.isFullScreen ? viewportElement.width : this.currentCanvasImage.width;
            this.canvas.height = this.state.isFullScreen ? viewportElement.height : this.currentCanvasImage.height;
            this.trackTransforms(this.ctx);
            this.redraw();
        }
    }
    redraw() {
        try {
            let p1 = this.ctx.transformedPoint(0, 0);
            let p2 = this.ctx.transformedPoint(this.canvas.width, this.canvas.height);
            let hRatio = this.canvas.width / this.currentCanvasImage.width;
            let vRatio = this.canvas.height / this.currentCanvasImage.height;
            let ratio = Math.min(hRatio, vRatio);
            let centerShift_x = (this.canvas.width - this.currentCanvasImage.width * ratio) / 2;
            let centerShift_y = (this.canvas.height - this.currentCanvasImage.height * ratio) / 2;
            this.ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
            this.centerX = this.currentCanvasImage.width * ratio / 2;
            this.centerY = this.currentCanvasImage.height * ratio / 2;
            //center image
            this.ctx.drawImage(this.currentCanvasImage, this.currentLeftPosition, this.currentTopPosition, this.currentCanvasImage.width, this.currentCanvasImage.height, centerShift_x, centerShift_y, this.currentCanvasImage.width * ratio, this.currentCanvasImage.height * ratio);
        //this.addHotspots()
        } catch (e) {
            this.trackTransforms(this.ctx);
        }
    }
    trackTransforms(ctx) {
        return new Promise((resolve)=>{
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var xform = svg.createSVGMatrix();
            this.ctx.getTransform = function() {
                return xform;
            };
            var savedTransforms = [];
            var save = ctx.save;
            this.ctx.save = ()=>{
                savedTransforms.push(xform.translate(0, 0));
                return save.call(this.ctx);
            };
            var restore = ctx.restore;
            this.ctx.restore = ()=>{
                xform = savedTransforms.pop();
                return restore.call(this.ctx);
            };
            var scale = this.ctx.scale;
            this.ctx.scale = (sx, sy)=>{
                xform = xform.scaleNonUniform(sx, sy);
                return scale.call(this.ctx, sx, sy);
            };
            var rotate = this.ctx.rotate;
            this.ctx.rotate = (radians)=>{
                xform = xform.rotate(radians * 180 / Math.PI);
                return rotate.call(this.ctx, radians);
            };
            var translate = this.ctx.translate;
            this.ctx.translate = (dx, dy)=>{
                xform = xform.translate(dx, dy);
                return translate.call(this.ctx, dx, dy);
            };
            var transform = this.ctx.transform;
            this.ctx.transform = (a, b, c, d, e, f)=>{
                var m2 = svg.createSVGMatrix();
                m2.a = a;
                m2.b = b;
                m2.c = c;
                m2.d = d;
                m2.e = e;
                m2.f = f;
                xform = xform.multiply(m2);
                return transform.call(this.ctx, a, b, c, d, e, f);
            };
            var setTransform = this.ctx.setTransform;
            this.ctx.setTransform = (a, b, c, d, e, f)=>{
                xform.a = a;
                xform.b = b;
                xform.c = c;
                xform.d = d;
                xform.e = e;
                xform.f = f;
                return setTransform.call(this.ctx, a, b, c, d, e, f);
            };
            var pt = svg.createSVGPoint();
            this.ctx.transformedPoint = (x, y)=>{
                pt.x = x;
                pt.y = y;
                return pt.matrixTransform(xform.inverse());
            };
            resolve(this.ctx);
        });
    }
    prev = (e)=>{
        //console.log(this.currentLeftPosition)
        /* this.setState({
            currentLeftPosition: 10
        }) */ //this.currentLeftPosition = 10
        (this.props.spinReverse) ? this.turnRight() : this.turnLeft();
    };
    next = (e)=>{
        this.props.spinReverse ? this.turnLeft() : this.turnRight();
    };
    resetPosition = ()=>{
        this.currentScale = 1;
        this.activeImage = 1;
        this.setImage(true);
    };
    turnLeft() {
        this.moveActiveIndexDown(1);
    }
    turnRight() {
        this.moveActiveIndexUp(1);
    }
    moveActiveIndexUp(itemsSkipped) {
        if (this.stopAtEdges) {
            if (this.activeImage + itemsSkipped >= this.props.amount) {
                this.activeImage = this.props.amount;
            } else {
                this.activeImage += itemsSkipped;
            }
        } else {
            this.activeImage = (this.activeImage + itemsSkipped) % this.props.amount || this.props.amount;
        }
        this.update();
    }
    moveActiveIndexDown(itemsSkipped) {
        if (this.stopAtEdges) {
            if (this.activeImage - itemsSkipped <= 1) {
                this.activeImage = 1;
            } else {
                this.activeImage -= itemsSkipped;
            }
        } else {
            if (this.activeImage - itemsSkipped < 1) {
                this.activeImage = this.props.amount + (this.activeImage - itemsSkipped);
            } else {
                this.activeImage -= itemsSkipped;
            }
        }
        this.update();
    }
    update() {
        const image = this.images[this.activeImage - 1];
        this.currentCanvasImage = image;
        this.redraw();
    }
    zoomImage = (evt)=>{
        this.setState({
            lastX: evt.offsetX || evt.pageX - this.canvas.offsetLeft,
            lastY: evt.offsetY || evt.pageY - this.canvas.offsetTop
        });
        var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.deltaY ? -evt.deltaY : 0;
        if (delta) this.zoom(delta);
    //return evt.preventDefault() && false;
    };
    zoomIn = (evt)=>{
        this.setState({
            lastX: this.centerX,
            lastY: this.centerY
        });
        //this.lastY = this.centerY
        this.zoom(2);
    };
    zoomOut = (evt)=>{
        this.setState({
            lastX: this.centerX,
            lastY: this.centerY
        });
        this.zoom(-2);
    };
    zoom(clicks) {
        console.log(this.lastX + " - " + this.lastY);
        let factor = Math.pow(1.01, clicks);
        //console.log(factor)
        if (factor > 1) {
            this.currentScale += factor;
        } else {
            if (this.currentScale - factor > 1) this.currentScale -= factor;
            else this.currentScale = 1;
        }
        if (this.currentScale > 1) {
            let pt = this.ctx.transformedPoint(this.state.lastX, this.state.lastY);
            this.ctx.translate(pt.x, pt.y);
            //console.log(this.currentScale)
            this.ctx.scale(factor, factor);
            this.ctx.translate(-pt.x, -pt.y);
            this.redraw();
        }
    }
    disableZoomin() {
        document.addEventListener("gesturestart", function(e) {
            e.preventDefault();
            document.body.style.zoom = 0.99;
        });
        document.addEventListener("gesturechange", function(e) {
            e.preventDefault();
            document.body.style.zoom = 0.99;
        });
        document.addEventListener("gestureend", function(e) {
            e.preventDefault();
            document.body.style.zoom = 1;
        });
    }
    onMove(pageX) {
        if (pageX - this.movementStart >= this.speedFactor) {
            let itemsSkippedRight = Math.floor((pageX - this.movementStart) / this.speedFactor) || 1;
            this.movementStart = pageX;
            if (this.props.spinReverse) {
                this.moveActiveIndexDown(itemsSkippedRight);
            } else {
                this.moveActiveIndexUp(itemsSkippedRight);
            }
            this.redraw();
        } else if (this.movementStart - pageX >= this.speedFactor) {
            let itemsSkippedLeft = Math.floor((this.movementStart - pageX) / this.speedFactor) || 1;
            this.movementStart = pageX;
            if (this.props.spinReverse) {
                this.moveActiveIndexUp(itemsSkippedLeft);
            } else {
                this.moveActiveIndexDown(itemsSkippedLeft);
            }
            this.redraw();
        }
    }
    startMoving = (evt)=>{
        this.movement = true;
        this.movementStart = evt.pageX;
        this.viewPortElementRef.style.cursor = "default";
    };
    doMoving = (evt)=>{
        if (this.movement) {
            this.onMove(evt.clientX);
        }
    };
    stopMoving = (evt)=>{
        this.movement = false;
        this.movementStart = 0;
        this.viewPortElementRef.style.cursor = "default";
    };
    touchStart = (evt)=>{
        this.movementStart = evt.touches[0].clientX;
    };
    touchMove = (evt)=>{
        this.onMove(evt.touches[0].clientX);
    };
    touchEnd = ()=>{
        this.movementStart = 0;
    };
    play = (e)=>{
        this.setState({
            loopTimeoutId: window.setInterval(()=>this.loopImages()
            , 100)
        });
    };
    onSpin() {
        if (this.state.playing || this.state.loopTimeoutId) {
            this.stop();
        }
    }
    stop() {
        if (this.activeImage === 1) {
            this.setState({
                currentLoop: 0
            });
        }
        this.setState({
            playing: true
        });
        window.clearTimeout(this.state.loopTimeoutId);
    }
    loopImages() {
        let loop = this.props.loop ? this.props.loop : 1;
        if (this.activeImage === 1) {
            if (this.state.currentLoop === loop) {
                this.stop();
            } else {
                this.setState({
                    currentLoop: this.state.currentLoop + 1
                });
                this.next();
            }
        } else {
            this.next();
        }
    }
    togglePlay = (e)=>{
        this.setState({
            playing: !this.state.playing
        });
    };
    togglePanMode = (e)=>{
        this.setState({
            panmode: !this.state.panmode
        });
    };
    toggleFullScreen = (e)=>{
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
    };
    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentLeftPosition !== prevState.currentLeftPosition) {
            console.log("Left Position Changed");
        }
        if (this.state.panmode !== prevState.panmode) {
            this.attachEvents();
        }
        if (this.state.playing !== prevState.playing) {
            if (!this.state.playing) {
                this.stop();
            } else {
                this.play();
            }
        }
        if (this.state.isFullScreen !== prevState.isFullScreen) {
            if (!this.state.isFullScreen) {
                //exit full screen
                this.viewerContainerRef.classList.remove("v360-main");
                this.viewerContainerRef.classList.remove("v360-fullscreen");
            } else {
                //enter full screen
                this.viewerContainerRef.classList.add("v360-main");
                this.viewerContainerRef.classList.add("v360-fullscreen");
            }
            this.setImage();
        }
    }
    handlePinch = (e)=>{
        if (e.scale < this.currentScale) {
            // zoom in
            this.zoomIn();
        } else if (e.scale > this.currentScale) {
            // zoom out
            this.zoomOut();
        }
    //lastScale = e.scale;
    };
    pinchOut = ()=>{
        this.currentScale = 1;
    };
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                animation: "circle 1s ease-in-out infinite alternate both"
            },
            className: "jsx-fcf33ed64bf3b50d",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: (inputEl)=>{
                        this.viewerContainerRef = inputEl;
                    },
                    id: "identifier",
                    className: "jsx-fcf33ed64bf3b50d" + " " + "v360-viewer-container",
                    children: [
                        !this.state.imagesLoaded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-fcf33ed64bf3b50d" + " " + "v360-viewport",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-fcf33ed64bf3b50d" + " " + "v360-spinner-grow"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    ref: this.viewPercentageRef,
                                    className: "jsx-fcf33ed64bf3b50d" + " " + "v360-percentage-text"
                                })
                            ]
                        }) : "",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_hammerjs__WEBPACK_IMPORTED_MODULE_3___default()), {
                            options: {
                                recognizers: {
                                    pinch: {
                                        enable: true
                                    }
                                }
                            },
                            /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-fcf33ed64bf3b50d" + " " + "v360-viewport-container v360-viewport",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                                    ref: (inputEl)=>{
                                        this.imageContainerRef = inputEl;
                                    },
                                    className: "jsx-fcf33ed64bf3b50d" + " " + "v360-image-container"
                                })
                            })
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "fcf33ed64bf3b50d",
                    children: '.v360-viewport.jsx-fcf33ed64bf3b50d{width:100%;height:100%;overflow:hidden;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.viewport-wrapper.wide.jsx-fcf33ed64bf3b50d{width:100%}.v360-viewport.jsx-fcf33ed64bf3b50d iframe.jsx-fcf33ed64bf3b50d{width:100%;height:100%;position:relative;-webkit-transform-origin:center center;-moz-transform-origin:center center;-ms-transform-origin:center center;-o-transform-origin:center center;transform-origin:center center;*/\n}.v360-viewport.jsx-fcf33ed64bf3b50d img.jsx-fcf33ed64bf3b50d{position:relative}.v360-main.jsx-fcf33ed64bf3b50d{filter:alpha(opacity=50);cursor:default}.v360-image-container.jsx-fcf33ed64bf3b50d{width:100%;height:600px;-o-object-fit:contain;object-fit:contain;background-repeat:no-repeat;background-position:center;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain;position:relative}@media screen and (max-width:780px){.v360-image-container.jsx-fcf33ed64bf3b50d{height:400px}}@media screen and (max-width:480px){.v360-image-container.jsx-fcf33ed64bf3b50d{height:100%}}.v360-product-box-shadow.jsx-fcf33ed64bf3b50d{position:absolute;top:0px;left:0px;right:0px;bottom:0px;-webkit-box-shadow:rgb(34,34,34)0px 0px 100px inset;-moz-box-shadow:rgb(34,34,34)0px 0px 100px inset;box-shadow:rgb(34,34,34)0px 0px 100px inset}.tooltip.jsx-fcf33ed64bf3b50d{position:relative;display:inline-block}.tooltip.jsx-fcf33ed64bf3b50d .tooltiptext.jsx-fcf33ed64bf3b50d{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:5px 0;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;-webkit-transition:opacity.3s;-moz-transition:opacity.3s;-o-transition:opacity.3s;transition:opacity.3s}.tooltip.jsx-fcf33ed64bf3b50d .tooltiptext.jsx-fcf33ed64bf3b50d::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}.tooltip.jsx-fcf33ed64bf3b50d:hover .tooltiptext.jsx-fcf33ed64bf3b50d{visibility:visible;opacity:1}.tooltip.jsx-fcf33ed64bf3b50d{opacity:1!important}'
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React360Viewer);


/***/ })

};
;