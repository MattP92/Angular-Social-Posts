"use strict"
{
    angular.module('app')
        .component('postForm', {
            templateUrl: 'postForm/postForm.html',
            controller: 'postForm',
            bindings:{
                    onSubmit: '<'
            }
    })
}