import MedicinePills from "../model/MedicinePills";
import useProducts from "../hooks/useProducts";
import usePurchases from "../hooks/usePurchases";
import PurchaseDetail from "../model/PurchaseDetail";
import Purchase from "../model/Purchase";

type PillBoxValues = {
  pills: MedicinePills[] | void | undefined,
  isLoading: boolean,
  isError: boolean
}

const usePillBox = (userId: number) => {
  const { products, isError: isErrorProd, isLoading: isLoadingProd } = useProducts();
  const { purchases, isError: isErrorPurchases, isLoading: isLoadingPurchases } = usePurchases();

  const discountedPurchases = purchases?.map((purchase: Purchase) => {
    const actualDate: Date = new Date();
    const receivedDate: Date = new Date(purchase.received_date);
    const diffTime = Math.abs(actualDate.getTime() - receivedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const discountedPills = diffDays;
    const newPurchaseDetails = purchase.details.map(detail => {
      const newQuantity = detail.quantity - discountedPills

      return ({      
        ...detail, 
        quantity: newQuantity > 0 ? newQuantity : 0
      })
    })

    return {
      ...purchase,
      details: newPurchaseDetails
    }
  });

  const purchasesDetails = discountedPurchases?.reduce((arr: PurchaseDetail[], purchase: Purchase) => {
    return [...arr, ...purchase.details]
  }, []);

  const inventory = purchasesDetails?.reduce((obj: any, value) => {
    const key: string = value.product_id.toString();
    if (key in obj) {
      obj[key] += value.quantity;
    } else {
      obj[key] = value.quantity;
    }

    return obj;
  }, {});

  const pills = inventory && Object.keys(inventory).map(itemKey => {
    const product = products?.find(product => product.id == parseInt(itemKey));
    if (product) {
      return {        
        image: product.imagesUrl, 
        name: product.name,
        mg: product.concentration, 
        remainingPills: inventory[itemKey],
        remainingDays: inventory[itemKey],
      }
    }
  });

  return {
    pills,
    isLoading: (isLoadingPurchases || isLoadingProd) && !pills,
    isError: isErrorProd || isErrorPurchases
  } as PillBoxValues;
}

export default usePillBox;