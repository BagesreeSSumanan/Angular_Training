"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Editor"] = 2] = "Editor";
    Role[Role["Viewer"] = 3] = "Viewer";
})(Role || (Role = {}));
function GetAccess(userRole) {
    switch (userRole) {
        case Role.Admin:
            console.log("Admin has full access");
            break;
        case Role.Editor:
            console.log("Editor can only view and edit content");
            break;
        case Role.Viewer:
            console.log("Viewer can only view the content");
            break;
        default:
            console.log("Invalid role");
    }
}
var input = readline.question("Enter role id : ");
var UserRole = Number(input);
GetAccess(UserRole);
