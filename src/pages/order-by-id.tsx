import { useParams } from "react-router-dom";
import useSWR from "swr";
import Loading from "../components/loading";
import { IconAlertTriangleFilled } from "@tabler/icons-react";
import Layout from "../components/layout";
import { Container, Alert, Divider,Button } from "@mantine/core";
import { Order } from "../lib/models";
import { Link } from "react-router-dom";

export default function OrderByIdPage() {
  const { orderId } = useParams();
  const { data: order, isLoading, error } = useSWR<Order>(`/order/${orderId}`);

  return (
    <Layout>
      <Container className="mt-4">
        {isLoading && !error && <Loading />}
        {error && (
          <Alert
            color="red"
            title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
            icon={<IconAlertTriangleFilled />}
          >
            {error.message}
          </Alert>
        )}

        {!!order && (
          <>
            <h1>Order Details</h1>
            {/* <p className="italic text-neutral-500 mb-4">Order Date: {new Date(order.order_date).toLocaleDateString()}</p> */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="col-span-2 px-4 space-y-2 py-4">
                <h3>Order Information</h3>
                <p><strong>Coffee ID:</strong> {order.coffee_id}</p>
                <p><strong>Quantity:</strong> {order.user}</p>
                <p><strong>Total Price:</strong> {order.count} บาท</p>
                <p><strong>Notes:</strong> {order.other}</p>
                <p className="justify-center w-full flex self-center text-red-500" > <strong>การบินไทยรักคุณเท่าฟ้า แต่เราเป็นคนธรรมดาที่รักคุณเท่าเดิม "ชอบคุณครับ"</strong></p>
              </div>
            </div>
            <Divider className="mt-4" />
            <Button
              component={Link}
              to="/menu"
              size="xs"
              variant="primary"
              className="flex items-center space-x-2 bg-red-600"
            >
              Back
            </Button>
          </>
        )}
      </Container>
    </Layout>
  );
}

