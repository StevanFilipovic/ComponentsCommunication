import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(Child1Component, { static: false }) child1: Child1Component;

  name = "Parent";
  promenljivaKojaDobijaVrednostOdEventa: any;

  funkcijaKojaSetujeVrednostPromenljiveKojuPrihvataInputChilda($event) {
    this.promenljivaKojaDobijaVrednostOdEventa = $event;
  }
}
