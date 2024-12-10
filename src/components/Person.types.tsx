//export type PersonProps = {
    //name: {
    //    first: string
    //    last: string
    //}
//}

// Type definition
export type Name = 
    {
        first: string
        last: string
    }

// extracting and reusing types in other components
// PersonProps type defines the props for the Person component, ensuring that the name prop follows the structure defined by the Name type
export type PersonProps = {
    name: Name
}