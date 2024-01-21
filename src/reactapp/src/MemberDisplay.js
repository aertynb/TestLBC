import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`/api/member/${id}`);
        setMember(response.data);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {member && (
        <div>
          <h1>Member Details</h1>
          <p><strong>ID:</strong> {member.id}</p>
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Date of Creation:</strong> {member.dateOfCreation}</p>
        </div>
      )}
    </div>
  );
}

export default MemberDetails;
