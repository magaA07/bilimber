

export default function Results() {

    return (
        <div>
            {
                console.log(localStorage.getItem('answers'))[0]
            }
        </div>
    )
}