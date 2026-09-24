import{j as a}from"./jsx-runtime-B9HUrbtJ.js";import{r as S}from"./iframe-0Pi9x1t8.js";import{N as V}from"./NlpTemplate-DdPUGhoA.js";import{F as h}from"./FilterSearchSelect-CEbsKCl-.js";import"./preload-helper-PPVm8Dsz.js";import"./TransitionGroupContext---YsntQ1.js";import"./componentUtils-BgCzXZKQ.js";import"./itemDisplay-C3owMFJ5.js";import"./usePressable-DRKzOCK3.js";import"./NotAllowedIcon-k77Ncvsa.js";import"./SvgIcon-C2NUCQdV.js";import"./ChevronIcon-RCvnGFUh.js";import"./proptypes-DzYqZqkS.js";import"./MagnifyingGlassIcon-D63Cne9U.js";import"./CrossMarkIcon-C56yPa1L.js";import"./FilterLabel-DHo1pbYS.js";import"./misc-B0FWEJCq.js";import"./useLabelOverflow-0zIx9HOm.js";import"./Typography-D-RwRrQT.js";import"./tooltip.module-9P05mvUM.js";import"./Tooltip-CWeth8qd.js";import"./Portal-DLhF37vk.js";import"./index-CICx2nDc.js";import"./index-BhFzGAKQ.js";import"./Menu-BJGATwG9.js";import"./useRovingTabIndex-COzGQPYn.js";import"./MenuHeader-ziTCy6Ft.js";import"./MenuTitle-BewpELB7.js";import"./SearchInput-B6jVLEaW.js";import"./TextInput-B2Qt4q4U.js";import"./ClearButton-JE4ljZbO.js";import"./Pressable-CGiDb8LI.js";import"./index-Ci1KLwO4.js";import"./Popover-uZVL_DW6.js";import"./Modal-DxJUbFPe.js";import"./Tag-CnLuguwg.js";import"./Filters.module-B4F5OPrk.js";const se={title:"Filter Search Select",component:h},l=V(({value:e=null,...r})=>{const[t,d]=S.useState(e);return a.jsx(h,{...r,value:t,onChange:d})}),m=["Atlas 500","Atlas 700","Beacon X1","Beacon X2","Cobalt 12","Cobalt 14","Delta Pro","Delta Lite"],s=l.bind({});s.args={variant:"boxed",label:"model",items:m};const n=l.bind({});n.args={variant:"boxed",label:"model",items:m,value:"Beacon X1",withClearButton:!0,clearLabel:"Clear model"};const i=l.bind({});i.args={variant:"pill",label:"model",items:m,maxItemsToShow:3};const o=l.bind({});o.args={variant:"pill",label:"model",items:m.slice(0,3),withSearch:!1};const p=l.bind({});p.args={variant:"boxed",label:"model",required:!0,items:[{value:"Atlas 500",tooltip:"Discontinued in 2024"},{value:"Atlas 700"},{value:"Beacon X1",disabled:!0,tooltip:"Not licensed"}]};const u=l.bind({});u.args={variant:"boxed",label:"file type",items:[{value:"pdf",display:"PDF"},{value:"doc",display:"Word"},{value:"xls",display:"Excel"},{value:"ppt",display:"PowerPoint"}],value:"pdf",withClearButton:!0};const b=["plain","boxed","pill"],x={justifyItems:"start",display:"grid",gridTemplateColumns:"auto repeat(2, minmax(0, 200px))",gap:16,alignItems:"center"},v=e=>({fontSize:11,opacity:.6,color:e?"#fff":"#050f29"}),g=({initialValue:e=null,...r})=>{const[t,d]=S.useState(e);return a.jsx(h,{...r,value:t,onChange:d})},C=V(({dark:e,...r})=>a.jsxs("div",{style:x,children:[a.jsx("span",{}),a.jsx("span",{style:v(e),children:"empty"}),a.jsx("span",{style:v(e),children:"selected"}),b.map(t=>a.jsxs(S.Fragment,{children:[a.jsx("span",{style:v(e),children:t}),a.jsx(g,{...r,dark:e,variant:t,label:"model"}),a.jsx(g,{...r,dark:e,variant:t,label:"model",initialValue:"Beacon X1"})]},t))]})),c=C.bind({});c.args={items:m};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`NlpTemplate(({
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
