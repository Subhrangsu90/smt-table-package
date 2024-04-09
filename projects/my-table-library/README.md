# smt-table

smt-table is an Angular table component that provides easy-to-use table functionality for displaying tabular data with pagination, sorting, and customizable options.

## Installation

You can install the package via npm:

```bash
npm install smt-table
```

## Usage

To use the `<s-table>` component, follow these steps:

1. Import the `STableComponent` in your Angular module:

   ```typescript
   import { STableComponent } from "smt-table";
   ```

2. Use the `<s-table>` component in your Angular templates:

   ```html
   <s-table [data]="tableData" [columns]="tableColumns" [pagination]="true" [pageSize]="5" [rowsPerPageOptions]="[5, 10, 15]" [currentPageReportTemplate]="'Displaying from {first} to {last} of {totalRecords} records'"> </s-table>
   ```

Replace `[data]="tableData"`, `[columns]="tableColumns"`, `[pageSize]="5"`, `[rowsPerPageOptions]="[5, 10, 15]"`, and `[currentPageReportTemplate]="'Displaying from {first} to {last} of {totalRecords} records'"` with the actual data, columns, and options you want to pass to the `<s-table>` component.

## Options

- `data`: The array of data to display in the table.
- `columns`: The array of column names to display in the table.
- `pagination`: This enables pagination for the table.
- `pageSize`: The number of items to display per page.
- `rowsPerPageOptions`: An array of options for the user to select the number of items per page.
- `currentPageReportTemplate`: The template for displaying current page information.

## License

This package is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) for details on how to contribute to this project.
