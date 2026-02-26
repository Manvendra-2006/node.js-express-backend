export function Login(){
    return(
        `
        <form action="/submit" method="post"> 
        <label>Name</label>
        <input type="text" placeholder="Enter Name" name="name"/>
        <br/>
        <br/>
        <label>Class</label>
        <input type="number" placeholder="Enter class" name="class"/>
        <br/>
        <br/><label>Subject</label>
        <input type="text" placeholder="Enter subject" name="subject"/>
        <br/>
        <br/>
        <button>Submit</button>
        </form>
        `
    )
}