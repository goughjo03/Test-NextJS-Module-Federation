const Button = () => {
    const handleClick = () => {
        alert('You clicked it!')
    }
    return <button onClick={handleClick}>Click Me</button>
}

export default Button
