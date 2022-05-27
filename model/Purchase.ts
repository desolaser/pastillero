import PurchaseDetail from './PurchaseDetail'

type Purchase = {
  purchase_id: number,
  details: PurchaseDetail[],
  received_date: Date
};

export default Purchase;