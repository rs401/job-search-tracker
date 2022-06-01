import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, Application } from './table-datasource';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @Input() callbackLoadForm!: (app: any) => void;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Application>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['createdAt', 'company', 'description', 'position', 'jobPostUrl', 'response','outcome', 'updatedAt'];

  constructor(private api: APIService) {
    this.dataSource = new TableDataSource(this.api);
  }

  async ngAfterViewInit(): Promise<void> {
    await new Promise(f => setTimeout(f, 400));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
    
  }
}
