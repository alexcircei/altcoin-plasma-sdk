module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(0)},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=n(8),u=n(13),a=n(14),c=function(){function e(e,t,n,r){this.GCI=e,this.options=t,this.privKey=n,this.ethConfig=r,this.ulotion=new a.uLotion(this.GCI,this.options),r||(this.ethConfig=u.App.eth)}return e.prototype.authenticate=function(e){this.privKey=e,this.acc=s.EthereumAccount.recoverAccount(e),this.eng=new i.EthEngine(null,this.ethConfig,null),this.keystore=this.eng.recoverAccount(this.privKey),this.eng.login(this.keystore)},e.prototype.recoverAccountAndSignMessage=function(e,t){var n=s.EthereumAccount.recoverAccount(e),r=n.signReceiptTendermint(t.payload.sender,t.payload.sellToken,t.payload.buyToken,t.payload.sellAmount,t.payload.buyAmount,t.payload.nonce);return t.payload.v=r.v,t.payload.r=r.r,t.payload.s=r.s,t.payload.signature=r.signature,t.payload.messageHash=r.messageHash,t},e.prototype.refreshState=function(e){return void 0===e&&(e=""),r(this,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return[4,this.ulotion.state(e)];case 1:return t=n.sent(),[2,t]}})})},e.prototype.send=function(e){return r(this,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return[4,this.ulotion.send(e)];case 1:return t=n.sent(),[2,t]}})})},e.prototype.deposit=function(e,t){return r(this,void 0,void 0,function(){var n,r,s;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),n=i.TokenFactory.GetToken(e,this.eng),[4,n.approve(this.ethConfig.contractAddress,t)];case 1:return r=o.sent(),[4,n.DepositToken(t)];case 2:return s=o.sent(),[4,this.send({action:"deposit",payload:{nonce:3}})];case 3:return[2,o.sent()]}})})},e.prototype.make=function(e,t,n,s){return r(this,void 0,void 0,function(){var r,u,a,c;return o(this,function(o){return r=i.TokenFactory.GetToken(t,this.eng),u=i.TokenFactory.GetToken(e,this.eng),a={action:"make",payload:{sellToken:u.contractAddress,buyToken:r.contractAddress,sellAmount:n,buyAmount:s,nonce:"1",sender:this.acc.address}},c=this.recoverAccountAndSignMessage(this.privKey,a),[2,this.send(c)]})})},e.prototype.getActiveOrders=function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return[4,this.refreshState("accounts["+this.acc.address+"]")];case 1:return e=t.sent(),[2,e]}})})},e.prototype.withdraw=function(e){return r(this,void 0,void 0,function(){return o(this,function(e){return[2]})})},e}();t.LightClient=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.ERC20=r.ERC20;var o=n(1);t.DEX=o.DEX,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(4));var i=n(5);t.GolemTokenMainnet=i.GolemTokenMainnet,t.GolemTokenTestnet=i.GolemTokenTestnet;var s=n(6);t.EthereumWallet=s.EthereumWallet;var u=n(7);t.EthEngine=u.EthEngine},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(10),i=n(11),s=n(12),u=function(){function e(e){this.account=e}return Object.defineProperty(e.prototype,"privateKey",{get:function(){return this.account.privateKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"address",{get:function(){return this.account.address},enumerable:!0,configurable:!0}),e.recoverAccountFromSeed=function(e){var t=new s.fromMasterSeed(e),n=t.derive("m/44'/60'/0'/0/0"),o=n._privateKey.toString("hex");return r.accounts.privateKeyToAccount("0x"+o)},e.recoverAccount=function(t){return new e(r.fromPrivate(t))},e.prototype.signReceiptTendermint=function(e,t,n,r,o,i){var s=e+t+n+this.hexValue(r)+this.hexValue(o)+this.hexValue(i),u=this.hashMessage(s);return this.signHash(s,u)},e.prototype.signWithdrawTendermint=function(e,t,n){var r=e+t+this.hexValue(n),o=this.hashMessage(r);return this.signHash(r,o)},e.prototype.signReceipt=function(e,t,n){if("string"!=typeof t)throw new Error("value must be string");var r=e+this.hexValue(t)+this.hexValue(n);return this.sign(r)},e.prototype.hexValue=function(e){return i.asciiToHex(e).replace("0x","")},e.prototype.signHash=function(e,t){var n=r.sign(t,this.privateKey),o=r.decodeSignature(n);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:n}},e.prototype.sign=function(e){var t=this.hashMessage(e),n=r.sign(t,this.privateKey),o=r.decodeSignature(n);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:n}},e.prototype.hashMessage=function(e){return o.keccak256s(e)},e}();t.EthereumAccount=u},function(e,t){e.exports=require("eth-lib/lib/account")},function(e,t){e.exports=require("eth-lib/lib/hash")},function(e,t){e.exports=require("web3-utils")},function(e,t){e.exports=require("hdkey")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App={eth:{wshost:"wss://swap.altcoin.io:8550",contractAddress:"0x5f450aa5c15664bd88f31e63d0c40961ff129042",defaultWallet:"0xb483f5a8c6ebA74Dc1bcef9D167E6B86Caa4C773"}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u};Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),s=n(22),u=function(){function e(e,t){if(this.GCI=e,this.options=t,this.nodes=[],this.nodes=t.nodes,!e&&(void 0===this.nodes||0===this.nodes.length))throw Error("Nodes not set")}return e.prototype.getGenesisActivePeer=function(){return r(this,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:return this.GCI?[4,i.ulotionHelper.fetchGenesis(this.GCI)]:[3,2];case 1:return t=n.sent(),e="http://"+t.peer.host+":"+this.options.tendermintPort,[3,3];case 2:e=this.nodes[0],n.label=3;case 3:return[2,e]}})})},e.prototype.state=function(e){return void 0===e&&(e=""),r(this,void 0,void 0,function(){var t,n,r,i;return o(this,function(o){switch(o.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=o.sent(),[4,s.get(t+'/abci_query?path="'+e+'"')];case 2:n=o.sent(),r=n.data.result.response,r.height=Number(r.height),i=null;try{i=JSON.parse(Buffer.from(r.value,"base64").toString())}catch(e){throw new Error("invalid json in query response")}return[2,i]}})})},e.prototype.send=function(e){return r(this,void 0,void 0,function(){var t,n,r,u;return o(this,function(o){switch(o.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=o.sent(),n=Math.floor(8192*Math.random()),r="0x"+i.ulotionHelper.encode(e,n).toString("hex"),[4,s.get(t.replace("ws:","http:")+"/broadcast_tx_commit",{params:{tx:r}})];case 2:return u=o.sent(),[2,u.data.result]}})})},e}();t.uLotion=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),o=n(17),i=n(18),s=n(19),u=n(20),a=u([{name:"data",type:u.VarString(u.UInt32BE)},{name:"nonce",type:u.UInt32BE}]),c=function(){function e(){}return e.convertBase64ToBuffers=function(t){return e.replace(t,e.bufferToBase64Replacer)},e.base64ToBufferReplacer=function(e){return"string"!=typeof e?e:e.startsWith(":base64:")?Buffer.from(e.slice(":base64:".length),"base64"):e},e.encode=function(t,n){var r=e.stringify(t);return a.encode({nonce:n,data:r})},e.fetchGenesis=function(e){return new Promise(function(t,r){var o,u=i(e,["https://swap.altcoin.io:9091"]);o="object"==typeof process&&process+""=="[object process]"?s(u,{wrtc:n(21)}):s(u,{}),o.on("peer",function(e,n){e.on("data",function(n){var r=Number(n.toString());r>100&&r<65536&&(e.destroy(),t({peer:{host:e.remoteAddress,port:r}}))})})})},e.parse=function(t){var n=JSON.parse(t);return e.convertBase64ToBuffers(n)},e.getGCIFromGenesis=function(t){var n=r.createHash("sha256"),o=e.parse(t);o.genesis_time="";var i=e.stringify(o);return n.update(i,"utf8").digest().toString("hex")},e.deepClone=function(e,t){var n=Array.isArray(e)?[]:{};Object.assign(n,e);for(var r in n)n[r]=t(n[r]),"object"==typeof n[r]&&(n[r]=this.deepClone(n[r],t));return n},e.replace=function(t,n){for(var r in t)t[r]=n(t[r]),"object"!=typeof t[r]||Buffer.isBuffer(t[r])||e.replace(t[r],n);return t},e.stringify=function(t){var n=e.deepClone(t,e.bufferToBase64Replacer);return o(n)},e.bufferToBase64Replacer=function(e){return"object"==typeof e&&null!=e&&"Buffer"===e.type&&Array.isArray(e.data)&&(e=Buffer.from(e)),Buffer.isBuffer(e)?":base64:"+e.toString("base64"):e},e}();t.ulotionHelper=c},function(e,t){e.exports=require("crypto-browserify")},function(e,t){e.exports=require("json-stable-stringify")},function(e,t){e.exports=require("signalhub")},function(e,t){e.exports=require("webrtc-swarm")},function(e,t){e.exports=require("varstruct")},function(e,t){e.exports=require("wrtc")},function(e,t){e.exports=require("axios")}]);
//# sourceMappingURL=index.js.map