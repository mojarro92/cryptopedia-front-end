import RTable from 'react-bootstrap/Table'
import { useTable, useSortBy } from 'react-table';

function Table({ data, columns, updateMyData }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    )

    return (
        <RTable striped bordered {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        { headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                { column.render('Header')}
                            </th>
                        ))}
                    </tr>))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            { row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        { cell.render("Cell")}

                                    </td>
                                )
                            })}
                        </tr>)
                })}
            </tbody>
        </RTable>
    )
}

export default Table
