import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
    let router = inject(Router);

    if (!localStorage.getItem("userID")) {
        void router.navigate(['/login']);
    }
    return true;
};
