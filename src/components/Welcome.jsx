function Welcome(props) {
    console.log(props.name)
    return (
        <h1 style={props.style}>
            Welcome {props.firstName} {props.lastName}
        </h1>
    )
}

export default Welcome;