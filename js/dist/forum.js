(()=>{var t={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return t.d(n,{a:n}),n},d:(o,n)=>{for(var s in n)t.o(n,s)&&!t.o(o,s)&&Object.defineProperty(o,s,{enumerable:!0,get:n[s]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const n=flarum.core.compat["forum/app"];var s=t.n(n);const r=flarum.core.compat["common/Model"];var i=t.n(r);const e=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/utils/PostControls"];var l=t.n(a);const p=flarum.core.compat["common/components/Button"];var c=t.n(p);const u=flarum.core.compat["forum/components/CommentPost"];var f=t.n(u);function d(t,o){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},d(t,o)}function _(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,d(t,o)}const b=flarum.core.compat["common/components/Modal"];var h=t.n(b);const v=flarum.core.compat["common/utils/Stream"];var y=t.n(v),g=function(t){function o(){return t.apply(this,arguments)||this}_(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.newDiscussionTitle=y()("")},n.className=function(){return"SplitPostModal Modal--small"},n.title=function(){return s().translator.trans("fof-split.forum.modal.title")},n.content=function(){return[m("div",{className:"Modal-body"},[m("div",{className:"Form Form--centered"},[m("div",{className:"Form-group"},[m("label",{},s().translator.trans("fof-split.forum.modal.new_discussion_label")),m("input",{className:"FormControl",name:"new_discussion_title",bidi:this.newDiscussionTitle})]),m("div",{className:"Form-group"},[m(c(),{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.newDiscussionTitle()},s().translator.trans("fof-split.forum.modal.submit_button"))])])])]},n.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0;var n=new FormData;n.append("title",this.newDiscussionTitle()),n.append("start_post_id",s().__fof_split.splitController.startPostId),n.append("end_post_number",this.attrs.post.number()),s().request({method:"POST",url:s().forum.attribute("apiUrl")+"/split",serialize:function(t){return t},body:n}).then((function(t){var n={};n.id=y()(t.data.id),n.slug=y()(t.data.attributes.slug),n.startUser=y()(t.data.attributes.startUser),n.isUnread=y()(t.data.attributes.isUnread),s().__fof_split.splitController.reset(),o.hide(),m.route.set(s().route.discussion(n))}),this.loaded.bind(this))},o}(h()),w=function(){function t(){this.reset()}var o=t.prototype;return o.start=function(t,o){this.reset(),this.startPostId=t,app.__fof_split.splitting=!0,app.__fof_split.splittingFrom=o,m.redraw()},o.end=function(t){this.endPostNumber=t,app.__fof_split.splitting=!1},o.reset=function(){this.startPostId=null,this.endPostNumber=null,app.__fof_split.splitting=!1,app.__fof_split.splittingFrom=void 0},t}();const S=flarum.core.compat["common/components/EventPost"];var P=t.n(S);const N=flarum.core.compat["common/components/Link"];var B=t.n(N),C=function(t){function o(){return t.apply(this,arguments)||this}_(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-code-branch"},n.descriptionKey=function(){return this.attrs.post.content().toNew?"fof-split.forum.post.was_split_to":"fof-split.forum.post.was_split_from"},n.descriptionData=function(){return{count:this.attrs.post.content().count,target:m(B(),{className:"EventPost-Split-target",href:this.attrs.post.content().url},this.attrs.post.content().title)}},o}(P());s().initializers.add("fof-split",(function(t){window.app.__fof_split={splitting:!1,showSplitTos:{},splitController:null},window.app.__fof_split.splitController=new w,t.store.models.discussions.prototype.canSplit=i().attribute("canSplit"),t.postComponents.discussionSplit=C,(0,e.extend)(l(),"moderationControls",(function(t,o){var n=o.discussion();"comment"===o.contentType()&&n.canSplit()&&1!=o.number()&&(s().__fof_split.splitting||t.add("splitFrom",[m(c(),{icon:"fas fa-code-branch",className:"flagrow-split-startSplitButton",onclick:function(){s().__fof_split.splitController.start(o.id(),o.number())}},s().translator.trans("fof-split.forum.split.from"))]))})),(0,e.extend)(f().prototype,"oninit",(function(){this.subtree.check((function(){return s().__fof_split.splitting}))})),(0,e.extend)(f().prototype,"footerItems",(function(t){var o=this.attrs.post,n=o.discussion();"comment"===o.contentType()&&n.canSplit()&&1!==o.number()&&s().__fof_split.splitting&&o.number()>=s().__fof_split.splittingFrom&&t.add("splitTo",[m(c(),{icon:"fas fa-code-branch",className:"flagrow-split-endSplitButton Button Button--link",onclick:function(){s().modal.show(g,{post:o})}},s().translator.trans("fof-split.forum.split.to")),m(c(),{icon:"fas fa-times",className:"flagrow-split-cancelSplitButton Button Button--link",onclick:function(){s().__fof_split.splitController.reset(),m.redraw()}},s().translator.trans("fof-split.forum.split.cancel"))])}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map