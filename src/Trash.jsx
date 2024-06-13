import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  is_private: false, // Initial state as boolean
};

const UpdateDataForm = () => {
  const [formData, setFormData] = useState(initialValues); // State for form data

  useEffect(() => {
    // Simulated API call to fetch data
    const fetchData = async () => {
      try {
        // Simulated API response setting is_private to true
        const data = {
          is_private: true,
        };
        setFormData(data); // Update formData state with API response data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Fetch data only once on component mount

  const handleSubmit = (values) => {
    // Handle form submission with formData
    console.log(formData); // formData will contain updated data from API
    console.log("values" , values); // values will contain Formik's state (if needed)
  };

  return (
    <Formik
      initialValues={formData} // Use formData as initialValues
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <div>
            <label>
              <Field type="checkbox" name="is_private" value={true} checked={formik.values.is_private} />
              Private
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="is_private" value={false} checked={!formik.values.is_private} />
              Publish
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateDataForm;
