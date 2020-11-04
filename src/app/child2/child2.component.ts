import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
})
export class Child2Component {
  @Input() promenljivaKojaDobijaVrednostOdEventa: any[];

  name = "Child 2";
}
