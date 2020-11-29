import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../shows.model';
import { ShowsService } from '../services/shows.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { map, tap } from 'rxjs/operators';

/**
 * Display all shows using a table
 */
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements AfterViewInit {

  /** list of shows to display */
  shows$: Observable<Show[]>;

  /** total results of the query sent to the server */
  totalResults = 0;

  /** columns that will be displayed */
  displayedColumns = ['id', 'title', 'description'];

  /** filters that are using to query the server */
  filters: any = {};

  /**
   * Constructor
   */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private cdr: ChangeDetectorRef,
    private showsService: ShowsService
  ) { }

  /**
   * Component init
   */
  ngAfterViewInit() {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.getDataPage(this.paginator.pageIndex, this.paginator.pageSize);
  }

  /**
   * Get a page of data from the server using service
   * @param pageIndex todo:
   * @param pageSize todo:
   */
  getDataPage(pageIndex: number, pageSize: number) {
    this.cdr.detectChanges();
    this.shows$ = this.showsService.findShows(pageIndex + 1, pageSize, this.buildQuery()).pipe(
      tap(res => {
        this.totalResults = res['total']
      }),
      map(res => res['children'])
    );
  }

  /**
   * User wants to change page, get new page data
   * @param event todo:
   */
  onChangePage(event?: PageEvent) {
    this.getDataPage(event.pageIndex, event.pageSize);
  }

  /**
   * Search filters are modified
   * @param value todo:
   */
  onChangeFilter(value): void {
    this.paginator.firstPage();
    this.getDataPage(this.paginator.pageIndex, this.paginator.pageSize);
  }

  /**
   * Build server query from search filters
   */
  buildQuery(): any {
    const query = {};
    for (const filter in this.filters) {
      if (this.filters.hasOwnProperty(filter)) {
        const value = this.filters[filter];
        if (value && value !== '') {
          query[filter] = this.filters[filter];
        }
      }
    }
    return query;
  }

}
