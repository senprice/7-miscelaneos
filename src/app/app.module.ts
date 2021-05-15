import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//plugins
import { IonicStorageModule } from '@ionic/storage';
import { AjustesProvider } from '../providers/ajustes/ajustes';

@NgModule({
  declarations: [
    MyApp,
    Pagina2Page,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pagina2Page,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider
  ]
})
export class AppModule {}
