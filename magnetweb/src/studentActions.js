function getStudents() {
    return fetch("http://localhost:8080/students")
        .then(handleErrors)
        .then(res => res.json());
}

export function fetchStudents() {
    return dispatch => {
        dispatch(fetchStudentsBegin());
        return getStudents()
            .then(json => {
                dispatch(fetchStudentsSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchStudentsFailure(error))
            );
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_STUDENTS_BEGIN = "FETCH_STUDENTS_BEGIN";
export const FETCH_STUDENTS_SUCCESS =
    "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE =
    "FETCH_STUDENTS_FAILURE";

export const fetchStudentsBegin = () => ({
    type: FETCH_STUDENTS_BEGIN
});

export const fetchStudentsSuccess = students => ({
    type: FETCH_STUDENTS_SUCCESS,
    payload: {students}
});

export const fetchStudentsFailure = error => ({
    type: FETCH_STUDENTS_FAILURE,
    payload: {error}
});
