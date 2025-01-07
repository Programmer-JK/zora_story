"use strict";(self.webpackChunkjk_story=self.webpackChunkjk_story||[]).push([[9346],{5796:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(4848),i=t(8453);const s={slug:"/gof_design_pattern"},l=void 0,c={id:"\uac1c\ubc1c\uc9c0\uc2dd/GoF (Gang of Four) \ub514\uc790\uc778 \ud328\ud134",title:"GoF (Gang of Four) \ub514\uc790\uc778 \ud328\ud134",description:"\uc791\uc131\uc77c : 2025.01.07",source:"@site/docs/21. \uac1c\ubc1c\uc9c0\uc2dd/219904. GoF (Gang of Four) \ub514\uc790\uc778 \ud328\ud134.md",sourceDirName:"21. \uac1c\ubc1c\uc9c0\uc2dd",slug:"/gof_design_pattern",permalink:"/zora_story/docs/gof_design_pattern",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:219904,frontMatter:{slug:"/gof_design_pattern"},sidebar:"studySidebar",previous:{title:"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc758 \ud070 \uc9c8\ubb38\ub4e4\uc5d0 \ub300\ud55c \uacb8\uc190\ud55c \uc0dd\uac01",permalink:"/zora_story/docs/\uac1c\ubc1c\uc9c0\uc2dd/\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc758 \ud070 \uc9c8\ubb38\ub4e4\uc5d0 \ub300\ud55c \uacb8\uc190\ud55c \uc0dd\uac01"}},o={},a=[{value:"1. \uc0dd\uc131 \ud328\ud134 (Creational Patterns)",id:"1-\uc0dd\uc131-\ud328\ud134-creational-patterns",level:2},{value:"1.1 \uc2f1\uae00\ud1a4 \ud328\ud134 (Singleton)",id:"11-\uc2f1\uae00\ud1a4-\ud328\ud134-singleton",level:3},{value:"1.2 \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134 (Abstract Factory)",id:"12-\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134-abstract-factory",level:3},{value:"1.3 \ube4c\ub354 \ud328\ud134 (Builder)",id:"13-\ube4c\ub354-\ud328\ud134-builder",level:3},{value:"1.4 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 (Prototype)",id:"14-\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-prototype",level:3},{value:"1.5 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134 (Factory Method)",id:"15-\ud329\ud1a0\ub9ac-\uba54\uc11c\ub4dc-\ud328\ud134-factory-method",level:3},{value:"2. \uad6c\uc870 \ud328\ud134 (Structural Patterns)",id:"2-\uad6c\uc870-\ud328\ud134-structural-patterns",level:2},{value:"2.1 \uc5b4\ub311\ud130 \ud328\ud134 (Adapter)",id:"21-\uc5b4\ub311\ud130-\ud328\ud134-adapter",level:3},{value:"2.2 \ube0c\ub9ac\uc9c0 \ud328\ud134 (Bridge)",id:"22-\ube0c\ub9ac\uc9c0-\ud328\ud134-bridge",level:3},{value:"2.3 \ucef4\ud3ec\uc9c0\ud2b8 \ud328\ud134 (Composite)",id:"23-\ucef4\ud3ec\uc9c0\ud2b8-\ud328\ud134-composite",level:3},{value:"2.4 \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134 (Decorator)",id:"24-\ub370\ucf54\ub808\uc774\ud130-\ud328\ud134-decorator",level:3},{value:"2.5 \ud37c\uc0ac\ub4dc \ud328\ud134 (Facade)",id:"25-\ud37c\uc0ac\ub4dc-\ud328\ud134-facade",level:3},{value:"3. \ud589\uc704 \ud328\ud134 (Behavioral Patterns)",id:"3-\ud589\uc704-\ud328\ud134-behavioral-patterns",level:2},{value:"3.1 \ucc45\uc784 \uc5f0\uc1c4 \ud328\ud134 (Chain of Responsibility)",id:"31-\ucc45\uc784-\uc5f0\uc1c4-\ud328\ud134-chain-of-responsibility",level:3},{value:"3.2 \ucee4\ub9e8\ub4dc \ud328\ud134 (Command)",id:"32-\ucee4\ub9e8\ub4dc-\ud328\ud134-command",level:3},{value:"3.3 \uc778\ud130\ud504\ub9ac\ud130 \ud328\ud134 (Interpreter)",id:"33-\uc778\ud130\ud504\ub9ac\ud130-\ud328\ud134-interpreter",level:3},{value:"3.4 \ubc18\ubcf5\uc790 \ud328\ud134 (Iterator)",id:"34-\ubc18\ubcf5\uc790-\ud328\ud134-iterator",level:3},{value:"3.5 \uc911\uc7ac\uc790 \ud328\ud134 (Mediator)",id:"35-\uc911\uc7ac\uc790-\ud328\ud134-mediator",level:3},{value:"3.6 \uba54\uba58\ud1a0 \ud328\ud134 (Memento)",id:"36-\uba54\uba58\ud1a0-\ud328\ud134-memento",level:3},{value:"3.7 \uc635\uc800\ubc84 \ud328\ud134 (Observer)",id:"37-\uc635\uc800\ubc84-\ud328\ud134-observer",level:3},{value:"3.8 \uc0c1\ud0dc \ud328\ud134 (State)",id:"38-\uc0c1\ud0dc-\ud328\ud134-state",level:3},{value:"3.9 \uc804\ub7b5 \ud328\ud134 (Strategy)",id:"39-\uc804\ub7b5-\ud328\ud134-strategy",level:3},{value:"3.10 \ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc \ud328\ud134 (Template Method)",id:"310-\ud15c\ud50c\ub9bf-\uba54\uc11c\ub4dc-\ud328\ud134-template-method",level:3},{value:"3.11 \ubc29\ubb38\uc790 \ud328\ud134 (Visitor)",id:"311-\ubc29\ubb38\uc790-\ud328\ud134-visitor",level:3}];function d(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\uc791\uc131\uc77c : 2025.01.07"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1-\uc0dd\uc131-\ud328\ud134-creational-patterns",children:"1. \uc0dd\uc131 \ud328\ud134 (Creational Patterns)"}),"\n",(0,r.jsx)(e.h3,{id:"11-\uc2f1\uae00\ud1a4-\ud328\ud134-singleton",children:"1.1 \uc2f1\uae00\ud1a4 \ud328\ud134 (Singleton)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class Singleton {\n    private static volatile Singleton instance;\n    private Singleton() {}\n    \n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0 \uad00\ub9ac, \ub85c\uae45, \ud658\uacbd\uc124\uc815 \ub4f1"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ub9ac\uc18c\uc2a4 \uc808\uc57d, \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac \uc6a9\uc774"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \uc5b4\ub824\uc6c0, \uc804\uc5ed \uc0c1\ud0dc\ub85c \uc778\ud55c \ubcf5\uc7a1\uc131"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"12-\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134-abstract-factory",children:"1.2 \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134 (Abstract Factory)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface GUIFactory {\n    Button createButton();\n    Checkbox createCheckbox();\n}\n\npublic class WindowsFactory implements GUIFactory {\n    public Button createButton() { return new WindowsButton(); }\n    public Checkbox createCheckbox() { return new WindowsCheckbox(); }\n}\n\npublic class MacFactory implements GUIFactory {\n    public Button createButton() { return new MacButton(); }\n    public Checkbox createCheckbox() { return new MacCheckbox(); }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ud06c\ub85c\uc2a4 \ud50c\ub7ab\ud3fc UI \ucef4\ud3ec\ub10c\ud2b8, DB \uc5f0\uacb0 \uad00\ub9ac\uc790"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc81c\ud488\uad70 \uc77c\uad00\uc131 \ubcf4\uc7a5, \uad6c\uccb4\uc801 \ud074\ub798\uc2a4 \ubd84\ub9ac"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc0c8\ub85c\uc6b4 \uc81c\ud488 \ucd94\uac00 \uc2dc \uc778\ud130\ud398\uc774\uc2a4 \uc218\uc815 \ud544\uc694"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"13-\ube4c\ub354-\ud328\ud134-builder",children:"1.3 \ube4c\ub354 \ud328\ud134 (Builder)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class Computer {\n    private String CPU;\n    private String RAM;\n    private String storage;\n    \n    public static class Builder {\n        private Computer computer = new Computer();\n        \n        public Builder CPU(String cpu) {\n            computer.CPU = cpu;\n            return this;\n        }\n        \n        public Builder RAM(String ram) {\n            computer.RAM = ram;\n            return this;\n        }\n        \n        public Builder storage(String storage) {\n            computer.storage = storage;\n            return this;\n        }\n        \n        public Computer build() {\n            return computer;\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ubcf5\uc7a1\ud55c \uac1d\uccb4\uc758 \ub2e8\uacc4\ubcc4 \uc0dd\uc131"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uac1d\uccb4 \uc0dd\uc131 \uacfc\uc815\uc758 \uc720\uc5f0\ud55c \ubcc0\uacbd \uac00\ub2a5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ucf54\ub4dc \ubcf5\uc7a1\uc131 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"14-\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-prototype",children:"1.4 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 (Prototype)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Cloneable {\n    Cloneable clone();\n}\n\npublic class ConcretePrototype implements Cloneable {\n    private String field;\n    \n    public Cloneable clone() {\n        ConcretePrototype clone = new ConcretePrototype();\n        clone.field = this.field;\n        return clone;\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uac1d\uccb4 \ubcf5\uc0ac\uac00 \uc0dd\uc131\ubcf4\ub2e4 \ud6a8\uc728\uc801\uc77c \ub54c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ubcf5\uc7a1\ud55c \uac1d\uccb4 \uc0dd\uc131 \ube44\uc6a9 \uac10\uc18c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc21c\ud658 \ucc38\uc870 \ucc98\ub9ac \ud544\uc694"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"15-\ud329\ud1a0\ub9ac-\uba54\uc11c\ub4dc-\ud328\ud134-factory-method",children:"1.5 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134 (Factory Method)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public abstract class Creator {\n    abstract Product factoryMethod();\n    \n    public void anOperation() {\n        Product product = factoryMethod();\n        product.operation();\n    }\n}\n\npublic class ConcreteCreator extends Creator {\n    public Product factoryMethod() {\n        return new ConcreteProduct();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c\uc758 \uac1d\uccb4 \uc0dd\uc131"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uac1d\uccb4 \uc0dd\uc131\uc758 \uc720\uc5f0\uc131 \uc81c\uacf5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ud074\ub798\uc2a4 \uc218 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"2-\uad6c\uc870-\ud328\ud134-structural-patterns",children:"2. \uad6c\uc870 \ud328\ud134 (Structural Patterns)"}),"\n",(0,r.jsx)(e.h3,{id:"21-\uc5b4\ub311\ud130-\ud328\ud134-adapter",children:"2.1 \uc5b4\ub311\ud130 \ud328\ud134 (Adapter)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Target {\n    void request();\n}\n\npublic class Adapter implements Target {\n    private Adaptee adaptee;\n    \n    public Adapter(Adaptee adaptee) {\n        this.adaptee = adaptee;\n    }\n    \n    public void request() {\n        adaptee.specificRequest();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac \ud1b5\ud569, \ub808\uac70\uc2dc \uc2dc\uc2a4\ud15c \uc5f0\ub3d9"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ud638\ud658\uc131 \ubb38\uc81c \ud574\uacb0"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ucd94\uac00 \ucf54\ub4dc \uc791\uc131 \ud544\uc694"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"22-\ube0c\ub9ac\uc9c0-\ud328\ud134-bridge",children:"2.2 \ube0c\ub9ac\uc9c0 \ud328\ud134 (Bridge)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public abstract class Abstraction {\n    protected Implementor implementor;\n    \n    public Abstraction(Implementor implementor) {\n        this.implementor = implementor;\n    }\n    \n    abstract public void operation();\n}\n\npublic interface Implementor {\n    void operationImpl();\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ud50c\ub7ab\ud3fc \ub3c5\ub9bd\uc801\uc778 GUI"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ucd94\uc0c1\ud654\uc640 \uad6c\ud604\uc758 \ubd84\ub9ac"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ubcf5\uc7a1\uc131 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"23-\ucef4\ud3ec\uc9c0\ud2b8-\ud328\ud134-composite",children:"2.3 \ucef4\ud3ec\uc9c0\ud2b8 \ud328\ud134 (Composite)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public abstract class Component {\n    protected String name;\n    \n    public Component(String name) {\n        this.name = name;\n    }\n    \n    abstract public void operation();\n}\n\npublic class Composite extends Component {\n    private List<Component> children = new ArrayList<>();\n    \n    public void add(Component component) {\n        children.add(component);\n    }\n    \n    public void operation() {\n        for (Component child : children) {\n            child.operation();\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ud30c\uc77c \uc2dc\uc2a4\ud15c, GUI \ucef4\ud3ec\ub10c\ud2b8"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ubcf5\uc7a1\ud55c \ud2b8\ub9ac \uad6c\uc870 \ub2e8\uc21c\ud654"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc124\uacc4\uc758 \uc77c\ubc18\ud654\ub85c \uc81c\uc57d\uc0ac\ud56d \uc124\uc815 \uc5b4\ub824\uc6c0"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"24-\ub370\ucf54\ub808\uc774\ud130-\ud328\ud134-decorator",children:"2.4 \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134 (Decorator)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public abstract class Decorator implements Component {\n    protected Component component;\n    \n    public Decorator(Component component) {\n        this.component = component;\n    }\n    \n    public void operation() {\n        component.operation();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": I/O \uc2a4\ud2b8\ub9bc, UI \ucef4\ud3ec\ub10c\ud2b8 \uae30\ub2a5 \ud655\uc7a5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ub3d9\uc801\uc778 \uae30\ub2a5 \ucd94\uac00 \uac00\ub2a5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc791\uc740 \uac1d\uccb4\uac00 \ub9ce\uc774 \uc0dd\uc131\ub420 \uc218 \uc788\uc74c"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"25-\ud37c\uc0ac\ub4dc-\ud328\ud134-facade",children:"2.5 \ud37c\uc0ac\ub4dc \ud328\ud134 (Facade)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class Facade {\n    private SubsystemA subsystemA;\n    private SubsystemB subsystemB;\n    \n    public Facade() {\n        subsystemA = new SubsystemA();\n        subsystemB = new SubsystemB();\n    }\n    \n    public void operation() {\n        subsystemA.operationA();\n        subsystemB.operationB();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ubcf5\uc7a1\ud55c \uc11c\ube0c\uc2dc\uc2a4\ud15c \ub2e8\uc21c\ud654"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc2dc\uc2a4\ud15c \ubcf5\uc7a1\ub3c4 \uac10\uc18c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ud37c\uc0ac\ub4dc\uac00 \ubcd1\ubaa9\uc810\uc774 \ub420 \uc218 \uc788\uc74c"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"3-\ud589\uc704-\ud328\ud134-behavioral-patterns",children:"3. \ud589\uc704 \ud328\ud134 (Behavioral Patterns)"}),"\n",(0,r.jsx)(e.h3,{id:"31-\ucc45\uc784-\uc5f0\uc1c4-\ud328\ud134-chain-of-responsibility",children:"3.1 \ucc45\uc784 \uc5f0\uc1c4 \ud328\ud134 (Chain of Responsibility)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public abstract class Handler {\n    protected Handler successor;\n    \n    public void setSuccessor(Handler successor) {\n        this.successor = successor;\n    }\n    \n    public abstract void handleRequest(Request request);\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uc774\ubca4\ud2b8 \ucc98\ub9ac, \ub85c\uae45 \uc2dc\uc2a4\ud15c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc694\uccad \ucc98\ub9ac\uc758 \uc720\uc5f0\uc131 \uc99d\uac00"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ucc98\ub9ac \uacbd\ub85c \ucd94\uc801 \uc5b4\ub824\uc6c0"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"32-\ucee4\ub9e8\ub4dc-\ud328\ud134-command",children:"3.2 \ucee4\ub9e8\ub4dc \ud328\ud134 (Command)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Command {\n    void execute();\n}\n\npublic class ConcreteCommand implements Command {\n    private Receiver receiver;\n    \n    public void execute() {\n        receiver.action();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uc791\uc5c5 \ud050, \ud2b8\ub79c\uc7ad\uc158"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc791\uc5c5\uc758 \ucea1\uc290\ud654, Undo/Redo \uad6c\ud604 \uc6a9\uc774"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uba85\ub839\ub2f9 \ud074\ub798\uc2a4 \ud544\uc694"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"33-\uc778\ud130\ud504\ub9ac\ud130-\ud328\ud134-interpreter",children:"3.3 \uc778\ud130\ud504\ub9ac\ud130 \ud328\ud134 (Interpreter)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Expression {\n    boolean interpret(String context);\n}\n\npublic class TerminalExpression implements Expression {\n    private String data;\n    \n    public boolean interpret(String context) {\n        return context.contains(data);\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ud30c\uc11c, \uc218\uc2dd \uacc4\uc0b0\uae30"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ubb38\ubc95 \uaddc\uce59 \ucd94\uac00/\uc218\uc815 \uc6a9\uc774"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ubcf5\uc7a1\ud55c \ubb38\ubc95\uc5d0\uc11c \ud074\ub798\uc2a4 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"34-\ubc18\ubcf5\uc790-\ud328\ud134-iterator",children:"3.4 \ubc18\ubcf5\uc790 \ud328\ud134 (Iterator)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Iterator {\n    boolean hasNext();\n    Object next();\n}\n\npublic class ConcreteIterator implements Iterator {\n    private List<Object> list;\n    private int index;\n    \n    public boolean hasNext() {\n        return index < list.size();\n    }\n    \n    public Object next() {\n        if (hasNext()) {\n            return list.get(index++);\n        }\n        return null;\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uceec\ub809\uc158 \uc21c\ud68c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc77c\uad00\ub41c \uc21c\ud68c \ubc29\ubc95 \uc81c\uacf5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uac04\ub2e8\ud55c \uc21c\ud68c\uc5d0\ub3c4 \ud074\ub798\uc2a4 \ud544\uc694"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"35-\uc911\uc7ac\uc790-\ud328\ud134-mediator",children:"3.5 \uc911\uc7ac\uc790 \ud328\ud134 (Mediator)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Mediator {\n    void notify(Component sender, String event);\n}\n\npublic class ConcreteMediator implements Mediator {\n    private Component1 component1;\n    private Component2 component2;\n    \n    public void notify(Component sender, String event) {\n        if (sender == component1) {\n            component2.receive(event);\n        } else {\n            component1.receive(event);\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": GUI \ucef4\ud3ec\ub10c\ud2b8 \uac04 \ud1b5\uc2e0"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ucef4\ud3ec\ub10c\ud2b8 \uac04 \uacb0\ud569\ub3c4 \uac10\uc18c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc911\uc7ac\uc790 \ubcf5\uc7a1\ub3c4 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"36-\uba54\uba58\ud1a0-\ud328\ud134-memento",children:"3.6 \uba54\uba58\ud1a0 \ud328\ud134 (Memento)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class Memento {\n    private String state;\n    \n    public Memento(String state) {\n        this.state = state;\n    }\n    \n    public String getState() {\n        return state;\n    }\n}\n\npublic class Originator {\n    private String state;\n    \n    public Memento saveToMemento() {\n        return new Memento(state);\n    }\n    \n    public void restoreFromMemento(Memento memento) {\n        state = memento.getState();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uc2e4\ud589 \ucde8\uc18c \uae30\ub2a5"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc0c1\ud0dc \uc800\uc7a5\uacfc \ubcf5\uc6d0 \uc6a9\uc774"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"37-\uc635\uc800\ubc84-\ud328\ud134-observer",children:"3.7 \uc635\uc800\ubc84 \ud328\ud134 (Observer)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc55e\uc11c \uc124\uba85\ub4dc\ub9b0 \ub0b4\uc6a9\uacfc \ub3d9\uc77c"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"38-\uc0c1\ud0dc-\ud328\ud134-state",children:"3.8 \uc0c1\ud0dc \ud328\ud134 (State)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface State {\n    void handle(Context context);\n}\n\npublic class Context {\n    private State state;\n    \n    public void setState(State state) {\n        this.state = state;\n    }\n    \n    public void request() {\n        state.handle(this);\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uad00\ub9ac"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc0c1\ud0dc \uc804\uc774 \uba85\ud655\ud654"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc0c1\ud0dc \ud074\ub798\uc2a4 \uc218 \uc99d\uac00"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"39-\uc804\ub7b5-\ud328\ud134-strategy",children:"3.9 \uc804\ub7b5 \ud328\ud134 (Strategy)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Strategy {\n    void execute();\n}\n\npublic class Context {\n    private Strategy strategy;\n    \n    public void setStrategy(Strategy strategy) {\n        this.strategy = strategy;\n    }\n    \n    public void executeStrategy() {\n        strategy.execute();\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \uc54c\uace0\ub9ac\uc998 \uc120\ud0dd/\uad50\uccb4"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc54c\uace0\ub9ac\uc998 \uad50\uccb4 \uc6a9\uc774"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc804\ub7b5\uc744 \uc54c\uc544\uc57c \ud568"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"310-\ud15c\ud50c\ub9bf-\uba54\uc11c\ub4dc-\ud328\ud134-template-method",children:"3.10 \ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc \ud328\ud134 (Template Method)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public abstract class AbstractClass {\n    public final void templateMethod() {\n        operation1();\n        operation2();\n        hook();\n    }\n    \n    abstract void operation1();\n    abstract void operation2();\n    \n    void hook() {} // \uc120\ud0dd\uc801 \uc624\ubc84\ub77c\uc774\ub4dc\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ud504\ub808\uc784\uc6cc\ud06c \uac1c\ubc1c"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc131 \uc99d\uac00"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc0c1\uc18d\uc744 \ud1b5\ud55c \uae30\ub2a5 \ud655\uc7a5"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"311-\ubc29\ubb38\uc790-\ud328\ud134-visitor",children:"3.11 \ubc29\ubb38\uc790 \ud328\ud134 (Visitor)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Visitor {\n    void visit(ElementA element);\n    void visit(ElementB element);\n}\n\npublic interface Element {\n    void accept(Visitor visitor);\n}\n\npublic class ConcreteElement implements Element {\n    public void accept(Visitor visitor) {\n        visitor.visit(this);\n    }\n}\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc0ac\uc6a9 \uc0ac\ub840"}),": \ubcf5\uc7a1\ud55c \uac1d\uccb4 \uad6c\uc870\uc5d0\uc11c\uc758 \uc5f0\uc0b0"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\uc7a5\uc810"}),": \uc0c8\ub85c\uc6b4 \uc5f0\uc0b0 \ucd94\uac00 \uc6a9\uc774"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\ub2e8\uc810"}),": \uc694\uc18c \ud074\ub798\uc2a4 \uc218\uc815 \ud544\uc694"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(6540);const i={},s=r.createContext(i);function l(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);