import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
// import { NoopAnimationPlayer } from '@angular/animations';
import { MaterialModule } from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';

//component
import { AppComponent }  from './page/app.component';
import { Location } from '@angular/common';
//webapi
// import { UserApiService,MsgApiService,DictionaryApiService,FileApiService} from './service/webApi.service';
//local service
import { GlobalService } from './common/service/global.service';
//service
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
// import { LocalStorage } from './service/localStorage.service'
// import { SelectionsService } from './service/selections.service'
//pipe
//import {SelectionPipe} from './common/pipe/selection.pipe'

// const appRoutes : Routes = [
    // {path:'main',component:AppComponent},
    // {path:'',component:AppComponent},
    // {path:'**',component:AppComponent}
// ];

@NgModule({
    imports:[BrowserModule,HttpModule],
    declarations:[AppComponent],
    providers:[GlobalService,Location,CookieService,FileUploadModule],
    bootstrap:[AppComponent]
})

export class AppModule {

}