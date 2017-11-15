import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';


import {Apollo} from 'apollo-angular';
import {ApolloModule} from 'apollo-angular';
import {HttpLink} from 'apollo-angular-link-http';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

import {AppComponent} from './app.component';
import {FollowListComponent} from './components/follow-list/follow-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FollowListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor( apollo: Apollo,
               httpLink: HttpLink ) {

    const http = httpLink.create({uri: 'https://api.github.com/graphql'});
    const token = '...'; // token from github

    const middleware = setContext(() => ({
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }));

    apollo.create({
      link: middleware.concat(http),
      cache: new InMemoryCache()
    });
  }
}
