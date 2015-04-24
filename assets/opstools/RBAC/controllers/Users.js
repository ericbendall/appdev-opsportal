
steal(
        // List your Controller's dependencies here:
        'appdev',
        'opstools/RBAC/models/SiteUser.js',
        'opstools/RBAC/models/Permission.js',
        'opstools/RBAC/models/PermissionRole.js',
        'opstools/RBAC/models/PermissionScope.js',
//        'appdev/widgets/ad_delete_ios/ad_delete_ios.js',
        // '//opstools/RBAC/views/Users/Users.ejs',
function(){

    //
    // Users 
    // 
    // This is the interface for managing the list of Users and their 
    // assignment QuickView.
    //
    //

    // Namespacing conventions:
    // AD.Control.extend('[application].[controller]', [{ static },] {instance} );
    AD.Control.extend('opstools.RBAC.Users', {  


        init: function (element, options) {
            var self = this;
            options = AD.defaults({
                    // templateDOM: '//opstools/RBAC/views/Users/Users.ejs'
            }, options);
            this.options = options;

            // Call parent init
            this._super(element, options);


            this.dom = {};      // hold all our DOM widgets:
            this.data = {};     // hold any data we are working with.
            this.data.permissions = [];  // all permission fields
            this.data.roles = [];   // all the roles in the system
            this.data.scopes = [];  // all the scopes in the db


            this.initDOM();
            this.loadData();
        },



        initDOM: function () {
            var _this = this;

            // this.element.html(can.view(this.options.templateDOM, {} ));


            //// 
            //// Create a template for our User List:
            //// 

            // register template as :  'FCFActivities_ActivityReport_ActivityTaggedPeople'
            //  NOTE:  DON'T USE '.' as seperators here!!!  -> can.ejs thinks they are file names then... doh!
            var templateUserList =  this.domToTemplate(this.element.find('#userList>tbody'));
            can.view.ejs('RBAC_User_UserList', templateUserList);

            // remove the template from the DOM
            this.dom.listUsers = this.element.find('#userList');
            this.dom.listUsersTbody = this.dom.listUsers.find('tbody');
            this.dom.listUsersTbody.html(' ');



            this.dom.listAssignments = this.element.find('.rbac-user-table-assignments');
            this.dom.listAssignmentsTbody = this.dom.listAssignments.find('tbody');
            var templateAssignmentList = this.domToTemplate(this.dom.listAssignmentsTbody);
            can.view.ejs('RBAC_User_AssignmentList', templateAssignmentList);
            this.quickviewClear();



            // attach the FilteredBootstrapTable Controller
            var Filter = AD.Control.get('OpsPortal.FilteredBootstrapTable');
            this.Filter = new Filter(this.element, {
                tagFilter: '.searchbar',
                tagBootstrapTable: '#userList',
                scrollToSelect:true,

                cssSelected:'orange',

                tableOptions:{

                    columns: [
                        { formatter: function(value, row, index){ return row.numAssignments(); } },
                        // {},
                        // { formatter:'.options' },
                        // {}
                    ]
                },


///// LEFT OFF:
/////   add tr.template  td.options  as a template
/////   add '.options' as a formatter for that column
/////   configure filteredBootstrapTable to search for formatter:'string' entries and 
/////       convert those to a function to pull in the template and return it.

/////   Figure out why we are missing the # Assignments column header for above... 

                // filterTable:true,

                rowClicked:function(data) {

                    if (data) {
                        console.log('... clicked user:', data);
                        // self.selectedActivity = data;
                        // self.nextEnable();
                    }

                },
                rowDblClicked: function(data) {
                    // if they dbl-click a row,
                    // just continue on as if they clicked [next]
                    if (data) {
                        console.log('... dbl.clicked user:', data);
                    }
                },
                termSelected:function(data) {

                    // if they select a term in the typeahead filter,
                    // just continue on as if they clicked [next]
                    if (data) {
                        console.log('... search selected user:', data);
                    }
                },
                dataToTerm: function(data) {  
                    if (data) {
                        return data.username;
                    } else {
                        return '';
                    }
                }
            });


        },



        loadData: function( id ) {
            var _this = this;

//             var User = AD.Model.get('opstools.RBAC.SiteUser');
//             User.findAll()
//             .fail(function(err){
// //// TODO: handle Error properly!
//             })
//             .then(function(list){
//                 _this.dom.listUsersTbody.html(' ');
//                 _this.dom.listUsersTbody.append(can.view('RBAC_User_UserList', {users: list }));
//             })


//             var Roles = AD.Model.get('opstools.RBAC.PermissionRole');
//             Roles.findAll()
//             .fail(function(err){
// //// TODO: handle Error properly!
//             })
//             .then(function(list){
//                 // make sure they are all translated.
//                 list.forEach(function(l){
//                     l.translate();
//                 })
//                 _this.data.roles = list;    // all the 
//             })


//             var Scopes = AD.Model.get('opstools.RBAC.PermissionScope');
//             Scopes.findAll()
//             .fail(function(err){
// //// TODO: handle Error properly!
//             })
//             .then(function(list){
//                 // // make sure they are all translated.
//                 // list.forEach(function(l){
//                 //     l.translate();
//                 // })
//                 _this.data.scopes = list;    // all the 
//             })

            var Permissions = AD.Model.get('opstools.RBAC.Permission');

            // if an id is provided, then we are loading a new entry and 
            // adding it to our current list.
            if (id) {

                Permissions.findOne({ id: id })
                .fail(function(err){
//// TODO: handle Error properly!
                })
                .then(function(entry){
                    _this.data.permissions.push( entry );
                })

            } else {

                // else we are loading the initial list!
                Permissions.findAll()
                .fail(function(err){
//// TODO: handle Error properly!
                })
                .then(function(list){
                    _this.data.permissions = list;
                })

            }
            
            

        },



        /** 
         * @function loadRoles
         *
         * load the given list of roles.
         * @param {array/can.List} list  the current list of roles.
         */
        loadRoles: function(list) {
            this.data.roles = list;
        },



        /** 
         * @function loadScopes
         *
         * load the given list of scopes.
         * @param {array/can.List} list  the current list of scopes.
         */
        loadScopes: function(list) {
            this.data.scopes = list;
        },



        /** 
         * @function loadUsers
         *
         * load the given list of users.
         * @param {array/can.List} list  the current list of users.
         */
        loadUsers: function(list) {
            this.data.users = list;
            this.refresh();
        },



        /** 
         * @function refresh
         *
         * Redraw the list of users
         */
        refresh: function() {

            this.Filter.load(this.data.users);
            this.Filter.ready();

            // this.dom.listUsersTbody.html(' ');
            // this.dom.listUsersTbody.append(can.view('RBAC_User_UserList', {users: this.data.users }));
        },



        quickviewClear: function() {
            this.dom.listAssignmentsTbody.html('');
        },


        quickviewShow: function(permissions) {
            this.quickviewClear();
            this.dom.listAssignmentsTbody.append(can.view('RBAC_User_AssignmentList', { list:permissions, listPermissions:this.data.permissions, listRoles:this.data.roles, listScopes:this.data.scopes }));
            // this.assignmentsLoad(permissions);

        },



        // when the user clicks on the [quickview] icon:
        '.rbac-user-perm-quickview click': function($el, ev) {

            var user = $el.data('user');
            this.quickviewShow(user.permission);

        },



        // when the user clicks on the [add] icon:
        '.rbac-user-perm-add click': function($el, ev) {

            var user = $el.data('user');
            
            // emit the AssignmentAdd event:
            this.element.trigger(this.options.eventAssignmentAdd, user );

            ev.preventDefault();

        },



        '.ad-item-add click': function ($el, ev) {

            ev.preventDefault();
        }


    });


});