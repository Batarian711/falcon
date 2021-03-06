import { falconLogo } from "../../../../components/styles";


export const styles = theme => ({
    appBar: {
        transitionProperty: "background",
        transitionDuration: theme.transitions.duration.shorter,
        boxShadow: theme.shadows[0],
    },
    toolbar: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit * 2,
    },
    pageName: {
        display: "inline-block",
        fontSize: 20,
        fontWeight: theme.typography.fontWeightLight,
    },
    falconLogo: {
        ...falconLogo(theme),
        display: "inline-block",
        marginRight: 4,
        fontSize: 20,
    },
});