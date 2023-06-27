const List = ({data}) => {
    
    return(
        <>
        <div>
            {
                data.map((item) => (
                    <div ker={item.id}>
                        <h2>{item.title}</h2>
                        <h2>{item.description}</h2>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default List