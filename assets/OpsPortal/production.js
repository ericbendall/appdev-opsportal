steal.has("stealconfig.js","FilteredBootstrapTable.js","OpsButtonBusy.js","OpsPortal/views/MenuList/MenuList.ejs","OpsPortal/views/MenuList/menuItem.ejs","OpsPortal/controllers/MenuList.js","OpsPortal/views/Tool/Tool.ejs","OpsPortal/controllers/Tool.js","OpsPortal/views/ToolArea/tool.ejs","OpsPortal/controllers/ToolArea.js","OpsPortal/views/WorkArea/area.ejs","OpsPortal/controllers/WorkArea.js","OpsPortal/controllers/SubLinks.js","OpsPortal/classes/OpsTool.js","OpsPortal/classes/ValidationDateGreaterThanField.js",
"OpsPortal/classes/ValidationServer.js","OpsPortal/classes/OpsForm.js","OpsPortal/classes/OpsDialog.js","OpsPortal/classes/OpsWidget.js","OpsPortal/views/OpsPortal/OpsPortal.ejs","OpsPortal/views/OpsPortal/taskList.ejs","OpsPortal/controllers/OpsPortal.js","OpsPortal/OpsPortal.js");steal({id:"appdev/production.js",waits:!0,has:"appdev/loading.css appdev/ad.js can/util/can.js can/util/attr/attr.js can/event/event.js can/util/array/each.js can/util/inserted/inserted.js can/util/jquery/jquery.js can/util/util.js can/util/bind/bind.js can/map/bubble.js can/util/string/string.js can/construct/construct.js can/util/batch/batch.js can/map/map.js can/list/list.js can/util/string/deparam/deparam.js can/route/route.js can/control/control.js can/control/route/route.js can/model/model.js can/view/view.js can/compute/compute.js can/view/scope/scope.js can/view/elements.js can/view/callbacks/callbacks.js can/view/scanner.js can/view/node_lists/node_lists.js can/view/parser/parser.js can/view/live/live.js can/view/render.js can/view/bindings/bindings.js can/view/mustache/mustache.js can/observe/observe.js can/component/component.js can/can.js can/view/ejs/ejs.js can/construct/super/super.js js/OpenAjax.js appdev/comm/hub.js appdev/util/uuid.js js/async.js appdev/util/async.js appdev/util/string.js appdev/config/config.js appdev/util/uiScrollbarSize.js appdev/config/data.js appdev/sal/web-jquery.js appdev/comm/socket.js appdev/model/model.js appdev/labels/lang.js appdev/labels/label.js appdev/widgets/ad_ui_reauth/ad_ui_reauth.css appdev/widgets/ad_icon_busy/ad_icon_busy.css appdev/widgets/ad_icon_busy/ad_icon_busy.js appdev/widgets/ad_ui_reauth/reauth_local.ejs appdev/widgets/ad_ui_reauth/reauth_cas.ejs appdev/widgets/ad_ui_reauth/ad_ui_reauth.js appdev/auth/reauth.js appdev/comm/service.js appdev/UIController.js appdev/control/control.js appdev/appdev.js".split(" ")});
steal({id:"OpsPortal/production.css",waits:!0,has:"bootstrap.css styles/bootstrap-theme.min.css styles/jquery.sidr.dark.css OpsPortal/portal-scratch.css OpsPortal/opsportal.css OpsPortal/opsportal-theme.css".split(" ")});steal.pushPending();
steal.config({map:{"*":{"jquery/jquery.js":"jquery"}},paths:{jquery:"js/jquery.min.js","jquery-ui.js":"js/jquery-ui.min.js","bootstrap.js":"js/bootstrap/js/bootstrap.js","bootstrap.css":"js/bootstrap/css/bootstrap.min.css","bootstrap-datetimepicker.js":"js/bootstrap/js/bootstrap-datetimepicker.min.js","bootstrap-datetimepicker.css":"styles/bootstrap-datetimepicker.min.css","font-awesome.css":"styles/font-awesome.css","GenericList.js":"js/GenericList.js","dropzone.js":"js/dropzone/dropzone.min.js",
"dropzone.css":"js/dropzone/dropzone.min.css","bootstrap-table.js":"js/bootstraptable/bootstrap-table.js","bootstrap-table.css":"js/bootstraptable/bootstrap-table.css","bootstrapValidator.js":"js/bootstrapValidator.min.js","bootstrapValidator.css":"styles/bootstrapValidator.min.css","bootbox.js":"js/bootbox.min.js","FilteredBootstrapTable.js":"OpsPortal/controllers/FilteredBootstrapTable.js","OpsButtonBusy.js":"OpsPortal/classes/OpsButtonBusy.js","selectivity.js":"js/selectivity/selectivity-full.min.js",
"selectivity.css":"js/selectivity/selectivity-full.min.css","typeahead.js":"js/typeahead.jquery.min.js","moment.js":"js/moment.min.js"},shim:{jquery:{exports:"jQuery",packaged:!1,ignore:!0},"js/dependencies/sails.io.js":{packaged:!1,ignore:!0},"site/labels/appdev.js":{packaged:!1,ignore:!0},"jquery-ui.js":{packaged:!1},"bootstrap.js":{packaged:!1},"bootstrap-datetimepicker.js":{packaged:!1},"bootstrap-datetimepicker.css":{packaged:!1},"font-awesome.css":{packaged:!1},"js/jquery.sidr.min.js":{packaged:!1},
"dropzone.js":{packaged:!1},"dropzone.css":{packaged:!1},"bootstrap-table.js":{packaged:!1},"bootstrap-table.css":{packaged:!1},"bootstrapValidator.js":{packaged:!1},"bootstrapValidator.css":{packaged:!1},"bootbox.js":{packaged:!1},"opsportal/requirements.js":{packaged:!1,ignore:!0},"opsportal/config":{ignore:!0},"site/labels/OpsPortal.js":{packaged:!1,ignore:!0},"site/labels/opstool-RBAC.js":{packaged:!1,ignore:!0},"selectivity.js":{packaged:!1},"selectivity.css":{packaged:!1},"site/labels/opstool-FCFActivities.js":{packaged:!1,
ignore:!0},"typeahead.js":{packaged:!1},"site/login-done":{packaged:!1},"moment.js":{packaged:!1}},amd:!1});steal.executed("stealconfig.js");
steal("appdev","jquery").then("typeahead.js",function(){AD.Control.extend("OpsPortal.FilteredBootstrapTable",{init:function(a,b){var c=this;this.options=b=AD.defaults({tagFilter:".fe-filter",tagBootstrapTable:".fe-el",scrollToSelect:!0,filterTable:!1,rowStyle:!1,cssSelected:"active",modelID:"id",dataCursorOn:function(){},rowClicked:function(){},rowDblClicked:function(){},rowChecked:function(){},rowUnChecked:function(){},termSelected:function(){},dataToTerm:function(a){return a+""},tableOptions:{},
data:null},b);"undefined"==typeof this.options.tableOptions.rowStyle&&(this.options.tableOptions.rowStyle=this.options.rowStyle?this.options.rowStyle:function(a,b){return c.rowStyle(a,b)});this.searchTerms=[];this.dataHash={};this.posHash={};this.hasTableTemplate=!1;this.templateID="";this.table=this.selectionField=this.selectedModel=null;this.listData=this.options.data;this.attachDOM();this.options.data&&this.load(this.options.data)},newFormatterFN:function(a){return function(b,c,d){return $("<div/>").append(can.view(a,
{value:b,row:c,index:d})).html()}},attachDOM:function(){var a=this;this.textFilter=this.element.find(this.options.tagFilter).typeahead({hint:!0,highlight:!0,minLength:0},{name:"teams",displayKey:"value",source:function(c,b){a.filter(c,b)}});this.textFilter.on("typeahead:closed",function(){});this.textFilter.on("typeahead:cursorchanged",function(){var c=a.textFilter.typeahead("val");(c=a.dataHash[c])&&a.options.dataCursorOn(c)});this.textFilter.on("typeahead:selected",function(){var c=a.textFilter.typeahead("val");
a.options.scrollToSelect&&a.table.bootstrapTable("scrollTo",a.posHash[c]);var b=a.dataHash[c];b&&(a.selectRow(b),a.load(a.listData),AD.sal.setImmediate(function(){a.options.termSelected(b)}))});this.textFilter.on("typeahead:autocompleted",function(){var c=a.textFilter.typeahead("val");a.options.scrollToSelect&&a.table.bootstrapTable("scrollTo",a.posHash[c]);var b=a.dataHash[c];b&&(a.textFilter.typeahead("close"),a.selectRow(b),a.load(a.listData),AD.sal.setImmediate(function(){a.options.termSelected(b)}))});
this.table=this.element.find(this.options.tagBootstrapTable);var b=!1;this.options.tableOptions.columns&&this.options.tableOptions.columns.forEach(function(c){if(c.formatter&&"string"==$.type(c.formatter)){var d=a.element.find(c.formatter);if(0==d.length)console.error("*** column.formatter provided, but no template found!"),console.warn("   column.formatter=["+c.formatter+"]");else{var f="FBT"+AD.util.uuid(),d=a.domToTemplate(d);can.view.ejs(f,d);c.formatter=a.newFormatterFN(f);b=!0}}});b&&this.table.find("tbody").html(" ");
this._tableAttach()},_tableAttach:function(){var a=this;this.table.bootstrapTable(this.options.tableOptions);this.table.on("click-row.bs.table",function(b,c,d){a.selected(d);a.options.rowClicked(c)}).on("dbl-click-row.bs.table",function(b,c,d){a.selected(d);a.options.rowDblClicked(c)}).on("check.bs.table",function(b,c){a.options.rowChecked(c)}).on("uncheck.bs.table",function(b,c){a.options.rowUnChecked(c)})},checkEntries:function(a){var b=this;if(a){this.table.bootstrapTable("uncheckAll");var c=[];
a.forEach(function(a){c.push(a[b.options.modelID])});this.table.bootstrapTable("checkBy",{field:this.options.modelID,values:c})}},filter:function(a,b){var c,d;c=[];""!=a?(d=RegExp(AD.util.string.quoteRegExp(a),"i"),$.each(this.searchTerms,function(a,b){d.test(b)&&c.push({value:b})}),this.options.filterTable&&this.filterElements(c)):this.options.filterTable&&this.table.bootstrapTable("load",this.listData);b(c)},filterElements:function(a){var b=this,c=[];a.forEach(function(a){(a=b.dataHash[a.value])&&
c.push(a)});this.table.bootstrapTable("load",c)},load:function(a){var b=this;this.listData=a;this._load();a.bind&&this.listData.bind("change",function(){b._load()})},_load:function(){var a=this;this.searchTerms=[];this.dataHash={};this.posHash={};this.table.bootstrapTable("load",[]);var b=[];this.listData.forEach(function(a){b.push(a)});this.table.bootstrapTable("load",b);var c=0;this.listData.forEach(function(b){var f=a.options.dataToTerm(b);a.searchTerms.push(f);a.dataHash[f]=b;a.posHash[f]=c;c++})},
busy:function(){this.table.bootstrapTable("showLoading")},ready:function(){this.table.bootstrapTable("hideLoading")},resetView:function(){this.table.bootstrapTable("resetView")},rowStyle:function(a){return this.selectedModel&&a[this.selectionField]==this.selectedModel[this.selectionField]?{classes:this.options.cssSelected}:{}},selectRow:function(a,b){b=b||this.options.modelID;"undefined"!=typeof a[b]?(this.selectedModel=a,this.selectionField=b,this._load()):console.error("FilteredBootstrapTable.selectRow(): model did not contain the given field ["+
b+"]  model:",a)},selected:function(a){this.options.cssSelected&&(this.table.find("."+this.options.cssSelected).removeClass(this.options.cssSelected),a.addClass(this.options.cssSelected))},values:function(){return this.table.bootstrapTable("getSelections")}})});steal.executed("FilteredBootstrapTable.js");
steal("appdev",function(){"undefined"==typeof AD.op&&(AD.op={});AD.op.ButtonBusy=can.Control.extend({},{init:function(a,b){this.options=b=AD.defaults({selectorIcon:".fa",classBusy:"fa-spinner",shouldDisable:true,onClick:function(){}},b);this._super(a,b);this.dom={};this.dom.icon=null;this.busyClass=this.options.classBusy+" fa-pulse";this.initDOM()},busy:function(a){this.dom.icon.addClass(this.busyClass);(a||this.options.shouldDisable)&&this.disable()},disable:function(){this.element.attr("disabled",
"disabled");this.element.addClass("disabled")},enable:function(){this.element.removeAttr("disabled");this.element.removeClass("disabled")},initDOM:function(){var a=this;this.dom.icon=this.element.find(this.options.selectorIcon);this.dom.icon.length==0?console.warn("**** Opsportal.ButtonBusy did not find icon using selector["+this.options.selectorIcon+"]"):this.dom.icon.click(function(b){a.options.onClick(b)})},ready:function(){this.dom.icon.removeClass(this.busyClass);this.enable()}})});steal.executed("OpsButtonBusy.js");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_MenuList_MenuList_ejs",a.EJS(function(b,c){with(c)with(b){var d=[];d.push('<div class="op-widget" id="op-menu-widget">\n\t\n\t<div class="op-widget-body">\n\t\t<ul class="op-list" id="op-list-menu">\n\t\t\t\n\t\t</ul>\n\t</div>\n\t<div class="op-widget-footer">\n\t\t<a class="op-toggle" href="#" title="appDev Designs"><img ');d.push(a.view.txt(2,"img","src",this,function(){var a=[];a.push('src="');a.push('../../images/appdev_logo_white.png"');
return a.join("")}));d.push(" ");d.push(a.view.txt(2,"img","style",this,function(){var a=[];a.push('style="');a.push('width: 70px; height: auto;"');return a.join("")}));d.push(" /></a>\n\t</div>\n</div>");return d.join("")}}))});steal.executed("OpsPortal/views/MenuList/MenuList.ejs");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_MenuList_menuItem_ejs",a.EJS(function(b,c){with(c)with(b){var d=[];d.push('<li class="op-container" area="');d.push(a.view.txt(!0,"li","area",this,function(){return area.key}));d.push('"',a.view.pending({scope:this}),">");d.push("\n\t");d.push(a.view.txt(0,"li",0,this,function(){var a=[];"profile"!=area.key&&a.push('<span class="badge pull-right">8</span>');return a.join("")}));d.push('\n\t<span class="icon op-icon"><i class="fa fa-fw op-icon-fw ');
d.push(a.view.txt(!0,"i","class",this,function(){return area.icon}));d.push('"',a.view.pending({scope:this}),">");d.push("</i></span>");d.push(a.view.txt(1,"li",0,this,function(){return area.label}));d.push("\n</li>\n");return d.join("")}}))});steal.executed("OpsPortal/views/MenuList/menuItem.ejs");
steal("appdev","OpsPortal/views/MenuList/MenuList.ejs","OpsPortal/views/MenuList/menuItem.ejs",function(){AD.Control.extend("OpsPortal.MenuList",{init:function(a,b){var c=this;this.options=AD.defaults({templateDOM:"//OpsPortal/views/MenuList/MenuList.ejs",templateItem:"//OpsPortal/views/MenuList/menuItem.ejs"},b);this.initDOM();AD.comm.hub.subscribe("opsportal.area.new",function(a,b){c.createArea(b)})},createArea:function(a){this.element.find(".op-widget-body > ul").append(can.view(this.options.templateItem,
{area:a}))},initDOM:function(){this.element.html(can.view(this.options.templateDOM,{}))},"#op-list-menu li click":function(a,b){var c=a.attr("area");AD.comm.hub.publish("opsportal.area.show",{area:c});AD.ui.jQuery.sidr("close","op-menu-widget");b.preventDefault()}})});steal.executed("OpsPortal/controllers/MenuList.js");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_Tool_Tool_ejs",a.EJS(function(b,c){with(c)with(b){var d=[];d.push('<div class="panel panel-default">\n    <div class="panel-heading">\n        <a class="ad-item-add btn btn-default" href="#">Add</a>\n        <a class="ad-item-delete btn btn-default" ');d.push(a.view.txt(2,"a","style",this,function(){var a=[];a.push('style="');a.push('float:right"');return a.join("")}));d.push(' href="#">Delete</a>\n    </div>\n    <div class="panel-body">\n        <div class="well" >Content for Tool</div>\n    </div>\n</div>');
return d.join("")}}))});steal.executed("OpsPortal/views/Tool/Tool.ejs");
steal("appdev","OpsPortal/views/Tool/Tool.ejs",function(){AD.Control.extend("OpsPortal.Tool",{init:function(a,b){var c=this;this.options=AD.defaults({templateDOM:"//OpsPortal/views/Tool/Tool.ejs"},b);this.controller={needsUpdate:function(){this._needsUpdate=!0},resize:function(a){this._resize=a}};this.sizeData=null;this.isAreaActive=this.isActive=!1;var d=function(a,b){if(100>b)if(AD.controllers.opstools[a])if(AD.controllers.opstools[a].Tool){var g=c.controller;c.controller=new AD.controllers.opstools[a].Tool(c.element);
g._needsUpdate&&c.controller.needsUpdate();g._resize&&c.controller.resize(g._resize)}else console.warn("controller ("+a+").Tool()   not found!"),console.warn("... waiting to try again"),setTimeout(function(){d(a,b+1)},100);else console.warn("controller ("+a+") not found!"),console.warn("... waiting to try again"),setTimeout(function(){d(a,b+1)},100);else console.error("too many attempts to wait for ["+a+"] to load!")};d(this.options.data.controller,0);AD.comm.hub.subscribe("opsportal.resize",function(a,
b){c.sizeData=b;c.controller&&(c.controller.needsUpdate(),c.isAreaActive&&c.isActive&&c.controller.resize(b))});AD.comm.hub.subscribe("opsportal.area.show",function(a,b){c.areaShow(b)});AD.comm.hub.subscribe("opsportal.tool.show",function(a,b){c.toolShow(b)});this.element.hide()},areaShow:function(a){this.options.areaKey==a.area?(this.isAreaActive=!0,this.isActive&&this.controller.resize(this.sizeData)):this.isAreaActive=!1},initDOM:function(){this.element.html(can.view(this.options.templateDOM,{}))},
resize:function(){this.isActive&&this.controller.resize()},toolShow:function(a){this.options.areaKey==a.area&&(a.tool==this.options.key?this.isActive||(this.isActive=!0,this.element.show(),this.controller.resize(this.sizeData)):this.isActive&&(this.isActive=!1,this.element.hide()))}})});steal.executed("OpsPortal/controllers/Tool.js");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_ToolArea_tool_ejs",a.EJS(function(b,c){with(c)with(b){var d=[];d.push('        <div class="');d.push(a.view.txt(!0,"div","class",this,function(){return key}));d.push('"',a.view.pending({scope:this}),">");d.push("\n                \n\t\t</div>");return d.join("")}}))});steal.executed("OpsPortal/views/ToolArea/tool.ejs");
steal("appdev","OpsPortal/controllers/Tool.js","OpsPortal/views/ToolArea/tool.ejs",function(){AD.Control.extend("OpsPortal.ToolArea",{init:function(a,b){var c=this;this.options=AD.defaults({template_tool:"//OpsPortal/views/ToolArea/tool.ejs"},b);this.dataSource=this.options.dataSource;this.listTools={};AD.comm.hub.subscribe("opsportal.tool.new",function(a,b){c.options.key==b.area&&c.createTool(b)});AD.comm.hub.subscribe("opsportal.area.show",function(a,b){c.options.key==b.area?c.element.show():c.element.hide()})},
createTool:function(a){var b="opsportal-area-tool-"+a.controller;this.element.append(can.view(this.options.template_tool,{key:b}));b=new AD.controllers.OpsPortal.Tool(this.element.find("."+b),{key:a.controller,areaKey:this.options.key,data:a});this.listTools[a.controller]=b},initDOM:function(){this.element.html(can.view(this.options.templateDOM,{}))}})});steal.executed("OpsPortal/controllers/ToolArea.js");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_WorkArea_area_ejs",a.EJS(function(b,c){with(c)with(b){var d=[];d.push('            <div class="');d.push(a.view.txt(!0,"div","class",this,function(){return key}));d.push('"',a.view.pending({scope:this}),">");d.push("\n \n            </div>");return d.join("")}}))});steal.executed("OpsPortal/views/WorkArea/area.ejs");
steal("appdev","OpsPortal/controllers/ToolArea.js","OpsPortal/views/WorkArea/area.ejs",function(){AD.Control.extend("OpsPortal.WorkArea",{init:function(a,b){var c=this;this.options=AD.defaults({template_area:"//OpsPortal/views/WorkArea/area.ejs"},b);this.dataSource=this.options.dataSource;this.initDOM();this.listAreas={};AD.comm.hub.subscribe("opsportal.area.new",function(a,b){c.createArea(b)})},createArea:function(a){var b="opsportal-area-"+a.key;this.element.append(can.view(this.options.template_area,
{key:b}));b=new AD.controllers.OpsPortal.ToolArea(this.element.find("."+b),{key:a.key});this.listAreas[a.key]=b},initDOM:function(){}})});steal.executed("OpsPortal/controllers/WorkArea.js");
steal("appdev",function(){AD.Control.extend("OpsPortal.SubLinks",{init:function(a,b){var c=this;this.options=AD.defaults({},b);this.areaLinks={};this.initDOM();AD.comm.hub.subscribe("opsportal.area.new",function(a,b){c.createArea(b)});AD.comm.hub.subscribe("opsportal.tool.new",function(a,b){c.createLink(b)});AD.comm.hub.subscribe("opsportal.area.show",function(a,b){c.showArea(b)});AD.comm.hub.subscribe("opsportal.tool.show",function(a,b){c.updateToolLink(b)})},createArea:function(a){this.element.append(can.view("OpsPortal_SubLinks_Area",
{area:a}));this.areaLinks[a.key]=this.element.find('[area="'+a.key+'"]')},createLink:function(a){var b=this.areaLinks[a.area];b&&b.append(can.view("OpsPortal_SubLinks_Item",{tool:a}))},showArea:function(a){for(var b in this.areaLinks)b==a.area?this.areaLinks[b].show():this.areaLinks[b].hide()},updateToolLink:function(a){var b=this.areaLinks[a.area];b&&(b.find("."+this.cssActive).removeClass(this.cssActive),b.find('[op-tool="'+a.tool+'"]').addClass(this.cssActive))},initDOM:function(){var a=this.domToTemplate(this.element.find("ul"));
this.cssActive=$(a).first().attr("class")||"active";a=a.replace(this.cssActive,"");can.view.ejs("OpsPortal_SubLinks_Item",a);this.element.find("ul").html(" ");a=this.domToTemplate(this.element);can.view.ejs("OpsPortal_SubLinks_Area",a);this.element.html(" ")},".op-masthead-nav-link click":function(a,b){var c=a.data("tool");AD.comm.hub.publish("opsportal.tool.show",{area:c.area,tool:c.controller});b.preventDefault()}})});steal.executed("OpsPortal/controllers/SubLinks.js");
steal("appdev",function(){"undefined"==typeof AD.classes.opsportal&&(AD.classes.opsportal={});AD.classes.opsportal.OpsTool=can.Control.extend({init:function(a,b){this.options=AD.defaults({resize_notification:"opstool.resize"},b);this.shouldUpdateUI=true},needsUpdate:function(){this.shouldUpdateUI=true},resize:function(a){if(this.shouldUpdateUI){AD.comm.hub.publish(this.options.resize_notification,a);this.shouldUpdateUI=false}}});"undefined"==typeof AD.Control.OpsTool&&(AD.Control.OpsTool={extend:function(a,
b,c){if(typeof AD.controllers.opstools=="undefined")AD.controllers.opstools={};var a=a.split("."),d=AD.controllers.opstools;a.forEach(function(a){typeof d[a]=="undefined"&&(d[a]={});d=d[a]});d.Tool=AD.classes.opsportal.OpsTool.extend(b,c)}})});steal.executed("OpsPortal/classes/OpsTool.js");
steal("appdev","jquery","bootstrap.js","bootstrapValidator.js",function(){$.fn.bootstrapValidator.i18n.dateGreaterThan=$.extend($.fn.bootstrapValidator.i18n.dateGreaterThan||{},{"default":"This value must be greater than field (%s)",notInclusive:"Please enter a value greater than %s"});$.fn.bootstrapValidator.validators.dateGreaterThan={validate:function(a,b,c){var d=b.val();if(""===d)return!0;var f=c.field||c.value;if("undefined"==typeof f)return console.error("dateGreaterThan() validation rule: no other field specified:",
c),!0;a=a.getDynamicOption(b,f);d=this._stringToTimestamp(d,c.format);a=this._stringToTimestamp(a,c.format);return{valid:d>a,message:$.fn.bootstrapValidator.helpers.format(c.message||$.fn.bootstrapValidator.i18n.greaterThan["default"],c.value)}},_stringToDate:function(a,b,c){"undefined"==typeof c&&(c="/",-1!=b.indexOf("-")&&(c="-"));var b=b.toLowerCase().split(c),a=a.split(c),d=b.indexOf("mm"),c=b.indexOf("dd"),b=b.indexOf("yyyy"),d=parseInt(a[d]);return new Date(a[b],d-1,a[c])},_stringToTimestamp:function(a,
b,c){return this._stringToDate(a,b,c).getTime()}}});steal.executed("OpsPortal/classes/ValidationDateGreaterThanField.js");steal("appdev","jquery","bootstrap.js","bootstrapValidator.js",function(){$.fn.bootstrapValidator.i18n.server=$.extend($.fn.bootstrapValidator.i18n.server||{},{"default":"The server didn't like this."});$.fn.bootstrapValidator.validators.server={validate:function(){return!0}}});steal.executed("OpsPortal/classes/ValidationServer.js");
steal("appdev","can","bootstrap.js","bootstrapValidator.js","OpsPortal/classes/ValidationDateGreaterThanField.js","OpsPortal/classes/ValidationServer.js",function(){"undefined"==typeof AD.op&&(AD.op={});AD.op.Form=can.Control.extend({},{init:function(){this._Model=null;this.datepickers=[];this.hashElements={};this.listFields=[];this.hashTypes={};this.hashValidations={};this.validator=null;this.isValidated=false},_clearMessages:function(){var a=this;this.listFields.forEach(function(b){a.element.find('[data-bv-icon-for="'+
b+'"]').hide();a.element.find('[data-bv-for="'+b+'"]').hide()})},addField:function(a,b,c){if(this.listFields.indexOf(a)==-1){this.listFields.push(a);(b=="date"||b=="datetime")&&this.datepickers.push(a);this.hashTypes[a]=b;this.hashValidations[a]={validators:c}}},addValidation:function(a,b){var c=this.hashValidations[a];if(c)for(var d in b)c.validators[d]=b[d];else console.warn("*** OpsForm.addValidation() field["+a+"] not found.")},attach:function(){var a=this;this.hashElements={};this.listFields.forEach(function(b){var d=
a.element.find("[name='"+b+"']");d.length>0&&(a.hashElements[b]=d)});this.datepickers.forEach(function(b){var d=a.hashElements[b];if(d){var f={stepping:5};if(a.hashValidations[b]&&a.hashValidations[b].validators.date){var e=a.hashValidations[b].validators.date;e.format=e.format.toUpperCase();f.format=e.format||f.format;if(e.min)f.minDate=e.min;if(e.max)f.maxDate=e.max}d.datetimepicker(f).on("dp.change",function(){a.validator.revalidateField(b)})}});var b={framework:"bootstrap",message:"This value is not valid",
feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"}};b.fields=jQuery.extend(true,{},this.hashValidations);this.validator=this.element.bootstrapValidator(b).data("bootstrapValidator");this.isValidated=false},bind:function(a){var b=this,c=null;if(a.getID&&a.getLabel){c=a;a=a.model()}this._Model=a;this._instance=c;this.datepickers=[];this.hashTypes={};this.hashValidations={};this.listFields=[];var c=this._Model.describe(),d;for(d in c){var f=
c[d],e={};if(a.validations){validations=a.validations[d];validations.forEach(function(a){var c=b.entryToKey(a),a=b.entryToConfig(a);e[c]=a})}e.server={};this.addField(d,f,e)}},clear:function(){this.isValidated=false;this.validator.resetForm(true);this._clearMessages()},elAdd:function(a){var b=this,c=function(a){a.jQuery||(a=$(a));var c={},e=a.attr("data-bv-field")||a.attr("name");b.hashValidations[e]&&(c=b.hashValidations[e]);b.validator.addField(a,c)};$.isArray(a)||a.length?a.each(function(a,b){c(b)}):
c(a)},elRemove:function(a){var b=this;if($.isArray(a)||a.length)a.each(function(a,d){d.jQuery||(d=$(d));b.validator.removeField(d)});else{a.jQuery||(a=$(a));this.validator.removeField(a)}},errorHandle:function(a){a.status&&(a=a.data||a);if(a.error)switch(a.error){case "E_VALIDATION":for(var b in a.invalidAttributes){var c=[];a.invalidAttributes[b].forEach(function(a){c.push(a.message)});this.validator.updateMessage(b,"server",c.join("<br>"));this.validator.updateStatus(b,this.validator.STATUS_INVALID,
"server")}return true;case "E_UNKNOWN":return a.raw&&a.raw[0].err?this.errorHandle(a.raw[0].err):false}console.log(a);return false},errors:function(){return this.validator.getMessages()},isValid:function(){if(this.validator){if(!this.isValidated){this.validator.validate();this.isValidated=true}return this.validator.isValid()}return false},reset:function(){this.isValidated=false;this.validator.resetForm(false);this._clearMessages()},values:function(a){return a?this._valuesSet(a):this._valuesGet()},
_valuesGet:function(){var a={};this.element.find(":input").serializeArray().forEach(function(b){typeof a[b.name]=="undefined"?a[b.name]=b.value:$.isArray(a[b.name])?a[b.name].push(b.value):a[b.name]=[a[b.name],b.value]});for(var b in this.hashTypes)a[b]&&this.hashTypes[b]=="array"&&($.isArray(a[b])||(a[b]=[a[b]]));return a},_valuesSet:function(a){var b=this;this.clear();this.listFields.forEach(function(c){if(a[c]){var d=b.element.find("[name='"+c+"']");d.length>0&&d.val(a[c])}});return null},translateLabels:function(a){$.each(this.labels,
function(){this.translate(a)})},entryToKey:function(a){return a.split(":")[0]},entryToConfig:function(a){var b={},a=a.split(":");if(a.length>1){a.shift();a=a.join(":");try{b=AD.sal.parseJSON(a)}catch(c){console.error("AD.ui.form.entryToConfig():");console.error("!! invalid config options : "+a)}}return b},setupValidations:function(){}})});steal.executed("OpsPortal/classes/OpsForm.js");
steal("appdev",function(){"undefined"==typeof AD.op&&(AD.op={});AD.op.Dialog={Confirm:function(a){bootbox.dialog({title:a.title||"Confirm",message:a.message||"Are you sure you want to do this?",buttons:{yes:{label:a.labelYes||"yes",className:"btn-primary",callback:a.fnYes||function(){}},no:{label:a.labelNo||"no",className:"btn-default",callback:a.fnNo||function(){}}}})}}});steal.executed("OpsPortal/classes/OpsDialog.js");
steal("appdev",function(){"undefined"==typeof AD.op&&(AD.op={});AD.op.Widget=can.Control.extend({},{init:function(a,b){this.options=b=AD.defaults({},b);this._super(a,b);this.initDOM()},initDOM:function(){},resize:function(a){this.element.css("height",a.height+"px");var b=this.element.find(".op-widget-footer").outerHeight(true),c=this.element.find(".op-widget-masthead").outerHeight(true);this.element.find(".op-widget-body").css("height",a.height-c-b+"px")}})});steal.executed("OpsPortal/classes/OpsWidget.js");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_OpsPortal_OpsPortal_ejs",a.EJS(function(a,c){with(c)with(a){var d=[];d.push('<div class="container">\n    <\!-- Masthead --\>\n\t<div class="op-container op-masthead">\n        \n\t\t<div class="op-container" id="op-masthead-menu">\n\t\t\t<a href="#sidr-main"><span class="icon"><i class="fa fa-bars"></i></span> Menu <span class="badge">16</span></a>\n\t\t</div>\n\t\t\n\t\t<div class="op-container" id="op-masthead-nav">\n\t\t\t<ul class="list-unstyled list-inline" area="[[= area.key ]]">\n\t\t\t\t<li class="active" op-tool="[[= tool.controller ]]"><a href="#" class="op-masthead-nav-link" role="button" obj-embed="tool">[[= tool.label ]]</a></li>\n\t\t\t\t<li class="mockup"><a href="#" class="" role="button" obj-embed="tool">Sublink 2</a></li>\n\t\t\t\t<li class="mockup"><a href="#" class="" role="button" obj-embed="tool">Sublink 3</a></li>\n\t\t\t</ul>\n\t\t</div>\n    </div>\n\t\n\t<\!-- Global menu (Widget hidden by default) --\>\n\t<div class="op-menu-widget"></div>\n\t\n\t<\!-- Stage --\>\n\t<div class="op-container op-stage"></div>\n\t\t\n\t<\!-- <div id="opsportal-loading" class="opsportal-content opsportal-loading-global"><div></div></div> --\>\n    \n</div>\n');
return d.join("")}}))});steal.executed("OpsPortal/views/OpsPortal/OpsPortal.ejs");
steal("can/view","can/view/ejs",function(a){return a.view.preloadStringRenderer("OpsPortal_views_OpsPortal_taskList_ejs",a.EJS(function(a,c){with(c)with(a){var d=[];d.push('<\!--<div class="container">\n\t<div class="col-sm-12">\n\t\t<div class="panel panel-default">\n\t\t\t<a href="#" class="op-launch"> Launch OpsPortal </a>\n\t\t</div>\n\t</div>\n</div>--\>\n<div class="panel panel-default op-container">\n    <div class="op-masthead">\n        <a href="#">Enter the Portal <\!-- <span class="badge">16</span> --\></a>\n    </div>\n    <div class="opsportal-list-area">\n        <div class="opsportal-tasklist-menu-widget"></div>\n        <\!-- <div id="opsportal-loading" class="opsportal-content opsportal-loading-global"><div></div></div> --\>\n    </div>\n</div>');return d.join("")}}))});
steal.executed("OpsPortal/views/OpsPortal/taskList.ejs");
steal("appdev","jquery").then("OpsPortal/portal-scratch.css","OpsPortal/opsportal.css","OpsPortal/opsportal-theme.css","OpsPortal/controllers/MenuList.js","OpsPortal/controllers/WorkArea.js","OpsPortal/controllers/SubLinks.js","OpsPortal/classes/OpsTool.js","OpsPortal/classes/OpsForm.js","OpsPortal/classes/OpsDialog.js","OpsPortal/classes/OpsWidget.js","opsportal/requirements.js","//OpsPortal/views/OpsPortal/OpsPortal.ejs","//OpsPortal/views/OpsPortal/taskList.ejs",function(){if("undefined"==typeof a)var a=
AD.ui.jQuery;"undefined"==typeof AD.controllers.opstools&&(AD.controllers.opstools={});AD.Control.extend("OpsPortal.OpsPortal",{init:function(a,c){var d=this;this.options=AD.defaults({templateDOM:"//OpsPortal/views/OpsPortal/OpsPortal.ejs",templateList:"//OpsPortal/views/OpsPortal/taskList.ejs"},c);this.hiddenElements=[];this.initPortal();AD.ui.loading.reset();AD.ui.loading.text("configuring Ops Portal Tools:");AD.ui.loading.resources(2);this.requestConfiguration();var f=function(){d.resize()};AD.ui.jQuery(document).ready(f);
AD.ui.jQuery(window).resize(f);AD.comm.hub.subscribe("opsportal.area.show",function(){setTimeout(f,4)})},initDOM:function(){this.element.html(can.view(this.options.templateList,{}))},initPortal:function(){this.portalPopup=AD.ui.jQuery('<div class="op-portal-popup">');this.portalPopup.hide();this.portalPopup.html(can.view(this.options.templateDOM,{}));this.menu=new AD.controllers.OpsPortal.MenuList(this.portalPopup.find(".op-menu-widget"));this.workArea=new AD.controllers.OpsPortal.WorkArea(this.portalPopup.find(".op-stage"));
this.subLinks=new (AD.Control.get("OpsPortal.SubLinks"))(this.portalPopup.find("#op-masthead-nav"));this.dom={};this.dom.resize={};this.dom.resize.masthead=this.portalPopup.find(".op-masthead");AD.ui.jQuery("body").append(this.portalPopup)},portalDisplay:function(){var b=this;this.hiddenElements=[];a("body").children().each(function(){var c=a(this);if(c!=b.portalPopup){c.hide();b.hiddenElements.push(c)}});this.portalPopup.show()},portalHide:function(){this.hiddenElements.forEach(function(a){a.show()});
this.portalPopup.hide()},resize:function(){var b=a(window).height(),c=this.dom.resize.masthead.outerHeight(true);console.log("//// resize: window.height:"+b+" masthead.outer:"+c);b=a(window).height()-c;AD.comm.hub.publish("opsportal.resize",{height:b-1})},requestConfiguration:function(){var a=this;AD.ui.loading.completed(1);AD.comm.service.get({url:"/opsportal/config"},function(c,d){AD.ui.loading.completed(1);if(!c){AD.ui.loading.resources(d.areas.length);AD.ui.loading.resources(d.tools.length);var f=
{};d.areas[0]&&(f=d.areas[0]);for(var e=0;e<d.areas.length;e++){AD.comm.hub.publish("opsportal.area.new",d.areas[e]);d.areas[e].isDefault&&(f=d.areas[e]);AD.ui.loading.completed(1)}e={};d.tools[0]&&(e[d.tools[0].area]=d.tools[0]);for(var g=0;g<d.tools.length;g++){AD.comm.hub.publish("opsportal.tool.new",d.tools[g]);d.tools[g].isDefault&&(e[d.tools[g].area]=d.tools[g]);AD.ui.loading.completed(1)}a.resize();AD.comm.hub.publish("opsportal.area.show",{area:f.key});for(g in e)AD.comm.hub.publish("opsportal.tool.show",
{area:e[g].area,tool:e[g].controller});a.portalPopup.find("#op-masthead-menu a:first-of-type").sidr({name:"op-menu-widget",side:"left"});a.initDOM()}})},".op-masthead a:first-of-type click":function(a,c){this.portalDisplay();c.preventDefault()},".ad-item-add click":function(a,c){c.preventDefault()},progress:function(a,c){var d=a*c.width()/100;c.find("div").animate({width:d},500).html(a+"%&nbsp;")}})});steal.executed("OpsPortal/controllers/OpsPortal.js");
steal("appdev","jquery").then(function(){AD.ui.loading.attach("#portal");AD.ui.loading.text("preparing OpsPortal ...");AD.ui.loading.resources(19)},"bootstrap.js","bootstrap.css","styles/bootstrap-theme.min.css","styles/jquery.sidr.dark.css","moment.js","js/jquery.sidr.min.js","bootstrap-datetimepicker.css","bootstrapValidator.css","bootbox.js","FilteredBootstrapTable.js","OpsButtonBusy.js","font-awesome.css").then(function(){AD.ui.loading.completed(12)},"jquery-ui.js","bootstrap-table.js","bootstrap-table.css",
"bootstrapValidator.js","bootstrap-datetimepicker.js","OpsPortal/controllers/OpsPortal.js","site/labels/OpsPortal.js").then(function(){AD.ui.loading.completed(7);new AD.controllers.OpsPortal.OpsPortal("#portal");AD.comm.socket.get({url:"/opsportal/socket/register"}).fail(function(a){console.error(a)}).then(function(){console.log("... OPSPORTAL:  socket registered.")})});steal.executed("OpsPortal/OpsPortal.js");steal.popPending();
