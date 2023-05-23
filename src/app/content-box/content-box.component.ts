import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';



@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent {
  /*public loadingStep: boolean = false;

  selectionChanged(event: any) {
    this.selectedStepIndex = event.selectedIndex;
    if (event.previouslySelectedIndex > event.selectedIndex) {
        this.loadingStep = true;
        //Wait 1 sec. before showing the step
        setTimeout(() => {
            this.navigate();
            this.loadingStep = false;
        }, 1000);
    } else {
        this.navigate();
    }
}

private navigate(): void {
    const url = '/some-path/' + this.links[this.selectedStepIndex].path;
    this.router.navigate([url]);//using -> private router: Router
}*/
}
