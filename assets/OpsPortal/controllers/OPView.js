
steal(
	// List your Controller's dependencies here:
	function () {
		System.import('appdev').then(function () {
			steal.import('appdev/ad',
				'appdev/control/control',
				'OpsPortal/classes/OpsTool',
				'site/labels/app_builder').then(function () {


					// OPView
					//
					// An Generic OpsPortal View that will request it's 
					// configuration information from an API, and then load the 
					// dependend Models and Controllers as a result.
					//
					// The OPView requires 2 options:
					//     options.url		the url to the api that will 
					// 						return the config data
					//     options.key		the container ID required by the
					//						loaded controller to attach it's 
					// 						webix components to. 
					//
					// 

					// Namespacing conventions:
					// AD.Control.OpsTool.extend('[ToolName]', [{ static },] {instance} );
					AD.Control.OpsTool.extend('OPView', {
						

						init: function (element, options) {
							var _this = this;
							options = AD.defaults({
								key: '',	// the div.id that the dependent webix data will attach to.
								url: '',  	// the url to use to GET the config data
								// templateDOM: '/opstools/BuildApp/views/BuildApp/BuildApp.ejs',
								resize_notification: 'OPView.resize',
								tool: null   // the parent opsPortal Tool() object
							}, options);
							this.options = options;

							// Call parent init
							this._super(element, options);
console.error('*** OPView.init() *** ');
							
							// a Deferred representing if our view is ready
							this.dfdReady = AD.sal.Deferred();

			
							if (this.options.url != '') {
								AD.comm.service.get({ url: this.options.url })
								.fail(function(err){
									AD.error.log('Error loading OPView url:'+_this.options.url, {url: _this.options.url, error:err });
									_this.dfdReady.reject(err);
								})
								.then(function( viewData ){


									_this.initDOM();

									// now begin to load any dependent models and controllers:
console.error('... viewData:', viewData);

								})
							} else {
console.error('... OPView.init() : no url provided to this OPView!');
							}

							// this.data = {};

							// this.initDOM();
							// this.initControllers();
							// this.initEvents();

							// this.translate();
						},



						initDOM: function () {

							// insert the container <div> for the controller that will 
							// attach webix to this:
							var div = '<div id="'+this.options.key+'"></div>';
							this.element.html(div);
						},


						initControllers: function () {

							this.controllers = {};  // hold my controller references here.

							var AppList = AD.Control.get('opstools.BuildApp.AppList'),
								AppWorkspace = AD.Control.get('opstools.BuildApp.AppWorkspace');

							this.controllers.AppList = new AppList(this.element.find(".ab-app-list"), { selectedAppEvent: this.CONST.APP_SELECTED });
							this.controllers.AppWorkspace = new AppWorkspace(this.element.find(".ab-app-workspace"), { backToAppPageEvent: this.CONST.GO_TO_APP_PAGE });
						},


						initEvents: function () {
							var self = this;

							self.controllers.AppList.element.on(self.CONST.APP_SELECTED, function (event, app) {
								self.element.find(".ab-app-list").hide();

								self.controllers.AppWorkspace.setApplication(app);
								self.element.find(".ab-app-workspace").show();
								self.controllers.AppWorkspace.resize(self.data.height);
							});

							self.controllers.AppWorkspace.element.on(self.CONST.GO_TO_APP_PAGE, function (event) {
								self.element.find(".ab-app-workspace").hide();
								self.element.find(".ab-app-list").show();
								self.controllers.AppList.resetState();
								self.controllers.AppList.resize(self.data.height);
							});
						},


						ready:function() {
							return this.dfdReady;
						},


						resize: function (data) {
							this._super(data);
							// this.data.height = data.height;

							// $('.ab-main-container').height(data.height);

							// this.controllers.AppList.resize(data.height);
							// this.controllers.AppWorkspace.resize(data.height);
						}

					});

				});
		});

	});