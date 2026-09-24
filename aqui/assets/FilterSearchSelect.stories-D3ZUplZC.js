import{j as a}from"./jsx-runtime-CZKlwcdY.js";import{r as S}from"./iframe-CSekhjSN.js";import{N as V}from"./NlpTemplate-L5ICoZ4t.js";import{F as h}from"./FilterSearchSelect-DReQoi61.js";import"./preload-helper-PPVm8Dsz.js";import"./TransitionGroupContext-CS5HH7Oy.js";import"./componentUtils-Dqv3Gy2-.js";import"./itemDisplay-DHq_bxJ3.js";import"./usePressable-DB1vvww8.js";import"./NotAllowedIcon-DiOl7qXs.js";import"./SvgIcon-C6Fh5DR_.js";import"./ChevronIcon-DfmtNDVn.js";import"./proptypes-BlPj3HbU.js";import"./MagnifyingGlassIcon-DE7iH-zM.js";import"./CrossMarkIcon-CMbvLzNu.js";import"./FilterLabel-OtIO6kQx.js";import"./misc-B0FWEJCq.js";import"./useLabelOverflow-BBCkDV9_.js";import"./Typography-BPXLuOlB.js";import"./tooltip.module-9P05mvUM.js";import"./Tooltip-CScAvdBU.js";import"./Portal-npT7yPjR.js";import"./index-B-CdHhOL.js";import"./index-idIgizf9.js";import"./Menu-C-UqFCms.js";import"./useRovingTabIndex-BtYtFDFM.js";import"./MenuHeader-CLMt5MXO.js";import"./MenuTitle-C8qhWp0I.js";import"./SearchInput-CY4iSzRu.js";import"./TextInput-DqGWdotQ.js";import"./ClearButton-IcFpFC4y.js";import"./Pressable-CkN3RDiV.js";import"./index-CCcWEIYt.js";import"./Popover-B9vldM4s.js";import"./Modal-635qVXxQ.js";import"./Tag-CgsDVuqq.js";import"./Filters.module-BpzpJgFB.js";const se={title:"Filter Search Select",component:h},l=V(({value:e=null,...r})=>{const[t,d]=S.useState(e);return a.jsx(h,{...r,value:t,onChange:d})}),m=["Atlas 500","Atlas 700","Beacon X1","Beacon X2","Cobalt 12","Cobalt 14","Delta Pro","Delta Lite"],s=l.bind({});s.args={variant:"boxed",label:"model",items:m};const n=l.bind({});n.args={variant:"boxed",label:"model",items:m,value:"Beacon X1",withClearButton:!0,clearLabel:"Clear model"};const i=l.bind({});i.args={variant:"pill",label:"model",items:m,maxItemsToShow:3};const o=l.bind({});o.args={variant:"pill",label:"model",items:m.slice(0,3),withSearch:!1};const p=l.bind({});p.args={variant:"boxed",label:"model",required:!0,items:[{value:"Atlas 500",tooltip:"Discontinued in 2024"},{value:"Atlas 700"},{value:"Beacon X1",disabled:!0,tooltip:"Not licensed"}]};const u=l.bind({});u.args={variant:"boxed",label:"file type",items:[{value:"pdf",display:"PDF"},{value:"doc",display:"Word"},{value:"xls",display:"Excel"},{value:"ppt",display:"PowerPoint"}],value:"pdf",withClearButton:!0};const b=["plain","boxed","pill"],x={justifyItems:"start",display:"grid",gridTemplateColumns:"auto repeat(2, minmax(0, 200px))",gap:16,alignItems:"center"},v=e=>({fontSize:11,opacity:.6,color:e?"#fff":"#050f29"}),g=({initialValue:e=null,...r})=>{const[t,d]=S.useState(e);return a.jsx(h,{...r,value:t,onChange:d})},C=V(({dark:e,...r})=>a.jsxs("div",{style:x,children:[a.jsx("span",{}),a.jsx("span",{style:v(e),children:"empty"}),a.jsx("span",{style:v(e),children:"selected"}),b.map(t=>a.jsxs(S.Fragment,{children:[a.jsx("span",{style:v(e),children:t}),a.jsx(g,{...r,dark:e,variant:t,label:"model"}),a.jsx(g,{...r,dark:e,variant:t,label:"model",initialValue:"Beacon X1"})]},t))]})),c=C.bind({});c.args={items:m};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`NlpTemplate(({
  dark,
  ...args
}) => <div style={showcaseGrid}>
        <span />
        <span style={showcaseCaption(dark)}>empty</span>
        <span style={showcaseCaption(dark)}>selected</span>
        {VARIANTS.map(variant => <Fragment key={variant}>
                <span style={showcaseCaption(dark)}>{variant}</span>
                <ShowcaseSelect {...args} dark={dark} variant={variant} label='model' />
                <ShowcaseSelect {...args} dark={dark} variant={variant} label='model' initialValue='Beacon X1' />
            </Fragment>)}
    </div>)`,...c.parameters?.docs?.source}}};const ne=["Default","WithClearButton","Capped","WithoutSearch","RequiredWithItemDetail","WithDisplayValues","AllVariants"];export{c as AllVariants,i as Capped,s as Default,p as RequiredWithItemDetail,n as WithClearButton,u as WithDisplayValues,o as WithoutSearch,ne as __namedExportsOrder,se as default};
