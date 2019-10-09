import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddressesService} from "./services/addresses.service";
import {Address} from "./models/address";

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'followProject';

  addressInput: FormGroup;
  options: string[] = [];

  constructor(private formBuilder: FormBuilder, private service: AddressesService){}

  ngOnInit(): void {
    this.addressInput = this.formBuilder.group({
      address: '',
    });
  }

  updateAutoc(){
    this.service.search(this.addressInput.controls['address'].value).subscribe(
      (res: Address) => {
        this.options = [];
        for (let addr of res.features){
          if(addr.properties.label !== undefined){
            this.options.push(addr.properties.label);
          }
        }
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
