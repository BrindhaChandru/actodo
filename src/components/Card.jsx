function Card(props) {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className="px-10 py-10 border rounded-md flex-grow text-center">
            <h1 className="text-3xl font-medium">{props.title}</h1>
            <p>{props.subtitile}</p>
        </div>
    )
}
export default Card