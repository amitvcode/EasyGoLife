let download_button = document.
            getElementById("download-btn");
        let table =
            document.getElementById("my-table");

        download_button.addEventListener
            ("click", function () {
                const tableData = [];
                const rows = table.rows;
                for (let i = 0; i < rows.length; i++) {
                    const rowData = [];
                    const cells = rows[i].cells;
                    for (let j = 0; j < cells.length; j++) {
                        rowData.push(cells[j].innerText);
                    }
                    tableData.push(rowData);
                }

                const docDefinition = {
                    content: [
                        {
                            text: 'This is Your Employee Details',
                            style: 'header'
                        },
                        {
                            table: {
                                widths: ['50%', '*', '*'],
                                body: tableData
                            }
                        }
                    ],
                    styles: {
                        header: {
                            fontSize: 18,
                            bold: true,
                            margin: [0, 0, 0, 10]
                        }
                    }
                };

                pdfMake.createPdf(docDefinition).
                    download('Resume_Amit.pdf');
            });