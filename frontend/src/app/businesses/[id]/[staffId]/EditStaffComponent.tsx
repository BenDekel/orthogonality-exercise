'use client'
import { useRouter, useParams } from "next/navigation";
import StaffDetailsForm from "../../../../components/StaffDetailsForm";
import { useEffect, useState } from "react";
import { fetchStaff } from "../../../../apiService";
import { Staff } from "../../../../types";

const EditStaffComponent = () => {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;
  const staffId = params.staffId as string;

  const [staffMember, setStaffMember] = useState<Staff>();

  useEffect(() => {
    fetchStaff(id).then((fetchedStaff) => {
      const staff = fetchedStaff.find((staff) => {
        return staff.id.toString() == staffId;
      });

      if (staff) {
        setStaffMember(staff);
      }
    });
  }, []);

  if (!staffMember) return <div>Loading...</div>;

  return (
    <StaffDetailsForm
      staff={staffMember}
      action="update"
      onSubmit={(staff) => router.push(`/businesses/${id}`)}
    />
  );
};

export default EditStaffComponent;