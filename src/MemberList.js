import { Link } from "react-router-dom/cjs/react-router-dom.min";
// Link to MemberDetails
const MemberList = ({members, title}) => {
    return ( 
        <div className="member-list">
            <h2><strong>{title}</strong></h2>
            {members.map( (e)=>(
                <div className="member-preview" key={ e.id }>
                    <Link to={`/members/${e.id}`}>
                    <div>
                        { e.name }
                        <span>Age: { e.age }</span>
                    </div>
                    </Link>
                </div>
            ) )}
        </div>
     );
}
 
export default MemberList;