import{j as p}from"./jsx-runtime-B3uN8q26.js";import{r as N}from"./iframe-DQOe9z8z.js";import{j as m,c as A,P as e}from"./componentUtils-Cx--_a1r.js";import{i as _}from"./proptypes-Dp3Gscoq.js";const t={PURPLE:"purple",LIGHTGREY:"lightgrey",DARKGREY:"darkgrey",DARKGREEN:"darkgreen",GREEN:"green",RED:"red",BLUE:"blue"},a={FILLED:"filled",OUTLINED:"outlined",TEXT:"text"},r={RECTANGLE:"rectangle",CIRCLE:"circle",LARGE_CIRCLE:"largeCircle"},q="_button__text_149dm_14",B="_button__icon_149dm_22",G={"button-main":"_button-main_149dm_1",button__text:q,"--rectangle":"_--rectangle_149dm_18",button__icon:B,"--circle":"_--circle_149dm_28","--large-circle":"_--large-circle_149dm_36","--outlined":"_--outlined_149dm_53","--textual":"_--textual_149dm_56","icon--fill":"_icon--fill_149dm_61","--filled":"_--filled_149dm_65","--disabled":"_--disabled_149dm_69","--processing":"_--processing_149dm_75","--purple":"_--purple_149dm_87","--pressed":"_--pressed_149dm_93","--blue":"_--blue_149dm_96","--red":"_--red_149dm_105","--lightgrey":"_--lightgrey_149dm_114","--darkgrey":"_--darkgrey_149dm_165","--darkgreen":"_--darkgreen_149dm_174","--green":"_--green_149dm_241"},d=A.bind(G),D={[r.CIRCLE]:"--circle",[r.LARGE_CIRCLE]:"--large-circle",[r.RECTANGLE]:"--rectangle"},P="--circle",U={[a.FILLED]:"--filled",[a.OUTLINED]:"--outlined",[a.TEXT]:"--textual"},V="--filled",O={[t.PURPLE]:"--purple",[t.LIGHTGREY]:"--lightgrey",[t.DARKGREY]:"--darkgrey",[t.GREEN]:"--green",[t.DARKGREEN]:"--darkgreen",[t.RED]:"--red",[t.BLUE]:"--blue"},S="--blue",g=N.forwardRef(({shape:l=r.RECTANGLE,variant:s=a.OUTLINED,color:n=t.BLUE,IconComponent:u,iconPosition:c="right",text:f,onClick:E=()=>null,disabled:i=!1,processing:o=!1,pressed:b=!1,className:y,dataTestId:C,...h},L)=>{const R=()=>l===r.CIRCLE||l===r.LARGE_CIRCLE?"":f,v=D[l]||P,x=U[s]||V,k=O[n]||S,T=I=>{i||o||E(I)};return p.jsxs("div",{ref:L,...h,"data-testid":C,"data-disabled":i||o,onClick:T,className:d(y,v,"button-main",k,x,{"--disabled":i||o,"--processing":o,"--pressed":b}),children:[c==="left"&&m(u,{className:d("button__icon")}),p.jsx("span",{"data-testid":"buttonText",className:"aquiButton__text",children:R()}),c==="right"&&m(u,{className:d("button__icon")})]})}),w={shape:e.oneOf(["rectangle","circle","largeCircle"]),variant:e.oneOf(["filled","outlined","text"]),color:(l,s)=>{const n=l[s];if(n&&!["purple","lightgrey","darkgrey","darkgreen","green","red","blue"].includes(n))return new Error("Invalid prop 'color' supplied to Button, expected one of: 'purple'|'lightgrey'|'darkgrey'|'darkgreen'|'green'|'red'|'blue'")},IconComponent:_,text:_,iconPosition:e.oneOf(["right","left"]),onClick:e.func,disabled:e.bool,processing:e.bool,pressed:e.bool,className:e.string,dataTestId:e.string};g.propTypes=w;g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{shape:{defaultValue:{value:"'rectangle'",computed:!1},description:`@prop {'rectangle' | 'circle' | 'largeCircle'} shape

defaults to 'rectangle'.
@note circular Buttons ignore the 'text' prop.`,type:{name:"enum",value:[{value:'"rectangle"',computed:!1},{value:'"circle"',computed:!1},{value:'"largeCircle"',computed:!1}]},required:!1},variant:{defaultValue:{value:"'outlined'",computed:!1},description:`@prop {'filled' | 'outlined' | 'text'} variant

defaults to 'outlined'
@note 'filled' only supports the 'blue' and 'purple' color prop.`,type:{name:"enum",value:[{value:'"filled"',computed:!1},{value:'"outlined"',computed:!1},{value:'"text"',computed:!1}]},required:!1},color:{defaultValue:{value:"'blue'",computed:!1},description:`@prop {'purple' | 'lightgrey' | 'darkgrey' | 'darkgreen' | 'green' | 'red' | 'blue'} color

defaults to 'blue'`,type:{name:"custom",raw:`(props, propName) => {
    const color = props[propName];
    if (
        color &&
        ![
            "purple",
            "lightgrey",
            "darkgrey",
            "darkgreen",
            "green",
            "red",
            "blue",
        ].includes(color)
    ) {
        return new Error(
            \`Invalid prop 'color' supplied to Button, expected one of: 'purple'|'lightgrey'|'darkgrey'|'darkgreen'|'green'|'red'|'blue'\`
        );
    }
}`},required:!1},iconPosition:{defaultValue:{value:'"right"',computed:!1},description:`@prop {string} iconPosition
defaults to 'right'`,type:{name:"enum",value:[{value:'"right"',computed:!1},{value:'"left"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"() => null",computed:!1},description:"@prop {func} onClick the onClick handler, a disabled Button will not fire this handler.",type:{name:"func"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"@prop {bool} disabled",type:{name:"bool"},required:!1},processing:{defaultValue:{value:"false",computed:!1},description:`@prop {bool} processing

like disabled, but shows the 'wait' cursor.`,type:{name:"bool"},required:!1},pressed:{defaultValue:{value:"false",computed:!1},description:`@prop {bool} pressed

locks the button in pressed state`,type:{name:"bool"},required:!1},IconComponent:{description:"@prop {AquiIconComponent} IconComponent",type:{name:"union",value:[{name:"func"},{name:"string"},{name:"node"},{name:"element"},{name:"shape",value:{render:{name:"func",required:!0}}}]},required:!1},text:{description:`@prop {string} text
@note circular Buttons ignores this prop.`,type:{name:"union",value:[{name:"func"},{name:"string"},{name:"node"},{name:"element"},{name:"shape",value:{render:{name:"func",required:!0}}}]},required:!1},className:{description:`@prop {string} className

inner global classes: ['aquiButton__text', 'aquiButton__icon']`,type:{name:"string"},required:!1},dataTestId:{description:"@prop {string} dataTestId",type:{name:"string"},required:!1}}};export{g as B};
