import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogBodyComponent} from '../manage-booking/dialog-body/dialog-body.component'; 

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.css']
})
export class ManageBookingComponent implements OnInit {

  imageURL: string;
  uploadForm: FormGroup;
  showParagraph= false;

  Id:any;
  showBooking=false;
  color="#bbb7b2";
  showCheck=false;
  colorCheck="#bbb7b2";
  quantity: number;
  users=[
  {
    Date:"04/05/2020",
    time:"11:15 AM",
    user:"krisha shah",
    log:"As said, in the normal situation it work. I have added de MatInputModule in the imports section."
  },
  {
    Date:"04/05/2020",
    time:"11:15 AM",
    user:"krisha shah",
    log:"And when testing in the .spec.ts file I have imported the MatInputModule also."
  },
  {
    Date:"04/05/2020",
    time:"11:15 AM",
    user:"krisha shah",
    log:"As said, in the normal situation it work. I have added de MatInputModule in the imports section."
  },
  {
    Date:"04/05/2020",
    time:"11:15 AM",
    user:"krisha shah",
    log:"And when testing in the .spec.ts file I have imported the MatInputModule also."
  },

]

 Orders=[
  {id:1,description:"Deluxe Suit",quantity:1,total:520,paragraph:"22 sept - 23 sept .7rooms 3extra bed",show:false},
  {id:2,description:"Adventure Game Coupon",quantity:22,total:520,show:false},
  {id:3,description:"Golden Mango Package",quantity:12,total:520,show:false},
  {id:4,description:"Adventure Game Coupon",quantity:4,total:520,show:false},
  {id:5,description:"Golden Mango Package",quantity:6,total:520,show:false},
  {id:6,description:"Adventure Game Coupon",quantity:77,total:520,show:false},
  {id:7,description:"Golden Mango Package",quantity:34,total:520,show:false},
  {id:8,description:"Adventure Game Coupon",quantity:1,total:520,show:false},
  {id:9,description:"Golden Mango Package",quantity:22,total:520,show:false},
  {id:0,description:"Adventure Game Coupon",quantity:16,total:520,show:false}
]
 
constructor(public fb: FormBuilder,public dialog: MatDialog){
  this.uploadForm = this.fb.group({
    avatar: [null],
    name: ['']
  })
}

// controls: FormArray;

ngOnInit() {

}

openDialog(event,value,index) {
  const dialogRef = this.dialog.open(DialogBodyComponent, {
    width: '250px',
    data:{
      quantity: value
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.quantity = result;
    if(result){
      this.Orders[index].quantity=this.quantity;
    }
    else{
      this.Orders[index].quantity=value;
    }
  });
}


display(event,index){
   let rowSize = 0;
    console.log(index)
      if(this.Orders[index].show=== false){
        this.Orders[index].show=true;
        rowSize=80;
      }
      else{
        rowSize=55;
        this.Orders[index].show=false;
      }
}


displayBooking(){
    this.showBooking=!this.showBooking;
}

delete(event,id,index){
    console.log(id);
    if(id){
      const found = this.Orders.filter((item) => item.id === id);
      console.log(found);
      delete this.Orders[index];
    }
}

starToggle(){
    if(this.color==="gold"){
        this.color="#bbb7b2";
    }else{
      this.color="gold";
    }
}

checkToggle(){
    if(this.colorCheck==="green"){
       this.colorCheck="#bbb7b2";
    }else{
      this.colorCheck="green";
    }
}

showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
