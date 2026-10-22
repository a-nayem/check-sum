import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const canvas = document.querySelector('#system-scene');
const frame = document.querySelector('#scene-frame');
const stageName = document.querySelector('#stage-name');
const motionToggle = document.querySelector('#motion-toggle');
let renderer, scene, camera, rig, running = !reduceMotion.matches, frameId, dragging = false, lastX = 0, targetRotation = -.4;
const stages = ['PERCEIVE', 'ASSESS', 'DECIDE', 'ACT', 'REFLECT'];

function createScene(){
  try {
    renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true, powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(frame.clientWidth, frame.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, frame.clientWidth/frame.clientHeight, .1, 100);
    camera.position.set(0, 1.1, 8.4);
    rig = new THREE.Group(); rig.position.y=.62; scene.add(rig);
    scene.add(new THREE.HemisphereLight(0xc9d5c0, 0x1a1d19, 2.2));
    const key = new THREE.DirectionalLight(0xe6d7c1, 2.1); key.position.set(3,5,4); scene.add(key);
    const copper = new THREE.PointLight(0xd18c65, 10, 10); copper.position.set(-2,1.5,2); scene.add(copper);
    const sageMat = new THREE.MeshStandardMaterial({color:0x75866e, roughness:.42, metalness:.45, transparent:true, opacity:.78});
    const boneMat = new THREE.MeshStandardMaterial({color:0xc8c7b6, roughness:.48, metalness:.38});
    const copperMat = new THREE.MeshStandardMaterial({color:0xd18c65, roughness:.34, metalness:.52, emissive:0x402216, emissiveIntensity:.65});
    const darkMat = new THREE.MeshStandardMaterial({color:0x262c25, roughness:.38, metalness:.62});
    const addBox=(w,h,d,mat,x,y,z,group=rig)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);group.add(mesh);return mesh};
    // A real layered system volume, built from component blocks and exposed signal routes.
    const base = new THREE.Group(); rig.add(base);
    addBox(3.25,.18,2.35,darkMat,0,-1.1,0,base);
    addBox(3.0,.07,2.1,sageMat,0,-.92,0,base);
    addBox(2.55,.13,1.62,boneMat,0,-.56,0,base);
    addBox(2.1,.12,1.28,darkMat,0,-.23,0,base);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(.68,.8,.32,8),copperMat);core.rotation.y=Math.PI/8;core.position.y=.16;base.add(core);
    const topPlate=addBox(1.78,.09,1.18,sageMat,0,.45,0,base);topPlate.rotation.y=-.04;
    const agentPositions=[[-1.15,.65,-.62],[-.58,.65,-.62],[0,.65,-.62],[.58,.65,-.62],[1.15,.65,-.62]];
    agentPositions.forEach((p,i)=>{const mat=i===0?copperMat:boneMat;const block=addBox(.36,.27,.32,mat,...p,base);block.userData.stage=i;});
    // Five stage markers and copper conduits on the outside edge.
    const points=[new THREE.Vector3(-1.32,.1,.9),new THREE.Vector3(-.72,.35,1.07),new THREE.Vector3(0,.48,1.14),new THREE.Vector3(.72,.35,1.07),new THREE.Vector3(1.32,.1,.9)];
    for(let i=0;i<points.length-1;i++){
      const curve=new THREE.CatmullRomCurve3([points[i],new THREE.Vector3(points[i].x,.62,1.1),points[i+1]]);
      const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,20,.018,5,false),i===0?copperMat:sageMat);rig.add(tube);
    }
    const ring=new THREE.Mesh(new THREE.TorusGeometry(1.94,.012,5,120),new THREE.MeshBasicMaterial({color:0x9eaa91,transparent:true,opacity:.36}));ring.rotation.x=Math.PI/2.5;ring.position.y=-.04;rig.add(ring);
    const ring2=new THREE.Mesh(new THREE.TorusGeometry(2.12,.008,4,120),new THREE.MeshBasicMaterial({color:0xd18c65,transparent:true,opacity:.46}));ring2.rotation.x=Math.PI/2.5;ring2.rotation.z=.55;ring2.position.y=.03;rig.add(ring2);
    const ground=new THREE.GridHelper(9,30,0x7a8971,0x41483e);ground.position.y=-1.35;ground.material.transparent=true;ground.material.opacity=.2;scene.add(ground);
    // Small nodes add scale and establish that the model is a connected system.
    const nodeMat=new THREE.MeshStandardMaterial({color:0xd18c65,emissive:0x5a2e1a,emissiveIntensity:1.4,roughness:.3});
    const nodeGeo=new THREE.SphereGeometry(.045,12,12);
    [[-1.75,.75,.4],[1.7,.52,.25],[-1.62,-.12,-.62],[1.55,-.1,-.55],[0,1.02,.42]].forEach(p=>{const m=new THREE.Mesh(nodeGeo,nodeMat);m.position.set(...p);rig.add(m)});
    frame.classList.add('webgl-ready');
    stageName.textContent=stages[0];
    drawOnce();
    if(running)render();
  } catch (e) {
    canvas.hidden = true;
    frame.setAttribute('aria-label','Five-stage autonomous system diagram. Perceive, assess, decide, act and reflect.');
  }
}
function drawOnce(){if(!renderer)return;rig.rotation.y=targetRotation;renderer.render(scene,camera)}
function render(){
  if(!renderer || !running) return;
  rig.rotation.y += (targetRotation-rig.rotation.y)*.055;
  if(!dragging && !reduceMotion.matches) rig.rotation.y += .0018;
  rig.rotation.x = Math.sin(Date.now()*.00024)*.035;
  renderer.render(scene,camera);
  frameId=requestAnimationFrame(render);
}
function resize(){if(!renderer)return;const w=frame.clientWidth,h=frame.clientHeight;camera.aspect=w/h;camera.position.z=window.innerWidth<640?9.2:8.4;camera.updateProjectionMatrix();renderer.setSize(w,h,false);}
function setMotion(next){running=next;motionToggle.setAttribute('aria-pressed',String(next));motionToggle.textContent=next?'Pause motion':'Resume motion';if(next)render();else{cancelAnimationFrame(frameId);drawOnce()}}
function inspectAt(x){const index=Math.min(stages.length-1,Math.max(0,Math.floor(x/frame.clientWidth*stages.length)));stageName.textContent=stages[index];document.querySelector('.caption-index').textContent=`0${index+1} — 05`;}
frame.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;frame.setPointerCapture(e.pointerId);});
frame.addEventListener('pointermove',e=>{if(!dragging)return;targetRotation+=(e.clientX-lastX)*.008;lastX=e.clientX;inspectAt(e.offsetX);if(!running)drawOnce();});
frame.addEventListener('pointerup',()=>{dragging=false});frame.addEventListener('pointercancel',()=>{dragging=false});
frame.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')targetRotation-=.36;if(e.key==='ArrowRight')targetRotation+=.36;if(e.key==='Home')targetRotation=0;if(e.key==='End')targetRotation=Math.PI;const idx=(Math.round(Math.abs(targetRotation)/.36)%5);stageName.textContent=stages[idx];document.querySelector('.caption-index').textContent=`0${idx+1} — 05`;if(!running)drawOnce();});
document.querySelector('#rotate-left').addEventListener('click',()=>{targetRotation-=.45;if(!running)render()});document.querySelector('#rotate-right').addEventListener('click',()=>{targetRotation+=.45;if(!running)render()});motionToggle.addEventListener('click',()=>setMotion(!running));
reduceMotion.addEventListener('change',e=>{setMotion(!e.matches)});
document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(frameId);else if(running)render()});
createScene();window.addEventListener('resize',resize,{passive:true});

// Match media keeps the GSAP choreography responsive and fully absent for reduced motion.
const motion = gsap.matchMedia();
motion.add({
  desktop: '(min-width: 641px)',
  reduce: '(prefers-reduced-motion: reduce)'
}, ({conditions}) => {
  if (conditions.reduce) return;
  document.documentElement.classList.add('gsap-ready');
  const intro = gsap.timeline({defaults:{ease:'expo.out'}});
  intro.fromTo('.hero-visual', {clipPath:'inset(7% 5% 15% 5%)', scale:.94}, {clipPath:'inset(0% 0% 0% 0%)', scale:1, duration:1.3, delay:.12});
  gsap.to(rig.rotation, {y:'+=.5', ease:'none', scrollTrigger:{trigger:'.manifesto',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.to(rig.position, {y:'+=.16', ease:'none', scrollTrigger:{trigger:'.work',start:'top bottom',end:'top 25%',scrub:1}});
  gsap.utils.toArray('.project-art').forEach((art,index)=>{
    gsap.fromTo(art,{clipPath:index===0?'inset(0 0 18% 0)':'inset(0 0 0 12%)'},{clipPath:'inset(0 0 0 0)',duration:1.1,ease:'expo.out',scrollTrigger:{trigger:art,start:'top 82%',once:true}});
  });
  const contact = document.querySelector('.contact-button');
  const nudge = gsap.to(contact,{x:5,duration:.25,ease:'power2.out',paused:true});
  contact.addEventListener('mouseenter',()=>nudge.play());
  contact.addEventListener('mouseleave',()=>nudge.reverse());
  return () => { intro.kill(); };
});
