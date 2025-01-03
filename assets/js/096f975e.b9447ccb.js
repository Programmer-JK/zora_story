"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[4604],{5700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>h,metadata:()=>p,toc:()=>r});var i=n(4848),a=n(8453);const h={},s=void 0,p={id:"\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/\uc6b0\uc120\uc21c\uc704\ud050/\uc6b0\uc120\uc21c\uc704 \ud050 \uc608\uc2dcJS",title:"\uc6b0\uc120\uc21c\uc704 \ud050 \uc608\uc2dcJS",description:"\uc791\uc131\uc77c : 2024.11.24",source:"@site/docs/20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200400. \uc6b0\uc120\uc21c\uc704\ud050/200401. \uc6b0\uc120\uc21c\uc704 \ud050 \uc608\uc2dcJS.md",sourceDirName:"20. \ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/200400. \uc6b0\uc120\uc21c\uc704\ud050",slug:"/\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/\uc6b0\uc120\uc21c\uc704\ud050/\uc6b0\uc120\uc21c\uc704 \ud050 \uc608\uc2dcJS",permalink:"/zora_story/docs/\ucf54\ub529\ud14c\uc2a4\ud2b8 \uc900\ube44/\uc6b0\uc120\uc21c\uc704\ud050/\uc6b0\uc120\uc21c\uc704 \ud050 \uc608\uc2dcJS",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200401,frontMatter:{},sidebar:"studySidebar",previous:{title:"\ud504\ub85c\uc138\uc2a4",permalink:"/zora_story/docs/process"},next:{title:"\ub354 \ub9f5\uac8c",permalink:"/zora_story/docs/more-spicy"}},l={},r=[{value:"minHeap",id:"minheap",level:3},{value:"maxHeap",id:"maxheap",level:3}];function o(t){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2024.11.24"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"minheap",children:"minHeap"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"class minHeap {\n\tconstructor() {\n\t\tthis.heap = [];\n\t}\n\tenqueue(v) {\n\t\tthis.heap.push(v);\n\t\tlet index = this.heap.length-1;\n\t\twhile(index>0){\n\t\t\tlet parentIndex = Math.floor((index-1)/2);\n\t\t\tif(this.heap[parentIndex] < this.heap[index]) break;\n\t\t\t[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];\n\t\t\tindex = parentIndex;\n\t\t}\n\t}\n\tdequeue() {\n\t\tif (this.heap.length === 1) return this.heap.pop();\n\t\tconst min = this.heap[0];\n\t\tthis.heap[0] = this.heap.pop();\n\t\tlet index = 0;\n\t\twhile(true) {\n\t\t\tlet small = index;\n\t\t\tlet left = index*2+1;\n\t\t\tlet right = index*2+2;\n\t\t\tif(left<this.heap.length && this.heap[left] < this.heap[small]){\n\t\t\t\tsmall = left;\n\t\t\t}\n\t\t\tif(right<this.heap.length && this.heap[right] < this.heap[small]) {\n\t\t\t\tsmall = right;\n\t\t\t}\n\t\t\tif(small == index) break;\n\t\t\t[this.heap[small], this.heap[index]] = [this.heap[index], this.heap[small]];\n\t\t\tindex = small;\n\t\t}\n\t\treturn min;\n\t}\n}\n\nfunction solution() {\n\tlet mHeap = new minHeap();\n\tmHeap.enqueue(1);\n\tconsole.log(mHeap.heap[0]);\n\tmHeap.dequeue();\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"maxheap",children:"maxHeap"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"class maxHeap {\n\tconstructor() {\n\t\tthis.heap = [];\n\t}\n\tenqueue(v) {\n\t\tthis.heap.push(v);\n\t\tlet index = this.heap.length-1;\n\t\twhile(index>0){\n\t\t\tlet parentIndex = Math.floor((index-1)/2);\n\t\t\tif(this.heap[parentIndex] > this.heap[index]) break;\n\t\t\t[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];\n\t\t\tindex = parentIndex;\n\t\t}\n\t}\n\tdequeue() {\n\t\tif (this.heap.length === 1) return this.heap.pop();\n\t\tconst max = this.heap[0];\n\t\tthis.heap[0] = this.heap.pop();\n\t\tlet index = 0;\n\t\twhile(true) {\n\t\t\tlet big = index;\n\t\t\tlet left = index*2+1;\n\t\t\tlet right = index*2+2;\n\t\t\tif(left<this.heap.length && this.heap[left] > this.heap[small]){\n\t\t\t\tbig = left;\n\t\t\t}\n\t\t\tif(right<this.heap.length && this.heap[right] < this.heap[small]) {\n\t\t\t\tbig = right;\n\t\t\t}\n\t\t\tif(big == index) break;\n\t\t\t[this.heap[big], this.heap[index]] = [this.heap[index], this.heap[big]];\n\t\t\tindex = big;\n\t\t}\n\t\treturn max;\n\t}\n}\n\nfunction solution() {\n\tlet mHeap = new maxHeap();\n\tmHeap.enqueue(1);\n\tconsole.log(mHeap.heap[0]);\n\tmHeap.dequeue();\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(o,{...t})}):o(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>p});var i=n(6540);const a={},h=i.createContext(a);function s(t){const e=i.useContext(h);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function p(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(h.Provider,{value:e},t.children)}}}]);