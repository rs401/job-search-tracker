import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { TableComponent } from '../table/table.component';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Applications', cols: 1, rows: 1, component: TableComponent },
          { title: 'Card 2', cols: 1, rows: 1, component: GraphComponent },
          { title: 'Card 3', cols: 1, rows: 1, component: GraphComponent },
          { title: 'Card 4', cols: 1, rows: 1, component: GraphComponent }
        ];
      }

      return [
        { title: 'Applications', cols: 2, rows: 1, component: TableComponent },
        { title: 'Card 2', cols: 1, rows: 1, component: GraphComponent },
        { title: 'Card 3', cols: 1, rows: 2, component: GraphComponent },
        { title: 'Card 4', cols: 1, rows: 1, component: GraphComponent }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
