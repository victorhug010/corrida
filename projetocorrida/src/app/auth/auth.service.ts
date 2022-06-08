import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() {
    }
    
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('user');
        return token != null; 
    }
}