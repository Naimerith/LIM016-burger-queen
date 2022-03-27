import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return this.authService.userData$.pipe(
      map(user => {
        //console.log(user)
        if (!user) { //Si no hay usuario activo
          this.router.navigate(['/tables']) //no entra a esta ruta
          this.router.navigate(['/menu']) //no entra a esta ruta
          this.router.navigate(['/pedidos']) //no entra a esta ruta
          this.router.navigate(['/cocina']) //no entra a esta ruta
          return false //esto quiere decir que no entra 
        }
        return true//caso contrario si entra (si hay usuario activo)
        // if (user.uid === 'pTftFqY78KcEjD65gqbMkDniXfd2') {
        //   this.router.navigate(['/cocina']) //no entra a esta ruta
        //   console.log('no entra a cocina')
        //   return false //esto quiere decir que no entra 
        // }
      })

    )
  }
}
