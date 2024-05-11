'use client'
import { useEffect, useState } from "react";
import { deleteBusiness, deleteStaff, fetchBusiness, fetchStaff } from "../../../apiService";
import { Business, Staff } from "../../../types";
import { useParams, useRouter } from "next/navigation";
import BusinessDetailsForm from "../../../components/BusinessDetailsForm";
import './BusinessComponent.scss';
import Button from "../../../components/common/button";


const BusinessComponent = () => {
  const router = useRouter();
  const params = useParams();
  const businessId = params.id as string;
  const [business, setBusiness] = useState<Business>();
  const [staff, setStaff] = useState<Staff[]>([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchBusiness(businessId).then((fetchedBusiness) => {
      if (!fetchedBusiness) return;
      setBusiness(fetchedBusiness);
    });

    fetchStaff(businessId).then((fetchedStaff) => {
      setStaff(fetchedStaff);
    });
  }, []);

  const onClickViewStaff = (id: string) => {
    router.push(`/businesses/${businessId}/${id}`);
  }

  const onClickDeleteStaff = (id: string) => {
    deleteStaff(businessId, id).then((success) => {
      if (success) {
        fetchStaff(businessId).then((fetchedStaff) => {
          setStaff(fetchedStaff);
        });
      } else {
        console.error("Failed to delete staff member");
      }
    });
  }


  const onClickDeleteBusiness = () => {
    deleteBusiness(businessId).then((success) => {
      if (success) {
        router.push("/businesses");
      }
    });
  }

  if (!business) return <div>Loading...</div>;

  return (
    <div className="business-page-content">
      <div className="business-details-wrapper">
        {
          edit ? (
            <BusinessDetailsForm
              business={business}
              action="update"
              onSubmit={(updatedBusiness) => {
                setEdit(false);
                setBusiness(updatedBusiness);
              }}
            />
          ) : (
            <div>
              <h2>Name: {business.name}</h2>
              <p>Location: {business.location}</p>
              {
                business.type && <p>Type: {business.type}</p>
              }
            </div>
          )
        }

        <div className="business-actions">
          <Button
            onClick={() => setEdit(!edit)}
            text={edit ? "Cancel" : "Edit"}
          />
          <Button
            onClick={onClickDeleteBusiness}
            text="Delete"
          />
        </div>
      </div>

      <div className="staff-list">
        <h2>Staff</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((staffMember) => (
              <tr key={staffMember.id}>
                <td>{staffMember.id}</td>
                <td>{staffMember.firstName} {staffMember.lastName}</td>
                <td>{staffMember.email}</td>
                <td>{staffMember.position}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>
                  <div className="actions">
                    <Button onClick={() => onClickViewStaff(staffMember.id)} text="Edit" />
                    <Button onClick={() => onClickDeleteStaff(staffMember.id)} text="Delete" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessComponent;