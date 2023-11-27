import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


//we mainly use this for authorization
@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // // validation request
    // const hasBlackBelt = request.user.belts.includes('black')
    // return hasBlackBelt //if its true the everything is okay while if its false we will get a forbidden call
    return true; 
  }
}
