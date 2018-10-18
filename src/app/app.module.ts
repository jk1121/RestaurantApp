import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { MatToolbarModule, MatListModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import "hammerjs";
import { MenuComponent } from "./menu/menu.component";
import { DishdetailComponent } from "./dishdetail/dishdetail.component";
import { DishService } from "../app/services/dish.service";

@NgModule({
  declarations: [AppComponent, MenuComponent, DishdetailComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    FormsModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule {}
