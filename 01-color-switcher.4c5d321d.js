!function(){var t=null,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function a(){e.disabled=!e.disabled,n.disabled=!n.disabled}n.disabled=!0,e.addEventListener("click",(function(){t=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),a()})),n.addEventListener("click",(function(){clearInterval(t),a()}))}();
//# sourceMappingURL=01-color-switcher.4c5d321d.js.map