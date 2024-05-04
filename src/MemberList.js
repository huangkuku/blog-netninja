const MemberList = ({members, title}) => {
    return ( 
        <div className="member-list">
            <h2><strong>{title}</strong></h2>
            {members.map( (e)=>(
                <div className="member-preview" key={ e.id }>
                    <div>
                        { e.name }
                        <span>Age: { e.age }</span>
                    </div>
                </div>
            ) )}
        </div>
     );
}
 
export default MemberList;