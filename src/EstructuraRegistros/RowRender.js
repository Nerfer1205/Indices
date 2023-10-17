import React from "react";

function RowRender(rows) {
    const addRows = (rows) => {
        let content = [];
        for (let index = 0; index < rows.rows; index++) {
            content.push(<tr key={index}><td>{index}</td></tr>);
        }
        console.log(rows)
        console.log(content)
        return content;
    }

    return <>{addRows(rows)}</>;
}
export { RowRender }