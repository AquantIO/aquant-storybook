import{j as d}from"./jsx-runtime-CiDoBIwL.js";import{r as v}from"./iframe-BzMI4EC8.js";import{N as S}from"./NlpTemplate-NF6KQs-j.js";import{F as n}from"./FilterSearchSelect-4BylIOwP.js";import"./preload-helper-PPVm8Dsz.js";import"./TransitionGroupContext-E4xfg5-d.js";import"./componentUtils-CKUUPz3I.js";import"./itemDisplay-COQDlRZ1.js";import"./usePressable-Do0pw_XS.js";import"./NotAllowedIcon-BfM23Lst.js";import"./SvgIcon-DDM96Dqr.js";import"./ChevronIcon-BVhft0Bp.js";import"./proptypes-Byw2lnuv.js";import"./MagnifyingGlassIcon-BS-7rEcH.js";import"./CrossMarkIcon-CX7pNqZB.js";import"./FilterLabel-QiYU9neh.js";import"./misc-B0FWEJCq.js";import"./Typography-C6C8GcOW.js";import"./Menu-KoyrRjfU.js";import"./useRovingTabIndex-B7JLTfEr.js";import"./Tooltip-OCQxJnvt.js";import"./Portal-DuqT_gyD.js";import"./index-lxkh7ugE.js";import"./index-CQH8naLe.js";import"./MenuHeader-BFh6wqSg.js";import"./MenuTitle-DAdS9Rg2.js";import"./SearchInput-CKUX2Tt8.js";import"./TextInput-A4hHAfK8.js";import"./ClearButton-BiTAsNZU.js";import"./Pressable-XXTZ8Q0y.js";import"./index-CqLURxL1.js";import"./Popover-K7ww_5Y1.js";import"./Modal-CTWbwv-R.js";import"./Tag-DDASK_Cf.js";import"./Filters.module-BpzpJgFB.js";const Y={title:"Filter Search Select",component:n},e=S(({value:u=null,...p})=>{const[m,c]=v.useState(u);return d.jsx(n,{...p,value:m,onChange:c})}),s=["Atlas 500","Atlas 700","Beacon X1","Beacon X2","Cobalt 12","Cobalt 14","Delta Pro","Delta Lite"],a=e.bind({});a.args={variant:"boxed",label:"model",items:s};const t=e.bind({});t.args={variant:"boxed",label:"model",items:s,value:"Beacon X1",withClearButton:!0,clearLabel:"Clear model"};const r=e.bind({});r.args={variant:"pill",label:"model",items:s,maxItemsToShow:3};const l=e.bind({});l.args={variant:"pill",label:"model",items:s.slice(0,3),withSearch:!1};const i=e.bind({});i.args={variant:"boxed",label:"model",required:!0,items:[{value:"Atlas 500",tooltip:"Discontinued in 2024"},{value:"Atlas 700"},{value:"Beacon X1",disabled:!0,tooltip:"Not licensed"}]};const o=e.bind({});o.args={variant:"boxed",label:"file type",items:[{value:"pdf",display:"PDF"},{value:"doc",display:"Word"},{value:"xls",display:"Excel"},{value:"ppt",display:"PowerPoint"}],value:"pdf",withClearButton:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`NlpTemplate(({
  value: initialValue = null,
  ...args
}) => {
  const [value, setValue] = useState(initialValue);
  return <FilterSearchSelect {...args} value={value} onChange={setValue} />;
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`NlpTemplate(({
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
})`,...o.parameters?.docs?.source}}};const Z=["Default","WithClearButton","Capped","WithoutSearch","RequiredWithItemDetail","WithDisplayValues"];export{r as Capped,a as Default,i as RequiredWithItemDetail,t as WithClearButton,o as WithDisplayValues,l as WithoutSearch,Z as __namedExportsOrder,Y as default};
