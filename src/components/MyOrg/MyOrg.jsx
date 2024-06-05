import "./MyOrg.css"

export const MyOrg = (props)  => { 

    return (<section className="org-section">
        <h3 className="title">Mi organización</h3>
        <img src="src\assets\button-add.png" alt="add" onClick={props.modifyViewForm}/>
    </section>)
}