import{j as d}from"./jsx-runtime-BR7-kpXU.js";import{r as N}from"./iframe-chqmMZez.js";import{j as _,c as A,P as e}from"./componentUtils-C3z4w1wL.js";import{i as f}from"./proptypes-DNSVG0bz.js";const t={PURPLE:"purple",LIGHTGREY:"lightgrey",DARKGREY:"darkgrey",DARKGREEN:"darkgreen",GREEN:"green",RED:"red",BLUE:"blue"},a={FILLED:"filled",OUTLINED:"outlined",TEXT:"text"},r={RECTANGLE:"rectangle",CIRCLE:"circle",LARGE_CIRCLE:"largeCircle"},q="_button__text_w6pcx_14",B="_button__icon_w6pcx_22",G={"button-main":"_button-main_w6pcx_1",button__text:q,"--rectangle":"_--rectangle_w6pcx_18",button__icon:B,"--circle":"_--circle_w6pcx_28","--large-circle":"_--large-circle_w6pcx_36","--outlined":"_--outlined_w6pcx_53","--textual":"_--textual_w6pcx_56","icon--fill":"_icon--fill_w6pcx_61","--filled":"_--filled_w6pcx_65","--disabled":"_--disabled_w6pcx_69","--processing":"_--processing_w6pcx_75","--purple":"_--purple_w6pcx_87","--pressed":"_--pressed_w6pcx_93","--blue":"_--blue_w6pcx_96","--dark":"_--dark_w6pcx_105","--red":"_--red_w6pcx_112","--lightgrey":"_--lightgrey_w6pcx_121","--darkgrey":"_--darkgrey_w6pcx_176","--darkgreen":"_--darkgreen_w6pcx_185","--green":"_--green_w6pcx_266"},p=A.bind(G),D={[r.CIRCLE]:"--circle",[r.LARGE_CIRCLE]:"--large-circle",[r.RECTANGLE]:"--rectangle"},V="--circle",P={[a.FILLED]:"--filled",[a.OUTLINED]:"--outlined",[a.TEXT]:"--textual"},U="--filled",O={[t.PURPLE]:"--purple",[t.LIGHTGREY]:"--lightgrey",[t.DARKGREY]:"--darkgrey",[t.GREEN]:"--green",[t.DARKGREEN]:"--darkgreen",[t.RED]:"--red",[t.BLUE]:"--blue"},S="--blue",g=N.forwardRef(({shape:n=r.RECTANGLE,variant:s=a.OUTLINED,color:l=t.BLUE,IconComponent:c,iconPosition:u="right",text:m,onClick:E=()=>null,disabled:i=!1,processing:o=!1,pressed:x=!1,className:b,dataTestId:y,dark:C=!1,...h},L)=>{const k=()=>n===r.CIRCLE||n===r.LARGE_CIRCLE?"":m,v=D[n]||V,R=P[s]||U,w=O[l]||S,T=I=>{i||o||E(I)};return d.jsxs("div",{ref:L,...h,"data-testid":y,"data-disabled":i||o,onClick:T,className:p(b,v,"button-main",w,R,{"--disabled":i||o,"--processing":o,"--pressed":x,"--dark":C}),children:[u==="left"&&_(c,{className:p("button__icon")}),d.jsx("span",{"data-testid":"buttonText",className:"aquiButton__text",children:k()}),u==="right"&&_(c,{className:p("button__icon")})]})}),j={shape:e.oneOf(["rectangle","circle","largeCircle"]),variant:e.oneOf(["filled","outlined","text"]),color:(n,s)=>{const l=n[s];if(l&&!["purple","lightgrey","darkgrey","darkgreen","green","red","blue"].includes(l))return new Error("Invalid prop 'color' supplied to Button, expected one of: 'purple'|'lightgrey'|'darkgrey'|'darkgreen'|'green'|'red'|'blue'")},IconComponent:f,text:f,iconPosition:e.oneOf(["right","left"]),onClick:e.func,disabled:e.bool,processing:e.bool,pressed:e.bool,className:e.string,dataTestId:e.string,dark:e.bool};g.propTypes=j;g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{shape:{defaultValue:{value:"'rectangle'",computed:!1},description:`@prop {'rectangle' | 'circle' | 'largeCircle'} shape

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
@note circular Buttons ignores this prop.`,type:{name:"union",value:[{name:"func"},{name:"string"},{name:"node"},{name:"element"},{name:"shape",value:{render:{name:"func",required:!0}}}]},required:!1},className:{description:`@prop {string} className

inner global classes: ['aquiButton__text', 'aquiButton__icon']`,type:{name:"string"},required:!1},dataTestId:{description:"@prop {string} dataTestId",type:{name:"string"},required:!1}}};export{g as B};
