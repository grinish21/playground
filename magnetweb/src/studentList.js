import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "./studentActions";

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
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.firstName}</li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    students: state.students.items,
    loading: state.students.loading,
    error: state.students.error
});

export default connect(mapStateToProps)(StudentList);
