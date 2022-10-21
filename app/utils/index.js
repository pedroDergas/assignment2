/* created by Pedro da Silva Dergado
File name: index.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 10/21/2022
*/
export function UserDisplayName(req) {
    if (req.user) {
        return req.user.displayName;
    }
    return '';
}

export function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next();
}