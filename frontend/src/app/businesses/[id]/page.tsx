import NavItem from "../../../components/common/navItem";
import BusinessComponent from "./BusinessComponent";
import "./page.scss";


export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="business-page">
      <div className="header">
        <h1>Business {params.id} Admin Page</h1>
        <div className="actions">
          <div className="action-wrapper">
            <NavItem href={`/businesses/${params.id}/create`}>Add Staff</NavItem>
          </div>
        </div>
      </div>

      <BusinessComponent />
    </div >
  )
}