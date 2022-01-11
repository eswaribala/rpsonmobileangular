import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { RankingComponent } from './ranking/ranking.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule


  ],
    providers: [
      Apollo,HttpLink,
      {
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'http://localhost:4201/graphql',
            }),
          };
        },
        deps: [HttpLink],
      },
    ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
