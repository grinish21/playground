import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "./studentActions";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class StudentList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStudents());
    }

    render() {
        const { error, loading, students } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <BootstrapTable data={students} striped={true} hover={true}>
                <TableHeaderColumn dataField="firstName" dataAlign="center" dataSort={true}>FirstName</TableHeaderColumn>
                <TableHeaderColumn dataField="lastName" isKey={true} dataSort={true}>LastName</TableHeaderColumn>
                <TableHeaderColumn dataField="department" dataSort={true}>Department</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

const mapStateToProps = state => ({
    students: state.students.items,
    loading: state.students.loading,
    error: state.students.error
});

export default connect(mapStateToProps)(StudentList);