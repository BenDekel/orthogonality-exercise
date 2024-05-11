'use client'
import { useState } from "react";
import { Staff, StaffPosition } from "../types";
import { createStaff, updateStaff } from "../apiService";
import { useParams } from "next/navigation";
import { isEmpty } from "../utils";
import './StaffDetailsForm.scss'
import Button from "./common/button";


interface StaffDetailsFormProps {
  staff?: Staff;
  action: 'create' | 'update';
  onSubmit: (staff: Staff) => void;
}

const StaffDetailsForm: React.FC<StaffDetailsFormProps> = ({
  staff = {
    id: '0',
    email: '',
    firstName: '',
    lastName: '',
    position: '' as StaffPosition,
    phoneNumber: '',
  },
  action,
  onSubmit,
}) => {
  const params = useParams();
  const id = params.id as string;

  const [staffData, setStaffData] = useState<Staff>(staff);
  const validateData = () => {
    if (isEmpty(staffData.email) ||
      isEmpty(staffData.firstName) ||
      isEmpty(staffData.lastName) ||
      !staffData.position) {
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateData()) {
      return;
    }

    const actionHandler = action === 'update' ? updateStaff : createStaff;
    actionHandler(id, staffData).then((res) => {
      if (res) {
        onSubmit(res);
      }
    })
  };

  return (
    <div className="staff-form">
      <div className="staff-form-fields">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={staffData.email}
            onChange={(e) => setStaffData({ ...staffData, email: e.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={staffData.firstName}
            onChange={(e) => setStaffData({ ...staffData, firstName: e.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={staffData.lastName}
            onChange={(e) => setStaffData({ ...staffData, lastName: e.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="position">Position</label>
          <select
            id="position"
            value={staffData.position}
            onChange={(e) => setStaffData({ ...staffData, position: e.target.value as StaffPosition })}
          >
            <option value="">Select Position</option>
            <option value={StaffPosition.KITCHEN}>Kitchen</option>
            <option value={StaffPosition.SERVICE}>Service</option>
            <option value={StaffPosition.PR}>PR</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number"
            value={staffData.phoneNumber}
            onChange={(e) => setStaffData({ ...staffData, phoneNumber: e.target.value })}
          />
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        text={action === 'create' ? 'Create' : 'Update'}
      />
    </div>
  );
};

export default StaffDetailsForm;