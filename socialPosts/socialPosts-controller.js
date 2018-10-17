"use strict";
{
    angular.module('app')
    .controller('socialPosts', function(){
        let $ctrl = this;
            $ctrl.social =[
                {
            title:"Dog",
            thought: "Lorem ipsum dolor sit amet, ex soluta aperiam sea, pro novum fastidii deseruisse no. Vis ei ipsum graece, ei mutat adolescens qui, eu sale autem utamur cum. Mel cu justo porro ludus, eu his probo justo. Sed probo dolores mediocritatem ut",
                },
                
                {
            title:"Cat",
            thought: "Lorem ipsum dolor sit amet, ex soluta aperiam sea, pro novum fastidii deseruisse no. Vis ei ipsum graece, ei mutat adolescens qui, eu sale autem utamur cum. Mel cu justo porro ludus, eu his probo justo. Sed probo dolores mediocritatem ut",
                },
                
                {
            title:"Pig",
            thought: "Lorem ipsum dolor sit amet, ex soluta aperiam sea, pro novum fastidii deseruisse no. Vis ei ipsum graece, ei mutat adolescens qui, eu sale autem utamur cum. Mel cu justo porro ludus, eu his probo justo. Sed probo dolores mediocritatem ut",
                },
                
                {
            title:"Cow",
            thought: "Lorem ipsum dolor sit amet, ex soluta aperiam sea, pro novum fastidii deseruisse no. Vis ei ipsum graece, ei mutat adolescens qui, eu sale autem utamur cum. Mel cu justo porro ludus, eu his probo justo. Sed probo dolores mediocritatem ut",
                },

                {
            title:"Whale",
            thought: "Lorem ipsum dolor sit amet, ex soluta aperiam sea, pro novum fastidii deseruisse no. Vis ei ipsum graece, ei mutat adolescens qui, eu sale autem utamur cum. Mel cu justo porro ludus, eu his probo justo. Sed probo dolores mediocritatem ut",
                }];
        
        $ctrl.addPost=function(post){
            $ctrl.social.unshift(post);
            $ctrl.show = false;
        };
        
        $ctrl.showForm=function(){
            $ctrl.show = true;
            
        };
    }
)
}