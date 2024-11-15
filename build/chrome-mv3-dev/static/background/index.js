(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gwbQK":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/max/Downloads/index/Copilot/.plasmo/static/background/index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 59560
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _messaging = require("./messaging");
var _index = require("../../../background/index");

},{"./messaging":"gGuoe","../../../background/index":"leaNT"}],"gGuoe":[function(require,module,exports) {
// @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _closeWindow = require("~background/messages/close-window");
var _closeWindowDefault = parcelHelpers.interopDefault(_closeWindow);
var _fixPartitionCookie = require("~background/messages/fix-partition-cookie");
var _fixPartitionCookieDefault = parcelHelpers.interopDefault(_fixPartitionCookie);
var _metasoSession = require("~background/messages/metaso-session");
var _metasoSessionDefault = parcelHelpers.interopDefault(_metasoSession);
var _openNewWindow = require("~background/messages/open-new-window");
var _openNewWindowDefault = parcelHelpers.interopDefault(_openNewWindow);
var _checkLogin = require("~background/messages/copilot/check-login");
var _checkLoginDefault = parcelHelpers.interopDefault(_checkLogin);
var _initCopilotConversation = require("~background/messages/copilot/init-copilot-conversation");
var _initCopilotConversationDefault = parcelHelpers.interopDefault(_initCopilotConversation);
var _uploadFile = require("~background/messages/copilot/upload-file");
var _uploadFileDefault = parcelHelpers.interopDefault(_uploadFile);
var _createConversation = require("~background/messages/kimi/create-conversation");
var _createConversationDefault = parcelHelpers.interopDefault(_createConversation);
var _preSignUrl = require("~background/messages/kimi/pre-sign-url");
var _preSignUrlDefault = parcelHelpers.interopDefault(_preSignUrl);
var _promptSnippetInstance = require("~background/messages/kimi/prompt-snippet-instance");
var _promptSnippetInstanceDefault = parcelHelpers.interopDefault(_promptSnippetInstance);
var _refreshAccessToken = require("~background/messages/kimi/refresh-access-token");
var _refreshAccessTokenDefault = parcelHelpers.interopDefault(_refreshAccessToken);
var _chat = require("~background/ports/kimi/chat");
var _chatDefault = parcelHelpers.interopDefault(_chat);
globalThis.__plasmoInternalPortMap = new Map();
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse)=>{
    request?.name;
    return true;
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    switch(request.name){
        case "close-window":
            (0, _closeWindowDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "fix-partition-cookie":
            (0, _fixPartitionCookieDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "metaso-session":
            (0, _metasoSessionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "open-new-window":
            (0, _openNewWindowDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "copilot/check-login":
            (0, _checkLoginDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "copilot/init-copilot-conversation":
            (0, _initCopilotConversationDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "copilot/upload-file":
            (0, _uploadFileDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "kimi/create-conversation":
            (0, _createConversationDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "kimi/pre-sign-url":
            (0, _preSignUrlDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "kimi/prompt-snippet-instance":
            (0, _promptSnippetInstanceDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "kimi/refresh-access-token":
            (0, _refreshAccessTokenDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        default:
            break;
    }
    return true;
});
chrome.runtime.onConnect.addListener(function(port) {
    globalThis.__plasmoInternalPortMap.set(port.name, port);
    port.onMessage.addListener(function(request) {
        switch(port.name){
            case "kimi/chat":
                (0, _chatDefault.default)({
                    port,
                    ...request
                }, {
                    send: (p)=>port.postMessage(p)
                });
                break;
            default:
                break;
        }
    });
});

},{"~background/messages/close-window":"j462m","~background/messages/fix-partition-cookie":"inQBM","~background/messages/metaso-session":"f8NRo","~background/messages/open-new-window":"b4qvO","~background/messages/copilot/check-login":"rk6QW","~background/messages/copilot/init-copilot-conversation":"lcGOd","~background/messages/copilot/upload-file":"fAhsG","~background/messages/kimi/create-conversation":"iA03j","~background/messages/kimi/pre-sign-url":"fkqTx","~background/messages/kimi/prompt-snippet-instance":"bNjb2","~background/messages/kimi/refresh-access-token":"feI2I","~background/ports/kimi/chat":"2UFGH","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"j462m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    chrome.windows.remove(parseInt(req.body.windowId), function() {
        res.send("close window");
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"inQBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const setCookie = async (url, name, value)=>{
    return new Promise((resolve)=>{
        chrome.cookies.set({
            url,
            name,
            value
        }, function(cookie) {
            resolve(cookie);
        });
    });
};
const setPartitionCookie = async (domain, url)=>{
    return new Promise((resolve)=>{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        chrome.cookies.getAll({
            domain,
            partitionKey: {
            }
        }, async (cookies)=>{
            await Promise.all([
                ...cookies.map((cookie)=>{
                    console.trace(cookie);
                    if (cookie["partitionKey"]) return setCookie(url, cookie.name, cookie.value);
                })
            ]);
            resolve({});
        });
    });
};
const handler = async (req, res)=>{
    const { domain, url } = req.body;
    await setPartitionCookie(domain, url);
    res.send({});
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"f8NRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json, text/plain, */*");
    myHeaders.append("Accept-Language", "zh-CN,zh;q=0.9");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Origin", "https://metaso.cn");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append("is-mini-webview", "0");
    const raw = JSON.stringify({
        "question": req.body.searchText,
        "mode": "detail",
        "engineType": ""
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const response = await fetch("https://metaso.cn/api/session", requestOptions);
        const result = await response.json();
        res.send(result);
    } catch (e) {
        res.send(null);
    }
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"b4qvO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    const { width, height, screenWidth, screenHeight } = req.body;
    const left = Math.round(screenWidth / 2 - width / 2);
    const top = Math.round(screenHeight / 2 - height / 2);
    delete req.body.screenWidth;
    delete req.body.screenHeight;
    chrome.windows.create({
        ...req.body,
        width,
        height,
        left,
        top
    }, function(w) {
        res.send(w?.id);
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"rk6QW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
var _utils = require("~utils");
const handler = async (req, res)=>{
    const myHeaders = new Headers();
    myHeaders.append("x-ms-client-request-id", (0, _utils.createUuid)());
    myHeaders.append("x-ms-useragent", "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.12.3 OS/macOS");
    const request = await (0, _customFetchForChat.customChatFetch)("https://copilot.microsoft.com/turing/conversation/create?bundleVersion=1.1655.0", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });
    if (request.error) res.send([
        request.error,
        false
    ]);
    const text = await request?.response?.text();
    res.send([
        null,
        !!text
    ]);
};
exports.default = handler;

},{"~utils/custom-fetch-for-chat":"5tnxQ","~utils":"by5Ev","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5tnxQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatFetchResponse", ()=>ChatFetchResponse);
parcelHelpers.export(exports, "customChatFetch", ()=>customChatFetch);
var _errors = require("~utils/errors");
var _constants = require("~utils/constants");
class ChatFetchResponse {
    constructor(response, error){
        this.response = response;
        this.error = error;
    }
}
function handleHttpStatus(response) {
    const chatResponse = new ChatFetchResponse();
    const status = response.status;
    chatResponse.response = response;
    if (status < 200 || status >= 300) {
        if (status === 403) {
            chatResponse.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).CAPTCHA);
            console.log("handleHttpStatus", chatResponse.error);
        } else if (status === 401) chatResponse.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).UNAUTHORIZED);
        else if (status === 429) chatResponse.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).CONVERSATION_LIMIT);
        else chatResponse.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR);
    }
    return chatResponse;
}
async function customChatFetch(url, options, timeout = (0, _constants.CHAT_FETCH_TIMEOUT)) {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("customChatFetch", url, options, timeout);
    const timeoutId = setTimeout(()=>controller.abort(), timeout);
    try {
        const response = await fetch(url, {
            ...options,
            signal
        });
        clearTimeout(timeoutId);
        return handleHttpStatus(response);
    } catch (error) {
        console.log("error", error);
        clearTimeout(timeoutId);
        const r = new ChatFetchResponse();
        if (error.name === "AbortError") r.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).REQUEST_TIMEOUT_ABORT);
        else r.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).NETWORK_ERROR);
        return r;
    }
}

},{"~utils/errors":"hGYar","~utils/constants":"4Xvwm","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"hGYar":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorCode", ()=>ErrorCode);
parcelHelpers.export(exports, "ChatError", ()=>ChatError);
parcelHelpers.export(exports, "getErrorMessage", ()=>getErrorMessage);
var ErrorCode;
(function(ErrorCode) {
    ErrorCode["CONVERSATION_LIMIT"] = "CONVERSATION_LIMIT";
    ErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    ErrorCode["CAPTCHA"] = "CAPTCHA";
    ErrorCode["COPILOT_DISENGAGED"] = "COPILOT_DISENGAGED";
    ErrorCode["COPILOT_WEBSOCKET_ERROR"] = "COPILOT_WEBSOCKET_ERROR";
    ErrorCode["COPILOT_INVALID_REQUEST"] = "COPILOT_INVALID_REQUEST";
    ErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["REQUEST_TIMEOUT_ABORT"] = "REQUEST_TIMEOUT_ABORT";
    ErrorCode["MODEL_INTERNAL_ERROR"] = "MODEL_INTERNAL_ERROR";
    ErrorCode["UPLOAD_FILE_NOT_SUPPORTED"] = "UPLOAD_FILE_NOT_SUPPORTED";
    ErrorCode["FILE_OTHER"] = "FILE_OTHER";
    ErrorCode["MODEL_NO_PERMISSION"] = "MODEL_NO_PERMISSION";
})(ErrorCode || (ErrorCode = {}));
class ChatError {
    constructor(code, message){
        this.message = message ?? getErrorMessage(code);
        this.code = code;
    }
}
function getErrorMessage(errorCode) {
    switch(errorCode){
        case ErrorCode.CONVERSATION_LIMIT:
            return "Sorry, the conversation limit has been reached. Please try later.";
        case ErrorCode.UNKNOWN_ERROR:
            return "Sorry, something went wrong. Please restart the session.";
        case ErrorCode.CAPTCHA:
            return "Please pass the Cloudflare check.";
        // case ErrorCode.CHATGPT_UNAUTHORIZED:
        //     return 'There is no logged-in ChatGPT account in this browser.'
        // case ErrorCode.CHATGPT_AUTH:
        //     return 'ChatGPT authentication error.'
        // case ErrorCode.GPT4_MODEL_WAITLIST:
        //     return 'Sorry, the GPT-4 model is currently in a waitlist.'
        // case ErrorCode.COPILOT_UNAUTHORIZED:
        //     return 'Unauthorized access to Copilot.'
        // case ErrorCode.CAPTCHA:
        //     return 'Please solve the Captcha to access Copilot.'
        case ErrorCode.COPILOT_INVALID_REQUEST:
            return "Please restart the Copilot session.";
        // case ErrorCode.API_KEY_NOT_SET:
        //     return 'API key not set.'
        // case ErrorCode.BARD_EMPTY_RESPONSE:
        //     return 'Bard returned an empty response.'
        // case ErrorCode.BARD_UNAUTHORIZED:
        //     return 'Unauthorized access to Bard.'
        // case ErrorCode.MISSING_POE_HOST_PERMISSION:
        //     return 'Missing permission to host Poe.'
        // case ErrorCode.POE_UNAUTHORIZED:
        //     return 'Unauthorized access to Poe.'
        // case ErrorCode.MISSING_HOST_PERMISSION:
        //     return 'Missing permission to host.'
        // case ErrorCode.XUNFEI_UNAUTHORIZED:
        //     return 'Unauthorized access to Xunfei.'
        case ErrorCode.NETWORK_ERROR:
            return "Network error.";
        // case ErrorCode.POE_MESSAGE_LIMIT:
        //     return 'Poe message limit reached.'
        // case ErrorCode.LMSYS_SESSION_EXPIRED:
        //     return 'Lmsys session expired.'
        // case ErrorCode.CHATGPT_INSUFFICIENT_QUOTA:
        //     return 'Insufficient ChatGPT quota.'
        // case ErrorCode.CLAUDE_WEB_UNAUTHORIZED:
        //     return 'Unauthorized access to Claude Web.'
        // case ErrorCode.CLAUDE_WEB_UNAVAILABLE:
        //     return 'Claude Web is unavailable.'
        // case ErrorCode.QIANWEN_WEB_UNAUTHORIZED:
        //     return 'Unauthorized access to Qianwen Web.'
        // case ErrorCode.BAICHUAN_WEB_UNAUTHORIZED:
        //     return 'Unauthorized access to Baichuan Web.'
        // case ErrorCode.LMSYS_WS_ERROR:
        //     return 'Lmsys websocket error.'
        // case ErrorCode.PPLX_FORBIDDEN_ERROR:
        //     return 'Forbidden error.'
        // case ErrorCode.TWITTER_UNAUTHORIZED:
        //     return 'Unauthorized access to Twitter.'
        // case ErrorCode.GROK_UNAVAILABLE:
        //     return 'Grok is unavailable.'
        // case ErrorCode.CUSTOM_ERROR:
        //     return message ?? 'Unknown error.'
        case ErrorCode.REQUEST_TIMEOUT_ABORT:
            return "Request timeout, aborted.";
        case ErrorCode.MODEL_INTERNAL_ERROR:
            return "Some went wrong, please try again.";
        default:
            return "Unknown error.";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"4Xvwm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHAT_FETCH_TIMEOUT", ()=>CHAT_FETCH_TIMEOUT);
const CHAT_FETCH_TIMEOUT = 20000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"by5Ev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "R_SCP_PARAM", ()=>R_SCP_PARAM);
parcelHelpers.export(exports, "IS_OPEN_IN_PLUGIN", ()=>IS_OPEN_IN_PLUGIN);
parcelHelpers.export(exports, "IS_OPEN_IN_CHALLENGE_WINDOW", ()=>IS_OPEN_IN_CHALLENGE_WINDOW);
parcelHelpers.export(exports, "IS_OPEN_IN_CHAT_AUTH_WINDOW", ()=>IS_OPEN_IN_CHAT_AUTH_WINDOW);
parcelHelpers.export(exports, "IS_OPEN_IN_CHAT_CAPTCHA_WINDOW", ()=>IS_OPEN_IN_CHAT_CAPTCHA_WINDOW);
parcelHelpers.export(exports, "WINDOW_FOR_REMOVE_STORAGE_KEY", ()=>WINDOW_FOR_REMOVE_STORAGE_KEY);
parcelHelpers.export(exports, "MESSAGE_ACTION_SYNC_SEARCH_TEXT", ()=>MESSAGE_ACTION_SYNC_SEARCH_TEXT);
parcelHelpers.export(exports, "DEVV_SEARCH_KEY", ()=>DEVV_SEARCH_KEY);
parcelHelpers.export(exports, "MESSAGE_ACTION_SHOULD_RELOAD_PERPLEXITY_IN_PANEL", ()=>MESSAGE_ACTION_SHOULD_RELOAD_PERPLEXITY_IN_PANEL);
parcelHelpers.export(exports, "MESSAGE_ACTION_SHOULD_RELOAD_PHIND_IN_PANEL", ()=>MESSAGE_ACTION_SHOULD_RELOAD_PHIND_IN_PANEL);
parcelHelpers.export(exports, "MESSAGE_ACTION_CLOSE_WINDOW_WITH_ID", ()=>MESSAGE_ACTION_CLOSE_WINDOW_WITH_ID);
parcelHelpers.export(exports, "MESSAGE_ACTION_RELOAD_SITE_FRAME", ()=>MESSAGE_ACTION_RELOAD_SITE_FRAME);
parcelHelpers.export(exports, "MESSAGE_ACTION_CHAT_PROVIDER_AUTH_SUCCESS", ()=>MESSAGE_ACTION_CHAT_PROVIDER_AUTH_SUCCESS);
parcelHelpers.export(exports, "MESSAGE_ACTION_CHAT_PROVIDER_CAPTCHA_SUCCESS", ()=>MESSAGE_ACTION_CHAT_PROVIDER_CAPTCHA_SUCCESS);
parcelHelpers.export(exports, "MESSAGE_ACTION_SET_PANEL_OPEN_OR_NOT", ()=>MESSAGE_ACTION_SET_PANEL_OPEN_OR_NOT);
parcelHelpers.export(exports, "MESSAGE_ACTION_SET_QUOTING_SELECTION_TEXT", ()=>MESSAGE_ACTION_SET_QUOTING_SELECTION_TEXT);
parcelHelpers.export(exports, "MESSAGE_ACTION_SET_QUOTING_CANCEL", ()=>MESSAGE_ACTION_SET_QUOTING_CANCEL);
parcelHelpers.export(exports, "MESSAGE_ACTION_SET_QUOTING_SELECTION_CLEAR_CURSOR", ()=>MESSAGE_ACTION_SET_QUOTING_SELECTION_CLEAR_CURSOR);
parcelHelpers.export(exports, "MESSAGE_CHECK_PANEL_IS_OPEN", ()=>MESSAGE_CHECK_PANEL_IS_OPEN);
parcelHelpers.export(exports, "STORAGE_WILL_REMOVED_WINDOW_KEY", ()=>STORAGE_WILL_REMOVED_WINDOW_KEY);
parcelHelpers.export(exports, "STORAGE_OPEN_PANEL_INIT_DATA", ()=>STORAGE_OPEN_PANEL_INIT_DATA);
parcelHelpers.export(exports, "STORAGE_OPEN_AI_DEVICE_ID", ()=>STORAGE_OPEN_AI_DEVICE_ID);
parcelHelpers.export(exports, "MESSAGE_ACTION_OPEN_PANEL", ()=>MESSAGE_ACTION_OPEN_PANEL);
parcelHelpers.export(exports, "MESSAGE_PANEL_OPENED_PING_FROM_PANEL", ()=>MESSAGE_PANEL_OPENED_PING_FROM_PANEL);
parcelHelpers.export(exports, "MESSAGE_ACTION_OPEN_PANEL_WITH_SEARCH_TEXT", ()=>MESSAGE_ACTION_OPEN_PANEL_WITH_SEARCH_TEXT);
parcelHelpers.export(exports, "MESSAGE_ACTION_OPEN_PANEL_ASK_AI", ()=>MESSAGE_ACTION_OPEN_PANEL_ASK_AI);
parcelHelpers.export(exports, "MESSAGE_UPDATE_PANEL_INIT_DATA", ()=>MESSAGE_UPDATE_PANEL_INIT_DATA);
parcelHelpers.export(exports, "PORT_LISTEN_PANEL_CLOSED_KEY", ()=>PORT_LISTEN_PANEL_CLOSED_KEY);
parcelHelpers.export(exports, "STORAGE_PANEL_OPEN_DATA_KEY", ()=>STORAGE_PANEL_OPEN_DATA_KEY);
parcelHelpers.export(exports, "PROMPT_PLACEHOLDER_TEXT", ()=>PROMPT_PLACEHOLDER_TEXT);
parcelHelpers.export(exports, "PROMPT_PLACEHOLDER_LANG", ()=>PROMPT_PLACEHOLDER_LANG);
parcelHelpers.export(exports, "getGoogleQuery", ()=>getGoogleQuery);
parcelHelpers.export(exports, "appendParamToUrl", ()=>appendParamToUrl);
parcelHelpers.export(exports, "addCspParamsToUrl", ()=>addCspParamsToUrl);
parcelHelpers.export(exports, "addMobileHeaderToUrl", ()=>addMobileHeaderToUrl);
parcelHelpers.export(exports, "openInPlugin", ()=>openInPlugin);
parcelHelpers.export(exports, "btoaObj", ()=>btoaObj);
parcelHelpers.export(exports, "atobObj", ()=>atobObj);
parcelHelpers.export(exports, "getLatestState", ()=>getLatestState);
parcelHelpers.export(exports, "createUuid", ()=>createUuid);
parcelHelpers.export(exports, "openWindowInFrontend", ()=>openWindowInFrontend);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "getCookiesInBackendByDomain", ()=>getCookiesInBackendByDomain);
parcelHelpers.export(exports, "getTimezoneOffsetMin", ()=>getTimezoneOffsetMin);
const R_SCP_PARAM = "--r-csp";
const IS_OPEN_IN_PLUGIN = "--opis";
const IS_OPEN_IN_CHALLENGE_WINDOW = "--oppcw";
const IS_OPEN_IN_CHAT_AUTH_WINDOW = "--opaw";
const IS_OPEN_IN_CHAT_CAPTCHA_WINDOW = "--oiccw";
const WINDOW_FOR_REMOVE_STORAGE_KEY = "--o_wk";
const MESSAGE_ACTION_SYNC_SEARCH_TEXT = "sync_search_text";
const DEVV_SEARCH_KEY = "--devvss";
const MESSAGE_ACTION_SHOULD_RELOAD_PERPLEXITY_IN_PANEL = "should_reload_perplexity_in_panel";
const MESSAGE_ACTION_SHOULD_RELOAD_PHIND_IN_PANEL = "should_reload_phind_in_panel";
const MESSAGE_ACTION_CLOSE_WINDOW_WITH_ID = "close_window_with_id";
const MESSAGE_ACTION_RELOAD_SITE_FRAME = "reload_site_frame";
const MESSAGE_ACTION_CHAT_PROVIDER_AUTH_SUCCESS = "auth_success";
const MESSAGE_ACTION_CHAT_PROVIDER_CAPTCHA_SUCCESS = "captcha_success";
const MESSAGE_ACTION_SET_PANEL_OPEN_OR_NOT = "set_panel_open_or_not";
const MESSAGE_ACTION_SET_QUOTING_SELECTION_TEXT = "set_quoting_selection_text";
const MESSAGE_ACTION_SET_QUOTING_CANCEL = "set_quoting_selection_text_cancel";
const MESSAGE_ACTION_SET_QUOTING_SELECTION_CLEAR_CURSOR = "set_quoting_selection_text_clear_cursor";
const MESSAGE_CHECK_PANEL_IS_OPEN = "message_check_panel_is_open";
const STORAGE_WILL_REMOVED_WINDOW_KEY = "will_removed_window_key";
const STORAGE_OPEN_PANEL_INIT_DATA = "open_panel_init_data";
const STORAGE_OPEN_AI_DEVICE_ID = "open_ai_device_id";
const MESSAGE_ACTION_OPEN_PANEL = "message_open_panel";
const MESSAGE_PANEL_OPENED_PING_FROM_PANEL = "MESSAGE_PANEL_OPENED_PING_FROM_PANEL";
const MESSAGE_ACTION_OPEN_PANEL_WITH_SEARCH_TEXT = "open_panel_with_search_text";
const MESSAGE_ACTION_OPEN_PANEL_ASK_AI = "open_panel_ask_ai_default";
const MESSAGE_UPDATE_PANEL_INIT_DATA = "update_panel_init_data";
const PORT_LISTEN_PANEL_CLOSED_KEY = "listen_panel_closed_key";
const STORAGE_PANEL_OPEN_DATA_KEY = "panel_open_data_key";
const PROMPT_PLACEHOLDER_TEXT = "${texts}";
const PROMPT_PLACEHOLDER_LANG = "${lang}";
const getGoogleQuery = function(url) {
    if (url.indexOf("www.google.com") === -1) return "";
    const urlObj = new URL(url);
    const urlParams = urlObj.searchParams;
    return urlParams.get("q") ?? "";
};
const appendParamToUrl = function appendParamToUrl(url, paramKey, paramValue) {
    // Check if URL already has a query string
    const hasQuery = url.includes("?");
    // Use '&' if query exists, '?' if not
    const separator = hasQuery ? "&" : "?";
    // Encode the parameter value to ensure special characters do not break the URL structure
    const encodedValue = encodeURIComponent(paramValue);
    // Append and return the complete URL
    return url + separator + paramKey + "=" + encodedValue;
};
const addCspParamsToUrl = function addCspParams(url) {
    return appendParamToUrl(url, R_SCP_PARAM, 1);
};
const addMobileHeaderToUrl = function addMobileHeader(url) {
    return appendParamToUrl(url, "--in-mobile", 1);
};
const openInPlugin = function(url) {
    return url.includes(IS_OPEN_IN_PLUGIN);
};
const btoaObj = function(obj) {
    for(const key in obj)obj[key] = btoa(obj[key].toString());
    return obj;
};
const atobObj = function(obj) {
    for(const key in obj)obj[key] = atob(obj[key]);
    return obj;
};
const getLatestState = function(dispatch) {
    return new Promise((resolve)=>{
        dispatch((prevState)=>{
            resolve(prevState);
            return prevState;
        });
    });
};
const createUuid = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
const openWindowInFrontend = function(href) {
    chrome.windows.getCurrent(function(currentWindow) {
        chrome.windows.create({
            url: href,
            left: currentWindow.left,
            top: currentWindow.top,
            width: currentWindow.width,
            height: currentWindow.height,
            type: "normal"
        });
    });
};
function debounce(callback, wait) {
    let timeoutId = null;
    const debounced = (...args)=>{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            callback(...args);
        }, wait);
    };
    return debounced;
}
function getCookiesInBackendByDomain(domain) {
    return new Promise((resolve)=>{
        // .perplexity.ai
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        chrome.cookies.getAll({
            domain,
            partitionKey: {
            }
        }, (cookies)=>{
            resolve(cookies.map((item)=>{
                return `${item.name}=${item.value}`;
            }).join(";"));
        });
    });
}
function getTimezoneOffsetMin() {
    const now = new Date();
    const timezoneOffsetMin = now.getTimezoneOffset();
    return -timezoneOffsetMin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"lcGOd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _openAiInterface = require("~libs/open-ai/open-ai-interface");
var _errors = require("~utils/errors");
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
class CoreUtils {
    static clamp(O, B, U) {
        return isNaN(O) || O <= B ? B : O >= U ? U : O;
    }
    static uuid() {
        return (this.partUUID() + this.partUUID() + "-" + this.partUUID() + "-" + this.partUUID() + "-" + this.partUUID() + "-" + this.partUUID() + this.partUUID() + this.partUUID()).toLowerCase();
    }
    static partUUID() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
    }
}
const runConversation = async function() {
    const myHeaders = new Headers();
    myHeaders.append("referer", "https://copilot.microsoft.com/?showconv=1");
    myHeaders.append("x-ms-client-request-id", CoreUtils.uuid());
    myHeaders.append("x-ms-useragent", "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.12.3 OS/macOS");
    // return new Promise((resolve, reject) => {
    //     // @ts-ignore
    //     fetch("https://copilot.microsoft.com/turing/userconsent?bundleVersion=1.1678.0&isStartOfConversation=true", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => {
    //             try {
    //                 const data = JSON.parse(result)
    //
    //                 resolve(data)
    //             } catch (e) {
    //                 reject(e)
    //             }
    //         })
    //         .catch((error) => reject(error));
    // })
    const r = await (0, _customFetchForChat.customChatFetch)("https://copilot.microsoft.com/turing/userconsent?bundleVersion=1.1678.0&isStartOfConversation=true", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });
    if (r.error) return [
        r.error,
        null
    ];
    try {
        return [
            null,
            JSON.parse(await r.response.text())
        ];
    } catch (e) {
        return [
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
            null
        ];
    }
};
const createConversation = async function() {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("referer", "https://copilot.microsoft.com/");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("x-ms-client-request-id", CoreUtils.uuid());
    myHeaders.append("x-ms-useragent", "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.12.3 OS/macOS");
    const r = await (0, _customFetchForChat.customChatFetch)("https://copilot.microsoft.com/turing/conversation/create?bundleVersion=1.1655.0", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });
    if (r.error) return [
        r.error,
        null
    ];
    try {
        const headers = r.response?.headers;
        const conversationSignature = headers?.get("X-Sydney-Conversationsignature") || "";
        const encryptedConversationSignature = headers?.get("X-Sydney-Encryptedconversationsignature");
        const text = await r.response?.text();
        if (!text) return [
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNAUTHORIZED),
            null
        ];
        const data = JSON.parse(text);
        return [
            null,
            {
                ...data,
                conversationSignature,
                encryptedConversationSignature
            }
        ];
    } catch (e) {
        console.log("headers==", e);
        return [
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
            null
        ];
    }
};
let lastConversation = null;
const handler = async (req, res)=>{
    const { conversationId, withRun } = req.body;
    const conversationErr = new (0, _openAiInterface.ConversationResponse)({
        conversation_id: conversationId,
        message_type: (0, _openAiInterface.ResponseMessageType).ERROR
    });
    console.trace("init-copilot-conversation", req.body);
    try {
        if (conversationId && lastConversation?.conversationId === conversationId) {
            res.send([
                null,
                lastConversation
            ]);
            console.trace("init-copilot-conversation 0", req.body);
            return;
        }
        const [conversationCreateErr, conversation] = await createConversation();
        console.trace("init-copilot-conversation 1", conversationCreateErr, conversation);
        if (conversationCreateErr) {
            conversationErr.error = conversationCreateErr;
            return res.send([
                conversationCreateErr,
                null
            ]);
        }
        if (withRun) {
            const [runErr] = await runConversation();
            console.trace("init-copilot-conversation 2", runErr);
            if (runErr) {
                conversationErr.error = runErr;
                return res.send([
                    runErr,
                    null
                ]);
            }
        }
        lastConversation = conversation;
        res.send([
            null,
            conversation
        ]);
    } catch (e) {
        console.error("init-copilot-conversation err", e);
        conversationErr.error = new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR);
        res.send([
            conversationErr,
            null
        ]);
    }
};
exports.default = handler;

},{"~libs/open-ai/open-ai-interface":"aFWut","~utils/errors":"hGYar","~utils/custom-fetch-for-chat":"5tnxQ","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"aFWut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GenerateStatus", ()=>GenerateStatus);
parcelHelpers.export(exports, "ResponseMessageType", ()=>ResponseMessageType);
parcelHelpers.export(exports, "ConversationResponse", ()=>ConversationResponse);
var GenerateStatus;
(function(GenerateStatus) {
    GenerateStatus["GENERATING"] = "generating";
    GenerateStatus["DONE"] = "done";
})(GenerateStatus || (GenerateStatus = {}));
var ResponseMessageType;
(function(ResponseMessageType) {
    ResponseMessageType["DONE"] = "done";
    ResponseMessageType["GENERATING"] = "generating";
    ResponseMessageType["TITLED"] = "titled";
    ResponseMessageType["ERROR"] = "error";
    ResponseMessageType["ERROR_RETRY_MESSAGE"] = "error_retry_message";
    ResponseMessageType["ERROR_NEED_NEW_CONVERSATION"] = "error_need_new_conversation";
})(ResponseMessageType || (ResponseMessageType = {}));
class ConversationResponse {
    constructor({ conversation_id, message_id, message_text, message_type, title, error, appendix }){
        this.conversation_id = conversation_id;
        this.message_id = message_id;
        this.message_text = message_text;
        this.message_type = message_type;
        this.error = error;
        this.title = title;
        this.appendix = appendix;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"fAhsG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
const handler = async (req, res)=>{
    const { conversationId, imageBase64 } = req.body;
    const myHeaders = new Headers();
    myHeaders.append("origin", "https://copilot.microsoft.com");
    myHeaders.append("referer", "https://copilot.microsoft.com/");
    const formData = new FormData();
    const rawData = {
        "imageInfo": {},
        "knowledgeRequest": {
            "invokedSkills": [
                "ImageById"
            ],
            "subscriptionId": "Bing.Chat.Multimodal",
            "invokedSkillsRequestData": {
                "enableFaceBlur": true
            },
            "convoData": {
                "convoid": conversationId,
                "convotone": "Balanced"
            }
        }
    };
    formData.append("knowledgeRequest", JSON.stringify(rawData));
    formData.append("imageBase64", imageBase64);
    const request = await (0, _customFetchForChat.customChatFetch)("https://copilot.microsoft.com/images/kblob?--cua=1", {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
    });
    if (request.error) return res.send([
        request.error,
        null
    ]);
    const response = await request?.response?.json();
    return res.send([
        null,
        response
    ]);
};
exports.default = handler;

},{"~utils/custom-fetch-for-chat":"5tnxQ","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"iA03j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
var _errors = require("~utils/errors");
var _kimi = require("~libs/chatbot/kimi");
const handler = async (req, res)=>{
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("accept", "*/*");
    myHeaders.append("origin", "https://kimi.moonshot.cn");
    // TODO
    myHeaders.append("r-timezone", "Asia/Shanghai");
    myHeaders.append("referer", "https://kimi.moonshot.cn/");
    // myHeaders.append("x-traffic-id", "co3939ucp7fct0va4ocg");
    const accessToken = await (0, _kimi.KimiBot).getAccessToken();
    if (accessToken) myHeaders.append("Authorization", `Bearer ${accessToken}`);
    const raw = JSON.stringify({
        "name": "unnamed session",
        "is_example": false
    });
    const r = await (0, _customFetchForChat.customChatFetch)("https://kimi.moonshot.cn/api/chat", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    });
    if (r.error) return res.send([
        r.error,
        null
    ]);
    try {
        const result = await r.response?.json();
        res.send([
            null,
            result
        ]);
    } catch (e) {
        res.send([
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
            null
        ]);
    }
};
exports.default = handler;

},{"~utils/custom-fetch-for-chat":"5tnxQ","~utils/errors":"hGYar","~libs/chatbot/kimi":"eRY7y","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"eRY7y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KimiBot", ()=>KimiBot);
var _errors = require("~utils/errors");
var _openAiInterface = require("~libs/open-ai/open-ai-interface");
var _messaging = require("@plasmohq/messaging");
var _storage = require("@plasmohq/storage");
var _utils = require("~utils");
var _botBase = require("~libs/chatbot/BotBase");
var _kimiSession = require("~libs/chatbot/kimi/kimiSession");
var _kimiSessionDefault = parcelHelpers.interopDefault(_kimiSession);
var _botSessionBase = require("~libs/chatbot/BotSessionBase");
var _kimiPng = require("data-base64:~assets/kimi.png");
var _kimiPngDefault = parcelHelpers.interopDefault(_kimiPng);
var _fileInstance = require("~libs/chatbot/kimi/fileInstance");
var _utils1 = require("~libs/chatbot/utils");
const STORAGE_REFRESH_TOKEN_KEY = "kimi_refresh_token";
const STORAGE_ACCESS_TOKEN_KEY = "kimi_access_token";
class KimiBot extends (0, _botBase.BotBase) {
    static #_ = (()=>{
        this.botName = "moonshot-v1";
    })();
    static #_1 = (()=>{
        this.logoSrc = (0, _kimiPngDefault.default);
    })();
    static #_2 = (()=>{
        this.loginUrl = "https://kimi.moonshot.cn";
    })();
    static #_3 = (()=>{
        this.maxTokenLimit = 400000;
    })();
    static get supportUploadImage() {
        return (0, _utils1.checkModelSupportUploadPDF)((0, _fileInstance.KimiSupportedMimeTypes));
    }
    static get supportUploadPDF() {
        return (0, _utils1.checkModelSupportUploadPDF)((0, _fileInstance.KimiSupportedMimeTypes));
    }
    static #_4 = (()=>{
        this.desc = "Suitable for online text generation, chatbots, text summarization, and creative writing.";
    })();
    constructor(params){
        super(params);
        this.botSession = (0, _kimiSessionDefault.default).getInstance(params.globalConversationId);
        this.fileInstance = (0, _fileInstance.KimiFileSingleton).getInstance();
    }
    static #_5 = (()=>{
        this.AUTH_WINDOW_KEY = "kawk";
    })();
    static async getAccessToken() {
        const storage = new (0, _storage.Storage)();
        return await storage.get(STORAGE_ACCESS_TOKEN_KEY) ?? "";
    }
    static setAccessToken(token) {
        const storage = new (0, _storage.Storage)();
        storage.set(STORAGE_ACCESS_TOKEN_KEY, token);
    }
    static setRefreshToken(token) {
        const storage = new (0, _storage.Storage)();
        storage.set(STORAGE_REFRESH_TOKEN_KEY, token);
    }
    static async getRefreshToken() {
        const storage = new (0, _storage.Storage)();
        return await storage.get(STORAGE_REFRESH_TOKEN_KEY) ?? "";
    }
    static async checkIsLogin() {
        const [err1] = await (0, _messaging.sendToBackground)({
            name: "kimi/prompt-snippet-instance"
        });
        if (err1) {
            if (err1.code === (0, _errors.ErrorCode).UNAUTHORIZED) {
                const [err2] = await (0, _messaging.sendToBackground)({
                    name: "kimi/refresh-access-token"
                });
                return [
                    err2,
                    false
                ];
            }
            return [
                err1,
                false
            ];
        }
        return [
            null,
            true
        ];
    }
    static async checkModelCanUse() {
        const [, canUse] = await this.checkIsLogin();
        return canUse;
    }
    async completion({ prompt, rid, cb, fileRef, file }) {
        const [error] = await this.callPromptSnippetInstance();
        if (error) {
            if (error.code === (0, _errors.ErrorCode).UNAUTHORIZED) {
                const [err, res] = await this.tokenRefresh();
                console.log("tokenRefresh", err, res);
                if (err) return cb(rid, new (0, _openAiInterface.ConversationResponse)({
                    error: err,
                    message_type: (0, _openAiInterface.ResponseMessageType).ERROR
                }));
            } else return cb(rid, new (0, _openAiInterface.ConversationResponse)({
                error: error,
                message_type: (0, _openAiInterface.ResponseMessageType).ERROR
            }));
        }
        console.trace("kimi completion", {
            prompt,
            rid,
            cb,
            fileRef,
            file
        });
        if (fileRef) {
            const refObj = this.fileInstance.getRef(fileRef);
            if (!refObj || refObj.err) {
                if (file) {
                    const newRef = await this.uploadFile(file);
                    const theNewRef = this.fileInstance.getRef(newRef);
                    if (!theNewRef || theNewRef.err) return cb(rid, new (0, _openAiInterface.ConversationResponse)({
                        error: theNewRef?.err || new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
                        message_type: (0, _openAiInterface.ResponseMessageType).ERROR
                    }));
                    this.fileRefs = [
                        theNewRef.ref.id
                    ];
                } else return cb(rid, new (0, _openAiInterface.ConversationResponse)({
                    error: refObj?.err || new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
                    message_type: (0, _openAiInterface.ResponseMessageType).ERROR
                }));
            } else this.fileRefs = [
                refObj.ref.id
            ];
        } else if (file) {
            let refObj = this.fileInstance.getRefByFile(file);
            if (!refObj) {
                const newRef = await this.uploadFile(file);
                refObj = this.fileInstance.getRef(newRef);
            }
            if (!refObj || refObj.err) return cb(rid, new (0, _openAiInterface.ConversationResponse)({
                error: refObj?.err || new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
                message_type: (0, _openAiInterface.ResponseMessageType).ERROR
            }));
            this.fileRefs = [
                refObj.ref.id
            ];
        }
        if (!this.botSession.session.botConversationId) {
            const [error, kimiConversation] = await this.createConversation();
            console.log("createConversation", error, kimiConversation);
            if (error) return cb(rid, new (0, _openAiInterface.ConversationResponse)({
                error: error,
                message_type: (0, _openAiInterface.ResponseMessageType).ERROR
            }));
            this.botSession.session.setBotConversationId(kimiConversation.id);
        }
        this.streamChat(prompt, rid, cb);
    }
    convertToSuperscript(input) {
        return input.replace(/\u3010(\d+)\u3011/g, "[^$1^][$1]");
    }
    getRefDocsMarkdown(refs, links, tags) {
        try {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for(let i = 0; i < refs.length; i++){
                const item = refs[i];
                links.push(`[${item.index}]: ${item.url}`);
                const url = new URL(item.url);
                tags.push(`[${item.index}. ${url?.origin ?? ""}](${item.url})`);
            }
            return {
                links,
                tags
            };
        } catch (e) {
            return {
                links,
                tags
            };
        }
    }
    async streamChat(prompt, rid, cb) {
        const conversationId = this.botSession.session.botConversationId;
        const myHeaders = new Headers();
        // myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcxMzMzMzkxNCwiaWF0IjoxNzEzMzMzMDE0LCJqdGkiOiJjb2ZtNjVoa3FxNHR0cmozbGowZyIsInR5cCI6ImFjY2VzcyIsInN1YiI6ImNvMzkzOXVjcDdmY3QwdmE0b2NnIiwic3BhY2VfaWQiOiJjbzM5Mzl1Y3A3ZmN0MHZhNG9jMCIsImFic3RyYWN0X3VzZXJfaWQiOiJjbzM5Mzl1Y3A3ZmN0MHZhNG9iZyJ9.4SyiCzUhkGXxhIfuDwdQxcGSUsbPqDAj7hAqWZ-m-snHaJlRvVsudDv2JsZYi8Gm6iAKIEA8selxnJK5WLbciQ");
        myHeaders.append("content-type", "application/json");
        myHeaders.append("origin", "https://kimi.moonshot.cn");
        myHeaders.append("r-timezone", "Asia/Shanghai");
        myHeaders.append("referer", "https://kimi.moonshot.cn/chat/" + conversationId);
        // myHeaders.append("x-traffic-id", "co3939ucp7fct0va4ocg");
        const accessToken = await KimiBot.getAccessToken();
        if (accessToken) myHeaders.append("Authorization", `Bearer ${accessToken}`);
        const params = {
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "refs": [],
            "use_search": true
        };
        if (this.fileRefs && this.fileRefs.length) {
            params.refs = this.fileRefs;
            params.use_search = false;
        }
        const raw = JSON.stringify(params);
        fetch(`https://kimi.moonshot.cn/api/chat/${conversationId}/completion/stream?--kkm=1`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }).then((response)=>{
            const stream = response.body;
            const reader = stream?.getReader();
            if (!response.ok) {
                cb(rid, new (0, _openAiInterface.ConversationResponse)({
                    conversation_id: conversationId,
                    message_type: (0, _openAiInterface.ResponseMessageType).ERROR,
                    error: new (0, _errors.ChatError)((0, _errors.ErrorCode).CONVERSATION_LIMIT)
                }));
                return;
            }
            let messageId = "";
            // let groupId = ""
            let outputText = "";
            let textAppendix = "";
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const _this = this;
            let refLinks = [];
            let refTags = [];
            function readStream() {
                reader?.read().then(async ({ done, value })=>{
                    if (done) return;
                    const enc = new TextDecoder("utf-8");
                    const str = enc.decode(value.buffer);
                    for (const line of str.split("\n")){
                        const raw = line.replace("data: ", "").replace("\n", "");
                        if (raw !== "") try {
                            const { event, ref_docs, text, id } = JSON.parse(raw);
                            if (event === "cmpl") {
                                messageId = id;
                                // groupId = group_id
                                outputText += text;
                                cb(rid, new (0, _openAiInterface.ConversationResponse)({
                                    conversation_id: conversationId,
                                    message_type: (0, _openAiInterface.ResponseMessageType).GENERATING,
                                    message_text: _this.convertToSuperscript(outputText) + textAppendix,
                                    message_id: messageId
                                }));
                            } else if (event === "ping") ;
                            else if (event === "all_done") {
                                const text = _this.convertToSuperscript(outputText) + textAppendix;
                                cb(rid, new (0, _openAiInterface.ConversationResponse)({
                                    conversation_id: conversationId,
                                    message_type: (0, _openAiInterface.ResponseMessageType).DONE,
                                    message_text: text,
                                    message_id: messageId
                                }));
                                _this.botSession.session.addMessage(new (0, _botSessionBase.SimpleBotMessage)(text, messageId));
                            } else if (event === "ref_docs") {
                                if (ref_docs && ref_docs.length) {
                                    const { links: _links, tags: _tags } = _this.getRefDocsMarkdown(ref_docs, refLinks, refTags);
                                    refLinks = _links;
                                    refTags = _tags;
                                    const tags = Array.from(new Set(refTags)).sort((a, b)=>parseInt(a.slice(1)) - parseInt(b.slice(1)));
                                    const links = Array.from(new Set(refLinks));
                                    textAppendix = "\n\n" + links.join("\n") + "\nLearn more: " + tags.join(" ");
                                }
                            } else if (event === "error") cb(rid, new (0, _openAiInterface.ConversationResponse)({
                                conversation_id: conversationId,
                                message_type: (0, _openAiInterface.ResponseMessageType).ERROR,
                                error: new (0, _errors.ChatError)((0, _errors.ErrorCode).MODEL_INTERNAL_ERROR)
                            }));
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    readStream();
                });
            }
            readStream();
        }).catch(()=>{
            cb(rid, new (0, _openAiInterface.ConversationResponse)({
                conversation_id: conversationId,
                message_type: (0, _openAiInterface.ResponseMessageType).ERROR,
                error: new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR)
            }));
        });
    }
    async startAuth() {
        const randomKey = "__window_key_" + Math.random() * 1000;
        const kimiAuthValue = (0, _utils.createUuid)();
        const url = (0, _utils.appendParamToUrl)((0, _utils.appendParamToUrl)((0, _utils.appendParamToUrl)(KimiBot.loginUrl, (0, _utils.IS_OPEN_IN_CHAT_AUTH_WINDOW), "1"), (0, _utils.WINDOW_FOR_REMOVE_STORAGE_KEY), randomKey), KimiBot.AUTH_WINDOW_KEY, kimiAuthValue);
        const res = await (0, _messaging.sendToBackground)({
            name: "open-new-window",
            body: {
                url,
                width: 800,
                height: 660,
                focused: true,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height
            }
        });
        const storage = new (0, _storage.Storage)();
        await storage.set(randomKey, res);
        return new Promise((resolve)=>{
            const listener = function(message) {
                if (message.action === (0, _utils.MESSAGE_ACTION_CHAT_PROVIDER_AUTH_SUCCESS)) {
                    if (message.authKey === kimiAuthValue) {
                        chrome.runtime.onMessage.removeListener(listener);
                        resolve(true);
                    }
                }
            };
            chrome.runtime.onMessage.addListener(listener);
        });
    }
    async createConversation() {
        const [err, res] = await (0, _messaging.sendToBackground)({
            name: "kimi/create-conversation"
        });
        return [
            err,
            res
        ];
    }
    async callPromptSnippetInstance() {
        const [err, res] = await (0, _messaging.sendToBackground)({
            name: "kimi/prompt-snippet-instance"
        });
        return [
            err,
            res
        ];
    }
    async tokenRefresh() {
        const [err, res] = await (0, _messaging.sendToBackground)({
            name: "kimi/refresh-access-token"
        });
        return [
            err,
            res
        ];
    }
    // private setAccessToken(access_token: string) {
    // }
    //
    // private setRefreshToken(refresh_token: string) {
    // }
    startCaptcha() {
        return Promise.resolve(false);
    }
    uploadFile(file) {
        return this.fileInstance.uploadFile(file, this.supportedUploadTypes);
    }
    get supportedUploadTypes() {
        return 0, _fileInstance.KimiSupportedMimeTypes;
    }
    getBotName() {
        return KimiBot.logoSrc;
    }
    getLoginUrl() {
        return KimiBot.loginUrl;
    }
    getLogoSrc() {
        return KimiBot.logoSrc;
    }
    getRequireLogin() {
        return KimiBot.requireLogin;
    }
    getSupportUploadImage() {
        return KimiBot.supportUploadImage;
    }
    getSupportUploadPDF() {
        return KimiBot.supportUploadPDF;
    }
    getPaidModel() {
        return KimiBot.paidModel;
    }
    getMaxTokenLimit() {
        return KimiBot.maxTokenLimit;
    }
    getNewModel() {
        return KimiBot.newModel;
    }
}

},{"~utils/errors":"hGYar","~libs/open-ai/open-ai-interface":"aFWut","@plasmohq/messaging":"4UHyD","@plasmohq/storage":"9NURi","~utils":"by5Ev","~libs/chatbot/BotBase":"3ncFv","~libs/chatbot/kimi/kimiSession":"eLFVW","~libs/chatbot/BotSessionBase":"028Kc","data-base64:~assets/kimi.png":"kUZ99","~libs/chatbot/kimi/fileInstance":"dO4as","~libs/chatbot/utils":"9OkWT","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"4UHyD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relay", ()=>E);
parcelHelpers.export(exports, "relayMessage", ()=>M);
parcelHelpers.export(exports, "sendToActiveContentScript", ()=>h);
parcelHelpers.export(exports, "sendToBackground", ()=>p);
parcelHelpers.export(exports, "sendToBackgroundViaRelay", ()=>u);
parcelHelpers.export(exports, "sendToContentScript", ()=>x);
parcelHelpers.export(exports, "sendViaRelay", ()=>S);
var _nanoid = require("nanoid");
var l = globalThis.browser?.tabs || globalThis.chrome?.tabs, d = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime;
    if (!e) throw new Error("Extension runtime is not available");
    return e;
}, i = ()=>{
    if (!l) throw new Error("Extension tabs API is not available");
    return l;
}, m = async ()=>{
    let e = i(), [a] = await e.query({
        active: !0,
        currentWindow: !0
    });
    return a;
}, g = (e, a)=>!a.__internal && e.source === globalThis.window && e.data.name === a.name && (a.relayId === void 0 || e.data.relayId === a.relayId);
var c = (e, a, n = globalThis.window)=>{
    let r = async (s)=>{
        if (g(s, e) && !s.data.relayed) {
            let o = {
                name: e.name,
                relayId: e.relayId,
                body: s.data.body
            }, t = await a?.(o);
            n.postMessage({
                name: e.name,
                relayId: e.relayId,
                instanceId: s.data.instanceId,
                body: t,
                relayed: !0
            }, {
                targetOrigin: e.targetOrigin || "/"
            });
        }
    };
    return n.addEventListener("message", r), ()=>n.removeEventListener("message", r);
}, y = (e, a = globalThis.window)=>new Promise((n, r)=>{
        let s = (0, _nanoid.nanoid)(), o = new AbortController;
        a.addEventListener("message", (t)=>{
            g(t, e) && t.data.relayed && t.data.instanceId === s && (n(t.data.body), o.abort());
        }, {
            signal: o.signal
        }), a.postMessage({
            ...e,
            instanceId: s
        }, {
            targetOrigin: e.targetOrigin || "/"
        });
    });
var p = async (e)=>d().sendMessage(e.extensionId ?? null, e), x = async (e)=>{
    let a = typeof e.tabId == "number" ? e.tabId : (await m())?.id;
    if (!a) throw new Error("No active tab found to send message to.");
    return i().sendMessage(a, e);
}, h = x, M = (e)=>c(e, p), E = M, u = y, S = u;

},{"nanoid":"bhGRi","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"bhGRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"9NURi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #a;
    #e;
    get primaryClient() {
        return this.#e;
    }
    #t;
    get secondaryClient() {
        return this.#t;
    }
    #r;
    get area() {
        return this.#r;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [] } = {}){
        this.setCopiedKeySet(s), this.#r = e, this.#n = t;
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#t = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#a = this.getExtStorageApi(), l() ? this.#e = (0, _pifyDefault.default)(this.#a[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#e = this.#a[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#e?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, a])=>(t[this.getUnnamespacedKey(s)] = a, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#e.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let a = !1;
        for(let r in s){
            let i = s[r], n = this.#t?.getItem(r);
            this.#t?.setItem(r, i), a ||= i !== n;
        }
        return a;
    };
    rawGet = async (e)=>this.hasExtensionApi ? (await this.#e.get(e))[e] : this.isCopied(e) ? this.#t?.getItem(e) : null;
    rawSet = async (e, t)=>(this.isCopied(e) && this.#t?.setItem(e, t), this.hasExtensionApi && await this.#e.set({
            [e]: t
        }), null);
    clear = async (e = !1)=>{
        e && this.#t?.clear(), await this.#e.clear();
    };
    rawRemove = async (e)=>{
        this.isCopied(e) && this.#t?.removeItem(e), this.hasExtensionApi && await this.#e.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.rawGetAll(), t = Object.keys(e);
        await Promise.all(t.map(this.rawRemove));
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), a = this.#s.get(s)?.callbackSet || new Set;
            if (a.add(e[t]), a.size > 1) continue;
            let r = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([p, d])=>{
                    for (let m of h.callbackSet)m({
                        newValue: p,
                        oldValue: d
                    }, n);
                });
            };
            this.#a.onChanged.addListener(r), this.#s.set(s, {
                callbackSet: a,
                listener: r
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), a = e[t], r = this.#s.get(s);
            r && (r.callbackSet.delete(a), r.callbackSet.size === 0 && (this.#s.delete(s), this.#a.onChanged.removeListener(r.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#a.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async removeItem(e) {
        return this.remove(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), a = JSON.stringify(t);
        return this.rawSet(s, a);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return JSON.parse(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"1siwu","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"1siwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"3ncFv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileRef", ()=>FileRef);
parcelHelpers.export(exports, "BotSupportedMimeType", ()=>BotSupportedMimeType);
parcelHelpers.export(exports, "getLabelFromMimeType", ()=>getLabelFromMimeType);
parcelHelpers.export(exports, "BotBase", ()=>BotBase);
class FileRef {
    constructor(err, ref, file){
        this.err = err;
        this.ref = ref;
        this.file = file;
    }
}
var BotSupportedMimeType;
(function(BotSupportedMimeType) {
    BotSupportedMimeType["PDF"] = "application/pdf";
    BotSupportedMimeType["PNG"] = "image/png";
    BotSupportedMimeType["JPEG"] = "image/jpeg";
    BotSupportedMimeType["JPG"] = "image/jpg";
    BotSupportedMimeType["GIF"] = "image/gif";
    BotSupportedMimeType["TXT"] = "text/plain";
    BotSupportedMimeType["WEBP"] = "image/webp";
    BotSupportedMimeType["ANY"] = "*";
})(BotSupportedMimeType || (BotSupportedMimeType = {}));
const getLabelFromMimeType = (mimeType)=>{
    switch(mimeType){
        case BotSupportedMimeType.PDF:
            return "PDF";
        case BotSupportedMimeType.PNG:
            return "PNG";
        case BotSupportedMimeType.JPEG:
        case BotSupportedMimeType.JPG:
            return "JPG";
        case BotSupportedMimeType.TXT:
            return "TXT";
    }
};
class BotBase {
    static #_ = (()=>{
        this.botName = "BotBase";
    })();
    static #_1 = (()=>{
        this.logoSrc = "logo.png";
    })();
    static #_2 = (()=>{
        this.loginUrl = "";
    })();
    static #_3 = (()=>{
        this.requireLogin = true;
    })();
    static #_4 = (()=>{
        this.supportUploadPDF = false;
    })();
    static #_5 = (()=>{
        this.supportUploadImage = false;
    })();
    static #_6 = (()=>{
        this.desc = "";
    })();
    static #_7 = (()=>{
        this.maxTokenLimit = 2048;
    })();
    static #_8 = (()=>{
        this.paidModel = false;
    })();
    static #_9 = (()=>{
        this.newModel = false;
    })();
    static checkIsLogin() {
        return Promise.resolve([
            null,
            false
        ]);
    }
    static checkModelCanUse() {
        return Promise.resolve(true);
    }
    constructor(params){
        this.conversationId = params.globalConversationId;
        this.parentMessageId = params.parentMessageId;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"eLFVW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _botSessionBase = require("~libs/chatbot/BotSessionBase");
class KimiSessionSingleton {
    constructor(){
        this.session = new (0, _botSessionBase.BotSession)(KimiSessionSingleton.globalConversationId);
    }
    static destroy() {
        KimiSessionSingleton.globalConversationId = "";
        KimiSessionSingleton.instance = null;
    }
    static getInstance(globalConversationId) {
        if (globalConversationId !== KimiSessionSingleton.globalConversationId) KimiSessionSingleton.destroy();
        KimiSessionSingleton.globalConversationId = globalConversationId;
        if (!KimiSessionSingleton.instance) KimiSessionSingleton.instance = new KimiSessionSingleton();
        return KimiSessionSingleton.instance;
    }
}
exports.default = KimiSessionSingleton;

},{"~libs/chatbot/BotSessionBase":"028Kc","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"028Kc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimpleBotMessage", ()=>SimpleBotMessage);
parcelHelpers.export(exports, "BotSession", ()=>BotSession);
class SimpleBotMessage {
    constructor(text, id){
        this.text = text;
        this.id = id;
    }
}
class BotSession {
    constructor(globalConversationId){
        this.messages = [];
        this.globalConversationId = globalConversationId;
    }
    // static destroy() {
    //     BotSessionSingleton.globalConversationId = undefined
    //     BotSessionSingleton.instance = null
    // }
    addMessage(message) {
        this.messages.push(message);
    }
    getBotConversationId() {
        return this.botConversationId;
    }
    setBotConversationId(conversationId) {
        this.botConversationId = conversationId;
    }
    getParentMessageId() {
        console.log("this.messages", this.messages);
        if (this.messages?.length) return this.messages[this.messages.length - 1].id;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"kUZ99":[function(require,module,exports) {
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBpVQ9ToRgEH0YCwsS1oLQQkvlESwoKCWUVibE2ngBjrBwAjgCLYVgbQOJB9CKxoYDAJ%2FfgMjPsrvs7kteYB7zhplJvk%2FAgHvOO84NjiPizMfClpOdyG1vfjnD3JO8%2BFprEG42nLdjjbxDQpqmzPO8icl13VZXFIXh%2BZMJrz%2FzwkNAoOQ%2BVlW11ZIk6Tp4%2BmDC49v6AkEQtJphGHvHusYMsizDNE2IogjbthHHMaqqwiFMOpijKIr26TjO8mL%2FXrpKjCHPc%2Fi%2B%2F1%2Bd4izLEEURLMva%2BfvOCGVZIgzDidY0DSRJwhKusAJ1Xe%2F9tqrAoSXSCN%2BcKgWapi0m6bre7mcB5L38LBC8M8zkgTBqh%2B6CBxxHie4ueKfgF1MZ75h2pNhMAAAAAElFTkSuQmCC";

},{}],"dO4as":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KimiSupportedMimeTypes", ()=>KimiSupportedMimeTypes);
parcelHelpers.export(exports, "KimiFileSingleton", ()=>KimiFileSingleton);
var _botBase = require("~libs/chatbot/BotBase");
var _errors = require("~utils/errors");
var _messaging = require("@plasmohq/messaging");
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
var _utils = require("~utils");
var _index = require("~libs/chatbot/kimi/index");
const KimiSupportedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp",
    "image/avif",
    "image/svg+xml",
    "image/heic",
    "image/heif",
    "text/markdown",
    "application/pdf",
    "text/plain",
    "text/csv",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/javascript",
    "text/x-java-source",
    "text/x-go",
    "text/x-csrc",
    "text/x-c++src",
    "text/html",
    "application/json",
    "text/x-python",
    "text/css",
    "text/typescript",
    "text/tsx",
    "application/yaml",
    "application/x-jsp",
    "application/x-httpd-php",
    "text/asp",
    "application/x-mobi",
    "application/epub+zip" // EPUB
];
class KimiFileSingleton {
    constructor(){
        this.refs = {};
    // ignore
    }
    static getInstance() {
        if (!KimiFileSingleton.instance) KimiFileSingleton.instance = new KimiFileSingleton();
        return KimiFileSingleton.instance;
    }
    getRef(key) {
        return this.refs[key];
    }
    getRefByFile(file) {
        for(const key in this.refs){
            if (this.refs[key]?.file?.name === file.name) return this.refs[key];
        }
        return null;
    }
    async _getSignUrl(file) {
        const [err, res] = await (0, _messaging.sendToBackground)({
            name: "kimi/pre-sign-url",
            body: {
                fileName: file.name
            }
        });
        return [
            err,
            res
        ];
    }
    async preSignUploadUrl(file) {
        const [err, res] = await this._getSignUrl(file);
        if (err && err.code === (0, _errors.ErrorCode).UNAUTHORIZED) {
            const [refreshErr] = await (0, _messaging.sendToBackground)({
                name: "kimi/refresh-access-token"
            });
            if (refreshErr) return [
                refreshErr,
                null
            ];
            return this._getSignUrl(file);
        }
        return [
            err,
            res
        ];
    }
    async parseProcess(id) {
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        myHeaders.append("origin", "https://kimi.moonshot.cn");
        // todo
        myHeaders.append("r-timezone", "Asia/Shanghai");
        // myHeaders.append("x-traffic-id", "co3939ucp7fct0va4ocg");
        const accessToken = await (0, _index.KimiBot).getAccessToken();
        if (accessToken) myHeaders.append("authorization", "Bearer " + accessToken);
        const raw = JSON.stringify({
            "ids": [
                id
            ]
        });
        const request = await (0, _customFetchForChat.customChatFetch)("https://kimi.moonshot.cn/api/file/parse_process", {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        });
        if (request.error) return [
            request.error
        ];
        console.log("request", request);
        const stream = request?.response?.body;
        const reader = stream?.getReader();
        return new Promise((resolve)=>{
            function readStream() {
                reader?.read().then(async ({ done, value })=>{
                    if (done) return;
                    const enc = new TextDecoder("utf-8");
                    const str = enc.decode(value.buffer);
                    for (const line of str.split("\n")){
                        const raw = line.replace("data: ", "").replace("\n", "");
                        try {
                            const data = JSON.parse(raw);
                            console.log("data", data);
                            if (data.status === "failed") {
                                resolve([
                                    new (0, _errors.ChatError)((0, _errors.ErrorCode).FILE_OTHER)
                                ]);
                                return;
                            }
                            resolve([
                                null
                            ]);
                        } catch (e) {
                            resolve([
                                new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR)
                            ]);
                        }
                    }
                    readStream();
                });
            }
            readStream();
        });
    }
    async upload(file, uploadUrl) {
        const theHeaders = new Headers();
        theHeaders.append("accept", "*/*");
        theHeaders.append("content-type", file.type);
        theHeaders.append("origin", "https://kimi.moonshot.cn");
        // TODO
        theHeaders.append("r-timezone", "Asia/Shanghai");
        theHeaders.append("referer", "https://kimi.moonshot.cn/");
        theHeaders.append("Origin", "https://kimi.moonshot.cn");
        const r = await (0, _customFetchForChat.customChatFetch)(uploadUrl, {
            method: "PUT",
            headers: theHeaders,
            body: file
        });
        if (r.error) return r.error;
        return null;
    // try {
    //     const result = await r.response.json()
    //     res.send([null, result])
    // } catch (e) {
    //     res.send([new ChatError(ErrorCode.UNKNOWN_ERROR), null])
    // }
    }
    async linkFile(fileName, objectName) {
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        //TODO
        myHeaders.append("r-timezone", "Asia/Shanghai");
        // myHeaders.append("x-traffic-id", "co3939ucp7fct0va4ocg");
        const accessToken = await (0, _index.KimiBot).getAccessToken();
        if (accessToken) myHeaders.append("authorization", "Bearer " + accessToken);
        const raw = JSON.stringify({
            "type": "file",
            "name": fileName,
            "object_name": objectName
        });
        const request = await (0, _customFetchForChat.customChatFetch)("https://kimi.moonshot.cn/api/file", {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        });
        if (request.error) return [
            request.error,
            null
        ];
        try {
            const result = await request?.response?.json();
            return [
                null,
                result
            ];
        } catch (e) {
            return [
                new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
                null
            ];
        }
    }
    async uploadFile(file, supportedTypes) {
        this.tempRefKey = (0, _utils.createUuid)();
        console.log("file.type", file.type, supportedTypes);
        if (file.type && !supportedTypes.includes(file.type)) {
            this.refs[this.tempRefKey] = new (0, _botBase.FileRef)(new (0, _errors.ChatError)((0, _errors.ErrorCode).UPLOAD_FILE_NOT_SUPPORTED), null);
            return this.tempRefKey;
        }
        console.log("file.type", file);
        const [preSignErr, sign] = await this.preSignUploadUrl(file);
        if (preSignErr) {
            this.refs[this.tempRefKey] = new (0, _botBase.FileRef)(preSignErr, null);
            return this.tempRefKey;
        }
        const uploadError = await this.upload(file, sign.url);
        if (uploadError) {
            this.refs[this.tempRefKey] = new (0, _botBase.FileRef)(uploadError, null);
            return this.tempRefKey;
        }
        const [linkErr, linkRes] = await this.linkFile(file.name, sign.object_name);
        if (linkErr) {
            this.refs[this.tempRefKey] = new (0, _botBase.FileRef)(linkErr, null);
            return this.tempRefKey;
        }
        const [parseErr] = await this.parseProcess(linkRes.id);
        console.log("parseErr", parseErr);
        if (parseErr) {
            this.refs[this.tempRefKey] = new (0, _botBase.FileRef)(parseErr, null);
            return this.tempRefKey;
        }
        this.refs[this.tempRefKey] = new (0, _botBase.FileRef)(null, linkRes, file);
        return this.tempRefKey;
    }
}

},{"~libs/chatbot/BotBase":"3ncFv","~utils/errors":"hGYar","@plasmohq/messaging":"4UHyD","~utils/custom-fetch-for-chat":"5tnxQ","~utils":"by5Ev","~libs/chatbot/kimi/index":"eRY7y","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"9OkWT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkModelSupportUploadImage", ()=>checkModelSupportUploadImage);
parcelHelpers.export(exports, "checkModelSupportUploadPDF", ()=>checkModelSupportUploadPDF);
var _botBase = require("~libs/chatbot/BotBase");
function checkModelSupportUploadImage(types) {
    return !!types.find((type)=>type.startsWith("image"));
}
function checkModelSupportUploadPDF(types) {
    return !!types.find((type)=>type === (0, _botBase.BotSupportedMimeType).PDF);
}

},{"~libs/chatbot/BotBase":"3ncFv","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"fkqTx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
var _errors = require("~utils/errors");
var _kimi = require("~libs/chatbot/kimi");
const handler = async (req, res)=>{
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://kimi.moonshot.cn");
    // TODO
    myHeaders.append("r-timezone", "Asia/Shanghai");
    myHeaders.append("referer", "https://kimi.moonshot.cn/");
    const accessToken = await (0, _kimi.KimiBot).getAccessToken();
    if (accessToken) myHeaders.append("Authorization", `Bearer ${accessToken}`);
    const raw = JSON.stringify({
        "action": "file",
        "name": req.body.fileName
    });
    const request = await (0, _customFetchForChat.customChatFetch)("https://kimi.moonshot.cn/api/pre-sign-url", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    });
    if (request.error) return res.send([
        request.error,
        null
    ]);
    try {
        const result = await request.response?.json();
        res.send([
            null,
            result
        ]);
    } catch (e) {
        res.send([
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
            null
        ]);
    }
};
exports.default = handler;

},{"~utils/custom-fetch-for-chat":"5tnxQ","~utils/errors":"hGYar","~libs/chatbot/kimi":"eRY7y","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"bNjb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
var _errors = require("~utils/errors");
var _kimi = require("~libs/chatbot/kimi");
const handler = async (req, res)=>{
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://kimi.moonshot.cn");
    // TODO
    myHeaders.append("r-timezone", "Asia/Shanghai");
    myHeaders.append("referer", "https://kimi.moonshot.cn/");
    myHeaders.append("Origin", "https://kimi.moonshot.cn");
    // myHeaders.append("x-traffic-id", "7351723399195934466");
    const accessToken = await (0, _kimi.KimiBot).getAccessToken();
    if (accessToken) myHeaders.append("Authorization", `Bearer ${accessToken}`);
    const raw = JSON.stringify({
        "offset": 0,
        "size": 10,
        "query": " "
    });
    const r = await (0, _customFetchForChat.customChatFetch)("https://kimi.moonshot.cn/api/prompt-snippet/instance", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    });
    if (r.error) return res.send([
        r.error,
        null
    ]);
    try {
        const result = await r.response?.json();
        res.send([
            null,
            result
        ]);
    } catch (e) {
        res.send([
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
            null
        ]);
    }
};
exports.default = handler;

},{"~utils/custom-fetch-for-chat":"5tnxQ","~utils/errors":"hGYar","~libs/chatbot/kimi":"eRY7y","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"feI2I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "kimiRefreshAccessToken", ()=>kimiRefreshAccessToken);
var _customFetchForChat = require("~utils/custom-fetch-for-chat");
var _errors = require("~utils/errors");
var _kimi = require("~libs/chatbot/kimi");
const kimiRefreshAccessToken = async ()=>{
    const myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + await (0, _kimi.KimiBot).getRefreshToken());
    myHeaders.append("referer", "https://kimi.moonshot.cn/");
    myHeaders.append("Origin", "https://kimi.moonshot.cn");
    const request = await (0, _customFetchForChat.customChatFetch)("https://kimi.moonshot.cn/api/auth/token/refresh", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    });
    if (request.error) return [
        request.error,
        null
    ];
    try {
        const result = await request.response?.json();
        if (result["error_type"] === "auth.token.invalid") return [
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNAUTHORIZED),
            null
        ];
        if (result["access_token"] && result["refresh_token"]) {
            (0, _kimi.KimiBot).setAccessToken(result["access_token"]);
            (0, _kimi.KimiBot).setRefreshToken(result["refresh_token"]);
            return [
                null,
                result
            ];
        }
        return [
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNAUTHORIZED),
            null
        ];
    } catch (e) {
        return [
            new (0, _errors.ChatError)((0, _errors.ErrorCode).UNKNOWN_ERROR),
            null
        ];
    }
};
const handler = async (req, res)=>{
    // const myHeaders = new Headers();
    // myHeaders.append("authorization", "Bearer " + (await KimiBot.getRefreshToken()));
    // myHeaders.append("referer", "https://kimi.moonshot.cn/");
    // myHeaders.append("Origin", "https://kimi.moonshot.cn");
    //
    // const request = await customChatFetch("https://kimi.moonshot.cn/api/auth/token/refresh", {
    //     method: "GET",
    //     headers: myHeaders,
    //     redirect: "follow"
    // })
    //
    // if(request.error) {
    //     return res.send([request.error, null])
    // }
    //
    // try {
    //     const result = await request.response.json()
    //
    //     if(result['error_type'] === "auth.token.invalid") {
    //         return res.send([new ChatError(ErrorCode.UNAUTHORIZED), null])
    //     }
    //
    //     if(result["access_token"] && result["refresh_token"]) {
    //         KimiBot.setAccessToken(result["access_token"])
    //         KimiBot.setRefreshToken(result["refresh_token"])
    //         res.send([null, result])
    //     } else {
    //         return res.send([new ChatError(ErrorCode.UNAUTHORIZED), null])
    //     }
    // } catch (e) {
    //     res.send([new ChatError(ErrorCode.UNKNOWN_ERROR), null])
    // }
    res.send(await kimiRefreshAccessToken());
};
exports.default = handler;

},{"~utils/custom-fetch-for-chat":"5tnxQ","~utils/errors":"hGYar","~libs/chatbot/kimi":"eRY7y","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"2UFGH":[function(require,module,exports) {
// import type {PlasmoMessaging} from "@plasmohq/messaging"
// import {Kimi} from "~libs/chatbot/kimi";
// import {ConversationResponse, ResponseMessageType} from "~libs/open-ai/open-ai-interface";
// import {ChatError, ErrorCode} from "~utils/errors";
//
// const handler: PlasmoMessaging.PortHandler = async (req, res) => {
//     console.log(req)
//     const {conversationId, text, rid} = req.body
//
//     const myHeaders = new Headers();
//     // myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTcxMzMzMzkxNCwiaWF0IjoxNzEzMzMzMDE0LCJqdGkiOiJjb2ZtNjVoa3FxNHR0cmozbGowZyIsInR5cCI6ImFjY2VzcyIsInN1YiI6ImNvMzkzOXVjcDdmY3QwdmE0b2NnIiwic3BhY2VfaWQiOiJjbzM5Mzl1Y3A3ZmN0MHZhNG9jMCIsImFic3RyYWN0X3VzZXJfaWQiOiJjbzM5Mzl1Y3A3ZmN0MHZhNG9iZyJ9.4SyiCzUhkGXxhIfuDwdQxcGSUsbPqDAj7hAqWZ-m-snHaJlRvVsudDv2JsZYi8Gm6iAKIEA8selxnJK5WLbciQ");
//     myHeaders.append("content-type", "application/json");
//     myHeaders.append("origin", "https://kimi.moonshot.cn");
//     myHeaders.append("r-timezone", "Asia/Shanghai");
//     myHeaders.append("referer", "https://kimi.moonshot.cn/chat/" + conversationId);
//     // myHeaders.append("x-traffic-id", "co3939ucp7fct0va4ocg");
//
//     const accessToken =  await Kimi.getAccessToken()
//
//     if(accessToken) {
//         myHeaders.append("Authorization", `Bearer ${accessToken}`)
//     }
//
//     const raw = JSON.stringify({
//         "messages": [
//             {
//                 "role": "user",
//                 "content": text
//             }
//         ],
//         "refs": [],
//         "use_search": true
//     });
//
//     // fetch(`https://kimi.moonshot.cn/api/chat/${conversationId}/completion/stream`, {
//     //     method: "POST",
//     //     headers: myHeaders,
//     //     body: raw,
//     //     redirect: "follow"
//     // })
//     //     .then((response) => response.text())
//     //     .then((result) => console.log(result))
//     //     .catch((error) => console.error(error));
//     fetch(`https://kimi.moonshot.cn/api/chat/${conversationId}/completion/stream`, {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//     })
//         .then(response => {
//             const stream = response.body;
//             const reader = stream.getReader();
//
//             if (!response.ok) {
//                 res.send({
//                     rid,
//                     data: new ConversationResponse({
//                         conversation_id: conversationId,
//                         message_type: ResponseMessageType.ERROR,
//                         error: new ChatError(ErrorCode.CONVERSATION_LIMIT)
//                     })
//                 })
//
//                 return
//             }
//
//             let messageId  = ""
//             let groupId = ""
//             let outputText = ""
//
//             function readStream() {
//                 reader.read().then(async ({done, value}) => {
//                     if (done) {
//                         return;
//                     }
//
//                     const enc = new TextDecoder("utf-8");
//                     const str = enc.decode(value.buffer);
//
//
//                     for (const line of str.split("\n")) {
//                         let raw = line.replace("data: ", "").replace("\n", "");
//
//                         if (raw !== "") {
//                             try {
//                                 const {event, content, text, id, group_id}  = JSON.parse(raw);
//
//                                 if(event === "cmpl") {
//                                     messageId = id
//                                     groupId = group_id
//                                     outputText += text
//
//                                     res.send({
//                                         rid,
//                                         data: new ConversationResponse({
//                                             conversation_id: conversationId,
//                                             message_type: ResponseMessageType.GENERATING,
//                                             message_text: outputText,
//                                             message_id: messageId
//                                         })
//                                     })
//                                 } else if (event === "ping") {
//
//                                 } else if (event === "all_done") {
//                                     res.send({
//                                         rid,
//                                         data: new ConversationResponse({
//                                             conversation_id: conversationId,
//                                             message_type: ResponseMessageType.DONE,
//                                             message_text: outputText,
//                                             message_id: messageId
//                                         })
//                                     })
//                                 }
//                             } catch (e) {
//                                 console.log(e)
//                             }
//                         }
//                     }
//                     readStream();
//                 });
//             }
//             readStream();
//         }).catch((error) => {
//             res.send({
//                 rid,
//                 data: new ConversationResponse({
//                     conversation_id: conversationId,
//                     message_type: ResponseMessageType.ERROR,
//                     error: new ChatError(ErrorCode.UNKNOWN_ERROR)
//                 })
//             })
//     });
// }
//
// export default handler

},{}],"leaNT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utils = require("~utils");
var _ga = require("~libs/ga");
var _gaDefault = parcelHelpers.interopDefault(_ga);
chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
}).then(()=>{
// ignore
}).catch((error)=>console.error(error));
let panelOpened = false;
// --- currentWindowId start ---
let currentWindowId;
function updateCurrentWindowId() {
    chrome.windows.getCurrent({
        populate: true
    }, (currentWindow)=>{
        currentWindowId = currentWindow.id;
    });
}
function closePanel() {
    chrome.sidePanel.setOptions({
        enabled: false
    }).then(()=>{
        chrome.sidePanel.setOptions({
            enabled: true
        });
    });
}
function changePanelShowStatus() {
    panelOpened = !panelOpened;
    if (panelOpened) openPanel(undefined);
    else closePanel();
}
updateCurrentWindowId();
addEventListener("unhandledrejection", async (event)=>{
    console.trace("unhandledrejection", event.reason);
    (0, _gaDefault.default).fireErrorEvent(event.reason);
});
chrome.windows.onFocusChanged.addListener((windowId)=>{
    if (windowId !== chrome.windows.WINDOW_ID_NONE) currentWindowId = windowId;
});
chrome.windows.onCreated.addListener(()=>{
    updateCurrentWindowId();
});
chrome.windows.onRemoved.addListener(()=>{
    updateCurrentWindowId();
});
// --- currentWindowId end ---
const injectContentScript = async function() {
    if (!chrome.runtime.getManifest().content_scripts) return;
    for (const cs of chrome.runtime.getManifest().content_scripts){
        for (const tab of (await chrome.tabs.query({
            url: cs.matches
        })))if (tab?.url?.startsWith("http")) chrome.scripting.executeScript({
            files: cs.js,
            target: {
                tabId: tab.id,
                allFrames: cs.all_frames
            },
            injectImmediately: cs.run_at === "document_start"
        });
    }
};
// const openGuidePageAfterInstall = function () {
//     chrome.tabs.create({
//         url: `chrome-extension://${chrome.runtime.id}/tabs/greeting.html`,
//         active: true
//     }, function(tab) {
//         console.log("New tab opened at index " + tab.index);
//     });
// };
chrome.runtime.onInstalled.addListener(async ()=>{
    (0, _gaDefault.default).fireEvent("install");
    injectContentScript();
// openGuidePageAfterInstall();
});
chrome.action.onClicked.addListener(()=>{
    changePanelShowStatus();
});
// chrome.declarativeNetRequest.getEnabledRulesets().then((rulesets) => {
//     console.log('getEnabledRulesets')
//     console.log(rulesets)
// })
// chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((details) => {
//     console.log("declarativeNetRequest")
//     console.log(details)
// })
//
// chrome.declarativeNetRequest.getMatchedRules({tabId: -1},
//     function (rules) {
//         console.log("getMatchedRules")
//         console.log(rules)
//     }
// )
chrome.runtime.onMessage.addListener(async function(request) {
    switch(request.action){
        // case 'sync_panel_info':
        //     const tab = request.data as chrome.tabs.Tab
        //     scriptingGoogle(tab.id);
        //     break;
        // case MESSAGE_ACTION_OPEN_PANEL_WITH_SEARCH_TEXT:
        //     await openPanel(request.windowId)
        //     setTimeout(() => {
        //         void chrome.runtime.sendMessage({action: MESSAGE_ACTION_SYNC_SEARCH_TEXT, data: request.data});
        //     }, 500)
        //     break;
        case 0, _utils.MESSAGE_ACTION_SET_PANEL_OPEN_OR_NOT:
            changePanelShowStatus();
            break;
        // case MESSAGE_ACTION_OPEN_PANEL_ASK_AI:
        //     await openPanel(request.windowId)
        //     break;
        case 0, _utils.MESSAGE_ACTION_OPEN_PANEL:
            console.log("MESSAGE_ACTION_OPEN_PANEL", (0, _utils.MESSAGE_ACTION_OPEN_PANEL));
            chrome.runtime.sendMessage({
                action: (0, _utils.MESSAGE_UPDATE_PANEL_INIT_DATA)
            }).catch((e)=>{
                panelOpened = false;
                console.log("send message error", e);
            });
            if (!panelOpened) changePanelShowStatus();
            break;
        case 0, _utils.MESSAGE_PANEL_OPENED_PING_FROM_PANEL:
            panelOpened = true;
            break;
    }
});
chrome.runtime.onConnect.addListener((port)=>{
    if (port.name === (0, _utils.PORT_LISTEN_PANEL_CLOSED_KEY)) port.onDisconnect.addListener(()=>{
        panelOpened = false;
    });
});
//
// type SearchText = string;
//
// class OpenPanelOptions {
//     panelPath: PanelRouterPath
//     data: IAskAi | SearchText
// }
async function openPanel(windowId) {
    if (windowId === undefined) windowId = currentWindowId;
    chrome.sidePanel.open({
        windowId: windowId
    });
}

},{"~utils":"by5Ev","~libs/ga":"hGGMm","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"hGGMm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Analytics", ()=>Analytics);
const GA_ENDPOINT = "https://www.google-analytics.com/mp/collect";
const GA_DEBUG_ENDPOINT = "https://www.google-analytics.com/debug/mp/collect";
// Get via https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#recommended_parameters_for_reports
const MEASUREMENT_ID = undefined ?? "";
const API_SECRET = undefined ?? "";
const DEFAULT_ENGAGEMENT_TIME_MSEC = 100;
// Duration of inactivity after which a new session is created
const SESSION_EXPIRATION_IN_MIN = 30;
class Analytics {
    constructor(debug){
        this.debug = false;
        this.debug = debug ?? true;
    }
    // Returns the client id, or creates a new one if one doesn't exist.
    // Stores client id in local storage to keep the same client id as long as
    // the extension is installed.
    async getOrCreateClientId() {
        let { clientId } = await chrome.storage.local.get("clientId");
        if (!clientId) {
            // Generate a unique client ID, the actual value is not relevant
            clientId = self.crypto.randomUUID();
            await chrome.storage.local.set({
                clientId
            });
        }
        return clientId;
    }
    // Returns the current session id, or creates a new one if one doesn't exist or
    // the previous one has expired.
    async getOrCreateSessionId() {
        // Use storage.session because it is only in memory
        let { sessionData } = await chrome.storage.session.get("sessionData");
        const currentTimeInMs = Date.now();
        // Check if session exists and is still valid
        if (sessionData && sessionData.timestamp) {
            // Calculate how long ago the session was last updated
            const durationInMin = (currentTimeInMs - sessionData.timestamp) / 60000;
            // Check if last update lays past the session expiration threshold
            if (durationInMin > SESSION_EXPIRATION_IN_MIN) // Clear old session id to start a new session
            sessionData = null;
            else {
                // Update timestamp to keep session alive
                sessionData.timestamp = currentTimeInMs;
                await chrome.storage.session.set({
                    sessionData
                });
            }
        }
        if (!sessionData) {
            // Create and store a new session
            sessionData = {
                session_id: currentTimeInMs.toString(),
                timestamp: currentTimeInMs.toString()
            };
            await chrome.storage.session.set({
                sessionData
            });
        }
        return sessionData.session_id;
    }
    // Fires an event with optional params. Event names must only include letters and underscores.
    async fireEvent(name, params = {}) {
        // Configure session id and engagement time if not present, for more details see:
        // https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#recommended_parameters_for_reports
        if (!params.session_id) params.session_id = await this.getOrCreateSessionId();
        if (!params.engagement_time_msec) params.engagement_time_msec = DEFAULT_ENGAGEMENT_TIME_MSEC;
        if (!MEASUREMENT_ID || !API_SECRET) return;
        try {
            const response = await fetch(`${this.debug ? GA_DEBUG_ENDPOINT : GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
                method: "POST",
                body: JSON.stringify({
                    client_id: await this.getOrCreateClientId(),
                    events: [
                        {
                            name,
                            params
                        }
                    ]
                })
            });
            if (!this.debug) return;
            console.log(await response.text());
        } catch (e) {
            console.error("Google Analytics request failed with an exception", e);
        }
    }
    // Fire a page view event.
    firePageViewEvent(pageTitle, pageLocation, additionalParams = {}) {
        return this.fireEvent("page_view", {
            page_title: pageTitle,
            page_location: pageLocation,
            ...additionalParams
        });
    }
    // Fire an error event.
    async fireErrorEvent(error, additionalParams = {}) {
        // Note: 'error' is a reserved event name and cannot be used
        // see https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference?client_type=gtag#reserved_names
        return this.fireEvent("extension_error", {
            ...error,
            ...additionalParams
        });
    }
}
exports.default = new Analytics();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}]},["gwbQK","8oeFb"], "8oeFb", "parcelRequiref9dd")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDLEdBQUcsS0FBSztZQUNSLEdBQUcsZ0JBQWdCO1FBQ3ZCO0lBQ0o7QUFDSjtrQkFFZSxJQUFJIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjUuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1jZWI2MjQ2ZmZhNzlmNzY4LmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvbWVzc2FnaW5nLnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9jbG9zZS13aW5kb3cudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJiYWNrZ3JvdW5kL21lc3NhZ2VzL2ZpeC1wYXJ0aXRpb24tY29va2llLnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9tZXRhc28tc2Vzc2lvbi50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvb3Blbi1uZXctd2luZG93LnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9jb3BpbG90L2NoZWNrLWxvZ2luLnRzIiwidXRpbHMvY3VzdG9tLWZldGNoLWZvci1jaGF0LnRzIiwidXRpbHMvZXJyb3JzLnRzIiwidXRpbHMvY29uc3RhbnRzLnRzIiwidXRpbHMvaW5kZXgudHMiLCJiYWNrZ3JvdW5kL21lc3NhZ2VzL2NvcGlsb3QvaW5pdC1jb3BpbG90LWNvbnZlcnNhdGlvbi50cyIsImxpYnMvb3Blbi1haS9vcGVuLWFpLWludGVyZmFjZS50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvY29waWxvdC91cGxvYWQtZmlsZS50cyIsImJhY2tncm91bmQvbWVzc2FnZXMva2ltaS9jcmVhdGUtY29udmVyc2F0aW9uLnRzIiwibGlicy9jaGF0Ym90L2tpbWkvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjYuMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANS4wLjMvbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStzdG9yYWdlQDEuOS4zX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3N0b3JhZ2UvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9waWZ5QDYuMS4wL25vZGVfbW9kdWxlcy9waWZ5L2luZGV4LmpzIiwibGlicy9jaGF0Ym90L0JvdEJhc2UudHMiLCJsaWJzL2NoYXRib3Qva2ltaS9raW1pU2Vzc2lvbi50cyIsImxpYnMvY2hhdGJvdC9Cb3RTZXNzaW9uQmFzZS50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3J1bnRpbWUtanNAMi44LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtanMvbGliL2J1bmRsZXMvcnVudGltZS01ZGQ4OGYyNGE1NTNlZjVlLmpzIiwibGlicy9jaGF0Ym90L2tpbWkvZmlsZUluc3RhbmNlLnRzIiwibGlicy9jaGF0Ym90L3V0aWxzLnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9raW1pL3ByZS1zaWduLXVybC50cyIsImJhY2tncm91bmQvbWVzc2FnZXMva2ltaS9wcm9tcHQtc25pcHBldC1pbnN0YW5jZS50cyIsImJhY2tncm91bmQvbWVzc2FnZXMva2ltaS9yZWZyZXNoLWFjY2Vzcy10b2tlbi50cyIsImJhY2tncm91bmQvcG9ydHMva2ltaS9jaGF0LnRzIiwiYmFja2dyb3VuZC9pbmRleC50cyIsImxpYnMvZ2EudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgaD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgYj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9tYXgvRG93bmxvYWRzL2luZGV4L0NvcGlsb3QvLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1OTU2MH07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi9tZXNzYWdpbmdcIlxuaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZC9pbmRleFwiIiwiLy8gQHRzLW5vY2hlY2tcbmdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAgPSBuZXcgTWFwKClcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0Nsb3NlV2luZG93IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2Nsb3NlLXdpbmRvd1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzRml4UGFydGl0aW9uQ29va2llIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2ZpeC1wYXJ0aXRpb24tY29va2llXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNNZXRhc29TZXNzaW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL21ldGFzby1zZXNzaW9uXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNPcGVuTmV3V2luZG93IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL29wZW4tbmV3LXdpbmRvd1wiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ29waWxvdENoZWNrTG9naW4gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvY29waWxvdC9jaGVjay1sb2dpblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ29waWxvdEluaXRDb3BpbG90Q29udmVyc2F0aW9uIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2NvcGlsb3QvaW5pdC1jb3BpbG90LWNvbnZlcnNhdGlvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzQ29waWxvdFVwbG9hZEZpbGUgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvY29waWxvdC91cGxvYWQtZmlsZVwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzS2ltaUNyZWF0ZUNvbnZlcnNhdGlvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9raW1pL2NyZWF0ZS1jb252ZXJzYXRpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0tpbWlQcmVTaWduVXJsIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2tpbWkvcHJlLXNpZ24tdXJsXCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNLaW1pUHJvbXB0U25pcHBldEluc3RhbmNlIH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2tpbWkvcHJvbXB0LXNuaXBwZXQtaW5zdGFuY2VcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0tpbWlSZWZyZXNoQWNjZXNzVG9rZW4gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMva2ltaS9yZWZyZXNoLWFjY2Vzcy10b2tlblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBvcnRzS2ltaUNoYXQgfSBmcm9tIFwifmJhY2tncm91bmQvcG9ydHMva2ltaS9jaGF0XCJcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdD8ubmFtZSkge1xuICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm5hbWUpIHtcbiAgICBjYXNlIFwiY2xvc2Utd2luZG93XCI6XG4gIG1lc3NhZ2VzQ2xvc2VXaW5kb3coe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiZml4LXBhcnRpdGlvbi1jb29raWVcIjpcbiAgbWVzc2FnZXNGaXhQYXJ0aXRpb25Db29raWUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwibWV0YXNvLXNlc3Npb25cIjpcbiAgbWVzc2FnZXNNZXRhc29TZXNzaW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm9wZW4tbmV3LXdpbmRvd1wiOlxuICBtZXNzYWdlc09wZW5OZXdXaW5kb3coe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiY29waWxvdC9jaGVjay1sb2dpblwiOlxuICBtZXNzYWdlc0NvcGlsb3RDaGVja0xvZ2luKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImNvcGlsb3QvaW5pdC1jb3BpbG90LWNvbnZlcnNhdGlvblwiOlxuICBtZXNzYWdlc0NvcGlsb3RJbml0Q29waWxvdENvbnZlcnNhdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJjb3BpbG90L3VwbG9hZC1maWxlXCI6XG4gIG1lc3NhZ2VzQ29waWxvdFVwbG9hZEZpbGUoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwia2ltaS9jcmVhdGUtY29udmVyc2F0aW9uXCI6XG4gIG1lc3NhZ2VzS2ltaUNyZWF0ZUNvbnZlcnNhdGlvbih7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJraW1pL3ByZS1zaWduLXVybFwiOlxuICBtZXNzYWdlc0tpbWlQcmVTaWduVXJsKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImtpbWkvcHJvbXB0LXNuaXBwZXQtaW5zdGFuY2VcIjpcbiAgbWVzc2FnZXNLaW1pUHJvbXB0U25pcHBldEluc3RhbmNlKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImtpbWkvcmVmcmVzaC1hY2Nlc3MtdG9rZW5cIjpcbiAgbWVzc2FnZXNLaW1pUmVmcmVzaEFjY2Vzc1Rva2VuKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihwb3J0KSB7XG4gIGdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAuc2V0KHBvcnQubmFtZSwgcG9ydClcbiAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHN3aXRjaCAocG9ydC5uYW1lKSB7XG4gICAgICBjYXNlIFwia2ltaS9jaGF0XCI6XG4gIHBvcnRzS2ltaUNoYXQoe1xuICAgIHBvcnQsXG4gICAgLi4ucmVxdWVzdFxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHBvcnQucG9zdE1lc3NhZ2UocClcbiAgfSlcbiAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxufSlcblxuIiwiaW1wb3J0IHR5cGUge1BsYXNtb01lc3NhZ2luZ30gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MucmVtb3ZlKHBhcnNlSW50KHJlcS5ib2R5LndpbmRvd0lkKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXMuc2VuZCgnY2xvc2Ugd2luZG93Jyk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUge1BsYXNtb01lc3NhZ2luZ30gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcblxuXG5jb25zdCBzZXRDb29raWUgPSBhc3luYyAodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuY29va2llcy5zZXQoe3VybCwgbmFtZSwgdmFsdWV9LCBmdW5jdGlvbiAoY29va2llKSB7XG4gICAgICAgICAgICByZXNvbHZlKGNvb2tpZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2V0UGFydGl0aW9uQ29va2llID0gYXN5bmMgKGRvbWFpbjogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0QWxsKHtkb21haW4sIHBhcnRpdGlvbktleToge1xuICAgICAgICAgICAgLy8gdG9wTGV2ZWxTaXRlOiBcImh0dHBzOi8vcGVycGxleGl0eS5haVwiLFxuICAgICAgICB9fSwgIGFzeW5jKGNvb2tpZXMpID0+IHtcblxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLmNvb2tpZXMubWFwKGNvb2tpZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS50cmFjZShjb29raWUpO1xuICAgICAgICAgICAgICAgIGlmKGNvb2tpZVsncGFydGl0aW9uS2V5J10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldENvb2tpZSh1cmwsIGNvb2tpZS5uYW1lLCBjb29raWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXSk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge2RvbWFpbiwgdXJsfSA9IHJlcS5ib2R5O1xuICAgIGF3YWl0IHNldFBhcnRpdGlvbkNvb2tpZShkb21haW4sIHVybCk7XG5cbiAgICByZXMuc2VuZCh7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIiwiaW1wb3J0IHR5cGUge1BsYXNtb01lc3NhZ2luZ30gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJBY2NlcHQtTGFuZ3VhZ2VcIiwgXCJ6aC1DTix6aDtxPTAuOVwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29ubmVjdGlvblwiLCBcImtlZXAtYWxpdmVcIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIk9yaWdpblwiLCBcImh0dHBzOi8vbWV0YXNvLmNuXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJTZWMtRmV0Y2gtRGVzdFwiLCBcImVtcHR5XCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJTZWMtRmV0Y2gtTW9kZVwiLCBcImNvcnNcIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIlNlYy1GZXRjaC1TaXRlXCIsIFwic2FtZS1vcmlnaW5cIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcImlzLW1pbmktd2Vidmlld1wiLCBcIjBcIik7XG5cbiAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwicXVlc3Rpb25cIjogcmVxLmJvZHkuc2VhcmNoVGV4dCxcbiAgICAgICAgXCJtb2RlXCI6IFwiZGV0YWlsXCIsXG4gICAgICAgIFwiZW5naW5lVHlwZVwiOiBcIlwiXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICBib2R5OiByYXcsXG4gICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9tZXRhc28uY24vYXBpL3Nlc3Npb25cIiwgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmVzLnNlbmQocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zZW5kKG51bGwpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iLCJpbXBvcnQgdHlwZSB7UGxhc21vTWVzc2FnaW5nfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiO1xuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7d2lkdGgsIGhlaWdodCwgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKChzY3JlZW5XaWR0aCAvIDIpIC0gKHdpZHRoIC8gMikpO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQoKHNjcmVlbkhlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpKTtcblxuICAgIGRlbGV0ZSByZXEuYm9keS5zY3JlZW5XaWR0aDtcbiAgICBkZWxldGUgcmVxLmJvZHkuc2NyZWVuSGVpZ2h0O1xuXG4gICAgY2hyb21lLndpbmRvd3MuY3JlYXRlKFxuICAgICAgICB7Li4ucmVxLmJvZHksIHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcH0sIGZ1bmN0aW9uICh3KSB7XG4gICAgICAgICAgICByZXMuc2VuZCh3Py5pZCk7XG4gICAgICAgIH1cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiIsImltcG9ydCB0eXBlIHtQbGFzbW9NZXNzYWdpbmd9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XG5pbXBvcnQge2N1c3RvbUNoYXRGZXRjaH0gZnJvbSBcIn51dGlscy9jdXN0b20tZmV0Y2gtZm9yLWNoYXRcIjtcbmltcG9ydCB7Y3JlYXRlVXVpZH0gZnJvbSBcIn51dGlsc1wiO1xuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJ4LW1zLWNsaWVudC1yZXF1ZXN0LWlkXCIsIGNyZWF0ZVV1aWQoKSk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIngtbXMtdXNlcmFnZW50XCIsIFwiYXpzZGstanMtYXBpLWNsaWVudC1mYWN0b3J5LzEuMC4wLWJldGEuMSBjb3JlLXJlc3QtcGlwZWxpbmUvMS4xMi4zIE9TL21hY09TXCIpO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGN1c3RvbUNoYXRGZXRjaChcImh0dHBzOi8vY29waWxvdC5taWNyb3NvZnQuY29tL3R1cmluZy9jb252ZXJzYXRpb24vY3JlYXRlP2J1bmRsZVZlcnNpb249MS4xNjU1LjBcIiwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcblxuICAgIGlmIChyZXF1ZXN0LmVycm9yKSB7XG4gICAgICAgIHJlcy5zZW5kKFtyZXF1ZXN0LmVycm9yLCBmYWxzZV0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXF1ZXN0Py5yZXNwb25zZT8udGV4dCgpO1xuXG4gICAgcmVzLnNlbmQoW251bGwsICEhdGV4dF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiIsImltcG9ydCB7Q2hhdEVycm9yLCBFcnJvckNvZGV9IGZyb20gXCJ+dXRpbHMvZXJyb3JzXCI7XG5pbXBvcnQge0NIQVRfRkVUQ0hfVElNRU9VVH0gZnJvbSBcIn51dGlscy9jb25zdGFudHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQ2hhdEZldGNoUmVzcG9uc2Uge1xuICAgIHJlc3BvbnNlPzogUmVzcG9uc2U7XG4gICAgZXJyb3I/OiBDaGF0RXJyb3I7XG5cbiAgICBjb25zdHJ1Y3RvcihyZXNwb25zZT86IFJlc3BvbnNlLCBlcnJvcj86IENoYXRFcnJvcikge1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUh0dHBTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKTogQ2hhdEZldGNoUmVzcG9uc2Uge1xuICAgIGNvbnN0IGNoYXRSZXNwb25zZSA9IG5ldyBDaGF0RmV0Y2hSZXNwb25zZSgpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG4gICAgY2hhdFJlc3BvbnNlLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cbiAgICBpZiAoc3RhdHVzIDwgMjAwIHx8IHN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICBjaGF0UmVzcG9uc2UuZXJyb3IgPSBuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5DQVBUQ0hBKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVIdHRwU3RhdHVzJywgY2hhdFJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09IDQwMSkgY2hhdFJlc3BvbnNlLmVycm9yID0gbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5BVVRIT1JJWkVEKTtcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzID09PSA0MjkpIGNoYXRSZXNwb25zZS5lcnJvciA9IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLkNPTlZFUlNBVElPTl9MSU1JVCk7XG4gICAgICAgIGVsc2UgY2hhdFJlc3BvbnNlLmVycm9yID0gbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5LTk9XTl9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYXRSZXNwb25zZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGN1c3RvbUNoYXRGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RJbml0LCB0aW1lb3V0OiBudW1iZXIgPSBDSEFUX0ZFVENIX1RJTUVPVVQpOiBQcm9taXNlPENoYXRGZXRjaFJlc3BvbnNlPiB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21DaGF0RmV0Y2gnLCB1cmwsIG9wdGlvbnMsIHRpbWVvdXQpO1xuXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHRpbWVvdXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsuLi5vcHRpb25zLCBzaWduYWx9KTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIHJldHVybiBoYW5kbGVIdHRwU3RhdHVzKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgQ2hhdEZldGNoUmVzcG9uc2UoKTtcblxuICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgICByLmVycm9yID0gbmV3IENoYXRFcnJvcihFcnJvckNvZGUuUkVRVUVTVF9USU1FT1VUX0FCT1JUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIuZXJyb3IgPSBuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5ORVRXT1JLX0VSUk9SKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbn1cbiIsImV4cG9ydCBlbnVtIEVycm9yQ29kZSB7XG4gICAgQ09OVkVSU0FUSU9OX0xJTUlUID0gJ0NPTlZFUlNBVElPTl9MSU1JVCcsXG4gICAgVU5LTk9XTl9FUlJPUiA9ICdVTktOT1dOX0VSUk9SJyxcbiAgICBDQVBUQ0hBID0gJ0NBUFRDSEEnLFxuICAgIENPUElMT1RfRElTRU5HQUdFRCA9ICdDT1BJTE9UX0RJU0VOR0FHRUQnLFxuICAgIENPUElMT1RfV0VCU09DS0VUX0VSUk9SID0gJ0NPUElMT1RfV0VCU09DS0VUX0VSUk9SJyxcbiAgICBDT1BJTE9UX0lOVkFMSURfUkVRVUVTVCA9ICdDT1BJTE9UX0lOVkFMSURfUkVRVUVTVCcsXG4gICAgTkVUV09SS19FUlJPUiA9ICdORVRXT1JLX0VSUk9SJyxcbiAgICBVTkFVVEhPUklaRUQgPSAnVU5BVVRIT1JJWkVEJyxcbiAgICBSRVFVRVNUX1RJTUVPVVRfQUJPUlQgPSAnUkVRVUVTVF9USU1FT1VUX0FCT1JUJyxcbiAgICBNT0RFTF9JTlRFUk5BTF9FUlJPUiA9ICdNT0RFTF9JTlRFUk5BTF9FUlJPUicsXG4gICAgVVBMT0FEX0ZJTEVfTk9UX1NVUFBPUlRFRCA9ICdVUExPQURfRklMRV9OT1RfU1VQUE9SVEVEJyxcbiAgICBGSUxFX09USEVSID0gJ0ZJTEVfT1RIRVInLFxuICAgIE1PREVMX05PX1BFUk1JU1NJT04gPSAnTU9ERUxfTk9fUEVSTUlTU0lPTidcblxufVxuXG5leHBvcnQgY2xhc3MgQ2hhdEVycm9yIHtcbiAgICBjb2RlOiBFcnJvckNvZGU7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29kZTogRXJyb3JDb2RlLCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgPz8gZ2V0RXJyb3JNZXNzYWdlKGNvZGUpO1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvckNvZGU6IEVycm9yQ29kZSkge1xuICAgIHN3aXRjaCAoZXJyb3JDb2RlKSB7XG4gICAgY2FzZSBFcnJvckNvZGUuQ09OVkVSU0FUSU9OX0xJTUlUOlxuICAgICAgICByZXR1cm4gJ1NvcnJ5LCB0aGUgY29udmVyc2F0aW9uIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWQuIFBsZWFzZSB0cnkgbGF0ZXIuJztcbiAgICBjYXNlIEVycm9yQ29kZS5VTktOT1dOX0VSUk9SOlxuICAgICAgICByZXR1cm4gJ1NvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHJlc3RhcnQgdGhlIHNlc3Npb24uJztcbiAgICBjYXNlIEVycm9yQ29kZS5DQVBUQ0hBOlxuICAgICAgICByZXR1cm4gJ1BsZWFzZSBwYXNzIHRoZSBDbG91ZGZsYXJlIGNoZWNrLic7XG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkNIQVRHUFRfVU5BVVRIT1JJWkVEOlxuICAgICAgICAvLyAgICAgcmV0dXJuICdUaGVyZSBpcyBubyBsb2dnZWQtaW4gQ2hhdEdQVCBhY2NvdW50IGluIHRoaXMgYnJvd3Nlci4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkNIQVRHUFRfQVVUSDpcbiAgICAgICAgLy8gICAgIHJldHVybiAnQ2hhdEdQVCBhdXRoZW50aWNhdGlvbiBlcnJvci4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkdQVDRfTU9ERUxfV0FJVExJU1Q6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ1NvcnJ5LCB0aGUgR1BULTQgbW9kZWwgaXMgY3VycmVudGx5IGluIGEgd2FpdGxpc3QuJ1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5DT1BJTE9UX1VOQVVUSE9SSVpFRDpcbiAgICAgICAgLy8gICAgIHJldHVybiAnVW5hdXRob3JpemVkIGFjY2VzcyB0byBDb3BpbG90LidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuQ0FQVENIQTpcbiAgICAgICAgLy8gICAgIHJldHVybiAnUGxlYXNlIHNvbHZlIHRoZSBDYXB0Y2hhIHRvIGFjY2VzcyBDb3BpbG90LidcbiAgICBjYXNlIEVycm9yQ29kZS5DT1BJTE9UX0lOVkFMSURfUkVRVUVTVDpcbiAgICAgICAgcmV0dXJuICdQbGVhc2UgcmVzdGFydCB0aGUgQ29waWxvdCBzZXNzaW9uLic7XG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkFQSV9LRVlfTk9UX1NFVDpcbiAgICAgICAgLy8gICAgIHJldHVybiAnQVBJIGtleSBub3Qgc2V0LidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuQkFSRF9FTVBUWV9SRVNQT05TRTpcbiAgICAgICAgLy8gICAgIHJldHVybiAnQmFyZCByZXR1cm5lZCBhbiBlbXB0eSByZXNwb25zZS4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkJBUkRfVU5BVVRIT1JJWkVEOlxuICAgICAgICAvLyAgICAgcmV0dXJuICdVbmF1dGhvcml6ZWQgYWNjZXNzIHRvIEJhcmQuJ1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5NSVNTSU5HX1BPRV9IT1NUX1BFUk1JU1NJT046XG4gICAgICAgIC8vICAgICByZXR1cm4gJ01pc3NpbmcgcGVybWlzc2lvbiB0byBob3N0IFBvZS4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLlBPRV9VTkFVVEhPUklaRUQ6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ1VuYXV0aG9yaXplZCBhY2Nlc3MgdG8gUG9lLidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuTUlTU0lOR19IT1NUX1BFUk1JU1NJT046XG4gICAgICAgIC8vICAgICByZXR1cm4gJ01pc3NpbmcgcGVybWlzc2lvbiB0byBob3N0LidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuWFVORkVJX1VOQVVUSE9SSVpFRDpcbiAgICAgICAgLy8gICAgIHJldHVybiAnVW5hdXRob3JpemVkIGFjY2VzcyB0byBYdW5mZWkuJ1xuICAgIGNhc2UgRXJyb3JDb2RlLk5FVFdPUktfRVJST1I6XG4gICAgICAgIHJldHVybiAnTmV0d29yayBlcnJvci4nO1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5QT0VfTUVTU0FHRV9MSU1JVDpcbiAgICAgICAgLy8gICAgIHJldHVybiAnUG9lIG1lc3NhZ2UgbGltaXQgcmVhY2hlZC4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkxNU1lTX1NFU1NJT05fRVhQSVJFRDpcbiAgICAgICAgLy8gICAgIHJldHVybiAnTG1zeXMgc2Vzc2lvbiBleHBpcmVkLidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuQ0hBVEdQVF9JTlNVRkZJQ0lFTlRfUVVPVEE6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ0luc3VmZmljaWVudCBDaGF0R1BUIHF1b3RhLidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuQ0xBVURFX1dFQl9VTkFVVEhPUklaRUQ6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ1VuYXV0aG9yaXplZCBhY2Nlc3MgdG8gQ2xhdWRlIFdlYi4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkNMQVVERV9XRUJfVU5BVkFJTEFCTEU6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ0NsYXVkZSBXZWIgaXMgdW5hdmFpbGFibGUuJ1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5RSUFOV0VOX1dFQl9VTkFVVEhPUklaRUQ6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ1VuYXV0aG9yaXplZCBhY2Nlc3MgdG8gUWlhbndlbiBXZWIuJ1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5CQUlDSFVBTl9XRUJfVU5BVVRIT1JJWkVEOlxuICAgICAgICAvLyAgICAgcmV0dXJuICdVbmF1dGhvcml6ZWQgYWNjZXNzIHRvIEJhaWNodWFuIFdlYi4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkxNU1lTX1dTX0VSUk9SOlxuICAgICAgICAvLyAgICAgcmV0dXJuICdMbXN5cyB3ZWJzb2NrZXQgZXJyb3IuJ1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5QUExYX0ZPUkJJRERFTl9FUlJPUjpcbiAgICAgICAgLy8gICAgIHJldHVybiAnRm9yYmlkZGVuIGVycm9yLidcbiAgICAgICAgLy8gY2FzZSBFcnJvckNvZGUuVFdJVFRFUl9VTkFVVEhPUklaRUQ6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ1VuYXV0aG9yaXplZCBhY2Nlc3MgdG8gVHdpdHRlci4nXG4gICAgICAgIC8vIGNhc2UgRXJyb3JDb2RlLkdST0tfVU5BVkFJTEFCTEU6XG4gICAgICAgIC8vICAgICByZXR1cm4gJ0dyb2sgaXMgdW5hdmFpbGFibGUuJ1xuICAgICAgICAvLyBjYXNlIEVycm9yQ29kZS5DVVNUT01fRVJST1I6XG4gICAgICAgIC8vICAgICByZXR1cm4gbWVzc2FnZSA/PyAnVW5rbm93biBlcnJvci4nXG4gICAgY2FzZSBFcnJvckNvZGUuUkVRVUVTVF9USU1FT1VUX0FCT1JUOlxuICAgICAgICByZXR1cm4gJ1JlcXVlc3QgdGltZW91dCwgYWJvcnRlZC4nO1xuICAgIGNhc2UgRXJyb3JDb2RlLk1PREVMX0lOVEVSTkFMX0VSUk9SOlxuICAgICAgICByZXR1cm4gJ1NvbWUgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnVW5rbm93biBlcnJvci4nO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDSEFUX0ZFVENIX1RJTUVPVVQgPSAyMCAqIDEwMDA7XG4iLCJpbXBvcnQgdHlwZSB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUl9TQ1BfUEFSQU0gPSAnLS1yLWNzcCc7XG5leHBvcnQgY29uc3QgSVNfT1BFTl9JTl9QTFVHSU4gPSAnLS1vcGlzJztcbmV4cG9ydCBjb25zdCBJU19PUEVOX0lOX0NIQUxMRU5HRV9XSU5ET1cgPSAnLS1vcHBjdyc7XG5leHBvcnQgY29uc3QgSVNfT1BFTl9JTl9DSEFUX0FVVEhfV0lORE9XID0gJy0tb3Bhdyc7XG5leHBvcnQgY29uc3QgSVNfT1BFTl9JTl9DSEFUX0NBUFRDSEFfV0lORE9XID0gJy0tb2ljY3cnO1xuZXhwb3J0IGNvbnN0IFdJTkRPV19GT1JfUkVNT1ZFX1NUT1JBR0VfS0VZID0gJy0tb193ayc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9BQ1RJT05fU1lOQ19TRUFSQ0hfVEVYVCA9ICdzeW5jX3NlYXJjaF90ZXh0JztcbmV4cG9ydCBjb25zdCBERVZWX1NFQVJDSF9LRVkgPSAnLS1kZXZ2c3MnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQUNUSU9OX1NIT1VMRF9SRUxPQURfUEVSUExFWElUWV9JTl9QQU5FTCA9ICdzaG91bGRfcmVsb2FkX3BlcnBsZXhpdHlfaW5fcGFuZWwnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQUNUSU9OX1NIT1VMRF9SRUxPQURfUEhJTkRfSU5fUEFORUwgPSAnc2hvdWxkX3JlbG9hZF9waGluZF9pbl9wYW5lbCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9BQ1RJT05fQ0xPU0VfV0lORE9XX1dJVEhfSUQgPSAnY2xvc2Vfd2luZG93X3dpdGhfaWQnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQUNUSU9OX1JFTE9BRF9TSVRFX0ZSQU1FID0gJ3JlbG9hZF9zaXRlX2ZyYW1lJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0FDVElPTl9DSEFUX1BST1ZJREVSX0FVVEhfU1VDQ0VTUyA9ICdhdXRoX3N1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQUNUSU9OX0NIQVRfUFJPVklERVJfQ0FQVENIQV9TVUNDRVNTID0gJ2NhcHRjaGFfc3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9BQ1RJT05fU0VUX1BBTkVMX09QRU5fT1JfTk9UID0gJ3NldF9wYW5lbF9vcGVuX29yX25vdCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9BQ1RJT05fU0VUX1FVT1RJTkdfU0VMRUNUSU9OX1RFWFQgPSAnc2V0X3F1b3Rpbmdfc2VsZWN0aW9uX3RleHQnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQUNUSU9OX1NFVF9RVU9USU5HX0NBTkNFTCA9ICdzZXRfcXVvdGluZ19zZWxlY3Rpb25fdGV4dF9jYW5jZWwnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQUNUSU9OX1NFVF9RVU9USU5HX1NFTEVDVElPTl9DTEVBUl9DVVJTT1IgPSAnc2V0X3F1b3Rpbmdfc2VsZWN0aW9uX3RleHRfY2xlYXJfY3Vyc29yJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NIRUNLX1BBTkVMX0lTX09QRU4gPSAnbWVzc2FnZV9jaGVja19wYW5lbF9pc19vcGVuJztcbmV4cG9ydCBjb25zdCBTVE9SQUdFX1dJTExfUkVNT1ZFRF9XSU5ET1dfS0VZID0gJ3dpbGxfcmVtb3ZlZF93aW5kb3dfa2V5JztcbmV4cG9ydCBjb25zdCBTVE9SQUdFX09QRU5fUEFORUxfSU5JVF9EQVRBID0gJ29wZW5fcGFuZWxfaW5pdF9kYXRhJztcbmV4cG9ydCBjb25zdCBTVE9SQUdFX09QRU5fQUlfREVWSUNFX0lEID0gJ29wZW5fYWlfZGV2aWNlX2lkJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0FDVElPTl9PUEVOX1BBTkVMID0gJ21lc3NhZ2Vfb3Blbl9wYW5lbCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9QQU5FTF9PUEVORURfUElOR19GUk9NX1BBTkVMID0gJ01FU1NBR0VfUEFORUxfT1BFTkVEX1BJTkdfRlJPTV9QQU5FTCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9BQ1RJT05fT1BFTl9QQU5FTF9XSVRIX1NFQVJDSF9URVhUID0gJ29wZW5fcGFuZWxfd2l0aF9zZWFyY2hfdGV4dCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9BQ1RJT05fT1BFTl9QQU5FTF9BU0tfQUkgPSAnb3Blbl9wYW5lbF9hc2tfYWlfZGVmYXVsdCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9VUERBVEVfUEFORUxfSU5JVF9EQVRBID0gJ3VwZGF0ZV9wYW5lbF9pbml0X2RhdGEnO1xuZXhwb3J0IGNvbnN0IFBPUlRfTElTVEVOX1BBTkVMX0NMT1NFRF9LRVkgPSAnbGlzdGVuX3BhbmVsX2Nsb3NlZF9rZXknO1xuXG5leHBvcnQgY29uc3QgU1RPUkFHRV9QQU5FTF9PUEVOX0RBVEFfS0VZID0gJ3BhbmVsX29wZW5fZGF0YV9rZXknO1xuZXhwb3J0IGNvbnN0IFBST01QVF9QTEFDRUhPTERFUl9URVhUID0gXCIke3RleHRzfVwiO1xuZXhwb3J0IGNvbnN0IFBST01QVF9QTEFDRUhPTERFUl9MQU5HID0gXCIke2xhbmd9XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRHb29nbGVRdWVyeSA9IGZ1bmN0aW9uICh1cmw6IHN0cmluZyk6IHN0cmluZyAge1xuICAgIGlmICh1cmwuaW5kZXhPZignd3d3Lmdvb2dsZS5jb20nKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IHVybE9iai5zZWFyY2hQYXJhbXM7XG4gICAgcmV0dXJuIHVybFBhcmFtcy5nZXQoJ3EnKSA/PyBcIlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGFwcGVuZFBhcmFtVG9VcmwgPSBmdW5jdGlvbiBhcHBlbmRQYXJhbVRvVXJsKHVybDogc3RyaW5nLCBwYXJhbUtleTogc3RyaW5nLCBwYXJhbVZhbHVlOiBhbnkpIHtcbiAgICAvLyBDaGVjayBpZiBVUkwgYWxyZWFkeSBoYXMgYSBxdWVyeSBzdHJpbmdcbiAgICBjb25zdCBoYXNRdWVyeSA9IHVybC5pbmNsdWRlcygnPycpO1xuXG4gICAgLy8gVXNlICcmJyBpZiBxdWVyeSBleGlzdHMsICc/JyBpZiBub3RcbiAgICBjb25zdCBzZXBhcmF0b3IgPSBoYXNRdWVyeSA/ICcmJyA6ICc/JztcblxuICAgIC8vIEVuY29kZSB0aGUgcGFyYW1ldGVyIHZhbHVlIHRvIGVuc3VyZSBzcGVjaWFsIGNoYXJhY3RlcnMgZG8gbm90IGJyZWFrIHRoZSBVUkwgc3RydWN0dXJlXG4gICAgY29uc3QgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtVmFsdWUpO1xuXG4gICAgLy8gQXBwZW5kIGFuZCByZXR1cm4gdGhlIGNvbXBsZXRlIFVSTFxuICAgIHJldHVybiB1cmwgKyBzZXBhcmF0b3IgKyBwYXJhbUtleSArICc9JyArIGVuY29kZWRWYWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDc3BQYXJhbXNUb1VybCA9IGZ1bmN0aW9uIGFkZENzcFBhcmFtcyh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiBhcHBlbmRQYXJhbVRvVXJsKHVybCwgUl9TQ1BfUEFSQU0sIDEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZE1vYmlsZUhlYWRlclRvVXJsID0gZnVuY3Rpb24gYWRkTW9iaWxlSGVhZGVyKHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFwcGVuZFBhcmFtVG9VcmwodXJsLCAnLS1pbi1tb2JpbGUnLCAxKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvcGVuSW5QbHVnaW4gPSBmdW5jdGlvbiAodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLmluY2x1ZGVzKElTX09QRU5fSU5fUExVR0lOKTtcbn07XG5cbmV4cG9ydCBjb25zdCBidG9hT2JqID0gZnVuY3Rpb24gKG9iajogYW55KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIG9ialtrZXldID0gYnRvYShvYmpba2V5XS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IGNvbnN0IGF0b2JPYmogPSBmdW5jdGlvbiAob2JqOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgb2JqW2tleV0gPSBhdG9iKG9ialtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExhdGVzdFN0YXRlID0gZnVuY3Rpb248VD4gKGRpc3BhdGNoOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxUPj4pOlByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPiggKHJlc29sdmUpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocHJldlN0YXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVdWlkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG9wZW5XaW5kb3dJbkZyb250ZW5kID0gZnVuY3Rpb24gKGhyZWY6IHN0cmluZykge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgdm9pZCBjaHJvbWUud2luZG93cy5jcmVhdGUoe1xuICAgICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgICAgbGVmdDogY3VycmVudFdpbmRvdy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBjdXJyZW50V2luZG93LnRvcCxcbiAgICAgICAgICAgIHdpZHRoOiBjdXJyZW50V2luZG93LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjdXJyZW50V2luZG93LmhlaWdodCxcbiAgICAgICAgICAgIHR5cGU6ICdub3JtYWwnXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxudHlwZSBEZWJvdW5jZUZ1bmN0aW9uPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4gPSAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG4gICAgY2FsbGJhY2s6IFQsXG4gICAgd2FpdDogbnVtYmVyLFxuKTogRGVib3VuY2VGdW5jdGlvbjxUPiB7XG4gICAgbGV0IHRpbWVvdXRJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0IGRlYm91bmNlZDogRGVib3VuY2VGdW5jdGlvbjxUPiA9ICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfSwgd2FpdCk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWVzSW5CYWNrZW5kQnlEb21haW4oZG9tYWluOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAvLyAucGVycGxleGl0eS5haVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0QWxsKHtkb21haW4gLCBwYXJ0aXRpb25LZXk6IHtcbiAgICAgICAgICAgIC8vIHRvcExldmVsU2l0ZTogXCJodHRwczovL3BlcnBsZXhpdHkuYWlcIixcbiAgICAgICAgfX0sIChjb29raWVzKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGNvb2tpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtpdGVtLm5hbWV9PSR7aXRlbS52YWx1ZX1gO1xuICAgICAgICAgICAgfSkuam9pbihcIjtcIikpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0TWluKCkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0aW1lem9uZU9mZnNldE1pbiA9IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgcmV0dXJuIC10aW1lem9uZU9mZnNldE1pbjtcbn1cbiIsImltcG9ydCB0eXBlIHtQbGFzbW9NZXNzYWdpbmd9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XG5pbXBvcnQge0NvbnZlcnNhdGlvblJlc3BvbnNlLCBSZXNwb25zZU1lc3NhZ2VUeXBlfSBmcm9tIFwifmxpYnMvb3Blbi1haS9vcGVuLWFpLWludGVyZmFjZVwiO1xuaW1wb3J0IHtDaGF0RXJyb3IsIEVycm9yQ29kZX0gZnJvbSBcIn51dGlscy9lcnJvcnNcIjtcbmltcG9ydCB7Y3VzdG9tQ2hhdEZldGNofSBmcm9tIFwifnV0aWxzL2N1c3RvbS1mZXRjaC1mb3ItY2hhdFwiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29waWxvdENvbnZlcnNhdGlvbiB7XG4gICAgY29udmVyc2F0aW9uU2lnbmF0dXJlOiBzdHJpbmc7XG4gICAgZW5jcnlwdGVkQ29udmVyc2F0aW9uU2lnbmF0dXJlOiBzdHJpbmc7XG4gICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICBjb252ZXJzYXRpb25JZDogc3RyaW5nO1xuICAgIHJlc3VsdDoge1xuICAgICAgICBtZXNzYWdlOiBudWxsIHwgYW55O1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgIH07XG59XG5cbmNsYXNzIENvcmVVdGlscyB7XG4gICAgc3RhdGljIGNsYW1wKE86IGFueSwgQjogYW55LCBVOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKE8pIHx8IE8gPD0gQiA/IEIgOiBPID49IFUgPyBVIDogTztcbiAgICB9XG5cbiAgICBzdGF0aWMgdXVpZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnBhcnRVVUlEKCkgKyB0aGlzLnBhcnRVVUlEKCkgKyBcIi1cIiArIHRoaXMucGFydFVVSUQoKSArIFwiLVwiICsgdGhpcy5wYXJ0VVVJRCgpICsgXCItXCIgKyB0aGlzLnBhcnRVVUlEKCkgKyBcIi1cIiArIHRoaXMucGFydFVVSUQoKSArIHRoaXMucGFydFVVSUQoKSArIHRoaXMucGFydFVVSUQoKSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGFydFVVSUQoKSB7XG4gICAgICAgIHJldHVybiAoNjU1MzYgKiAoMSArIE1hdGgucmFuZG9tKCkpIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9XG59XG5cbmNvbnN0IHJ1bkNvbnZlcnNhdGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpOiBQcm9taXNlPFtDaGF0RXJyb3IgfCBudWxsLCBhbnldPiB7XG4gICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwicmVmZXJlclwiLCBcImh0dHBzOi8vY29waWxvdC5taWNyb3NvZnQuY29tLz9zaG93Y29udj0xXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJ4LW1zLWNsaWVudC1yZXF1ZXN0LWlkXCIsIENvcmVVdGlscy51dWlkKCkpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJ4LW1zLXVzZXJhZ2VudFwiLCBcImF6c2RrLWpzLWFwaS1jbGllbnQtZmFjdG9yeS8xLjAuMC1iZXRhLjEgY29yZS1yZXN0LXBpcGVsaW5lLzEuMTIuMyBPUy9tYWNPU1wiKTtcblxuICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyAgICAgZmV0Y2goXCJodHRwczovL2NvcGlsb3QubWljcm9zb2Z0LmNvbS90dXJpbmcvdXNlcmNvbnNlbnQ/YnVuZGxlVmVyc2lvbj0xLjE2NzguMCZpc1N0YXJ0T2ZDb252ZXJzYXRpb249dHJ1ZVwiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdClcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgLy8gICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZWplY3QoZSlcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgLy8gfSlcbiAgICBjb25zdCByID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9jb3BpbG90Lm1pY3Jvc29mdC5jb20vdHVyaW5nL3VzZXJjb25zZW50P2J1bmRsZVZlcnNpb249MS4xNjc4LjAmaXNTdGFydE9mQ29udmVyc2F0aW9uPXRydWVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcblxuICAgIGlmIChyLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBbci5lcnJvciwgbnVsbF07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCBKU09OLnBhcnNlKGF3YWl0IHIucmVzcG9uc2UhLnRleHQoKSldO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSwgbnVsbF07XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ29udmVyc2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCk6IFByb21pc2U8W0NoYXRFcnJvciB8IG51bGwsIENvcGlsb3RDb252ZXJzYXRpb24gfCBudWxsXT4ge1xuICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcImFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcInJlZmVyZXJcIiwgXCJodHRwczovL2NvcGlsb3QubWljcm9zb2Z0LmNvbS9cIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcInNlYy1mZXRjaC1tb2RlXCIsIFwiY29yc1wiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwic2VjLWZldGNoLXNpdGVcIiwgXCJzYW1lLW9yaWdpblwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwieC1tcy1jbGllbnQtcmVxdWVzdC1pZFwiLCBDb3JlVXRpbHMudXVpZCgpKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwieC1tcy11c2VyYWdlbnRcIiwgXCJhenNkay1qcy1hcGktY2xpZW50LWZhY3RvcnkvMS4wLjAtYmV0YS4xIGNvcmUtcmVzdC1waXBlbGluZS8xLjEyLjMgT1MvbWFjT1NcIik7XG5cbiAgICBjb25zdCByID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9jb3BpbG90Lm1pY3Jvc29mdC5jb20vdHVyaW5nL2NvbnZlcnNhdGlvbi9jcmVhdGU/YnVuZGxlVmVyc2lvbj0xLjE2NTUuMFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICByZWRpcmVjdDogXCJmb2xsb3dcIlxuICAgIH0pO1xuXG4gICAgaWYgKHIuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFtyLmVycm9yLCBudWxsXTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gci5yZXNwb25zZT8uaGVhZGVycztcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uU2lnbmF0dXJlID0gaGVhZGVycz8uZ2V0KFwiWC1TeWRuZXktQ29udmVyc2F0aW9uc2lnbmF0dXJlXCIpIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZENvbnZlcnNhdGlvblNpZ25hdHVyZSA9IGhlYWRlcnM/LmdldChcIlgtU3lkbmV5LUVuY3J5cHRlZGNvbnZlcnNhdGlvbnNpZ25hdHVyZVwiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHIucmVzcG9uc2U/LnRleHQoKTtcblxuICAgICAgICBpZighdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTkFVVEhPUklaRUQpLCBudWxsXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xuXG4gICAgICAgIHJldHVybiBbbnVsbCwge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvblNpZ25hdHVyZSxcbiAgICAgICAgICAgIGVuY3J5cHRlZENvbnZlcnNhdGlvblNpZ25hdHVyZVxuICAgICAgICB9XTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVycz09XCIsIGUpO1xuICAgICAgICByZXR1cm4gW25ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLlVOS05PV05fRVJST1IpLCBudWxsXTtcbiAgICB9XG59O1xuXG5sZXQgbGFzdENvbnZlcnNhdGlvbjogQ29waWxvdENvbnZlcnNhdGlvbiB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7Y29udmVyc2F0aW9uSWQsIHdpdGhSdW59ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgY29udmVyc2F0aW9uRXJyID0gbmV3IENvbnZlcnNhdGlvblJlc3BvbnNlKHtcbiAgICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkVSUk9SLFxuICAgIH0pO1xuICAgIGNvbnNvbGUudHJhY2UoJ2luaXQtY29waWxvdC1jb252ZXJzYXRpb24nLCByZXEuYm9keSk7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbklkICYmIGxhc3RDb252ZXJzYXRpb24/LmNvbnZlcnNhdGlvbklkID09PSBjb252ZXJzYXRpb25JZCkge1xuICAgICAgICAgICAgcmVzLnNlbmQoW251bGwsIGxhc3RDb252ZXJzYXRpb25dKTtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ2luaXQtY29waWxvdC1jb252ZXJzYXRpb24gMCcsIHJlcS5ib2R5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtjb252ZXJzYXRpb25DcmVhdGVFcnIsIGNvbnZlcnNhdGlvbl0gPSBhd2FpdCBjcmVhdGVDb252ZXJzYXRpb24oKTtcblxuICAgICAgICBjb25zb2xlLnRyYWNlKCdpbml0LWNvcGlsb3QtY29udmVyc2F0aW9uIDEnLCBjb252ZXJzYXRpb25DcmVhdGVFcnIsIGNvbnZlcnNhdGlvbik7XG5cbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbkNyZWF0ZUVycikge1xuICAgICAgICAgICAgY29udmVyc2F0aW9uRXJyLmVycm9yID0gY29udmVyc2F0aW9uQ3JlYXRlRXJyO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoW2NvbnZlcnNhdGlvbkNyZWF0ZUVyciwgbnVsbF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYod2l0aFJ1bikge1xuICAgICAgICAgICAgY29uc3QgW3J1bkVycl0gPSBhd2FpdCBydW5Db252ZXJzYXRpb24oKTtcblxuICAgICAgICAgICAgY29uc29sZS50cmFjZSgnaW5pdC1jb3BpbG90LWNvbnZlcnNhdGlvbiAyJywgcnVuRXJyKTtcbiAgICAgICAgICAgIGlmIChydW5FcnIpIHtcbiAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25FcnIuZXJyb3IgPSBydW5FcnI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoW3J1bkVyciwgbnVsbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGFzdENvbnZlcnNhdGlvbiA9IGNvbnZlcnNhdGlvbjtcbiAgICAgICAgcmVzLnNlbmQoW251bGwsIGNvbnZlcnNhdGlvbl0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignaW5pdC1jb3BpbG90LWNvbnZlcnNhdGlvbiBlcnInLCBlKTtcbiAgICAgICAgY29udmVyc2F0aW9uRXJyLmVycm9yID0gbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5LTk9XTl9FUlJPUik7XG4gICAgICAgIHJlcy5zZW5kKFtjb252ZXJzYXRpb25FcnIsIG51bGxdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIiwiaW1wb3J0IHR5cGUge0NoYXRFcnJvcn0gZnJvbSBcIn51dGlscy9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHtDb252ZXJzYXRpb25NZXNzYWdlQXBwZW5kaXh9IGZyb20gXCJ+Y29tcG9uZW50L01lc3NhZ2VBcHBlbmRpeFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcGVuQUlTZXNzaW9uUmVzcG9uc2Uge1xuICAgIHVzZXI/OiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgICAgaW1hZ2U6IHN0cmluZztcbiAgICAgICAgcGljdHVyZTogc3RyaW5nO1xuICAgICAgICBpZHA6IHN0cmluZztcbiAgICAgICAgaWF0OiBudW1iZXI7XG4gICAgICAgIG1mYTogYm9vbGVhbjtcbiAgICAgICAgZ3JvdXBzOiBhbnlbXTtcbiAgICAgICAgaW50ZXJjb21faGFzaDogc3RyaW5nO1xuICAgIH07XG4gICAgZXhwaXJlcz86IHN0cmluZztcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgICBhdXRoUHJvdmlkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXRSZXF1aXJlbWVudHNSZXNwb25zZSB7XG4gICAgcGVyc29uYTogc3RyaW5nO1xuICAgIGFya29zZToge1xuICAgICAgICByZXF1aXJlZDogZmFsc2U7XG4gICAgICAgIGR4PzogYW55O1xuICAgIH07XG4gICAgdHVybnN0aWxlOiB7XG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZTtcbiAgICB9O1xuICAgIHByb29mb2Z3b3JrOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlO1xuICAgICAgICBncmFkZTogc3RyaW5nO1xuICAgICAgICBzZWVkOiBzdHJpbmc7XG4gICAgICAgIGRpZmZpY3VsdHk6IHN0cmluZztcbiAgICB9O1xuICAgIHRva2VuOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEFjY291bnRQcm9jZXNzb3Ige1xuICAgIGEwMDE6IHtcbiAgICAgICAgaGFzX2N1c3RvbWVyX29iamVjdDogYm9vbGVhbjtcbiAgICB9O1xuICAgIGIwMDE6IHtcbiAgICAgICAgaGFzX3RyYW5zYWN0aW9uX2hpc3Rvcnk6IGJvb2xlYW47XG4gICAgfTtcbiAgICBjMDAxOiB7XG4gICAgICAgIGhhc190cmFuc2FjdGlvbl9oaXN0b3J5OiBib29sZWFuO1xuICAgIH07XG59XG5cbmludGVyZmFjZSBBY2NvdW50RW50aXRsZW1lbnQge1xuICAgIHN1YnNjcmlwdGlvbl9pZDogc3RyaW5nO1xuICAgIGhhc19hY3RpdmVfc3Vic2NyaXB0aW9uOiBib29sZWFuO1xuICAgIHN1YnNjcmlwdGlvbl9wbGFuOiBzdHJpbmc7XG4gICAgZXhwaXJlc19hdDogc3RyaW5nO1xuICAgIGJpbGxpbmdfcGVyaW9kOiBhbnk7XG59XG5cbmludGVyZmFjZSBBY2NvdW50TGFzdEFjdGl2ZVN1YnNjcmlwdGlvbiB7XG4gICAgc3Vic2NyaXB0aW9uX2lkOiBzdHJpbmc7XG4gICAgcHVyY2hhc2Vfb3JpZ2luX3BsYXRmb3JtOiBzdHJpbmc7XG4gICAgd2lsbF9yZW5ldzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEFjY291bnQge1xuICAgIGFjY291bnRfdXNlcl9yb2xlOiBzdHJpbmc7XG4gICAgYWNjb3VudF91c2VyX2lkOiBzdHJpbmc7XG4gICAgcHJvY2Vzc29yOiBBY2NvdW50UHJvY2Vzc29yO1xuICAgIGFjY291bnRfaWQ6IHN0cmluZztcbiAgICBvcmdhbml6YXRpb25faWQ6IGFueTtcbiAgICBpc19tb3N0X3JlY2VudF9leHBpcmVkX3N1YnNjcmlwdGlvbl9ncmF0aXM6IGJvb2xlYW47XG4gICAgaGFzX3ByZXZpb3VzbHlfcGFpZF9zdWJzY3JpcHRpb246IGJvb2xlYW47XG4gICAgbmFtZTogYW55O1xuICAgIHByb2ZpbGVfcGljdHVyZV9pZDogYW55O1xuICAgIHByb2ZpbGVfcGljdHVyZV91cmw6IGFueTtcbiAgICBzdHJ1Y3R1cmU6IHN0cmluZztcbiAgICBwbGFuX3R5cGU6IHN0cmluZztcbiAgICBpc19kZWFjdGl2YXRlZDogYm9vbGVhbjtcbiAgICBwcm9tb19kYXRhOiBhbnk7XG59XG5cbnR5cGUgQWNjb3VudHMgPSBSZWNvcmQ8c3RyaW5nLCB7XG4gICAgICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgICAgIGZlYXR1cmVzOiBzdHJpbmdbXTtcbiAgICAgICAgZW50aXRsZW1lbnQ6IEFjY291bnRFbnRpdGxlbWVudDtcbiAgICAgICAgcmF0ZV9saW1pdHM6IGFueVtdO1xuICAgICAgICBsYXN0X2FjdGl2ZV9zdWJzY3JpcHRpb246IEFjY291bnRMYXN0QWN0aXZlU3Vic2NyaXB0aW9uO1xuICAgICAgICBpc19lbGlnaWJsZV9mb3JfeWVhcmx5X3BsdXNfc3Vic2NyaXB0aW9uOiBib29sZWFuO1xuICAgIH0+O1xuXG50eXBlIEFjY291bnRPcmRlcmluZyA9IFJlY29yZDxudW1iZXIsIHN0cmluZz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wZW5haUFjY291bnREYXRhIHtcbiAgICBhY2NvdW50czogQWNjb3VudHM7XG4gICAgYWNjb3VudF9vcmRlcmluZzogQWNjb3VudE9yZGVyaW5nO1xufVxuXG5leHBvcnQgZW51bSBHZW5lcmF0ZVN0YXR1cyB7XG4gICAgR0VORVJBVElORyA9IFwiZ2VuZXJhdGluZ1wiLFxuICAgIERPTkUgPSBcImRvbmVcIixcbn1cblxuZXhwb3J0IGVudW0gUmVzcG9uc2VNZXNzYWdlVHlwZSB7XG4gICAgRE9ORSA9IFwiZG9uZVwiLFxuICAgIEdFTkVSQVRJTkcgPSBcImdlbmVyYXRpbmdcIixcbiAgICBUSVRMRUQgPSBcInRpdGxlZFwiLFxuICAgIEVSUk9SID0gXCJlcnJvclwiLFxuICAgIEVSUk9SX1JFVFJZX01FU1NBR0UgPSBcImVycm9yX3JldHJ5X21lc3NhZ2VcIixcbiAgICBFUlJPUl9ORUVEX05FV19DT05WRVJTQVRJT04gPSBcImVycm9yX25lZWRfbmV3X2NvbnZlcnNhdGlvblwiLFxufVxuXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uUmVzcG9uc2Uge1xuICAgIGNvbnZlcnNhdGlvbl9pZD86IHN0cmluZztcbiAgICBtZXNzYWdlX2lkPzogc3RyaW5nO1xuICAgIG1lc3NhZ2VfdGV4dD86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBtZXNzYWdlX3R5cGU6IFJlc3BvbnNlTWVzc2FnZVR5cGU7XG4gICAgZXJyb3I/OiBDaGF0RXJyb3I7XG4gICAgYXBwZW5kaXg/OiBDb252ZXJzYXRpb25NZXNzYWdlQXBwZW5kaXg7XG4gICAgYWRhcHRpdmVDYXJkcz86IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHtjb252ZXJzYXRpb25faWQsIG1lc3NhZ2VfaWQsIG1lc3NhZ2VfdGV4dCwgIG1lc3NhZ2VfdHlwZSx0aXRsZSwgZXJyb3IsIGFwcGVuZGl4fToge2NvbnZlcnNhdGlvbl9pZD86IHN0cmluZywgcGFyZW50X21lc3NhZ2VfaWQ/OiBzdHJpbmcsIG1lc3NhZ2VfaWQ/OiBzdHJpbmcsIG1lc3NhZ2VfdGV4dD86IHN0cmluZywgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLCB0aXRsZT86IHN0cmluZywgZXJyb3I/OiBDaGF0RXJyb3IsIGFwcGVuZGl4PzogQ29udmVyc2F0aW9uTWVzc2FnZUFwcGVuZGl4fSkge1xuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbl9pZCA9IGNvbnZlcnNhdGlvbl9pZDtcbiAgICAgICAgdGhpcy5tZXNzYWdlX2lkID0gbWVzc2FnZV9pZDtcbiAgICAgICAgdGhpcy5tZXNzYWdlX3RleHQgPSBtZXNzYWdlX3RleHQ7XG4gICAgICAgIHRoaXMubWVzc2FnZV90eXBlID0gbWVzc2FnZV90eXBlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hcHBlbmRpeCA9IGFwcGVuZGl4O1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHtQbGFzbW9NZXNzYWdpbmd9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XG5pbXBvcnQgeyBjdXN0b21DaGF0RmV0Y2h9IGZyb20gXCJ+dXRpbHMvY3VzdG9tLWZldGNoLWZvci1jaGF0XCI7XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHtjb252ZXJzYXRpb25JZCwgaW1hZ2VCYXNlNjR9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJvcmlnaW5cIiwgXCJodHRwczovL2NvcGlsb3QubWljcm9zb2Z0LmNvbVwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwicmVmZXJlclwiLCBcImh0dHBzOi8vY29waWxvdC5taWNyb3NvZnQuY29tL1wiKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3QgcmF3RGF0YSA9IHtcbiAgICAgICAgXCJpbWFnZUluZm9cIjoge30sXG4gICAgICAgIFwia25vd2xlZGdlUmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcImludm9rZWRTa2lsbHNcIjogW1xuICAgICAgICAgICAgICAgIFwiSW1hZ2VCeUlkXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInN1YnNjcmlwdGlvbklkXCI6IFwiQmluZy5DaGF0Lk11bHRpbW9kYWxcIixcbiAgICAgICAgICAgIFwiaW52b2tlZFNraWxsc1JlcXVlc3REYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcImVuYWJsZUZhY2VCbHVyXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbnZvRGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb252b2lkXCI6IGNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgICAgIFwiY29udm90b25lXCI6IFwiQmFsYW5jZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcImtub3dsZWRnZVJlcXVlc3RcIiwgSlNPTi5zdHJpbmdpZnkocmF3RGF0YSkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlQmFzZTY0XCIsIGltYWdlQmFzZTY0KTtcblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGN1c3RvbUNoYXRGZXRjaChcImh0dHBzOi8vY29waWxvdC5taWNyb3NvZnQuY29tL2ltYWdlcy9rYmxvYj8tLWN1YT0xXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcblxuICAgIGlmKHJlcXVlc3QuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFtyZXF1ZXN0LmVycm9yLCBudWxsXSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Py5yZXNwb25zZT8uanNvbigpO1xuICAgIHJldHVybiByZXMuc2VuZChbbnVsbCwgcmVzcG9uc2VdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iLCJpbXBvcnQgdHlwZSB7UGxhc21vTWVzc2FnaW5nfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHtjdXN0b21DaGF0RmV0Y2h9IGZyb20gXCJ+dXRpbHMvY3VzdG9tLWZldGNoLWZvci1jaGF0XCI7XG5pbXBvcnQge0NoYXRFcnJvciwgRXJyb3JDb2RlfSBmcm9tIFwifnV0aWxzL2Vycm9yc1wiO1xuaW1wb3J0IHtLaW1pQm90fSBmcm9tIFwifmxpYnMvY2hhdGJvdC9raW1pXCI7XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcImFjY2VwdFwiLCBcIiovKlwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwib3JpZ2luXCIsIFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuXCIpO1xuICAgIC8vIFRPRE9cbiAgICBteUhlYWRlcnMuYXBwZW5kKFwici10aW1lem9uZVwiLCBcIkFzaWEvU2hhbmdoYWlcIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcInJlZmVyZXJcIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY24vXCIpO1xuICAgIC8vIG15SGVhZGVycy5hcHBlbmQoXCJ4LXRyYWZmaWMtaWRcIiwgXCJjbzM5Mzl1Y3A3ZmN0MHZhNG9jZ1wiKTtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gIGF3YWl0IEtpbWlCb3QuZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgIGlmKGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwibmFtZVwiOiBcInVubmFtZWQgc2Vzc2lvblwiLFxuICAgICAgICBcImlzX2V4YW1wbGVcIjogZmFsc2VcbiAgICB9KTtcblxuICAgIGNvbnN0IHIgPSBhd2FpdCBjdXN0b21DaGF0RmV0Y2goXCJodHRwczovL2tpbWkubW9vbnNob3QuY24vYXBpL2NoYXRcIiwgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICBib2R5OiByYXcsXG4gICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiXG4gICAgfSk7XG5cbiAgICBpZihyLmVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuc2VuZChbci5lcnJvciwgbnVsbF0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByLnJlc3BvbnNlPy5qc29uKCk7XG4gICAgICAgIHJlcy5zZW5kKFtudWxsLCByZXN1bHRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zZW5kKFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSwgbnVsbF0pO1xuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiIsImltcG9ydCB7Q2hhdEVycm9yLCBFcnJvckNvZGV9IGZyb20gXCJ+dXRpbHMvZXJyb3JzXCI7XG5pbXBvcnQge0NvbnZlcnNhdGlvblJlc3BvbnNlLCBSZXNwb25zZU1lc3NhZ2VUeXBlfSBmcm9tIFwifmxpYnMvb3Blbi1haS9vcGVuLWFpLWludGVyZmFjZVwiO1xuaW1wb3J0IHtzZW5kVG9CYWNrZ3JvdW5kfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHtTdG9yYWdlfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIjtcbmltcG9ydCB7XG4gICAgYXBwZW5kUGFyYW1Ub1VybCxcbiAgICBjcmVhdGVVdWlkLFxuICAgIElTX09QRU5fSU5fQ0hBVF9BVVRIX1dJTkRPVyxcbiAgICBNRVNTQUdFX0FDVElPTl9DSEFUX1BST1ZJREVSX0FVVEhfU1VDQ0VTUyxcbiAgICBXSU5ET1dfRk9SX1JFTU9WRV9TVE9SQUdFX0tFWVxufSBmcm9tIFwifnV0aWxzXCI7XG5pbXBvcnQge1xuICAgIHR5cGUgQm90Q29tcGxldGlvblBhcmFtcyxcbiAgICB0eXBlIEJvdENvbnN0cnVjdG9yUGFyYW1zLFxuICAgIHR5cGUgQ29udmVyc2F0aW9uUmVzcG9uc2VDYixcbiAgICB0eXBlIElCb3Rcbn0gZnJvbSBcIn5saWJzL2NoYXRib3QvSUJvdFwiO1xuaW1wb3J0IHtCb3RCYXNlfSBmcm9tIFwifmxpYnMvY2hhdGJvdC9Cb3RCYXNlXCI7XG5pbXBvcnQgS2ltaVNlc3Npb25TaW5nbGV0b24gZnJvbSBcIn5saWJzL2NoYXRib3Qva2ltaS9raW1pU2Vzc2lvblwiO1xuaW1wb3J0IHtTaW1wbGVCb3RNZXNzYWdlfSBmcm9tIFwifmxpYnMvY2hhdGJvdC9Cb3RTZXNzaW9uQmFzZVwiO1xuaW1wb3J0IEljb25LaW1pIGZyb20gXCJkYXRhLWJhc2U2NDp+YXNzZXRzL2tpbWkucG5nXCI7XG5cbmltcG9ydCB7S2ltaUZpbGVTaW5nbGV0b24sIEtpbWlTdXBwb3J0ZWRNaW1lVHlwZXN9IGZyb20gXCJ+bGlicy9jaGF0Ym90L2tpbWkvZmlsZUluc3RhbmNlXCI7XG5pbXBvcnQge2NoZWNrTW9kZWxTdXBwb3J0VXBsb2FkUERGfSBmcm9tIFwifmxpYnMvY2hhdGJvdC91dGlsc1wiO1xuXG5jb25zdCBTVE9SQUdFX1JFRlJFU0hfVE9LRU5fS0VZID0gXCJraW1pX3JlZnJlc2hfdG9rZW5cIjtcbmNvbnN0IFNUT1JBR0VfQUNDRVNTX1RPS0VOX0tFWSA9IFwia2ltaV9hY2Nlc3NfdG9rZW5cIjtcblxuaW50ZXJmYWNlIEtpbWlDcmVhdGVDb252ZXJzYXRpb24ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRodW1iX3N0YXR1czoge1xuICAgICAgICBpc190aHVtYl91cDogYm9vbGVhbjtcbiAgICAgICAgaXNfdGh1bWJfZG93bjogYm9vbGVhbjtcbiAgICB9O1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgICBpc19leGFtcGxlOiBib29sZWFuO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEtpbWlCb3QgZXh0ZW5kcyBCb3RCYXNlIGltcGxlbWVudHMgSUJvdCB7XG4gICAgcHJpdmF0ZSBmaWxlSW5zdGFuY2U6IEtpbWlGaWxlU2luZ2xldG9uO1xuICAgIHN0YXRpYyBib3ROYW1lID0gJ21vb25zaG90LXYxJztcbiAgICBzdGF0aWMgbG9nb1NyYyA9IEljb25LaW1pO1xuICAgIHN0YXRpYyBsb2dpblVybCA9ICdodHRwczovL2tpbWkubW9vbnNob3QuY24nO1xuICAgIHN0YXRpYyBtYXhUb2tlbkxpbWl0ID0gNDAwICogMTAwMDtcbiAgICBzdGF0aWMgZ2V0IHN1cHBvcnRVcGxvYWRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrTW9kZWxTdXBwb3J0VXBsb2FkUERGKEtpbWlTdXBwb3J0ZWRNaW1lVHlwZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHN1cHBvcnRVcGxvYWRQREYoKSB7XG4gICAgICAgIHJldHVybiBjaGVja01vZGVsU3VwcG9ydFVwbG9hZFBERihLaW1pU3VwcG9ydGVkTWltZVR5cGVzKTtcbiAgICB9XG4gICAgc3RhdGljIGRlc2MgPSAnU3VpdGFibGUgZm9yIG9ubGluZSB0ZXh0IGdlbmVyYXRpb24sIGNoYXRib3RzLCB0ZXh0IHN1bW1hcml6YXRpb24sIGFuZCBjcmVhdGl2ZSB3cml0aW5nLic7XG4gICAgYm90U2Vzc2lvbjogS2ltaVNlc3Npb25TaW5nbGV0b247XG4gICAgZmlsZVJlZnM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBCb3RDb25zdHJ1Y3RvclBhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgICAgICB0aGlzLmJvdFNlc3Npb24gPSBLaW1pU2Vzc2lvblNpbmdsZXRvbi5nZXRJbnN0YW5jZShwYXJhbXMuZ2xvYmFsQ29udmVyc2F0aW9uSWQpO1xuICAgICAgICB0aGlzLmZpbGVJbnN0YW5jZSA9IEtpbWlGaWxlU2luZ2xldG9uLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIEFVVEhfV0lORE9XX0tFWSA9ICdrYXdrJztcblxuICAgIHN0YXRpYyBhc3luYyBnZXRBY2Nlc3NUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBzdG9yYWdlLmdldChTVE9SQUdFX0FDQ0VTU19UT0tFTl9LRVkpID8/IFwiXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRBY2Nlc3NUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgICAgICB2b2lkIHN0b3JhZ2Uuc2V0KFNUT1JBR0VfQUNDRVNTX1RPS0VOX0tFWSwgdG9rZW4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRSZWZyZXNoVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgdm9pZCBzdG9yYWdlLnNldChTVE9SQUdFX1JFRlJFU0hfVE9LRU5fS0VZLCB0b2tlbik7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldFJlZnJlc2hUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBzdG9yYWdlLmdldChTVE9SQUdFX1JFRlJFU0hfVE9LRU5fS0VZKSA/PyBcIlwiKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhc3luYyBjaGVja0lzTG9naW4oKTogUHJvbWlzZTxbQ2hhdEVycm9yIHwgbnVsbCwgYm9vbGVhbl0+IHtcbiAgICAgICAgY29uc3QgW2VycjFdID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XG4gICAgICAgICAgICBuYW1lOiBcImtpbWkvcHJvbXB0LXNuaXBwZXQtaW5zdGFuY2VcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNvZGUgPT09IEVycm9yQ29kZS5VTkFVVEhPUklaRUQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXJyMl0gPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJraW1pL3JlZnJlc2gtYWNjZXNzLXRva2VuXCIsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW2VycjIsIGZhbHNlXTtcbiAgICAgICAgICAgIH0ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbZXJyMSwgZmFsc2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtudWxsLCB0cnVlXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgY2hlY2tNb2RlbENhblVzZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgWywgY2FuVXNlXSA9IGF3YWl0IHRoaXMuY2hlY2tJc0xvZ2luKCk7XG4gICAgICAgIHJldHVybiBjYW5Vc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcGxldGlvbih7cHJvbXB0LCByaWQsIGNiLCBmaWxlUmVmLCBmaWxlfTogQm90Q29tcGxldGlvblBhcmFtcykge1xuICAgICAgICBjb25zdCBbZXJyb3JdID0gYXdhaXQgdGhpcy5jYWxsUHJvbXB0U25pcHBldEluc3RhbmNlKCk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gRXJyb3JDb2RlLlVOQVVUSE9SSVpFRCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtlcnIsIHJlc10gPSBhd2FpdCB0aGlzLnRva2VuUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlblJlZnJlc2gnLCBlcnIsIHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdHlwZTogUmVzcG9uc2VNZXNzYWdlVHlwZS5FUlJPUlxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdHlwZTogUmVzcG9uc2VNZXNzYWdlVHlwZS5FUlJPUlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLnRyYWNlKCdraW1pIGNvbXBsZXRpb24nLCB7cHJvbXB0LCByaWQsIGNiLCBmaWxlUmVmLCBmaWxlfSk7XG5cbiAgICAgICAgaWYoZmlsZVJlZikge1xuICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gdGhpcy5maWxlSW5zdGFuY2UuZ2V0UmVmKGZpbGVSZWYpO1xuXG4gICAgICAgICAgICBpZighcmVmT2JqIHx8IHJlZk9iai5lcnIpIHtcbiAgICAgICAgICAgICAgICBpZihmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JlZiA9IGF3YWl0IHRoaXMudXBsb2FkRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhlTmV3UmVmID0gdGhpcy5maWxlSW5zdGFuY2UuZ2V0UmVmKG5ld1JlZik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoZU5ld1JlZiB8fCB0aGVOZXdSZWYuZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0aGVOZXdSZWY/LmVyciB8fCBuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX3R5cGU6IFJlc3BvbnNlTWVzc2FnZVR5cGUuRVJST1JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZVJlZnMgPSBbdGhlTmV3UmVmIS5yZWYhLmlkXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHJlZk9iaj8uZXJyIHx8IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLlVOS05PV05fRVJST1IpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkVSUk9SXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVJlZnMgPSBbcmVmT2JqIS5yZWYhLmlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVmT2JqID0gdGhpcy5maWxlSW5zdGFuY2UuZ2V0UmVmQnlGaWxlKGZpbGUpO1xuXG4gICAgICAgICAgICAgICAgaWYoIXJlZk9iaikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdSZWYgPSBhd2FpdCB0aGlzLnVwbG9hZEZpbGUoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZk9iaiA9IHRoaXMuZmlsZUluc3RhbmNlLmdldFJlZihuZXdSZWYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCFyZWZPYmogfHwgcmVmT2JqLmVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHJlZk9iaj8uZXJyIHx8IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLlVOS05PV05fRVJST1IpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkVSUk9SXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVSZWZzID0gW3JlZk9iaiEucmVmIS5pZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYm90U2Vzc2lvbi5zZXNzaW9uLmJvdENvbnZlcnNhdGlvbklkKSB7XG4gICAgICAgICAgICBjb25zdCBbZXJyb3IsIGtpbWlDb252ZXJzYXRpb25dID0gYXdhaXQgdGhpcy5jcmVhdGVDb252ZXJzYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVDb252ZXJzYXRpb24nLCBlcnJvciwga2ltaUNvbnZlcnNhdGlvbik7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdHlwZTogUmVzcG9uc2VNZXNzYWdlVHlwZS5FUlJPUlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYm90U2Vzc2lvbi5zZXNzaW9uLnNldEJvdENvbnZlcnNhdGlvbklkKGtpbWlDb252ZXJzYXRpb24hLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZvaWQgdGhpcy5zdHJlYW1DaGF0KHByb21wdCwgcmlkLCBjYik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0VG9TdXBlcnNjcmlwdChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL+OAkChcXGQrKeOAkS9nLCAnW14kMV5dWyQxXScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmVmRG9jc01hcmtkb3duKHJlZnM6IGFueVtdLCBsaW5rczogc3RyaW5nW10sIHRhZ3M6IHN0cmluZ1tdKToge1xuICAgICAgICBsaW5rczogc3RyaW5nW10sXG4gICAgICAgIHRhZ3M6IHN0cmluZ1tdXG4gICAgfSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2ZcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZWZzW2ldO1xuICAgICAgICAgICAgICAgIGxpbmtzLnB1c2goYFske2l0ZW0uaW5kZXh9XTogJHtpdGVtLnVybH1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGl0ZW0udXJsKTtcbiAgICAgICAgICAgICAgICB0YWdzLnB1c2goYFske2l0ZW0uaW5kZXh9LiAke3VybD8ub3JpZ2luID8/IFwiXCJ9XSgke2l0ZW0udXJsfSlgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rcywgdGFnc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rcyxcbiAgICAgICAgICAgICAgICB0YWdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzdHJlYW1DaGF0KHByb21wdDogc3RyaW5nLCByaWQ6IHN0cmluZywgY2I6IENvbnZlcnNhdGlvblJlc3BvbnNlQ2IpIHtcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uSWQgPSB0aGlzLmJvdFNlc3Npb24uc2Vzc2lvbi5ib3RDb252ZXJzYXRpb25JZDtcblxuICAgICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAvLyBteUhlYWRlcnMuYXBwZW5kKFwiYXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBleUpoYkdjaU9pSklVelV4TWlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUoxYzJWeUxXTmxiblJsY2lJc0ltVjRjQ0k2TVRjeE16TXpNemt4TkN3aWFXRjBJam94TnpFek16TXpNREUwTENKcWRHa2lPaUpqYjJadE5qVm9hM0Z4TkhSMGNtb3piR293WnlJc0luUjVjQ0k2SW1GalkyVnpjeUlzSW5OMVlpSTZJbU52TXprek9YVmpjRGRtWTNRd2RtRTBiMk5uSWl3aWMzQmhZMlZmYVdRaU9pSmpiek01TXpsMVkzQTNabU4wTUhaaE5HOWpNQ0lzSW1GaWMzUnlZV04wWDNWelpYSmZhV1FpT2lKamJ6TTVNemwxWTNBM1ptTjBNSFpoTkc5aVp5SjkuNFN5aUN6VWhrR1h4aElmdUR3ZFF4Y0dTVXNiUHFEQWo3aEFxV1otbS1zbkhhSmxSdlZzdWREdjJKc1pZaThHbTZpQUtJRUE4c2VseG5KSzVXTGJjaVFcIik7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwib3JpZ2luXCIsIFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuXCIpO1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwici10aW1lem9uZVwiLCBcIkFzaWEvU2hhbmdoYWlcIik7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJyZWZlcmVyXCIsIFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2NoYXQvXCIgKyBjb252ZXJzYXRpb25JZCk7XG4gICAgICAgIC8vIG15SGVhZGVycy5hcHBlbmQoXCJ4LXRyYWZmaWMtaWRcIiwgXCJjbzM5Mzl1Y3A3ZmN0MHZhNG9jZ1wiKTtcblxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IEtpbWlCb3QuZ2V0QWNjZXNzVG9rZW4oKTtcblxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIFwibWVzc2FnZXNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJyb2xlXCI6IFwidXNlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogcHJvbXB0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicmVmc1wiOiBbXSBhcyBzdHJpbmdbXSxcbiAgICAgICAgICAgIFwidXNlX3NlYXJjaFwiOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYodGhpcy5maWxlUmVmcyAmJiB0aGlzLmZpbGVSZWZzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyYW1zLnJlZnMgPSB0aGlzLmZpbGVSZWZzO1xuICAgICAgICAgICAgcGFyYW1zLnVzZV9zZWFyY2ggPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICAgICAgZmV0Y2goYGh0dHBzOi8va2ltaS5tb29uc2hvdC5jbi9hcGkvY2hhdC8ke2NvbnZlcnNhdGlvbklkfS9jb21wbGV0aW9uL3N0cmVhbT8tLWtrbT0xYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVzcG9uc2UuYm9keTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0/LmdldFJlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBjYihcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb252ZXJzYXRpb25SZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX3R5cGU6IFJlc3BvbnNlTWVzc2FnZVR5cGUuRVJST1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLkNPTlZFUlNBVElPTl9MSU1JVClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIC8vIGxldCBncm91cElkID0gXCJcIlxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXRUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dEFwcGVuZGl4ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVmTGlua3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHJlZlRhZ3M6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWFkU3RyZWFtKCkge1xuICAgICAgICAgICAgICAgICAgICByZWFkZXI/LnJlYWQoKS50aGVuKGFzeW5jICh7ZG9uZSwgdmFsdWV9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5jID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBlbmMuZGVjb2RlKHZhbHVlLmJ1ZmZlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBzdHIuc3BsaXQoXCJcXG5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBsaW5lLnJlcGxhY2UoXCJkYXRhOiBcIiwgXCJcIikucmVwbGFjZShcIlxcblwiLCBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYXcgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtldmVudCwgIHJlZl9kb2NzLCB0ZXh0LCBpZCB9ID0gSlNPTi5wYXJzZShyYXcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgPT09IFwiY21wbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkID0gaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JvdXBJZCA9IGdyb3VwX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0VGV4dCArPSB0ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX3R5cGU6IFJlc3BvbnNlTWVzc2FnZVR5cGUuR0VORVJBVElORyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90ZXh0OiBfdGhpcy5jb252ZXJ0VG9TdXBlcnNjcmlwdChvdXRwdXRUZXh0KSArIHRleHRBcHBlbmRpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJwaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IFwiYWxsX2RvbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBfdGhpcy5jb252ZXJ0VG9TdXBlcnNjcmlwdChvdXRwdXRUZXh0KSArIHRleHRBcHBlbmRpeDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKHJpZCwgbmV3IENvbnZlcnNhdGlvblJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkRPTkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdGV4dDogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYm90U2Vzc2lvbi5zZXNzaW9uLmFkZE1lc3NhZ2UobmV3IFNpbXBsZUJvdE1lc3NhZ2UodGV4dCwgbWVzc2FnZUlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcInJlZl9kb2NzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmX2RvY3MgJiYgcmVmX2RvY3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzOiBfbGlua3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBfdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gX3RoaXMuZ2V0UmVmRG9jc01hcmtkb3duKHJlZl9kb2NzLCByZWZMaW5rcywgcmVmVGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkxpbmtzID0gX2xpbmtzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZUYWdzID0gX3RhZ3M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IEFycmF5LmZyb20obmV3IFNldChyZWZUYWdzKSkuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYS5zbGljZSgxKSkgLSBwYXJzZUludChiLnNsaWNlKDEpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gQXJyYXkuZnJvbShuZXcgU2V0KHJlZkxpbmtzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFwcGVuZGl4ID0gXCJcXG5cXG5cIiArIGxpbmtzLmpvaW4oXCJcXG5cIikgKyBcIlxcbkxlYXJuIG1vcmU6IFwiICsgdGFncy5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihyaWQsIG5ldyBDb252ZXJzYXRpb25SZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdHlwZTogUmVzcG9uc2VNZXNzYWdlVHlwZS5FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLk1PREVMX0lOVEVSTkFMX0VSUk9SLClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFN0cmVhbSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWFkU3RyZWFtKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2IocmlkLCBuZXcgQ29udmVyc2F0aW9uUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlX3R5cGU6IFJlc3BvbnNlTWVzc2FnZVR5cGUuRVJST1IsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnRBdXRoKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByYW5kb21LZXkgPSAnX193aW5kb3dfa2V5XycgKyBNYXRoLnJhbmRvbSgpICogMTAwMDtcbiAgICAgICAgY29uc3Qga2ltaUF1dGhWYWx1ZSA9IGNyZWF0ZVV1aWQoKTtcblxuICAgICAgICBjb25zdCB1cmwgPSBhcHBlbmRQYXJhbVRvVXJsKGFwcGVuZFBhcmFtVG9VcmwoXG4gICAgICAgICAgICBhcHBlbmRQYXJhbVRvVXJsKEtpbWlCb3QubG9naW5VcmwsIElTX09QRU5fSU5fQ0hBVF9BVVRIX1dJTkRPVywgJzEnKSxcbiAgICAgICAgICAgIFdJTkRPV19GT1JfUkVNT1ZFX1NUT1JBR0VfS0VZLCByYW5kb21LZXlcbiAgICAgICAgKSwgS2ltaUJvdC5BVVRIX1dJTkRPV19LRVksIGtpbWlBdXRoVmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQoe1xuICAgICAgICAgICAgbmFtZTogXCJvcGVuLW5ldy13aW5kb3dcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2MCxcbiAgICAgICAgICAgICAgICBmb2N1c2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNjcmVlbldpZHRoOiB3aW5kb3cuc2NyZWVuLndpZHRoLFxuICAgICAgICAgICAgICAgIHNjcmVlbkhlaWdodDogd2luZG93LnNjcmVlbi5oZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnNldChyYW5kb21LZXksIHJlcyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbiAobWVzc2FnZTogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBNRVNTQUdFX0FDVElPTl9DSEFUX1BST1ZJREVSX0FVVEhfU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5hdXRoS2V5ID09PSBraW1pQXV0aFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZUNvbnZlcnNhdGlvbigpOiBQcm9taXNlPFtDaGF0RXJyb3I/LCBLaW1pQ3JlYXRlQ29udmVyc2F0aW9uP10+IHtcbiAgICAgICAgY29uc3QgW2VyciwgcmVzXSA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQoe1xuICAgICAgICAgICAgbmFtZTogXCJraW1pL2NyZWF0ZS1jb252ZXJzYXRpb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFtlcnIsIHJlc107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjYWxsUHJvbXB0U25pcHBldEluc3RhbmNlKCk6IFByb21pc2U8W0NoYXRFcnJvcj8sIGFueT9dPiB7XG4gICAgICAgIGNvbnN0IFtlcnIsIHJlc10gPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kKHtcbiAgICAgICAgICAgIG5hbWU6IFwia2ltaS9wcm9tcHQtc25pcHBldC1pbnN0YW5jZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gW2VyciwgcmVzXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHRva2VuUmVmcmVzaCgpOiBQcm9taXNlPFtDaGF0RXJyb3I/LCBhbnk/XT4ge1xuICAgICAgICBjb25zdCBbZXJyLCByZXNdID0gYXdhaXQgc2VuZFRvQmFja2dyb3VuZCh7XG4gICAgICAgICAgICBuYW1lOiBcImtpbWkvcmVmcmVzaC1hY2Nlc3MtdG9rZW5cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFtlcnIsIHJlc107XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NfdG9rZW46IHN0cmluZykge1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGUgc2V0UmVmcmVzaFRva2VuKHJlZnJlc2hfdG9rZW46IHN0cmluZykge1xuICAgIC8vIH1cblxuICAgIHN0YXJ0Q2FwdGNoYSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgdXBsb2FkRmlsZShmaWxlOiBGaWxlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZUluc3RhbmNlLnVwbG9hZEZpbGUoZmlsZSwgdGhpcy5zdXBwb3J0ZWRVcGxvYWRUeXBlcyk7XG4gICAgfVxuXG4gICAgZ2V0IHN1cHBvcnRlZFVwbG9hZFR5cGVzKCkge1xuICAgICAgICByZXR1cm4gS2ltaVN1cHBvcnRlZE1pbWVUeXBlcztcbiAgICB9XG5cbiAgICBnZXRCb3ROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBLaW1pQm90LmxvZ29TcmM7XG4gICAgfVxuXG4gICAgZ2V0TG9naW5VcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEtpbWlCb3QubG9naW5Vcmw7XG4gICAgfVxuXG4gICAgZ2V0TG9nb1NyYygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gS2ltaUJvdC5sb2dvU3JjO1xuICAgIH1cblxuICAgIGdldFJlcXVpcmVMb2dpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEtpbWlCb3QucmVxdWlyZUxvZ2luO1xuICAgIH1cblxuICAgIGdldFN1cHBvcnRVcGxvYWRJbWFnZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEtpbWlCb3Quc3VwcG9ydFVwbG9hZEltYWdlO1xuICAgIH1cblxuICAgIGdldFN1cHBvcnRVcGxvYWRQREYoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBLaW1pQm90LnN1cHBvcnRVcGxvYWRQREY7XG4gICAgfVxuXG4gICAgZ2V0UGFpZE1vZGVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gS2ltaUJvdC5wYWlkTW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0TWF4VG9rZW5MaW1pdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gS2ltaUJvdC5tYXhUb2tlbkxpbWl0O1xuICAgIH1cblxuICAgIGdldE5ld01vZGVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gS2ltaUJvdC5uZXdNb2RlbDtcbiAgICB9XG59XG4iLCJpbXBvcnR7bmFub2lkIGFzIGJ9ZnJvbVwibmFub2lkXCI7dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyPy50YWJzfHxnbG9iYWxUaGlzLmNocm9tZT8udGFicyxkPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZTtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gcnVudGltZSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBlfSxpPSgpPT57aWYoIWwpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHRhYnMgQVBJIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIGx9LG09YXN5bmMoKT0+e2xldCBlPWkoKSxbYV09YXdhaXQgZS5xdWVyeSh7YWN0aXZlOiEwLGN1cnJlbnRXaW5kb3c6ITB9KTtyZXR1cm4gYX0sZz0oZSxhKT0+IWEuX19pbnRlcm5hbCYmZS5zb3VyY2U9PT1nbG9iYWxUaGlzLndpbmRvdyYmZS5kYXRhLm5hbWU9PT1hLm5hbWUmJihhLnJlbGF5SWQ9PT12b2lkIDB8fGUuZGF0YS5yZWxheUlkPT09YS5yZWxheUlkKTt2YXIgYz0oZSxhLG49Z2xvYmFsVGhpcy53aW5kb3cpPT57bGV0IHI9YXN5bmMgcz0+e2lmKGcocyxlKSYmIXMuZGF0YS5yZWxheWVkKXtsZXQgbz17bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsYm9keTpzLmRhdGEuYm9keX0sdD1hd2FpdCBhPy4obyk7bi5wb3N0TWVzc2FnZSh7bmFtZTplLm5hbWUscmVsYXlJZDplLnJlbGF5SWQsaW5zdGFuY2VJZDpzLmRhdGEuaW5zdGFuY2VJZCxib2R5OnQscmVsYXllZDohMH0se3RhcmdldE9yaWdpbjplLnRhcmdldE9yaWdpbnx8XCIvXCJ9KX19O3JldHVybiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsciksKCk9Pm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixyKX0seT0oZSxhPWdsb2JhbFRoaXMud2luZG93KT0+bmV3IFByb21pc2UoKG4scik9PntsZXQgcz1iKCksbz1uZXcgQWJvcnRDb250cm9sbGVyO2EuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0PT57Zyh0LGUpJiZ0LmRhdGEucmVsYXllZCYmdC5kYXRhLmluc3RhbmNlSWQ9PT1zJiYobih0LmRhdGEuYm9keSksby5hYm9ydCgpKX0se3NpZ25hbDpvLnNpZ25hbH0pLGEucG9zdE1lc3NhZ2Uoey4uLmUsaW5zdGFuY2VJZDpzfSx7dGFyZ2V0T3JpZ2luOmUudGFyZ2V0T3JpZ2lufHxcIi9cIn0pfSk7dmFyIHA9YXN5bmMgZT0+ZCgpLnNlbmRNZXNzYWdlKGUuZXh0ZW5zaW9uSWQ/P251bGwsZSkseD1hc3luYyBlPT57bGV0IGE9dHlwZW9mIGUudGFiSWQ9PVwibnVtYmVyXCI/ZS50YWJJZDooYXdhaXQgbSgpKT8uaWQ7aWYoIWEpdGhyb3cgbmV3IEVycm9yKFwiTm8gYWN0aXZlIHRhYiBmb3VuZCB0byBzZW5kIG1lc3NhZ2UgdG8uXCIpO3JldHVybiBpKCkuc2VuZE1lc3NhZ2UoYSxlKX0saD14LE09ZT0+YyhlLHApLEU9TSx1PXksUz11O2V4cG9ydHtFIGFzIHJlbGF5LE0gYXMgcmVsYXlNZXNzYWdlLGggYXMgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdCxwIGFzIHNlbmRUb0JhY2tncm91bmQsdSBhcyBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXkseCBhcyBzZW5kVG9Db250ZW50U2NyaXB0LFMgYXMgc2VuZFZpYVJlbGF5fTtcbiIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiaW1wb3J0IHkgZnJvbVwicGlmeVwiO3ZhciBsPSgpPT57dHJ5e2xldCBlPShnbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50KS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpfHxbXTtpZihlWzFdPT09XCJDaHJvbWVcIilyZXR1cm4gcGFyc2VJbnQoZVsyXSk8MTAwfHxnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lPy5nZXRNYW5pZmVzdCgpPy5tYW5pZmVzdF92ZXJzaW9uPT09Mn1jYXRjaHtyZXR1cm4hMX1yZXR1cm4hMX07dmFyIG89Y2xhc3N7I2E7I2U7Z2V0IHByaW1hcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jZX0jdDtnZXQgc2Vjb25kYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI3R9I3I7Z2V0IGFyZWEoKXtyZXR1cm4gdGhpcy4jcn1nZXQgaGFzV2ViQXBpKCl7dHJ5e3JldHVybiB0eXBlb2Ygd2luZG93PFwidVwiJiYhIXdpbmRvdy5sb2NhbFN0b3JhZ2V9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fSNzPW5ldyBNYXA7I2k7Z2V0IGNvcGllZEtleVNldCgpe3JldHVybiB0aGlzLiNpfWlzQ29waWVkPWU9PnRoaXMuaGFzV2ViQXBpJiYodGhpcy5hbGxDb3BpZWR8fHRoaXMuY29waWVkS2V5U2V0LmhhcyhlKSk7I249ITE7Z2V0IGFsbENvcGllZCgpe3JldHVybiB0aGlzLiNufWdldEV4dFN0b3JhZ2VBcGk9KCk9Pmdsb2JhbFRoaXMuYnJvd3Nlcj8uc3RvcmFnZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnN0b3JhZ2U7Z2V0IGhhc0V4dGVuc2lvbkFwaSgpe3RyeXtyZXR1cm4hIXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX1pc1dhdGNoU3VwcG9ydGVkPSgpPT50aGlzLmhhc0V4dGVuc2lvbkFwaTtrZXlOYW1lc3BhY2U9XCJcIjtpc1ZhbGlkS2V5PWU9PmUuc3RhcnRzV2l0aCh0aGlzLmtleU5hbWVzcGFjZSk7Z2V0TmFtZXNwYWNlZEtleT1lPT5gJHt0aGlzLmtleU5hbWVzcGFjZX0ke2V9YDtnZXRVbm5hbWVzcGFjZWRLZXk9ZT0+ZS5zbGljZSh0aGlzLmtleU5hbWVzcGFjZS5sZW5ndGgpO2NvbnN0cnVjdG9yKHthcmVhOmU9XCJzeW5jXCIsYWxsQ29waWVkOnQ9ITEsY29waWVkS2V5TGlzdDpzPVtdfT17fSl7dGhpcy5zZXRDb3BpZWRLZXlTZXQocyksdGhpcy4jcj1lLHRoaXMuI249dDt0cnl7dGhpcy5oYXNXZWJBcGkmJih0fHxzLmxlbmd0aD4wKSYmKHRoaXMuI3Q9d2luZG93LmxvY2FsU3RvcmFnZSl9Y2F0Y2h7fXRyeXt0aGlzLmhhc0V4dGVuc2lvbkFwaSYmKHRoaXMuI2E9dGhpcy5nZXRFeHRTdG9yYWdlQXBpKCksbCgpP3RoaXMuI2U9eSh0aGlzLiNhW3RoaXMuYXJlYV0se2V4Y2x1ZGU6W1wiZ2V0Qnl0ZXNJblVzZVwiXSxlcnJvckZpcnN0OiExfSk6dGhpcy4jZT10aGlzLiNhW3RoaXMuYXJlYV0pfWNhdGNoe319c2V0Q29waWVkS2V5U2V0KGUpe3RoaXMuI2k9bmV3IFNldChlKX1yYXdHZXRBbGw9KCk9PnRoaXMuI2U/LmdldCgpO2dldEFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5yYXdHZXRBbGwoKTtyZXR1cm4gT2JqZWN0LmVudHJpZXMoZSkuZmlsdGVyKChbdF0pPT50aGlzLmlzVmFsaWRLZXkodCkpLnJlZHVjZSgodCxbcyxhXSk9Pih0W3RoaXMuZ2V0VW5uYW1lc3BhY2VkS2V5KHMpXT1hLHQpLHt9KX07Y29weT1hc3luYyBlPT57bGV0IHQ9ZT09PXZvaWQgMDtpZighdCYmIXRoaXMuY29waWVkS2V5U2V0LmhhcyhlKXx8IXRoaXMuYWxsQ29waWVkfHwhdGhpcy5oYXNFeHRlbnNpb25BcGkpcmV0dXJuITE7bGV0IHM9dGhpcy5hbGxDb3BpZWQ/YXdhaXQgdGhpcy5yYXdHZXRBbGwoKTphd2FpdCB0aGlzLiNlLmdldCgodD9bLi4udGhpcy5jb3BpZWRLZXlTZXRdOltlXSkubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSkpO2lmKCFzKXJldHVybiExO2xldCBhPSExO2ZvcihsZXQgciBpbiBzKXtsZXQgaT1zW3JdLG49dGhpcy4jdD8uZ2V0SXRlbShyKTt0aGlzLiN0Py5zZXRJdGVtKHIsaSksYXx8PWkhPT1ufXJldHVybiBhfTtyYXdHZXQ9YXN5bmMgZT0+dGhpcy5oYXNFeHRlbnNpb25BcGk/KGF3YWl0IHRoaXMuI2UuZ2V0KGUpKVtlXTp0aGlzLmlzQ29waWVkKGUpP3RoaXMuI3Q/LmdldEl0ZW0oZSk6bnVsbDtyYXdTZXQ9YXN5bmMoZSx0KT0+KHRoaXMuaXNDb3BpZWQoZSkmJnRoaXMuI3Q/LnNldEl0ZW0oZSx0KSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jZS5zZXQoe1tlXTp0fSksbnVsbCk7Y2xlYXI9YXN5bmMoZT0hMSk9PntlJiZ0aGlzLiN0Py5jbGVhcigpLGF3YWl0IHRoaXMuI2UuY2xlYXIoKX07cmF3UmVtb3ZlPWFzeW5jIGU9Pnt0aGlzLmlzQ29waWVkKGUpJiZ0aGlzLiN0Py5yZW1vdmVJdGVtKGUpLHRoaXMuaGFzRXh0ZW5zaW9uQXBpJiZhd2FpdCB0aGlzLiNlLnJlbW92ZShlKX07cmVtb3ZlQWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLnJhd0dldEFsbCgpLHQ9T2JqZWN0LmtleXMoZSk7YXdhaXQgUHJvbWlzZS5hbGwodC5tYXAodGhpcy5yYXdSZW1vdmUpKX07d2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNvKGUpLHR9OyNvPWU9Pntmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLGE9dGhpcy4jcy5nZXQocyk/LmNhbGxiYWNrU2V0fHxuZXcgU2V0O2lmKGEuYWRkKGVbdF0pLGEuc2l6ZT4xKWNvbnRpbnVlO2xldCByPShpLG4pPT57aWYobiE9PXRoaXMuYXJlYXx8IWlbc10pcmV0dXJuO2xldCBoPXRoaXMuI3MuZ2V0KHMpO2lmKCFoKXRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBjb21tcyBkb2VzIG5vdCBleGlzdCBmb3IgbnNLZXk6ICR7c31gKTtQcm9taXNlLmFsbChbdGhpcy5wYXJzZVZhbHVlKGlbc10ubmV3VmFsdWUpLHRoaXMucGFyc2VWYWx1ZShpW3NdLm9sZFZhbHVlKV0pLnRoZW4oKFtwLGRdKT0+e2ZvcihsZXQgbSBvZiBoLmNhbGxiYWNrU2V0KW0oe25ld1ZhbHVlOnAsb2xkVmFsdWU6ZH0sbil9KX07dGhpcy4jYS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIociksdGhpcy4jcy5zZXQocyx7Y2FsbGJhY2tTZXQ6YSxsaXN0ZW5lcjpyfSl9fTt1bndhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jYyhlKSx0fTsjYyhlKXtmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLGE9ZVt0XSxyPXRoaXMuI3MuZ2V0KHMpO3ImJihyLmNhbGxiYWNrU2V0LmRlbGV0ZShhKSxyLmNhbGxiYWNrU2V0LnNpemU9PT0wJiYodGhpcy4jcy5kZWxldGUocyksdGhpcy4jYS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoci5saXN0ZW5lcikpKX19dW53YXRjaEFsbD0oKT0+dGhpcy4jaCgpOyNoKCl7dGhpcy4jcy5mb3JFYWNoKCh7bGlzdGVuZXI6ZX0pPT50aGlzLiNhLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihlKSksdGhpcy4jcy5jbGVhcigpfWFzeW5jIGdldEl0ZW0oZSl7cmV0dXJuIHRoaXMuZ2V0KGUpfWFzeW5jIHNldEl0ZW0oZSx0KXthd2FpdCB0aGlzLnNldChlLHQpfWFzeW5jIHJlbW92ZUl0ZW0oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUpfX0sZz1jbGFzcyBleHRlbmRzIG97Z2V0PWFzeW5jIGU9PntsZXQgdD10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscz1hd2FpdCB0aGlzLnJhd0dldCh0KTtyZXR1cm4gdGhpcy5wYXJzZVZhbHVlKHMpfTtzZXQ9YXN5bmMoZSx0KT0+e2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxhPUpTT04uc3RyaW5naWZ5KHQpO3JldHVybiB0aGlzLnJhd1NldChzLGEpfTtyZW1vdmU9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKTtyZXR1cm4gdGhpcy5yYXdSZW1vdmUodCl9O3NldE5hbWVzcGFjZT1lPT57dGhpcy5rZXlOYW1lc3BhY2U9ZX07cGFyc2VWYWx1ZT1hc3luYyBlPT57dHJ5e2lmKGUhPT12b2lkIDApcmV0dXJuIEpTT04ucGFyc2UoZSl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19fTtleHBvcnR7byBhcyBCYXNlU3RvcmFnZSxnIGFzIFN0b3JhZ2V9O1xuIiwiY29uc3QgcHJvY2Vzc0Z1bmN0aW9uID0gKGZ1bmN0aW9uXywgb3B0aW9ucywgcHJveHksIHVud3JhcHBlZCkgPT4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0Y29uc3QgUCA9IG9wdGlvbnMucHJvbWlzZU1vZHVsZTtcblxuXHRyZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChvcHRpb25zLm11bHRpQXJncykge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKCguLi5yZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHRbMF0pIHtcblx0XHRcdFx0XHRcdHJlamVjdChyZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc2hpZnQoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKHJlc29sdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzID09PSBwcm94eSA/IHVud3JhcHBlZCA6IHRoaXM7XG5cdFx0UmVmbGVjdC5hcHBseShmdW5jdGlvbl8sIHNlbGYsIGFyZ3VtZW50c18pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlmeShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0ge1xuXHRcdGV4Y2x1ZGU6IFsvLisoPzpTeW5jfFN0cmVhbSkkL10sXG5cdFx0ZXJyb3JGaXJzdDogdHJ1ZSxcblx0XHRwcm9taXNlTW9kdWxlOiBQcm9taXNlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3Qgb2JqZWN0VHlwZSA9IHR5cGVvZiBpbnB1dDtcblx0aWYgKCEoaW5wdXQgIT09IG51bGwgJiYgKG9iamVjdFR5cGUgPT09ICdvYmplY3QnIHx8IG9iamVjdFR5cGUgPT09ICdmdW5jdGlvbicpKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgRnVuY3Rpb25cXGAgb3IgXFxgT2JqZWN0XFxgLCBnb3QgXFxgJHtpbnB1dCA9PT0gbnVsbCA/ICdudWxsJyA6IG9iamVjdFR5cGV9XFxgYCk7XG5cdH1cblxuXHRjb25zdCBmaWx0ZXIgPSAodGFyZ2V0LCBrZXkpID0+IHtcblx0XHRsZXQgY2FjaGVkID0gZmlsdGVyQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAoIWNhY2hlZCkge1xuXHRcdFx0Y2FjaGVkID0ge307XG5cdFx0XHRmaWx0ZXJDYWNoZS5zZXQodGFyZ2V0LCBjYWNoZWQpO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgaW4gY2FjaGVkKSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkW2tleV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcpID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0XHRjb25zdCB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duID0gKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlKTtcblx0XHRjb25zdCBpbmNsdWRlZCA9IG9wdGlvbnMuaW5jbHVkZSA/IG9wdGlvbnMuaW5jbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpIDogIW9wdGlvbnMuZXhjbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpO1xuXHRcdGNvbnN0IHNob3VsZEZpbHRlciA9IGluY2x1ZGVkICYmIHdyaXRhYmxlT3JDb25maWd1cmFibGVPd247XG5cdFx0Y2FjaGVkW2tleV0gPSBzaG91bGRGaWx0ZXI7XG5cdFx0cmV0dXJuIHNob3VsZEZpbHRlcjtcblx0fTtcblxuXHRjb25zdCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cblx0Y29uc3QgcHJveHkgPSBuZXcgUHJveHkoaW5wdXQsIHtcblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KGNhY2hlZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBpZmllZCA9IG9wdGlvbnMuZXhjbHVkZU1haW4gPyB0YXJnZXQgOiBwcm9jZXNzRnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdGNhY2hlLnNldCh0YXJnZXQsIHBpZmllZCk7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShwaWZpZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtZXh0ZW5kLW5hdGl2ZS9uby11c2UtZXh0ZW5kLW5hdGl2ZVxuXHRcdFx0aWYgKCFmaWx0ZXIodGFyZ2V0LCBrZXkpIHx8IHByb3BlcnR5ID09PSBGdW5jdGlvbi5wcm90b3R5cGVba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBwaWZpZWQgPSBwcm9jZXNzRnVuY3Rpb24ocHJvcGVydHksIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0XHRjYWNoZS5zZXQocHJvcGVydHksIHBpZmllZCk7XG5cdFx0XHRcdHJldHVybiBwaWZpZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJveHk7XG59XG4iLCJpbXBvcnQgdHlwZSB7Qm90Q29uc3RydWN0b3JQYXJhbXN9IGZyb20gXCJ+bGlicy9jaGF0Ym90L0lCb3RcIjtcbmltcG9ydCB0eXBlIHtDaGF0RXJyb3J9IGZyb20gXCJ+dXRpbHMvZXJyb3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWxlUmVmPFQ+IHtcbiAgICBlcnI6IGFueTtcbiAgICByZWY6IFQgfCBudWxsO1xuICAgIGZpbGU/OiBGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZXJyOiBhbnksIHJlZjogVCB8IG51bGwsIGZpbGU/OiBGaWxlKSB7XG4gICAgICAgIHRoaXMuZXJyID0gZXJyO1xuICAgICAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGVudW0gQm90U3VwcG9ydGVkTWltZVR5cGUge1xuICAgIFBERiA9ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgIFBORyA9ICdpbWFnZS9wbmcnLFxuICAgIEpQRUcgPSAnaW1hZ2UvanBlZycsXG4gICAgSlBHID0gJ2ltYWdlL2pwZycsXG4gICAgR0lGID0gJ2ltYWdlL2dpZicsXG4gICAgVFhUID0gJ3RleHQvcGxhaW4nLFxuICAgIFdFQlAgPSAnaW1hZ2Uvd2VicCcsXG4gICAgQU5ZID0gXCIqXCJcbn1cblxuZXhwb3J0IGNvbnN0IGdldExhYmVsRnJvbU1pbWVUeXBlID0gKG1pbWVUeXBlOiBCb3RTdXBwb3J0ZWRNaW1lVHlwZSkgPT4ge1xuICAgIHN3aXRjaCAobWltZVR5cGUpIHtcbiAgICBjYXNlIEJvdFN1cHBvcnRlZE1pbWVUeXBlLlBERjpcbiAgICAgICAgcmV0dXJuICdQREYnO1xuICAgIGNhc2UgQm90U3VwcG9ydGVkTWltZVR5cGUuUE5HOlxuICAgICAgICByZXR1cm4gJ1BORyc7XG4gICAgY2FzZSBCb3RTdXBwb3J0ZWRNaW1lVHlwZS5KUEVHOlxuICAgIGNhc2UgQm90U3VwcG9ydGVkTWltZVR5cGUuSlBHOlxuICAgICAgICByZXR1cm4gJ0pQRyc7XG4gICAgY2FzZSBCb3RTdXBwb3J0ZWRNaW1lVHlwZS5UWFQ6XG4gICAgICAgIHJldHVybiAnVFhUJztcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvdEZpbGVJbnN0YW5jZTxUPiB7XG4gICAgcmVmczogTWFwPHN0cmluZywgRmlsZVJlZjxUPj5cbiAgICB1cGxvYWRGaWxlOiAoZmlsZTogRmlsZSwgc3VwcG9ydGVkVHlwZXM6IEJvdFN1cHBvcnRlZE1pbWVUeXBlW10sIGNvbnZlcnNhdGlvbklkPzogc3RyaW5nLCBpbml0RXJyPzogQ2hhdEVycm9yKSA9PiBQcm9taXNlPHN0cmluZz5cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJvdEJhc2Uge1xuICAgIHN0YXRpYyBib3ROYW1lID0gJ0JvdEJhc2UnO1xuICAgIHN0YXRpYyBsb2dvU3JjID0gJ2xvZ28ucG5nJztcbiAgICBzdGF0aWMgbG9naW5VcmwgPSAnJztcbiAgICBzdGF0aWMgcmVxdWlyZUxvZ2luID0gdHJ1ZTtcbiAgICBzdGF0aWMgc3VwcG9ydFVwbG9hZFBERiA9IGZhbHNlO1xuICAgIHN0YXRpYyBzdXBwb3J0VXBsb2FkSW1hZ2UgPSBmYWxzZTtcbiAgICBzdGF0aWMgZGVzYyA9IFwiXCI7XG4gICAgc3RhdGljIG1heFRva2VuTGltaXQgPSAyMDQ4O1xuICAgIHN0YXRpYyBwYWlkTW9kZWwgPSBmYWxzZTtcbiAgICBzdGF0aWMgbmV3TW9kZWwgPSBmYWxzZTtcbiAgICBjb252ZXJzYXRpb25JZDogQm90Q29uc3RydWN0b3JQYXJhbXNbJ2dsb2JhbENvbnZlcnNhdGlvbklkJ107XG4gICAgcGFyZW50TWVzc2FnZUlkOiBCb3RDb25zdHJ1Y3RvclBhcmFtc1sncGFyZW50TWVzc2FnZUlkJ107XG5cbiAgICBzdGF0aWMgY2hlY2tJc0xvZ2luKCk6IFByb21pc2U8W0NoYXRFcnJvciB8IG51bGwsIGJvb2xlYW5dPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW251bGwsIGZhbHNlXSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrTW9kZWxDYW5Vc2UoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHBhcmFtczogQm90Q29uc3RydWN0b3JQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25JZCA9IHBhcmFtcy5nbG9iYWxDb252ZXJzYXRpb25JZDtcbiAgICAgICAgdGhpcy5wYXJlbnRNZXNzYWdlSWQgPSBwYXJhbXMucGFyZW50TWVzc2FnZUlkO1xuICAgIH1cbn1cbiIsImltcG9ydCAge0JvdFNlc3Npb259IGZyb20gXCJ+bGlicy9jaGF0Ym90L0JvdFNlc3Npb25CYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWlTZXNzaW9uU2luZ2xldG9uIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogS2ltaVNlc3Npb25TaW5nbGV0b24gfCBudWxsO1xuICAgIHN0YXRpYyBnbG9iYWxDb252ZXJzYXRpb25JZDogc3RyaW5nO1xuICAgIHNlc3Npb246IEJvdFNlc3Npb247XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBuZXcgQm90U2Vzc2lvbihLaW1pU2Vzc2lvblNpbmdsZXRvbi5nbG9iYWxDb252ZXJzYXRpb25JZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlc3Ryb3koKSB7XG4gICAgICAgIEtpbWlTZXNzaW9uU2luZ2xldG9uLmdsb2JhbENvbnZlcnNhdGlvbklkID0gXCJcIjtcbiAgICAgICAgS2ltaVNlc3Npb25TaW5nbGV0b24uaW5zdGFuY2UgPSBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShnbG9iYWxDb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChnbG9iYWxDb252ZXJzYXRpb25JZCAhPT0gS2ltaVNlc3Npb25TaW5nbGV0b24uZ2xvYmFsQ29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgICAgIEtpbWlTZXNzaW9uU2luZ2xldG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEtpbWlTZXNzaW9uU2luZ2xldG9uLmdsb2JhbENvbnZlcnNhdGlvbklkID0gZ2xvYmFsQ29udmVyc2F0aW9uSWQ7XG5cbiAgICAgICAgaWYgKCFLaW1pU2Vzc2lvblNpbmdsZXRvbi5pbnN0YW5jZSkge1xuICAgICAgICAgICAgS2ltaVNlc3Npb25TaW5nbGV0b24uaW5zdGFuY2UgPSBuZXcgS2ltaVNlc3Npb25TaW5nbGV0b24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBLaW1pU2Vzc2lvblNpbmdsZXRvbi5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUJvdE1lc3NhZ2Uge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJvdFNlc3Npb25TaW5nbGV0b24ge1xuICAgIGJvdENvbnZlcnNhdGlvbklkOiBzdHJpbmc7XG4gICAgbWVzc2FnZXM6IFNpbXBsZUJvdE1lc3NhZ2VbXTtcblxuICAgIGFkZE1lc3NhZ2UobWVzc2FnZTogU2ltcGxlQm90TWVzc2FnZSk6IHZvaWQ7XG5cbiAgICBnZXRCb3RDb252ZXJzYXRpb25JZCgpOiBzdHJpbmc7XG5cbiAgICBzZXRCb3RDb252ZXJzYXRpb25JZChjb252ZXJzYXRpb25JZDogc3RyaW5nKTogdm9pZDtcblxuICAgIGdldFBhcmVudE1lc3NhZ2VJZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBCb3RTZXNzaW9uIGltcGxlbWVudHMgSUJvdFNlc3Npb25TaW5nbGV0b24ge1xuICAgIGJvdENvbnZlcnNhdGlvbklkOiBzdHJpbmc7XG4gICAgZ2xvYmFsQ29udmVyc2F0aW9uSWQ6IHN0cmluZztcbiAgICBtZXNzYWdlczogU2ltcGxlQm90TWVzc2FnZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihnbG9iYWxDb252ZXJzYXRpb25JZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsQ29udmVyc2F0aW9uSWQgPSBnbG9iYWxDb252ZXJzYXRpb25JZDtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgZGVzdHJveSgpIHtcbiAgICAvLyAgICAgQm90U2Vzc2lvblNpbmdsZXRvbi5nbG9iYWxDb252ZXJzYXRpb25JZCA9IHVuZGVmaW5lZFxuICAgIC8vICAgICBCb3RTZXNzaW9uU2luZ2xldG9uLmluc3RhbmNlID0gbnVsbFxuICAgIC8vIH1cblxuICAgIGFkZE1lc3NhZ2UobWVzc2FnZTogU2ltcGxlQm90TWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZ2V0Qm90Q29udmVyc2F0aW9uSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdENvbnZlcnNhdGlvbklkO1xuICAgIH1cblxuICAgIHNldEJvdENvbnZlcnNhdGlvbklkKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ib3RDb252ZXJzYXRpb25JZCA9IGNvbnZlcnNhdGlvbklkO1xuICAgIH1cblxuICAgIGdldFBhcmVudE1lc3NhZ2VJZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm1lc3NhZ2VzXCIsIHRoaXMubWVzc2FnZXMpO1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDFdLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGdldEluc3RhbmNlKGdsb2JhbENvbnZlcnNhdGlvbklkOiBzdHJpbmcpOiBCb3RTZXNzaW9uU2luZ2xldG9uIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJnZXRJbnN0YW5jZSBCb3RTZXNzaW9uU2luZ2xldG9uXCIsIGdsb2JhbENvbnZlcnNhdGlvbklkLCBCb3RTZXNzaW9uU2luZ2xldG9uLmdsb2JhbENvbnZlcnNhdGlvbklkLCBCb3RTZXNzaW9uU2luZ2xldG9uLmluc3RhbmNlPy5ib3RDb252ZXJzYXRpb25JZClcbiAgICAvLyAgICAgaWYgKGdsb2JhbENvbnZlcnNhdGlvbklkICE9PSBCb3RTZXNzaW9uU2luZ2xldG9uLmdsb2JhbENvbnZlcnNhdGlvbklkKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgLy8gICAgICAgICBCb3RTZXNzaW9uU2luZ2xldG9uLmRlc3Ryb3koKVxuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKCFCb3RTZXNzaW9uU2luZ2xldG9uLmluc3RhbmNlKSB7XG4gICAgLy8gICAgICAgICBCb3RTZXNzaW9uU2luZ2xldG9uLmluc3RhbmNlID0gbmV3IEJvdFNlc3Npb25TaW5nbGV0b24oKVxuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgQm90U2Vzc2lvblNpbmdsZXRvbi5nbG9iYWxDb252ZXJzYXRpb25JZCA9IGdsb2JhbENvbnZlcnNhdGlvbklkXG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIEJvdFNlc3Npb25TaW5nbGV0b24uaW5zdGFuY2VcbiAgICAvLyB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiYWMzMmI0YjVhYTFlZGU3NlwiOyIsImltcG9ydCB7dHlwZSBCb3RGaWxlSW5zdGFuY2UsIEJvdFN1cHBvcnRlZE1pbWVUeXBlLCBGaWxlUmVmfSBmcm9tIFwifmxpYnMvY2hhdGJvdC9Cb3RCYXNlXCI7XG5pbXBvcnQge0NoYXRFcnJvciwgRXJyb3JDb2RlfSBmcm9tIFwifnV0aWxzL2Vycm9yc1wiO1xuaW1wb3J0IHtzZW5kVG9CYWNrZ3JvdW5kfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHtjdXN0b21DaGF0RmV0Y2h9IGZyb20gXCJ+dXRpbHMvY3VzdG9tLWZldGNoLWZvci1jaGF0XCI7XG5cbmltcG9ydCB7Y3JlYXRlVXVpZH0gZnJvbSBcIn51dGlsc1wiO1xuaW1wb3J0IHtLaW1pQm90fSBmcm9tIFwifmxpYnMvY2hhdGJvdC9raW1pL2luZGV4XCI7XG5cbmludGVyZmFjZSBGaWxlSW5mbyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGNvbnRlbnRfdHlwZTogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICB0b2tlbl9zaXplOiBudW1iZXI7XG4gICAgZmFpbGVkX3JlYXNvbj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEZpbGVQcm9jZXNzUmVzIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIGZpbGVfaW5mbzogRmlsZUluZm87XG4gICAgaWQ6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIExpbmtGaWxlUmVzcG9uc2Uge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBhcmVudF9wYXRoOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBwcmVzaWduZWRfdXJsOiBzdHJpbmc7XG4gICAgdGV4dF9wcmVzaWduZWRfdXJsOiBzdHJpbmc7XG4gICAgdXBsb2FkZWRfYXQ6IHN0cmluZzsgLy8gQXNzdW1pbmcgdGhlIGRhdGUgaXMgaW4gSVNPIDg2MDEgZm9ybWF0XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nOyAvLyBBc3N1bWluZyB0aGUgZGF0ZSBpcyBpbiBhIHNwZWNpZmljIGZvcm1hdCBpbmNsdWRpbmcgdGltZXpvbmUgaW5mb1xuICAgIHVwZGF0ZWRfYXQ6IHN0cmluZzsgLy8gQXNzdW1pbmcgdGhlIGRhdGUgaXMgaW4gYSBzcGVjaWZpYyBmb3JtYXQgaW5jbHVkaW5nIHRpbWV6b25lIGluZm9cbn1cblxuaW50ZXJmYWNlIEtpbWlGaWxlUHJlU2lnblJlc3BvbnNlIHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBvYmplY3RfbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgS2ltaVN1cHBvcnRlZE1pbWVUeXBlcyA9ICBbXG4gICAgXCJpbWFnZS9qcGVnXCIsIC8vIEpQRUdcbiAgICBcImltYWdlL3BuZ1wiLCAvLyBQTkdcbiAgICBcImltYWdlL2dpZlwiLCAvLyBHSUZcbiAgICBcImltYWdlL2JtcFwiLCAvLyBCTVBcbiAgICBcImltYWdlL3dlYnBcIiwgLy8gV2ViUFxuICAgIFwiaW1hZ2UvYXZpZlwiLCAvLyBBVklGXG4gICAgXCJpbWFnZS9zdmcreG1sXCIsIC8vIFNWR1xuICAgIFwiaW1hZ2UvaGVpY1wiLCAvLyBIRUlDXG4gICAgXCJpbWFnZS9oZWlmXCIsIC8vIEhFSUZcbiAgICBcInRleHQvbWFya2Rvd25cIiwgLy8gTWFya2Rvd25cbiAgICBcImFwcGxpY2F0aW9uL3BkZlwiLCAvLyBQREZcbiAgICBcInRleHQvcGxhaW5cIiwgLy8gcGxhaW4gdGV4dFxuICAgIFwidGV4dC9jc3ZcIiwgLy8gQ1NWXG4gICAgXCJhcHBsaWNhdGlvbi9tc3dvcmRcIiwgLy8gV29yZCBvbGQgdmVyc2lvblxuICAgIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIiwgLy8gLmRvY3hcbiAgICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiLCAvLyBFeGNlbCBvbGQgdmVyc2lvblxuICAgIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXRcIiwgLy8gLnhsc3hcbiAgICBcImFwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50XCIsIC8vIFBvd2VyUG9pbnRcbiAgICBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb25cIiwgLy8gUG93ZXJQb2ludCAoLnBwdHgpXG4gICAgXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIsIC8vIEphdmFTY3JpcHRcbiAgICBcInRleHQveC1qYXZhLXNvdXJjZVwiLCAvLyBKYXZhXG4gICAgXCJ0ZXh0L3gtZ29cIiwgLy8gR29cbiAgICBcInRleHQveC1jc3JjXCIsIC8vIENcbiAgICBcInRleHQveC1jKytzcmNcIiwgLy8gQysrXG4gICAgXCJ0ZXh0L2h0bWxcIiwgLy8gSFRNTFxuICAgIFwiYXBwbGljYXRpb24vanNvblwiLCAvLyBKU09OXG4gICAgXCJ0ZXh0L3gtcHl0aG9uXCIsIC8vIFB5dGhvblxuICAgIFwidGV4dC9jc3NcIiwgLy8gQ1NTXG4gICAgXCJ0ZXh0L3R5cGVzY3JpcHRcIiwgLy8gVHlwZVNjcmlwdFxuICAgIFwidGV4dC90c3hcIiwgLy8gVFNYXG4gICAgXCJhcHBsaWNhdGlvbi95YW1sXCIsIC8vIFlBTUxcbiAgICBcImFwcGxpY2F0aW9uL3gtanNwXCIsIC8vIEpTUFxuICAgIFwiYXBwbGljYXRpb24veC1odHRwZC1waHBcIiwgLy8gUEhQXG4gICAgXCJ0ZXh0L2FzcFwiLCAvLyBBU1BcbiAgICBcImFwcGxpY2F0aW9uL3gtbW9iaVwiLCAvLyBNT0JJXG4gICAgXCJhcHBsaWNhdGlvbi9lcHViK3ppcFwiIC8vIEVQVUJcbl0gYXMgQm90U3VwcG9ydGVkTWltZVR5cGVbXTtcblxuZXhwb3J0IGNsYXNzIEtpbWlGaWxlU2luZ2xldG9uIGltcGxlbWVudHMgQm90RmlsZUluc3RhbmNlPExpbmtGaWxlUmVzcG9uc2U+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogS2ltaUZpbGVTaW5nbGV0b247XG4gICAgcmVmcyA9IHt9IGFzIEJvdEZpbGVJbnN0YW5jZTxMaW5rRmlsZVJlc3BvbnNlPlsncmVmcyddO1xuICAgIHRlbXBSZWZLZXk6IHN0cmluZztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGlnbm9yZVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBLaW1pRmlsZVNpbmdsZXRvbiB7XG4gICAgICAgIGlmICghS2ltaUZpbGVTaW5nbGV0b24uaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEtpbWlGaWxlU2luZ2xldG9uLmluc3RhbmNlID0gbmV3IEtpbWlGaWxlU2luZ2xldG9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gS2ltaUZpbGVTaW5nbGV0b24uaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZ2V0UmVmKGtleTogc3RyaW5nKTogRmlsZVJlZjxMaW5rRmlsZVJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNba2V5XTtcbiAgICB9XG5cbiAgICBnZXRSZWZCeUZpbGUoZmlsZTogRmlsZSk6IEZpbGVSZWY8TGlua0ZpbGVSZXNwb25zZT4gfCBudWxsIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yZWZzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzW2tleV0/LmZpbGU/Lm5hbWUgPT09IGZpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2dldFNpZ25VcmwoZmlsZTogRmlsZSk6IFByb21pc2U8W0NoYXRFcnJvciwgS2ltaUZpbGVQcmVTaWduUmVzcG9uc2VdPiB7XG4gICAgICAgIGNvbnN0IFtlcnIsIHJlc10gPSBhd2FpdCBzZW5kVG9CYWNrZ3JvdW5kKHtcbiAgICAgICAgICAgIG5hbWU6IFwia2ltaS9wcmUtc2lnbi11cmxcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogZmlsZS5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBbZXJyLCByZXNdO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcHJlU2lnblVwbG9hZFVybChmaWxlOiBGaWxlKTogUHJvbWlzZTxbQ2hhdEVycm9yLCBLaW1pRmlsZVByZVNpZ25SZXNwb25zZSB8IG51bGxdPiB7XG4gICAgICAgIGNvbnN0IFtlcnIsIHJlc10gPSBhd2FpdCB0aGlzLl9nZXRTaWduVXJsKGZpbGUpO1xuXG4gICAgICAgIGlmIChlcnIgJiYgZXJyLmNvZGUgPT09IEVycm9yQ29kZS5VTkFVVEhPUklaRUQpIHtcbiAgICAgICAgICAgIGNvbnN0IFtyZWZyZXNoRXJyXSA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwia2ltaS9yZWZyZXNoLWFjY2Vzcy10b2tlblwiLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZWZyZXNoRXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyZWZyZXNoRXJyLCBudWxsXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNpZ25VcmwoZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW2VyciwgcmVzXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHBhcnNlUHJvY2VzcyhpZDogc3RyaW5nKTogUHJvbWlzZTxbQ2hhdEVycm9yIHwgbnVsbF0+IHtcbiAgICAgICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJvcmlnaW5cIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY25cIik7XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcInItdGltZXpvbmVcIiwgXCJBc2lhL1NoYW5naGFpXCIpO1xuICAgICAgICAvLyBteUhlYWRlcnMuYXBwZW5kKFwieC10cmFmZmljLWlkXCIsIFwiY28zOTM5dWNwN2ZjdDB2YTRvY2dcIik7XG5cbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCBLaW1pQm90LmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiYXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiaWRzXCI6IFtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2FwaS9maWxlL3BhcnNlX3Byb2Nlc3NcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHJlcXVlc3QuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBbcmVxdWVzdC5lcnJvcl07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCcsIHJlcXVlc3QpO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSByZXF1ZXN0Py5yZXNwb25zZT8uYm9keTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtPy5nZXRSZWFkZXIoKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYWRTdHJlYW0oKSB7XG4gICAgICAgICAgICAgICAgcmVhZGVyPy5yZWFkKCkudGhlbihhc3luYyAoe2RvbmUsIHZhbHVlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5jID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGVuYy5kZWNvZGUodmFsdWUuYnVmZmVyKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2Ygc3RyLnNwbGl0KFwiXFxuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBsaW5lLnJlcGxhY2UoXCJkYXRhOiBcIiwgXCJcIikucmVwbGFjZShcIlxcblwiLCBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXcpIGFzIEZpbGVQcm9jZXNzUmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PT0gXCJmYWlsZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5GSUxFX09USEVSKV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtudWxsXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5LTk9XTl9FUlJPUildKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWFkU3RyZWFtKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlYWRTdHJlYW0oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGxvYWQoZmlsZTogRmlsZSwgdXBsb2FkVXJsOiBzdHJpbmcpOiBQcm9taXNlPENoYXRFcnJvciB8IG51bGw+IHtcbiAgICAgICAgY29uc3QgdGhlSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIHRoZUhlYWRlcnMuYXBwZW5kKFwiYWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgICAgICB0aGVIZWFkZXJzLmFwcGVuZChcImNvbnRlbnQtdHlwZVwiLCBmaWxlLnR5cGUpO1xuICAgICAgICB0aGVIZWFkZXJzLmFwcGVuZChcIm9yaWdpblwiLCBcImh0dHBzOi8va2ltaS5tb29uc2hvdC5jblwiKTtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICB0aGVIZWFkZXJzLmFwcGVuZChcInItdGltZXpvbmVcIiwgXCJBc2lhL1NoYW5naGFpXCIpO1xuICAgICAgICB0aGVIZWFkZXJzLmFwcGVuZChcInJlZmVyZXJcIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY24vXCIpO1xuICAgICAgICB0aGVIZWFkZXJzLmFwcGVuZChcIk9yaWdpblwiLCBcImh0dHBzOi8va2ltaS5tb29uc2hvdC5jblwiKTtcblxuICAgICAgICBjb25zdCByID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKHVwbG9hZFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogdGhlSGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IGZpbGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyLmVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gci5lcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByLnJlc3BvbnNlLmpzb24oKVxuICAgICAgICAvLyAgICAgcmVzLnNlbmQoW251bGwsIHJlc3VsdF0pXG4gICAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gICAgIHJlcy5zZW5kKFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSwgbnVsbF0pXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxpbmtGaWxlKGZpbGVOYW1lOiBzdHJpbmcsIG9iamVjdE5hbWU6IHN0cmluZyk6IFByb21pc2U8W0NoYXRFcnJvciB8IG51bGwsIExpbmtGaWxlUmVzcG9uc2UgfCBudWxsXT4ge1xuICAgICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgLy9UT0RPXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJyLXRpbWV6b25lXCIsIFwiQXNpYS9TaGFuZ2hhaVwiKTtcbiAgICAgICAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIngtdHJhZmZpYy1pZFwiLCBcImNvMzkzOXVjcDdmY3QwdmE0b2NnXCIpO1xuXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgS2ltaUJvdC5nZXRBY2Nlc3NUb2tlbigpO1xuXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcImF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBhY2Nlc3NUb2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogZmlsZU5hbWUsXG4gICAgICAgICAgICBcIm9iamVjdF9uYW1lXCI6IG9iamVjdE5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGN1c3RvbUNoYXRGZXRjaChcImh0dHBzOi8va2ltaS5tb29uc2hvdC5jbi9hcGkvZmlsZVwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogcmF3LFxuICAgICAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBbcmVxdWVzdC5lcnJvciwgbnVsbF07XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdD8ucmVzcG9uc2U/Lmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgcmVzdWx0XTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSwgbnVsbF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGxvYWRGaWxlKGZpbGU6IEZpbGUsIHN1cHBvcnRlZFR5cGVzOiBCb3RTdXBwb3J0ZWRNaW1lVHlwZVtdKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdGhpcy50ZW1wUmVmS2V5ID0gY3JlYXRlVXVpZCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZS50eXBlXCIsIGZpbGUudHlwZSwgc3VwcG9ydGVkVHlwZXMpO1xuXG4gICAgICAgIGlmIChmaWxlLnR5cGUgJiYgIXN1cHBvcnRlZFR5cGVzLmluY2x1ZGVzKGZpbGUudHlwZSBhcyBCb3RTdXBwb3J0ZWRNaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmc1t0aGlzLnRlbXBSZWZLZXldID0gbmV3IEZpbGVSZWY8TGlua0ZpbGVSZXNwb25zZT4obmV3IENoYXRFcnJvcihFcnJvckNvZGUuVVBMT0FEX0ZJTEVfTk9UX1NVUFBPUlRFRCksIG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcFJlZktleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGUnLCBmaWxlKTtcblxuICAgICAgICBjb25zdCBbcHJlU2lnbkVyciwgc2lnbl0gPSBhd2FpdCB0aGlzLnByZVNpZ25VcGxvYWRVcmwoZmlsZSk7XG5cbiAgICAgICAgaWYgKHByZVNpZ25FcnIpIHtcbiAgICAgICAgICAgIHRoaXMucmVmc1t0aGlzLnRlbXBSZWZLZXldID0gbmV3IEZpbGVSZWY8TGlua0ZpbGVSZXNwb25zZT4ocHJlU2lnbkVyciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wUmVmS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBsb2FkRXJyb3IgPSBhd2FpdCB0aGlzLnVwbG9hZChmaWxlLCBzaWduIS51cmwpO1xuXG4gICAgICAgIGlmICh1cGxvYWRFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZWZzW3RoaXMudGVtcFJlZktleV0gPSBuZXcgRmlsZVJlZjxMaW5rRmlsZVJlc3BvbnNlPih1cGxvYWRFcnJvciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wUmVmS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgW2xpbmtFcnIsIGxpbmtSZXNdID0gYXdhaXQgdGhpcy5saW5rRmlsZShmaWxlLm5hbWUsIHNpZ24hLm9iamVjdF9uYW1lKTtcblxuICAgICAgICBpZiAobGlua0Vycikge1xuICAgICAgICAgICAgdGhpcy5yZWZzW3RoaXMudGVtcFJlZktleV0gPSBuZXcgRmlsZVJlZjxMaW5rRmlsZVJlc3BvbnNlPihsaW5rRXJyLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBSZWZLZXk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBbcGFyc2VFcnJdID0gYXdhaXQgdGhpcy5wYXJzZVByb2Nlc3MobGlua1JlcyEuaWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZUVycicsIHBhcnNlRXJyKTtcblxuICAgICAgICBpZihwYXJzZUVycikge1xuICAgICAgICAgICAgdGhpcy5yZWZzW3RoaXMudGVtcFJlZktleV0gPSBuZXcgRmlsZVJlZjxMaW5rRmlsZVJlc3BvbnNlPihwYXJzZUVyciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wUmVmS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZzW3RoaXMudGVtcFJlZktleV0gPSBuZXcgRmlsZVJlZihudWxsLCBsaW5rUmVzLCBmaWxlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wUmVmS2V5O1xuICAgIH1cbn1cbiIsImltcG9ydCAge0JvdFN1cHBvcnRlZE1pbWVUeXBlfSBmcm9tIFwifmxpYnMvY2hhdGJvdC9Cb3RCYXNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja01vZGVsU3VwcG9ydFVwbG9hZEltYWdlKHR5cGVzOiBCb3RTdXBwb3J0ZWRNaW1lVHlwZVtdKSB7XG4gICAgcmV0dXJuICEhdHlwZXMuZmluZCh0eXBlPT4gdHlwZS5zdGFydHNXaXRoKCdpbWFnZScpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTW9kZWxTdXBwb3J0VXBsb2FkUERGKHR5cGVzOiBCb3RTdXBwb3J0ZWRNaW1lVHlwZVtdKSB7XG4gICAgcmV0dXJuICEhdHlwZXMuZmluZCh0eXBlPT4gdHlwZSA9PT0gQm90U3VwcG9ydGVkTWltZVR5cGUuUERGKTtcbn1cbiIsImltcG9ydCB0eXBlIHtQbGFzbW9NZXNzYWdpbmd9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCI7XG5pbXBvcnQge2N1c3RvbUNoYXRGZXRjaH0gZnJvbSBcIn51dGlscy9jdXN0b20tZmV0Y2gtZm9yLWNoYXRcIjtcbmltcG9ydCB7Q2hhdEVycm9yLCBFcnJvckNvZGV9IGZyb20gXCJ+dXRpbHMvZXJyb3JzXCI7XG5pbXBvcnQge0tpbWlCb3R9IGZyb20gXCJ+bGlicy9jaGF0Ym90L2tpbWlcIjtcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiYWNjZXB0XCIsIFwiKi8qXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJvcmlnaW5cIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY25cIik7XG4gICAgLy8gVE9ET1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJyLXRpbWV6b25lXCIsIFwiQXNpYS9TaGFuZ2hhaVwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwicmVmZXJlclwiLCBcImh0dHBzOi8va2ltaS5tb29uc2hvdC5jbi9cIik7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9ICBhd2FpdCBLaW1pQm90LmdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgICBpZihhY2Nlc3NUb2tlbikge1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcImFjdGlvblwiOiBcImZpbGVcIixcbiAgICAgICAgXCJuYW1lXCI6IHJlcS5ib2R5LmZpbGVOYW1lXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2FwaS9wcmUtc2lnbi11cmxcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcblxuICAgIGlmKHJlcXVlc3QuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFtyZXF1ZXN0LmVycm9yLCBudWxsXSk7XG4gICAgfSBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0LnJlc3BvbnNlPy5qc29uKCk7XG4gICAgICAgIHJlcy5zZW5kKFtudWxsLCByZXN1bHRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zZW5kKFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSwgbnVsbF0pO1xuICAgIH1cbiAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iLCJpbXBvcnQgdHlwZSB7UGxhc21vTWVzc2FnaW5nfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiO1xuaW1wb3J0IHtjdXN0b21DaGF0RmV0Y2h9IGZyb20gXCJ+dXRpbHMvY3VzdG9tLWZldGNoLWZvci1jaGF0XCI7XG5pbXBvcnQge0NoYXRFcnJvciwgRXJyb3JDb2RlfSBmcm9tIFwifnV0aWxzL2Vycm9yc1wiO1xuaW1wb3J0IHtLaW1pQm90fSBmcm9tIFwifmxpYnMvY2hhdGJvdC9raW1pXCI7XG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcImFjY2VwdFwiLCBcIiovKlwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwib3JpZ2luXCIsIFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuXCIpO1xuICAgIC8vIFRPRE9cbiAgICBteUhlYWRlcnMuYXBwZW5kKFwici10aW1lem9uZVwiLCBcIkFzaWEvU2hhbmdoYWlcIik7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcInJlZmVyZXJcIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY24vXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJPcmlnaW5cIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY25cIik7XG4gICAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIngtdHJhZmZpYy1pZFwiLCBcIjczNTE3MjMzOTkxOTU5MzQ0NjZcIik7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSAgYXdhaXQgS2ltaUJvdC5nZXRBY2Nlc3NUb2tlbigpO1xuXG4gICAgaWYoYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke2FjY2Vzc1Rva2VufWApO1xuICAgIH1cblxuICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJvZmZzZXRcIjogMCxcbiAgICAgICAgXCJzaXplXCI6IDEwLFxuICAgICAgICBcInF1ZXJ5XCI6IFwiIFwiXG4gICAgfSk7XG5cbiAgICBjb25zdCByID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2FwaS9wcm9tcHQtc25pcHBldC9pbnN0YW5jZVwiLCAge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgICAgIGJvZHk6IHJhdyxcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcblxuICAgIGlmKHIuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFtyLmVycm9yLCBudWxsXSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgci5yZXNwb25zZT8uanNvbigpO1xuICAgICAgICByZXMuc2VuZChbbnVsbCwgcmVzdWx0XSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXMuc2VuZChbbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5LTk9XTl9FUlJPUiksIG51bGxdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIiwiaW1wb3J0IHR5cGUge1BsYXNtb01lc3NhZ2luZ30gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIjtcbmltcG9ydCB7Y3VzdG9tQ2hhdEZldGNofSBmcm9tIFwifnV0aWxzL2N1c3RvbS1mZXRjaC1mb3ItY2hhdFwiO1xuaW1wb3J0IHtDaGF0RXJyb3IsIEVycm9yQ29kZX0gZnJvbSBcIn51dGlscy9lcnJvcnNcIjtcbmltcG9ydCB7S2ltaUJvdH0gZnJvbSBcIn5saWJzL2NoYXRib3Qva2ltaVwiO1xuXG5leHBvcnQgY29uc3Qga2ltaVJlZnJlc2hBY2Nlc3NUb2tlbiA9IGFzeW5jICgpOiBQcm9taXNlPFtDaGF0RXJyb3IgfCBudWxsLCBhbnldPiA9PiB7XG4gICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiYXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIChhd2FpdCBLaW1pQm90LmdldFJlZnJlc2hUb2tlbigpKSk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcInJlZmVyZXJcIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY24vXCIpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJPcmlnaW5cIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY25cIik7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2FwaS9hdXRoL3Rva2VuL3JlZnJlc2hcIiwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICB9KTtcblxuICAgIGlmKHJlcXVlc3QuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFtyZXF1ZXN0LmVycm9yLCBudWxsXTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0LnJlc3BvbnNlPy5qc29uKCk7XG5cbiAgICAgICAgaWYocmVzdWx0WydlcnJvcl90eXBlJ10gPT09IFwiYXV0aC50b2tlbi5pbnZhbGlkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5BVVRIT1JJWkVEKSwgbnVsbF07XG4gICAgICAgIH1cblxuICAgICAgICBpZihyZXN1bHRbXCJhY2Nlc3NfdG9rZW5cIl0gJiYgcmVzdWx0W1wicmVmcmVzaF90b2tlblwiXSkge1xuICAgICAgICAgICAgS2ltaUJvdC5zZXRBY2Nlc3NUb2tlbihyZXN1bHRbXCJhY2Nlc3NfdG9rZW5cIl0pO1xuICAgICAgICAgICAgS2ltaUJvdC5zZXRSZWZyZXNoVG9rZW4ocmVzdWx0W1wicmVmcmVzaF90b2tlblwiXSk7XG4gICAgICAgICAgICByZXR1cm4gW251bGwsIHJlc3VsdF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTkFVVEhPUklaRUQpLCBudWxsXTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFtuZXcgQ2hhdEVycm9yKEVycm9yQ29kZS5VTktOT1dOX0VSUk9SKSwgbnVsbF07XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBteUhlYWRlcnMuYXBwZW5kKFwiYXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIChhd2FpdCBLaW1pQm90LmdldFJlZnJlc2hUb2tlbigpKSk7XG4gICAgLy8gbXlIZWFkZXJzLmFwcGVuZChcInJlZmVyZXJcIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY24vXCIpO1xuICAgIC8vIG15SGVhZGVycy5hcHBlbmQoXCJPcmlnaW5cIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY25cIik7XG4gICAgLy9cbiAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tQ2hhdEZldGNoKFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2FwaS9hdXRoL3Rva2VuL3JlZnJlc2hcIiwge1xuICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgLy8gICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAvLyAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbiAgICAvLyB9KVxuICAgIC8vXG4gICAgLy8gaWYocmVxdWVzdC5lcnJvcikge1xuICAgIC8vICAgICByZXR1cm4gcmVzLnNlbmQoW3JlcXVlc3QuZXJyb3IsIG51bGxdKVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QucmVzcG9uc2UuanNvbigpXG4gICAgLy9cbiAgICAvLyAgICAgaWYocmVzdWx0WydlcnJvcl90eXBlJ10gPT09IFwiYXV0aC50b2tlbi5pbnZhbGlkXCIpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiByZXMuc2VuZChbbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5BVVRIT1JJWkVEKSwgbnVsbF0pXG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBpZihyZXN1bHRbXCJhY2Nlc3NfdG9rZW5cIl0gJiYgcmVzdWx0W1wicmVmcmVzaF90b2tlblwiXSkge1xuICAgIC8vICAgICAgICAgS2ltaUJvdC5zZXRBY2Nlc3NUb2tlbihyZXN1bHRbXCJhY2Nlc3NfdG9rZW5cIl0pXG4gICAgLy8gICAgICAgICBLaW1pQm90LnNldFJlZnJlc2hUb2tlbihyZXN1bHRbXCJyZWZyZXNoX3Rva2VuXCJdKVxuICAgIC8vICAgICAgICAgcmVzLnNlbmQoW251bGwsIHJlc3VsdF0pXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gcmVzLnNlbmQoW25ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLlVOQVVUSE9SSVpFRCksIG51bGxdKVxuICAgIC8vICAgICB9XG4gICAgLy8gfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICByZXMuc2VuZChbbmV3IENoYXRFcnJvcihFcnJvckNvZGUuVU5LTk9XTl9FUlJPUiksIG51bGxdKVxuICAgIC8vIH1cbiAgICByZXMuc2VuZChhd2FpdCBraW1pUmVmcmVzaEFjY2Vzc1Rva2VuKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiIsIi8vIGltcG9ydCB0eXBlIHtQbGFzbW9NZXNzYWdpbmd9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcbi8vIGltcG9ydCB7S2ltaX0gZnJvbSBcIn5saWJzL2NoYXRib3Qva2ltaVwiO1xuLy8gaW1wb3J0IHtDb252ZXJzYXRpb25SZXNwb25zZSwgUmVzcG9uc2VNZXNzYWdlVHlwZX0gZnJvbSBcIn5saWJzL29wZW4tYWkvb3Blbi1haS1pbnRlcmZhY2VcIjtcbi8vIGltcG9ydCB7Q2hhdEVycm9yLCBFcnJvckNvZGV9IGZyb20gXCJ+dXRpbHMvZXJyb3JzXCI7XG4vL1xuLy8gY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLlBvcnRIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVxKVxuLy8gICAgIGNvbnN0IHtjb252ZXJzYXRpb25JZCwgdGV4dCwgcmlkfSA9IHJlcS5ib2R5XG4vL1xuLy8gICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4vLyAgICAgLy8gbXlIZWFkZXJzLmFwcGVuZChcImF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKMWMyVnlMV05sYm5SbGNpSXNJbVY0Y0NJNk1UY3hNek16TXpreE5Dd2lhV0YwSWpveE56RXpNek16TURFMExDSnFkR2tpT2lKamIyWnROalZvYTNGeE5IUjBjbW96Ykdvd1p5SXNJblI1Y0NJNkltRmpZMlZ6Y3lJc0luTjFZaUk2SW1Odk16a3pPWFZqY0RkbVkzUXdkbUUwYjJObklpd2ljM0JoWTJWZmFXUWlPaUpqYnpNNU16bDFZM0EzWm1OME1IWmhORzlqTUNJc0ltRmljM1J5WVdOMFgzVnpaWEpmYVdRaU9pSmpiek01TXpsMVkzQTNabU4wTUhaaE5HOWlaeUo5LjRTeWlDelVoa0dYeGhJZnVEd2RReGNHU1VzYlBxREFqN2hBcVdaLW0tc25IYUpsUnZWc3VkRHYySnNaWWk4R202aUFLSUVBOHNlbHhuSks1V0xiY2lRXCIpO1xuLy8gICAgIG15SGVhZGVycy5hcHBlbmQoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuLy8gICAgIG15SGVhZGVycy5hcHBlbmQoXCJvcmlnaW5cIiwgXCJodHRwczovL2tpbWkubW9vbnNob3QuY25cIik7XG4vLyAgICAgbXlIZWFkZXJzLmFwcGVuZChcInItdGltZXpvbmVcIiwgXCJBc2lhL1NoYW5naGFpXCIpO1xuLy8gICAgIG15SGVhZGVycy5hcHBlbmQoXCJyZWZlcmVyXCIsIFwiaHR0cHM6Ly9raW1pLm1vb25zaG90LmNuL2NoYXQvXCIgKyBjb252ZXJzYXRpb25JZCk7XG4vLyAgICAgLy8gbXlIZWFkZXJzLmFwcGVuZChcIngtdHJhZmZpYy1pZFwiLCBcImNvMzkzOXVjcDdmY3QwdmE0b2NnXCIpO1xuLy9cbi8vICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9ICBhd2FpdCBLaW1pLmdldEFjY2Vzc1Rva2VuKClcbi8vXG4vLyAgICAgaWYoYWNjZXNzVG9rZW4pIHtcbi8vICAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke2FjY2Vzc1Rva2VufWApXG4vLyAgICAgfVxuLy9cbi8vICAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgIFwibWVzc2FnZXNcIjogW1xuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgIFwicm9sZVwiOiBcInVzZXJcIixcbi8vICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogdGV4dFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBcInJlZnNcIjogW10sXG4vLyAgICAgICAgIFwidXNlX3NlYXJjaFwiOiB0cnVlXG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIC8vIGZldGNoKGBodHRwczovL2tpbWkubW9vbnNob3QuY24vYXBpL2NoYXQvJHtjb252ZXJzYXRpb25JZH0vY29tcGxldGlvbi9zdHJlYW1gLCB7XG4vLyAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4vLyAgICAgLy8gICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbi8vICAgICAvLyAgICAgYm9keTogcmF3LFxuLy8gICAgIC8vICAgICByZWRpcmVjdDogXCJmb2xsb3dcIlxuLy8gICAgIC8vIH0pXG4vLyAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuLy8gICAgIC8vICAgICAudGhlbigocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuLy8gICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4vLyAgICAgZmV0Y2goYGh0dHBzOi8va2ltaS5tb29uc2hvdC5jbi9hcGkvY2hhdC8ke2NvbnZlcnNhdGlvbklkfS9jb21wbGV0aW9uL3N0cmVhbWAsIHtcbi8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuLy8gICAgICAgICBib2R5OiByYXcsXG4vLyAgICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiXG4vLyAgICAgfSlcbi8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVzcG9uc2UuYm9keTtcbi8vICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbi8vXG4vLyAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICAgICAgcmVzLnNlbmQoe1xuLy8gICAgICAgICAgICAgICAgICAgICByaWQsXG4vLyAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBDb252ZXJzYXRpb25SZXNwb25zZSh7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25faWQ6IGNvbnZlcnNhdGlvbklkLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkVSUk9SLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLkNPTlZFUlNBVElPTl9MSU1JVClcbi8vICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgICB9KVxuLy9cbi8vICAgICAgICAgICAgICAgICByZXR1cm5cbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICBsZXQgbWVzc2FnZUlkICA9IFwiXCJcbi8vICAgICAgICAgICAgIGxldCBncm91cElkID0gXCJcIlxuLy8gICAgICAgICAgICAgbGV0IG91dHB1dFRleHQgPSBcIlwiXG4vL1xuLy8gICAgICAgICAgICAgZnVuY3Rpb24gcmVhZFN0cmVhbSgpIHtcbi8vICAgICAgICAgICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4oYXN5bmMgKHtkb25lLCB2YWx1ZX0pID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5jID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGVuYy5kZWNvZGUodmFsdWUuYnVmZmVyKTtcbi8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2Ygc3RyLnNwbGl0KFwiXFxuXCIpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmF3ID0gbGluZS5yZXBsYWNlKFwiZGF0YTogXCIsIFwiXCIpLnJlcGxhY2UoXCJcXG5cIiwgXCJcIik7XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhdyAhPT0gXCJcIikge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtldmVudCwgY29udGVudCwgdGV4dCwgaWQsIGdyb3VwX2lkfSAgPSBKU09OLnBhcnNlKHJhdyk7XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudCA9PT0gXCJjbXBsXCIpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCA9IGlkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkID0gZ3JvdXBfaWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFRleHQgKz0gdGV4dFxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWQsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IENvbnZlcnNhdGlvblJlc3BvbnNlKHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkdFTkVSQVRJTkcsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdGV4dDogb3V0cHV0VGV4dCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IFwicGluZ1wiKSB7XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImFsbF9kb25lXCIpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWQsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3IENvbnZlcnNhdGlvblJlc3BvbnNlKHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uX2lkOiBjb252ZXJzYXRpb25JZCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV90eXBlOiBSZXNwb25zZU1lc3NhZ2VUeXBlLkRPTkUsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdGV4dDogb3V0cHV0VGV4dCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogbWVzc2FnZUlkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlYWRTdHJlYW0oKTtcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJlYWRTdHJlYW0oKTtcbi8vICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgICByZXMuc2VuZCh7XG4vLyAgICAgICAgICAgICAgICAgcmlkLFxuLy8gICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBDb252ZXJzYXRpb25SZXNwb25zZSh7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbl9pZDogY29udmVyc2F0aW9uSWQsXG4vLyAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfdHlwZTogUmVzcG9uc2VNZXNzYWdlVHlwZS5FUlJPUixcbi8vICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBDaGF0RXJyb3IoRXJyb3JDb2RlLlVOS05PV05fRVJST1IpXG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgfSk7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHtcbiAgICBNRVNTQUdFX0FDVElPTl9PUEVOX1BBTkVMLFxuICAgIE1FU1NBR0VfQUNUSU9OX1NFVF9QQU5FTF9PUEVOX09SX05PVCxcbiAgICBNRVNTQUdFX1BBTkVMX09QRU5FRF9QSU5HX0ZST01fUEFORUwsXG4gICAgTUVTU0FHRV9VUERBVEVfUEFORUxfSU5JVF9EQVRBLFxuICAgIFBPUlRfTElTVEVOX1BBTkVMX0NMT1NFRF9LRVlcbn0gZnJvbSBcIn51dGlsc1wiO1xuXG5pbXBvcnQgQW5hbHl0aWNzIGZyb20gJ35saWJzL2dhJztcblxuY2hyb21lLnNpZGVQYW5lbFxuICAgIC5zZXRQYW5lbEJlaGF2aW9yKHtcbiAgICAgICAgb3BlblBhbmVsT25BY3Rpb25DbGljazogdHJ1ZSxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gaWdub3JlXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5sZXQgcGFuZWxPcGVuZWQgPSBmYWxzZTtcblxuLy8gLS0tIGN1cnJlbnRXaW5kb3dJZCBzdGFydCAtLS1cbmxldCBjdXJyZW50V2luZG93SWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFdpbmRvd0lkKCkge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQoe3BvcHVsYXRlOiB0cnVlfSwgKGN1cnJlbnRXaW5kb3cpID0+IHtcbiAgICAgICAgY3VycmVudFdpbmRvd0lkID0gY3VycmVudFdpbmRvdy5pZDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQYW5lbCgpIHtcbiAgICB2b2lkIGNocm9tZS5zaWRlUGFuZWwuc2V0T3B0aW9ucyh7ZW5hYmxlZDogZmFsc2V9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdm9pZCBjaHJvbWUuc2lkZVBhbmVsLnNldE9wdGlvbnMoe2VuYWJsZWQ6IHRydWV9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGFuZWxTaG93U3RhdHVzKCkge1xuICAgIHBhbmVsT3BlbmVkID0gIXBhbmVsT3BlbmVkO1xuXG4gICAgaWYgKHBhbmVsT3BlbmVkKSB7XG4gICAgICAgIHZvaWQgb3BlblBhbmVsKHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2VQYW5lbCgpO1xuICAgIH1cbn1cblxudXBkYXRlQ3VycmVudFdpbmRvd0lkKCk7XG5cbmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUudHJhY2UoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGV2ZW50LnJlYXNvbik7XG4gICAgdm9pZCBBbmFseXRpY3MuZmlyZUVycm9yRXZlbnQoZXZlbnQucmVhc29uKTtcbn0pO1xuXG5jaHJvbWUud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcigod2luZG93SWQpID0+IHtcbiAgICBpZiAod2luZG93SWQgIT09IGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgICAgIGN1cnJlbnRXaW5kb3dJZCA9IHdpbmRvd0lkO1xuICAgIH1cbn0pO1xuXG5jaHJvbWUud2luZG93cy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIHVwZGF0ZUN1cnJlbnRXaW5kb3dJZCgpO1xufSk7XG5cbmNocm9tZS53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgdXBkYXRlQ3VycmVudFdpbmRvd0lkKCk7XG59KTtcblxuLy8gLS0tIGN1cnJlbnRXaW5kb3dJZCBlbmQgLS0tXG5jb25zdCBpbmplY3RDb250ZW50U2NyaXB0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5jb250ZW50X3NjcmlwdHMpIHJldHVybjtcblxuICAgIGZvciAoY29uc3QgY3Mgb2YgY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5jb250ZW50X3NjcmlwdHMhKSB7XG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHt1cmw6IGNzLm1hdGNoZXN9KSkge1xuICAgICAgICAgICAgaWYodGFiPy51cmw/LnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAgICAgICAgICAgdm9pZCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICBmaWxlczogY3MuanMhLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHt0YWJJZDogdGFiLmlkISwgYWxsRnJhbWVzOiBjcy5hbGxfZnJhbWVzfSxcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0SW1tZWRpYXRlbHk6IGNzLnJ1bl9hdCA9PT0gJ2RvY3VtZW50X3N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gd29ybGQ6IGNzLndvcmxkLCAvLyB1bmNvbW1lbnQgaWYgeW91IHVzZSBpdCBpbiBtYW5pZmVzdC5qc29uIGluIENocm9tZSAxMTErXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBjb25zdCBvcGVuR3VpZGVQYWdlQWZ0ZXJJbnN0YWxsID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7XG4vLyAgICAgICAgIHVybDogYGNocm9tZS1leHRlbnNpb246Ly8ke2Nocm9tZS5ydW50aW1lLmlkfS90YWJzL2dyZWV0aW5nLmh0bWxgLFxuLy8gICAgICAgICBhY3RpdmU6IHRydWVcbi8vICAgICB9LCBmdW5jdGlvbih0YWIpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgdGFiIG9wZW5lZCBhdCBpbmRleCBcIiArIHRhYi5pbmRleCk7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG4gICAgdm9pZCBBbmFseXRpY3MuZmlyZUV2ZW50KCdpbnN0YWxsJyk7XG4gICAgdm9pZCBpbmplY3RDb250ZW50U2NyaXB0KCk7XG4gICAgLy8gb3Blbkd1aWRlUGFnZUFmdGVySW5zdGFsbCgpO1xufSk7XG5cbmNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICBjaGFuZ2VQYW5lbFNob3dTdGF0dXMoKTtcbn0pO1xuXG4vLyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LmdldEVuYWJsZWRSdWxlc2V0cygpLnRoZW4oKHJ1bGVzZXRzKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ2dldEVuYWJsZWRSdWxlc2V0cycpXG4vLyAgICAgY29uc29sZS5sb2cocnVsZXNldHMpXG4vLyB9KVxuLy8gY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC5vblJ1bGVNYXRjaGVkRGVidWcuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcImRlY2xhcmF0aXZlTmV0UmVxdWVzdFwiKVxuLy8gICAgIGNvbnNvbGUubG9nKGRldGFpbHMpXG4vLyB9KVxuLy9cbi8vIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QuZ2V0TWF0Y2hlZFJ1bGVzKHt0YWJJZDogLTF9LFxuLy8gICAgIGZ1bmN0aW9uIChydWxlcykge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcImdldE1hdGNoZWRSdWxlc1wiKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhydWxlcylcbi8vICAgICB9XG4vLyApXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgIHN3aXRjaCAocmVxdWVzdC5hY3Rpb24pIHtcbiAgICAvLyBjYXNlICdzeW5jX3BhbmVsX2luZm8nOlxuICAgIC8vICAgICBjb25zdCB0YWIgPSByZXF1ZXN0LmRhdGEgYXMgY2hyb21lLnRhYnMuVGFiXG4gICAgLy8gICAgIHNjcmlwdGluZ0dvb2dsZSh0YWIuaWQpO1xuICAgIC8vICAgICBicmVhaztcbiAgICAvLyBjYXNlIE1FU1NBR0VfQUNUSU9OX09QRU5fUEFORUxfV0lUSF9TRUFSQ0hfVEVYVDpcbiAgICAvLyAgICAgYXdhaXQgb3BlblBhbmVsKHJlcXVlc3Qud2luZG93SWQpXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdm9pZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7YWN0aW9uOiBNRVNTQUdFX0FDVElPTl9TWU5DX1NFQVJDSF9URVhULCBkYXRhOiByZXF1ZXN0LmRhdGF9KTtcbiAgICAvLyAgICAgfSwgNTAwKVxuICAgIC8vICAgICBicmVhaztcbiAgICBjYXNlIE1FU1NBR0VfQUNUSU9OX1NFVF9QQU5FTF9PUEVOX09SX05PVDpcbiAgICAgICAgY2hhbmdlUGFuZWxTaG93U3RhdHVzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlIE1FU1NBR0VfQUNUSU9OX09QRU5fUEFORUxfQVNLX0FJOlxuICAgICAgICAvLyAgICAgYXdhaXQgb3BlblBhbmVsKHJlcXVlc3Qud2luZG93SWQpXG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICBjYXNlIE1FU1NBR0VfQUNUSU9OX09QRU5fUEFORUw6XG4gICAgICAgIGNvbnNvbGUubG9nKCdNRVNTQUdFX0FDVElPTl9PUEVOX1BBTkVMJywgTUVTU0FHRV9BQ1RJT05fT1BFTl9QQU5FTCk7XG4gICAgICAgIHZvaWQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe2FjdGlvbjogTUVTU0FHRV9VUERBVEVfUEFORUxfSU5JVF9EQVRBfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICBwYW5lbE9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSBlcnJvcicsIGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZighcGFuZWxPcGVuZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZVBhbmVsU2hvd1N0YXR1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBNRVNTQUdFX1BBTkVMX09QRU5FRF9QSU5HX0ZST01fUEFORUw6XG4gICAgICAgIHBhbmVsT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICAgIGlmIChwb3J0Lm5hbWUgPT09IFBPUlRfTElTVEVOX1BBTkVMX0NMT1NFRF9LRVkpIHtcbiAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgcGFuZWxPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vXG4vLyB0eXBlIFNlYXJjaFRleHQgPSBzdHJpbmc7XG4vL1xuLy8gY2xhc3MgT3BlblBhbmVsT3B0aW9ucyB7XG4vLyAgICAgcGFuZWxQYXRoOiBQYW5lbFJvdXRlclBhdGhcbi8vICAgICBkYXRhOiBJQXNrQWkgfCBTZWFyY2hUZXh0XG4vLyB9XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5QYW5lbCh3aW5kb3dJZDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHdpbmRvd0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2luZG93SWQgPSBjdXJyZW50V2luZG93SWQ7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIG9wZW4gdGhlIHBhbmVsIGluIGFsbCB0aGUgcGFnZXMgb24gdGhlIGN1cnJlbnQgd2luZG93LlxuICAgIHZvaWQgY2hyb21lLnNpZGVQYW5lbC5vcGVuKHt3aW5kb3dJZDogd2luZG93SWQhfSk7XG59XG5cbiIsIlxuY29uc3QgR0FfRU5EUE9JTlQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vbXAvY29sbGVjdCc7XG5jb25zdCBHQV9ERUJVR19FTkRQT0lOVCA9ICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9kZWJ1Zy9tcC9jb2xsZWN0JztcblxuLy8gR2V0IHZpYSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vcHJvdG9jb2wvZ2E0L3NlbmRpbmctZXZlbnRzP2NsaWVudF90eXBlPWd0YWcjcmVjb21tZW5kZWRfcGFyYW1ldGVyc19mb3JfcmVwb3J0c1xuY29uc3QgTUVBU1VSRU1FTlRfSUQgPSBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX01FQVNVUkVNRU5UX0lEID8/ICcnO1xuY29uc3QgQVBJX1NFQ1JFVCA9IHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfQVBJX1NFQ1JFVCA/PyAnJztcbmNvbnN0IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUMgPSAxMDA7XG5cbi8vIER1cmF0aW9uIG9mIGluYWN0aXZpdHkgYWZ0ZXIgd2hpY2ggYSBuZXcgc2Vzc2lvbiBpcyBjcmVhdGVkXG5jb25zdCBTRVNTSU9OX0VYUElSQVRJT05fSU5fTUlOID0gMzA7XG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlYnVnOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoZGVidWc/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZyA/PyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBjbGllbnQgaWQsIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAgIC8vIFN0b3JlcyBjbGllbnQgaWQgaW4gbG9jYWwgc3RvcmFnZSB0byBrZWVwIHRoZSBzYW1lIGNsaWVudCBpZCBhcyBsb25nIGFzXG4gICAgLy8gdGhlIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQuXG4gICAgYXN5bmMgZ2V0T3JDcmVhdGVDbGllbnRJZCgpIHtcbiAgICAgICAgbGV0IHsgY2xpZW50SWQgfSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgnY2xpZW50SWQnKTtcbiAgICAgICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgY2xpZW50IElELCB0aGUgYWN0dWFsIHZhbHVlIGlzIG5vdCByZWxldmFudFxuICAgICAgICAgICAgY2xpZW50SWQgPSBzZWxmLmNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjbGllbnRJZCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50SWQ7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgY3VycmVudCBzZXNzaW9uIGlkLCBvciBjcmVhdGVzIGEgbmV3IG9uZSBpZiBvbmUgZG9lc24ndCBleGlzdCBvclxuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUgaGFzIGV4cGlyZWQuXG4gICAgYXN5bmMgZ2V0T3JDcmVhdGVTZXNzaW9uSWQoKSB7XG4gICAgICAgIC8vIFVzZSBzdG9yYWdlLnNlc3Npb24gYmVjYXVzZSBpdCBpcyBvbmx5IGluIG1lbW9yeVxuICAgICAgICBsZXQgeyBzZXNzaW9uRGF0YSB9ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5nZXQoJ3Nlc3Npb25EYXRhJyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIENoZWNrIGlmIHNlc3Npb24gZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZFxuICAgICAgICBpZiAoc2Vzc2lvbkRhdGEgJiYgc2Vzc2lvbkRhdGEudGltZXN0YW1wKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgaG93IGxvbmcgYWdvIHRoZSBzZXNzaW9uIHdhcyBsYXN0IHVwZGF0ZWRcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uSW5NaW4gPSAoY3VycmVudFRpbWVJbk1zIC0gc2Vzc2lvbkRhdGEudGltZXN0YW1wKSAvIDYwMDAwO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB1cGRhdGUgbGF5cyBwYXN0IHRoZSBzZXNzaW9uIGV4cGlyYXRpb24gdGhyZXNob2xkXG4gICAgICAgICAgICBpZiAoZHVyYXRpb25Jbk1pbiA+IFNFU1NJT05fRVhQSVJBVElPTl9JTl9NSU4pIHtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBvbGQgc2Vzc2lvbiBpZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICAgICAgICAgICAgc2Vzc2lvbkRhdGEgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wIHRvIGtlZXAgc2Vzc2lvbiBhbGl2ZVxuICAgICAgICAgICAgICAgIHNlc3Npb25EYXRhLnRpbWVzdGFtcCA9IGN1cnJlbnRUaW1lSW5NcztcbiAgICAgICAgICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldCh7IHNlc3Npb25EYXRhIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc2Vzc2lvbkRhdGEpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgc3RvcmUgYSBuZXcgc2Vzc2lvblxuICAgICAgICAgICAgc2Vzc2lvbkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbl9pZDogY3VycmVudFRpbWVJbk1zLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBjdXJyZW50VGltZUluTXMudG9TdHJpbmcoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLnNlc3Npb24uc2V0KHsgc2Vzc2lvbkRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlc3Npb25EYXRhLnNlc3Npb25faWQ7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgYW4gZXZlbnQgd2l0aCBvcHRpb25hbCBwYXJhbXMuIEV2ZW50IG5hbWVzIG11c3Qgb25seSBpbmNsdWRlIGxldHRlcnMgYW5kIHVuZGVyc2NvcmVzLlxuICAgIGFzeW5jIGZpcmVFdmVudChuYW1lOiBzdHJpbmcsIHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7fSkge1xuICAgICAgICAvLyBDb25maWd1cmUgc2Vzc2lvbiBpZCBhbmQgZW5nYWdlbWVudCB0aW1lIGlmIG5vdCBwcmVzZW50LCBmb3IgbW9yZSBkZXRhaWxzIHNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9zZW5kaW5nLWV2ZW50cz9jbGllbnRfdHlwZT1ndGFnI3JlY29tbWVuZGVkX3BhcmFtZXRlcnNfZm9yX3JlcG9ydHNcbiAgICAgICAgaWYgKCFwYXJhbXMuc2Vzc2lvbl9pZCkge1xuICAgICAgICAgICAgcGFyYW1zLnNlc3Npb25faWQgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlU2Vzc2lvbklkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbXMuZW5nYWdlbWVudF90aW1lX21zZWMpIHtcbiAgICAgICAgICAgIHBhcmFtcy5lbmdhZ2VtZW50X3RpbWVfbXNlYyA9IERFRkFVTFRfRU5HQUdFTUVOVF9USU1FX01TRUM7XG4gICAgICAgIH1cblxuICAgICAgICBpZighTUVBU1VSRU1FTlRfSUQgfHwgIUFQSV9TRUNSRVQpIHJldHVybjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyA/IEdBX0RFQlVHX0VORFBPSU5UIDogR0FfRU5EUE9JTlRcbiAgICAgICAgICAgICAgICB9P21lYXN1cmVtZW50X2lkPSR7TUVBU1VSRU1FTlRfSUR9JmFwaV9zZWNyZXQ9JHtBUElfU0VDUkVUfWAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlQ2xpZW50SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgZm9yIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImNhbXBhaWduX2lkXCI6IFwiZ29vZ2xlXzEyMzRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJjYW1wYWlnblwiOiBcIlN1bW1lcl9mdW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJzb3VyY2VcIjogXCJnb29nbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJtZWRpdW1cIjogXCJjcGNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJ0ZXJtXCI6IFwic3VtbWVyK3RyYXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImNvbnRlbnRcIjogXCJsb2dvbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyByZXF1ZXN0IGZhaWxlZCB3aXRoIGFuIGV4Y2VwdGlvbicsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZSBhIHBhZ2UgdmlldyBldmVudC5cbiAgICBmaXJlUGFnZVZpZXdFdmVudChwYWdlVGl0bGU6IHN0cmluZywgcGFnZUxvY2F0aW9uOiBzdHJpbmcsIGFkZGl0aW9uYWxQYXJhbXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ3BhZ2VfdmlldycsIHtcbiAgICAgICAgICAgIHBhZ2VfdGl0bGU6IHBhZ2VUaXRsZSxcbiAgICAgICAgICAgIHBhZ2VfbG9jYXRpb246IHBhZ2VMb2NhdGlvbixcbiAgICAgICAgICAgIC4uLmFkZGl0aW9uYWxQYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmlyZSBhbiBlcnJvciBldmVudC5cbiAgICBhc3luYyBmaXJlRXJyb3JFdmVudChlcnJvciwgYWRkaXRpb25hbFBhcmFtcyA9IHt9KSB7XG4gICAgICAgIC8vIE5vdGU6ICdlcnJvcicgaXMgYSByZXNlcnZlZCBldmVudCBuYW1lIGFuZCBjYW5ub3QgYmUgdXNlZFxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL3Byb3RvY29sL2dhNC9yZWZlcmVuY2U/Y2xpZW50X3R5cGU9Z3RhZyNyZXNlcnZlZF9uYW1lc1xuICAgICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoJ2V4dGVuc2lvbl9lcnJvcicsIHtcbiAgICAgICAgICAgIC4uLmVycm9yLFxuICAgICAgICAgICAgLi4uYWRkaXRpb25hbFBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBbmFseXRpY3MoKTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);