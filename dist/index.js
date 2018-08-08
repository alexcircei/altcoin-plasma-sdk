module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(i=2&n[0]?s.return:n[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],s=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var s,i=n(2),a=n(7),c=n(1),u=n(17),f=n(18),h=n(19),l=n(1);t.TOKENS=l.TOKENS,t.TokenFactory=l.TokenFactory,t.ERC20=l.ERC20,t.EthEngine=l.EthEngine,t.EthereumWallet=l.EthereumWallet,t.TokenConfig=l.TokenConfig,t.TokenConfigMain=l.TokenConfigMain,t.generateMnemonic=l.generateMnemonic,t.AugurTokenTestnet=l.AugurTokenTestnet,t.AugurTokenMainnet=l.AugurTokenMainnet,t.TokenMapping=(s={},s[c.TokenConfig.Augur.contractAddress.toLowerCase()]=c.TOKENS.AUGUR,s[c.TokenConfig.Golem.contractAddress.toLowerCase()]=c.TOKENS.GOLEM,s[c.TokenConfig.Gnosis.contractAddress.toLowerCase()]=c.TOKENS.GNOSIS,s[c.TokenConfig.Bat.contractAddress.toLowerCase()]=c.TOKENS.BAT,s[c.TokenConfig.Aragon.contractAddress.toLowerCase()]=c.TOKENS.ARAGON,s[c.TokenConfig.Eos.contractAddress.toLowerCase()]=c.TOKENS.EOS,s[c.TokenConfig.Salt.contractAddress.toLowerCase()]=c.TOKENS.SALT,s[c.TokenConfig.Civic.contractAddress.toLowerCase()]=c.TOKENS.CIVIC,s[c.TokenConfig.OmiseGo.contractAddress.toLowerCase()]=c.TOKENS.OMISEGO,s[c.TokenConfig.District0x.contractAddress.toLowerCase()]=c.TOKENS.DISTRICT0X,s[c.TokenConfig.StatusNetwork.contractAddress.toLowerCase()]=c.TOKENS.STATUSNETWORK,s[c.TokenConfig.Substratum.contractAddress.toLowerCase()]=c.TOKENS.SUBSTRATUM,s[c.TokenConfig.Tron.contractAddress.toLowerCase()]=c.TOKENS.TRON,s[c.TokenConfig.Bytom.contractAddress.toLowerCase()]=c.TOKENS.BYTOM,s[c.TokenConfig.Dent.contractAddress.toLowerCase()]=c.TOKENS.DENT,s[c.TokenConfig.Populous.contractAddress.toLowerCase()]=c.TOKENS.POPULOUS,s[c.TokenConfig.Maker.contractAddress.toLowerCase()]=c.TOKENS.MAKER,s[c.TokenConfig.DigixDAO.contractAddress.toLowerCase()]=c.TOKENS.DIGIXDAO,s[c.TokenConfig.QASH.contractAddress.toLowerCase()]=c.TOKENS.QASH,s[c.TokenConfig.Ethos.contractAddress.toLowerCase()]=c.TOKENS.ETHOS,s[c.TokenConfig.FunFair.contractAddress.toLowerCase()]=c.TOKENS.FUNFAIR,s[c.TokenConfig.RequestNetwork.contractAddress.toLowerCase()]=c.TOKENS.REQUESTNETWORK,s[c.TokenConfig.Bancor.contractAddress.toLowerCase()]=c.TOKENS.BANCOR,s[c.TokenConfig.Iconomi.contractAddress.toLowerCase()]=c.TOKENS.ICONOMI,s[c.TokenConfig.TenXPay.contractAddress.toLowerCase()]=c.TOKENS.TENXPAY,s[c.TokenConfig.Storj.contractAddress.toLowerCase()]=c.TOKENS.STORJ,s[c.TokenConfig.EnjinCoin.contractAddress.toLowerCase()]=c.TOKENS.ENJINCOIN,s[c.TokenConfig.WETH.contractAddress.toLowerCase()]=c.TOKENS.WETH,s[c.TokenConfig.ZeroX.contractAddress.toLowerCase()]=c.TOKENS.ZEROX,s[c.TokenConfig.Bloom.contractAddress.toLowerCase()]=c.TOKENS.BLOOM,s[c.TokenConfig.Lunyr.contractAddress.toLowerCase()]=c.TOKENS.LUNYR,s),t.TokenMappingReverse=function(){var e={};for(var n in t.TokenMapping)t.TokenMapping.hasOwnProperty(n)&&(e[t.TokenMapping[n]]=n);return e};var p=function(){function e(e,t,n,r){this.GCI=e,this.options=t,this.privKey=n,this.ethConfig=r,this.ulotion=new a.uLotion(this.GCI,this.options),r||(this.ethConfig=u.App.eth),this.states=new Map}return e.prototype.authenticate=function(e){this.privKey=e,this.acc=i.EthereumAccount.recoverAccount(e),this.eng=new c.EthEngine(null,this.ethConfig,null),this.keystore=this.eng.recoverAccount(this.privKey),this.eng.login(this.keystore)},e.prototype.recoverAccountAndSignOrder=function(e,t){var n=i.EthereumAccount.recoverAccount(e),r=n.signReceiptTendermint(t.payload.sender,t.payload.sellToken,t.payload.buyToken,t.payload.sellAmount,t.payload.buyAmount,t.payload.nonce);return t.payload.v=r.v,t.payload.r=r.r,t.payload.s=r.s,t.payload.signature=r.signature,t.payload.messageHash=r.messageHash,t},e.prototype.recoverAccountAndSignWithdraw=function(e,t,n){var r=i.EthereumAccount.recoverAccount(e),o={},s=r.signWithdrawTendermint(r.address,t,n);return o.v=s.v,o.r=s.r,o.s=s.s,o.signature=s.signature,o.messageHash=s.messageHash,o.sender=r.address,o.token=t,o.amount=n.toString(),o},e.prototype.refreshState=function(e){return void 0===e&&(e=""),r(this,void 0,void 0,function(){var t,n,r,n,r;return o(this,function(o){switch(o.label){case 0:return[4,this.ulotion.state(e)];case 1:if(t=o.sent(),""===e){f.StateHelper.mapAddressToEnum(t,"volume");for(n in t.accounts)if(t.accounts.hasOwnProperty(n))for(r in t.accounts[n].balance)f.StateHelper.mapAddressToEnum(t.accounts[n],"balance")}else if("volume"===e)f.StateHelper.mapAddressToEnum(t);else if("accounts"===e)for(n in t)if(t.hasOwnProperty(n))for(r in t[n].balance)f.StateHelper.mapAddressToEnum(t[n],"balance");return"string"==typeof t&&(t=JSON.parse(t)),[2,t]}})})},e.prototype.send=function(e){return r(this,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return[4,this.ulotion.send(e)];case 1:return t=n.sent(),[2,t]}})})},e.prototype.faucet=function(e){return r(this,void 0,void 0,function(){var t;return o(this,function(n){switch(n.label){case 0:return this.authenticate(this.privKey),t=c.TokenFactory.GetToken(e,this.eng),[4,t.faucet()];case 1:return[2,n.sent()]}})})},e.prototype.deposit=function(e,t){return r(this,void 0,void 0,function(){var n,r,s,i;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),n=c.TokenFactory.GetToken(e,this.eng),[4,n.approve(this.ethConfig.contractAddress,t)];case 1:return r=o.sent(),[4,n.DepositToken(t)];case 2:return s=o.sent(),[4,n.currentDepositNonce()];case 3:return i=o.sent(),[4,this.send({action:"deposit",payload:{nonce:i}})];case 4:return[2,o.sent()]}})})},e.prototype.make=function(e,t,n,s){return r(this,void 0,void 0,function(){var r,i,a,u,f,h;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),r=c.TokenFactory.GetToken(t,this.eng),i=c.TokenFactory.GetToken(e,this.eng),[4,this.refreshState()];case 1:a=o.sent(),u=null;try{u=a.nonce[i.contractAddress.toLowerCase()][this.acc.address.toLowerCase()]}catch(e){u=1}return f={action:"make",payload:{sellToken:i.contractAddress,buyToken:r.contractAddress,sellAmount:n,buyAmount:s,nonce:u,sender:this.acc.address}},h=this.recoverAccountAndSignOrder(this.privKey,f),[4,this.send(h)];case 2:return[2,o.sent()]}})})},e.prototype.getActiveOrders=function(e,n,s){return void 0===e&&(e=!1),r(this,void 0,void 0,function(){var r,i,a;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),r=this.acc.address.toLowerCase(),i=null,a="orders['"+r+"']",e&&(n||s)?a="$..orders..":e&&(a="$..orders"),n||s?[3,2]:[4,this.refreshState(a)];case 1:return i=o.sent(),i&&i.length>0&&(i=i[0]),[3,8];case 2:return s&&n?[4,this.refreshState(a+"[?(@.buyToken=='"+t.TokenMappingReverse()[s]+"' %26%26 @.sellToken=='"+t.TokenMappingReverse()[n]+"')]")]:[3,4];case 3:return i=o.sent(),[3,8];case 4:return n?[4,this.refreshState(a+"[?(@.sellToken=='"+t.TokenMappingReverse()[n]+"')]")]:[3,6];case 5:return i=o.sent(),[3,8];case 6:return s?[4,this.refreshState(a+"[?(@.buyToken=='"+t.TokenMappingReverse()[s]+"')]")]:[3,8];case 7:i=o.sent(),o.label=8;case 8:return[2,i]}})})},e.prototype.withdraw=function(e,t,n){return void 0===n&&(n=!1),r(this,void 0,void 0,function(){var r,s,i,a,u;return o(this,function(o){switch(o.label){case 0:return this.authenticate(this.privKey),r=c.TokenFactory.GetToken(e,this.eng),s=this.recoverAccountAndSignWithdraw(this.privKey,r.contractAddress,t),n?[3,2]:[4,this.send({action:"withdraw",payload:s})];case 1:i=o.sent(),o.label=2;case 2:return[4,this.refreshState("accounts['"+this.acc.address.toLowerCase()+"'].lastSignedWithdraw")];case 3:return a=o.sent(),a&&a.length>0&&(a=a[0]),[4,r.withdraw(a.sender,a.amount,a.nonce,a.v,a.r,a.s)];case 4:return u=o.sent(),console.log("Confirmation",u),[2,u]}})})},e.prototype.subscribe=function(e,t){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,this.subscribeMulti([e],t)]})})},e.prototype.subscribeMulti=function(e,t){return r(this,void 0,void 0,function(){var n,s,i,a,c,u,f,l,p=this;return o(this,function(d){switch(d.label){case 0:n=0,s=e,d.label=1;case 1:return n<s.length?(i=s[n],[4,this.refreshState(i)]):[3,4];case 2:a=d.sent(),c=new h.StateMergePatch(a,i),this.states.set(i,c),d.label=3;case 3:return n++,[3,1];case 4:return u=this,f=function(){return r(p,void 0,void 0,function(){var e=this;return o(this,function(n){return u.states.forEach(function(n,s){return r(e,void 0,void 0,function(){var e;return o(this,function(r){switch(r.label){case 0:return[4,n.diff(u)];case 1:return e=r.sent(),t(s,e),[2]}})})}),[2]})})},[4,this.ulotion.subscribeTx(f)];case 5:return l=d.sent(),[2,f]}})})},e}();t.LightClient=p},function(e,t){e.exports=require("altcoin-ethereum-wallet")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(4),s=n(5),i=n(6),a=function(){function e(e){this.account=e}return Object.defineProperty(e.prototype,"privateKey",{get:function(){return this.account.privateKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"address",{get:function(){return this.account.address},enumerable:!0,configurable:!0}),e.recoverAccountFromSeed=function(e){var t=new i.fromMasterSeed(e),n=t.derive("m/44'/60'/0'/0/0"),o=n._privateKey.toString("hex");return r.accounts.privateKeyToAccount("0x"+o)},e.recoverAccount=function(t){return new e(r.fromPrivate("0x"+t))},e.prototype.signReceiptTendermint=function(e,t,n,r,o,s){var i=e+t+n+this.hexValue(r)+this.hexValue(o)+this.hexValue(s),a=this.hashMessage(i);return this.signHash(i,a)},e.prototype.signWithdrawTendermint=function(e,t,n){var r=e+t+this.hexValue(n),o=this.hashMessage(r);return this.signHash(r,o)},e.prototype.signReceipt=function(e,t,n){if("string"!=typeof t)throw new Error("value must be string");var r=e+this.hexValue(t)+this.hexValue(n);return this.sign(r)},e.prototype.hexValue=function(e){return s.asciiToHex(e).replace("0x","")},e.prototype.signHash=function(e,t){var n=r.sign(t,this.privateKey),o=r.decodeSignature(n);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:n}},e.prototype.sign=function(e){var t=this.hashMessage(e),n=r.sign(t,this.privateKey),o=r.decodeSignature(n);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:n}},e.prototype.hashMessage=function(e){return o.keccak256s(e)},e}();t.EthereumAccount=a},function(e,t){e.exports=require("eth-lib/lib/account")},function(e,t){e.exports=require("eth-lib/lib/hash")},function(e,t){e.exports=require("web3-utils")},function(e,t){e.exports=require("hdkey")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(i=2&n[0]?s.return:n[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],s=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),i=n(15),a=n(16),c=function(){function e(e,t){if(this.GCI=e,this.options=t,this.nodes=[],this.nodes=t.nodes,!e&&(void 0===this.nodes||0===this.nodes.length))throw Error("Nodes not set")}return e.prototype.getGenesisActivePeer=function(){return r(this,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:return this.GCI?[4,s.ulotionHelper.fetchGenesis(this.GCI)]:[3,2];case 1:return t=n.sent(),e="http://"+t.peer.host+":"+this.options.tendermintPort,[3,3];case 2:e=this.nodes[0],n.label=3;case 3:return[2,e]}})})},e.prototype.state=function(e){return void 0===e&&(e=""),r(this,void 0,void 0,function(){var t,n,r,s;return o(this,function(o){switch(o.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=o.sent(),[4,i.get(t+'/abci_query?path="'+e+'"')];case 2:if(n=o.sent(),n.data.error&&!n.data.result)throw new Error(JSON.stringify(n.data.error));r=n.data.result.response,r.height=Number(r.height),s=null;try{s=JSON.parse(Buffer.from(r.value,"base64").toString())}catch(e){throw new Error("invalid json in query response")}return[2,s]}})})},e.prototype.send=function(e){return r(this,void 0,void 0,function(){var t,n,r;return o(this,function(o){switch(o.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=o.sent(),n="0x"+Buffer.from(JSON.stringify(e)).toString("hex"),[4,i.get(t.replace("ws:","http:")+"/broadcast_tx_commit",{params:{tx:n}})];case 2:return r=o.sent(),[2,r.data.result]}})})},e.prototype.subscribeTx=function(e){return r(this,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return[4,this.getGenesisActivePeer()];case 1:return t=r.sent().replace("http:","ws:").replace("https:","wss:"),console.log(t),n=a.RpcClient(t),this.eventRpc=n,n.on("close",function(e){console.log(e)}),n.on("error",function(e){console.log("RPC Error: ",e)}),n.subscribe({query:"tm.event='Tx'"},e),[2]}})})},e}();t.uLotion=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(10),s=n(11),i=n(12),a=n(13),c=a([{name:"data",type:a.VarString(a.UInt32BE)},{name:"nonce",type:a.UInt32BE}]),u=function(){function e(){}return e.convertBase64ToBuffers=function(t){return e.replace(t,e.bufferToBase64Replacer)},e.base64ToBufferReplacer=function(e){return"string"!=typeof e?e:e.startsWith(":base64:")?Buffer.from(e.slice(":base64:".length),"base64"):e},e.encode=function(t,n){var r=e.stringify(t);return c.encode({nonce:n,data:r})},e.fetchGenesis=function(e){return new Promise(function(t,r){var o,a=s(e,["https://swap.altcoin.io:9091"]);o="object"==typeof process&&process+""=="[object process]"?i(a,{wrtc:n(14)}):i(a,{}),o.on("peer",function(e,n){e.on("data",function(n){var r=Number(n.toString());r>100&&r<65536&&(e.destroy(),t({peer:{host:e.remoteAddress,port:r}}))})})})},e.hash=function(t){var n=r.createHash("sha256"),o=e.stringify(t);return n.update(o,"utf8").digest().toString("hex")},e.parse=function(t){var n=JSON.parse(t);return e.convertBase64ToBuffers(n)},e.getGCIFromGenesis=function(t){var n=r.createHash("sha256"),o=e.parse(t);o.genesis_time="";var s=e.stringify(o);return n.update(s,"utf8").digest().toString("hex")},e.deepClone=function(e,t){var n=Array.isArray(e)?[]:{};Object.assign(n,e);for(var r in n)n[r]=t(n[r]),"object"==typeof n[r]&&(n[r]=this.deepClone(n[r],t));return n},e.replace=function(t,n){for(var r in t)t[r]=n(t[r]),"object"!=typeof t[r]||Buffer.isBuffer(t[r])||e.replace(t[r],n);return t},e.stringify=function(t){var n=e.deepClone(t,e.bufferToBase64Replacer);return o(n)},e.bufferToBase64Replacer=function(e){return"object"==typeof e&&null!=e&&"Buffer"===e.type&&Array.isArray(e.data)&&(e=Buffer.from(e)),Buffer.isBuffer(e)?":base64:"+e.toString("base64"):e},e}();t.ulotionHelper=u},function(e,t){e.exports=require("crypto-browserify")},function(e,t){e.exports=require("json-stable-stringify")},function(e,t){e.exports=require("signalhub")},function(e,t){e.exports=require("webrtc-swarm")},function(e,t){e.exports=require("varstruct")},function(e,t){e.exports=require("wrtc")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("tendermint")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App={eth:{wshost:"wss://swap.altcoin.io:8550",contractAddress:"0xCe11e94E26D6fcB837F3E8a61C7c2e03523f4958",defaultWallet:"0xb483f5a8c6ebA74Dc1bcef9D167E6B86Caa4C773"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){function e(){}return e.mapAddressToEnum=function(e,t){if(t)for(var n in e[t])e[t].hasOwnProperty(n)&&(e[t][r.TokenMapping[n.toLowerCase()]]=e[t][n],delete e[t][n]);else for(var o in e)if(e.hasOwnProperty(o))for(var n in e[o])e[o].hasOwnProperty(n)&&(e[o][r.TokenMapping[n.toLowerCase()]]=e[o][n],delete e[o][n])},e}();t.StateHelper=o},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(i=2&n[0]?s.return:n[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(e){n=[6,e],s=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var s=n(20),i=function(){function e(e,t){this.path=t,this.dp=new s.DiffPatcher,this.state=this.dp.clone(e)}return e.prototype.diff=function(t){return r(this,void 0,void 0,function(){var n,r;return o(this,function(o){switch(o.label){case 0:return[4,t.refreshState(this.path)];case 1:return n=o.sent(),r=this.dp.diff(this.state,n),this.state=n,[2,e.patchToMergePatch(r)]}})})},e.isNumeric=function(e){return!e.toLowerCase().startsWith("0x")&&(!isNaN(parseFloat(e))&&isFinite(e))},e.isChildArray=function(t){for(var n in t)return e.isNumeric(n)},e.toObjType=function(t){return e.isChildArray(t)?[]:{}},e.handleValue=function(e){if(Array.isArray(e))return e.length>1?e[1]:e[0]},e.handleObj=function(t,n,r){if(Array.isArray(n))return void(r[t]=e.handleValue(n));var o=e.toObjType(n);Array.isArray(r)?r.push(o):r[t]=o,e.patchToMergePatch(n,o)},e.patchToMergePatch=function(t,n){for(var r in t)e.isNumeric(r)?(void 0===n&&(n=[]),"string"==typeof t[r]?n.push(t[r]):"object"==typeof t[r]?this.handleObj(r,t[r],n):Array.isArray(t[r])&&n.push(e.handleValue(t[r]))):(void 0===n&&(n=e.toObjType(t[r])),"string"==typeof t[r]?n[r]=t[r]:"object"==typeof t[r]?this.handleObj(r,t[r],n):Array.isArray(t[r])&&(n[r]=e.handleValue(t[r])));return n},e}();t.StateMergePatch=i},function(e,t){e.exports=require("jsondiffpatch")}]);
//# sourceMappingURL=index.js.map