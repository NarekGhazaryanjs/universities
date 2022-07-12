const List = (props) => {
    return (
        <ol className={props.className}>
            {props.children}
        </ol>
    )
}

export default List