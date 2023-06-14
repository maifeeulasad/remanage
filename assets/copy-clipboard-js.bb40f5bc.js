var i=function(e,d){if(!(e==null||e==="")){typeof d==null&&(d=!1);var n=document.createElement("INPUT");document.body.appendChild(n),n.setAttribute("value",e),n.select(),document.execCommand("copy"),document.body.removeChild(n),d&&alert(`Text copied in clipboard:
`+e.length>30?e.substring(0,30):e)}};export{i as c};
