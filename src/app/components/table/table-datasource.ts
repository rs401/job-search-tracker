import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, Subscription, BehaviorSubject } from 'rxjs';
import { APIService, Outcome } from 'src/app/API.service';

// TODO: Replace this with your own data model type
export interface Application {
  id: string;
  company: string;
  position: string;
  description: string;
  jobPostUrl: string;
  response?: boolean | null;
  outcome?: Outcome | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<Application> {
  private subscription: Subscription | null = null;
  private dataSubject: BehaviorSubject<Application[]> = new BehaviorSubject<Application[]>([]);
  private poop = this.dataSubject.asObservable();
  data: Application[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private api: APIService) {
    super();
    // this.fetchApps();
    this.poop.subscribe((apps) => {
      this.data = apps;
    });
    this.api.ListApplications().then((event) => {
      this.dataSubject.next(event.items as Application[]);
    });

    // I need to move this to table component and pass it to this or something.
    this.subscription = <Subscription>(
      this.api.OnUpdateApplicationListener.subscribe((event: any) => {
        console.log("OnUpdateApplicationListener fired#########################");
        console.log("OnUpdateApplicationListener event:", event);
        this.dataSubject.next(event.items as Application[]);
        // this.fetchApps();
      })
    );

  }

  // private fetchApps() {
  //   console.log("fetchApps fired#########################");
  //   this.api.ListApplications().then((event) => {
  //     this.data = event.items as Application[];
  //   });
  // }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Application[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Application[]): Application[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Application[]): Application[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'company': return compare(a.company, b.company, isAsc);
        case 'position': return compare(a.position, b.position, isAsc);
        case 'createdAt': return compare(a.createdAt, b.createdAt, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
