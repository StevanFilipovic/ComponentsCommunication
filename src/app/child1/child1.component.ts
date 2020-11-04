import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component {
  name = "Child 1";
  @Output() tipOutputPorukaZaChild2 = new EventEmitter<any>();

  porukaZaSlanje = "";

  posaljiPorukuNaChild2() {
    this.tipOutputPorukaZaChild2.emit(this.porukaZaSlanje);
  }
}
