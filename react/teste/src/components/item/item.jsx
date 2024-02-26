function Item ( { item } ) {
    return (
        <li>
            <p>NOME: { item.name }</p>
            <p>ID: { item.id }</p>
        </li>
    )
}

export default Item;