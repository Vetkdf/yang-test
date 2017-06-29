import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //如果用户已经登录就放行
    if (sessionStorage.getItem('userId') !== null) { return true; }

    //取得用户访问的URL
    let url: string = state.url;
    //否则，存储要访问的URl到本地
    sessionStorage.setItem('redirectUrl', url);
    //然后导航到登陆页面
    this.router.navigate(['/public/login']);
    //返回false，取消导航
    return false;

  }

}
