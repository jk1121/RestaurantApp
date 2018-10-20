import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { MenuComponent } from "../menu/menu.component";
import { DishdetailComponent } from "../dishdetail/dishdetail.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { Component } from "@angular/core";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "menu", component: MenuComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];
