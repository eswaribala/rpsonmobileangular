import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {EditComponent} from "./edit/edit.component";

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  countryData:any;
  constructor(private route:ActivatedRoute,private matDiag:MatDialog) { }
  displayedColumns: string[] = [ 'name', 'capital',
    'population','nativeName','edit', 'delete'];
  tableSource = new MatTableDataSource();
  ngOnInit() {
    this.countryData=this.route.snapshot.data.default;
    console.log(this.countryData);
    this.tableSource.data=this.countryData;
  }
  ngAfterViewInit(): void {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;
  }

  openDialog(data: any) {

    const dialogRef = this.matDiag.open(EditComponent, {
      width: '500px',
      data: {name: data.name,
        capital: data.capital,
        population:data.population,
        region:data.nativeName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.updateRowData(result);

    });

  }

  updateRowData(row_obj) {
    this.tableSource.data = this.tableSource.data.filter((value:any)=>{
      if(value.name == row_obj.name){
        value.capital = row_obj.capital;
        value.population=row_obj.population;
        value.region=row_obj.nativeName;

      }
      return true;
    });
  }

  deleteRowData(row_obj)
  {
    this.tableSource.data = this.tableSource.data.filter((value:any)=>{
      return value.name != row_obj.name;
    });
  }




}
