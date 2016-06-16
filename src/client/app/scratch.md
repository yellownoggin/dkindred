<!--


 export interface IHumanizeFilter         {
     humanizeDoc(doc: string): string
 }


 //////////////////

  class humanizeDocFilter implements IHumanizeFilter {
     constructor() { }

     public humanizedDoc(doc: string): string {
         var linkTitle: string;
         linkTitle =  doc.label || doc.name;
         return linkTitle;
         }

 }
     location resource: remember it as a doc parameter in order to decipher for thedirective: https:github.com/angular/material/blob/6515150446c4b8c9b2b987cb2f5ebfe2740a866f/docs/app/js/app.js#L761
     function() {
       return function(doc) {
         if (!doc) return;
         if (doc.type === 'directive') {
           return doc.name.replace(/([A-Z])/g, function($1) {
             return '-'+$1.toLowerCase();
           });
         }
         return doc.label || doc.name;
       };
     })
 -->
