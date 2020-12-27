import routes from "./routes";

export const localsMiddleWare = (req, res, next) =>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated:true,
        id:5,
    }
    next(); // app.js - Middleware가 connection과 router들 사이에 있어서 
}