define("renderer/utils/storageAPI",["lodash","mobx"],function(e,t){"use strict";return{getStorage:function(){var r=t.observable.shallowMap();return{transaction:t.runInAction,set:function(e,t){r.set(e,t)},update:function(t,n){var u=r.get(t),o=e.defaults(n,u);return r.set(t,o),o},get:function(e){return r.get(e)},remove:function(e){return r.delete(e)},getAll:function(){return t.toJS(r)},clear:function(){r.clear()}}}}}),define("renderer",["renderer/utils/storageAPI"],function(e){"use strict";return{utils:{storageAPI:e}}});
//# sourceMappingURL=renderer.min.js.map