import{j as a}from"./jsx-runtime--2rGUVCC.js";import{r as S}from"./iframe-BG3Ml6mY.js";import{N as x}from"./NlpTemplate-Dgt5XSne.js";import{F as V}from"./FilterSearchSelect-DoZ7nLhE.js";import"./preload-helper-PPVm8Dsz.js";import"./TransitionGroupContext-SKlv9T0b.js";import"./componentUtils-D_0dnWGm.js";import"./itemDisplay-tk52Ck_6.js";import"./usePressable-BpCsxUVo.js";import"./NotAllowedIcon-CfgjYlN-.js";import"./SvgIcon-DVDujfSV.js";import"./ChevronIcon-CRzd_tnV.js";import"./proptypes-f_EG1z5u.js";import"./MagnifyingGlassIcon-B-RkP9r8.js";import"./CrossMarkIcon-B655Dh9U.js";import"./FilterLabel-abgdctAP.js";import"./misc-B0FWEJCq.js";import"./useLabelOverflow-CpK9gQId.js";import"./Typography-BdKIPYN_.js";import"./tooltip.module-9P05mvUM.js";import"./Tooltip-CfLgHS9B.js";import"./Portal-DgpZKGvJ.js";import"./index-DTTUqFGo.js";import"./index-FDBASVdh.js";import"./Menu-DwGIMKfz.js";import"./useRovingTabIndex-ZxfEDA5Q.js";import"./MenuHeader-Dg_0JH-t.js";import"./MenuTitle-BJUnmAm1.js";import"./SearchInput-DGCPaWmh.js";import"./TextInput-e63IS1B2.js";import"./ClearButton-BG5HqSqO.js";import"./Pressable-B_7DWeTH.js";import"./index-CMPyfA6X.js";import"./Popover-050B6uq0.js";import"./Modal-CjcDThX6.js";import"./Tag-BXbDgTwK.js";import"./Filters.module-B4F5OPrk.js";const oe={title:"Filter Search Select",component:V},l=x(({value:e=null,...t})=>{const[r,g]=S.useState(e);return a.jsx(V,{...t,value:r,onChange:g})}),s=["Atlas 500","Atlas 700","Beacon X1","Beacon X2","Cobalt 12","Cobalt 14","Delta Pro","Delta Lite"],n=l.bind({});n.args={variant:"boxed",label:"model",items:s};const o=l.bind({});o.args={variant:"boxed",label:"model",items:s,value:"Beacon X1",withClearButton:!0,clearLabel:"Clear model"};const i=l.bind({});i.args={variant:"pill",label:"model",items:s,maxItemsToShow:3};const u=l.bind({});u.args={variant:"pill",label:"model",items:s.slice(0,3),withSearch:!1};const p=l.bind({});p.args={variant:"boxed",label:"model",required:!0,items:[{value:"Atlas 500",tooltip:"Discontinued in 2024"},{value:"Atlas 700"},{value:"Beacon X1",disabled:!0,tooltip:"Not licensed"}]};const c=l.bind({});c.args={variant:"boxed",label:"file type",items:[{value:"pdf",display:"PDF"},{value:"doc",display:"Word"},{value:"xls",display:"Excel"},{value:"ppt",display:"PowerPoint"}],value:"pdf",withClearButton:!0};const C=["plain","boxed","pill"],y={justifyItems:"start",display:"grid",gridTemplateColumns:"auto repeat(2, minmax(0, 200px))",gap:16,alignItems:"center"},h=e=>({fontSize:11,opacity:.6,color:e?"#fff":"#050f29"}),b=({initialValue:e=null,...t})=>{const[r,g]=S.useState(e);return a.jsx(V,{...t,value:r,onChange:g})},f=x(({dark:e,...t})=>a.jsxs("div",{style:y,children:[a.jsx("span",{}),a.jsx("span",{style:h(e),children:"empty"}),a.jsx("span",{style:h(e),children:"selected"}),C.map(r=>a.jsxs(S.Fragment,{children:[a.jsx("span",{style:h(e),children:r}),a.jsx(b,{...t,dark:e,variant:r,label:"model"}),a.jsx(b,{...t,dark:e,variant:r,label:"model",initialValue:"Beacon X1"})]},r))]})),m=f.bind({});m.args={items:s};const d=l.bind({});d.args={variant:"boxed",label:"model",items:s,popoverAnchorOrigin:{vertical:"top",horizontal:"right"},popoverTransformOrigin:{vertical:"top",horizontal:"left"}};const v=l.bind({});v.args={variant:"boxed",label:"tenant",items:Array.from({length:40},(e,t)=>`Tenant ${t+1}`),value:"Tenant 32",withChevron:!1,menuAriaLabel:"Available tenants"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`NlpTemplate(({
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
    </div>)`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...v.parameters?.docs?.source}}};const ie=["Default","WithClearButton","Capped","WithoutSearch","RequiredWithItemDetail","WithDisplayValues","AllVariants","CustomPopoverPosition","LongListWithSelection"];export{m as AllVariants,i as Capped,d as CustomPopoverPosition,n as Default,v as LongListWithSelection,p as RequiredWithItemDetail,o as WithClearButton,c as WithDisplayValues,u as WithoutSearch,ie as __namedExportsOrder,oe as default};
