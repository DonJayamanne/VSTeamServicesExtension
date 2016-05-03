/// <reference path='../../typings/main.d.ts' />
import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids");
import Menus = require("VSS/Controls/Menus");
import {buildGrid} from './grid';

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
    WidgetHelpers.IncludeWidgetStyles();
}); 

export class HubView extends Controls.BaseControl {
    private grid: Grids.Grid;
    private menuBar: Menus.MenuBar;

    constructor() {
        super();
    }

    initialize() {
        this.buildMenuBar();

        //Import external modules (not only VSS or TFS modules)
        this.grid = buildGrid(jQuery("div.right-hub-content"));

        //Invoke this method only once we have loaded everything
        //This could be invoked even in a promise callback
        VSS.notifyLoadSucceeded();
    }

    buildMenuBar() {
        var menuItems = <Menus.IMenuItemSpec[]>[
            { id: "ITEM1", text: "Menu Item 1", icon: "icon-open" },
            { separator: true },
            { id: "ITEM2", text: "Menu Item 2", icon: "icon-help" },
            { separator: true },
            { id: "ITEM3", text: "Menu Item 3", icon: "icon-new" }
        ];

        var menubarOptions = {
            items: menuItems,
            executeAction: this.menuHandler.bind(this)
        };

        var $container = $(".menu-container");
        this.menuBar = Controls.create<Menus.MenuBar, any>(Menus.MenuBar, $container, menubarOptions);
    }

    private menuHandler(args) {
        var command = args.get_commandName();
        alert(`Selected Menu Item Command is = "${command}"`);
    }
}

Controls.Enhancement.registerEnhancement(HubView, ".hub-view");
