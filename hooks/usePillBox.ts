import { useEffect, useState } from "react";
import MedicinePills from "../model/MedicinePills";
import useProducts from "../hooks/useProducts";
import usePurchases from "../hooks/usePurchases";
import PurchaseDetail from "../model/PurchaseDetail";
import Purchase from "../model/Purchase";
import getDateDifference from "../utils/getDateDifference";

type PillBoxValues = {
  pills: MedicinePills[],
  isLoading: boolean,
  isError: boolean
}

const usePillBox = () => {
  const [ pills, setPills ] = useState<MedicinePills[]>([]);
  const { products, isError: isErrorProd, isLoading: isLoadingProd } = useProducts();
  const { purchases, isError: isErrorPurchases, isLoading: isLoadingPurchases } = usePurchases();

  useEffect(() => {
    if (products && purchases) {
      const pillsData: MedicinePills[] = getPills();
      setPills(pillsData);
    }
  }, [products, purchases]);

  const getPills = (): MedicinePills[] => {
    const discountedPurchases = purchases?.map((purchase: Purchase) => {
      const newPurchaseDetails = purchase.details.map(detail => ({
          ...detail, 
          received_date: purchase.received_date
      }));
  
      return {
        ...purchase,
        details: newPurchaseDetails
      };
    });
  
    const purchasesDetails = discountedPurchases?.reduce((arr: PurchaseDetail[], purchase: Purchase) => {
      return [...arr, ...purchase.details]
    }, []);


  
    const inventory = purchasesDetails?.reduce((obj: any, value) => {
      const key: string = value.product_id.toString();
      
      let discountedPills: number = 0
      if (value.received_date) {
        discountedPills = getDateDifference(value.received_date);
      }
      const newQuantity: number = value.quantity - discountedPills;

      if (key in obj) {
        obj[key] += newQuantity > 0 ? newQuantity : 0;
      } else {
        obj[key] = newQuantity > 0 ? newQuantity : 0;
      }
  
      return obj;
    }, {});
  
    const pills: MedicinePills[] = inventory ? Object.keys(inventory).map(itemKey => {
      const product = products?.find(product => product.id == parseInt(itemKey));
      if (product) {
        return {
          image: product.imagesUrl,
          name: product.name,
          mg: product.concentration,
          remainingPills: inventory[itemKey],
          remainingDays: inventory[itemKey],
        };
      }
      return {
        image: "",
        name: "Producto no encontrado",
        mg: "",
        remainingPills: inventory[itemKey],
        remainingDays: inventory[itemKey],
      };
    }) : [];

    return pills;
  }

  return {
    pills,
    isLoading: (isLoadingPurchases || isLoadingProd),
    isError: isErrorProd || isErrorPurchases
  } as PillBoxValues;
}

export default usePillBox;