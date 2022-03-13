import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewTubeComponent } from './view-tube/view-tube.component';
import { CreateVideoComponent } from './create-video/create-video.component';

const routes: Routes = [



  { path: 'viewTube', component: ViewTubeComponent },
  {
    path: 'createvideo', component: CreateVideoComponent,
    children: [
      { path: 'upload', component: UploadComponent },
      { path: 'liveStream', component: LiveStreamComponent },]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
