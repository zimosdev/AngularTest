import { HomeComponent }  from './home/home.component';

import { LoginComponent }      from './login/login.component';
import { RegisterComponent }   from './register/register.component';
import { HelloComponent }   from './hello/hello.component';

/*
import { ContactComponent }    from './contact/contact.component';
*/
export const appStates = [
     { name: 'hello', url: '',  component: HelloComponent },
    // 1st State
    { name: 'home', url: '/home',  component: HomeComponent},
    
    { name: 'login', url: '/login',  component: LoginComponent },
    // 3rd State
    { name: 'register', url: '/register',  component: RegisterComponent },
   /*
    // 4th State
    { name: 'contact', url: '/contact',  component: ContactComponent }
    */
];


