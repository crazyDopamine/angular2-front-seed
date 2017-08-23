/**
 * Created by dongwei on 2016/11/18.
 */
import "./imports"
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);