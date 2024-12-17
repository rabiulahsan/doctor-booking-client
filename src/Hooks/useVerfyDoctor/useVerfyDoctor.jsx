import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const useVerfyDoctor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const [isDoctor, setIsDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loading || !user?.email) return;

    const verifyDoctor = async () => {
      setIsLoading(true);
      try {
        const res = await axiosSecure.get(
          `/api/doctors/role?email=${user.email}`
        );
        setIsDoctor(res.data.isDoctor);
      } catch (error) {
        console.error("Error verifying instructor:", error);
        setIsDoctor(false); // Default to false on error
      } finally {
        setIsLoading(false);
      }
    };

    verifyDoctor();
  }, [user?.email, loading, axiosSecure]);
  return [isDoctor, isLoading];
};

export default useVerfyDoctor;
