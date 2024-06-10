
function cleardatatable() {
    $('#datatable1').DataTable().clear().destroy();
}

//function myFunction() {

//    //debugger;
//    //trt{
//    //    $('#datatable1').DataTable().clear().destroy();
//    //}
//    //catch () { $('#dataTable').DataTable(); }
    
//    if (!$.fn.DataTable.isDataTable('#dataTable1')) {

//        var table = $('#dataTable1').DataTable({
//            // "paging": true, // Enable default pagination
//            "search": false,
//            "responsive": true,
//            lengthChange: false, // Hide default DataTables length control
//            pageLength: 2,
            
//            "columnDefs": [
//                { targets: [0, 1, -1], searchable: false },
//                { "targets": 'no-filter', "orderable": false },
//                { targets: '_all', searchable: true, visible: true }
//            ],
//            // Add other DataTable options as needed
//            "drawCallback": function (settings) {
//                // Update custom pagination controls
//                var paginationContainer = $('#custom-pagination');
//                var pageInfo = this.api().page.info();
//                var currentPage = pageInfo.page + 1;
//                var totalPages = pageInfo.pages;
//                var maxPagesToShow = 2; // Define the maximum number of pages to show

//                var paginationHTML = '';
//                paginationHTML += '<ul class="pagination">';
//                paginationHTML += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage - 1) + '">&laquo;</a></li>';

//                var startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
//                var endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

//                if (startPage > 1) {
//                    paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>';
//                    if (startPage > 2) {
//                        paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
//                    }
//                }

//                for (var i = startPage; i <= endPage; i++) {
//                    paginationHTML += '<li class="page-item ' + (currentPage === i ? 'active' : '') + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
//                }

//                if (endPage < totalPages) {
//                    if (endPage < totalPages - 1) {
//                        paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
//                    }
//                    paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="' + totalPages + '">' + totalPages + '</a></li>';
//                }

//                paginationHTML += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage + 1) + '">&raquo</a></li>';
//                paginationHTML += '</ul>';

//                paginationContainer.html(paginationHTML);

//                // Attach click event handlers to pagination links
//                paginationContainer.find('.page-link').click(function (e) {
//                    e.preventDefault();
//                    var page = $(this).data('page');
//                    table.page(page - 1).draw(false);
//                });


//                $('#table_length_select').change(function () {
//                    var selectedValue = parseInt($(this).val());
//                    table.page.len(selectedValue).draw();
//                    $('html, body').animate({ scrollTop: $('#dataTable1').offset().top }, 'fast');
//                });


//            }
//        });

//        //remove search

//        //$('#table_id_filter').remove();
//        //$('.dataTables_length').css("display", "none");






//        // Custom search functionality

//        $('#custom-search').on('keyup', function () {
//            table.search(this.value).draw();
//        });
        

//    }
//}



//function myFunction() {
//    if (!$.fn.DataTable.isDataTable('#dataTable1')) {
//        var table = $('#dataTable1').DataTable({
//            "paging": true, // Enable default pagination
//            "searching": false,
//            "responsive": true,
//            "lengthChange": false, // Hide default DataTables length control
//            "pageLength": 2,
//            "columnDefs": [
//                { targets: [0, 1, -1], searchable: false },
//                { "targets": 'no-filter', "orderable": false },
//                { targets: '_all', searchable: true, visible: true }
//            ],
//            "order": [], // Disable initial sorting order
//            /* "order": [[0, "asc"]], // Initial sorting order*/
//            "drawCallback": function (settings) {
//                var api = this.api();
              
//                updatePaginationControls(api);
//            }
//        });

//        // Custom search function
//        $('#custom-search').on('keyup', function () {
//            table.search(this.value).draw();
//        });

//        // Update pagination controls
//        function updatePaginationControls(table) {
//            var paginationContainer = $('#custom-pagination');
//            var pageInfo = table.page.info();
//            var currentPage = pageInfo.page + 1;
//            var totalPages = pageInfo.pages;
//            var maxPagesToShow = 2; // Define the maximum number of pages to show

//            var paginationHTML = '';
//            paginationHTML += '<ul class="pagination">';
//            paginationHTML += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage - 1) + '">&laquo;</a></li>';

//            var startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
//            var endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

//            if (startPage > 1) {
//                paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>';
//                if (startPage > 2) {
//                    paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
//                }
//            }

//            for (var i = startPage; i <= endPage; i++) {
//                paginationHTML += '<li class="page-item ' + (currentPage === i ? 'active' : '') + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
//            }

//            if (endPage < totalPages) {
//                if (endPage < totalPages - 1) {
//                    paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
//                }
//                paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="' + totalPages + '">' + totalPages + '</a></li>';
//            }

//            paginationHTML += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage + 1) + '">&raquo;</a></li>';
//            paginationHTML += '</ul>';

//            paginationContainer.html(paginationHTML);

//            // Attach click event handlers to pagination links
//            paginationContainer.find('.page-link').click(function (e) {
//                e.preventDefault();
//                var page = $(this).data('page');
//                table.page(page - 1).draw(false);
//            });

//            $('#table_length_select').change(function () {
//                var selectedValue = parseInt($(this).val());
//                table.page.len(selectedValue).draw();
//                $('html, body').animate({ scrollTop: $('#dataTable1').offset().top }, 'fast');
//            });
//        }

//        // Handle column sorting

//        $('#dataTable1').on('click', 'th', function () {
//            var columnIndex = $(this).index();
//            var asc = $(this).hasClass('sorting_asc');


//            // Reset sorting classes
//            $('th').removeClass('sorting_asc sorting_desc');


//            if (asc) {
//                $(this).removeClass('sorting_asc').addClass('sorting_desc');
//            } else {
//                $(this).removeClass('sorting_desc').addClass('sorting_asc');
//            }


//            // Call the sortTable function with the updated sorting parameters
//            sortTable(table, columnIndex, !asc);



//        });
//        ////correct
//        function sortTable(table, columnIndex, ascending) {
//            var rows = table.rows().data().toArray();

//            rows.sort(function (a, b) {
//                var aValue = getFormattedCellValue(a[columnIndex]);
//                var bValue = getFormattedCellValue(b[columnIndex]);

//                if (!isNaN(aValue) && !isNaN(bValue)) {
//                    return ascending ? aValue - bValue : bValue - aValue;
//                } else {
//                    return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
//                }
//            });

//            // Log sorted rows in the console
//            console.log("Sorted Rows:", rows);

//            // Clear existing rows in the tbody
//            $('#dataTable1 tbody').empty();

//            // Append the sorted rows back to the tbody while retaining formatting
//            rows.forEach(function (row) {
//                var newRow = $('<tr></tr>');
//                row.forEach(function (cell) {
//                    newRow.append($('<td></td>').html(cell));
//                });
//                $('#dataTable1 tbody').append(newRow);
//            });
//        }

//        function getFormattedCellValue(cellValue) {
//            var value = cellValue.trim();
//            value = value.replace(/[^\d.-]+/g, "");
//            return value !== "" ? parseFloat(value) : NaN;
//        }
//        $('#custom-search').on('keyup', function () {
//            table.search(this.value).draw();
//        });
//    }
//}


function myFunction() {
    if (!$.fn.DataTable.isDataTable('#dataTable1')) {
        var table = $('#dataTable1').DataTable({
            "paging": true,
            "search": false,
            "responsive": true,
            lengthChange: false,
            pageLength: 2,
            "columnDefs": [
                { targets: [0, 1, -1], searchable: false },
                { "targets": 'no-filter', "orderable": false },
                { targets: '_all', searchable: true, visible: true }
            ],
            "order": [],
            "drawCallback": function (settings) {
                var api = this.api();
                updatePaginationControls(api);
            }
        });

        $('#dataTable1').on('click', 'th', function () {
            var columnIndex = $(this).index();
            var asc = $(this).hasClass('sorting_asc');

            // Reset sorting classes
            $('th').removeClass('sorting_asc sorting_desc');

            if (asc) {
                $(this).removeClass('sorting_asc').addClass('sorting_desc');
            } else {
                $(this).removeClass('sorting_desc').addClass('sorting_asc');
            }

            // Call the sortTable function with the updated sorting parameters
            sortTable(table, columnIndex, !asc);
        });

        function sortTable(table, columnIndex, ascending) {
            // Fetch all rows data
            var rows = table.rows({ search: 'applied' }).data().toArray();

            rows.sort(function (a, b) {
                var aValue = getFormattedCellValue(a[columnIndex]);
                var bValue = getFormattedCellValue(b[columnIndex]);

                if (!isNaN(aValue) && !isNaN(bValue)) {
                    return ascending ? aValue - bValue : bValue - aValue;
                } else {
                    return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                }
            });

            // Log sorted data to the console
            console.log('Sorted data:', rows);

            // Clear existing rows in the table
            table.clear();

            // Add the sorted rows back to the table
            rows.forEach(function (row) {
                table.row.add(row);
            });

            // Redraw the table
            table.draw(false);

            // Call pagination update
            updatePaginationControls(table);
        }

        function getFormattedCellValue(cellValue) {
            var value = cellValue.trim();
            value = value.replace(/[^\d.-]+/g, "");
            return value !== "" ? parseFloat(value) : NaN;
        }

        $('#custom-search').on('keyup', function () {
            table.search(this.value).draw();
        });

        function updatePaginationControls(table) {
            var paginationContainer = $('#custom-pagination');
            var pageInfo = table.page.info();
            var currentPage = pageInfo.page + 1;
            var totalPages = pageInfo.pages;
            var maxPagesToShow = 2; // Define the maximum number of pages to show

            var paginationHTML = '';
            paginationHTML += '<ul class="pagination">';
            paginationHTML += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage - 1) + '">&laquo;</a></li>';

            var startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
            var endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

            if (startPage > 1) {
                paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>';
                if (startPage > 2) {
                    paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
                }
            }

            for (var i = startPage; i <= endPage; i++) {
                paginationHTML += '<li class="page-item ' + (currentPage === i ? 'active' : '') + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
                }
                paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="' + totalPages + '">' + totalPages + '</a></li>';
            }

            paginationHTML += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage + 1) + '">&raquo;</a></li>';
            paginationHTML += '</ul>';

            paginationContainer.html(paginationHTML);

            // Attach click event handlers to pagination links
            paginationContainer.find('.page-link').click(function (e) {
                e.preventDefault();
                var page = $(this).data('page');
                table.page(page - 1).draw(false);
            });

            $('#table_length_select').change(function () {
                var selectedValue = parseInt($(this).val());
                table.page.len(selectedValue).draw();
                $('html, body').animate({ scrollTop: $('#dataTable1').offset().top }, 'fast');
            });
        }

        // Initial call to update pagination controls
        updatePaginationControls(table);
    }
}
function initializeDataTable(tableSelector, paginationContainerId) {
    if (!($.fn.DataTable.isDataTable(tableSelector))) {

        var table = $(tableSelector).DataTable({
            "search": false,
            "responsive": true,
            lengthChange: false,
            pageLength: 2,
            "columnDefs": [
                { targets: [0, 1, -1], searchable: false },
                { "targets": 'no-filter', "orderable": false },
                { targets: '_all', searchable: true, visible: true }
            ],
            "drawCallback": function (settings) {
                var paginationContainer = $('#' + paginationContainerId);
                var pageInfo = this.api().page.info();
                var currentPage = pageInfo.page + 1;
                var totalPages = pageInfo.pages;
                var maxPagesToShow = 2;

                var paginationHTML = '';
                paginationHTML += '<ul class="pagination">';
                paginationHTML += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage - 1) + '">&laquo;</a></li>';

                var startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
                var endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

                if (startPage > 1) {
                    paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="1">1</a></li>';
                    if (startPage > 2) {
                        paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
                    }
                }

                for (var i = startPage; i <= endPage; i++) {
                    paginationHTML += '<li class="page-item ' + (currentPage === i ? 'active' : '') + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
                }

                if (endPage < totalPages) {
                    if (endPage < totalPages - 1) {
                        paginationHTML += '<li class="page-item disabled"><a class="page-link">...</a></li>';
                    }
                    paginationHTML += '<li class="page-item"><a class="page-link" href="#" data-page="' + totalPages + '">' + totalPages + '</a></li>';
                }

                paginationHTML += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '"><a class="page-link" href="#" data-page="' + (currentPage + 1) + '">&raquo</a></li>';
                paginationHTML += '</ul>';

                paginationContainer.html(paginationHTML);



                paginationContainer.find('.page-link').click(function (e) {
                    e.preventDefault();
                    var page = $(this).data('page');
                    table.page(page - 1).draw(false);
                });
                $('#table_length_select2').change(function () {
                    var selectedValue = parseInt($(this).val());
                    table.page.len(selectedValue).draw();
                    $('html, body').animate({ scrollTop: $('#dataTable2').offset().top }, 'fast');
                });

                $('#table_length_select3').change(function () {
                    var selectedValue = parseInt($(this).val());
                    table.page.len(selectedValue).draw();
                    $('html, body').animate({ scrollTop: $('#dataTable3').offset().top }, 'fast');
                });
                // ... (rest of the code)

            }
        });

        $('#custom-search2').on('keyup', function () {
            table.search(this.value).draw();
        });
        $('#custom-search3').on('keyup', function () {
            table.search(this.value).draw();
        });
    }
}


