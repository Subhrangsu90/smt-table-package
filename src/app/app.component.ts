import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { STableComponent } from '../../projects/my-table-library/src/public-api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, STableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smart-table';
  tableData: any[] = [];
  tableColumns: string[] = [
    'Id',
    'Title',
    'Description',
    'Price',
    'Rating',
    'Stock',
    'Brand',
    'Category',
  ];

  isLoading: boolean = false;
  // tableData = [
  //   {
  //     id: 1,
  //     name: 'John',
  //     age: 30,
  //     column4: 'value4',
  //     column5: 'value5',
  //     column6: 'value6',
  //     column7: 'value7',
  //     column8: 'value8',
  //     column9: 'value9',
  //     column10: 'value10',
  //   },
  //   {
  //     id: 2,
  //     name: 'Alice',
  //     age: 25,
  //     column4: 'value4',
  //     column5: 'value5',
  //     column6: 'value6',
  //     column7: 'value7',
  //     column8: 'value8',
  //     column9: 'value9',
  //     column10: 'value10',
  //   },
  //   {
  //     id: 3,
  //     name: 'Bob',
  //     age: 35,
  //     column4: 'value4',
  //     column5: 'value5',
  //     column6: 'value6',
  //     column7: 'value7',
  //     column8: 'value8',
  //     column9: 'value9',
  //     column10: 'value10',
  //   },
  // ];

  // tableColumns = [
  //   'id',
  //   'name',
  //   'age',
  //   'column4',
  //   'column5',
  //   'column6',
  //   'column7',
  //   'column8',
  //   'column9',
  //   'column10',
  // ];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadData(); // Load data when component initializes
  }

  // this.tableData = apiData.products.map(product => ({
  //   Id: product.id,
  //   Title: product.title,
  //   Description: product.description,
  //   Price: product.price,
  //   Rating: product.rating,
  //   Stock: product.stock,
  //   Brand: product.brand,
  //   Category: product.category
  // }));

  loadData() {
    this.isLoading = true;
    this.http.get<any>('https://dummyjson.com/products').subscribe(
      (response: any) => {
        // this.tableData = response.products;
        this.tableData = response.products.map((product: any) => ({
          Id: product.id,
          Title: product.title,
          Description: product.description,
          Price: product.price,
          Rating: product.rating,
          Stock: product.stock,
          Brand: product.brand,
          Category: product.category,
        }));
        this.isLoading = false;
        console.log(this.tableData);
      },
      (error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      }
    );
  }
  onSort(event: string) {
    // Implement sorting logic here based on the emitted event
    console.log('Sorting event:', event);
  }
}
