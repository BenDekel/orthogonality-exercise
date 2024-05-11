'use client'
import { useState } from "react";
import { Business, BusinessType } from "../types";
import { createBusiness, updateBusiness } from "../apiService";
import './BusinessDetailsForm.scss'
import Button from "./common/button";


interface BusinessDetailsFormProps {
  business?: Business;
  action: 'create' | 'update';
  onSubmit: (business: Business) => void;
}

const BusinessDetailsForm: React.FC<BusinessDetailsFormProps> = ({
  business = {
    id: '0',
    name: '',
    location: '',
    type: '' as BusinessType,
  },
  action,
  onSubmit,
}) => {
  const [businessData, setBusinessesData] = useState<Business>(business);
  const validateData = () => {
    if (!businessData.name || !businessData.location) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateData()) {
      return;
    }

    const correctedBusinessData = businessData;
    if (correctedBusinessData.type === '' as BusinessType) {
      delete correctedBusinessData.type;
    }

    const actionHandler = action === 'update' ? updateBusiness : createBusiness;
    actionHandler(businessData).then((res) => {
      if (res) {
        onSubmit(res);
      }
    })
  };

  return (
    <div className="business-form">
      <div className="business-form-fields">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={businessData.name}
            onChange={(e) => setBusinessesData({ ...businessData, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={businessData.location}
            onChange={(e) => setBusinessesData({ ...businessData, location: e.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={businessData.type}
            onChange={(e) => setBusinessesData({ ...businessData, type: e.target.value as BusinessType })}
          >
            <option value="">Select Type</option>
            <option value={BusinessType.BAR}>Bar</option>
            <option value={BusinessType.RESTAURANT}>Restaurant</option>
            <option value={BusinessType.CLUB}>Club</option>
            <option value={BusinessType.HOTEL}>Hotel</option>
            <option value={BusinessType.CAFE}>Cafe</option>
          </select>
        </div>
      </div>
      <Button onClick={handleSubmit} text={action === 'create' ? 'Create' : 'Update'} />

    </div>
  );
};

export default BusinessDetailsForm;