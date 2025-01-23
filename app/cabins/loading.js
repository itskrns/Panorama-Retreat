import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid justify-center align-center">
      <Spinner />
      <p className="text-xl text-primary-100">Loading Cabins...</p>
    </div>
  );
}
