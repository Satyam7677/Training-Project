var obj = {
    name: "Michael",
     func: ()=> {
         var self = this;
         console.log("outer func: " + this.name);
         console.log("outer func: " + self.name);
         function x() {
             console.log("inner func:  " + this.name);
             console.log("inner func:  " + self.name);
         } 
         
     },
     ca: obj.func()

 };
 obj.func();




