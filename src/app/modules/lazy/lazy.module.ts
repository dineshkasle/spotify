import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song/song.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: SongComponent , pathMatch: 'full'},
]

@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyModule { }
