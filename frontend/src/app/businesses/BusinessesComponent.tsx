'use client'
import { useEffect, useState } from "react";
import { Business } from "../../types";
import { deleteBusiness, fetchBusinesses } from "../../apiService";
import { useRouter } from "next/navigation";
import Button from "../../components/common/button";
import './BusinessesComponent.scss'

const BusinessesComponent = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchBusinesses().then((fetchBusinesses) => {
      setBusinesses(fetchBusinesses);
    });
  }, []);

  const onClickView = (id: string) => {
    router.push(`/businesses/${id}`);
  }

  const onClickDelete = (id: string) => {
    deleteBusiness(id).then((success) => {
      if (success) {
        fetchBusinesses().then((fetchBusinesses) => {
          setBusinesses(fetchBusinesses);
        });
      } else {
        console.error("Failed to delete business");
      }
    });
  }

  return (
    <div className="businesses-list">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.id}</td>
              <td>{business.name}</td>
              <td>{business.location}</td>
              <td>{business.type}</td>
              <td>
                <div className="actions">
                  <Button onClick={() => onClickView(business.id)} text="View" />
                  <Button onClick={() => onClickDelete(business.id)} text="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessesComponent;