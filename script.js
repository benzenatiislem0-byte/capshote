var NAME="Islem Benzneati",EMAIL="benzenatiislem0@gmail.com";
["n1","n2","n3","n4"].forEach(function(i){document.getElementById(i).textContent=NAME});
var $=function(i){return document.getElementById(i)};
var SOC={YouTube:"",Instagram:"",TikTok:""};
var qt=$("qt"),qn=$("qn");
function q(){var n=Math.max(1,parseInt(qn.value)||1),p=+qt.value,lab=qt.options[qt.selectedIndex].text.split(" –")[0];$("qp").textContent=(n*p)+" €";$("mail").target="_blank";$("mail").rel="noopener";$("mail").href="https://mail.google.com/mail/?view=cm&fs=1&to="+EMAIL+"&su="+encodeURIComponent("Demande de devis")+"&body="+encodeURIComponent("Bonjour, je souhaite un devis pour "+n+" × "+lab+" ("+(n*p)+" €).")}
qt.onchange=qn.oninput=q;q();
Object.keys(SOC).forEach(function(k){if(SOC[k]){var a=el("a","btn sm s",k);a.href=SOC[k];a.target="_blank";a.rel="noopener";$("soc").appendChild(a)}});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add("on")})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(s){io.observe(s)});
var rf=0,hb=document.querySelectorAll(".hero>.blob"),hc=document.querySelector(".hero>div:last-child");function sc(){rf=0;var y=scrollY,h=document.documentElement,cu=null;if(y<innerHeight*1.3){hb[0].style.translate="0 "+y*.3+"px";hb[1].style.translate="0 "+y*-.2+"px";hc.style.translate="0 "+y*.15+"px";hc.style.opacity=Math.max(0,1-y/650)}$("prog").style.width=(y/Math.max(1,h.scrollHeight-innerHeight)*100)+"%";document.querySelectorAll("section[id]:not(#adm)").forEach(function(s){if(s.getBoundingClientRect().top<innerHeight*.4)cu=s.id});document.querySelectorAll("nav div a").forEach(function(a){a.classList.toggle("act",a.getAttribute("href")==="#"+cu)})}
addEventListener("scroll",function(){if(!rf)rf=requestAnimationFrame(sc)},{passive:true});sc();
if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){var D=$("cd"),R=$("cr"),mx=0,my=0,rx=0,ry=0,on=0;document.documentElement.classList.add("cu");
addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;if(!on){on=1;rx=mx;ry=my;D.style.opacity=R.style.opacity=1}D.style.transform="translate("+mx+"px,"+my+"px)";window.kick&&kick();var t=e.target,c=t.closest&&t.closest(".card");if(c){var b=c.getBoundingClientRect();c.style.setProperty("--mx",(mx-b.left)+"px");c.style.setProperty("--my",(my-b.top)+"px")}R.classList.toggle("h",!!(t.closest&&t.closest("a,button,.chip,input,select,textarea,label,video")))});
document.addEventListener("mouseleave",function(){D.style.opacity=R.style.opacity=0;on=0});
var lr=0;function lp(){rx+=(mx-rx)*.2;ry+=(my-ry)*.2;R.style.transform="translate("+rx+"px,"+ry+"px)";lr=(Math.abs(mx-rx)+Math.abs(my-ry)>.3)?requestAnimationFrame(lp):0}window.kick=function(){if(!lr)lr=requestAnimationFrame(lp)}}
function yt(u){var m=(u||"").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);return m&&m[1]}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function media(v){var i=yt(v.url),m;if(i){m=el("button","ph","▶");m.setAttribute("aria-label","Lire la vidéo");m.onclick=function(){var f=el("iframe");f.src="https://www.youtube.com/embed/"+i+"?autoplay=1";f.allow="autoplay;fullscreen";f.allowFullscreen=true;m.replaceWith(f)}}else{m=el("video");m.src=v.url;m.controls=true;m.preload="none"}return m}
function btn(t,f,c){var b=el("button","btn sm "+(c||""),t);b.onclick=f;return b}
(async function(){
var SB_URL="COLLE_ICI_TON_URL_SUPABASE",SB_KEY="COLLE_ICI_TA_CLE_ANON",ADMIN="benzenatiislem0@gmail.com";
var k=0,tg=function(){var a=$("adm"),o=a.style.display==="block";a.style.display=o?"none":"block";if(!o)a.scrollIntoView({behavior:"smooth"})};
$("cp").onclick=function(){if(++k>=3){k=0;tg()}};
if(location.hash==="#admin")tg();
if(SB_URL.indexOf("http")!==0||!window.supabase){$("vmsg").textContent="Les vidéos s’afficheront ici bientôt.";$("fm").innerHTML="<p class='mu'>Pour envoyer ta vidéo, écris-moi par Gmail.</p>";return}
var sb=supabase.createClient(SB_URL,SB_KEY),all=[],cur="Tous",admin=false,CATS=["Tous","Shorts","YouTube","Clips","Sport","Autre"];
function draw(){var g=$("vg");g.innerHTML="";var n=0;all.forEach(function(v){if(cur!=="Tous"&&(v.cat||"Autre")!==cur)return;n++;var c=el("div","card vid");c.appendChild(media(v));c.appendChild(el("h3",0,v.title));g.appendChild(c)});if(!n)g.appendChild(el("p","mu","Aucune vidéo dans cette catégorie."));Array.prototype.forEach.call($("ch").children,function(b){b.classList.toggle("on",b.textContent===cur)})}
CATS.forEach(function(c){var b=el("button","chip",c);b.onclick=function(){cur=c;draw()};$("ch").appendChild(b)});
async function load(){var r=await sb.from("videos").select("*").order("created_at",{ascending:false});if(r.error){$("vg").textContent="Impossible de charger les vidéos.";return}all=r.data;draw();if(admin)adminList()}
async function up(file,dir){var p=dir+"/"+Date.now()+"-"+file.name.replace(/[^\w.-]/g,"_");var r=await sb.storage.from("videos").upload(p,file,{contentType:file.type});if(r.error)throw r.error;return sb.storage.from("videos").getPublicUrl(p).data.publicUrl}
$("fs").onclick=async function(){var f=$("ff").files[0],t=$("ft").value.trim(),n=$("fn").value.trim();
if(!t||!n||!f){$("fx").textContent="Remplis ton nom, le titre et choisis un fichier.";return}
$("fx").textContent="Envoi…";
try{var url=await up(f,"submissions");var r=await sb.from("submissions").insert({name:n,title:t,msg:$("fd").value,url:url,wants_public:$("fp").checked,status:"pending"});if(r.error)throw r.error;
$("fx").textContent="Merci ! Ta vidéo a bien été envoyée.";["fn","ft","fd","ff"].forEach(function(i){$(i).value=""})}
catch(e){$("fx").textContent="Envoi impossible (fichier trop lourd ?). Écris-moi par Gmail."}};
async function chk(){var s=(await sb.auth.getSession()).data.session;admin=!!s&&s.user.email===ADMIN;$("lg").style.display=admin?"none":"block";$("mg").style.display=admin?"block":"none";if(admin){adminList();subs()}}
$("lb").onclick=async function(){var r=await sb.auth.signInWithPassword({email:$("le").value.trim(),password:$("lp").value});if(r.error){$("lx").textContent="Identifiants incorrects.";return}$("lp").value="";await chk()};
$("lo").onclick=async function(){await sb.auth.signOut();await chk()};
function adminList(){var l=$("al");l.innerHTML="";all.forEach(function(v){var r=el("div","row");r.appendChild(el("span",0,v.title));r.appendChild(btn("Supprimer",async function(){await sb.from("videos").delete().eq("id",v.id);load()},"s"));l.appendChild(r)})}
async function subs(){var q=await sb.from("submissions").select("*").order("created_at",{ascending:false}),l=$("sl");l.innerHTML="";if(q.error||!q.data.length){l.appendChild(el("p","mu","Rien pour le moment."));return}
q.data.forEach(function(v){var r=el("div","row"),w=el("span",0,v.name+" – "+v.title+" ");w.appendChild(el("span","tag",v.wants_public?"veut public":"privé"));r.appendChild(w);var a=el("span");
var o=el("a","btn sm s","Voir");o.href=v.url;o.target="_blank";o.rel="noopener";a.appendChild(o);a.appendChild(document.createTextNode(" "));
if(v.wants_public&&v.status!=="approved")a.appendChild(btn("Publier",async function(){await sb.from("videos").insert({title:v.title,url:v.url,cat:"Autre"});await sb.from("submissions").update({status:"approved"}).eq("id",v.id);load();subs()}));
a.appendChild(document.createTextNode(" "));a.appendChild(btn("Supprimer",async function(){await sb.from("submissions").delete().eq("id",v.id);subs()},"s"));r.appendChild(a);l.appendChild(r)})}
$("as").onclick=async function(){var t=$("at").value.trim(),l=$("au").value.trim(),f=$("af").files[0];
if(!t||(!l&&!f)){$("ax").textContent="Titre + lien ou fichier.";return}
$("ax").textContent="Ajout…";
try{var url=f?await up(f,"admin"):l;var r=await sb.from("videos").insert({title:t,url:url,cat:$("ac").value});if(r.error)throw r.error;$("ax").textContent="Ajoutée ✓";$("at").value=$("au").value=$("af").value="";load()}
catch(e){$("ax").textContent="Erreur, réessaie."}};
await chk();load();
})();
