// Setting types for "names array of obj containing two properties"
type PeopleProps = {
    names : {
        first: string
        last: string
    }[],
}
// Component takes PeopleProps, maps over the array to render h2 for each person
const PersonList = (props: PeopleProps) => {
    return (
        <div>{props.names.map((name) => {
            return (
            <h2 key={name.first}>{name.first}{name.last}</h2>
            )
        })}
        </div>
    )
}

export default PersonList