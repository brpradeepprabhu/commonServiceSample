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
  sampleData = '{ name: "CommonService", type: "Angular Service" }';
  forEachLoop = 'this.cs.forEach(this.data, function (value, key) {<br/>      this.valueArray.push(value);<br/>      this.valuesInArray = this.valueArray.join(",");<br/>    }, this);<br/>';
  undefinedData; definedData; objectData; valueArray = [];
  constructor(private cs: CommonService) {
    this.undefinedData = this.cs.isUndefined(this.data);
    this.definedData = this.cs.isDefined(this.data);
    this.objectData = this.cs.isObject(this.data);
    this.cs.forEach(this.data, function (value, key) {
      this.valueArray.push(value);
      this.valuesInArray = this.valueArray.join(",");
      console.log(key)
    }, this);
  }
}
