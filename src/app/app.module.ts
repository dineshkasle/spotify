import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FooterComponent } from './core/footer/footer.component';
import { LibrarySongsComponent } from './modules/library-songs/library-songs.component';
import { SongListComponent } from './modules/song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    LibrarySongsComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
