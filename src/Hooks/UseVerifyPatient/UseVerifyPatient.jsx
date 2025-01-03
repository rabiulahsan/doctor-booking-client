import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useVerifyPatient = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const [isPatient, setIsPatient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading || !user?.email) return;

    const verifyPatient = async () => {
      setIsLoading(true);
      try {
        const res = await axiosSecure.get(
          `/api/users/role?email=${user.email}`
        );
        setIsPatient(res.data.isUser);
      } catch (error) {
        console.error("Error verifying instructor:", error);
        setIsPatient(false); // Default to false on error
      } finally {
        setIsLoading(false);
      }
    };

    verifyPatient();
  }, [user?.email, loading, axiosSecure]);
  return [isPatient, isLoading];
};

export default useVerifyPatient;
