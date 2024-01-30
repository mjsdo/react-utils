import{j as n,a as o,F as a}from"./jsx-runtime-1H0H8r1V.js";import{M as s,b as t}from"./index-6r0ro9qP.js";import{C as d,B as p,R as l}from"./ComponentStack.stories-0KapGS_R.js";import{useMDXComponents as i}from"./index-RF8qTkjN.js";import"./index-FaLGlFNx.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-HNIkBU8F.js";import"../sb-preview/runtime.js";import"./index-gMreU1aJ.js";import"./index-ogXoivrg.js";import"./extends-dGVwEr9R.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function c(e){const r=Object.assign({h1:"h1",code:"code",p:"p",pre:"pre",h2:"h2",strong:"strong",hr:"hr",h3:"h3"},i(),e.components);return o(a,{children:[n(s,{of:d}),`
`,n(r.h1,{id:"component-stack",children:n(r.code,{children:"component-stack"})}),`
`,n(r.p,{children:"컴포넌트를 쌓기위한 컴포넌트"}),`
`,n("br",{}),`
`,n(r.h1,{id:"installation",children:"Installation"}),`
`,n(r.pre,{children:n(r.code,{className:"language-bash",children:`yarn add @mjsdo/react-component-stack
`})}),`
`,n(r.h1,{id:"usage",children:"Usage"}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`import {\r
  ComponentStack,\r
  ComponentStackProvider,\r
} from '@mjsdo/react-component-stack';\r
\r
<ComponentStackProvider>\r
  <ComponentStack stackKey="key1" />\r
  <ComponentStack stackKey="key2" />\r
</ComponentStackProvider>;
`})}),`
`,n(r.h1,{id:"examples",children:"Examples"}),`
`,n(r.h2,{id:"basic-example",children:"Basic Example"}),`
`,n(t,{of:p}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`// app.tsx\r
import {\r
  ComponentStackProvider,\r
  ComponentStack,\r
} from '@mjsdo/react-component-stack';\r
import { BasicExample } from './basic-example';\r
\r
const App = () => {\r
  return (\r
    <ComponentStackProvider>\r
      <BasicExample />\r
      <ComponentStack stackKey="basic" />\r
    </ComponentStackProvider>\r
  );\r
};\r
\r
// basic-example.tsx\r
import { useSetComponentStack } from '@mjsdo/react-component-stack';\r
\r
const BasicExample = () => {\r
  const { push, pop, remove } = useSetComponentStack();\r
  const onPush = () => {\r
    push('basic', {\r
      node: ({ id }) => (\r
        <div>\r
          Auto generated item id:\r
          <strong style={{ color: 'blue' }}>{id}</strong>\r
        </div>\r
      ),\r
    });\r
  };\r
  const onPop = () => {\r
    pop('basic');\r
  };\r
  const onRemove = () => {\r
    remove('basic', () => true);\r
  };\r
  return (\r
    <>\r
      <button type="button" onClick={onPush}>\r
        Push\r
      </button>\r
      <button type="button" onClick={onPop}>\r
        Pop\r
      </button>\r
      <button type="button" onClick={onRemove}>\r
        Remove first item\r
      </button>\r
    </>\r
  );\r
};
`})}),`
`,n(r.h2,{id:"dialog-stack-example",children:"Dialog Stack Example"}),`
`,n(t,{of:l}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`// app.tsx\r
import {\r
  ComponentStackProvider,\r
  ComponentStack,\r
} from '@mjsdo/react-component-stack';\r
import { Header } from './header';\r
\r
const App = () => {\r
  return (\r
    <ComponentStackProvider>\r
      <Header />\r
      <ComponentStack stackKey="dialog" />\r
    </ComponentStackProvider>\r
  );\r
};\r
\r
// header.tsx\r
import { useSetComponentStack } from '@mjsdo/react-component-stack';\r
\r
const Header = () => {\r
  const { push } = useSetComponentStack();\r
  const onClickOpen = () => {\r
    push('dialog', {\r
      /** id는 작성하지 않아도 자동으로 추가된다. */\r
      id: '123',\r
      node: <Dialog1 />,\r
    });\r
  };\r
\r
  return (\r
    <div>\r
      <button type="button" onClick={onClickOpen}>\r
        Open\r
      </button>\r
    </div>\r
  );\r
};\r
\r
const Dialog1 = () => {\r
  const { push, pop } = useSetComponentStack();\r
  const onClickOpen = () => {\r
    push('dialog', {\r
      /** \`node\`는 함수로 전달 가능 */\r
      node: ({ id, dismiss }) => <Dialog2 onClose={dismiss} />,\r
    });\r
  };\r
\r
  const onClickClose = () => {\r
    pop();\r
  };\r
\r
  return (\r
    <DialogRoot>\r
      <DialogOverlay />\r
      <DialogContent>\r
        <button type="button">Open</button>\r
        <button type="button" onClick={onClickClose}>\r
          X\r
        </button>\r
      </DialogContent>\r
    </DialogRoot>\r
  );\r
};\r
\r
const Dialog2 = ({ onClose }) => {\r
  return (\r
    <DialogRoot>\r
      <DialogOverlay />\r
      <DialogContent\r
        onPointerDownOutside={onClose}\r
        onEscapeKeyDown={onClose}\r
        //\r
      >\r
        <button type="button">Open</button>\r
        <button type="button" onClick={onClose}>\r
          X\r
        </button>\r
      </DialogContent>\r
    </DialogRoot>\r
  );\r
};
`})}),`
`,n(r.h1,{id:"api",children:"API"}),`
`,n(r.h2,{id:"componentstackprovider",children:n(r.code,{children:"ComponentStackProvider"})}),`
`,n(r.p,{children:n(r.strong,{children:"type: component"})}),`
`,o(r.p,{children:[n(r.code,{children:"ComponentStack"}),"과 ",n(r.code,{children:"useSetComponentStack"}),", ",n(r.code,{children:"useComponentStackValue"}),"를 사용하기 위한 context provider"]}),`
`,n(r.hr,{}),`
`,n(r.h2,{id:"componentstack",children:n(r.code,{children:"ComponentStack"})}),`
`,n(r.p,{children:n(r.strong,{children:"type: component"})}),`
`,o(r.p,{children:["스택에 있는 ",n(r.code,{children:"node"}),"를 순차적으로 렌더링하는 컴포넌트"]}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`\r
// abc키에 해당하는 스택의 상태가 다음과 같다면\r
stack = [\r
  { id: '1', node: <div>1</div> },\r
  { id: '2', node: <div>2</div> },\r
  { id: '3', node: ({ id, dismiss }) => <div>3</div> },\r
];\r
\r
<ComponentStack stackKey="abc" />\r
// 위 컴포넌트의 내부에는 다음 컴포넌트가 렌더링된다.\r
<div>1</div>\r
<div>2</div>\r
<div>3</div>\r

`})}),`
`,n(r.h2,{id:"usecomponentstackvalue",children:n(r.code,{children:"useComponentStackValue"})}),`
`,n(r.p,{children:n(r.strong,{children:"type: hook"})}),`
`,n(r.p,{children:"스택 상태를 반환하는 커스텀 훅."}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`import { useComponentStackValue } from '@mjsdo/react-component-stack';\r
\r
const stack = useComponentStackValue('stackKey');
`})}),`
`,n(r.h2,{id:"usesetcomponentstack",children:n(r.code,{children:"useSetComponentStack"})}),`
`,n(r.p,{children:n(r.strong,{children:"type: hook"})}),`
`,n(r.p,{children:"스택 상태를 업데이트하기 위한 커스텀 훅"}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`import { useSetComponentStack } from '@mjsdo/react-component-stack';\r
\r
const { push, pop, remove } = useSetComponentStack();
`})}),`
`,n(r.h3,{id:"push",children:"push"}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:`push('stackKey', {\r
  id: '1',\r
  node: <div>1</div>,\r
});\r
\r
// id를 넣지 않아도 자동생성\r
push('stackKey', {\r
  node: <div>1</div>,\r
});\r
\r
// \`dismiss\`는 현재 \`push\`하려는 아이템을 제거하는 함수\r
push('stackKey', {\r
  node: ({ id, dismiss }) => <div>1</div>,\r
});
`})}),`
`,n(r.h3,{id:"pop",children:"pop"}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:"// `stackKey`에 해당하는 스택에서 가장 마지막에 `push`한 아이템을 제거\r\npop('stackKey');\n"})}),`
`,n(r.h3,{id:"remove",children:"remove"}),`
`,n(r.pre,{children:n(r.code,{className:"language-tsx",children:"// `stackKey`에 해당하는 스택에서 조건에 맞는 아이템중 가장 일찍 `push`했던 아이템을 제거\r\n// 동일한 조건을 만족하는 아이템이 여러개 있어도 1개만 제거된다.\r\nremove('stackKey', ({ id, node }) => id === '1');\n"})})]})}function P(e={}){const{wrapper:r}=Object.assign({},i(),e.components);return r?n(r,Object.assign({},e,{children:n(c,e)})):c(e)}export{P as default};
