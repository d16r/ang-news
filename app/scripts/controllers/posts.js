'use strict';

app.controller('PostsCtrl', function($scope, Post) {
    $scope.post = { url: 'http://', title: ''};
    $scope.posts = [];

    $scope.submitPost = function() {
        Post.save($scope.post, function(ref){
            $scope.posts[ref.name] = $scope.post;
            $scope.post = { url: 'http://', title: ''};
        });
    };

    $scope.deletePost = function(index) {
        $scope.posts.splice(index, 1);
    }
});