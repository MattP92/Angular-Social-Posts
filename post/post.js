"use strict"
{
    angular.module('app')
        .component('post', {
            templateUrl: 'post/post.html',
            controller: 'postController',
            bindings:{
                post: '<'
            }
    })
}