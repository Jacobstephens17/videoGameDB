import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
       req = req.clone({
           setHeaders: {
                'x-rapidapi-key': '2e0754eab6msh9d7f01304130cc1p14becejsnb1268628f609',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',  
           },
           setParams: {
               key: '7d07383c1ed1486baf7db1af710524a4'
           }
       })
       return next.handle(req)
    }
}