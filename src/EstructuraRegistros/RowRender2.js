function RowRender2(props) {
    const addRows = (props) => {
        console.log(props.span)
        let content = [];
        for (let index = 0; index < 1; index++) {
            if (index === 0)
                content.push(<tr  key={index}><td rowSpan={props.span} id={props.id} >{index}</td></tr>);
            else
                content.push(<tr key={index}><td rowSpan={props.span} >{index}</td></tr>);
        }
        console.log(content)
        return content;
    }

    return <>{addRows(props)}</>;
}
export { RowRender2 }