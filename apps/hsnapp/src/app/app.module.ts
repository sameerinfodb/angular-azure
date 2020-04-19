import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CompDetailsComponent } from './comp-details/comp-details.component';

@NgModule({
  declarations: [AppComponent, CompDetailsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule
  ],
  providers: [HttpClient, Meta],
  bootstrap: [AppComponent]
})
export class AppModule {}
