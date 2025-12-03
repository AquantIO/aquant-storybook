import{j as c}from"./jsx-runtime-Ama7GYlY.js";import{r as N}from"./iframe-BJtKFKc2.js";import{j as m,c as A,P as e}from"./componentUtils-CE8Lm_7i.js";import{i as _}from"./proptypes-D7eLuxjQ.js";const t={PURPLE:"purple",LIGHTGREY:"lightgrey",DARKGREY:"darkgrey",DARKGREEN:"darkgreen",GREEN:"green",RED:"red",BLUE:"blue"},a={FILLED:"filled",OUTLINED:"outlined",TEXT:"text"},r={RECTANGLE:"rectangle",CIRCLE:"circle",LARGE_CIRCLE:"largeCircle"},q="_button__text_tmimw_14",B="_button__icon_tmimw_22",G={"button-main":"_button-main_tmimw_1",button__text:q,"--rectangle":"_--rectangle_tmimw_18",button__icon:B,"--circle":"_--circle_tmimw_28","--large-circle":"_--large-circle_tmimw_36","--outlined":"_--outlined_tmimw_53","--textual":"_--textual_tmimw_56","icon--fill":"_icon--fill_tmimw_61","--filled":"_--filled_tmimw_65","--disabled":"_--disabled_tmimw_69","--processing":"_--processing_tmimw_75","--purple":"_--purple_tmimw_87","--pressed":"_--pressed_tmimw_93","--blue":"_--blue_tmimw_96","--dark":"_--dark_tmimw_105","--red":"_--red_tmimw_112","--lightgrey":"_--lightgrey_tmimw_121","--darkgrey":"_--darkgrey_tmimw_176","--darkgreen":"_--darkgreen_tmimw_185","--green":"_--green_tmimw_266"},u=A.bind(G),D={[r.CIRCLE]:"--circle",[r.LARGE_CIRCLE]:"--large-circle",[r.RECTANGLE]:"--rectangle"},V="--circle",P={[a.FILLED]:"--filled",[a.OUTLINED]:"--outlined",[a.TEXT]:"--textual"},U="--filled",O={[t.PURPLE]:"--purple",[t.LIGHTGREY]:"--lightgrey",[t.DARKGREY]:"--darkgrey",[t.GREEN]:"--green",[t.DARKGREEN]:"--darkgreen",[t.RED]:"--red",[t.BLUE]:"--blue"},S="--blue",f=N.forwardRef(({shape:n=r.RECTANGLE,variant:i=a.OUTLINED,color:l=t.BLUE,IconComponent:d,iconPosition:p="right",text:g,onClick:E=()=>null,disabled:s=!1,processing:o=!1,pressed:b=!1,className:y,dataTestId:C,dark:h=!1,...L},k)=>{const v=()=>n===r.CIRCLE||n===r.LARGE_CIRCLE?"":g,R=D[n]||V,w=P[i]||U,x=O[l]||S,T=I=>{s||o||E(I)};return c.jsxs("div",{ref:k,...L,"data-testid":C,"data-disabled":s||o,onClick:T,className:u(y,R,"button-main",x,w,{"--disabled":s||o,"--processing":o,"--pressed":b,"--dark":h}),children:[p==="left"&&m(d,{className:u("button__icon")}),c.jsx("span",{"data-testid":"buttonText",className:"aquiButton__text",children:v()}),p==="right"&&m(d,{className:u("button__icon")})]})}),j={shape:e.oneOf(["rectangle","circle","largeCircle"]),variant:e.oneOf(["filled","outlined","text"]),color:(n,i)=>{const l=n[i];if(l&&!["purple","lightgrey","darkgrey","darkgreen","green","red","blue"].includes(l))return new Error("Invalid prop 'color' supplied to Button, expected one of: 'purple'|'lightgrey'|'darkgrey'|'darkgreen'|'green'|'red'|'blue'")},IconComponent:_,text:_,iconPosition:e.oneOf(["right","left"]),onClick:e.func,disabled:e.bool,processing:e.bool,pressed:e.bool,className:e.string,dataTestId:e.string,dark:e.bool};f.propTypes=j;f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{shape:{defaultValue:{value:"'rectangle'",computed:!1},description:`@prop {'rectangle' | 'circle' | 'largeCircle'} shape

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

inner global classes: ['aquiButton__text', 'aquiButton__icon']`,type:{name:"string"},required:!1},dataTestId:{description:"@prop {string} dataTestId",type:{name:"string"},required:!1}}};export{f as B};
