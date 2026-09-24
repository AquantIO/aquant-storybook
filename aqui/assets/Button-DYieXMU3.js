import{j as _}from"./jsx-runtime-B9HUrbtJ.js";import{r as D}from"./iframe-0Pi9x1t8.js";import{j as m,c as G,P as e}from"./componentUtils-BgCzXZKQ.js";import{u as P}from"./usePressable-DRKzOCK3.js";import{i as b}from"./proptypes-DzYqZqkS.js";const r={PURPLE:"purple",LIGHTGREY:"lightgrey",DARKGREY:"darkgrey",DARKGREEN:"darkgreen",GREEN:"green",RED:"red",BLUE:"blue"},a={FILLED:"filled",OUTLINED:"outlined",TEXT:"text"},t={RECTANGLE:"rectangle",CIRCLE:"circle",LARGE_CIRCLE:"largeCircle"},V="_button__text_g77fv_18",U="_button__icon_g77fv_26",w={"button-main":"_button-main_g77fv_1",button__text:V,"--rectangle":"_--rectangle_g77fv_22",button__icon:U,"--circle":"_--circle_g77fv_32","--large-circle":"_--large-circle_g77fv_40","--outlined":"_--outlined_g77fv_57","--textual":"_--textual_g77fv_60","icon--fill":"_icon--fill_g77fv_65","--filled":"_--filled_g77fv_69","--disabled":"_--disabled_g77fv_73","--processing":"_--processing_g77fv_79","--purple":"_--purple_g77fv_91","--pressed":"_--pressed_g77fv_97","--blue":"_--blue_g77fv_100","--dark":"_--dark_g77fv_109","--red":"_--red_g77fv_116","--lightgrey":"_--lightgrey_g77fv_125","--darkgrey":"_--darkgrey_g77fv_180","--darkgreen":"_--darkgreen_g77fv_189","--green":"_--green_g77fv_270"},v=G.bind(w),O={[t.CIRCLE]:"--circle",[t.LARGE_CIRCLE]:"--large-circle",[t.RECTANGLE]:"--rectangle"},S="--circle",j={[a.FILLED]:"--filled",[a.OUTLINED]:"--outlined",[a.TEXT]:"--textual"},K="--filled",F={[r.PURPLE]:"--purple",[r.LIGHTGREY]:"--lightgrey",[r.DARKGREY]:"--darkgrey",[r.GREEN]:"--green",[r.DARKGREEN]:"--darkgreen",[r.RED]:"--red",[r.BLUE]:"--blue"},Y="--blue",E=D.forwardRef(({shape:n=t.RECTANGLE,variant:s=a.OUTLINED,color:l=r.BLUE,IconComponent:i,iconPosition:u="right",text:y,onClick:C=()=>null,disabled:d=!1,processing:o=!1,pressed:c=!1,className:h,dataTestId:L,ariaLabel:p,dark:R=!1,onKeyDown:k,...x},T)=>{const I=n===t.CIRCLE||n===t.LARGE_CIRCLE?"":y,f=d||o,{pressableProps:q}=P({role:"button",disabled:f,onPress:C,onKeyDown:k,pressed:c||void 0,ariaLabel:p,busy:o||void 0}),A=O[n]||S,N=j[s]||K,B=F[l]||Y,g={className:v("button__icon"),...p?{"aria-hidden":!0}:{}};return _.jsxs("div",{ref:T,...x,...q,"data-testid":L,"data-disabled":f,className:v(h,A,"button-main",B,N,{"--disabled":d||o,"--processing":o,"--pressed":c,"--dark":R}),children:[u==="left"&&m(i,g),_.jsx("span",{"data-testid":"buttonText",className:"aquiButton__text",children:I}),u==="right"&&m(i,g)]})}),H={shape:e.oneOf(["rectangle","circle","largeCircle"]),variant:e.oneOf(["filled","outlined","text"]),color:(n,s)=>{const l=n[s];if(l&&!["purple","lightgrey","darkgrey","darkgreen","green","red","blue"].includes(l))return new Error("Invalid prop 'color' supplied to Button, expected one of: 'purple'|'lightgrey'|'darkgrey'|'darkgreen'|'green'|'red'|'blue'")},IconComponent:b,text:b,iconPosition:e.oneOf(["right","left"]),onClick:e.func,onKeyDown:e.func,disabled:e.bool,processing:e.bool,pressed:e.bool,className:e.string,dataTestId:e.string,ariaLabel:e.string,dark:e.bool};E.propTypes=H;E.__docgenInfo={description:"",methods:[],displayName:"Button",props:{shape:{defaultValue:{value:"'rectangle'",computed:!1},description:`@prop {'rectangle' | 'circle' | 'largeCircle'} shape

defaults to 'rectangle'.
@note circular Buttons ignore the 'text' prop.`,type:{name:"enum",value:[{value:"'rectangle'",computed:!1},{value:"'circle'",computed:!1},{value:"'largeCircle'",computed:!1}]},required:!1},variant:{defaultValue:{value:"'outlined'",computed:!1},description:`@prop {'filled' | 'outlined' | 'text'} variant

defaults to 'outlined'
@note 'filled' only supports the 'blue' and 'purple' color prop.`,type:{name:"enum",value:[{value:"'filled'",computed:!1},{value:"'outlined'",computed:!1},{value:"'text'",computed:!1}]},required:!1},color:{defaultValue:{value:"'blue'",computed:!1},description:`@prop {'purple' | 'lightgrey' | 'darkgrey' | 'darkgreen' | 'green' | 'red' | 'blue'} color

defaults to 'blue'`,type:{name:"custom",raw:`(props, propName) => {
    const color = props[propName];
    if (
        color &&
        ![
            'purple',
            'lightgrey',
            'darkgrey',
            'darkgreen',
            'green',
            'red',
            'blue',
        ].includes(color)
    ) {
        return new Error(
            \`Invalid prop 'color' supplied to Button, expected one of: 'purple'|'lightgrey'|'darkgrey'|'darkgreen'|'green'|'red'|'blue'\`
        );
    }
}`},required:!1},iconPosition:{defaultValue:{value:"'right'",computed:!1},description:`@prop {string} iconPosition
defaults to 'right'`,type:{name:"enum",value:[{value:"'right'",computed:!1},{value:"'left'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"() => null",computed:!1},description:"@prop {func} onClick the onClick handler, a disabled Button will not fire this handler.",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"@prop {bool} disabled",type:{name:"bool"},required:!1},processing:{defaultValue:{value:"false",computed:!1},description:`@prop {bool} processing

like disabled, but shows the 'wait' cursor.`,type:{name:"bool"},required:!1},pressed:{defaultValue:{value:"false",computed:!1},description:`@prop {bool} pressed

locks the button in pressed state`,type:{name:"bool"},required:!1},dark:{defaultValue:{value:"false",computed:!1},description:"@prop {bool} dark",type:{name:"bool"},required:!1},IconComponent:{description:"@prop {AquiIconComponent} IconComponent",type:{name:"union",value:[{name:"func"},{name:"string"},{name:"node"},{name:"element"},{name:"shape",value:{render:{name:"func",required:!0}}}]},required:!1},text:{description:`@prop {string} text
@note circular Buttons ignores this prop.`,type:{name:"union",value:[{name:"func"},{name:"string"},{name:"node"},{name:"element"},{name:"shape",value:{render:{name:"func",required:!0}}}]},required:!1},onKeyDown:{description:"",type:{name:"func"},required:!1},className:{description:`@prop {string} className

inner global classes: ['aquiButton__text', 'aquiButton__icon']`,type:{name:"string"},required:!1},dataTestId:{description:"@prop {string} dataTestId",type:{name:"string"},required:!1},ariaLabel:{description:`@prop {string} ariaLabel
Accessible name; required for icon-only circle/largeCircle buttons`,type:{name:"string"},required:!1}}};export{E as B};
