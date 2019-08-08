---
index: 5.01
---
### {{page.title}}
![Component-Table][table-01]

The component which is used to display several data in the form of table.

- Category : Table
- Property(Table):
1. Row & Column(Number) - Adjust the number of rows and columns.
![Table-The number of rows and columns][table-02]
1. Cell Width & Height - If drag the red handler of table with mouse, you can adjust the size of each cell.
![Table-The size of rows and columns][table-03]

- Property(Cell):
1. Border Style - Change the thickness and color of border of the selected cell. After enter the style value, type the button of cell in which will apply it among ![Table-셀 스타일 종류][table-04].
![Table-Cell style][table-05]
1. Border Type - Change the type of line of the selected cell. After select the border type, type the button of cell in which will apply it among ![Table-셀 스타일 종류][table-04].  
__(!!Apply cell border and table border differently.)__
1. Merge Cells - Merge the selected cells. (Apply to the neighboring cells only)
1. Split Cells - Unmerge the cells.
1. Delete Row - Delete the selected row.
![Table-Delete the cell row][table-06]
1. Delete Column - Delete the selected column.
![Table-Delete the cell column][table-07]
1. Insert Above - Insert a new cell on the top of the selected cell.
![Table-Insert on the top of cell][table-08]
1. Insert Below - Insert a new cell on the bottom of the selected cell.
![Table-Insert on the bottom of cell][table-09]
1. Insert Left - Insert a new cell on the left of the selected cell.
![Table-Insert on the left of cell][table-10]
1. Insert Right - Insert a new cell on the right of the selected cell.
![Table-Insert on the right of cell][table-11]
1. Distribute Horizontally - Make the width of the selected columns be the same.
![Table-Make the cell width the same][table-12]
1. Distribute Vertically - Make the height of the selected rows the same.
![Table-Make the cell height the same][table-13]
1. Data Key - The field name of data header when mapping the data in table. DataKey must be entered as the field name rather than the number of column.
1. Data Index - The location of data row when mapping the data in table. DataIndex makes the start number of data except the header as 0.  
![Table-데이터 예시][table-14]  
When receive the data as in the above image, if want to display the data of ‘01-03’ of Date, you can enter DataKey = Date, DataIndex = 2.



[table-01]: {{site.baseurl}}/assets/components/table-01.png
{: height="200px"}

[table-02]: {{site.baseurl}}/assets/components/table-02.png
{: height="200px"}

[table-03]: {{site.baseurl}}/assets/components/table-03.png
{: height="200px"}

[table-04]: {{site.baseurl}}/assets/components/table-04.png
{: height="70px"}

[table-05]: {{site.baseurl}}/assets/components/table-05.png
{: height="200px"}

[table-06]: {{site.baseurl}}/assets/components/table-06.png
{: height="200px"}

[table-07]: {{site.baseurl}}/assets/components/table-07.png
{: height="200px"}

[table-08]: {{site.baseurl}}/assets/components/table-08.png
{: height="200px"}

[table-09]: {{site.baseurl}}/assets/components/table-09.png
{: height="200px"}

[table-10]: {{site.baseurl}}/assets/components/table-10.png
{: height="200px"}

[table-11]: {{site.baseurl}}/assets/components/table-11.png
{: height="200px"}

[table-12]: {{site.baseurl}}/assets/components/table-12.png
{: height="200px"}

[table-13]: {{site.baseurl}}/assets/components/table-13.png
{: height="200px"}

[table-14]: {{site.baseurl}}/assets/components/table-14.png
{: height="200px"}
