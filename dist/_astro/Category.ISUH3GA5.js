import{u as e,s as r,S as l}from"./Steps.W8FoWsTS.js";import"./signals.module.swgNi8kT.js";import"./preact.module.nRdpJdZK.js";const c=[{niceCategory:"Bushland Adventures",urlCategory:"bushland-adventures"},{niceCategory:"Rainforest Retreats",urlCategory:"rainforest-retreats"}];function o(){return e("div",{className:"pt-20 hover:trans md:pb-0 pb-10",children:r.value?e("a",{className:"btn btn-primary btn-lg text-xl mt-10 mx-auto",href:"#state",children:"Continue"}):null})}function g(){function a(t){const n=t.currentTarget.alt;t.currentTarget.checked&&(r.value=n)}return e("div",{className:"flex flex-col text-center h-screen bg-[url('/img/sydney.jpg')] bg-opacity-5 bg-cover bg-center",id:"category",children:e("div",{className:"hero-overlay bg-opacity-40",children:[e(l,{currentStep:1}),e("h2",{className:"text-4xl md:text-5xl text-white font-bold",children:"What Type Of Place Would You Visit?"}),e("p",{className:"text-xl mt-4 text-white",children:"Choose your stay category"}),e("section",{className:"flex flex-wrap justify-center mx-auto mt-12 gap-5 md:w-[48%]",children:c.map(t=>e("input",{className:"btn text-secondary-content",type:"radio",name:"categoryGroup",alt:t.urlCategory,"aria-label":t.niceCategory,onChange:a,value:t.niceCategory}))}),e(o,{})]})})}export{g as default};