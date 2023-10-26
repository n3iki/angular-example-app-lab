import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent  {

  headerText = "Testing Angular Applications";

  constructor(public router: Router) { }

  showFeedbackPage(): void {
    this.router.navigate(["feedback"]);
  }

}
