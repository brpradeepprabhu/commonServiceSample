import { Component } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = { name: "CommonService", type: "Angular Service" }
  CodeModule = "import { CommonService } from './common.service'; <br/> @NgModule({declarations: [AppComponent],<br/>  imports: [<br/>   BrowserModule,<br/>   FormsModule,<br/>   HttpModule],<br/>  providers: [CommonService], <br/>  bootstrap: [AppComponent]<br/>})";
  sampleDate = '{ name: "CommonService", type: "Angular Service" }';
  undefinedData; definedData;
  constructor(private cs: CommonService) {
    this.undefinedData = this.cs.isUndefined(this.data);
    this.definedData = this.cs.isDefined(this.data);
  }
}
