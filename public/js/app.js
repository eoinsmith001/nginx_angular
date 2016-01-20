angular.module('routerApp', ['routerRoutes'])
  .controller('mainController', function() {
    var vm = this;
    vm.bigMessage = 'Smooth Sea never made Skilled Sailor';
  })
  .controller('homeController', function($state) {
    var vm = this;
    console.log('homeController active', $state.params);
    vm.message = 'This is the homepage';
    vm.submessage= 'Querystring, foo = '+$state.params.foo;
  })
  .controller('aboutController', function() {
    var vm = this;
    vm.message = 'This is the about page';
  })
  .controller('contactController', function() {
    var vm = this;
    vm.message = 'This is the contact page';
  });
