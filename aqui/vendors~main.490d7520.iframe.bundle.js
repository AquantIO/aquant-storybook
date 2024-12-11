/*! For license information please see vendors~main.490d7520.iframe.bundle.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),exitKeyframe=Object(emotion_react_browser_esm.b)(_t2||(_t2=_`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),pulsateKeyframe=Object(emotion_react_browser_esm.b)(_t3||(_t3=_`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),TouchRippleRoot=Object(styled.a)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),TouchRippleRipple=Object(styled.a)(ButtonBase_Ripple,{name:"MuiTouchRipple",slot:"Ripple"})(_t4||(_t4=_`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),circularDashKeyframe=Object(emotion_react_browser_esm.b)(_t2||(_t2=_`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),CircularProgressRoot=Object(styled.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[ownerState.variant],styles["color"+Object(capitalize.a)(ownerState.color)]]}})(({ownerState:ownerState,theme:theme})=>Object(esm_extends.a)({display:"inline-block"},"determinate"===ownerState.variant&&{transition:theme.transitions.create("transform")},"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main}),({ownerState:ownerState})=>"indeterminate"===ownerState.variant&&Object(emotion_react_browser_esm.a)(_t3||(_t3=_`
      animation: ${0} 1.4s linear infinite;
    `),circularRotateKeyframe)),CircularProgressSVG=Object(styled.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(props,styles)=>styles.svg})({display:"block"}),CircularProgressCircle=Object(styled.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.circle,styles["circle"+Object(capitalize.a)(ownerState.variant)],ownerState.disableShrink&&styles.circleDisableShrink]}})(({ownerState:ownerState,theme:theme})=>Object(esm_extends.a)({stroke:"currentColor"},"determinate"===ownerState.variant&&{transition:theme.transitions.create("stroke-dashoffset")},"indeterminate"===ownerState.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:ownerState})=>"indeterminate"===ownerState.variant&&!ownerState.disableShrink&&Object(emotion_react_browser_esm.a)(_t4||(_t4=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),circularDashKeyframe)),CircularProgress_CircularProgress=react.forwardRef((function CircularProgress(inProps,ref){const props=Object(useThemeProps.a)({props:inProps,name:"MuiCircularProgress"}),{className:className,color:color="primary",disableShrink:disableShrink=!1,size:size=40,style:style,thickness:thickness=3.6,value:value=0,variant:variant="indeterminate"}=props,other=Object(objectWithoutPropertiesLoose.a)(props,_excluded),ownerState=Object(esm_extends.a)({},props,{color:color,disableShrink:disableShrink,size:size,thickness:thickness,value:value,variant:variant}),classes=(ownerState=>{const{classes:classes,variant:variant,color:color,disableShrink:disableShrink}=ownerState,slots={root:["root",variant,"color"+Object(capitalize.a)(color)],svg:["svg"],circle:["circle","circle"+Object(capitalize.a)(variant),disableShrink&&"circleDisableShrink"]};return Object(composeClasses.a)(slots,getCircularProgressUtilityClass,classes)})(ownerState),circleStyle={},rootStyle={},rootProps={};if("determinate"===variant){const circumference=2*Math.PI*((44-thickness)/2);circleStyle.strokeDasharray=circumference.toFixed(3),rootProps["aria-valuenow"]=Math.round(value),circleStyle.strokeDashoffset=((100-value)/100*circumference).toFixed(3)+"px",rootStyle.transform="rotate(-90deg)"}return Object(jsx_runtime.jsx)(CircularProgressRoot,Object(esm_extends.a)({className:Object(clsx_m.a)(classes.root,className),style:Object(esm_extends.a)({width:size,height:size},rootStyle,style),ownerState:ownerState,ref:ref,role:"progressbar"},rootProps,other,{children:Object(jsx_runtime.jsx)(CircularProgressSVG,{className:classes.svg,ownerState:ownerState,viewBox:"22 22 44 44",children:Object(jsx_runtime.jsx)(CircularProgressCircle,{className:classes.circle,style:circleStyle,ownerState:ownerState,cx:44,cy:44,r:(44-thickness)/2,fill:"none",strokeWidth:thickness})})}))}));__webpack_exports__.a=CircularProgress_CircularProgress}]]);
//# sourceMappingURL=vendors~main.490d7520.iframe.bundle.js.map