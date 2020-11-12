/****
Author: Moralist Festus
Github: https://github.com/moralistfestus/domify.js
About: Lightweight Javascript library for DOM Manipulation and faster development
License: MIT Licensed
Contributing: It's open source and contributions allowed
****/


"use strict"
console.info("%cDomify is a simple lightweight Javascript library for DOM Manipulation, and faster development.", "color:green; background-color:white");
console.info("%cYou are running Domify in development mode.\nMake sure to turn on production mode when deploying for production.\nread the doc: https://github.com/moralistfestus/domify.js", "color:blue; background-color:white");
console.warn('domify.js is now connected you are good to go');


function dom(selector) {

  const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,

    write:(va)=>self.element.textContent=`${va}`,
    // event listener

    // event handler 

    on: (event, callback) => {
      self.element.addEventListener(event, callback)
     },
     
     // remove event listener 
    off: (event, callback) => {
       self.element.removeEventListener(event, callback);
     },
     
     // hide element 
	hide: (time, callback) => {
		if (time == undefined){
			time=0;
		}
		setTimeout(function(){
			self.element.style.display = 'none';
			if (callback != undefined){
				callback();
			}
		},time)
	},
	
     // show element
	 show: (time, callback) => {
		if (time == undefined){
			time=0;
		}
		setTimeout(function(){
			self.element.style.display = 'block';
			if (callback != undefined){
				callback();
			}
		},time)
	},
	
     // print to attr
    output: (value)=> {
      self.element.innerHTML = `${value}`
     },
     // color
    color: (col)=> {
      self.element.style.color = `${col}`
     },
     // background color 
    bgcolor: (bgcol)=> {
      self.element.style.background = `${bgcol}`
     },
     // prevent form action
    prevent() {
      self.element.onsubmit = e => e.preventDefault()
     },
     // add class
     addClass: (list) => {
       self.element.classList.add(list)
     },
     // remove class 
     removeClass: (remove) => {
       self.element.classList.remove(remove)
     },
     // toggle 
     toggleClass: (_toggle) => {
       self.element.classList.toggle(_toggle)
     },
     hasClass: (_value) => {
       return self.element.classList.contains(_value);
     },
     // clipboard
     copy: ()=> {
       self.element.select()
       document.execCommand('copy')
     },
      // fadeIn animation
     fadeIn: (op, timer) => {
       if (op == undefined) {
          op = 0;
         }
       self.element.style.opacity = op;
        op -= op * 0.1;
	   self.element.style.transition = `opacity ${timer}ms`;
			setTimeout(timer, op);
	 },
	
	 // fadeOut animation
	 fadeOut: (op, timer) => {
	   if (op == undefined) {
	     op = 1;
	    }
	  self.element.style.opacity = op;
	  self.element.style.transition = `opacity ${timer}ms`;
	       setTimeout(timer, op);
	 },
	 
	 // localStorage in browser
	 // key - value 
     setState: ()=> {
       if (typeof(Storage) !== "undefined")
        localStorage.setItem(selector, self.element.innerHTML)
       else 
        console.error('No web storage support') 
     },
     
     readState: ()=> {
       if (typeof(Storage) !== "undefined")
        self.element.innerHTML = localStorage.getItem(selector)
       else 
        console.error('No web storage support') 
     },
     
     removeState: ()=> {
       if (typeof(Storage) !== "undefined")
        localStorage.removeItem(selector)
       else 
        console.error('No web storage support') 
     },
     
     clearState: ()=> {
       if (typeof(Storage) !== "undefined")
        localStorage.clear(selector)
       else 
        console.error('No web storage support') 
     },
     
     //  to object 
     parseJSON: (_string)=> {
       return JSON.parse(_string)
     },
     
     // to String 
     toString: (_str)=> {
       return JSON.stringify(_str)
     },
     
     // Web camera
     // getUserMedia() webcam permission
     camera: ()=> {
		if (navigator.mediaDevices.getUserMedia) {
		  navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
		    video = self.element
		    video.srcObject = stream
		  }).catch(err => console.error('Something went wrong'))
		  } else {
		  console.error('No web storage support for web camera eligibility')
		 }
	  },
	   // class attribute
      attr: (name, value) => {
        if(value == null)
          return self.element.getAttribute(name)
        else
          self.element.setAttribute(name, value)
      }

    
   }

  return self
}

//timer
const timer=seli =>{
  const start={
    tag:document.querySelector(seli),
     time:()=>{
         setInterval(()=>{
          const dt=new Date();
          const timm=dt.toLocaleTimeString()
          start.tag.innerHTML=`${timm}`
         },1000)
     }

  }

  return start;
  
}

// was very busy just added timer function 
//gonna add more