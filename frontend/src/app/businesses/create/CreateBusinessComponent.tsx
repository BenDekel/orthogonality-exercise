'use client'
import { useEffect, useState } from "react";
import { Business, BusinessType } from "../../../types";
import { createBusiness } from "../../../apiService";
import { useRouter } from "next/navigation";
import BusinessDetailsForm from "../../../components/BusinessDetailsForm";

const CreateBusinessComponent = () => {
  const router = useRouter();

  return (
    <BusinessDetailsForm
      action="create"
      onSubmit={(business) => router.push(`/businesses/${business.id}`)}
    />
  );
};

export default CreateBusinessComponent;