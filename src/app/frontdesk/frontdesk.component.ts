
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
 var options = { year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
const time=today.toLocaleDateString("en-US", options);
 

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,name:"Anand Reddy",companyName:"Anand",tax:223,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:2,name:"Prince",companyName:"Anand",tax:200,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:3,name:"Rahul Kumar",companyName:"Anand",tax:723,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:4,name:"Amit Sharam",companyName:"Anand",tax:523,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:5,name:"Nitin Bhatia",companyName:"Anand",tax:323,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:6,name:"Raunak Singh",companyName:"Anand",tax:223,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:7,name:"Aman Sharma",companyName:"Anand",tax:923,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  {position:8,name:"Sandeep Thakur",companyName:"Anand",tax:123,check_in_time:time,Check_out_date:time,paymentDue:42000,bookingSource:"Airbnb"},
  
];


@Component({
  selector: 'app-frontdesk',
  templateUrl: './frontdesk.component.html',
  styleUrls: ['./frontdesk.component.css']
})
export class FrontdeskComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'companyName', 'tax', 'check_in_time', 'Check_out_date','paymentDue','bookingSource'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 constructor(private router: Router){

 }

  ngOnInit(): void {
    
  }

 

  // sortList(name){
  //   var list=[];
  //   var newCustomerlist=[];
  //   var final=[]
  //   for(let customer of this.Customers){
  //     list.push(customer.name);
  //   }
  //   list=list.sort();
  //   for(let customer of list){
  //     if(customer){
  //       newCustomerlist.push(this.Customers.filter((person)=>
  //         person.name===customer))
  //     }
  //   }
  //   console.log(newCustomerlist);
  //   for(let i=0;i<newCustomerlist.length;i++){
  //     final.push(newCustomerlist[i][0])
  //   }
  //   this.Customers=final;
  // }

  Route(event,id){
    console.log(id)
  if(id){
    this.router.navigate(['/manage_bookings'])
  }
  }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

