import { Component, VERSION } from "@angular/core";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropDownComponent {
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];
}
