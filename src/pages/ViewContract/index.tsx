import { FaPen } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Goback from "../../components/GoBack";
import { useNotifications } from "../../customHooks";
import { useGetContractById } from "../../services/customHook";

const ViewBuyer = () => {
  const { buyerId = "" } = useParams();
  const { errorAlert } = useNotifications();
  const navigate = useNavigate();
  const { data: buyerDetails, isLoading: isBuyerDetailsLoading } =
    useGetContractById(buyerId, {
      onError: (err: any) => {
        errorAlert(err?.response?.data?.message || "Error occurred");
      },
    });

  if (isBuyerDetailsLoading) {
    return (
      <div className="flex flex-row justify-center items-center">
        <div className="animate-spin mt-[100px] border-4 w-[100px] h-[100px] border-t-light rounded-full"></div>
      </div>
    );
  }
  return (
    <Container>
      <div className="flex flex-row justify-between mt-4">
        <Goback />
        <Button
          className="w-[120px] bg-violet text-white"
          onClick={() => navigate(`/update/${buyerDetails.id}`)}
        >
          Edit <FaPen className="ml-2" />
        </Button>
      </div>
      <h1 className="font-bold text-3xl my-4">Buyer Details</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 shadow-md p-4">
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Company Name: </h2>
          <h2> {buyerDetails?.companyName}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Company Address: </h2>
          <h2> {buyerDetails?.companyAddress}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Company Email: </h2>
          <h2> {buyerDetails?.email}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Company Reg. Number: </h2>
          <h2> {buyerDetails?.companyRegistrationNumber}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Represented By: </h2>
          <h2> {buyerDetails?.representedBy}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Website: </h2>
          <h2> {buyerDetails?.website}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Telephone Fax: </h2>
          <h2> {buyerDetails?.telephoneFax}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Status: </h2>
          <h2> {buyerDetails?.status}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Nationality: </h2>
          <h2> {buyerDetails?.nationality}</h2>
        </div>
      </section>
    </Container>
  );
};

export default ViewBuyer;
