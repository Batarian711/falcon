export default theme => ({
    blankState: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    messageWrapper: {
        display: "grid",
        gridTemplateRows: "auto 1fr auto 1fr",
        gridRowGap: `${theme.spacing.unit * 2}px`,
        padding: theme.spacing.unit * 3,
        justifyItems: "center",
        textAlign: "center"
    },

    messageColor: {
        color: theme.palette.grey["700"],
    },

    icon: {
        fontSize: 80,
    },
});