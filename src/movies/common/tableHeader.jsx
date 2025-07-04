import React, { Component } from 'react'


class  TableHeader extends Component {
    renderSortIcon = (column) => {
        const sortColumn = {...this.props.sortColumn}
        if (sortColumn.path !== column.path) return null
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>

    }
    raiseOnSort = path => {
        const sortColumn = {...this.props.sortColumn}
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        } else {
            sortColumn.path = path
            sortColumn.order = "asc"
        }
        this.props.onSort(sortColumn)
    }
    render() { 
        const {columns} = this.props
        return (
            <thead className='thead-dark'>
                <tr className='clickable'>
                    { columns.map(column => 
                    <th 
                    key={column.path || column.key} 
                    onClick={() => this.raiseOnSort(column.path)}>
                    {column.label} {this.renderSortIcon(column)}
                    </th>)}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;