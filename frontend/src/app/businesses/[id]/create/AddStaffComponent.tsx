'use client'
import { useParams, useRouter } from "next/navigation";
import StaffDetailsForm from "../../../../components/StaffDetailsForm";

const AddStaffComponent = () => {
  const router = useRouter();
  const params = useParams();
  const businessId = params.id as string;

  return (
    <StaffDetailsForm
      action="create"
      onSubmit={(business) => router.push(`/businesses/${businessId}`)}
    />
  );
};

export default AddStaffComponent;