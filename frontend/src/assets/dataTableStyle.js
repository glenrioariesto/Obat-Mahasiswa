const customTableStyles = {
  rows: {
    style: {
      backgroundColor: "rgb(229,231,235)",
    },
  },
  headCells: {
    style: {
      backgroundColor: "rgb(29,78,216)",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      width: "10%",
      padding: "2px",
      margin: "2px",
    },
  },
  pagination: {
    style: {
      position: "absolute",
      bottom: 0,
      right: "0",
      width: "100%",
      backgroundColor: "white",
      borderTop: "1px solid #ddd",
      padding: 0,
      paddingRight: "50px",
    },
  },
};

export default customTableStyles;
