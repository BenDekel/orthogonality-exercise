import CreateBusinessComponent from "./CreateBusinessComponent";

export default function Page() {
  return (
    <div className="create-business-page">
      <div className="header">
        <h1>Create a business</h1>
      </div>

      <CreateBusinessComponent />
    </div>
  )
}