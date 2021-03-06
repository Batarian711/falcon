import { FACULTY_PROFILES_PAGE, MY_PROFILE_PAGE, SUBJECTS_PAGE } from "../pages";
import {
    CHANGE_REQUESTS_TAB,
    EXTENSION_WORKS_TAB,
    INSTRUCTIONAL_MATERIALS_TAB,
    OVERVIEW_TAB,
    PRESENTATIONS_TAB,
} from "../pages/FacultyProfiles/components/faculty_detail_tabs";


export const makeURL = () => {
    let currentURL = "";

    const makeEndpoint = (toAppend, subPaths) => {
        currentURL += toAppend ? "/" + toAppend : "";

        const endpoint = {
            build: () => currentURL,
        };

        return subPaths ? {...endpoint, ...subPaths} : endpoint;
    };

    return makeEndpoint(null, {
        facultyProfiles: () => makeEndpoint(FACULTY_PROFILES_PAGE.path, {
            selectFaculty: facultyId => makeEndpoint(facultyId, {
                overview: () => makeEndpoint(OVERVIEW_TAB.path),
                presentations: () => makeEndpoint(PRESENTATIONS_TAB.path),
                instructionalMaterials: () => makeEndpoint(INSTRUCTIONAL_MATERIALS_TAB.path),
                extensionWorks: () => makeEndpoint(EXTENSION_WORKS_TAB.path),
                changeRequests: () => makeEndpoint(CHANGE_REQUESTS_TAB.path),
            }),
        }),

        subjects: () => makeEndpoint(SUBJECTS_PAGE.path, {
            selectSubject: subjectId => makeEndpoint(subjectId),
        }),

        facultyLoading: () => makeEndpoint(FACULTY_PROFILES_PAGE.path),

        myProfile: () => makeEndpoint(MY_PROFILE_PAGE.path, {
            overview: () => makeEndpoint(OVERVIEW_TAB.path),
            presentations: () => makeEndpoint(PRESENTATIONS_TAB.path),
            instructionalMaterials: () => makeEndpoint(INSTRUCTIONAL_MATERIALS_TAB.path),
            extensionWorks: () => makeEndpoint(EXTENSION_WORKS_TAB.path),
            changeRequests: () => makeEndpoint(CHANGE_REQUESTS_TAB.path),
        }),
    });
};