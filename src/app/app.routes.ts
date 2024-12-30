import { useAnimation } from '@angular/animations';
import { Routes } from '@angular/router';
import { UserLogincomponantComponent } from './Homepage/user-logincomponant/user-logincomponant.component';
import { HomecomponantComponent } from './Homepage/homecomponant/homecomponant.component';
import { AdminlogincomponantComponent } from './Homepage/adminlogincomponant/adminlogincomponant.component';
import { AboutcomponantComponent } from './Homepage/aboutcomponant/aboutcomponant.component';
import { UsersignupcomponantComponent } from './Homepage/usersignupcomponant/usersignupcomponant.component';
import { CandidatecomponantComponent } from './Homepage/candidatecomponant/candidatecomponant.component';
import { CandidateloginComponent } from './Homepage/candidatelogin/candidatelogin.component';
import { ResultcomponantComponent } from './Homepage/resultcomponant/resultcomponant.component';
import { AdminComponent } from './Homepage/admin/admin.component';
import { ContactQueriesComponent } from './Homepage/contact-queries/contact-queries.component';
import { Home1componantComponent } from './Homepage/home1componant/home1componant.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { VoteComponent } from './vote/vote.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponantComponent } from './authentication-componant/authentication-componant.component';
import { SubmitvotecomponantComponent } from './submitvotecomponant/submitvotecomponant.component';
import { EmaolcomponantComponent } from './emaolcomponant/emaolcomponant.component';
import { Component } from '@angular/core';
import { EmailsubmitComponent } from './emailsubmit/emailsubmit.component';
import { CalvotescomponantComponent } from './calvotescomponant/calvotescomponant.component';
import { LeadadmincomponantComponent } from './leadadmincomponant/leadadmincomponant.component';

export const routes: Routes = [

{
    path:'',
    component:HomecomponantComponent
    

},

    {
        path:'userlogin',
        component:UserLogincomponantComponent
    },

    {
       path:'Admin',
       component:AdminlogincomponantComponent
    },

    {
        path:'about',
        component:AboutcomponantComponent
        
    },
    {
       path:"signup",
       component:UsersignupcomponantComponent 
    },
    {
        path:"candidatesignup",
        component:CandidatecomponantComponent
    },
    {
        path:"candidates",
        component:CandidateloginComponent
    },
    // {
    //     path:'votes',
    //     component:VotescomponantComponent
    // },
    {
        path:"result",
        component:ResultcomponantComponent
    },
    {
        path:"admindashboard",
        component:AdminComponent
    },
    {
        path:"contactQ",
        component:ContactQueriesComponent
    },
    {
        path:"Home1",
        component:Home1componantComponent
    },
    {
      path: "home2",
      component:HomeComponent
    },
    {
        path:"logout",
        component:LogoutComponent
    },
    {
        path:'vote1',
        component:VoteComponent
    },
    {
        path:'result',
        component:ResultComponent
    },
    {
        path:'about1',
        component:AboutComponent
    },
    {
        path:'contact1',
        component:ContactQueriesComponent
    },
    {
        path:'logout',
        component:LogoutComponent
    },
    {
        path:"form",
        component:AuthenticationComponantComponent
    },
    {
        path:"submitvote",
        component: SubmitvotecomponantComponent
    },
    {
        path:"con",
        component:EmaolcomponantComponent
    },
    {
    path:"emailsubmit",
    component:EmailsubmitComponent
    },
    {
        path:"calvote",
        component:CalvotescomponantComponent
    },
    {
        path:"lead",
        component:LeadadmincomponantComponent
    }
];
