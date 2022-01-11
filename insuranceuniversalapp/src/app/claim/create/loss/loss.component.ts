import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../../services/country.service";
import {LossService} from "../../../services/loss.service";
@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent implements OnInit {
  countries:any;
  purpose:any;
  vehicleClasses: any;
  typeOfDrivers: any;
  genderList: any;
  isFirFiled = false;
  uploadedFile:File;
  fileReader:FileReader;

  lostDate:FormControl;
  lostTime:FormControl;
  speed:FormControl;
  place:FormControl;
  to:FormControl;
  purposeCtl:FormControl;
  headCount:FormControl;
  policeStationName : FormControl;
  firNo: FormControl;
  statement: FormControl;
  firFiled: FormControl;

  driverName: FormControl;
  relationShip: FormControl;
  address: FormControl;
  contactNumber: FormControl;
  dateOfBirth: FormControl;
  gender: FormControl;
  email: FormControl;
  drivingLicenseNumber: FormControl;
  effectiveFrom: FormControl;
  effectiveTo: FormControl;
  issuingRTO: FormControl;
  vehicleClass: FormControl;
  typeOfDriver: FormControl;

data:any;
obj:any;

  lossForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private countryService:CountryService,private lossService:LossService) {
   this.lostDate=new FormControl('',
     [Validators.required]);
    this.lostTime=new FormControl('',
      [Validators.required]);
    this.speed=new FormControl('',
      [Validators.required]);
    this.place=new FormControl('',
      [Validators.required,Validators.pattern('[A-Za-z]{5,50}')]);
    this.to=new FormControl('',
      [Validators.required,Validators.pattern('[A-Za-z]{5,50}')]);
    this.purposeCtl=new FormControl('',
      [Validators.required]);
    this.headCount=new FormControl('',
      [Validators.required,,Validators.pattern('[0-9]{1,72}')]);
    this.policeStationName = new  FormControl('', [Validators.required]);

      this.firNo = new  FormControl('');

    this.statement = new  FormControl('', [Validators.required]);
    this.firFiled = new  FormControl('', [Validators.required]);
    this.driverName = new FormControl('', [Validators.required]);
    this.relationShip = new FormControl('', [Validators.required]);
    this.address = new FormControl('', [Validators.required]);
    this.contactNumber = new FormControl('', [Validators.required]);
    this.dateOfBirth = new FormControl('', [Validators.required]);
    this.gender = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.drivingLicenseNumber = new FormControl('', [Validators.required]);
    this.effectiveFrom = new FormControl('', [Validators.required]);
    this.effectiveTo = new FormControl('', [Validators.required]);
    this.issuingRTO = new FormControl('', [Validators.required]);
    this.vehicleClass = new FormControl('', [Validators.required]);
    this.typeOfDriver = new FormControl('', [Validators.required]);

    this.lossForm=formBuilder.group({
     lostDate:this.lostDate,
     lostTime:this.lostTime,
     speed:this.speed,
     place:this.place,
     to:this.to,
     purposeCtl:this.purposeCtl,
     headCount:this.headCount,

      policeStationName: this.policeStationName,
      firNo: this.firNo,
      statement: this.statement,
      firFiled: this.firFiled,
     /* driverName: this.driverName,
      relationShip: this.relationShip,
      address: this.address,
      contactNumber: this.contactNumber,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      email: this.email,
      drivingLicenseNumber: this.drivingLicenseNumber,
      effectiveFrom: this.effectiveFrom,
      effectiveTo: this.effectiveTo,
      issuingRTO: this.issuingRTO,
      vehicleClass: this.vehicleClass,
      typeOfDriver: this.typeOfDriver*/

    })


  }

  ngOnInit() {

    //observable goes with subscribe
    this.countryService.getCountries().subscribe(response=>{
         this.countries=response;
         console.log(this.countries);

    })
    this.purpose=this.countryService.getPurpose();

    this.vehicleClasses = this.countryService.getVehicleClass();
    this.typeOfDrivers = this.countryService.getTypeOfDriver();
    this.genderList = this.countryService.getGender();


  }

  isFir(obj)

  {
    console.log(obj.checked);
    this.isFirFiled=obj.checked;
    if(this.isFirFiled)
      this.firNo = new  FormControl('',[Validators.required]);


  }

  onFileChanged(obj)
  {
    this.uploadedFile=obj.target.files[0];
    console.log(this.uploadedFile);
    this.fileReader= new FileReader();
    this.fileReader.readAsDataURL(this.uploadedFile);
    this.fileReader.onload = function (event) {
      console.log(event.currentTarget);
    };

  }

  getCountry(obj)
  {
    console.log(obj.value);

  }
  getPurpose(obj)
  {
    console.log(obj.value);

  }
  getTo(obj)
  {
    console.log(obj.value);

  }
  getVehicleClass(obj)
  {
    console.log(obj.value);
  }

  getTypeOfDriver(obj)
  {
    console.log(obj.value);
  }

  send()
  {
    console.log(this.lossForm.value);
    this.obj=this.lossForm.value;
    this.data={

      "lostDate":this.obj.lostDate,
      "lostTime":this.obj.lostTime,
      "speed":this.obj.speed,
      "place":this.obj.place,
      "to":this.obj.to,
      "purpose":this.obj.purposeCtl,
      "headCount":this.obj.headCount,
      "policeStationName":this.obj.policeStationName,
      "firNo":234234,
      "statement":this.obj.statement

    }

    console.log(this.data);

   this.lossService.sendLossDetails(this.data).subscribe(response=>{
     console.log(response);
   })

  }
}
