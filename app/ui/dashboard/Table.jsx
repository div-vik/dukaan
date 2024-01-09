import { FaCircle } from "react-icons/fa";

const data = [
  {
    orderID: "#281209",
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderID: "#281208",
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderID: "#281207",
    status: "Pending",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderID: "#281206",
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderID: "#281205",
    status: "Pending",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderID: "#281204",
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
];

const Table = () => {
  return (
    <div>
      <table className="w-full h-full">
        <thead className="rounded-[4px]">
          <tr className="bg-[#F2F2F2] rounded-[4px] text-left">
            <td className="py-2 px-3 font-[500]">Order ID</td>
            <td className="py-2 px-3 font-[500]">Status</td>
            <td className="py-2 px-3 font-[500]">Transaction ID</td>
            <td className="py-2 px-3 font-[500]">Refund date</td>
            <td className="py-2 px-3 font-[500] text-right">Order amount</td>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {data.map((item) => (
            <tr key={item.orderID} className="text-left">
              <td className="py-3 px-3 border-b-[1px] text-[#146EB4] font-[500]">
                {item.orderID}
              </td>
              <td className="py-3 px-3 border-b-[1px]">
                <div className="flex items-center gap-2">
                  <FaCircle
                    className={
                      item.status === "Successful"
                        ? "text-[#17B31B] w-3 h-3"
                        : "text-[#999999] w-3 h-3"
                    }
                  />
                  {item.status}
                </div>
              </td>
              <td className="py-3 px-3 border-b-[1px]">{item.transactionID}</td>
              <td className="py-3 px-3 border-b-[1px]">{item.refundDate}</td>
              <td className="py-3 px-3 border-b-[1px] text-right">
                {item.orderAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
