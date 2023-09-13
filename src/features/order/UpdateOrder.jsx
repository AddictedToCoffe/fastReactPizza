import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;

//PATCH take some data and add/change to original object on server
//PUT CHANGE whole object on server
//revalidation - react wie ze w action wyslalismy nowe dane wiec fetchuje je ponownie updatuje state i renderuje na nowo.
