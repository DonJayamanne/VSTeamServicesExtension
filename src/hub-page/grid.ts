/// <reference path='../../typings/main.d.ts' />
import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids"); 
export function buildGrid($container: JQuery): Grids.Grid {
    var data = [
        { Column1: "1a", Column2: "1b", Column3: "1c", Column4: "1d" },
        { Column1: "2a", Column2: "2b", Column3: "2c", Column4: "2d" },
        { Column1: "3a", Column2: "3b", Column3: "3c", Column4: "3d" },
        { Column1: "4a", Column2: "4b", Column3: "4c", Column4: "4d" },
        { Column1: "5a", Column2: "5b", Column3: "5c", Column4: "5d" }
    ]

    var gridOptions: Grids.IGridOptions = {
        height: "100%",
        width: "100%",
        source: data,
        columns: [
            { text: "Column 1", index: "Column1", width: 100 },
            { text: "Column 2", index: "Column2", width: 200 },
            { text: "Column 3", index: "Column3", width: 450 },
            { text: "Column 4", index: "Column4", width: 150 }
        ],
        gutter: {
            contextMenu: true
        }
    };

    return Controls.create(Grids.Grid, $container, gridOptions);
}