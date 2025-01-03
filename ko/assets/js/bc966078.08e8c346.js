"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[700],{9092:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=l(4848),s=l(8453);const d={},t=void 0,c={id:"Vue.js/v-bind vs v-model",title:"v-bind vs v-model",description:"\uc791\uc131\uc77c : 2024.11.13",source:"@site/docs/07. Vue.js/079904. v-bind vs v-model.md",sourceDirName:"07. Vue.js",slug:"/Vue.js/v-bind vs v-model",permalink:"/zora_story/ko/docs/Vue.js/v-bind vs v-model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:79904,frontMatter:{},sidebar:"studySidebar",previous:{title:"Vue directive",permalink:"/zora_story/ko/docs/Vue.js/Vue directive"},next:{title:"v-text vs mustache syntax",permalink:"/zora_story/ko/docs/Vue.js/v-text vs mustache syntax"}},r={},o=[{value:"1. \ub370\uc774\ud130 \ud750\ub984",id:"1-\ub370\uc774\ud130-\ud750\ub984",level:2},{value:"v-bind",id:"v-bind",level:3},{value:"v-model",id:"v-model",level:3},{value:"2. \ub0b4\ubd80 \ub3d9\uc791 \ubc29\uc2dd",id:"2-\ub0b4\ubd80-\ub3d9\uc791-\ubc29\uc2dd",level:2},{value:"3. \uc0ac\uc6a9 \uc608\uc2dc\uc640 \ucc28\uc774\uc810",id:"3-\uc0ac\uc6a9-\uc608\uc2dc\uc640-\ucc28\uc774\uc810",level:2},{value:"4. \uac01\uac01 \uc5b8\uc81c \uc0ac\uc6a9\ud558\ub098\uc694?",id:"4-\uac01\uac01-\uc5b8\uc81c-\uc0ac\uc6a9\ud558\ub098\uc694",level:2},{value:"v-bind \uc0ac\uc6a9",id:"v-bind-\uc0ac\uc6a9",level:3},{value:"v-model \uc0ac\uc6a9",id:"v-model-\uc0ac\uc6a9",level:3},{value:"5. \uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc",id:"5-\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc",level:2},{value:"6. \uc8fc\uc758\uc0ac\ud56d",id:"6-\uc8fc\uc758\uc0ac\ud56d",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\uc791\uc131\uc77c : 2024.11.13"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-\ub370\uc774\ud130-\ud750\ub984",children:"1. \ub370\uc774\ud130 \ud750\ub984"}),"\n",(0,i.jsx)(n.h3,{id:"v-bind",children:"v-bind"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ubc14\uc778\ub529"}),"\n",(0,i.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8/\ub370\uc774\ud130 \u2192 \ud15c\ud50c\ub9bf(\ud654\uba74) \ubc29\ud5a5\uc73c\ub85c\ub9cc \ub3d9\uc791"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<input :value="message"> \x3c!-- message\uac00 \ubcc0\uacbd\ub418\uba74 input \uac12\uc774 \ubcc0\uacbd\ub428 --\x3e\n\x3c!-- \ud558\uc9c0\ub9cc input \uac12\uc744 \ubcc0\uacbd\ud574\ub3c4 message\ub294 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc74c --\x3e\n'})}),"\n",(0,i.jsx)(n.h3,{id:"v-model",children:"v-model"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc591\ubc29\ud5a5 \ub370\uc774\ud130 \ubc14\uc778\ub529"}),"\n",(0,i.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8/\ub370\uc774\ud130 \u2194 \ud15c\ud50c\ub9bf(\ud654\uba74) \uc591\ucabd\uc73c\ub85c \ub3d9\uc791"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<input v-model="message"> \x3c!-- message\uc640 input \uac12\uc774 \uc11c\ub85c \ub3d9\uae30\ud654\ub428 --\x3e\n'})}),"\n",(0,i.jsx)(n.h2,{id:"2-\ub0b4\ubd80-\ub3d9\uc791-\ubc29\uc2dd",children:"2. \ub0b4\ubd80 \ub3d9\uc791 \ubc29\uc2dd"}),"\n",(0,i.jsx)(n.p,{children:"v-model\uc740 \uc2e4\uc81c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 v-bind\uc640 v-on\uc758 \uc870\ud569\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\x3c!-- v-model\uc758 \ub0b4\ubd80 \ub3d9\uc791 --\x3e\n<input\n  v-model="message"\n>\n\n\x3c!-- \uc704 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \ub3d9\uc77c --\x3e\n<input\n  :value="message"\n  @input="message = $event.target.value"\n>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"3-\uc0ac\uc6a9-\uc608\uc2dc\uc640-\ucc28\uc774\uc810",children:"3. \uc0ac\uc6a9 \uc608\uc2dc\uc640 \ucc28\uc774\uc810"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\x3c!-- v-bind \uc0ac\uc6a9 \uc608\uc2dc --\x3e\n<img :src="imageUrl">         \x3c!-- \uc774\ubbf8\uc9c0 \uc18c\uc2a4 \ubc14\uc778\ub529 --\x3e\n<div :class="className">      \x3c!-- \ud074\ub798\uc2a4 \ubc14\uc778\ub529 --\x3e\n<button :disabled="isLoading"> \x3c!-- \uc18d\uc131 \ubc14\uc778\ub529 --\x3e\n\n\x3c!-- v-model \uc0ac\uc6a9 \uc608\uc2dc --\x3e\n<input v-model="username">    \x3c!-- \uc785\ub825 \ud544\ub4dc --\x3e\n<textarea v-model="content">  \x3c!-- \ud14d\uc2a4\ud2b8 \uc601\uc5ed --\x3e\n<select v-model="selected">   \x3c!-- \uc120\ud0dd \uc0c1\uc790 --\x3e\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4-\uac01\uac01-\uc5b8\uc81c-\uc0ac\uc6a9\ud558\ub098\uc694",children:"4. \uac01\uac01 \uc5b8\uc81c \uc0ac\uc6a9\ud558\ub098\uc694?"}),"\n",(0,i.jsx)(n.h3,{id:"v-bind-\uc0ac\uc6a9",children:"v-bind \uc0ac\uc6a9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTML \uc18d\uc131\uc744 \ub3d9\uc801\uc73c\ub85c \uc124\uc815\ud560 \ub54c"}),"\n",(0,i.jsx)(n.li,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc758 props\ub97c \uc804\ub2ec\ud560 \ub54c"}),"\n",(0,i.jsx)(n.li,{children:"CSS \ud074\ub798\uc2a4\ub098 \uc2a4\ud0c0\uc77c\uc744 \ub3d9\uc801\uc73c\ub85c \ubc14\uc778\ub529\ud560 \ub54c"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div :class="{ active: isActive }">\n<img :src="imageUrl">\n<CustomComponent :prop-name="propValue">\n'})}),"\n",(0,i.jsx)(n.h3,{id:"v-model-\uc0ac\uc6a9",children:"v-model \uc0ac\uc6a9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud3fc \uc785\ub825 \uc694\uc18c\uc640 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\ud560 \ub54c"}),"\n",(0,i.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790 \uc785\ub825\uc744 \uc9c1\uc811 \ub370\uc774\ud130\uc5d0 \ubc18\uc601\ud574\uc57c \ud560 \ub54c"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<input v-model="username">\n<select v-model="country">\n<textarea v-model="description">\n'})}),"\n",(0,i.jsx)(n.h2,{id:"5-\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc",children:"5. \uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<template>\n  <div class="form-group">\n    \x3c!-- v-bind \uc0ac\uc6a9 --\x3e\n    <img :src="profileImage">\n    <button :disabled="isSubmitting">\n      {{ isSubmitting ? \'Submitting...\' : \'Submit\' }}\n    </button>\n\n    \x3c!-- v-model \uc0ac\uc6a9 --\x3e\n    <input \n      v-model="formData.name"\n      :class="{ \'is-invalid\': errors.name }" \x3c!-- v-bind\ub85c \ud074\ub798\uc2a4 \uc870\uac74\ubd80 \uc801\uc6a9 --\x3e\n    >\n    <select v-model="formData.country">\n      <option v-for="country in countries" \n              :value="country.code" \x3c!-- v-bind\ub85c \ub3d9\uc801 \uac12 \uc124\uc815 --\x3e\n              :key="country.code">\n        {{ country.name }}\n      </option>\n    </select>\n  </div>\n</template>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"6-\uc8fc\uc758\uc0ac\ud56d",children:"6. \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"v-model\uc740 \ud3fc \uc694\uc18c\ub098 \uc0ac\uc6a9\uc790 \uc785\ub825 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\ub9cc \uc0ac\uc6a9"}),"\n",(0,i.jsx)(n.li,{children:"v-bind\ub294 \ubaa8\ub4e0 HTML \uc18d\uc131\uc774\ub098 \ucef4\ud3ec\ub10c\ud2b8 props\uc5d0 \uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,i.jsx)(n.li,{children:"v-model\uc740 .lazy, .number, .trim \uac19\uc740 \uc218\uc2dd\uc5b4 \uc0ac\uc6a9 \uac00\ub2a5"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<input v-model.lazy="message">    \x3c!-- change \uc774\ubca4\ud2b8 \ud6c4 \ub3d9\uae30\ud654 --\x3e\n<input v-model.number="age">      \x3c!-- \uc22b\uc790\ub85c \ud615\ubcc0\ud658 --\x3e\n<input v-model.trim="message">    \x3c!-- \uacf5\ubc31 \uc81c\uac70 --\x3e\n'})}),"\n",(0,i.jsx)(n.p,{children:"\uacb0\ub860\uc801\uc73c\ub85c, v-bind\ub294 \ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ubc14\uc778\ub529\uc744 \uc704\ud55c \ubc94\uc6a9\uc801\uc778 \ub514\ub809\ud2f0\ube0c\uc774\uace0, v-model\uc740 \ud3fc \uc785\ub825 \uc694\uc18c\uc5d0 \ud2b9\ud654\ub41c \uc591\ubc29\ud5a5 \ub370\uc774\ud130 \ubc14\uc778\ub529 \ub514\ub809\ud2f0\ube0c\uc785\ub2c8\ub2e4."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>c});var i=l(6540);const s={},d=i.createContext(s);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);