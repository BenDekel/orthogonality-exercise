import NavItem from "../../components/common/navItem";
import BusinessesComponent from "./BusinessesComponent";
import "./page.scss";

export default function Page() {
  return (
    <div className="businesses-list-page">
      <div className="header">
        <h1 className="title">Businesses List</h1>
        <div className="actions">
          <div className="action-wrapper">
          <NavItem href="/businesses/create">New Business</NavItem>
            </div>
        </div>
      </div>



      <BusinessesComponent />
    </div>
  )
}
