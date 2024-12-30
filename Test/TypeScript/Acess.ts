declare module "readline-sync";
import * as readline from "readline-sync";

enum Role {
    Admin = 1,
    Editor = 2,
    Viewer = 3,
}

function GetAccess(userRole: Role): void {
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

const input = readline.question("Enter role id : ");
const UserRole = Number(input);

GetAccess(UserRole as Role);